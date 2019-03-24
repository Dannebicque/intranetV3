<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 28/04/2018
 * Time: 07:09
 */

namespace App\Entity;

/**
 * Class Constantes
 * @package App\Entity
 */
class Constantes
{
    //todo: vérifier avec base.html et administration/index.html
    public const ROLE_CDD = 'ROLE_CDD';
    public const ROLE_DDE = 'ROLE_DDE';
    public const ROLE_ASS = 'ROLE_ASS';
    public const ROLE_RP = 'ROLE_RP';
    public const ROLE_RDA = 'ROLE_RDA';
    public const ROLE_EDT = 'ROLE_EDT';
    public const ROLE_RDS = 'ROLE_RDS';
    public const ROLE_AUTEUR = 'ROLE_AUTEUR';
    public const ROLE_MAT = 'ROLE_MAT';
    public const ROLE_PERMANENT = 'ROLE_PERMANENT';


    public const TIMEBEFORE_NOW = 'now';
    public const TIMEBEFORE_MINUTE = '{num} minute ago';
    public const TIMEBEFORE_MINUTES = '{num} minutes ago';
    public const TIMEBEFORE_HOUR = '{num} hour ago';
    public const TIMEBEFORE_HOURS = '{num} hours ago';
    public const TIMEBEFORE_YESTERDAY = 'yesterday';
    public const TIMEBEFORE_FORMAT = '%e %b';
    public const TIMEBEFORE_FORMAT_YEAR = '%e %b, %Y';
    public const DUREE_SEMESTRE = 5;

    public const FLASHBAG_SUCCESS = 'success';
    public const FLASHBAG_INFO = 'info';
    public const FLASHBAG_NOTICE = 'warning';
    public const FLASHBAG_ERROR = 'danger';
    public const DUREE_COURS = 1.5;

    public const TYPEDOCUMENT_EMARGEMENT = 'emargement';
    public const TYPEDOCUMENT_EVALUATION = 'evaluation';
    public const TYPEDOCUMENT_LISTE = 'liste';

    public const CHAMPS_NOM_PRENOM = 'nom';
    public const CHAMPS_NUM_ETUDIANT = 'num';
    public const CHAMPS_BAC = 'bac';
    public const CHAMPS_MAIL_ETUDIANT = 'mail';

    public const FORMAT_CSV_POINT_VIRGULE = 'csv';
    public const FORMAT_CSV_VIRGULE = 'csv-v';
    public const FORMAT_EXCEL = 'xlsx';
    public const FORMAT_PDF = 'pdf';

    public const NB_RESULTS_PER_PAGE = 2;
    public const BASE_URL = '';

    public const CIVILITE_HOMME = 'M.';
    public const CIVILITE_FEMME = 'Mme';

    public const ROLE_LISTE = [
        self::ROLE_CDD,
        self::ROLE_PERMANENT,
        self::ROLE_DDE,
        self::ROLE_ASS,
        self::ROLE_RP,
        self::ROLE_RDA,
        self::ROLE_EDT,
        self::ROLE_RDS,
        self::ROLE_AUTEUR,
        self::ROLE_MAT
    ];

    public const TAB_HEURES = [
        '',
        '8:00',
        '8:30',
        '9:00',
        '9:30',
        '10:00',
        '10:30',
        '11:00',
        '11:30',
        '12:00',
        '12:30',
        '13:00',
        '13:30',
        '14:00',
        '14:30',
        '15:00',
        '15:30',
        '16:00',
        '16:30',
        '17:00',
        '17:30',
        '18:00',
        '18:30',
        '19:00',
        '19:30',
        '20:00',
        '20:30'
    ];

    public const MOYENNE_MODULES = 'moymodules';
    public const MOYENNE_UES = 'moyues';

//    /**
//     * @return array
//     */
//    public static function getRoleList(): array
//    {
//        return array(
//            self::ROLE_CDD,
//            self::ROLE_DDE,
//            self::ROLE_ASS,
//            self::ROLE_RP,
//            self::ROLE_RDA,
//            self::ROLE_EDT,
//            self::ROLE_RDS,
//            self::ROLE_AUTEUR,
//            self::ROLE_MAT
//        );
//    }
}
