<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Apogee/ApogeeMaquette.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/08/2021 08:40
 */

namespace App\Classes\Apogee;

use App\Entity\Annee;
use App\Entity\Semestre;
use App\Entity\Ue;

class ApogeeMaquette extends Apogee
{
    public function getSemestresAnnee(Annee $annee)
    {
        $this->connect();
        $stid = $this->conn->prepare('SELECT ELEMENT_PEDAGOGI.LIB_ELP, ELEMENT_PEDAGOGI.LIC_ELP, ELEMENT_PEDAGOGI.COD_ELP, ELEMENT_PEDAGOGI.COD_NEL, ELEMENT_PEDAGOGI.NBR_CRD_ELP FROM LSE_REGROUPE_ELP INNER JOIN ELEMENT_PEDAGOGI ON ELEMENT_PEDAGOGI.COD_ELP = LSE_REGROUPE_ELP.COD_ELP WHERE LSE_REGROUPE_ELP.COD_LSE=:codeliste');
        $stid->execute([':codeliste' => 'L' . $annee->getCodeEtape()]);

        return $stid;
    }

    public function getUesSemestre(Semestre $semestre)
    {
        $this->connect();
        $stid = $this->conn->prepare('SELECT ELEMENT_PEDAGOGI.LIB_ELP, ELEMENT_PEDAGOGI.LIC_ELP, ELEMENT_PEDAGOGI.COD_ELP, ELEMENT_PEDAGOGI.COD_NEL, ELEMENT_PEDAGOGI.NBR_CRD_ELP FROM LSE_REGROUPE_ELP INNER JOIN ELEMENT_PEDAGOGI ON ELEMENT_PEDAGOGI.COD_ELP = LSE_REGROUPE_ELP.COD_ELP WHERE LSE_REGROUPE_ELP.COD_LSE=:codeliste');
        $stid->execute([':codeliste' => 'L' . $semestre->getCodeElement()]);

        return $stid;
    }

    public function getMatieresUe(Ue $ue)
    {
        $this->connect();
        $stid = $this->conn->prepare('SELECT ELEMENT_PEDAGOGI.LIB_ELP, ELEMENT_PEDAGOGI.LIC_ELP, ELEMENT_PEDAGOGI.COD_ELP, ELEMENT_PEDAGOGI.COD_NEL, ELEMENT_PEDAGOGI.NBR_CRD_ELP FROM LSE_REGROUPE_ELP INNER JOIN ELEMENT_PEDAGOGI ON ELEMENT_PEDAGOGI.COD_ELP = LSE_REGROUPE_ELP.COD_ELP WHERE LSE_REGROUPE_ELP.COD_LSE=:codeliste');
        $stid->execute([':codeliste' => 'L' . $ue->getCodeElement()]);

        return $stid;
    }
}
