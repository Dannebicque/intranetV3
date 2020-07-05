<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Edt/BaseEdt.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:33

namespace App\Classes\Edt;


use App\Entity\AnneeUniversitaire;
use App\Entity\Calendrier;
use App\Entity\Etudiant;
use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Repository\CalendrierRepository;
use DateTime;
use RuntimeException;

Abstract class BaseEdt
{
    protected $tabJour = [];

    protected $semaines;

    protected $semaine;

    /** @var Calendrier */
    protected $calendrier;

    protected $semaineFormation;

    /** @var CalendrierRepository */
    protected $calendrierRepository;
    /**
     * @var int|null
     */
    protected $semaineFormationIUT;
    /** @var DateTime */
    protected $semaineFormationLundi;
    protected $filtre;
    protected $valeur;
    protected $total = [];

    /**
     * @var Semestre|null
     */
    protected $semestre;

    /**
     * @var Personnel|Etudiant
     */
    protected $user;

    /**
     * @var Matiere|null
     */
    protected $module;

    protected $groupes;

    protected $jour;
    protected $salle;
    protected $groupetd = 0;
    protected $groupetp = 0;

    protected $planning;

    /** @var AnneeUniversitaire */
    private $anneeUniversitaire;

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
        $this->anneeUniversitaire = $anneeUniversitaire;

        $this->total['CM'] = 0;
        $this->total['TD'] = 0;
        $this->total['TP'] = 0;

        //pour gérer les vacances
        if ($semaine >= 29 && $semaine < 35) {
            $semaine = 35;
        }

        if ($semaine === 0) {
            $semaine = (int)date('W');

            if ($semaine >= 29 && $semaine < 35) {
                $semaine = 35;
            }
            $this->semaine = $semaine;

            //traitement du Week end
            if (date('N') === ('6' || '7')) {
                $this->semaine++;
                if ($this->semaine > 52) {
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
        $njour = (int)$this->semaineFormationLundi->format('d');
        $mois = $this->semaineFormationLundi->format('m');
        $annee = $this->semaineFormationLundi->format('Y');

        $this->tabJour['lundi'] = date('d-m-Y', mktime(12, 30, 00, $mois, $njour, $annee));
        $this->tabJour['mardi'] = date('d-m-Y', mktime(12, 30, 00, $mois, $njour + 1, $annee));
        $this->tabJour['mercredi'] = date('d-m-Y', mktime(12, 30, 00, $mois, $njour + 2, $annee));
        $this->tabJour['jeudi'] = date('d-m-Y', mktime(12, 30, 00, $mois, $njour + 3, $annee));
        $this->tabJour['vendredi'] = date('d-m-Y', mktime(12, 30, 00, $mois, $njour + 4, $annee));
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
            return 52;
        }
            return $s;

    }

    /**
     * @return int
     */
    public function getSemaineSuivante(): int
    {
        $s = $this->semaine + 1;
        if ($s === 53) {
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

}
