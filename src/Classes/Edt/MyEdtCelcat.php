<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Edt/MyEdtCelcat.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:33

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 05/09/2018
 * Time: 16:46
 */

namespace App\Classes\Edt;


use App\Entity\Annee;
use App\Entity\AnneeUniversitaire;
use App\Entity\CelcatEvent;
use App\Entity\Etudiant;
use App\Entity\Groupe;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Repository\CalendrierRepository;
use App\Repository\CelcatEventsRepository;
use App\Repository\GroupeRepository;
use App\Repository\MatiereRepository;

class MyEdtCelcat extends BaseEdt
{
    /** @var CelcatEventsRepository */
    protected $celcatEventsRepository;


    /** @var Annee */
    private $annee;

    /**
     * @var GroupeRepository
     */
    private $groupeRepository;

    /** @var MatiereRepository */
    private $matiereRepository;
    /**
     * @var string|null
     */
    private $groupecm;

    public function __construct(
        CalendrierRepository $celcatCalendrierRepository,
        CelcatEventsRepository $celcatEventsRepository,
        GroupeRepository $groupeRepository,
        MatiereRepository $matiereRepository
    ) {
        parent::__construct($celcatCalendrierRepository);
        $this->celcatEventsRepository = $celcatEventsRepository;
        $this->groupeRepository = $groupeRepository;
        $this->matiereRepository = $matiereRepository;
    }

    /**
     * @param Personnel          $personnel
     * @param AnneeUniversitaire $anneeUniversitaire
     * @param int                $semaine
     *
     * @return MyEdtCelcat
     */
    public function initPersonnel(Personnel $personnel, AnneeUniversitaire $anneeUniversitaire, $semaine = 0): MyEdtCelcat
    {
        $this->user = $personnel;
        $this->init('prof', $personnel->getId(), $semaine, $anneeUniversitaire);
        $this->semaines = $this->calculSemaines();
        $this->calculEdt();
        return $this;
    }

    /**
     * @param Etudiant           $etudiant
     * @param AnneeUniversitaire $anneeUniversitaire
     * @param int                $semaine
     *
     * @return MyEdtCelcat
     */
    public function initEtudiant(Etudiant $etudiant, AnneeUniversitaire $anneeUniversitaire, $semaine = 0): MyEdtCelcat
    {
        $this->user = $etudiant;
        $this->init('etudiant', $etudiant->getId(), $semaine, $anneeUniversitaire);
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
            if (array_key_exists($p->getCodeGroupe(), $gr)) {
                $groupe = $gr[$p->getCodeGroupe()];
                $jour = $p->getJour() + 1;
                $dbtEdt = $p->getDebut();

                $tab[$jour][$dbtEdt][$groupe]['duree'] = $p->getFin() - $p->getDebut();

                $tab[$jour][$dbtEdt][$groupe]['couleur'] = $this->getCouleur($p);
                $tab[$jour][$dbtEdt][$groupe]['couleurTexte'] = $this->annee->getCouleurTexte();

                switch ($p->getType()) {
                    case 'CM':
                    case 'cm':
                        $tab[$jour][$dbtEdt][$groupe]['largeur'] = $this->semestre->getNbgroupeTPEDT();
                        break;
                    case 'TP':
                    case 'tp':
                        $tab[$jour][$dbtEdt][$groupe]['largeur'] = 1;
                        break;
                    case 'TD':
                    case 'td':
                        $tab[$jour][$dbtEdt][$groupe]['largeur'] = 2;
                        break;
                }

                $groupefin = $groupe + $tab[$jour][$dbtEdt][$groupe]['largeur'];
                $fin = $p->getFin();
                for ($i = $dbtEdt; $i < $fin; $i++) {
                    for ($j = $groupe; $j < $groupefin; $j++) {
                        $tab[$jour][$i][$j]['texte'] = 'xx';
                    }
                }

                $tab[$jour][$dbtEdt][$groupe]['texte'] = $p->getLibModule() . '<br />' . $p->getLibSalle() . '<br />' . $p->getLibPersonnel() . ' |  ' . $p->getType() . ' |  ' . $p->getLibGroupe();
            }
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
                $tab[$p->getJour()][$dbtEdt]['couleurTexte'] = $this->annee->getCouleurTexte();

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
            if ($groupe->getTypeGroupe() !== null) {
                if ($groupe->getTypegroupe()->isTd()) {
                    $this->groupetd = $groupe->getCodeApogee();
                } else if ($groupe->getTypegroupe()->isTp()) {
                    $this->groupetp = $groupe->getCodeApogee();

                } else {
                    $this->groupecm = $groupe->getCodeApogee();
                }
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

    public function initSemestre(int $semaine, Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): MyEdtCelcat
    {
        $this->semestre = $semestre;
        $this->init('promo', $semestre->getId(), $semaine, $anneeUniversitaire);
        $this->semaines = $this->calculSemaines();
        $this->calculEdt();
        return $this;
    }

}
