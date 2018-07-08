<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 10/06/2018
 * Time: 10:26
 */

namespace App\MesClasses;


use App\Entity\Etudiant;
use App\Entity\Evaluation;
use App\Entity\Note;

/**
 * Class MyEvaluation
 * @package App\MesClasses
 */
class MyEvaluation
{
    /** @var Evaluation */
    protected $evaluation;

    protected $statistiques = [];

    /** @var Note[] */
    protected $notes = [];

    /** @var array */
    protected $classement = [];

    /**
     * @param Evaluation $evaluation
     */
    public function setEvaluation(Evaluation $evaluation): MyEvaluation
    {
        $this->evaluation = $evaluation;

        $this->calculStatistiquesGlobales();

        return $this;
    }


    public function calculStatistiquesGlobales(): void
    {
        $this->notes = $this->evaluation->getNotes();
        $tgroupes = array();

        $t = array();
        $tEtudiant = array();

        /** @var Note $note */
        foreach ($this->notes as $note) {
            if ($note->getEtudiant() !== null) {
                $t[$note->getEtudiant()->getId()] = $note->getNote();
                $this->classement[$note->getEtudiant()->getId()] = $note->getNote();
            }
        }

        foreach ($this->evaluation->getTypeGroupe()->getGroupes() as $groupe) {
            $tgroupes[$groupe->getId()] = array();
            foreach ($groupe->getEtudiants() as $etu) {
                if (array_key_exists($etu->getId(), $t)) {
                    $tgroupes[$groupe->getId()][$etu->getId()] = $t[$etu->getId()];
                }
            }
        }

        arsort($this->classement);

        foreach ($this->evaluation->getTypeGroupe()->getGroupes() as $groupe) {
            $grid = $groupe->getId();
            $this->statistiques[$grid]['min'] = count($tgroupes[$grid]) > 0 ? min($tgroupes[$grid]) : -0.01;
            $this->statistiques[$grid]['max'] = count($tgroupes[$grid]) > 0 ? max($tgroupes[$grid]) : -0.01;
            $this->statistiques[$grid]['moyenne'] = count($tgroupes[$grid]) > 0 ? array_sum($tgroupes[$grid]) / count($tgroupes[$grid]) : -0.01;
            $this->statistiques[$grid]['ecart_type'] = count($tgroupes[$grid]) > 0 ? $this->ecartType($tgroupes[$grid]) : -0.01;
        }

        $this->statistiques['promo']['min'] = count($t) > 0 ? min($t) : -0.01;
        $this->statistiques['promo']['max'] = count($t) > 0 ? max($t) : -0.01;
        $this->statistiques['promo']['moyenne'] = count($t) > 0 ? array_sum($t) / count($t) : -0.01;
        $this->statistiques['promo']['ecart_type'] = count($t) > 0 ? $this->ecartType($t) : -0.01;
        $this->statistiques['promo']['rang'] = $this->classement;//todo: intéret ? On sauvegarde juste des notes ?
    }

    /**
     * @param $donnees
     *
     * @return int|string
     */
    private function ecartType($donnees)
    {
        //0 - Nombre d’éléments dans le tableau
        $population = count($donnees);
        if ($population !== 0) {
            //1 - somme du tableau
            $somme_tableau = array_sum($donnees);
            //2 - Calcul de la moyenne

            $moyenne = $somme_tableau / $population;
            //3 - écart pour chaque valeur
            $ecart = [];
            foreach ($donnees as $key => $value) {
                //écart entre la valeur et la moyenne
                $ecart_donnee = $value - $moyenne;
                //carré de l'écart
                $ecart_donnee_carre = bcpow($ecart_donnee, 2, 2);
                //Insertion dans le tableau
                array_push($ecart, $ecart_donnee_carre);
            }
            //4 - somme des écarts
            $somme_ecart = array_sum($ecart);
            //5 - division de la somme des écarts par la population
            $division = $somme_ecart / $population;
            //6 - racine carrée de la division
            $ecart_type = bcsqrt($division, 2);
        } else {
            $ecart_type = 0;
        }

        //7 - renvoi du résultat
        return $ecart_type;
    }

    /**
     * @return array
     */
    public function getStatistiques(): array
    {
        return $this->statistiques;
    }

    /**
     * @param Etudiant $etudiant
     *
     * @return int|null
     */
    public function classement(Etudiant $etudiant)
    {
        $rangreel = 0;
        foreach ($this->classement as $key => $value) {
            //todo:améliorer pour gérer le cas des ex-aequo
            $rangreel++; //index de la note en cours de lecture

            if ($key === $etudiant->getId()) {
                return $rangreel; //si c'est l'étudiant, on retourne le rang
            }
        }

        return null;
    }

    public function getSynthese()
    {
    }

    public function getNotesTableau()
    {
        $this->notes = $this->evaluation->getNotes();

        $tabEtudiant = array();
        foreach ($this->notes as $note) {
            $tabEtudiant[$note->getEtudiant()->getId()] = $note;
        }

        return $tabEtudiant;
    }
}