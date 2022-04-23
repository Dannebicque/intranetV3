<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Apogee/ApogeeMaquette.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/09/2021 18:56
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
    protected EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function createSemestre($elpAnnee, Annee $annee, Ppn $pn): Semestre
    {
        $semestre = new Semestre();
        $semestre->setCodeElement($elpAnnee['COD_ELP']);
        $semestre->setLibelle($elpAnnee['LIB_ELP']);
        $semestre->setActif(false);
        $semestre->setMoisDebut(9);
        $semestre->setAnnee($annee);
        $semestre->setOrdreAnnee(substr($elpAnnee['COD_ELP'], -1));
        $semestre->setOrdreLmd(substr($elpAnnee['COD_ELP'], -1));
        $semestre->setPpnActif($pn);
        $this->entityManager->persist($semestre);

        return $semestre;
    }

    public function createSemestreDut($elpAnnee, Annee $annee, Ppn $pn): Semestre
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

    public function createElement($elp, Semestre $semestre): ApcRessource | ApcSae | null
    {
        if ('R' === substr($elp['LIC_ELP'], 1, 1)) {
            //ressource
            $res = new ApcRessource();
            $c = explode(' ', $elp['LIC_ELP']);
            $res->setLibelle($elp['LIB_ELP']);
            $res->setCodeMatiere($c[0]);
            $res->setCodeElement($elp['COD_ELP']);
            $res->addSemestre($semestre);
            $semestre->addApcSemestresRessource($res);
            $res->setNbNotes(2);
            $this->entityManager->persist($res);
            $res->setLibelleCourt($elp['LIC_ELP']);

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

        if ('S' === substr($elp['LIC_ELP'], 1, 1)) {
            //Sae
            $res = new ApcSae();
            $c = explode(' ', $elp['LIC_ELP']);
            $res->setLibelle($elp['LIB_ELP']);
            $res->setCodeMatiere($c[0]);
            $res->setCodeElement($elp['COD_ELP']);
            $res->setSemestre($semestre);
            $this->entityManager->persist($res);
            $res->setLibelleCourt($elp['LIC_ELP']);

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

        return null;
    }

    public function updateElement(ApcSae | ApcRessource $obj, $elpSemestre): ApcRessource | ApcSae
    {
        if ('CM' === $elpSemestre['COD_TYP_HEU']) {
            $obj->setCmPpn($elpSemestre['NBR_HEU_ELP']);
        }
        if ('TD' === $elpSemestre['COD_TYP_HEU']) {
            $obj->setTdPpn($elpSemestre['NBR_HEU_ELP']);
        }
        if ('TP' === $elpSemestre['COD_TYP_HEU']) {
            $obj->setTpPpn($elpSemestre['NBR_HEU_ELP']);
        }

        return $obj;
    }

    public function createCompetence($elpAnnee, Annee $annee): ApcCompetence
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

    public function createUe($elpUe, ApcCompetence $competence, Annee $annee): void
    {
        $semestres = [];
        foreach ($annee->getSemestres() as $sem) {
            $semestres[$sem->getOrdreLmd()] = $sem;
        }
        $ue = new Ue($semestres[$elpUe['COD_ELP'][4]]);
        $ue->setLibelle($elpUe['LIB_ELP']);
        $ue->setCodeElement($elpUe['COD_ELP']);
        $ue->setApcCompetence($competence);
        $ue->setNumeroUe(substr($elpUe['COD_ELP'], -1));
        $ue->setNbEcts($elpUe['NBR_CRD_ELP']);
        $this->entityManager->persist($ue);
    }

    public function createUeDut($elpUe, Semestre $objSemestre): Ue
    {
        $ue = new Ue($objSemestre);
        $ue->setLibelle($elpUe['LIB_ELP']);
        $ue->setCodeElement($elpUe['COD_ELP']);
        $ue->setNumeroUe(substr($elpUe['COD_ELP'], -1));
        $ue->setNbEcts(Tools::convertToFloat($elpUe['NBR_CRD_ELP']));
        $this->entityManager->persist($ue);

        return $ue;
    }

    public function createMatiere($elp, $ue, ?Ppn $pn): Matiere
    {
        //ressource
        $res = new Matiere();
        $c = explode(' ', $elp['LIC_ELP']);
        $res->setLibelle($elp['LIB_ELP']);
        $res->setCodeMatiere($c[0]);
        $res->setCodeElement($elp['COD_ELP']);
        $res->setUe($ue);
        $coeff = explode('(', $elp['LIB_ELP']);
        $toto = substr($coeff[count($coeff) - 1], 0, -1);
        $res->setNbEcts((float) (trim($toto)));
        $res->setLibelleCourt($elp['LIC_ELP']);
        $res->setCoefficient($res->getNbEcts());
        $res->setPpn($pn);

        $res->setNbNotes(2);
        $this->entityManager->persist($res);
        $res->setLibelleCourt($elp['LIC_ELP']);

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

    public function updateMatiere(Matiere $obj, array $elpSemestre): Matiere
    {
        if ('CM' === $elpSemestre['COD_TYP_HEU']) {
            $obj->setCmPpn($elpSemestre['NBR_HEU_ELP']);
            $obj->setCmFormation($elpSemestre['NBR_HEU_ELP']);
        }
        if ('TD' === $elpSemestre['COD_TYP_HEU']) {
            $obj->setTdPpn($elpSemestre['NBR_HEU_ELP']);
            $obj->setTdFormation($elpSemestre['NBR_HEU_ELP']);
        }
        if ('TP' === $elpSemestre['COD_TYP_HEU']) {
            $obj->setTpPpn($elpSemestre['NBR_HEU_ELP']);
            $obj->setTpFormation($elpSemestre['NBR_HEU_ELP']);
        }

        return $obj;
    }
}
