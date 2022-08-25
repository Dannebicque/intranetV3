<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Edt/MyEdtImport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/08/2022 20:36
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
use App\Entity\EdtPlanning;
use App\Entity\Semestre;
use App\Enums\TypeGroupeEnum;
use App\Repository\CalendrierRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use function array_key_exists;
use Carbon\CarbonInterface;
use Doctrine\ORM\EntityManagerInterface;
use Exception;

class MyEdtImport
{
    protected array $tabIntervenants;
    protected array $tabMatieres;
    protected array $tabSemestre;
    protected array $tabdebut;
    protected array $tSemaineClear;
    protected ?Departement $departement;

    protected AnneeUniversitaire $anneeUniversitaire;
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
        private readonly CalendrierRepository $calendrierRepository,
        private readonly PersonnelRepository $personnelRepository,
        private readonly TypeMatiereManager $typeMatiereManager,
        private readonly SemestreRepository $semestreRepository,
        private readonly EntityManagerInterface $entityManager,
    ) {
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
            /* Tant que l'on est pas à la fin du fichier */
            while (!feof($handle)) {
                /* On lit la ligne courante */
                $phrase = fgets($handle);
                $phrase = trim($phrase);

                if (mb_strlen($phrase) > 10 && '*' !== $phrase[mb_strlen($phrase) - 1]) {
                    if (null === $this->calendrier) {
                        $this->semaine = mb_substr($phrase, 1, 2);
                        $this->calendrier = $this->calendrierRepository->findOneBy([
                            'semaineFormation' => $this->semaine,
                            'anneeUniversitaire' => $this->anneeUniversitaire->getId(),
                        ]);
                    }
                    $this->traiteLigne($phrase);
                }
            }

            // fin de fichier
            /* On ferme le fichier */

            fclose($handle);
            unlink($this->nomfile); // suppression du fichier
            $this->entityManager->flush();
        }

        // erreur lors de l'ouverture du fichier
    }

    private function traiteLigne(string $phrase): void
    {
        $this->semaine = mb_substr($phrase, 1, 2); // on ne récupère pas le S

        $semestre = mb_substr($phrase, 5, 2);
        $this->verifieSiSemaineDoitEtreEffacee($semestre);
        switch ($phrase[12]) {
            case 'Z':
                // prof commence par Z, donc, c'est une zone sans enseignant
                $this->addZoneSansProf($phrase, $semestre);
                break;
            default:
                $this->addCours($phrase, $semestre);
                break;
        }
    }

    public function getSemaine()
    {
        return $this->semaine;
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
        $sem = $this->edtPlanningRepository->findBy([
            'semaine' => $semaine,
            'ordreSemestre' => $semestre,
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
            $this->clearSemaine($this->semaine,
                $semestre); // on envoie l'ordre du semestre et pas son id pour le BUT et les parcours
            // on mémorise le semestre
            $this->log->addItem('Le semestre '.$semestre.' pour l\'ensemble des parcours a été effacé avant l\'import.');
            $this->tSemaineClear[$semestre] = true;
        }
    }

    private function addZoneSansProf(string $phrase, string $semestre): void
    {
        //S055403ETDEHZ04****3ALTERNANCE

        $jour = $phrase[3];
        $heure = $phrase[4]; // a convertir
        $date = $this->convertToDate($jour);
        $salle = mb_substr($phrase, 15, 4);
        $fin = $phrase[19];
        $texte = mb_substr($phrase, 20);
//        // todo: traiter groupe TD Exemple TDEH => Implique TD EF et TD GH.
//        // todo: 3 => Nombre de ligne pour le TD Exemple => 3
//        // todo: si projet => PRJ + code SAE (PRJ WS...)
//
        $pl = new EdtPlanning();
        $pl->setOrdreSemestre((int) $semestre);
        $pl->setIdMatiere(0);
        $pl->setIntervenant(null);
        $pl->setJour($jour);
        $pl->setDate($date);
        $pl->setSalle($salle);

        $this->addGroupe($pl, mb_substr($phrase, 8, 4));

        $pl->setDebut($this->tabdebut[$heure]);
        $pl->setFin($this->tabdebut[$heure] + (3 * (int)$fin));
        $pl->setSemaine($this->semaine);
        $pl->setEvaluation(false);
        $pl->setTexte($texte);

        $this->entityManager->persist($pl);
    }

    private function addCours(string $phrase, string $semestre)
    {
        /* Exemple :
         S054101BTP-BPGOWR117TP01H205
         S051501CTP-CFMEWR110TP03STUD01 // studio
         S052303ATDABDANWR319aTD02H201 // lettre en minuscule ?? a, b, c
         S051103ETDEHZ04****3ALTERNANCE // Zone
        */
        $jour = $phrase[3];
        $heure = $phrase[4]; // a convertir
        $date = $this->convertToDate($jour);
        $groupe = $phrase[7];
        $ordreSemestre = (int) mb_substr($phrase, 6, 2);
        $prof = mb_substr($phrase, 12, 3);
        $typecours = mb_substr($phrase, 8, 2);
        $matiere = '';
        $salle = '-';
        $ordre = 0;

        if ('S' === $phrase[16] || 'R' === $phrase[16]) {
            if ('T' === $phrase[20] || 'C' === $phrase[20]) {
                // code sur 5 caractères
                $matiere = mb_substr($phrase, 15, 5);
                $ordre = mb_substr($phrase, 22, 2);
                $salle = mb_substr($phrase, 24);
            } else {
                // code sur 6, avec parcours
                $matiere = mb_substr($phrase, 15, 6);
                $ordre = mb_substr($phrase, 23, 2);
                $salle = mb_substr($phrase, 25);
            }
        } else {
            $this->log->addItem('Pas une ressource ou une SAE : '.$phrase);
        }

        if ('' !== $matiere && array_key_exists($matiere, $this->tabMatieres)) {
            $pl = new EdtPlanning();
            $pl->setAnneeUniversitaire($this->anneeUniversitaire);
            $pl->setOrdreSemestre($ordreSemestre);
            $pl->setIdMatiere($this->tabMatieres[$matiere]->id);
            $pl->setTypeMatiere($this->tabMatieres[$matiere]->typeMatiere);

            if ('DOE' !== $prof && 'PRJ' !== $prof && array_key_exists($prof, $this->tabIntervenants)) {
                $pl->setIntervenant($this->tabIntervenants[$prof]);
            } else {
                $pl->setIntervenant(null);
            }
            $pl->setJour($jour);
            $pl->setSalle($salle);
            $pl->setOrdre($ordre);
            $pl->setDate($date);
            $this->addGroupe($pl, mb_substr($phrase, 8, 4));
            $pl->setDebut($this->tabdebut[$heure]);
            $pl->setFin($this->tabdebut[$heure] + 3);
            $pl->setSemaine($this->semaine);
            if ('EVAL' === $salle) {
                $pl->setEvaluation(true);
            } else {
                $pl->setEvaluation(false);
            }

            $this->entityManager->persist($pl);
            $this->log->addItem('Ajout du cours '.$phrase, 'success');
        }
    }

    private function addGroupe(EdtPlanning $pl, string $phrase)
    {
        $typecours = mb_substr($phrase, 0, 2);
        $pl->setType(mb_strtoupper($typecours));

        $groupe = mb_substr($phrase, 2, 2);
        if ($groupe === 'CM') {
            $pl->setGroupe(1);
        }
        else if ('-' === $groupe[0]) {
            $pl->setGroupe(ord($groupe[1]) - 64);
        } else {
            if (ord($groupe[0]) === ord($groupe[1]) - 1) {
                $pl->setGroupe(ord($groupe[0]) - 64); // deux lettre qui se suivent, donc TD classique
            } else {
                $pl->setGroupe(40 + ord($groupe[0]) - 64); // on ajoute 40 pour indiquer que c'est sur 4 ?
            }
        }
    }
}
