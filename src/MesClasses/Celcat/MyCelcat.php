<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/Celcat/MyCelcat.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

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
use App\Entity\Semestre;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use http\Exception\InvalidArgumentException;

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
        $query = 'SELECT * FROM CT_DEPT';
        $results = odbc_exec(self::$conn, $query);

        $departements = [];
        while (odbc_fetch_array($results)) {
            $dept['nom'] = odbc_result($results, 'name');
            $dept['code'] = odbc_result($results, 'dept_id');
            $departements[] = $dept;
        }
        return $departements;
    }

    /**
     * @param int                    $codeCelcatDepartement
     * @param AnneeUniversitaire     $anneeUniversitaire
     * @param EntityManagerInterface $entity
     *
     * @throws \Exception
     */
    public static function getEvents(
        int $codeCelcatDepartement,
        ?AnneeUniversitaire $anneeUniversitaire,
        EntityManagerInterface $entity
    ): void {
        if ($anneeUniversitaire === null) {
            throw new InvalidArgumentException('L\'année universitaire n\'est pas définie');
        }

        self::connect();
        $query = 'SELECT CT_EVENT.event_id, CT_EVENT.day_of_week, CT_EVENT.start_time, CT_EVENT.end_time, CT_EVENT.weeks, CT_EVENT_CAT.name, CT_VIEW_EVENT_MODULE001.resourcecode, CT_VIEW_EVENT_MODULE001.resourcename, CT_VIEW_EVENT_STAFF001.resourcecode, CT_VIEW_EVENT_STAFF001.resourcename, CT_VIEW_EVENT_ROOM001.resourcecode, CT_VIEW_EVENT_ROOM001.resourcename, CT_VIEW_EVENT_GROUP001.resourcecode, CT_VIEW_EVENT_GROUP001.resourcename, CT_EVENT.date_change
            FROM CT_EVENT
            INNER JOIN CT_EVENT_CAT ON CT_EVENT_CAT.event_cat_id = CT_EVENT.event_cat_id
            INNER JOIN CT_VIEW_EVENT_STAFF001 ON CT_VIEW_EVENT_STAFF001.eid=CT_EVENT.event_id
            INNER JOIN CT_VIEW_EVENT_GROUP001 ON CT_VIEW_EVENT_GROUP001.eid=CT_EVENT.event_id
            INNER JOIN CT_VIEW_EVENT_MODULE001 ON CT_VIEW_EVENT_MODULE001.eid=CT_EVENT.event_id
            INNER JOIN CT_VIEW_EVENT_ROOM001 ON CT_VIEW_EVENT_ROOM001.eid=CT_EVENT.event_id
            WHERE dept_id=?
            ORDER BY CT_EVENT.date_change DESC, CT_EVENT.event_id';
        $stmt = odbc_prepare(self::$conn, $query);
        $result  = odbc_execute($stmt, array($codeCelcatDepartement));

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
                    $event->setDebut(new DateTime($debut[1]));
                    $event->setFin(new DateTime($fin[1]));
                    $event->setSemaineFormation($semaine);
                    $event->setType($type);
                    $event->setCodeModule(odbc_result($result, 7));
                    $event->setLibModule(utf8_encode(odbc_result($result, 8)));
                    $event->setCodePersonnel(odbc_result($result, 9));
                    $event->setLibPersonnel(utf8_encode(odbc_result($result, 10)));
                    $event->setDepartementId($codeCelcatDepartement);
                    $event->setCodeGroupe(odbc_result($result, 13));
                    $event->setLibGroupe(utf8_encode(odbc_result($result, 14)));
                    $event->setCodeSalle(odbc_result($result, 11));
                    $event->setLibSalle(utf8_encode(odbc_result($result, 12)));
                    $event->setUpdateEvent(new DateTime(odbc_result($result, 15)));

                    $entity->persist($event);
                } //endif
            } //endfor
        }

        $entity->flush();

    }

    public static function updateGroupeBySemestre(
        Semestre $semestre,
        array $groupes,
        array $etudiants,
        EntityManagerInterface $entityManager
    ): void {
        self::connect();
        $query = 'SELECT CT_GROUP.unique_name, CT_STUDENT.unique_name FROM CT_GROUP_STUDENT
INNER JOIN CT_GROUP ON CT_GROUP.group_id=CT_GROUP_STUDENT.group_id
INNER JOIN CT_STUDENT ON CT_STUDENT.student_id=CT_GROUP_STUDENT.student_id WHERE CT_GROUP.dept_id=?' ;

        $stmt = odbc_prepare(self::$conn, $query);
        $result  = odbc_execute($stmt, array($semestre->getDiplome()->getCodeCelcatDepartement()));

        while (odbc_fetch_row($result)) {
            // Vérifier si l'event est déjà dans l'intranet
            $gr = odbc_result($result, 1);
            $etu = odbc_result($result, 2);
            if (array_key_exists($etu, $etudiants) && array_key_exists($gr, $groupes)) {
                $etudiants[$etu]->addGroupe($groupes[$gr]);
                $groupes[$etu]->addEtudiant($etudiants[$gr]);
            }
        }

        $entityManager->flush();
    }
}
