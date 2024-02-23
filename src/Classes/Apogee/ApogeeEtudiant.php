<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Apogee/ApogeeEtudiant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:41
 */

namespace App\Classes\Apogee;

use App\Entity\Annee;
use App\Utils\Tools;
use Exception;
use PDOStatement;
use function array_key_exists;

class ApogeeEtudiant extends Apogee
{
    public function getEtudiant(string $etudiant, Annee $annee): bool|PDOStatement
    {
        $this->connect();
        $stid = $this->conn->prepare(
            "SELECT INDIVIDU.COD_ETU, INDIVIDU.COD_NNE_IND, INDIVIDU.COD_CLE_NNE_IND, INDIVIDU.DATE_NAI_IND, DAA_ENT_ETB, LIB_NOM_PAT_IND, LIB_PR1_IND, NUM_TEL, COD_SEX_ETU, LIB_AD1, LIB_AD2, LIB_AD3, COD_BDI, COMMUNE.LIB_COM, LIB_PAY, DAT_MOD_IND, DAA_ETB, IND_BAC.DAA_OBT_BAC_IBA, COD_BAC FROM INS_ADM_ETP INNER JOIN INDIVIDU ON INDIVIDU.COD_IND = INS_ADM_ETP.COD_IND INNER JOIN ADRESSE ON ADRESSE.COD_IND = INS_ADM_ETP.COD_IND LEFT JOIN COMMUNE ON COMMUNE.COD_COM=ADRESSE.COD_COM LEFT JOIN PAYS ON PAYS.COD_PAY=ADRESSE.COD_PAY INNER JOIN IND_BAC ON INDIVIDU.COD_IND=IND_BAC.COD_IND WHERE INDIVIDU.COD_ETU=:etudiant AND COD_ETP=:codeetape AND (INDIVIDU.COD_ANU_SRT_IND IS NULL OR INDIVIDU.COD_ANU_SRT_IND='')");
        // todo: date de naissance... et lieu de naissance ne remonte pas.
        $stid->execute([':etudiant' => $etudiant, ':codeetape' => $annee->getCodeEtape()]);

        return $stid;
    }

    /**
     * @throws Exception
     */
    public function transformeApogeeToArray(?array $data, ?array $tBac): array
    {
        // COD_ETU, COD_NNE_IND, DATE_NAI_IND, DAA_ENT_ETB, LIB_NOM_PAT_IND, LIB_PR1_IND, COD_SEX_ETU
        return [
            'etudiant' => [
                'setNumEtudiant' => $data['COD_ETU'],
                'setNumIne' => $data['COD_NNE_IND'].$data['COD_CLE_NNE_IND'],
                'setDateNaissance' => Tools::convertApogeeDateToObject($data['DATE_NAI_IND']),
                'setLieuNaissance' => $data['LIB_VIL_NAI_ETU'],
                'setPromotion' => $data['DAA_ETB'],
                'setNom' => $data['LIB_NOM_PAT_IND'],
                'setAnneeBac' => $data['DAA_OBT_BAC_IBA'],
                'setPrenom' => $data['LIB_PR1_IND'],
                'setTel1' => $data['NUM_TEL'],
                'setCivilite' => 'M' === $data['COD_SEX_ETU'] ? 'M.' : 'Mme', // M ou F
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
                'setVille' => $data['LIB_COM'],
                'setPays' => $data['LIB_PAY'],
            ],
        ];
    }

    public function getEtudiantsAnnee(Annee $annee): bool|PDOStatement
    {
        $this->connect();
        $stid = $this->conn->prepare(
            "SELECT INDIVIDU.COD_ETU, INDIVIDU.COD_NNE_IND, INDIVIDU.COD_CLE_NNE_IND, INDIVIDU.DATE_NAI_IND, DAA_ENT_ETB, LIB_NOM_PAT_IND, LIB_PR1_IND, NUM_TEL, COD_SEX_ETU, LIB_AD1, LIB_AD2, LIB_AD3, COD_BDI, COMMUNE.LIB_COM, LIB_PAY, DAT_MOD_IND, DAA_ETB, IND_BAC.DAA_OBT_BAC_IBA, COD_BAC, INDIVIDU.LIB_VIL_NAI_ETU FROM INS_ADM_ETP INNER JOIN INDIVIDU ON INDIVIDU.COD_IND = INS_ADM_ETP.COD_IND INNER JOIN ADRESSE ON ADRESSE.COD_IND = INS_ADM_ETP.COD_IND LEFT JOIN COMMUNE ON COMMUNE.COD_COM=ADRESSE.COD_COM LEFT JOIN PAYS ON PAYS.COD_PAY=ADRESSE.COD_PAY INNER JOIN IND_BAC ON INDIVIDU.COD_IND=IND_BAC.COD_IND WHERE COD_ETP=:codeetape AND COD_VRS_VET=:version AND (INDIVIDU.COD_ANU_SRT_IND IS NULL OR INDIVIDU.COD_ANU_SRT_IND='')");
        $stid->execute([':codeetape' => $annee->getCodeEtape(), ':version' => $annee->getCodeVersion()]);

        return $stid;
    }
}
