<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Apogee/ApogeeEtudiant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/07/2021 17:05
 */

namespace App\Classes\Apogee;

use App\Entity\Annee;
use App\Utils\Tools;
use function array_key_exists;

class ApogeeEtudiant extends Apogee
{
    public function getEtudiant($etudiant)
    {
        $this->connect();
        $stid = $this->conn->prepare(
            "SELECT INDIVIDU.COD_ETU, INDIVIDU.COD_NNE_IND, INDIVIDU.COD_CLE_NNE_IND, INDIVIDU.DATE_NAI_IND, DAA_ENT_ETB, LIB_NOM_PAT_IND, LIB_PR1_IND, NUM_TEL, COD_SEX_ETU, LIB_AD1, LIB_AD2, LIB_AD3, COD_BDI, COD_COM, COD_PAY, DAT_MOD_IND, DAA_ETB, IND_BAC.DAA_OBT_BAC_IBA, COD_BAC FROM  INDIVIDU INNER JOIN ADRESSE ON ADRESSE.COD_IND = INDIVIDU.COD_IND INNER JOIN IND_BAC ON INDIVIDU.COD_IND=IND_BAC.COD_IND WHERE INDIVIDU.COD_ETU=:etudiant AND (INDIVIDU.COD_ANU_SRT_IND IS NULL OR INDIVIDU.COD_ANU_SRT_IND='')");
        $stid->execute([':etudiant' => $etudiant]);

        return $stid;
    }

    /**
     * @param $data
     * @param $tBac
     *
     * @return array[]
     *
     * @throws \Exception
     */
    public function transformeApogeeToArray($data, $tBac): array
    {
        // COD_ETU, COD_NNE_IND, DATE_NAI_IND, DAA_ENT_ETB, LIB_NOM_PAT_IND, LIB_PR1_IND, COD_SEX_ETU
        return [
            'etudiant' => [
                'setNumEtudiant' => $data['COD_ETU'],
                'setNumIne' => $data['COD_NNE_IND'] . $data['COD_CLE_NNE_IND'],
                'setDateNaissance' => Tools::convertDateToObject($data['DATE_NAI_IND']), //en fr?
                'setPromotion' => $data['DAA_ETB'],
                'setNom' => $data['LIB_NOM_PAT_IND'],
                'setAnneeBac' => $data['DAA_OBT_BAC_IBA'],
                'setPrenom' => $data['LIB_PR1_IND'],
                'setTel1' => $data['NUM_TEL'],
                'setCivilite' => 'M' === $data['COD_SEX_ETU'] ? 'M.' : 'Mme', //M ou F
                'setTypeUser' => 'etudiant',
                'setBac' => true === array_key_exists($data['COD_BAC'],
                    $tBac) ? $tBac[$data['COD_BAC']] : null,
                'setRemarque' => $data['COD_BAC'],
            ],
            'adresse' => [
                'setAdresse1' => $data['LIB_AD1'],
                'setAdresse2' => $data['LIB_AD2'],
                'setAdresse3' => $data['LIB_AD3'],
                'setCodePostal' => $data['COD_BDI'],
                'setVille' => $data['COD_COM'], //code commune INSEE
                'setPays' => $data['COD_PAY'], //code
            ],
        ];
    }

    public function getEtudiantsAnnee(Annee $annee)
    {
        $this->connect();
        $stid = $this->conn->prepare(
            "SELECT INDIVIDU.COD_ETU, INDIVIDU.COD_NNE_IND, INDIVIDU.COD_CLE_NNE_IND, INDIVIDU.DATE_NAI_IND, DAA_ENT_ETB, LIB_NOM_PAT_IND, LIB_PR1_IND, NUM_TEL, COD_SEX_ETU, LIB_AD1, LIB_AD2, LIB_AD3, COD_BDI, COD_COM, COD_PAY, DAT_MOD_IND, DAA_ETB, IND_BAC.DAA_OBT_BAC_IBA, COD_BAC FROM INS_ADM_ETP INNER JOIN INDIVIDU ON INDIVIDU.COD_IND = INS_ADM_ETP.COD_IND INNER JOIN ADRESSE ON ADRESSE.COD_IND = INS_ADM_ETP.COD_IND INNER JOIN IND_BAC ON INDIVIDU.COD_IND=IND_BAC.COD_IND WHERE COD_ETP=:codeetape AND (INDIVIDU.COD_ANU_SRT_IND IS NULL OR INDIVIDU.COD_ANU_SRT_IND='')");
        $stid->execute([':codeetape' => $annee->getCodeEtape()]);

        return $stid;
    }
}
