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

        $this->statistiques['min'] = min($t);
        $this->statistiques['max'] = max($t);
        $this->statistiques['moyenne'] = $moy / count($t);
        $this->statistiques['rang'] = $this->classement;
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