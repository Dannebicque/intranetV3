<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Edt/MyEdtCelcat.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 19/08/2020 20:42

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 05/09/2018
 * Time: 16:46
 */

namespace App\Classes\Edt;


use App\DTO\EventEdt;
use App\Entity\Annee;
use App\Entity\AnneeUniversitaire;
use App\Entity\CelcatEvent;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Groupe;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Repository\CalendrierRepository;
use App\Repository\CelcatEventsRepository;
use App\Repository\GroupeRepository;
use App\Repository\MatiereRepository;

class MyEdtCelcat extends BaseEdt implements EdtInterface
{
    protected CelcatEventsRepository $celcatEventsRepository;

    private Annee $annee;

    private GroupeRepository $groupeRepository;

    private MatiereRepository $matiereRepository;
    private $tab = [];

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
    public function initPersonnel(
        Personnel $personnel,
        AnneeUniversitaire $anneeUniversitaire,
        $semaine = 0
    ): MyEdtCelcat {
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
                    $pl = $this->celcatEventsRepository->findEdtProf($this->user->getNumeroHarpege(),
                        $this->semaineFormationIUT);
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

        $gr = [];
        $groupes = $this->groupeRepository->getGroupesTP($this->semestre->getId());

        /** @var Groupe $groupe */
        foreach ($groupes as $groupe) {
            $gr[$groupe->getCodeapogee()] = $groupe->getOrdre();
        }

        $tab = [];
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
    private function transformeEtudiant($pl): array
    {

        /** @var CelcatEvent $p */
        foreach ($pl as $p) {
            $dbtEdt = $this->convertEdt(Constantes::TAB_HEURES_INDEX[$p->getDebut()->format('H:i:s')]);
            $finEdt = $this->convertEdt(Constantes::TAB_HEURES_INDEX[$p->getFin()->format('H:i:s')]);
            $eventEdt = new EventEdt();


            $eventEdt->duree = $p->getFin()->diff($p->getDebut());
            $eventEdt->debut = $dbtEdt;
            $eventEdt->fin = $finEdt;

            $eventEdt->texte = $p->getLibModule() . '<br />' . $p->getLibSalle() . ' | ' . $p->getLibGroupe() . ' <br /> ' . $p->getLibPersonnel();
            $eventEdt->couleur = $this->getCouleur($p);
            $eventEdt->id = $p->getId();
            $eventEdt->couleurTexte = $this->annee->getCouleurTexte();
            $eventEdt->format = 'ok';
            for ($i = $dbtEdt; $i < $finEdt; $i++) {
                $evtEdtxx = new EventEdt();
                $evtEdtxx->texte = 'xx';
                $this->tab[$p->getJour()][$i] = $evtEdtxx;
            }
            $this->tab[$p->getJour()][$dbtEdt] = $eventEdt;

            $this->valideFormat($p);


        }

        return $this->tab;
    }

    private function valideFormat(CelcatEvent $p)
    {
        $casedebut = Constantes::TAB_HEURES_INDEX[$p->getDebut()->format('H:i:s')];
        $casefin = Constantes::TAB_HEURES_INDEX[$p->getFin()->format('H:i:s')];
        $idDebut = $this->convertEdt($casedebut);
        $duree = $casefin - $casedebut;


        //regarde si le format entre dans une case ou dépasse. retourne 'ok' ou 'nok'
        if (array_key_exists($casedebut, Constantes::TAB_CRENEAUX) && $duree % 3 === 0) {
            $this->tab[$p->getJour()][$idDebut]->format = 'ok';

            if ($duree % 3 === 0) {
                for ($i = 1; $i < $duree / 3; $i++) {
                    $this->tab[$p->getJour()][$this->convertEdt($casedebut + ($i * 3))] = $this->tab[$p->getJour()][$idDebut];
                }
            }
        } else {
            //pas sur un créneau classique pour le début
            if (!array_key_exists($casedebut, Constantes::TAB_CRENEAUX)) {
                $casedebut -= ($duree % 3);
            }

            if ($casedebut === 11 || $casedebut === 12) {
                $casedebut = 10;
            }

            if ($casedebut === 2 || $casedebut === 3) {
                $casedebut = 1;
            }

            dump('newcas' . $casedebut);
            if (!array_key_exists($casedebut, $this->tab[$p->getJour()])) {
                $this->tab[$p->getJour()][$this->convertEdt($casedebut)] = $this->tab[$p->getJour()][$idDebut];
                unset($this->tab[$p->getJour()][$idDebut]);
            }


            $this->tab[$p->getJour()][$this->convertEdt($casedebut)]->debut = Constantes::TAB_HEURES_INDEX[$p->getDebut()->format('H:i:s')];
            $this->tab[$p->getJour()][$this->convertEdt($casedebut)]->format = 'nok';
            $this->tab[$p->getJour()][$this->convertEdt($casedebut)]->fin = $casefin;
        }
    }

    /**
     * @param CelcatEvent $p
     *
     * @return string
     */
    private function getCouleurFromModule(CelcatEvent $p): string
    {
        $matiere = $this->matiereRepository->findOneBy(['codeapogee' => $p->getCodeModule()]);
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
