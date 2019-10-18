<?php
/**
 * Copyright (C) 10 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/Apogee/MyApogee.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 18/10/2019 12:02
 * @lastUpdate 18/10/2019 12:01
 */

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 14/02/2019
 * Time: 12:49
 */

namespace App\MesClasses\Apogee;

use App\Entity\Diplome;
use App\Entity\Semestre;
use App\MesClasses\Tools;

abstract class MyApogee
{
    private static $conn;

    public static function getEtudiantsDiplome(Diplome $diplome)
    {
        self::connect();
        $stid = oci_parse(self::$conn,
            'SELECT * FROM INS_ADM_ETP INNER JOIN INDIVIDU ON INDIVIDU.COD_IND = INS_ADM_ETP.COD_IND INNER JOIN ADRESSE ON ADRESSE.COD_IND = INS_ADM_ETP.COD_IND WHERE COD_ETP=\'' . $diplome->getCodeApogee() . '\' AND COD_ANU_SRT_IND=NULL');
        oci_execute($stid);

        return $stid;
    }

    private static function connect()
    {
        self::$conn = oci_connect(getenv('APOGEE_LOGIN'), getenv('APOGEE_PASSWORD'), getenv('APOGEE_STRING'));

        if (!self::$conn) {
            $e = oci_error();
            trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
        }

        return self::$conn;
    }

    public static function getEtudiant($etudiant)
    {
        self::connect();
        $stid = oci_parse(self::$conn,
            'SELECT * FROM INS_ADM_ETP INNER JOIN INDIVIDU ON INDIVIDU.COD_IND = INS_ADM_ETP.COD_IND INNER JOIN ADRESSE ON ADRESSE.COD_IND = INS_ADM_ETP.COD_IND WHERE INDIVIDU.COD_ETU=\'' . $etudiant . '\'');
        oci_execute($stid);

        return $stid;
    }

    public static function getGroupesSemestre(Semestre $semestre)
    {
        self::connect();
        $stid = oci_parse(self::$conn,
            'SELECT * FROM GROUPE INNER JOIN GPE_OBJ ON GROUPE.COD_GPE=GPE_OBJ.COD_GPE WHERE GPE_OBJ.COD_ELP=\'3TW1\';');
        oci_execute($stid);

        return $stid;
    }

    public static function transformeApogeeToArray($data): array
    {
        // COD_ETU, COD_NNE_IND, DATE_NAI_IND, DAA_ENT_ETB, LIB_NOM_PAT_IND, LIB_PR1_IND, COD_SEX_ETU
        return [
            'etudiant' => [
                'setNumEtudiant'   => $data['COD_ETU'],
                'setNumIne'        => $data['COD_NNE_IND'] . $data['COD_CLE_NNE_IND'],
                'setDateNaissance' => Tools::convertDateToObject($data['DATE_NAI_IND']), //en fr?
                'setPromotion'     => $data['DAA_ENT_ETB'],
                'setNom'           => $data['LIB_NOM_PAT_IND'],
                'setPrenom'        => $data['LIB_PR1_IND'],
                'setTel1'          => $data['NUM_TEL'],
                'setCivilite'      => $data['COD_SEX_ETU'] === 'M' ? 'M.' : 'Mme', //M ou F
                'setTypeUser'      => 'etudiant',
            ],
            'adresse'  => [
                'setAdresse1'   => $data['LIB_AD1'],
                'setAdresse2'   => $data['LIB_AD2'],
                'setAdresse3'   => $data['LIB_AD3'],
                'setCodePostal' => $data['COD_BDI'],
                'setVille'      => $data['COD_COM'], //code commune INSEE
                'setPays'       => $data['COD_PAY'], //code
            ]
        ];
    }

}
