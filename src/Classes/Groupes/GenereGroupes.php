<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Groupes/GenereGroupes.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/06/2021 10:28
 */

namespace App\Classes\Groupes;

use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use Doctrine\ORM\EntityManagerInterface;

class GenereGroupes
{
    protected EntityManagerInterface $entityManager;
    private Semestre $semestre;

    private TypeGroupe $tgCm;
    private TypeGroupe $tgTp;
    private TypeGroupe $tgTd;
    private string $format;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function genereGroupesSemestre(Semestre $semestre, $format)
    {
        $this->semestre = $semestre;
        $this->format = $format;
        $this->genereTypeGroupes();

        // On génére les types de groupes
        $cm = $this->genereCm();

        $tds = [];
        for ($i = 1; $i <= $semestre->getNbGroupesTd(); ++$i) {
            $tds[] = $this->genereTd($cm, $i);
        }
        $tps = [];
        for ($i = 1; $i <= $semestre->getNbGroupesTP(); ++$i) {
            $tps[] = $this->genereTp($tds, $i);
        }

        $this->entityManager->flush();
    }

    private function genereTypeGroupes()
    {
        $this->tgCm = new TypeGroupe($this->semestre);
        $this->tgCm->setLibelle('CM');
        $this->tgCm->setType(TypeGroupe::TYPE_GROUPE_CM);
        $this->entityManager->persist($this->tgCm);

        $this->tgTd = new TypeGroupe($this->semestre);
        $this->tgTd->setLibelle('TD');
        $this->tgTd->setType(TypeGroupe::TYPE_GROUPE_TD);
        $this->tgTd->setDefaut(true);
        $this->entityManager->persist($this->tgTd);

        $this->tgTp = new TypeGroupe($this->semestre);
        $this->tgTp->setLibelle('TP');
        $this->tgTp->setType(TypeGroupe::TYPE_GROUPE_TP);
        $this->entityManager->persist($this->tgTp);
    }

    private function genereCm()
    {
        $cm = new Groupe();
        $cm->setTypeGroupe($this->tgCm);
        $cm->setLibelle('CM ' . $this->semestre->getLibelle());
        $cm->setOrdre(1);
        $cm->setCodeApogee($this->semestre->getCodeElement() . 'CM');
        $this->entityManager->persist($cm);

        return $cm;
    }

    private function genereTd(Groupe $cm, int $ordre)
    {
        $td = new Groupe();
        $td->setTypeGroupe($this->tgTd);
        $td->setLibelle($this->genereLibelle('TD ', $ordre));
        $td->setOrdre($ordre);
        $td->setCodeApogee($this->semestre->getCodeElement() . 'TD0' . $ordre);
        $td->setParent($cm);
        $this->entityManager->persist($td);

        return $td;
    }

    private function genereTp(array $td, int $ordre)
    {
        $idTd = $ordre - floor($ordre / 2);


        $libelle = $this->genereCodeTp($idTd, $ordre);
        $tp = new Groupe();
        $tp->setTypeGroupe($this->tgTp);
        $tp->setLibelle('TP' . $libelle);
        $tp->setOrdre($ordre);
        $tp->setCodeApogee($this->semestre->getCodeElement() . 'TP' . $libelle);
        $tp->setParent($td[$idTd - 1]);
        $this->entityManager->persist($tp);

        return $td;
    }

    private function genereCodeTp(int $idTd, int $ordre)
    {
        if (0 === $ordre % 2) {
            $ordreTp = 2;
        } else {
            $ordreTp = 1;
        }

        if ($this->format === 'alpha') {
            return chr($ordre + 64);
        }

        return $idTd . $ordreTp;
    }
}
