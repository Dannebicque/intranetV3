<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Groupes/GenereGroupes.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 08:52
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
    /**
     * @var Diplome
     */
    protected Diplome $diplome;
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
        $this->diplome = $diplome;
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

        for ($i = 1; $i <= $nbTp; $i += 2) {
            $this->genereTp($tds, $i);
            $this->genereTp($tds, $i + 1);
        }

        $this->entityManager->flush();
    }

    private function genereCm(int $i): Groupe
    {
        $cm = new Groupe();
        $code = substr($this->diplome->getSigle(), 0, 2).'-S'.$this->semestre->getOrdreLmd().'-CM'.$i;
        $codeApogee = 'R'.substr($this->diplome->getSigle(), 0, 2).$this->semestre->getOrdreLmd().'CM'.$i;
        $cm->setTypeGroupe($this->tgCm);
        $cm->setLibelle($code);
        $cm->setOrdre($i);
        $cm->setCodeApogee($codeApogee);
        $this->entityManager->persist($cm);

        return $cm;
    }

    private function genereTd(array $cms, int $ordre): Groupe
    {
        $cm = $cms[0];
        $td = new Groupe();
        $code = substr($this->diplome->getSigle(), 0, 2).'-S'.$this->semestre->getOrdreLmd().'-TD'.$ordre;
        $codeApogee = 'R'.substr($this->diplome->getSigle(), 0, 2).$this->semestre->getOrdreLmd().'TD'.$ordre;
        $td->setTypeGroupe($this->tgTd);
        $td->setLibelle($code);
        $td->setOrdre($ordre);
        $td->setCodeApogee($codeApogee);
        $td->setParent($cm);
        $this->entityManager->persist($td);

        return $td;
    }

    private function genereTp(array $tds, int $ordre): Groupe
    {
        $idTd = (int) ($ordre - floor($ordre / 2));

        if (0 === $ordre % 2) {
            $ordreTp = 'B';
        } else {
            $ordreTp = 'A';
        }
        $tp = new Groupe();
        $code = substr($this->diplome->getSigle(), 0, 2).'-S'.$this->semestre->getOrdreLmd().'-TP'.$idTd.$ordreTp;
        $codeApogee = 'R'.substr($this->diplome->getSigle(), 0, 2).$this->semestre->getOrdreLmd().'TP'.$idTd.$ordreTp;

        $tp->setTypeGroupe($this->tgTp);
        $tp->setLibelle($code);
        $tp->setOrdre($ordre);
        $tp->setCodeApogee($codeApogee);
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
