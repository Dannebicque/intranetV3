<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/Edt/MyEdt.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 24/11/2019 21:32

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 05/09/2018
 * Time: 16:46
 */

namespace App\MesClasses\Edt;


use App\Entity\Constantes;
use App\Entity\EdtPlanning;
use App\Entity\Etudiant;
use App\Entity\Groupe;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Repository\CalendrierRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\GroupeRepository;
use App\Repository\MatiereRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Exception;

class MyEdt extends BaseEdt
{
    /** @var EdtPlanningRepository */
    protected $edtPlanningRepository;


    /** @var SemestreRepository */
    private $semestreRepository;

    /**
     * @var GroupeRepository
     */
    private $groupeRepository;

    /** @var MatiereRepository */
    private $matiereRepository;


    /**
     * MyEdt constructor.
     *
     * @param CalendrierRepository  $celcatCalendrierRepository
     * @param EdtPlanningRepository $edtPlanningRepository
     * @param SemestreRepository    $semestreRepository
     * @param GroupeRepository      $groupeRepository
     * @param MatiereRepository     $matiereRepository
     */
    public function __construct(
        CalendrierRepository $celcatCalendrierRepository,
        EdtPlanningRepository $edtPlanningRepository,
        SemestreRepository $semestreRepository,
        GroupeRepository $groupeRepository,
        MatiereRepository $matiereRepository
    ) {
        parent::__construct($celcatCalendrierRepository);
        $this->edtPlanningRepository = $edtPlanningRepository;
        $this->semestreRepository = $semestreRepository;
        $this->groupeRepository = $groupeRepository;
        $this->matiereRepository = $matiereRepository;
    }


    /**
     * @param Personnel $personnel
     *
     * @param int       $semaine
     *
     * @return MyEdt
     * @throws Exception
     */
    public function initPersonnel(Personnel $personnel, $semaine = 0): MyEdt
    {
        $this->user = $personnel;
        $this->init('prof', $personnel->getId(), $semaine);
        $this->semaines = $this->calculSemaines();
        $this->calculEdt();//todo: pour des datas en BDD sans scelcat. Ajouter test.
        return $this;
    }



    /**
     * @param Etudiant $etudiant
     *
     * @param int      $semaine
     * @return MyEdt
     * @throws Exception
     */
    public function initEtudiant(Etudiant $etudiant, $semaine = 0): MyEdt
    {

        $this->user = $etudiant;
        $this->init('etudiant', $etudiant->getId(), $semaine);
        $this->calculEdt();
        return $this;
    }

    public function calculEdt(): bool
    {
        if ($this->semaineFormationIUT !== '') {
            switch ($this->filtre) {
                case 'promo':
                    $this->semestre = $this->semestreRepository->find($this->valeur);
                    $this->groupes = $this->groupeRepository->findAllGroupes($this->semestre);
                    $pl = $this->edtPlanningRepository->findEdtSemestre($this->semestre, $this->semaineFormationIUT);
                    $this->planning = $this->transformePromo($pl);

                    break;
                case 'prof':
                    $pl = $this->edtPlanningRepository->findEdtProf($this->valeur, $this->semaineFormationIUT);
                    $this->planning = $this->transformeProf($pl);
                    break;
                case 'etudiant':
                    $pl = $this->edtPlanningRepository->findEdtEtu($this->user, $this->semaineFormationIUT);

                    if ($pl !== null) {
                        $this->planning = $this->transformeEtudiant($pl);
                        $this->semestre = $this->user->getSemestre();
                    } else {
                        return false;
                    }
                    break;
                case 'module':
                    $this->module = $this->matiereRepository->find($this->valeur);
                    $this->semestre = $this->module->getSemestre();
                    $this->groupes = $this->groupeRepository->findAllGroupes($this->semestre);

                    $pl = $this->edtPlanningRepository->findEdtModule($this->valeur, $this->semaineFormationIUT);
                    $this->planning = $this->transformeModule($pl);
                    break;
                case 'salle':
                    $pl = $this->edtPlanningRepository->findEdtSalle($this->valeur, $this->semaineFormationIUT);
                    $this->salle = $this->valeur;
                    $this->planning = $this->transformeSalle($pl);
                    break;

                case 'jour':
                    $pl = $this->edtPlanningRepository->findEdtJour($this->valeur,
                        $this->semaineFormationIUT);

                    $this->jour = $this->valeur;
                    $this->planning = $this->transformeJour($pl);
                    break;
            }
        }

        return false;
    }


    public function initAdministration($departement, $semaine, $filtre, $valeur): MyEdt
    {
        if ($valeur === ''){
            $semestres = $this->semestreRepository->findByDepartementActif($departement);
            if (count($semestres) >0) {
                $valeur = $semestres[0]->getId();
            } else {
                //erreur
            }
        }

        $this->init($filtre, $valeur, $semaine);
        $this->semaines = $this->calculSemaines();
        $this->calculEdt();

        return $this;
    }

    /**
     * @param $pl
     *
     * @return array
     */
    private function transformeProf($pl): array
    {
        $tab = [];

        /** @var EdtPlanning $p */
        foreach ($pl as $p) {
            $dbtEdt = $this->convertEdt($p->getDebut());
            $finEdt = $this->convertEdt($p->getFin());

            $tab[$p->getJour()][$dbtEdt]['duree'] = $p->getFin() - $p->getDebut();

            for ($i = $dbtEdt; $i < $finEdt; $i++) {
                $tab[$p->getJour()][$i]['texte'] = 'xx';
            }

            $tab[$p->getJour()][$dbtEdt]['texte'] = $p->getSalle() . '<br />' . $this->isEvaluation($p) . '<br />' . $p->getSemestre()->getLibelle() . ' |  ' . $p->getDisplayGroupe();

            $tab[$p->getJour()][$dbtEdt]['couleur'] = $this->getCouleur($p);
            $tab[$p->getJour()][$dbtEdt]['pl'] = $p->getId();
            $tab[$p->getJour()][$dbtEdt]['couleurTexte'] = $this->getCouleurTexte($p);
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

        /** @var EdtPlanning $p */
        foreach ($pl as $p) {
            if ((strtolower($p->getType()) === 'cm') || (strtolower($p->getType()) === 'td' && $p->getGroupe() === $this->groupetd) || (strtolower($p->getType()) === 'tp' && $p->getGroupe() === $this->groupetp)) {
                $dbtEdt = $this->convertEdt($p->getDebut());
                $finEdt = $this->convertEdt($p->getFin());
                $debut = $p->getDebut();
                $tab[$p->getJour()][$dbtEdt] = [];
                $tab[$p->getJour()][$dbtEdt]['duree'] = $p->getFin() - $debut;

                for ($i = $dbtEdt; $i < $finEdt; $i++) {
                    $tab[$p->getJour()][$i]['texte'] = 'xx';
                }

                $tab[$p->getJour()][$dbtEdt]['texte'] = $this->isEvaluation($p) . '<br />' . $p->getSalle() . ' | ' . $p->getDisplayGroupe() . ' <br /> ' . $p->getIntervenantEdt();

                $tab[$p->getJour()][$dbtEdt]['couleur'] = $this->getCouleur($p);
                $tab[$p->getJour()][$dbtEdt]['pl'] = $p->getId();
                $tab[$p->getJour()][$dbtEdt]['couleurTexte'] = $this->getCouleurTexte($p);
                $tab[$p->getJour()][$dbtEdt]['commentaire'] = $this->hasCommentaire($p);

            }
        }
        return $tab;
    }

    /**
     * @param $pl
     *
     * @return array
     */
    private function transformePromo($pl): array
    {
        $tab = [];
        /** @var EdtPlanning $p */
        foreach ($pl as $p) {

            $debut = $p->getDebut();
            $fin = $p->getFin();

            $tab[$p->getJour()][$debut][$p->getGroupe()]['duree'] = $fin - $debut;

            $tab[$p->getJour()][$debut][$p->getGroupe()]['couleur'] = $this->getCouleur($p);
            $tab[$p->getJour()][$debut][$p->getGroupe()]['couleurTexte'] = $this->getCouleurTexte($p);
            $tab[$p->getJour()][$debut][$p->getGroupe()]['planning'] = $p;
            $taille = 0;
            switch ($p->getType()) {
                case 'CM':
                case 'cm':
                    $tab[$p->getJour()][$debut][$p->getGroupe()]['largeur'] = $this->semestre->getNbgroupeTPEDT();
                    $taille = 0;
                    break;
                case 'TP':
                case 'tp':
                    $tab[$p->getJour()][$debut][$p->getGroupe()]['largeur'] = 1;
                    $taille = 4;
                    break;
                case 'TD':
                case 'td':
                    $tab[$p->getJour()][$debut][$p->getGroupe()]['largeur'] = 2;
                    $taille = 8;
                    break;
            }

            $groupe = $p->getGroupe();
            $groupefin = $groupe + $tab[$p->getJour()][$debut][$p->getGroupe()]['largeur'];
            for ($i = $debut; $i < $fin; $i++) {
                for ($j = $groupe; $j < $groupefin; $j++) {
                    $tab[$p->getJour()][$i][$j]['texte'] = 'xx';
                }
            }

            if ($p->getIntervenant() === null) {
                $inter = '';
            } else if ($taille == 0) {
                $inter = $p->getIntervenant()->getNom();
            } else {
                $inter = substr($p->getIntervenant()->getNom(), 0, $taille);
            }

            $tab[$p->getJour()][$debut][$p->getGroupe()]['texte'] = $this->isEvaluation($p) . '<br />' . $p->getSalle() . '<br />' . $inter . '<br />' . $p->getDisplayGroupe();
            $tab[$p->getJour()][$debut][$p->getGroupe()]['commentaire'] = $this->hasCommentaire($p);

        }

        return $tab;
    }

    /**
     * @param $p
     *
     * @return string
     */
    private function getCouleur(EdtPlanning $p): ?string
    {
        switch ($p->getType()) {
            case 'CM':
            case 'cm':
                return $p->getSemestre()->getAnnee()->getCouleurCM();
            case 'TD':
            case 'td':
                return $p->getSemestre()->getAnnee()->getCouleurTd();
            case 'TP':
            case 'tp':
                return $p->getSemestre()->getAnnee()->getCouleurTp();
            default:
                return 'CCCCCC';
        }
    }

    /**
     * @param $p
     *
     * @return string
     */
    private function getCouleurTexte(EdtPlanning $p): string
    {
        return $p->getSemestre()->getAnnee()->getCouleurTexte();
    }

    /**
     * @param $p
     *
     * @return string
     */
    private function isEvaluation(EdtPlanning $p): string
    {
        if ($p->getEvaluation()) {
            if ($p->getMatiere() !== null) {
                return '** ' . $p->getMatiere()->getCodeMatiere() . ' **';
            }
            return '** ' . $p->getTexte() . ' **';
        }

        if ($p->getMatiere() !== null) {
            return $p->getMatiere()->getCodeMatiere();
        }

        return $p->getTexte();


    }

    /**
     * @param $p
     *
     * @return bool
     */
    private function hasCommentaire(EdtPlanning $p): bool
    {
        return ($p->getCommentaire() !== '' && $p->getCommentaire() !== null);
    }

    /**
     * @param EdtPlanning $p
     */
    private function calculTotal(EdtPlanning $p): void
    {
        switch ($p->getType()) {
            case 'cm':
            case 'CM':
                $this->total['CM'] += $p->getDureeInt();
                break;
            case 'td':
            case 'TD':
                $this->total['TD'] += $p->getDureeInt();
                break;
            case 'tp':
            case 'TP':
                $this->total['TP'] += $p->getDureeInt();
                break;
        }
    }



    private function convertEdt($nb): ?int
    {
        switch ($nb)
        {
            case '1':
                return 1;
            case '4':
                return 2;
            case '7':
                return 3;
            case '10':
                return 4;
            case '13':
                return 5;
            case '16':
                return 6;
            case '19':
                return 7;
            default:
                return null;
        }
    }

    /**
     *
     */
    private function groupes() : void
    {
        /** @var Groupe $groupe */
        foreach ($this->user->getGroupes() as $groupe) {
            if ($groupe->getTypegroupe()->isTd()) {
                $this->groupetd = $groupe->getOrdre();
            } else if ($groupe->getTypegroupe()->isTp()) {
                $this->groupetp = $groupe->getOrdre();

            }
        }
    }

    /**
     * @param $pl
     *
     * @return array
     */
    private function transformeModule($pl): array
    {
        $tab = [];

        /** @var EdtPlanning $p */
        foreach ($pl as $p) {
            $debut = $p->getDebut();
            $tab[$p->getJour()][$debut][$p->getGroupe()]['duree'] = $p->getFin() - $debut;
            $fin = $p->getFin();

            $tab[$p->getJour()][$debut][$p->getGroupe()]['couleur'] = $this->getCouleur($p);
            $tab[$p->getJour()][$debut][$p->getGroupe()]['couleurTexte'] = $this->getCouleurTexte($p);
            $tab[$p->getJour()][$debut][$p->getGroupe()]['planning'] = $p;
            $taille = 0;
            switch ($p->getType()) {
                case 'CM':
                case 'cm':
                    $tab[$p->getJour()][$debut][$p->getGroupe()]['largeur'] = $this->semestre->getNbgroupeTpEdt();
                    $taille = 0;
                    break;
                case 'TP':
                case 'tp':
                    $tab[$p->getJour()][$debut][$p->getGroupe()]['largeur'] = 1;
                    $taille = 4;
                    break;
                case 'TD':
                case 'td':
                    $tab[$p->getJour()][$debut][$p->getGroupe()]['largeur'] = 2;
                    $taille = 8;
                    break;
            }

            $groupe = $p->getGroupe();
            $groupefin = $groupe + $tab[$p->getJour()][$debut][$p->getGroupe()]['largeur'];
            for ($i = $debut; $i < $fin; $i++) {
                for ($j = $groupe; $j < $groupefin; $j++) {
                    $tab[$p->getJour()][$i][$j]['texte'] = 'xx';
                }
            }

            if ($p->getIntervenant() === null) {
                $inter = '';
            } else if ($taille === 0) {
                $inter = $p->getIntervenant()->getNom();
            } else {
                $inter = substr($p->getIntervenant()->getNom(), 0, $taille);
            }


            $tab[$p->getJour()][$debut][$p->getGroupe()]['texte'] = $this->isEvaluation($p) . '<br />' . $p->getSalle() . '<br />' . $inter . '<br />' . $p->getDisplayGroupe();
            $tab[$p->getJour()][$debut][$p->getGroupe()]['commentaire'] = $this->hasCommentaire($p);
        }

        return $tab;
    }

    /**
     * @param $pl
     *
     * @return array
     */
    private function transformeSalle($pl): array
    {
        $tab = [];

        /** @var EdtPlanning $p */
        foreach ($pl as $p) {
            $debut = $p->getDebut();
            $tab[$p->getJour()][$debut]['duree'] = $p->getFin() - $debut;
            $fin = $p->getFin();
            for ($i = $debut; $i < $fin; $i++) {
                $tab[$p->getJour()][$i]['texte'] = 'xx';
            }

            $tab[$p->getJour()][$debut]['texte'] = $this->isEvaluation($p) . '<br />' . $p->getSemestre()->getAnnee()->getLibelle() . ' <br /> ' . $p->getDisplayGroupe();

            if ($p->getIntervenant() !== null) {
                $tab[$p->getJour()][$debut]['texte'] .= ' <br /> ' . $p->getIntervenant()->getInitiales();
            }

            $tab[$p->getJour()][$debut]['couleur'] = $this->getCouleur($p);
            $tab[$p->getJour()][$debut]['pl'] = $p->getId();
            $tab[$p->getJour()][$debut]['couleurTexte'] = $this->getCouleurTexte($p);
        }

        return $tab;
    }

    /**
     * @param $pl
     *
     * @return array
     */
    private function transformeJour($pl): array
    {
        $tab = [];
        /** @var EdtPlanning $p */
        foreach ($pl as $p) {
            $debut = $p->getDebut();
            $tab[$p->getSemestre()->getId()][$debut][$p->getGroupe()]['duree'] = $p->getFin() - $debut;
            $fin = $p->getFin();

            $tab[$p->getSemestre()->getId()][$debut][$p->getGroupe()]['couleur'] = $this->getCouleur($p);
            $tab[$p->getSemestre()->getId()][$debut][$p->getGroupe()]['couleurTexte'] = $this->getCouleurTexte($p);
            $tab[$p->getSemestre()->getId()][$debut][$p->getGroupe()]['planning'] = $p;
            $taille = 0;
            switch ($p->getType()) {
                case 'CM':
                case 'cm':
                    $tab[$p->getSemestre()->getId()][$debut][$p->getGroupe()]['largeur'] = $p->getSemestre()->getNbgroupeTpEdt();
                    $taille = 0;
                    break;
                case 'TP':
                case 'tp':
                    $tab[$p->getSemestre()->getId()][$debut][$p->getGroupe()]['largeur'] = 1;
                    $taille = 4;
                    break;
                case 'TD':
                case 'td':
                    $tab[$p->getSemestre()->getId()][$debut][$p->getGroupe()]['largeur'] = 2;
                    $taille = 8;
                    break;
            }

            $groupe = $p->getGroupe();
            $groupefin = $groupe + $tab[$p->getSemestre()->getId()][$debut][$p->getGroupe()]['largeur'];
            for ($i = $debut; $i < $fin; $i++) {
                for ($j = $groupe; $j < $groupefin; $j++) {
                    $tab[$p->getSemestre()->getId()][$i][$j]['texte'] = 'xx';
                }
            }

            if ($p->getIntervenant() === null) {
                $inter = '';
            } else if ($taille === 0) {
                $inter = $p->getIntervenant()->getNom();
            } else {
                $inter = substr($p->getIntervenant()->getNom(), 0, $taille);
            }


            $tab[$p->getSemestre()->getId()][$debut][$p->getGroupe()]['texte'] = $this->isEvaluation($p) . '<br />' . $p->getSalle() . '<br />' . $inter . '<br />' . $p->getDisplayGroupe();
            $tab[$p->getSemestre()->getId()][$debut][$p->getGroupe()]['commentaire'] = $this->hasCommentaire($p);
        }

        return $tab;
    }

    /**
     * @param EdtPlanning|null $pl
     *
     * @return array|null
     */
    public function transformeDetails(?EdtPlanning $pl): ?array
    {
        if ($pl !== null) {
            $t = array();
            $t['matiere'] = $pl->getMatiere() !== null ? $pl->getMatiere()->getDisplay() : $pl->getTexte();


            if ($pl->getIntervenant() !== null) {
                $t['enseignant'] = $pl->getIntervenant()->getDisplayPr();
            } else {
                $t['enseignant'] = '';
            }

            $t['horaires'] = Constantes::TAB_HEURES[$pl->getDebut()] . ' - ' . Constantes::TAB_HEURES[$pl->getFin()];
            $t['commentaire'] = $pl->getCommentaire();
            $t['salle'] = $pl->getSalle();

            switch ($pl->getType()) {
                case 'cm':
                case 'CM':
                    $t['type'] = 'Cours Magistral';
                    $t['groupes'] = 'Tous';
                    break;
                case 'td':
                case 'TD':
                    $t['type'] = 'Travaux Dirigés';
                    $t['groupes'] = chr($pl->getGroupe() + 64) . chr($pl->getGroupe() + 65);
                    break;
                case 'tp':
                case 'TP':
                    $t['type'] = 'Travaux Pratiques';
                    $t['groupes'] = chr($pl->getGroupe() + 64);
                    break;
            }

            if ($pl->getEvaluation() === 'O') {
                $t['evaluation'] = 'Ce cours est une évaluation !';
            } else {
                $t['evaluation'] = '';
            }

            return $t;
        }

        return [];
    }

    public function initSemestre(int $semaine, Semestre $semestre): MyEdt
    {
        $this->semestre = $semestre;
        $this->init('promo', $semestre->getId(), $semaine);
        $this->semaines = $this->calculSemaines();
        $this->calculEdt();//todo: pour des datas en BDD sasn scelcat. Ajouter test.
        return $this;
    }
}
