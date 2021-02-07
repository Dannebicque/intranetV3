<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Celcat/MyCelcat.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Celcat;

use App\Entity\AnneeUniversitaire;
use App\Entity\Calendrier;
use App\Entity\CelcatEvent;
use App\Entity\Semestre;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class MyCelcat
{
    private $conn;

    private EntityManagerInterface $entityManger;

    private ParameterBagInterface $parameterBag;

    /**
     * MyCelcat constructor.
     */
    public function __construct(EntityManagerInterface $entityManger, ParameterBagInterface $parameterBag)
    {
        $this->entityManger = $entityManger;
        $this->parameterBag = $parameterBag;
    }

    private function connect()
    {
        $this->conn = odbc_connect('MSSQLSRV', $this->parameterBag->get('MSSQL_USER'),
            $this->parameterBag->get('MSSQL_PASS'));

        return $this->conn;
    }

    /**
     * @throws Exception
     */
    public function getCalendar(AnneeUniversitaire $anneeUniversitaire): void
    {
        $this->connect();

        $query = 'SELECT * FROM CT_WEEK_CONFIG ORDER BY week_no';
        $result = odbc_exec($this->conn, $query);

        while (odbc_fetch_row($result)) {
            $date = odbc_result($result, 'week_date');
            $cal = new Calendrier();
            $cal->setAnneeUniversitaire($anneeUniversitaire);
            $cal->setSemaineFormation(odbc_result($result, 'week_no'));
            $cal->setSemaineReelle((int)date('W', strtotime($date)));
            $cal->setDateLundi(new DateTime($date));
            $this->entityManger->persist($cal);
        }
        $this->entityManger->flush();
    }

    public function getDiplomes(): array
    {
        $this->connect();
        $query = 'SELECT * FROM CT_DEPT';
        $results = odbc_exec($this->conn, $query);

        $departements = [];
        while (odbc_fetch_array($results)) {
            $dept = [];
            $dept['nom'] = odbc_result($results, 'name');
            $dept['code'] = odbc_result($results, 'dept_id');
            $departements[] = $dept;
        }

        return $departements;
    }

    /**
     * @throws Exception
     */
    public function getEvents(
        int $codeCelcatDepartement,
        ?AnneeUniversitaire $anneeUniversitaire
    ): void {
        if (null !== $anneeUniversitaire) {
            $this->connect();
            $query = 'SELECT CT_EVENT.event_id, CT_EVENT.day_of_week, CT_EVENT.start_time, CT_EVENT.end_time, CT_EVENT.weeks, CT_EVENT_CAT.name, CT_VIEW_EVENT_MODULE001.resourcecode, CT_VIEW_EVENT_MODULE001.resourcename, CT_VIEW_EVENT_STAFF001.resourcecode, CT_VIEW_EVENT_STAFF001.resourcename, CT_VIEW_EVENT_ROOM001.resourcecode, CT_VIEW_EVENT_ROOM001.resourcename, CT_VIEW_EVENT_GROUP001.resourcecode, CT_VIEW_EVENT_GROUP001.resourcename, CT_EVENT.date_change FROM CT_EVENT INNER JOIN CT_EVENT_CAT ON CT_EVENT_CAT.event_cat_id = CT_EVENT.event_cat_id INNER JOIN CT_VIEW_EVENT_STAFF001 ON CT_VIEW_EVENT_STAFF001.eid=CT_EVENT.event_id INNER JOIN CT_VIEW_EVENT_GROUP001 ON CT_VIEW_EVENT_GROUP001.eid=CT_EVENT.event_id INNER JOIN CT_VIEW_EVENT_MODULE001 ON CT_VIEW_EVENT_MODULE001.eid=CT_EVENT.event_id INNER JOIN CT_VIEW_EVENT_ROOM001 ON CT_VIEW_EVENT_ROOM001.eid=CT_EVENT.event_id WHERE dept_id=? ORDER BY CT_EVENT.date_change DESC, CT_EVENT.event_id DESC';

            $stmt = odbc_prepare($this->conn, $query);
            $result = odbc_execute($stmt, [$codeCelcatDepartement]);

            while (odbc_fetch_row($result)) {
                $eventId = odbc_result($result, 1);

                //Et on ecrit la nouvelle version ou la nouvelle ligne
                $debut = explode(' ', odbc_result($result, 3));
                $fin = explode(' ', odbc_result($result, 4));
                $type = mb_substr(odbc_result($result, 6), 1, -1);
                $semaines = odbc_result($result, 5);
                $lg = mb_strlen($semaines);

                for ($i = 0; $i < $lg; ++$i) {
                    if ('Y' === $semaines[$i] || 'y' === $semaines[$i]) {
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

                        $this->entityManger->persist($event);
                    } //endif
                } //endfor
            }

            $this->entityManger->flush();
        }
    }

    public function updateGroupeBySemestre(
        Semestre $semestre,
        array $groupes,
        array $etudiants
    ): void {
        $this->connect();
        $query = 'SELECT CT_GROUP.unique_name, CT_STUDENT.unique_name FROM CT_GROUP_STUDENT
INNER JOIN CT_GROUP ON CT_GROUP.group_id=CT_GROUP_STUDENT.group_id
INNER JOIN CT_STUDENT ON CT_STUDENT.student_id=CT_GROUP_STUDENT.student_id WHERE CT_GROUP.dept_id=?';

        $stmt = odbc_prepare($this->conn, $query);
        $result = odbc_execute($stmt, [$semestre->getDiplome()->getCodeCelcatDepartement()]);

        while (odbc_fetch_row($result)) {
            // Vérifier si l'event est déjà dans l'intranet
            $gr = odbc_result($result, 1);
            $etu = odbc_result($result, 2);
            if (\array_key_exists($etu, $etudiants) && \array_key_exists($gr, $groupes)) {
                $etudiants[$etu]->addGroupe($groupes[$gr]);
                $groupes[$etu]->addEtudiant($etudiants[$gr]);
            }
        }

        $this->entityManger->flush();
    }
}
