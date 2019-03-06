<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 14/02/2019
 * Time: 12:49
 */

namespace App\MesClasses\Celcat;


use App\Entity\Calendrier;
use Doctrine\ORM\EntityManagerInterface;

abstract class Connect
{
    private static $conn;

    private static function connect() {
        self::$conn = odbc_connect('MSSQLSRV', getenv('MSSQL_USER'), getenv('MSSQL_PASS'));
        return self::$conn;
    }

    public static function getCalendar(EntityManagerInterface $entityManager) {
        self::connect();

        $query  = 'SELECT * FROM CT_WEEK_CONFIG ORDER BY week_no';
        $result = odbc_exec( self::$conn, $query );

        while (odbc_fetch_row($result)) {
            $date = odbc_result($result, 'week_date');
            $cal = new Calendrier();
            $cal->setSemaineFormation(odbc_result($result, 'week_no'));
            $cal->setSemaineReelle(date('W', strtotime($date)));
            $cal->setDateLundi($date);
            $entityManager->persist($cal);
        }
        $entityManager->flush();
    }
}
