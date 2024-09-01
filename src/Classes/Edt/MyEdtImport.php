<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Edt/MyEdtImport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/09/2024 11:44
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
use App\Repository\DiplomeRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\PersonnelRepository;
use Carbon\Carbon;
use Carbon\CarbonInterface;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use function array_key_exists;

class MyEdtImport
{
    protected array $tabIntervenants;
    protected array $tabMatieres;
    protected array $tSemaineClear;
    protected ?Departement $departement;

    protected AnneeUniversitaire $anneeUniversitaire;
    protected ?Diplome $diplome = null;
    private ?string $nomfile = null;
    private int $semaine;
    private ?Semestre $semestre = null;
    private LogHelper $log;

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
        'WRA501C' => 'WRA501',
        'WRA502C' => 'WRA502',
        'WRA503C' => 'WRA503',
        'WRA504C' => 'WRA504',
        'WRA505C' => 'WRA505C',
        'WRA506C' => 'WRA506C',
        'WRA507C' => 'WRA507C',
        'WRA508C' => 'WRA508C',
        'WRA501S' => 'WRA501',
        'WRA502S' => 'WRA502',
        'WRA503S' => 'WRA503',
        'WRA504S' => 'WRA504',
        'WRA505S' => 'WRA505S',
        'WRA506S' => 'WRA506S',
        'WRA507S' => 'WRA507S',
        'WRA508S' => 'WRA508S',
        'WRA509S' => 'WRA509S',
    ];

    /**
     * MyEdtImport constructor.
     */
    public function __construct(
        private readonly EdtPlanningRepository $edtPlanningRepository,
        private readonly PersonnelRepository   $personnelRepository,
        private readonly TypeMatiereManager    $typeMatiereManager,
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

    private function traiteLigne(array $phrase): void
    {
        $this->semaine = (int)$phrase[7] + 1; //par rapport à celcat
        $semestre = mb_substr($phrase[8], 1, 2);
        $this->verifieSiSemaineDoitEtreEffacee($semestre);
        $this->addCours($phrase, $semestre);
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

    private function verifieSiSemaineDoitEtreEffacee(string $semestre): void
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

        if ($semestre === 3) {
            $matiere = self::CORRESPONDANCE_S3[$phrase[1]];
        } elseif ($semestre === 5) {
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

            if ('' !== $prof && 'DOE' !== $prof && 'PRJ' !== $prof && array_key_exists($prof, $this->tabIntervenants)) {
                $pl->setIntervenant($this->tabIntervenants[$prof]);
            } else {
                $pl->setIntervenant(null);
            }

            $pl->setJour($date->dayOfWeek()); // à déduire de la date
            $pl->setSalle(mb_strtoupper($salle));
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

            $pl->setSemaine((int)$this->semaine);//décalage avec Celcat
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
