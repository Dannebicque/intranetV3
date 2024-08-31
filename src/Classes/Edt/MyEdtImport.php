<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Edt/MyEdtImport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/08/2024 11:25
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Edt;

use App\Classes\Matieres\TypeMatiereManager;
use App\Components\Logger\LogHelper;
use App\Entity\AnneeUniversitaire;
use App\Entity\Calendrier;
use App\Entity\Constantes;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\EdtPlanning;
use App\Entity\Semestre;
use App\Repository\CalendrierRepository;
use App\Repository\DiplomeRepository;
use App\Repository\EdtPlanningRepository;
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
    protected array $tabSemestre;
    protected array $tabdebut;
    protected array $tSemaineClear;
    protected ?Departement $departement;

    protected AnneeUniversitaire $anneeUniversitaire;
    protected ?Diplome $diplome = null;
    private ?string $nomfile = null;

    private mixed $semaine;

    private ?Semestre $semestre = null;
    private ?Calendrier $calendrier = null;

    private LogHelper $log;

    /**
     * MyEdtImport constructor.
     */
    public function __construct(
        private readonly EdtPlanningRepository $edtPlanningRepository,
        private readonly CalendrierRepository  $calendrierRepository,
        private readonly PersonnelRepository   $personnelRepository,
        private readonly TypeMatiereManager    $typeMatiereManager,
        private readonly SemestreRepository    $semestreRepository,
        private readonly EntityManagerInterface $entityManager,
        DiplomeRepository                      $diplomeRepository,
    )
    {
        $this->diplome = $diplomeRepository->find(27);
    }

    /**
     * @throws Exception
     */
    public function init(string $file, Departement $departement, AnneeUniversitaire $anneeUniversitaire): self
    {
        $this->departement = $departement;
        $this->anneeUniversitaire = $anneeUniversitaire;
        $this->nomfile = $file;
        $this->log = new LogHelper();

        return $this;
    }

    public function traite(): void
    {
        // Récupérer la liste des profs avec initiales
        $this->tabIntervenants = $this->personnelRepository->tableauIntervenants($this->departement);
        $this->tabMatieres = $this->typeMatiereManager->tableauMatieres($this->departement);
//        $this->tabSemestre = $this->semestreRepository->tableauSemestres($this->departement);
//        $this->tabdebut = [1 => 1, 2 => 4, 3 => 7, 4 => 13, 5 => 16, 6 => 19, 7 => 22];

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
                    if (null === $this->calendrier) {
                        $this->semaine = mb_substr($phrase[0], 1, 2);
                        $this->calendrier = $this->calendrierRepository->findOneBy([
                            'semaineFormation' => $this->semaine,
                            'anneeUniversitaire' => $this->anneeUniversitaire->getId(),
                        ]);
                    }
                    $this->traiteLigne($phrase);
                }
            }

            fclose($handle);
            unlink($this->nomfile); // suppression du fichier
            $this->entityManager->flush();
        }
    }

    private function traiteLigne(array $phrase): void
    {
        $this->semaine = $phrase[7];
        $semestre = mb_substr($phrase[8], 1, 2);
        $this->verifieSiSemaineDoitEtreEffacee($semestre);
        $this->addCours($phrase, $semestre);
    }

    public function getSemestre(): ?Semestre
    {
        return $this->semestre;
    }

    public function getCalendrier(): ?Calendrier
    {
        return $this->calendrier;
    }

    private function clearSemaine(string $semaine, string $semestre): void
    {
        $ordreSemestre = (int)mb_substr($semestre, 1, 1);
        $sem = $this->edtPlanningRepository->findBy([
            'semaine' => $semaine,
            'ordreSemestre' => $ordreSemestre,
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

    private function verifieSiSemaineDoitEtreEffacee(string $semestre): void
    {
        if (!array_key_exists($semestre, $this->tSemaineClear)) {
            // si la clé n'est pas dans le tableau, la semaine n'a pas encore été effacée, on supprime
            $this->clearSemaine($this->semaine, $semestre); // on envoie l'ordre du semestre et pas son id pour le BUT et les parcours
            // on mémorise le semestre
            $this->log->addItem('Le semestre ' . $semestre . ' pour l\'ensemble des parcours a été effacé avant l\'import.');
            $this->tSemaineClear[$semestre] = true;
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
        $matiere = $phrase[1];
        $salle = $phrase[6];
        if ('' !== $matiere && array_key_exists($matiere, $this->tabMatieres)) {
            $pl = new EdtPlanning();
            $pl->setAnneeUniversitaire($this->anneeUniversitaire);

            $pl->setIdMatiere($this->tabMatieres[$matiere]->id);
            $pl->setTypeMatiere($this->tabMatieres[$matiere]->typeMatiere);
            $pl->setTexte(null);
            $pl->setOrdreSemestre($semestre);

            if ('' !== $prof && 'DOE' !== $prof && 'PRJ' !== $prof && array_key_exists($prof, $this->tabIntervenants)) {
                $pl->setIntervenant($this->tabIntervenants[$prof]);
            } else {
                $pl->setIntervenant(null);
            }

            $pl->setJour($date->dayOfWeek()); // à déduire de la date
            $pl->setSalle($salle);
            $pl->setDate($date);
            $pl->setType(strtoupper(mb_substr($phrase[2], 0, 2)));
            $pl->setDiplome($this->diplome);
            $this->addGroupe($pl, $phrase[5]);
            $pl->setHeureDebut($heureDebut);
            //extraire le nombre après les deux premiers caractères de $phrase[2]
            $pl->setOrdre(mb_substr($phrase[2], 2, strlen($phrase[2])));
            $pl->setHeureFin($heureFin);
            $pl->setDebut(Constantes::TAB_HEURES_INDEX[$heureDebut->format('H:i:s')]);
            $pl->setFin(Constantes::TAB_HEURES_INDEX[$heureFin->format('H:i:s')]);

            $pl->setSemaine((int)$this->semaine + 1);//décalage avec Celcat
            $pl->setEvaluation(false);
            $this->entityManager->persist($pl);
            $this->log->addItem('Ajout du cours ' . implode('.', $phrase), 'success');
        }

    }

    private function addGroupe(EdtPlanning $pl, string $groupe): void
    {
        $groupe = mb_substr($groupe, 0, 1);
        $pl->setGroupe(ord($groupe) - 64);
    }
}
