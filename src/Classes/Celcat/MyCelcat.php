<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Celcat/MyCelcat.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/09/2021 19:25
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Celcat;

use App\Entity\AnneeUniversitaire;
use App\Entity\Calendrier;
use App\Entity\CelcatEvent;
use App\Entity\Semestre;
use App\Repository\CalendrierRepository;
use App\Repository\GroupeRepository;
use App\Repository\TypeGroupeRepository;
use App\Utils\Tools;
use function array_key_exists;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class MyCelcat
{
    private $conn;

    private EntityManagerInterface $entityManger;

    private ParameterBagInterface $parameterBag;
    private CalendrierRepository $calendrierRepository;
    private GroupeRepository $groupeRepository;

    /**
     * MyCelcat constructor.
     */
    public function __construct(
        EntityManagerInterface $entityManger,
        ParameterBagInterface $parameterBag,
        GroupeRepository $groupeRepository,
        CalendrierRepository $calendrierRepository
    ) {
        $this->entityManger = $entityManger;
        $this->calendrierRepository = $calendrierRepository;
        $this->groupeRepository = $groupeRepository;
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
            $cal->setSemaineReelle((int) date('W', strtotime($date)));
            $cal->setDateLundi(Tools::convertDateToObject($date));
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

            $result = odbc_prepare($this->conn, $query);
            $stmt = odbc_execute($result, [$codeCelcatDepartement]);

            $calendriers = $this->calendrierRepository->findBy(['anneeUniversitaire' => $anneeUniversitaire->getId()]);
            $t = [];
            foreach ($calendriers as $calendrier) {
                $t[$calendrier->getSemaineFormation()] = $calendrier->getDateLundi();
            }

            $groupes = $this->groupeRepository->findAll();
            $tgroupes = [];
            foreach ($groupes as $groupe) {
                $t[$groupe->getCodeApogee()] = $groupe->getTypeGroupe()?->getSemestre();
            }

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
                        $jour = odbc_result($result, 2);
                        $codeGroupe = odbc_result($result, 13);
                        $event = new CelcatEvent();
                        $event->setAnneeUniversitaire($anneeUniversitaire);
                        $event->setEventId($eventId);
                        $event->setJour($jour);
                        $event->setDebut(Tools::convertTimeToObject($debut[1]));
                        $event->setFin(Tools::convertTimeToObject($fin[1]));
                        $event->setSemaineFormation($semaine);
                        $event->setType(utf8_decode($type));
                        $event->setCodeModule(odbc_result($result, 7));
                        $event->setLibModule(utf8_encode(odbc_result($result, 8)));
                        $event->setCodePersonnel(odbc_result($result, 9));
                        $event->setLibPersonnel(utf8_encode(odbc_result($result, 10)));
                        $event->setDepartementId($codeCelcatDepartement);
                        $event->setCodeGroupe($codeGroupe);
                        $event->setLibGroupe(utf8_encode(odbc_result($result, 14)));
                        $event->setCodeSalle(odbc_result($result, 11));
                        $event->setLibSalle(utf8_encode(odbc_result($result, 12)));
                        $event->setDateCours($t[$semaine]->addDays($jour));
                        $event->setSemestre($tgroupes[$codeGroupe] ?? null);
                        $dt = explode(' ', odbc_result($result, 15));
                        $event->setUpdateEvent(Tools::convertDateHeureToObject($dt[0], $dt[1]));

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
INNER JOIN CT_STUDENT ON CT_STUDENT.student_id=CT_GROUP_STUDENT.student_id WHERE CT_GROUP.dept_id='.$semestre->getDiplome()->getCodeCelcatDepartement();

//        $stmt = odbc_prepare($this->conn, $query);
//        $result = odbc_execute($stmt, [$semestre->getDiplome()->getCodeCelcatDepartement()]);
        $result = odbc_exec($this->conn, $query);

        while (odbc_fetch_row($result)) {
            // Vérifier si l'event est déjà dans l'intranet

            $gr = odbc_result($result, 1);
            $etu = odbc_result($result, 2);

            if (array_key_exists($etu, $etudiants) && array_key_exists($gr, $groupes)) {
                $etudiants[$etu]->addGroupe($groupes[$gr]);
                $groupes[$gr]->addEtudiant($etudiants[$etu]);
            }
        }

        $this->entityManger->flush();
    }
}
