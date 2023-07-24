<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Edt/MyEdtImport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/07/2023 11:31
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Edt;

use App\Classes\Matieres\TypeMatiereManager;
use App\Components\Logger\LogHelper;
use App\Entity\AnneeUniversitaire;
use App\Entity\Calendrier;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\EdtPlanning;
use App\Entity\Semestre;
use App\Repository\CalendrierRepository;
use App\Repository\DiplomeRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
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
    public function init($file, Departement $departement, AnneeUniversitaire $anneeUniversitaire): self
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
        $this->tabSemestre = $this->semestreRepository->tableauSemestres($this->departement);
        $this->tabdebut = [1 => 1, 2 => 4, 3 => 7, 4 => 13, 5 => 16, 6 => 19, 7 => 22];

        $handle = fopen($this->nomfile, 'rb');
        $this->tSemaineClear = []; // tableau pour mémoriser les semaines à supprimer

        /* Si on a réussi à ouvrir le fichier */
        if ($handle) {
            $phrase = fgetcsv($handle, 1024, ","); //lire la première ligne de titre pour la supprimer
            /* Tant que l'on est pas à la fin du fichier */
            while (!feof($handle)) {
                /* On lit la ligne courante */
                $phrase = fgetcsv($handle, 1024, ",");
                /*
                 * 0 => semaine,
                 * 1 => jour,
                 * 2 => horaire,
                 * 3 => nb_creneaux,
                 * 4 => semestre,
                 * 5 => parcours,
                 * 6 => matiere,
                 * 7 => texte,
                 * 8 => prof,
                 * 9 => salle,
                 * 10 => type,
                 * 11 => groupe
                 *
                 */

                if ($phrase !== false && count($phrase) === 12) {
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
        $this->semaine = mb_substr($phrase[0], 1, 2); // on ne récupère pas le S

        $semestre = $phrase[4];
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

    private function clearSemaine($semaine, string $semestre): void
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

    private function convertToDate($jour): CarbonInterface
    {
        return $this->calendrier->getDateLundi()->addDays($jour - 1);
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

    private function addCours(array $phrase, string $semestre)
    {
        /*
         * 0 => semaine,
         * 1 => jour,
         * 2 => horaire,
         * 3 => nb_creneaux,
         * 4 => semestre,
         * 5 => parcours,
         * 6 => matiere,
         * 7 => texte,
         * 8 => prof,
         * 9 => salle,
         * 10 => type,
         * 11 => groupe
         */


        $jour = $phrase[1];
        $heure = $phrase[2]; // a convertir
        $date = $this->convertToDate($jour);
        $prof = $phrase[8];
        $ordreSemestre = (int)mb_substr($semestre, 1, 1);
        $matiere = $phrase[6];
        $salle = $phrase[9];
        $pl = new EdtPlanning();
        $pl->setAnneeUniversitaire($this->anneeUniversitaire);
        $pl->setOrdreSemestre($ordreSemestre);
        if ('' !== $matiere && array_key_exists($matiere, $this->tabMatieres)) {
            $pl->setIdMatiere($this->tabMatieres[$matiere]->id);
            $pl->setTypeMatiere($this->tabMatieres[$matiere]->typeMatiere);
            $pl->setTexte(null);
        } else {
            $pl->setTexte((string)utf8_encode($phrase[7]));
        }
        if ('' !== $prof && 'DOE' !== $prof && 'PRJ' !== $prof && array_key_exists($prof, $this->tabIntervenants)) {
            $pl->setIntervenant($this->tabIntervenants[$prof]);
        } else {
            $pl->setIntervenant(null);
        }

        $pl->setJour($jour);
        $pl->setSalle($salle);
        $pl->setDate($date);
        $pl->setType(mb_substr($phrase[10], 0, 2));//juste CM, TD ou TP
        $pl->setDiplome($this->diplome);
        $this->addGroupe($pl, $phrase[10], $phrase[11]);
        $pl->setDebut($this->tabdebut[$heure]);
        $pl->setFin($this->tabdebut[$heure] + 3 * $phrase[3]);//$phrase[3] = nombre de créneaux
        $pl->setSemaine($this->semaine);
        $pl->setEvaluation(false);
        $this->entityManager->persist($pl);
        $this->log->addItem('Ajout du cours ' . implode('.', $phrase), 'success');

    }

    private function addGroupe(EdtPlanning $pl, string $typeGroupe, string $groupes): void
    {
        $typecours = mb_substr($typeGroupe, 0, 2);
        $typeGroupeComplement = mb_substr($typeGroupe, 2);
        $pl->setType(mb_strtoupper($typecours));

        if ($typecours === 'CM' && str_starts_with($typeGroupeComplement, 'S')) {
            $pl->setGroupe(1); //CM Classique sur tous les groupes
        } elseif ($typecours === 'TD' && strlen($groupes) === 2) {
            if (ord($groupes[0]) === ord($groupes[1]) - 1) {
                $pl->setGroupe(ord($groupes[0]) - 64); // deux lettre qui se suivent, donc TD classique ou CM particulier
            } else {
                $pl->setGroupe(40 + ord($groupes[0]) - 64); // on ajoute 40 pour indiquer que c'est sur 4 ?
            }
        } elseif ($typecours === 'TP' && strlen($groupes) === 1) {
            //TP classique
            $pl->setGroupe(ord($groupes[0]) - 64);
        } elseif ($typecours === 'CM' && str_starts_with($typeGroupeComplement, 'FI')) {
            //S3 CM sur les deux groupes FI, on a donc groupes = ABCD
            if (ord($groupes[0]) === ord($groupes[strlen($groupes) - 1]) - 1) {
                $pl->setGroupe(ord($groupes[0]) - 64); // deux lettre qui se suivent, donc TD classique ou CM particulier
            } else {
                $pl->setGroupe(40 + ord($groupes[0]) - 64); // on ajoute 40 pour indiquer que c'est sur 4 ?
            }
        }
    }
}
