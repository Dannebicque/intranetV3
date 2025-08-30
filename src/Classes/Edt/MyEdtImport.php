<?php
/*
 * Copyright (c) 2025. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Edt/MyEdtImport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 30/08/2025 18:10
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Edt;

use App\Classes\Matieres\TypeMatiereManager;
use App\Components\Logger\LogHelper;
use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\EdtPlanning;
use App\Entity\Semestre;
use App\Repository\CalendrierRepository;
use App\Repository\DepartementRepository;
use App\Repository\DiplomeRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\GroupeRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Carbon\Carbon;
use Carbon\CarbonInterface;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use function array_key_exists;

class MyEdtImport
{
    protected array $tabIntervenants;
    protected array $tabMatieres;
    protected array $calendrier;
    protected array $tabSemestres;
    protected array $tSemaineClear;
    protected ?Departement $departement;

    protected AnneeUniversitaire $anneeUniversitaire;
    protected ?Diplome $diplome = null;
    private ?string $nomfile = null;
    private ?string $originalFile = null;
    private int $semaine;

    private array $tGroupes = [];

    private ?Semestre $semestre = null;

    private array $tabCreneaux = [
        1 => '8:00',
        2 => '9:30',
        3 => '11:00',
        4 => '14:00',
        5 => '15:30',
        6 => '17:00',
    ];

    private array $tabJour = [
        'Lundi' => 1,
        'Mardi' => 2,
        'Mercredi' => 3,
        'Jeudi' => 4,
        'Vendredi' => 5,
    ];
    private const CORRESPONDANCE_S3 = [
        'WR301D' => 'WR301D',
        'WR302D' => 'WR302D',
        'WR303D' => 'WR303D',
        'WR304D' => 'WR304D',
        'WR305D' => 'WR305D',
        'WR306D' => 'WR306D',
        'WR307D' => 'WR307D',
        'WR308D' => 'WR308D',
        'WR309D' => 'WR309D',
        'WR310D' => 'WR310D',
        'WR311D' => 'WR311D',
        'WR312D' => 'WR312D',
        'WR313D' => 'WR313D',
        'WR314D' => 'WR314D',
        'WR315D' => 'WR315D',
        'WR316D' => 'WR316D',
        'WR317D' => 'WR317D',
        'WR318D' => 'WR318D',
        'WR319D' => 'WR319D',
        'WS301D' => 'WS301D',
        'WS302D' => 'WS302D',
        'WS303D' => 'WS303D',
        'WS310D' => 'WS310D',
        'WRA301D' => 'WRA301',
        'WRA302D' => 'WRA302',
        'WRA303D' => 'WRA303D',
        'WRA304D' => 'WRA304',
        'WRA305D' => 'WRA305D',
        'WRA306D' => 'WRA306',
        'WRA307D' => 'WRA307',
        'WRA308D' => 'WRA308D',
        'WRA309D' => 'WRA309D',
        'WRA310D' => 'WRA310D',
        'WRA311D' => 'WRA311D',
        'WRA312D' => 'WRA312D',
        'WRA313D' => 'WRA313D',
        'WRA314D' => 'WRA314D',
        'WRA315D' => 'WRA315',
        'WRA316D' => 'WRA316',
        'WRA317D' => 'WRA317',
        'WRA318D' => 'WRA318',
        'WRA319D' => 'WRA319D',
        'WSA301D' => 'WSA301D',
        'WSA302D' => 'WSA302D',
        'WRA301C' => 'WRA301',
        'WRA302C' => 'WRA302',
        'WRA303C' => 'WRA303C',
        'WRA304C' => 'WRA304',
        'WRA305C' => 'WRA305C',
        'WRA306C' => 'WRA306',
        'WRA307C' => 'WRA307',
        'WRA308C' => 'WRA308C',
        'WRA309C' => 'WRA309C',
        'WRA310C' => 'WRA310C',
        'WRA311C' => 'WRA311C',
        'WRA312C' => 'WRA312C',
        'WRA313C' => 'WRA313C',
        'WRA314C' => 'WRA314C',
        'WRA315C' => 'WRA315',
        'WRA316C' => 'WRA316',
        'WRA317C' => 'WRA317',
        'WRA318C' => 'WRA318',
        'WRA319C' => 'WRA319C',
        'WRA301S' => 'WRA301',
        'WRA302S' => 'WRA302',
        'WRA303S' => 'WRA303S',
        'WRA304S' => 'WRA304',
        'WRA305S' => 'WRA305S',
        'WRA306S' => 'WRA306',
        'WRA307S' => 'WRA307',
        'WRA308S' => 'WRA308S',
        'WRA309S' => 'WRA309S',
        'WRA310S' => 'WRA310S',
        'WRA311S' => 'WRA311S',
        'WRA312S' => 'WRA312S',
        'WRA313S' => 'WRA313S',
        'WRA314S' => 'WRA314S',
        'WRA315S' => 'WRA315',
        'WRA316S' => 'WRA316',
        'WRA317S' => 'WRA317',
        'WRA318S' => 'WRA318',
        'WRA319S' => 'WRA319S',
        'WRA320S' => 'WRA320S',
        'WSA310D' => 'WSA310D',
        'WSA310C' => 'WSA310C',
        'WSA310S' => 'WSA310S',
        'WSA301C' => 'WSA301C',
        'WSA302C' => 'WSA302C',
        'WSA301S' => 'WSA301S',
        'WSA302S' => 'WSA302S',
        'WRA401' => 'WRA401',
        'WRA402D' => 'WRA402D',
        'WRA402C' => 'WRA402C',
        'WRA402S' => 'WRA402S',
        'WRA403D' => 'WRA403',
        'WRA403C' => 'WRA403',
        'WRA403S' => 'WRA403',
        'WRA404D' => 'WRA404',
        'WRA404C' => 'WRA404',
        'WRA404S' => 'WRA404',
        'WRA405C' => 'WRA405C',
        'WRA406C' => 'WRA406C',
        'WRA407C' => 'WRA407C',
        'WRA408C' => 'WRA408C',
        'WRA409C' => 'WRA409C',
        'WRA410C' => 'WRA410C',
        'WSA401C' => 'WSA401C',
        'WSA402C' => 'WSA402C',
        'WSA410' => 'WSA410',
        'WRA405D' => 'WRA405D',
        'WRA406D' => 'WRA406D',
        'WRA407D' => 'WRA407D',
        'WRA408D' => 'WRA408D',
        'WRA409D' => 'WRA409D',
        'WRA410D' => 'WRA410D',
        'WSA401D' => 'WSA401D',
        'WSA402D' => 'WSA402D',
        'WRA405S' => 'WRA405S',
        'WRA406S' => 'WRA406S',
        'WRA407S' => 'WRA407S',
        'WRA408S' => 'WRA408S',
        'WRA409S' => 'WRA409S',
        'WRA410S' => 'WRA410S',
        'WSA401S' => 'WSA401S',
        'WSA402S' => 'WSA402S',
        'WR401D' => 'WR401D',
        'WR402D' => 'WR402',
        'WR403D' => 'WR403',
        'WR404D' => 'WR404',
        'WR405D' => 'WR405D',
        'WR406D' => 'WR406D',
        'WR407D' => 'WR407D',
        'WR408D' => 'WR408D',
        'WR409D' => 'WR409D',
        'WR410' => 'WR410',
        'WS401D' => 'WS401D',
        'WS410D' => 'WS410',
        'WSA410D' => 'WSA410',
        'WSA410C' => 'WSA410',
        'WSA410S' => 'WSA410',
        'WS402D' => 'WS402D',
    ];

    private const CORRESPONDANCE_S5 = [
        'WR501D' => 'WR501D',
        'WR502D' => 'WR502D',
        'WR503D' => 'WR503D',
        'WR504D' => 'WR504D',
        'WR505D' => 'WR505D',
        'WR506D' => 'WR506D',
        'WR507D' => 'WR507D',
        'WR508D' => 'WR508D',
        'WR509D' => 'WR509D',
        'WR510D' => 'WR510D',
        'WS501D' => 'WS501D',
        'WS502D' => 'WS502D',
        'WRA501D' => 'WRA501',
        'WRA502D' => 'WRA502',
        'WRA503D' => 'WRA503',
        'WRA504D' => 'WRA504',
        'WRA505D' => 'WRA505D',
        'WRA506D' => 'WRA506D',
        'WRA507D' => 'WRA507D',
        'WRA508D' => 'WRA508D',
        'WRA509D' => 'WRA509D',
        'WRA510D' => 'WRA510D',
        'WSA501D' => 'WSA501D',
        'WSA502D' => 'WSA502',
        'WRA501C' => 'WRA501',
        'WRA502C' => 'WRA502',
        'WRA503C' => 'WRA503',
        'WRA504C' => 'WRA504',
        'WRA505C' => 'WRA505C',
        'WRA506C' => 'WRA506C',
        'WRA507C' => 'WRA507C',
        'WRA508C' => 'WRA508C',
        'WSA501C' => 'WSA501C',
        'WSA502C' => 'WSA502',
        'WRA501S' => 'WRA501',
        'WRA502S' => 'WRA502',
        'WRA503S' => 'WRA503',
        'WRA504S' => 'WRA504',
        'WRA505S' => 'WRA505S',
        'WRA506S' => 'WRA506S',
        'WRA507S' => 'WRA507S',
        'WRA508S' => 'WRA508S',
        'WRA509S' => 'WRA509S',
        'WSA501S' => 'WSA501S',
        'WSA502S' => 'WSA502',
        'WRA601S' => 'WRA601S',
        'WRA601C' => 'WRA601C',
        'WRA601D' => 'WRA601D',
        'WR601D' => 'WR601D',
        'WR602D' => 'WR602D',
        'WS610D' => 'WS610D',
        'WS611D' => 'WS611D',
        'WRA601' => 'WRA601',
        'WRA602S' => 'WRA602S',
        'WRA602C' => 'WRA602C',
        'WRA602D' => 'WRA602D',
        'WRA603S' => 'WRA603S',
        'WSA610S' => 'WSA610S',
        'WSA610D' => 'WSA610D',
        'WSA610C' => 'WSA610C',
        'WSA611S' => 'WSA611S',
        'WSA611C' => 'WSA611C',
        'WSA666C' => 'WSA666C',
        'WSA666S' => 'WSA666S',
        'WSA666D' => 'WSA666D',
    ];

    private const CORRESPONDANCE_SEMESTRE = [
        'S1' => 79,
        'S2' => 80,
        'S3-DEV-FI' => 101,
        'S3-DEV-FC' => 165,
        'S3-COMM' => 183,
        'S4-DEV-FI' => 102,
        'S4-DEV-FC' => 166,
        'S4-COMM' => 184,

        'S5-DEV-FI' => 103,
        'S5-DEV-FC' => 167,
        'S5-COMM' => 185,

        'S6-DEV-FI' => 104,
        'S6-DEV-FC' => 168,
        'S6-COMM' => 186
    ];

    /**
     * MyEdtImport constructor.
     */
    public function __construct(
        private readonly LogHelper             $log,
        DepartementRepository                  $departementRepository,
        private readonly EdtPlanningRepository $edtPlanningRepository,
        private readonly PersonnelRepository   $personnelRepository,
        private readonly TypeMatiereManager    $typeMatiereManager,
        private readonly EntityManagerInterface $entityManager,
        private readonly SemestreRepository    $semestreRepository,
        private readonly GroupeRepository      $groupeRepository,
        DiplomeRepository                      $diplomeRepository, private readonly CalendrierRepository $calendrierRepository,
    )
    {
        $departement = $departementRepository->find(1);
        //todo: Attention toujours 27, pas le cas selon le semestre et la matière
        $diplomes = $diplomeRepository->findByDepartement($departement);
        foreach ($diplomes as $diplome) {
            if ($diplome->getActif()) {
                $semestres = $this->semestreRepository->findByDiplome($diplome);
                foreach ($semestres as $semestre) {
                    $this->tabSemestres[$semestre->getId()] = $semestre;

                    $groupes = $this->groupeRepository->findByDiplomeAndOrdreSemestre($diplome, $semestre->getOrdreLmd());
                    foreach ($groupes as $groupe) {
                        $this->tGroupes[$semestre->getOrdreLmd()][$groupe->getTypeGroupe()->getType()->value][$groupe->getOrdre()] = $groupe;
                    }
                }
            }
        }
    }

    /**
     * @throws Exception
     */
    public function init(string $file, Departement $departement, AnneeUniversitaire $anneeUniversitaire, string $originalFile = ''): self
    {
        $this->departement = $departement;
        $this->anneeUniversitaire = $anneeUniversitaire;
        $this->nomfile = $file;
        $this->originalFile = $originalFile;
        return $this;
    }

    public function traite(): void
    {
        // Récupérer la liste des profs avec initiales
        $this->tabIntervenants = $this->personnelRepository->tableauIntervenants($this->departement);
        $this->tabMatieres = $this->typeMatiereManager->tableauMatieres($this->departement);


        $handle = fopen($this->nomfile, 'rb');
        $this->tSemaineClear = []; // tableau pour mémoriser les semaines à supprimer

        /* Si on a réussi à ouvrir le fichier */
        if ($handle) {
            fgetcsv($handle, 1024); //lire la première ligne de titre pour la supprimer
            /* Tant que l'on est pas à la fin du fichier */
            while (!feof($handle)) {
                /* On lit la ligne courante */
                $phrase = fgetcsv($handle, 1024);

                /*
                 * --- fichier Régis ---
                 *
                 * 0 => initiales profs
                 * 1 => code MMI matiere
                 * 2 => type
                 * 3 => date
                 * 4 => heure
                 * 5 => groupe
                 * 6 => salle
                 * 7 => semaine
                 */

                if ($phrase !== false && count($phrase) === 9) {
                    $this->traiteLigne($phrase);
                }
            }

            fclose($handle);
            unlink($this->nomfile); // suppression du fichier
            $this->entityManager->flush();
        }
    }

    public function traitev2(): void
    {
        // Récupérer la liste des profs avec initiales
        $this->tabIntervenants = $this->personnelRepository->tableauIntervenants($this->departement);
        $this->tabMatieres = $this->typeMatiereManager->tableauMatieres($this->departement);
        $this->calendrier = $this->calendrierRepository->findCalendrierArray($this->anneeUniversitaire);

        $jsonContent = file_get_contents($this->nomfile);
        $data = json_decode($jsonContent, true);
        $this->tSemaineClear = []; // tableau pour mémoriser les semaines à supprimer

        /* Si on a réussi à ouvrir le fichier */

        /* Tant que l'on est pas à la fin du fichier */
        foreach ($data as $phrase) {
            $this->traiteLignev2($phrase);
        }

        unlink($this->nomfile); // suppression du fichier
        $this->entityManager->flush();

    }

    private function traiteLigne(array $phrase): void
    {
        $this->semaine = (int)$phrase[7] + 1; //par rapport à celcat

        $semestre = mb_substr($phrase[8], 1, 2);
        $this->verifieSiSemaineDoitEtreEffacee($semestre);
        $this->addCours($phrase, $semestre);
    }

    private function traiteLignev2(array $phrase): void
    {
        //le fichier se nommer cours_3.json, 3 est la semaine
        $this->semaine = explode('_', explode('.', $this->originalFile)[0])[1] + 1; //par rapport à celcat

        $semestre = self::CORRESPONDANCE_SEMESTRE[$phrase['semester']];
        $this->verifieSiSemaineDoitEtreEffacee($semestre);
        $this->addCoursv2($phrase, $semestre);
    }

    public function getSemestre(): ?Semestre
    {
        return $this->semestre;
    }

    private function clearSemaine(): void
    {
        $sem = $this->edtPlanningRepository->findBy([
            'semaine' => $this->semaine,
            'anneeUniversitaire' => $this->anneeUniversitaire,
        ]);

        foreach ($sem as $s) {
            $this->entityManager->remove($s);
        }
        $this->entityManager->flush();
    }

    private function convertToDate(string $jour): CarbonInterface
    {
        //convertir "Le 4/9/2024" en 2024-09-04
        $jour = str_replace(array('Le ', '/'), array('', '-'), $jour);

        return Carbon::createFromFormat('d-m-Y', $jour);
    }

    private function verifieSiSemaineDoitEtreEffacee(string|int $semestre): void
    {
        if (!array_key_exists($this->semaine, $this->tSemaineClear)) {
            // si la clé n'est pas dans le tableau, la semaine n'a pas encore été effacée, on supprime
            $this->clearSemaine(); // on envoie l'ordre du semestre et pas son id pour le BUT et les parcours
            // on mémorise le semestre
            $this->log->addItem('La semaine ' . $this->semaine . ' pour l\'ensemble des parcours a été effacé avant l\'import.');
            $this->tSemaineClear[$this->semaine] = true;
        }
    }

    private function addCours(array $phrase, string $semestre): void
    {
        /*
         * nom,matiere,type,date,heure,groupe,salle,semaine,semestre
            AHA,WRA315S,td2,Le 4/9/2024,17h00-18h30,I3,h201,1,S3
         * 0 => nom
         * 1 => matiere
         * 2 => type
         * 3 => date
         * 4 => heure
         * 5 => groupe
         * 6 => salle
         * 7 => semaine
         * 8 => semestre
         */
        $date = $this->convertToDate($phrase[3]);
        // Séparer la chaîne pour obtenir les heures de début et de fin
        list($startTime, $endTime) = explode('-', $phrase[4]);

// Supprimer les caractères 'h' pour pouvoir construire les objets Carbon
        $startTime = str_replace('h', ':', $startTime);
        $endTime = str_replace('h', ':', $endTime);

// Créer les objets Carbon pour les heures de début et de fin
        $heureDebut = Carbon::createFromFormat('H:i', $startTime);
        $heureFin = Carbon::createFromFormat('H:i', $endTime);

        $prof = $phrase[0];

        if ((int)$semestre === 3 || (int)$semestre === 4) {
            $matiere = self::CORRESPONDANCE_S3[$phrase[1]];
        } elseif ((int)$semestre === 5 || (int)$semestre === 6) {
            $matiere = self::CORRESPONDANCE_S5[$phrase[1]];
        } else {
            $matiere = $phrase[1];
        }

        $salle = $phrase[6];
        if ('' !== $matiere && array_key_exists($matiere, $this->tabMatieres)) {
            $pl = new EdtPlanning();
            $pl->setAnneeUniversitaire($this->anneeUniversitaire);

            $pl->setIdMatiere($this->tabMatieres[$matiere]->id);
            $pl->setTypeMatiere($this->tabMatieres[$matiere]->typeMatiere);
            $pl->setTexte(null);
            $pl->setOrdreSemestre($semestre);

            if (array_key_exists($phrase[8], self::CORRESPONDANCE_SEMESTRE) && array_key_exists($phrase[5], self::CORRESPONDANCE_SEMESTRE[$phrase[8]])) {
                $pl->setSemestre($this->tabSemestres[self::CORRESPONDANCE_SEMESTRE[$phrase[8]][$phrase[5]]] ?? null
                );
            } else {
                $pl->setSemestre(null);
            }

            if ('' !== $prof && 'DOE' !== $prof && 'PRJ' !== $prof && array_key_exists($prof, $this->tabIntervenants)) {
                $pl->setIntervenant($this->tabIntervenants[$prof]);
            } else {
                $pl->setIntervenant(null);
            }

            $pl->setJour($date->dayOfWeek()); // à déduire de la date
            $tsal = explode('-', $salle);
            if (count($tsal) >= 2 && str_starts_with($tsal[1], '@')) {
                $salle = $tsal[0];
                $heureDebut = Carbon::createFromFormat('H\hi', mb_substr($tsal[1], 1));
                // $heureFin = $heureDebut + 1h30
                $heureFin = $heureDebut?->copy()->addHour()->addMinutes(30);
            }
            $pl->setSalle(mb_strtoupper($salle));
            $pl->setDate($date);
            if (str_starts_with($phrase[2], 'pttd') || str_starts_with($phrase[2], 'pttp') || str_starts_with($phrase[2], 'ptcm')) {
                $pl->setType(strtoupper(mb_substr($phrase[2], 0, 4)));
            } else {
                $pl->setType(strtoupper(mb_substr($phrase[2], 0, 2)));
            }

            $pl->setDiplome($pl->getSemestre()?->getDiplome());
            $this->addGroupe($pl, $phrase[5]);
            $pl->setHeureDebut($heureDebut);
            //extraire le nombre après les deux premiers caractères de $phrase[2]
            $pl->setOrdre(mb_substr($phrase[2], 2, strlen($phrase[2])));
            $pl->setHeureFin($heureFin);
            $pl->setDebut(Constantes::TAB_HEURES_INDEX[$heureDebut->format('H:i:s')]);
            $pl->setFin(Constantes::TAB_HEURES_INDEX[$heureFin->format('H:i:s')]);

            $pl->setSemaine((int)$this->semaine);//décalage avec Celcat
            $pl->setEvaluation(false);

            // groupe Objet
            if (array_key_exists($pl->getType(), $this->tGroupes[$semestre]) && array_key_exists($pl->getGroupe(), $this->tGroupes[$semestre][$pl->getType()])) {
                $pl->setGroupeObjet($this->tGroupes[$semestre][$pl->getType()][$pl->getGroupe()]);
            }


            $this->entityManager->persist($pl);
            $this->log->addItem('Ajout du cours ' . implode('.', $phrase), 'success');
        }

    }

    private function addCoursv2(array $phrase, string $semestre): void
    {
        if ($phrase['date'] !== null) {

            //calcul heure début et heure de fin L'heure de début dépend du créneau (1 = 8h00,2=9h30,3=11h00,4=14h00,5=15h30,6=17h00) ou l'heure si heureDebut ! null. La durée est 1h30 sauf si duree défini (durée en float, exemple 1.5 => 1h30)


            if (array_key_exists('heureDebut', $phrase) && $phrase['heureDebut'] !== null) {
                $heureDebutTxt = str_replace('h', ':', $phrase['heureDebut']);
                $heureDebut = Carbon::createFromFormat('H:i', $heureDebutTxt);
            } else {
                $heureDebut = Carbon::createFromFormat('H:i', $this->tabCreneaux[$phrase['creneau']]);
            }

            if (array_key_exists('duree', $phrase) && $phrase['duree'] !== null) {
                //convertire la durée (en float) en heure et minute
                $duree = (int)$phrase['duree'];
                $minutes = ($phrase['duree'] - $duree) * 60;
                $heureFin = $heureDebut->copy()->addHours($duree)->addMinutes($minutes);
            } else {
                //on ajoute 1h30
                $heureFin = $heureDebut->copy()->addHour()->addMinutes(30);
            }

            $prof = $phrase['professor'];
            $matiere = $phrase['matiere'];
            $salle = $phrase['room'];

            if ('' !== $matiere && array_key_exists($matiere, $this->tabMatieres)) {
                $pl = new EdtPlanning();
                $pl->setAnneeUniversitaire($this->anneeUniversitaire);
                $ordreSemestre = (int)$phrase['semester'][1];
                $pl->setIdMatiere($this->tabMatieres[$matiere]->id);
                $pl->setTypeMatiere($this->tabMatieres[$matiere]->typeMatiere);
                $pl->setTexte(null);
                $pl->setOrdreSemestre($ordreSemestre);
                $pl->setSemestre($this->tabSemestres[$semestre] ?? null);

                if ('' !== $prof && 'DOE' !== $prof && 'PRJ' !== $prof && array_key_exists($prof, $this->tabIntervenants)) {
                    $pl->setIntervenant($this->tabIntervenants[$prof]);
                } else {
                    $pl->setIntervenant(null);
                }

                $pl->setJour($this->tabJour[$phrase['date']]); // à déduire de la date
                $pl->setSalle(mb_strtoupper($salle));

                //todo: a calculer $pl->setDate($date);

                // je veux calculer la date. Je connais la date du lundi grace à $this->>calendirer, je connais le jour (ou son numéro 1 = lundi, ... je veux la date du jour en objet
                $semaine = $this->calendrier[$this->semaine];
                $lundi = $semaine['lundi'];
                $date = $lundi->addDays($this->tabJour[$phrase['date']] - 1);
                $pl->setDate($date);

                $pl->setType(strtoupper($phrase['type']));
                $pl->setDiplome($pl->getSemestre()?->getDiplome());
                $pl->setGroupe($phrase['groupIndex']);
                $pl->setHeureDebut($heureDebut);
                //extraire le nombre après les deux premiers caractères de $phrase[2]
                $pl->setOrdre($phrase['rang']);
                $pl->setHeureFin($heureFin);
                $pl->setDebut(Constantes::TAB_HEURES_INDEX[$heureDebut?->format('H:i:s')]);
                $pl->setFin(Constantes::TAB_HEURES_INDEX[$heureFin?->format('H:i:s')]);

                $pl->setSemaine((int)$this->semaine);//décalage avec Celcat
                $pl->setEvaluation(false);

                // groupe Objet
                if (array_key_exists($pl->getType(), $this->tGroupes[$ordreSemestre]) && array_key_exists($pl->getGroupe(), $this->tGroupes[$ordreSemestre][$pl->getType()])) {
                    $pl->setGroupeObjet($this->tGroupes[$ordreSemestre][$pl->getType()][$pl->getGroupe()]);
                }

                $this->entityManager->persist($pl);
                $this->log->addItem('Ajout du cours ' . implode('.', $phrase), 'success');
            }
        }

    }

    private function addGroupe(EdtPlanning $pl, string $groupe): void
    {
        //si semestre 3 et type CM et groupe = A alors ajouter 40
        $groupe = mb_substr($groupe, 0, 1);
        $offset = 0;
        if ($pl->getOrdreSemestre() === 3 && $pl->getType() === 'CM' && $groupe === 'A') {
            $offset = 40;
        }


        $pl->setGroupe(ord($groupe) - 64 + $offset);
    }
}
