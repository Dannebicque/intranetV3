<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Apogee/ApogeeGroupe.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/08/2021 08:40
 */

namespace App\Classes\Apogee;

use App\Entity\Semestre;

class ApogeeGroupe extends Apogee
{
    public function getGroupesSemestre(Semestre $semestre)
    {
        $this->connect();
        $stid = $this->conn->prepare(
            'SELECT GROUPE.COD_GPE, GROUPE.LIB_GPE, GROUPE.COD_EXT_GPE FROM GROUPE INNER JOIN GPE_OBJ ON GROUPE.COD_GPE=GPE_OBJ.COD_GPE WHERE GPE_OBJ.COD_ELP=:semestre AND GROUPE.DAA_FIN_VAL_GPE IS NULL ORDER BY GROUPE.COD_EXT_GPE ASC');
        $stid->execute([':semestre' => $semestre->getCodeElement()]);

//        SELECT GROUPE.COD_GPE, GROUPE.LIB_GPE, GROUPE.COD_EXT_GPE FROM GROUPE INNER JOIN GPE_OBJ ON GROUPE.COD_GPE=GPE_OBJ.COD_GPE WHERE GPE_OBJ.COD_ELP='TSBZ1' AND GROUPE.DAA_FIN_VAL_GPE IS NULL
        return $stid;
    }

    public function getHierarchieGroupesSemestre(Semestre $semestre)
    {
        $this->connect();
        $stid = $this->conn->prepare(
            'SELECT GPE_INCLUS_GPE.COD_GPE_1, GPE_INCLUS_GPE.COD_GPE_2, GR1.COD_EXT_GPE, GR2.COD_EXT_GPE FROM GPE_INCLUS_GPE INNER JOIN GPE_OBJ ON GPE_INCLUS_GPE.COD_GPE_1=GPE_OBJ.COD_GPE INNER JOIN GROUPE GR1 ON GPE_INCLUS_GPE.COD_GPE_1 = GR1.COD_GPE INNER JOIN GROUPE GR2 ON GPE_INCLUS_GPE.COD_GPE_2 = GR2.COD_GPE WHERE GPE_OBJ.COD_ELP=:semestre');
        $stid->execute([':semestre' => $semestre->getCodeElement()]);

        //SELECT GPE_INCLUS_GPE.COD_GPE_1, GPE_INCLUS_GPE.COD_GPE_2 FROM GPE_INCLUS_GPE INNER JOIN GPE_OBJ ON GPE_INCLUS_GPE.COD_GPE_1=GPE_OBJ.COD_GPE WHERE GPE_OBJ.COD_ELP='TSBZ1';
        return $stid;
    }

    public function getEtudiantsGroupesSemestre(Semestre $semestre)
    {
        $this->connect();
        $stid = $this->conn->prepare(
            'SELECT INDIVIDU.COD_ETU, GROUPE.COD_EXT_GPE FROM IND_AFFECTE_GPE INNER JOIN GROUPE ON GROUPE.COD_GPE=IND_AFFECTE_GPE.COD_GPE INNER JOIN INDIVIDU ON INDIVIDU.COD_IND=IND_AFFECTE_GPE.COD_IND INNER JOIN GPE_OBJ ON GPE_OBJ.COD_GPE=IND_AFFECTE_GPE.COD_GPE WHERE GPE_OBJ.COD_ELP=:semestre');
        $stid->execute([':semestre' => $semestre->getCodeElement()]);

        return $stid;
    }
}
