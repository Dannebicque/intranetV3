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

        $t = array();
        $moy = 0;

        /** @var Note $note */
        foreach ($this->notes as $note) {
            if ($note->getEtudiant() !== null) {
                $t[] = $note->getNote();
                $this->classement[$note->getEtudiant()->getId()] = $note->getNote();
                $moy += $note->getNote();
            }
        }

        arsort($this->classement);

        $this->statistiques['min'] = count($t) > 0 ? min($t) : -0.01;
        $this->statistiques['max'] = count($t) > 0 ? max($t) : -0.01;
        $this->statistiques['moyenne'] = count($t) > 0 ? $moy / count($t) : -0.01;
        $this->statistiques['ecart_type'] = count($t) > 0 ? $this->ecartType($t) : -0.01;
        $this->statistiques['rang'] = $this->classement;//todo: intéret ? On sauvegarde juste des notes ?
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
            for ($i = 0; $i < $population; $i++) {
                //écart entre la valeur et la moyenne
                $ecart_donnee = $donnees[$i] - $moyenne;
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
}