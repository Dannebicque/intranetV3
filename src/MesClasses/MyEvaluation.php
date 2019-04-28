<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/MyEvaluation.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/28/19 8:46 PM
 *  * @lastUpdate 4/28/19 8:45 PM
 *  *
 *
 */

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 10/06/2018
 * Time: 10:26
 */

namespace App\MesClasses;

use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Evaluation;
use App\Entity\Note;
use App\MesClasses\Pdf\MyPDF;
use Doctrine\ORM\EntityManagerInterface;
use PhpOffice\PhpSpreadsheet\Exception;
use PhpOffice\PhpSpreadsheet\IOFactory;
use function count;

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

    /** @var EntityManagerInterface */
    protected $entityManager;

    /** @var MyPDF */
    private $myPdf;

    /**
     * MyEvaluation constructor.
     *
     * @param EntityManagerInterface $entityManager
     * @param MyPDF                  $myPdf
     */
    public function __construct(EntityManagerInterface $entityManager, MyPDF $myPdf)
    {
        $this->entityManager = $entityManager;
        $this->myPdf = $myPdf;
    }


    /**
     * @param Evaluation $evaluation
     *
     * @return MyEvaluation
     */
    public function setEvaluation(Evaluation $evaluation): MyEvaluation
    {
        $this->evaluation = $evaluation;

        return $this;
    }


    public function calculStatistiquesGlobales()
    {
        $this->notes = $this->evaluation->getNotes();
        $tgroupes = [];

        $t = [];

        /** @var Note $note */
        foreach ($this->notes as $note) {
            if ($note->getEtudiant() !== null) {
                $t[$note->getEtudiant()->getId()] = $note->getNote();
                $this->classement[$note->getEtudiant()->getId()] = $note->getNote();
            }
        }


        if ($this->evaluation->getTypeGroupe() !== null) {
            foreach ($this->evaluation->getTypeGroupe()->getGroupes() as $groupe) {
                $tgroupes[$groupe->getId()] = [];
                foreach ($groupe->getEtudiants() as $etu) {
                    if (array_key_exists($etu->getId(), $t)) {
                        $tgroupes[$groupe->getId()][$etu->getId()] = $t[$etu->getId()];
                    }
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
        $this->statistiques['promo']['rang'] = $this->classement; //todo: intéret ? On sauvegarde juste des notes ?

        return $this;
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
                $ecart[] = $ecart_donnee_carre;
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
    public function classement(Etudiant $etudiant): ?int
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

    public function getSynthese(): void
    {
    }

    public function getNotesTableau(): array
    {
        $this->notes = $this->evaluation->getNotes();

        $tabEtudiant = [];
        foreach ($this->notes as $note) {
            if ($note->getEtudiant() !== null) {
                $tabEtudiant[$note->getEtudiant()->getId()] = $note;
            } else {
                //note sans étudiant, on la supprime ?
                $this->deleteNote($note);
                $this->entityManager->flush();
            }
        }

        return $tabEtudiant;
    }

    /**
     * @param Note $note
     */
    public function deleteNote(Note $note): void
    {
        foreach ($note->getModificationNotes() as $modif) {
            $this->entityManager->remove($modif);
        }
        $this->entityManager->remove($note);
    }

    /**
     * @return bool
     */
    public function delete(): bool
    {
        $this->notes = $this->evaluation->getNotes();
        foreach ($this->notes as $note) {
            $this->deleteNote($note);
        }
        $this->entityManager->remove($this->evaluation);
        $this->entityManager->flush();

        return true;
    }

    public function exportReleve($_format, $groupes): void
    {
        $notes = $this->getNotesTableau();
        $name = 'releve';
        switch ($_format) {
            case Constantes::FORMAT_PDF:
                $this->myPdf::generePdf('pdf/releveEvaluation.html.twig', [
                    'evaluation' => $this->evaluation,
                    'groupes'    => $groupes,
                    'notes'      => $notes
                ], $name);
                break;
        }
    }

    /**
     * @param Evaluation $evaluation
     * @param string     $fichier
     *
     *
     * @return bool
     * @throws \Exception
     */
    public function importEvaluation(Evaluation $evaluation, string $fichier): ?bool
    {
        $t = explode('.', $fichier);
        $extension = $t[count($t) - 1];

        switch ($extension) {
            case 'xlsx':
                echo 'xlsx';
                $data = $this->importXlsx($fichier);
                $this->insertNotes($evaluation, $data);
                break;
            case 'csv':

                $data = $this->importCsv($fichier);
                $this->insertNotes($evaluation, $data);
                break;
            default:
                return false; //erreur
        }

        return false; //erreur
    }

    /**
     * @param Evaluation $evaluation
     * @param            $data
     *
     * @throws \Exception
     */
    private function insertNotes(Evaluation $evaluation, $data): void
    {
        $req = $this->entityManager->getRepository(Etudiant::class)->findBySemestre($evaluation->getSemestre());
        $etudiants = [];
        /** @var Etudiant $etu */
        foreach ($req as $etu) {
            $etudiants[$etu->getNumEtudiant()] = $etu;
        }

        foreach ($data as $note) {
            if (array_key_exists((string)$note['num_etudiant'], $etudiants)) {
                $newnote = new Note();
                $newnote->setEvaluation($evaluation);
                $newnote->setEtudiant($etudiants[(string)$note['num_etudiant']]);
                $newnote->setNote($note['note']);
                $newnote->setAbsenceJustifie(true);
                $newnote->setCommentaire($note['commentaire']);
                $this->entityManager->persist($newnote);
            }
        }
        $this->entityManager->flush();
    }

    /**
     * @param string $fichier
     *
     * @return array
     * @throws \PhpOffice\PhpSpreadsheet\Reader\Exception
     * @throws Exception
     */
    private function importXlsx(string $fichier): array
    {
        $excel = IOFactory::load($fichier);
        $sheetData = $excel->getActiveSheet()->toArray(null, true, true, true);
        $data = [];
        $ordre = [];
        foreach ($sheetData[1] as $key) {
            $ordre[] = $key;
        }

        $nblignes = count($sheetData);
        for ($i = 2; $i <= $nblignes; $i++) {
            //todo: on commence à 2 si ligne d'en-tete, 1 sinon. A detecter
            $nb = count($sheetData[$i]);
            for ($j = 1; $j <= $nb; $j++) {
                $t[$ordre[$j - 1]] = $sheetData[$i][chr($j + 64)];
            }
            $data[] = $t;
        }

        return $data;
    }

    private function importCsv(string $fichier): array
    {
        $handle = fopen($fichier, 'rb');
        $data = [];
        $ordre = [];

        /*Si on a réussi à ouvrir le fichier*/
        if ($handle) {
            //on récupère l'en-tête
            $phrase = fgetcsv($handle, 1024, ';');

            if (in_array('num_etudiant', $phrase) && in_array('commentaire',
                    $phrase) && in_array('note', $phrase)) {
                //on vérifie que les clés existent.

                foreach ($phrase as $key) {
                    $ordre[] = $key;
                }
            } else {
                //pas de clé en en-tête
                //s'assurer que c'est les bonnes données ?
            }

            /*Tant que l'on est pas à la fin du fichier*/
            while (!feof($handle)) {
                /*On lit la ligne courante*/
                $phrase = fgetcsv($handle, 1024, ';');
                $nb = count($phrase);
                for ($i = 0; $i < $nb; $i++) {
                    $t[$ordre[$i]] = $phrase[$i];
                }
                $data[] = $t;
            }
        }

        return $data;
    }
}
