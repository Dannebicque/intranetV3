<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/MyEvaluation.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/04/2024 17:48
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Classes\Excel\MyExcelMultiExport;
use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\Pdf\PdfManager;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Evaluation;
use App\Entity\Note;
use App\Entity\Semestre;
use App\Exception\MatiereNotFoundException;
use App\Repository\EtudiantRepository;
use App\Utils\Tools;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use PhpOffice\PhpSpreadsheet\IOFactory;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;
use function array_key_exists;
use function chr;
use function count;
use function in_array;

/**
 * Class MyEvaluation.
 */
class MyEvaluation
{
    protected Evaluation $evaluation;
    protected array $statistiques = [];
    protected Collection $notes;
    protected array $classement = [];

    /**
     * MyEvaluation constructor.
     */
    public function __construct(
        private readonly TypeMatiereManager $typeMatiereManager,
        protected EntityManagerInterface $entityManager,
        private readonly PdfManager      $myPdf,
        private readonly MyExcelMultiExport $myExcelMultiExport,
        private readonly EtudiantRepository $etudiantRepository
    )
    {
    }

    public function setEvaluation(Evaluation $evaluation): self
    {
        $this->evaluation = $evaluation;

        return $this;
    }

    public function calculStatistiquesGlobales(): self
    {
        $this->notes = $this->evaluation->getNotes();
        $repartition = [];
        for ($i = 0; $i <= 20; ++$i) {
            $repartition[$i] = 0;
        }

        $tgroupes = [];
        $totalEtudiants = 0;
        $t = [];

        /** @var Note $note */
        foreach ($this->notes as $note) {
            if (null !== $note->getEtudiant()) {
                if ($note->getNote() >= 0) {
                    ++$repartition[floor($note->getNote())];
                }
                $t[$note->getEtudiant()->getId()] = $note->getNote();
                $this->classement[$note->getEtudiant()->getId()] = $note->getNote();
            }
        }

        if (null !== $this->evaluation->getTypeGroupe()) {
            foreach ($this->evaluation->getTypeGroupe()->getGroupes() as $groupe) {
                $tgroupes[$groupe->getId()] = [];
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
                $totalEtudiants += count($tgroupes[$grid]);
            }
        }

        $this->statistiques['promo']['min'] = count($t) > 0 ? min($t) : -0.01;
        $this->statistiques['promo']['max'] = count($t) > 0 ? max($t) : -0.01;
        $this->statistiques['promo']['moyenne'] = $totalEtudiants > 0 ? array_sum($t) / $totalEtudiants : -0.01;
        $this->statistiques['promo']['ecart_type'] = count($t) > 0 ? $this->ecartType($t) : -0.01;
        $this->statistiques['promo']['rang'] = $this->classement;
        $this->statistiques['repartition'] = $repartition;

        return $this;
    }

    private function ecartType(array $donnees): float|int
    {
        // 0 - Nombre d’éléments dans le tableau
        $population = count($donnees);
        if (0 !== $population) {
            // 1 - somme du tableau
            $somme_tableau = array_sum($donnees);
            // 2 - Calcul de la moyenne

            $moyenne = $somme_tableau / $population;
            // 3 - écart pour chaque valeur
            $ecart = [];
            foreach ($donnees as $value) {
                // écart entre la valeur et la moyenne
                $ecart_donnee = $value - $moyenne;
                // carré de l'écart
                $ecart_donnee_carre = $ecart_donnee ** 2;
                // Insertion dans le tableau
                $ecart[] = $ecart_donnee_carre;
            }
            // 4 - somme des écarts
            $somme_ecart = array_sum($ecart);
            // 5 - division de la somme des écarts par la population
            $division = $somme_ecart / $population;
            // 6 - racine carrée de la division
            $ecart_type = sqrt($division);
        } else {
            $ecart_type = 0;
        }

        // 7 - renvoi du résultat
        return $ecart_type;
    }

    public function getStatistiques(): array
    {
        return $this->statistiques;
    }

    public function classement(Etudiant $etudiant): ?int
    {
        $rangreel = 0;
        $notePrec = 21;
        $rangEtudiant = 0;
        foreach ($this->classement as $key => $value) {
            ++$rangreel;
            if ($value !== $notePrec) {
                // index de la note en cours de lecture
                $rangEtudiant = $rangreel;
                $notePrec = $value;
            }
            if ($key === $etudiant->getId()) {
                return $rangEtudiant; // si c'est l'étudiant, on retourne le rang
            }
        }

        return null;
    }

    public function getNotesTableau(): array
    {
        $this->notes = $this->evaluation->getNotes();

        $tabEtudiant = [];
        foreach ($this->notes as $note) {
            if (null !== $note->getEtudiant()) {
                $tabEtudiant[$note->getEtudiant()->getId()] = $note;
            } else {
                // note sans étudiant, on la supprime ?
                $this->deleteNote($note);
            }
        }
        $this->entityManager->flush();

        return $tabEtudiant;
    }

    public function deleteNote(Note $note): void
    {
        foreach ($note->getModificationNotes() as $modif) {
            $this->entityManager->remove($modif);
        }
        $this->entityManager->remove($note);
    }

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

    /**
     * @throws MatiereNotFoundException
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function exportReleve(
        string   $_format,
        Collection|array $groupes,
        Semestre $semestre
    ): StreamedResponse|Response|null
    {
        $notes = $this->getNotesTableau();
        $matiere = $this->typeMatiereManager->getMatiereFromSelect($this->evaluation->getTypeIdMatiere());

        if (null === $matiere) {
            throw new MatiereNotFoundException();
        }

        $name = 'releve-' . $matiere->codeMatiere;
        switch ($_format) {
            case Constantes::FORMAT_PDF:
                return $this->myPdf->pdf()::generePdf('pdf/releveEvaluation.html.twig', [
                    'evaluation' => $this->evaluation,
                    'groupes' => $groupes,
                    'notes' => $notes,
                    'matiere' => $matiere,
                    'semestre' => $semestre,
                ], $name);
            case Constantes::FORMAT_EXCEL:
                $this->myExcelMultiExport->genereReleveExcel(
                    $this->evaluation,
                    $groupes,
                    $notes,
                    $matiere,
                    $semestre
                );

                return $this->myExcelMultiExport->saveXlsx($name);
            case Constantes::FORMAT_CSV_POINT_VIRGULE:
                $this->myExcelMultiExport->genereReleveExcel(
                    $this->evaluation,
                    $groupes,
                    $notes,
                    $matiere,
                    $semestre
                );

                return $this->myExcelMultiExport->saveCsv($name);
        }

        return null;
    }

    /**
     * @throws Exception
     */
    public function importEvaluation(
        Evaluation $evaluation,
        string   $fichier,
        Semestre $semestre,
        bool     $ecrase = false
    ): bool
    {
        $t = explode('.', $fichier);
        $extension = $t[count($t) - 1];

        switch ($extension) {
            case 'xlsx':
                $data = $this->importXlsx($fichier);

                return $this->insertNotes($evaluation, $data, $semestre, $ecrase);
            case 'csv':
                $data = $this->importCsv($fichier);

                return $this->insertNotes($evaluation, $data, $semestre, $ecrase);
            default:
                return false; // erreur
        }
    }

    /**
     * @throws Exception
     */
    private function insertNotes(Evaluation $evaluation, array $data, Semestre $semestre, bool $ecrase = false): bool
    {
        $matiere = $this->typeMatiereManager->getMatiereFromSelect($evaluation->getTypeIdMatiere());
        $evaluation->setVisible(false); // on masque l'évaluation le temps de l'import et de la vérification
        $notes = [];

        if (true === $matiere->mutualisee) {
            $req = $this->etudiantRepository->findByOrdreSemestreAndDiplome($semestre->getOrdreLmd(), $semestre->getDiplome()); // todo: améliorer pour éviter la FC ? Diplômes différents à la base pour le parent ? ou via les parcours ?
        } else {
            $req = $this->etudiantRepository->findBySemestre($semestre); // todo: améliorer pour filtrer les étudiants si parcours...
        }

        $etudiants = [];
        /** @var Etudiant $etu */
        foreach ($req as $etu) {
            $etudiants[$etu->getNumEtudiant()] = $etu;
        }

        foreach ($evaluation->getNotes() as $note) {
            $notes[$note->getEtudiant()->getNumEtudiant()] = $note;
        }

        foreach ($data as $note) {
            if (array_key_exists($note['num_etudiant'], $etudiants)) {
                if (array_key_exists($note['num_etudiant'], $notes)) {
                    if (true === $ecrase || -0.01 === $notes[$note['num_etudiant']]->getNote()) {
                        // une note = -0.01, ou on force l'écriture on met à jour...
                        $notes[$note['num_etudiant']]->setNote(Tools::convertToFloat($note['note']));
                        $notes[$note['num_etudiant']]->setCommentaire($note['commentaire']);
                    }
                } else {
                    // pas de note, on ajoute
                    $nnnote = new Note();
                    $nnnote->setEvaluation($evaluation);
                    $nnnote->setEtudiant($etudiants[$note['num_etudiant']]);
                    $nnnote->setCommentaire($note['commentaire']);
                    $nnnote->setNote(Tools::convertToFloat($note['note']));
                    $this->entityManager->persist($nnnote);
                }
            }
        }

        $this->entityManager->flush();

        return true;
    }

    private function importXlsx(
        string $fichier
    ): array
    {
        $t = [];
        $excel = IOFactory::load($fichier);
        $sheetData = $excel->getActiveSheet()->toArray(null, true, true, true);
        $data = [];
        $ordre = [];
        foreach ($sheetData[1] as $key) {
            $ordre[] = mb_strtolower($key);
        }

        $nblignes = count($sheetData);
        for ($i = 2; $i <= $nblignes; ++$i) {
            if (is_array($sheetData[$i])) {
                $nb = count($sheetData[$i]);
                for ($j = 1; $j <= $nb; ++$j) {
                    $t[$ordre[$j - 1]] = trim($sheetData[$i][chr($j + 64)]);
                }
                $data[] = $t;
            }
        }

        return $data;
    }

    private function importCsv(
        string $fichier
    ): array
    {
        $t = [];
        $handle = fopen($fichier, 'rb');
        $data = [];
        $ordre = [];

        /* Si on a réussi à ouvrir le fichier */
        if ($handle) {
            // on récupère l'en-tête
            $phrase = fgetcsv($handle, 1024, ';');

            if (in_array('num_etudiant', $phrase, true) && in_array('note', $phrase, true)) {
                // on vérifie que les clés existent.
                foreach ($phrase as $key) {
                    $ordre[] = $key;
                }
            } else {
                // ordre par défaut attendu
                $ordre = ['num_etudiant', 'note', 'commentaire'];
            }

            // pas de clé en en-tête
            // s'assurer que c'est les bonnes données ?

            /* Tant que l'on est pas à la fin du fichier */
            while (!feof($handle)) {
                /* On lit la ligne courante */
                $phrase = fgetcsv($handle, 1024, ';');
                if (is_array($phrase)) {
                    $nb = count($phrase);
                    for ($i = 0; $i < $nb; ++$i) {
                        $t[$ordre[$i]] = $phrase[$i];
                    }
                    $data[] = $t;
                }
            }
        }

        return $data;
    }
}
