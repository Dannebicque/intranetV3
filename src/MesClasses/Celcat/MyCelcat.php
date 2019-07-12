<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/Celcat/MyCelcat.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 7/4/19 7:13 AM
 */

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 14/02/2019
 * Time: 12:49
 */

namespace App\MesClasses\Celcat;


use App\Entity\AnneeUniversitaire;
use App\Entity\Calendrier;
use App\Entity\CelcatEvent;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;

abstract class MyCelcat
{
    private static $conn;

    private static function connect()
    {
        self::$conn = odbc_connect('MSSQLSRV', getenv('MSSQL_USER'), getenv('MSSQL_PASS'));

        return self::$conn;
    }

    public static function getCalendar(EntityManagerInterface $entityManager): void
    {
        self::connect();

        $query = 'SELECT * FROM CT_WEEK_CONFIG ORDER BY week_no';
        $result = odbc_exec(self::$conn, $query);

        while (odbc_fetch_row($result)) {
            $date = odbc_result($result, 'week_date');
            $cal = new Calendrier();
            $cal->setSemaineFormation(odbc_result($result, 'week_no'));
            $cal->setSemaineReelle(date('W', strtotime($date)));
            $cal->setDateLundi(new DateTime($date));
            $entityManager->persist($cal);
        }
        $entityManager->flush();
    }

    public static function getDiplomes(): array
    {
        self::connect();

        $query = 'SELECT * FROM CT_DEPT ORDER BY name';
        $result = odbc_exec(self::$conn, $query);
        $departements = [];
        while (odbc_fetch_row($result)) {
            $dept['nom'] = odbc_result($result, 1);
            $dept['code'] = odbc_result($result, 0);
            $departements[] = $dept;
        }
        return $departements;
    }

    /**
     * @param int                    $codeCelcatDepartement
     * @param AnneeUniversitaire     $anneeUniversitaire
     * @param EntityManagerInterface $entity
     */
    public static function getEvents(int $codeCelcatDepartement, AnneeUniversitaire $anneeUniversitaire, EntityManagerInterface $entity)
    {
        self::connect();
        $query = 'SELECT CT_EVENT.event_id, CT_EVENT.day_of_week, CT_EVENT.start_time, CT_EVENT.end_time, CT_EVENT.weeks, CT_EVENT_CAT.name, CT_VIEW_EVENT_MODULE001.resourcecode, CT_VIEW_EVENT_MODULE001.resourcename, CT_VIEW_EVENT_STAFF001.resourcecode, CT_VIEW_EVENT_STAFF001.resourcename, CT_VIEW_EVENT_ROOM001.resourcecode, CT_VIEW_EVENT_ROOM001.resourcename, CT_VIEW_EVENT_GROUP001.resourcecode, CT_VIEW_EVENT_GROUP001.resourcename, CT_EVENT.date_change
            FROM CT_EVENT
            INNER JOIN CT_EVENT_CAT ON CT_EVENT_CAT.event_cat_id = CT_EVENT.event_cat_id
            INNER JOIN CT_VIEW_EVENT_STAFF001 ON CT_VIEW_EVENT_STAFF001.eid=CT_EVENT.event_id
            INNER JOIN CT_VIEW_EVENT_GROUP001 ON CT_VIEW_EVENT_GROUP001.eid=CT_EVENT.event_id
            INNER JOIN CT_VIEW_EVENT_MODULE001 ON CT_VIEW_EVENT_MODULE001.eid=CT_EVENT.event_id
            INNER JOIN CT_VIEW_EVENT_ROOM001 ON CT_VIEW_EVENT_ROOM001.eid=CT_EVENT.event_id
            WHERE dept_id=' . $codeCelcatDepartement . '
            ORDER BY CT_EVENT.date_change DESC, CT_EVENT.event_id';
        $result = odbc_exec(self::$conn, $query);

        while (odbc_fetch_row($result)) {
            $eventId = odbc_result($result, 1);

            //Et on ecrit la nouvelle version ou la nouvelle ligne
            $debut = explode(' ', odbc_result($result, 3));
            $fin = explode(' ', odbc_result($result, 4));
            $type = substr(odbc_result($result, 6), 1, -1);
            $semaines = odbc_result($result, 5);
            $lg = strlen($semaines);

            for ($i = 0; $i < $lg; $i++) {
                if ($semaines[$i] === 'Y' || $semaines[$i] === 'y') {
                    $semaine = $i;
                    $event = new CelcatEvent();
                    $event->setAnneeUniversitaire($anneeUniversitaire);
                    $event->setEventId($eventId);
                    $event->setJour(odbc_result($result, 2));
                    $event->setDebut($debut[1]);
                    $event->setFin($fin[1]);
                    $event->setSemaineFormation($semaine);
                    $event->setType($type);
                    $event->setCodeModule(odbc_result($result, 7));
                    $event->setLibModule(odbc_result($result, 8));
                    $event->setCodePersonnel(odbc_result($result, 9));
                    $event->setLibPersonnel(odbc_result($result, 10));
                    $event->setDepartementId($codeCelcatDepartement);
                    $event->setCodeGroupe(odbc_result($result, 13));
                    $event->setLibGroupe(odbc_result($result, 14));
                    $event->setCodeSalle(odbc_result($result, 11));
                    $event->setLibSalle(odbc_result($result, 12));
                    $event->setUpdateEvent(odbc_result($result, 15));

                    $entity->persist($event);
                } //endif
            } //endfor
        }

        $entity->flush();

    }
}
