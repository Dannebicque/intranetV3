<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/Edt/MyEdtCelcat.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 05/09/2018
 * Time: 16:46
 */

namespace App\MesClasses\Edt;


use App\Entity\Annee;
use App\Entity\CelcatEvent;
use App\Entity\Etudiant;
use App\Entity\Groupe;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Repository\CalendrierRepository;
use App\Repository\CelcatEventsRepository;
use App\Repository\GroupeRepository;
use App\Repository\MatiereRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Exception;

class MyEdtCelcat extends BaseEdt
{
    /** @var CelcatEventsRepository */
    protected $celcatEventsRepository;

    private $groupecm;

    /** @var Annee */
    private $annee;

    /** @var SemestreRepository */
    private $semestreRepository;

    /**
     * @var GroupeRepository
     */
    private $groupeRepository;
    /** @var PersonnelRepository */
    private $personnelRepository;
    /** @var MatiereRepository */
    private $matiereRepository;

    public function __construct(
        CalendrierRepository $celcatCalendrierRepository,
        CelcatEventsRepository $celcatEventsRepository,
        SemestreRepository $semestreRepository,
        GroupeRepository $groupeRepository,
        PersonnelRepository $personnelRepository,
        MatiereRepository $matiereRepository
    ) {
        parent::__construct($celcatCalendrierRepository);
        $this->celcatEventsRepository = $celcatEventsRepository;
        $this->semestreRepository = $semestreRepository;
        $this->groupeRepository = $groupeRepository;
        $this->personnelRepository = $personnelRepository;
        $this->matiereRepository = $matiereRepository;
    }

    /**
     * @param Personnel $personnel
     * @param int       $semaine
     *
     * @return MyEdtCelcat
     * @throws Exception
     */
    public function initPersonnel(Personnel $personnel, $semaine = 0): MyEdtCelcat
    {
        $this->user = $personnel;
        $this->init('prof', $personnel->getId(), $semaine);
        $this->semaines = $this->calculSemaines();
        $this->calculEdt();
        return $this;
    }

    /**
     * @param Etudiant $etudiant
     * @param int      $semaine
     *
     * @return MyEdtCelcat
     * @throws Exception
     */
    public function initEtudiant(Etudiant $etudiant, $semaine = 0): MyEdtCelcat
    {
        $this->user = $etudiant;
        $this->init('etudiant', $etudiant->getId(), $semaine);
        $this->calculEdt();
        return $this;
    }

    public function initAdministration(): void
    {
    }

    public function calculEdt(): bool
    {
        if ($this->semaineFormationIUT !== '') {
            switch ($this->filtre) {
                case 'promo':
                    $this->groupes = $this->groupeRepository->findAllGroupes($this->semestre);
                    $pl = $this->celcatEventsRepository->findEdtSemestre($this->semestre, $this->semaineFormationIUT);
                    $this->planning = $this->transformePromo($pl);

                    break;
                case 'prof':
                    $pl = $this->celcatEventsRepository->findEdtProf($this->user->getNumeroHarpege(), $this->semaineFormationIUT);
                    $this->planning = $this->transformeProf($pl);
                    break;
                case 'etudiant':
                    $pl = $this->celcatEventsRepository->findEdtEtu($this->user, $this->semaineFormationIUT);
                    $this->annee = $this->user->getSemestre() !== null ? $this->user->getSemestre()->getAnnee() : null;

                    if ($pl !== null) {
                        $this->planning = $this->transformeEtudiant($pl);
                        $this->semestre = $this->user->getSemestre();
                    } else {
                        return false;
                    }
                    break;
//                case 'module':
//                    $this->module = $this->matiereRepository->find($this->valeur);
//                    $this->semestre = $this->module->getSemestre();
//                    $this->groupes = $this->groupeRepository->findAllGroupes($this->semestre);
//
//                    $pl = $this->edtPlanningRepository->findEdtModule($this->valeur, $this->semaineFormationIUT);
//                    $this->planning = $this->transformeModule($pl);
//                    break;
//                case 'salle':
//                    $pl = $this->edtPlanningRepository->findEdtSalle($this->valeur, $this->semaineFormationIUT);
//                    $this->salle = $this->valeur;
//                    $this->planning = $this->transformeSalle($pl);
//                    break;
//
//                case 'jour':
//                    $pl = $this->edtPlanningRepository->findEdtJour($this->valeur,
//                        $this->semaineFormationIUT);
//
//                    $this->jour = $this->valeur;
//                    $this->planning = $this->transformeJour($pl);
//                    break;
            }
        }

        return false;
    }

    public function transformePromo($pl): array
    {

        $gr = array();
        $groupes = $this->groupeRepository->getGroupesTP($this->semestre->getId());

        /** @var Groupe $groupe */
        foreach ($groupes as $groupe) {
            $gr[$groupe->getCodeapogee()] = $groupe->getOrdre();
        }

        $tab = array();
        /** @var CelcatEvent $p */
        foreach ($pl as $p) {
            $groupe = $gr[$p->getCodeGroupe()];
            $jour = $p->getJour() + 1;
            $dbtEdt = $p->getDebut();

            $tab[$jour][$dbtEdt][$groupe]['duree'] = $p->getFin() - $p->getDebut();

            $tab[$jour][$dbtEdt][$groupe]['couleur'] = $this->getCouleur($p);
            $tab[$jour][$dbtEdt][$groupe]['couleurTexte'] = $this->annee->getCouleurTexte();


            $taille = 0;
            switch ($p->getType()) {
                case 'CM':
                case 'cm':
                    $tab[$jour][$dbtEdt][$groupe]['largeur'] = $this->semestre->getNbgroupeTPEDT();
                    $taille = 0;
                    break;
                case 'TP':
                case 'tp':
                    $tab[$jour][$dbtEdt][$groupe]['largeur'] = 1;
                    $taille = 4;
                    break;
                case 'TD':
                case 'td':
                    $tab[$jour][$dbtEdt][$groupe]['largeur'] = 2;
                    $taille = 8;
                    break;
            }

            $groupefin = $groupe + $tab[$jour][$dbtEdt][$groupe]['largeur'];
            $fin= $p->getFin();
            for ($i = $dbtEdt; $i < $fin; $i++) {
                for ($j = $groupe; $j < $groupefin; $j++) {
                    $tab[$jour][$i][$j]['texte'] = 'xx';
                }
            }

            $tab[$jour][$dbtEdt][$groupe]['texte'] = $p->getLibModule() . '<br />' . $p->getLibSalle() . '<br />' . $p->getLibPersonnel() . ' |  ' . $p->getType() . ' |  ' . $p->getLibGroupe();

        }

        return $tab;
    }

    /**
     * @param $pl
     *
     * @return array
     */
    private function transformeProf($pl): array
    {
        $tab = [];

        /** @var CelcatEvent $p */
        foreach ($pl as $p) {
            $dbtEdt = $p->getDebut();
            $finEdt = $p->getFin();

            $tab[$p->getJour()][$dbtEdt]['duree'] = $p->getFin() - $p->getDebut();

            for ($i = $dbtEdt; $i < $finEdt; $i++) {
                $tab[$p->getJour()][$i]['texte'] = 'xx';
            }

            $tab[$p->getJour()][$dbtEdt]['texte'] = $p->getLibSalle() . '<br />' . $p->getLibModule() . '<br /> sem?! |  ' . $p->getLibGroupe();

            $tab[$p->getJour()][$dbtEdt]['couleur'] = $this->getCouleurFromModule($p);
            $tab[$p->getJour()][$dbtEdt]['pl'] = $p->getId();
            $tab[$p->getJour()][$dbtEdt]['couleurTexte'] = '#ffffff'; //$this->getCouleurTexte($p);
            $this->calculTotal($p);

        }

        return $tab;
    }

    /**
     * @param $pl
     *
     * @return array
     */
    private function transformeEtudiant($pl) : array
    {
        $tab = [];
        $this->groupes();

        /** @var CelcatEvent $p */
        foreach ($pl as $p) {
            if ((strtolower($p->getType()) === 'cm') || (strtolower($p->getType()) === 'td' && $p->getCodeGroupe() === $this->groupetd) || (strtolower($p->getType()) === 'tp' && $p->getCodeGroupe() === $this->groupetp)) {
                $dbtEdt = $p->getDebut();
                $finEdt = $p->getFin();
                $debut = $p->getDebut();
                $tab[$p->getJour()][$dbtEdt] = [];
                $tab[$p->getJour()][$dbtEdt]['duree'] = $p->getFin() - $debut;

                for ($i = $dbtEdt; $i < $finEdt; $i++) {
                    $tab[$p->getJour()][$i]['texte'] = 'xx';
                }

                $tab[$p->getJour()][$dbtEdt]['texte'] =  $p->getLibModule() . '<br />'. $p->getLibSalle() . ' | ' . $p->getLibGroupe() . ' <br /> ' . $p->getLibPersonnel();

                $tab[$p->getJour()][$dbtEdt]['couleur'] = $this->getCouleur($p);
                $tab[$p->getJour()][$dbtEdt]['pl'] = $p->getId();
                $tab[$p->getJour()][$dbtEdt]['couleurTexte'] = '#ffffff'; //$this->getCouleurTexte($p);

            }
        }
        return $tab;
    }

    /**
     *
     */
    private function groupes() : void
    {
        /** @var Groupe $groupe */
        foreach ($this->user->getGroupes() as $groupe) {
            if ($groupe->getTypegroupe()->isTd()) {
                $this->groupetd = $groupe->getCodeApogee();
            } else if ($groupe->getTypegroupe()->isTp()) {
                $this->groupetp = $groupe->getCodeApogee();

            } else {
                $this->groupecm = $groupe->getCodeApogee();

            }
        }
    }

    /**
     * @param CelcatEvent $p
     *
     * @return string
     */
    private function getCouleurFromModule(CelcatEvent $p): string
    {
        $matiere = $this->matiereRepository->findOneBy(array('codeapogee' => $p->getCodeModule()));
        if ($matiere !== null && $matiere->getSemestre() !== null) {
            $annee = $matiere->getSemestre()->getAnnee();
            if ($annee !== null) {
                switch ($p->getType()) {
                    case 'CM':
                    case 'cm':
                        return $annee->getCouleurCM();
                    case 'TD':
                    case 'td':
                        return $annee->getCouleurTd();
                    case 'TP':
                    case 'tp':
                        return $annee->getCouleurTp();
                    default:
                        return 'CCCCCC';
                }
            }
        }

        return 'CCCCCC';
    }
    /**
     * @param CelcatEvent $p
     *
     * @return string
     */
    private function getCouleur(CelcatEvent $p): ?string
    {

        switch ($p->getType()) {
            case 'CM':
            case 'cm':
                return $this->annee->getCouleurCM();
            case 'TD':
            case 'td':
                return $this->annee->getCouleurTd();
            case 'TP':
            case 'tp':
                return $this->annee->getCouleurTp();
            default:
                return 'CCCCCC';
        }
    }

    public function initSemestre(int $semaine, Semestre $semestre): MyEdtCelcat
    {
        $this->semestre = $semestre;
        $this->init('promo', $semestre->getId(), $semaine);
        $this->semaines = $this->calculSemaines();
        $this->calculEdt();
        return $this;
    }

}
