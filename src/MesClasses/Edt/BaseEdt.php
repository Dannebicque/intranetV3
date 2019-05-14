<?php
/**
 * Copyright (C) 2013 - 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 *
 * @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/Edt/BaseEdt.php
 * @author David annebicque
 * @project intranetv3
 * @date  07/05/2019 10:42
 * @lastUpdate 07/05/2019 10:42
 *
 */

namespace App\MesClasses\Edt;


use App\Entity\Calendrier;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Repository\CalendrierRepository;

Abstract class BaseEdt
{
    protected $tabJour = [];

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
    protected $semaineFormationLundi;
    protected $filtre;
    protected $valeur;

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
    public function getTabJour()
    {
        return $this->tabJour;
    }

    public function init($filtre = '', $valeur = '', $semaine = 0)
    {
        //$this->syncCelcat = $formation->getOptUpdateCelcat();
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
                //todo: lever une exception 500
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

    private function getJours()
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


}
