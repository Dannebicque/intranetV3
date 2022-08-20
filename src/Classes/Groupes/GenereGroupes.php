<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Groupes/GenereGroupes.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/08/2022 17:04
 */

namespace App\Classes\Groupes;

use App\Entity\Diplome;
use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\Enums\TypeGroupeEnum;
use App\Repository\TypeGroupeRepository;
use Doctrine\ORM\EntityManagerInterface;

class GenereGroupes
{
    private Semestre $semestre;

    private ?TypeGroupe $tgCm;
    private ?TypeGroupe $tgTp;
    private ?TypeGroupe $tgTd;
    private string $format;

    public function __construct(
        protected EntityManagerInterface $entityManager,
        protected TypeGroupeRepository $typeGroupeRepository,
    ) {
    }

    public function genereGroupesSemestre(
        Semestre $semestre,
        Diplome $diplome,
        string $format,
        int $nbCm,
        int $nbTd,
        int $nbTp
    ): void {
        $this->semestre = $semestre;
        $this->format = $format;
        $cms = [];
        $this->getTypeGroupe($diplome);
        // On génére les types de groupes
        for ($i = 1; $i <= $nbCm; ++$i) {
            $cms[] = $this->genereCm($i);
        }

        $tds = [];
        for ($i = 1; $i <= $nbTd; ++$i) {
            $tds[$i] = $this->genereTd($cms, $i);
        }

        $tps = [];
        for ($i = 1; $i <= $nbTp; $i = $i+2) {
            $tps[$i] = $this->genereTp($tds, $i);
            $tps[$i+1] = $this->genereTp($tds, $i+1);
        }

        $this->entityManager->flush();
    }

    private function genereCm(int $i): Groupe
    {
        $cm = new Groupe();
        $cm->setTypeGroupe($this->tgCm);
        $cm->setLibelle('CM '.$this->semestre->getLibelle());
        $cm->setOrdre($i);
        $cm->setCodeApogee($this->semestre->getCodeElement().'CM');
        $this->entityManager->persist($cm);

        return $cm;
    }

    private function genereTd(array $cms, int $ordre): Groupe
    {
        $cm = $cms[0];
        $td = new Groupe();
        $td->setTypeGroupe($this->tgTd);
        $td->setLibelle($this->genereCodeTd($ordre));
        $td->setOrdre($ordre);
        $td->setCodeApogee($this->semestre->getCodeElement().'TD0'.$ordre);
        $td->setParent($cm);
        $this->entityManager->persist($td);

        return $td;
    }

    private function genereTp(array $tds, int $ordre): Groupe
    {
        $idTd = (int) ($ordre - floor($ordre / 2));

        $libelle = $this->genereCodeTp($idTd, $ordre);
        $tp = new Groupe();
        $tp->setTypeGroupe($this->tgTp);
        $tp->setLibelle('TP'.$libelle);
        $tp->setOrdre($ordre);
        $tp->setCodeApogee($this->semestre->getCodeElement().'TP'.$libelle);
        $tp->setParent($tds[$idTd]);
        $this->entityManager->persist($tp);

        return $tp;
    }

    private function genereCodeTd(int $ordre): string
    {
        if ('alpha' === $this->format) {
            switch ($ordre) {
                case 1:
                    return 'TD AB';
                case 2:
                    return 'TD CD';
                case 3:
                    return 'TD EF';
                case 4:
                    return 'TD GH';
                case 5:
                    return 'TD IJ';
            }
        }

        return 'TD '.$ordre;
    }

    private function genereCodeTp(int $idTd, int $ordre): string
    {
        if (0 === $ordre % 2) {
            $ordreTp = 2;
        } else {
            $ordreTp = 1;
        }

        if ('alpha' === $this->format) {
            return chr($ordre + 64);
        }

        return $idTd.$ordreTp;
    }

    private function getTypeGroupe(Diplome $diplome): void
    {
        $tgs = $this->typeGroupeRepository->findByDiplomeAndOrdreSemestre($diplome, $this->semestre->getOrdreLmd());
        dump($tgs);
        foreach ($tgs as $tg) {
            if (TypeGroupeEnum::TYPE_GROUPE_CM === $tg->getType()) {
                $this->tgCm = $tg;
            } elseif (TypeGroupeEnum::TYPE_GROUPE_TD === $tg->getType()) {
                $this->tgTd = $tg;
            } elseif (TypeGroupeEnum::TYPE_GROUPE_TP === $tg->getType()) {
                $this->tgTp = $tg;
            }
        }
    }
}
