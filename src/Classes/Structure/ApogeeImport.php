<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Structure/ApogeeImport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/09/2021 11:21
 */

namespace App\Classes\Structure;

use App\Classes\Apogee\Apogee;
use App\Classes\Matieres\TypeMatiereManager;
use App\Entity\Annee;
use App\Entity\Semestre;
use App\Entity\Ue;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class ApogeeImport extends Apogee
{
    private typeMatiereManager $typeMatiereManager;

    public function __construct(
        ParameterBagInterface $parameterBag,
        typeMatiereManager $typeMatiereManager
    ) {
        parent::__construct($parameterBag);
        $this->typeMatiereManager = $typeMatiereManager;
    }

    public function getElementsFromAnnee(Annee $annee)
    {
        echo $annee->getCodeEtape();
        $this->connect();
        $stid = $this->conn->prepare('SELECT COD_ETP, COD_LSE FROM VET_REGROUPE_LSE WHERE COD_ETP=:codeannee AND COD_VRS_VET=:version');
        $stid->execute([':codeannee' => trim($annee->getCodeEtape()), ':version' => trim($annee->getCodeVersion())]);
        //permet de récupérer le code de la liste generale (L5RV1GEN)
        $liste = $stid->fetch();
        echo '-' . $liste['COD_LSE'];
        $listeElp = $this->conn->prepare('SELECT COD_LSE, COD_ELP FROM LSE_REGROUPE_ELP WHERE COD_LSE=:codeListe');
        $listeElp->execute([':codeListe' => trim($liste['COD_LSE'])]);
        $elp = $listeElp->fetch();

        $listeElpsSemComp = $this->conn->prepare('SELECT * FROM ELP_REGROUPE_LSE WHERE COD_ELP=:codeliste');
        echo '--' . $elp['COD_ELP'];
        $listeElpsSemComp->execute([':codeListe' => trim($elp['COD_ELP'])]);

        $elpSemComp = $listeElpsSemComp->fetch();
        echo '---' . $elpSemComp['COD_LSE'];
        $stid = $this->conn->prepare('SELECT LSE_REGROUPE_ELP.COD_LSE,  ELEMENT_PEDAGOGI.COD_ELP, ELEMENT_PEDAGOGI.COD_NEL,  ELEMENT_PEDAGOGI.LIB_ELP, ELEMENT_PEDAGOGI.LIC_ELP FROM LSE_REGROUPE_ELP INNER JOIN ELEMENT_PEDAGOGI ON ELEMENT_PEDAGOGI.COD_ELP=LSE_REGROUPE_ELP.COD_ELP WHERE COD_LSE=:elpSemComp');

        $stid->execute([':elpSemComp' => trim($elpSemComp['COD_LSE'])]);

        return $stid;
    }

    public function getElementsFromAnneeDut(Annee $annee)
    {
        echo $annee->getCodeEtape();
        $this->connect();
        $stid = $this->conn->prepare('SELECT COD_ETP, COD_LSE FROM VET_REGROUPE_LSE WHERE COD_ETP=:codeannee AND COD_VRS_VET=:version');
        $stid->execute([':codeannee' => trim($annee->getCodeEtape()), ':version' => trim($annee->getCodeVersion())]);
        //permet de récupérer le code de la liste generale (L5RV1GEN)
        $liste = $stid->fetch();
        echo '-' . $liste['COD_LSE'];
        $listeElp = $this->conn->prepare('SELECT LSE_REGROUPE_ELP.COD_LSE, ELEMENT_PEDAGOGI.COD_ELP, ELEMENT_PEDAGOGI.LIB_ELP FROM LSE_REGROUPE_ELP INNER JOIN ELEMENT_PEDAGOGI ON ELEMENT_PEDAGOGI.COD_ELP=LSE_REGROUPE_ELP.COD_ELP WHERE COD_LSE=:codeListe');
        $listeElp->execute([':codeListe' => trim($liste['COD_LSE'])]); //récupère le semestre


        return $listeElp;
    }

    public function getUesFromSemestreDut(Semestre $semestre)
    {
        $this->connect();
        $listeElpsSemComp = $this->conn->prepare('SELECT * FROM ELP_REGROUPE_LSE WHERE COD_ELP=:codeliste');
        echo '--' . $elp['COD_ELP'];
        $listeElpsSemComp->execute([':codeListe' => trim($semestre->getCodeElement())]);

        $elpSemComp = $listeElpsSemComp->fetch();
        echo '---' . $elpSemComp['COD_LSE'];
        $stid = $this->conn->prepare('SELECT LSE_REGROUPE_ELP.COD_LSE,  ELEMENT_PEDAGOGI.COD_ELP, ELEMENT_PEDAGOGI.COD_NEL,  ELEMENT_PEDAGOGI.LIB_ELP, ELEMENT_PEDAGOGI.LIC_ELP, ELEMENT_PEDAGOGI.NBR_CRD_ELP FROM LSE_REGROUPE_ELP INNER JOIN ELEMENT_PEDAGOGI ON ELEMENT_PEDAGOGI.COD_ELP=LSE_REGROUPE_ELP.COD_ELP WHERE COD_LSE=:elpSemComp');

        $stid->execute([':elpSemComp' => trim($elpSemComp['COD_LSE'])]);

        return $stid; //liste des UE
    }

    public function getMatieresFromUe(Ue $ue)
    {
        $this->connect();
        $stid = $this->conn->prepare('SELECT * FROM ELP_REGROUPE_LSE WHERE COD_ELP=:codElp');
        $stid->execute([':codElp' => trim($ue->getCodeElement())]);
        $liste = $stid->fetch();
        $stid = $this->conn->prepare('SELECT ELEMENT_PEDAGOGI.COD_ELP, ELEMENT_PEDAGOGI.LIB_ELP, ELEMENT_PEDAGOGI.NBR_CRD_ELP ,ELEMENT_PEDAGOGI.LIC_ELP, ELEMENT_PEDAGOGI.COD_NEL, ELP_CHG_TYP_HEU.COD_TYP_HEU, ELP_CHG_TYP_HEU.NBR_HEU_ELP FROM LSE_REGROUPE_ELP  INNER JOIN ELEMENT_PEDAGOGI ON LSE_REGROUPE_ELP.COD_ELP=ELEMENT_PEDAGOGI.COD_ELP INNER JOIN ELP_CHG_TYP_HEU ON ELP_CHG_TYP_HEU.COD_ELP=ELEMENT_PEDAGOGI.COD_ELP WHERE COD_LSE=:liste');

        $stid->execute([':liste' => trim($liste['COD_LSE'])]);

        return $stid;
    }


    public function getElementsFromSemestre(string $codElp)
    {
        $this->connect();
        $stid = $this->conn->prepare('SELECT * FROM ELP_REGROUPE_LSE WHERE COD_ELP=:codElp');
        $stid->execute([':codElp' => trim($codElp)]);
        $liste = $stid->fetch();
        $stid = $this->conn->prepare('SELECT ELEMENT_PEDAGOGI.COD_ELP, ELEMENT_PEDAGOGI.LIB_ELP, ELEMENT_PEDAGOGI.NBR_CRD_ELP ,ELEMENT_PEDAGOGI.LIC_ELP, ELEMENT_PEDAGOGI.COD_NEL, ELP_CHG_TYP_HEU.COD_TYP_HEU, ELP_CHG_TYP_HEU.NBR_HEU_ELP FROM LSE_REGROUPE_ELP  INNER JOIN ELEMENT_PEDAGOGI ON LSE_REGROUPE_ELP.COD_ELP=ELEMENT_PEDAGOGI.COD_ELP INNER JOIN ELP_CHG_TYP_HEU ON ELP_CHG_TYP_HEU.COD_ELP=ELEMENT_PEDAGOGI.COD_ELP WHERE COD_LSE=:liste');

        $stid->execute([':liste' => trim($liste['COD_LSE'])]);

        return $stid;
    }

    public function getCompUesFromSemestre(string $codElp)
    {
        $this->connect();
        $stid = $this->conn->prepare('SELECT * FROM ELP_REGROUPE_LSE WHERE COD_ELP=:codElp');
        $stid->execute([':codElp' => trim($codElp)]);
        $liste = $stid->fetch();

        $stid = $this->conn->prepare('SELECT * FROM ELP_REGROUPE_LSE WHERE COD_ELP=:liste');
        $stid->execute([':liste' => trim($liste['COD_ELP'])]);
        $lst = $stid->fetch();

        $stid = $this->conn->prepare('SELECT ELEMENT_PEDAGOGI.COD_ELP, ELEMENT_PEDAGOGI.NBR_CRD_ELP , ELEMENT_PEDAGOGI.LIB_ELP, ELEMENT_PEDAGOGI.LIC_ELP, ELEMENT_PEDAGOGI.COD_NEL FROM LSE_REGROUPE_ELP INNER JOIN ELEMENT_PEDAGOGI ON LSE_REGROUPE_ELP.COD_ELP=ELEMENT_PEDAGOGI.COD_ELP WHERE COD_LSE=:lse');

        $stid->execute([':lse' => trim($lst['COD_LSE'])]);

        return $stid;
    }


}
