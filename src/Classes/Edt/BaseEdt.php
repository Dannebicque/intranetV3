<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Edt/BaseEdt.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 19/08/2020 19:49

namespace App\Classes\Edt;


use App\Entity\AnneeUniversitaire;
use App\Entity\Calendrier;
use App\Entity\Etudiant;
use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Repository\CalendrierRepository;
use Carbon\Carbon;
use RuntimeException;

Abstract class BaseEdt
{
    protected array $tabJour = [];

    protected $semaines;

    protected $semaine;

    protected ?Calendrier $calendrier;

    protected $semaineFormation;

    protected CalendrierRepository $calendrierRepository;

    protected ?int $semaineFormationIUT;

    protected ?Carbon $semaineFormationLundi;
    protected $filtre;
    protected $valeur;
    protected array $total = [];

    protected ?Semestre $semestre;

    /**
     * @var Personnel|Etudiant
     */
    protected $user;

    protected ?Matiere $module;

    protected $groupes;

    protected $jour;
    protected $salle;
    protected int $groupetd = 0;
    protected int $groupetp = 0;

    protected $planning;

    private AnneeUniversitaire $anneeUniversitaire;

    /**
     * MyEdt constructor.
     *
     * @param CalendrierRepository $calendrierRepository
     */
    public function __construct(
        CalendrierRepository $calendrierRepository
    ) {
        $this->calendrierRepository = $calendrierRepository;
    }

    /**
     * @return mixed
     */
    public function getSemaineFormation()
    {
        return $this->semaineFormationIUT;
    }

    /**
     * @return mixed
     */
    public function getSemaine()
    {
        return $this->semaine;
    }

    /**
     * @return array
     */
    public function getTabJour(): array
    {
        return $this->tabJour;
    }

    protected function init($filtre = '', $valeur = '', $semaine = 0, AnneeUniversitaire $anneeUniversitaire): BaseEdt
    {
        $dateDuJour = Carbon::now();
        $this->anneeUniversitaire = $anneeUniversitaire;
        $this->total['CM'] = 0;
        $this->total['TD'] = 0;
        $this->total['TP'] = 0;

        //pour gérer les vacances
        if ($semaine >= 29 && $semaine < 35) {
            $semaine = 35;
        }

        if ($semaine === 0) {
            $semaine = $dateDuJour->weekOfYear;

            if ($semaine >= 29 && $semaine < 35) {
                $semaine = 35;
            }
            $this->semaine = $semaine;

            //traitement du Week end
            if ($dateDuJour->dayOfWeek === Carbon::SATURDAY || $dateDuJour->dayOfWeek === Carbon::SUNDAY) {
                $this->semaine++;
                if ($this->semaine > Carbon::WEEKS_PER_YEAR) {
                    $this->semaine = 1;
                }
            }
        } else {
            if ($semaine >= 29 && $semaine < 35) {
                $semaine = 35;
            }
            $this->semaine = $semaine;
        }


        $this->calendrier = $this->calendrierRepository->findOneBy(['semaineReelle' => $this->semaine]);
        if ($this->calendrier !== null) {
            $this->semaineFormationIUT = $this->calendrier->getSemaineFormation();
            $this->semaineFormationLundi = $this->calendrier->getDatelundi();
        } else {
            //si la requete est vide, on prend la première...
            $this->calendrier = $this->calendrierRepository->findOneBy(['semaineFormation' => 1]);
            if ($this->calendrier !== null) {
                $this->semaineFormationIUT = $this->calendrier->getSemaineFormation();
                $this->semaineFormationLundi = $this->calendrier->getDatelundi();
                $this->semaine = $this->calendrier->getSemaineReelle();
            } else {
                throw new RuntimeException('Erreur de semaine');
            }
        }

        if ($filtre === '') {
            $this->filtre = 'promo';
            //récupérer promo par défaut !
        } else {
            $this->filtre = $filtre;
        }

        if ($valeur === '') {
            //todo: a refaire...
        } else {
            $this->valeur = $valeur;
        }
        $this->getJours();

        return $this;
    }

    private function getJours(): void
    {
        $this->tabJour['lundi'] = $this->semaineFormationLundi;
        $this->tabJour['mardi'] = $this->semaineFormationLundi->copy()->addDays(1);
        $this->tabJour['mercredi'] = $this->semaineFormationLundi->copy()->addDays(2);
        $this->tabJour['jeudi'] = $this->semaineFormationLundi->copy()->addDays(3);
        $this->tabJour['vendredi'] = $this->semaineFormationLundi->copy()->addDays(4);
    }

    /**
     * @return mixed
     */
    public function getFiltre()
    {
        return $this->filtre;
    }

    /**
     * @return mixed
     */
    public function getValeur()
    {
        return $this->valeur;
    }

    /**
     * @return mixed
     */
    public function getPlanning()
    {
        return $this->planning;
    }

    /**
     * @return int
     */
    public function getSemainePrecedente(): int
    {
        $s = (int)$this->semaine - 1;

        if ($s === 0) {
            return Carbon::WEEKS_PER_YEAR;
        }
            return $s;

    }

    /**
     * @return int
     */
    public function getSemaineSuivante(): int
    {
        $s = $this->semaine + 1;
        if ($s > Carbon::WEEKS_PER_YEAR) {
            return 1;
        }
            return $s;
    }

    /**
     * @return array
     */
    public function getTotal(): array
    {
        return $this->total;
    }

    /**
     * @return Semestre|null
     */
    public function getSemestre(): ?Semestre
    {
        return $this->semestre;
    }

    /**
     * @return Matiere|null
     */
    public function getModule(): ?Matiere
    {
        return $this->module;
    }

    /**
     * @return mixed
     */
    public function getJour()
    {
        return $this->jour;
    }

    /**
     * @return mixed
     */
    public function getSalle()
    {
        return $this->salle;
    }

    /**
     * @return mixed
     */
    public function getGroupes()
    {
        return $this->groupes;
    }

    /**
     * @return array
     */
    protected function calculSemaines(): array
    {
        $allsemaine = $this->calendrierRepository->findByAnneeUniversitaire($this->anneeUniversitaire);

        $t = [];
        $i = 0;
        /** @var Calendrier $s */
        foreach ($allsemaine as $s) {
            $t[$i]['semaineReelle'] = $s->getSemaineReelle();
            $t[$i]['semaineIUT'] = $s->getSemaineFormation();
            $t[$i]['debut'] = $s->getDatelundi();
            $date1 = strtotime($t[$i]['debut']->format('Y-m-d'));
            $fin = date('d-m-Y', mktime(12, 30, 00, date('n', $date1), date('j', $date1) + 7, date('Y', $date1)));
            $t[$i]['fin'] = $fin;
            $i++;
        }

        return $t;
    }


    /**
     * @return mixed
     */
    public function getSemaines()
    {
        return $this->semaines;
    }

    protected function convertEdt($nb): ?int
    {
        switch ($nb) {
            case 1:
                return 1;
            case 3:
            case 4:
                return 2;
            case 7:
            case 8:
                return 3;
            case 10:
                return 4;
            case 12:
            case 13:
                return 5;
            case 16:
            case 17:
                return 6;
            case 19:
                return 7;
            default:
                return null;
        }
    }
}
