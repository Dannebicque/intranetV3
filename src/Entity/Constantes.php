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
    public const ROLE_CDD = 'role.cdd';
    public const ROLE_DDE = 'role.dde';
    public const ROLE_ASS = 'role.ass';

    public const  TIMEBEFORE_NOW = 'now';
    public const  TIMEBEFORE_MINUTE = '{num} minute ago';
    public const  TIMEBEFORE_MINUTES = '{num} minutes ago';
    public const  TIMEBEFORE_HOUR = '{num} hour ago';
    public const  TIMEBEFORE_HOURS = '{num} hours ago';
    public const  TIMEBEFORE_YESTERDAY = 'yesterday';
    public const  TIMEBEFORE_FORMAT = '%e %b';
    public const  TIMEBEFORE_FORMAT_YEAR = '%e %b, %Y';
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

    public const FORMAT_CSV_POINT_VIRGULE = 'csv-pv';
    public const FORMAT_CSV_VIRGULE = 'csv-v';
    public const FORMAT_EXCEL = 'xlsx';
    public const FORMAT_PDF = 'pdf';

    public const NB_RESULTS_PER_PAGE = 2;

    /**
     * @return array
     */
    public static function getRoleList(): array
    {
        return array(
            self::ROLE_CDD,
            self::ROLE_DDE,
            self::ROLE_ASS
        );
    }
}