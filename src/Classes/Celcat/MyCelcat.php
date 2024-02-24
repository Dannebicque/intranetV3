<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Celcat/MyCelcat.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 08:55
 */

namespace App\Classes\Celcat;

use App\Classes\GetSemestreFromGroupe;
use App\Classes\Matieres\TypeMatiereManager;
use App\Entity\AnneeUniversitaire;
use App\Entity\Calendrier;
use App\Entity\Diplome;
use App\Entity\EdtCelcat;
use App\Entity\Semestre;
use App\Repository\CalendrierRepository;
use App\Repository\DiplomeRepository;
use App\Repository\GroupeRepository;
use App\Repository\PersonnelRepository;
use App\Utils\Tools;
use Carbon\CarbonInterface;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use function array_key_exists;

class MyCelcat
{
    protected array $tGroupes;
    protected array $tPersonnels;
    protected array $tCalendrier;
    protected array $tMatieres;
    private mixed $conn;

    public function __construct(
        private readonly TypeMatiereManager $typeMatiereManager,
        private readonly DiplomeRepository $diplomeRepository,
        private readonly PersonnelRepository $personnelRepository,
        private readonly EntityManagerInterface $entityManger,
        private readonly ParameterBagInterface $parameterBag,
        private readonly GroupeRepository $groupeRepository,
        private readonly CalendrierRepository $calendrierRepository
    ) {
    }

    private function connect(): void
    {
        $this->conn = odbc_connect('MSSQLSRV', $this->parameterBag->get('MSSQL_USER'),
            $this->parameterBag->get('MSSQL_PASS'));
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
            $cal->setSemaineFormation((int) odbc_result($result, 'week_no'));

            $td = explode(' ', $date);

            /** @var CarbonInterface $objDate */
            $objDate = Tools::convertDateToObject($td[0]);
            $cal->setDateLundi($objDate);
            $cal->setSemaineReelle($objDate->weekOfYear);
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
        $diplome = $this->diplomeRepository->findOneBy(['codeCelcatDepartement' => $codeCelcatDepartement]);

        if (null !== $anneeUniversitaire && null !== $diplome) {
            $this->getData($anneeUniversitaire);
            $this->addEvents($diplome, $anneeUniversitaire);
        }
    }

    /**
     * @throws Exception
     */
    public function addEvents(Diplome $diplome, AnneeUniversitaire $anneeUniversitaire): void
    {
        $this->connect();

        $departement = $diplome->getDepartement();

        if (null !== $departement) {
            $query = 'SELECT CT_EVENT.event_id, CT_EVENT.day_of_week, CT_EVENT.start_time, CT_EVENT.end_time, CT_EVENT.weeks, CT_EVENT_CAT.name, CT_VIEW_EVENT_MODULE001.resourcecode, CT_VIEW_EVENT_MODULE001.resourcename, CT_VIEW_EVENT_STAFF001.resourcecode, CT_VIEW_EVENT_STAFF001.resourcename, CT_VIEW_EVENT_ROOM001.resourcecode, CT_VIEW_EVENT_ROOM001.resourcename, CT_VIEW_EVENT_GROUP001.resourcecode, CT_VIEW_EVENT_GROUP001.resourcename, CT_EVENT.date_change, CT_VIEW_EVENT_ROOM001.resourceweeks FROM CT_EVENT INNER JOIN CT_EVENT_CAT ON CT_EVENT_CAT.event_cat_id = CT_EVENT.event_cat_id INNER JOIN CT_VIEW_EVENT_STAFF001 ON CT_VIEW_EVENT_STAFF001.eid=CT_EVENT.event_id INNER JOIN CT_VIEW_EVENT_GROUP001 ON CT_VIEW_EVENT_GROUP001.eid=CT_EVENT.event_id INNER JOIN CT_VIEW_EVENT_MODULE001 ON CT_VIEW_EVENT_MODULE001.eid=CT_EVENT.event_id INNER JOIN CT_VIEW_EVENT_ROOM001 ON CT_VIEW_EVENT_ROOM001.eid=CT_EVENT.event_id WHERE dept_id=' . $diplome->getCodeCelcatDepartement() . ' ORDER BY CT_EVENT.date_change DESC, CT_EVENT.event_id DESC';

//            SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE VIEW_NAME = 'CT_VIEW_EVENT_ROOM001'


//            SELECT CT_EVENT.event_id, CT_EVENT.day_of_week, CT_EVENT.start_time, CT_EVENT.end_time, CT_EVENT.weeks, CT_EVENT_CAT.name, CT_VIEW_EVENT_MODULE001.resourcecode, CT_VIEW_EVENT_MODULE001.resourcename, CT_VIEW_EVENT_STAFF001.resourcecode, CT_VIEW_EVENT_STAFF001.resourcename, CT_VIEW_EVENT_ROOM001.resourcecode, CT_VIEW_EVENT_ROOM001.resourcename, CT_VIEW_EVENT_ROOM001.resourceweeks, CT_VIEW_EVENT_GROUP001.resourcecode, CT_VIEW_EVENT_GROUP001.resourcename, CT_EVENT.date_change FROM CT_EVENT INNER JOIN CT_EVENT_CAT ON CT_EVENT_CAT.event_cat_id = CT_EVENT.event_cat_id INNER JOIN CT_VIEW_EVENT_STAFF001 ON CT_VIEW_EVENT_STAFF001.eid=CT_EVENT.event_id INNER JOIN CT_VIEW_EVENT_GROUP001 ON CT_VIEW_EVENT_GROUP001.eid=CT_EVENT.event_id INNER JOIN CT_VIEW_EVENT_MODULE001 ON CT_VIEW_EVENT_MODULE001.eid=CT_EVENT.event_id INNER JOIN CT_VIEW_EVENT_ROOM001 ON CT_VIEW_EVENT_ROOM001.eid=CT_EVENT.event_id WHERE CT_EVENT.event_id=451565 ORDER BY CT_EVENT.date_change DESC, CT_EVENT.event_id DESC

            $result = odbc_exec($this->conn, $query);

            $this->tMatieres = $this->typeMatiereManager->tableauMatieresCodeApogee($departement);

            while (odbc_fetch_row($result)) {
                $eventId = odbc_result($result, 1);
                $this->createEvent($result, $anneeUniversitaire, $diplome->getCodeCelcatDepartement(), $eventId);
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

        $result = odbc_exec($this->conn, $query);

        while (odbc_fetch_row($result)) {
            $gr = odbc_result($result, 1);
            $etu = odbc_result($result, 2);

            if (array_key_exists($etu, $etudiants) && array_key_exists($gr, $groupes)) {
                $etudiants[$etu]->addGroupe($groupes[$gr]);
                $groupes[$gr]->addEtudiant($etudiants[$etu]);
            }
        }
        $this->entityManger->flush();
    }

    /**
     * @throws Exception
     */
    private function createEvent(
        mixed $result,
        AnneeUniversitaire $anneeUniversitaire,
        int $codeDepartement,
        mixed $eventId
    ): void {
        // Et on ecrit la nouvelle version ou la nouvelle ligne
        $debut = explode(' ', (string) odbc_result($result, 3));
        $fin = explode(' ', (string) odbc_result($result, 4));
        $type = mb_substr(odbc_result($result, 6), 1, -1);

        $semaines = odbc_result($result, 16) ?? odbc_result($result, 5);

        $lg = mb_strlen($semaines);

        for ($i = 0; $i < $lg; ++$i) {
            if ('Y' === $semaines[$i] || 'y' === $semaines[$i]) {

                $semaine = $i;
                $jour = odbc_result($result, 2);
                $codeGroupe = odbc_result($result, 13);
                $event = new EdtCelcat();
                $event->setAnneeUniversitaire($anneeUniversitaire);
                $event->setEventId($eventId);
                $event->setJour((int) $jour);
                $event->setDebut(Tools::convertTimeToObject($debut[1]));
                $event->setFin(Tools::convertTimeToObject($fin[1]));
                $event->setSemaineFormation($semaine);
                $event->setType(utf8_encode($type));

                $event->setCodeModule(odbc_result($result, 7));
                $event->setLibModule((odbc_result($result, 8)));
                if (array_key_exists($event->getCodeModule(), $this->tMatieres)) {
                    $event->setTypeMatiere($this->tMatieres[$event->getCodeModule()]->typeMatiere);
                    $event->setIdMatiere($this->tMatieres[$event->getCodeModule()]->id);
                }
                $event->setCodePersonnel(odbc_result($result, 9));
                $event->setLibPersonnel(utf8_encode(odbc_result($result, 10)));
                if (array_key_exists($event->getCodePersonnel(), $this->tPersonnels)) {
                    $event->setPersonnel($this->tPersonnels[$event->getCodePersonnel()]);
                } else {
                    $event->setPersonnel(null);
                }

                $event->setDepartementId($codeDepartement);
                $event->setCodeGroupe($codeGroupe);
                $event->setLibGroupe(utf8_encode(odbc_result($result, 14)));
                $event->setCodeSalle(odbc_result($result, 11));
                $event->setLibSalle(utf8_encode(odbc_result($result, 12)));
                $event->setDateCours($this->tCalendrier[$semaine]->addDays($jour));
                $event->setSemestre($this->tGroupes[$codeGroupe] ?? null);
                $dt = explode(' ', (string) odbc_result($result, 15));
                $event->setUpdateEvent(Tools::convertDateHeureToObject($dt[0], $dt[1]));

                $this->entityManger->persist($event);
            } // endif
        } // endfor
    }

    public function getData(AnneeUniversitaire $anneeUniversitaire): void
    {
        $calendriers = $this->calendrierRepository->findBy(['anneeUniversitaire' => $anneeUniversitaire->getId()]);
        $this->tCalendrier = [];
        foreach ($calendriers as $calendrier) {
            $this->tCalendrier[$calendrier->getSemaineFormation()] = $calendrier->getDateLundi();
        }

        $personnels = $this->personnelRepository->findAll();
        $this->tPersonnels = [];
        foreach ($personnels as $personnel) {
            $this->tPersonnels[$personnel->getNumeroHarpege()] = $personnel;
        }

        $groupes = $this->groupeRepository->findAll();
        $this->tGroupes = [];
        foreach ($groupes as $groupe) {
            $this->tGroupes[$groupe->getCodeApogee()] = GetSemestreFromGroupe::getSemestreFromGroupe($groupe);
        }
    }

    /**
     * @throws \Doctrine\DBAL\Exception
     */
    public function truncateTableEdtCelcat(): void
    {
        $cmd = $this->entityManger->getClassMetadata(EdtCelcat::class);
        $connection = $this->entityManger->getConnection();
        $connection->beginTransaction();

        try {
            $connection->executeQuery('DELETE FROM '.$cmd->getTableName());
            $connection->commit();
            $connection->executeQuery('ALTER TABLE '.$cmd->getTableName().' AUTO_INCREMENT = 1');
        } catch (Exception $e) {
            $connection->rollback();
        }
    }
}
