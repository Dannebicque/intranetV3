<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Apogee/ApogeeMaquette.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/02/2024 21:57
 */

namespace App\Classes\Apogee;

use App\Entity\Annee;
use App\Entity\ApcCompetence;
use App\Entity\ApcNiveau;
use App\Entity\ApcRessource;
use App\Entity\ApcSae;
use App\Entity\Matiere;
use App\Entity\Ppn;
use App\Entity\Semestre;
use App\Entity\Ue;
use App\Utils\Tools;
use Doctrine\ORM\EntityManagerInterface;

class ApogeeMaquette
{
    //todo: encore utilisé ?
    public function __construct(protected EntityManagerInterface $entityManager)
    {
    }

    public function createSemestre(array $elpAnnee, Annee $annee, Ppn $pn): Semestre
    {
        $semestre = new Semestre();
        $semestre->setCodeElement($elpAnnee['COD_ELP']);
        $semestre->setLibelle($elpAnnee['LIB_ELP']);
        $semestre->setActif(false);
        $semestre->setMoisDebut(9);
        $semestre->setAnnee($annee);
        $semestre->setOrdreAnnee((int) substr($elpAnnee['COD_ELP'], -1));
        $semestre->setOrdreLmd((int) substr($elpAnnee['COD_ELP'], -1));
        $semestre->setPpnActif($pn);
        $this->entityManager->persist($semestre);

        return $semestre;
    }

    public function createSemestreDut(array $elpAnnee, Annee $annee, Ppn $pn): Semestre
    {
        $semestre = new Semestre();
        $semestre->setCodeElement($elpAnnee['COD_ELP']);
        $semestre->setLibelle($elpAnnee['LIB_ELP']);
        $semestre->setActif(false);
        $semestre->setMoisDebut(9);
        $semestre->setAnnee($annee);
        $ordreLmd = $elpAnnee['COD_ELP'][3];
        $ordreAnnee = 0 === $ordreLmd % 2 ? 2 : 1;
        $semestre->setOrdreAnnee($ordreAnnee);
        $semestre->setOrdreLmd($ordreLmd);
        $semestre->setPpnActif($pn);
        $this->entityManager->persist($semestre);

        return $semestre;
    }

    public function createElement(array $elp, Semestre $semestre): ApcRessource|ApcSae|null
    {
        if ('R' === substr($elp['LIC_ELP'], 1, 1)) {
            // ressource
            $res = new ApcRessource();
            $c = explode(' ', (string) $elp['LIC_ELP']);
            $res->setLibelle($elp['LIB_ELP']);
            $res->setCodeMatiere($c[0]);
            $res->setCodeElement($elp['COD_ELP']);
            $res->addSemestre($semestre);
            $semestre->addApcSemestresRessource($res);
            $res->setNbNotes(2);
            $this->entityManager->persist($res);
            $res->setLibelleCourt($elp['LIC_ELP']);

            return $this->setHeuresApc($elp, $res);
        }

        if ('S' === substr($elp['LIC_ELP'], 1, 1)) {
            // Sae
            $res = new ApcSae();
            $c = explode(' ', (string) $elp['LIC_ELP']);
            $res->setLibelle($elp['LIB_ELP']);
            $res->setCodeMatiere($c[0]);
            $res->setCodeElement($elp['COD_ELP']);
            $res->setSemestre($semestre);//todo: gérer mutualisé ?
            $this->entityManager->persist($res);
            $res->setLibelleCourt($elp['LIC_ELP']);

            return $this->setHeuresApc($elp, $res);
        }

        return null;
    }

    public function updateElement(ApcSae|ApcRessource $obj, array $elpSemestre): ApcRessource|ApcSae
    {
        return $this->setHeuresApc($elpSemestre, $obj);
    }

    public function createCompetence(array $elpAnnee, Annee $annee): ApcCompetence
    {
        $competence = new ApcCompetence($annee->getDiplome());
        $competence->setLibelle($elpAnnee['LIB_ELP']);
        $competence->setCouleur('c'.substr($elpAnnee['COD_ELP'], -1));
        $competence->setNomCourt($elpAnnee['LIC_ELP']);
        $this->entityManager->persist($competence);
        $niveau = new ApcNiveau($competence);
        $niveau->setLibelle('Niveau 1');
        $niveau->setAnnee($annee);
        $niveau->setOrdre(1);
        $this->entityManager->persist($niveau);

        return $competence;
    }

    public function createUe(array $elpUe, ApcCompetence $competence, Annee $annee): void
    {
        $semestres = [];
        foreach ($annee->getSemestres() as $sem) {
            $semestres[$sem->getOrdreLmd()] = $sem;
        }
        $ue = new Ue($semestres[$elpUe['COD_ELP'][4]]);
        $ue->setLibelle($elpUe['LIB_ELP']);
        $ue->setCodeElement($elpUe['COD_ELP']);
        $ue->setApcCompetence($competence);
        $ue->setNumeroUe((int) substr($elpUe['COD_ELP'], -1));
        $ue->setNbEcts($elpUe['NBR_CRD_ELP']);
        $this->entityManager->persist($ue);
    }

    public function createUeDut(array $elpUe, Semestre $objSemestre): Ue
    {
        $ue = new Ue($objSemestre);
        $ue->setLibelle($elpUe['LIB_ELP']);
        $ue->setCodeElement($elpUe['COD_ELP']);
        $ue->setNumeroUe((int) substr($elpUe['COD_ELP'], -1));
        $ue->setNbEcts(Tools::convertToFloat($elpUe['NBR_CRD_ELP']));
        $this->entityManager->persist($ue);

        return $ue;
    }

    public function createMatiere(array $elp, Ue $ue, ?Ppn $pn): Matiere
    {
        $res = new Matiere();
        $c = explode(' ', (string) $elp['LIC_ELP']);
        $res->setLibelle($elp['LIB_ELP']);
        $res->setCodeMatiere($c[0]);
        $res->setCodeElement($elp['COD_ELP']);
        $res->setUe($ue);
        $coeff = explode('(', (string) $elp['LIB_ELP']);
        $toto = substr($coeff[count($coeff) - 1], 0, -1);
        $res->setNbEcts((float) (trim($toto)));
        $res->setLibelleCourt($elp['LIC_ELP']);
        $res->setCoefficient($res->getNbEcts());
        $res->setPpn($pn);

        $res->setNbNotes(2);
        $this->entityManager->persist($res);
        $res->setLibelleCourt($elp['LIC_ELP']);

        return $this->setHeuresMatiere($elp, $res);
    }

    public function updateMatiere(Matiere $obj, array $elpSemestre): Matiere
    {
        return $this->setHeuresMatiere($elpSemestre, $obj);
    }

    private function setHeuresMatiere(array $elp, Matiere $res): Matiere
    {
        if ('CM' === $elp['COD_TYP_HEU']) {
            $res->setCmPpn($elp['NBR_HEU_ELP']);
            $res->setCmFormation($elp['NBR_HEU_ELP']);
        }
        if ('TD' === $elp['COD_TYP_HEU']) {
            $res->setTdPpn($elp['NBR_HEU_ELP']);
            $res->setTdFormation($elp['NBR_HEU_ELP']);
        }
        if ('TP' === $elp['COD_TYP_HEU']) {
            $res->setTpPpn($elp['NBR_HEU_ELP']);
            $res->setTpFormation($elp['NBR_HEU_ELP']);
        }

        return $res;
    }

    private function setHeuresApc(array $elp, ApcSae|ApcRessource $res): ApcSae|ApcRessource
    {
        if ('CM' === $elp['COD_TYP_HEU']) {
            $res->setCmPpn($elp['NBR_HEU_ELP']);
        }
        if ('TD' === $elp['COD_TYP_HEU']) {
            $res->setTdPpn($elp['NBR_HEU_ELP']);
        }
        if ('TP' === $elp['COD_TYP_HEU']) {
            $res->setTpPpn($elp['NBR_HEU_ELP']);
        }

        return $res;
    }
}
