<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Apogee/ApogeeGroupe.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/09/2022 17:17
 */

namespace App\Classes\Apogee;

use App\Entity\Semestre;
use PDOStatement;

class ApogeeGroupe extends Apogee
{
    public function getGroupesSemestre(Semestre $semestre): bool|PDOStatement
    {
        $this->connect();
        $stid = $this->conn->prepare(
            'SELECT GROUPE.COD_GPE, GROUPE.LIB_GPE, GROUPE.COD_EXT_GPE FROM GROUPE INNER JOIN GPE_OBJ ON GROUPE.COD_GPE=GPE_OBJ.COD_GPE WHERE GPE_OBJ.COD_ETP=:semestre AND GROUPE.DAA_FIN_VAL_GPE IS NULL ORDER BY GROUPE.COD_EXT_GPE ASC');
        $stid->execute([':semestre' => $semestre->getAnnee()->getCodeEtape()]);

//        SELECT GROUPE.COD_GPE, GROUPE.LIB_GPE, GROUPE.COD_EXT_GPE FROM GROUPE INNER JOIN GPE_OBJ ON GROUPE.COD_GPE=GPE_OBJ.COD_GPE WHERE GPE_OBJ.COD_ELP='5D4Z1'
//        SELECT * FROM GPE_OBJ WHERE GPE_OBJ.COD_ELP='5D4Z1';
//        SELECT GROUPE.COD_GPE, GROUPE.LIB_GPE, GROUPE.COD_EXT_GPE, GROUPE.COD_COL FROM GROUPE INNER JOIN GPE_OBJ ON GROUPE.COD_GPE=GPE_OBJ.COD_GPE WHERE GPE_OBJ.COD_ETP='5TD4Z1' AND GROUPE.DAA_FIN_VAL_GPE IS NULL ORDER BY GROUPE.COD_EXT_GPE ASC;
        return $stid;
    }

    public function getHierarchieGroupesSemestre(Semestre $semestre): bool|PDOStatement
    {
        $this->connect();
        $stid = $this->conn->prepare(
            'SELECT GPE_INCLUS_GPE.COD_GPE_1, GPE_INCLUS_GPE.COD_GPE_2, GR1.COD_EXT_GPE, GR2.COD_EXT_GPE FROM GPE_INCLUS_GPE INNER JOIN GPE_OBJ ON GPE_INCLUS_GPE.COD_GPE_1=GPE_OBJ.COD_GPE INNER JOIN GROUPE GR1 ON GPE_INCLUS_GPE.COD_GPE_1 = GR1.COD_GPE INNER JOIN GROUPE GR2 ON GPE_INCLUS_GPE.COD_GPE_2 = GR2.COD_GPE WHERE GPE_OBJ.COD_ELP=:semestre');
        $stid->execute([':semestre' => $semestre->getCodeElement()]);

        // SELECT GPE_INCLUS_GPE.COD_GPE_1, GPE_INCLUS_GPE.COD_GPE_2 FROM GPE_INCLUS_GPE INNER JOIN GPE_OBJ ON GPE_INCLUS_GPE.COD_GPE_1=GPE_OBJ.COD_GPE WHERE GPE_OBJ.COD_ELP='TSBZ1';
        return $stid;
    }

    public function getEtudiantsGroupesSemestre(Semestre $semestre): bool|PDOStatement
    {
        $this->connect();
        $stid = $this->conn->prepare(
            'SELECT INDIVIDU.COD_ETU, GROUPE.COD_EXT_GPE FROM IND_AFFECTE_GPE INNER JOIN GROUPE ON GROUPE.COD_GPE=IND_AFFECTE_GPE.COD_GPE INNER JOIN INDIVIDU ON INDIVIDU.COD_IND=IND_AFFECTE_GPE.COD_IND INNER JOIN GPE_OBJ ON GPE_OBJ.COD_GPE=IND_AFFECTE_GPE.COD_GPE INNER JOIN INS_ADM_ETP ON INDIVIDU.COD_IND = INS_ADM_ETP.COD_IND WHERE INS_ADM_ETP.COD_ETP=:semestre AND INS_ADM_ETP.COD_VRS_VET=:version');

        $stid->execute([
            ':semestre' => $semestre->getAnnee()->getCodeEtape(),
            ':version' => $semestre->getAnnee()->getCodeVersion(),
        ]);

        return $stid;
    }
}
