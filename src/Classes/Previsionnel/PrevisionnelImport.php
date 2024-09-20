<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Previsionnel/PrevisionnelImport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/09/2024 08:25
 */

namespace App\Classes\Previsionnel;

use App\Classes\Excel\MyExcelRead;
use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\MyUpload;
use App\Components\Logger\LogHelper;
use App\Entity\Diplome;
use App\Entity\Previsionnel;
use App\Repository\PersonnelRepository;
use App\Utils\Tools;
use Doctrine\ORM\EntityManagerInterface;
use function array_key_exists;

/**
 * Class PrevisionnelImport.
 */
class PrevisionnelImport
{
    private ?string $file;

    public function __construct(
        private LogHelper   $log,
        private MyExcelRead $myExcelRead,
        private TypeMatiereManager     $typeMatiereManager,
        private PrevisionnelManager    $previsionnelManager,
        private EntityManagerInterface $entityManager,
        private PersonnelRepository    $personnelRepository,
        private MyUpload               $myUpload
    )
    {
    }

    public
    function import(array $data): bool|LogHelper
    {
        $this->file = $this->myUpload->upload($data['fichier'], 'temp');
        switch ($data['typeFichier']) {
            case 'omega_csv':
                return $this->importCsv($data);
            case 'omega_xlsx':
                return $this->importXlsx($data);
            case 'gmp_xlsx':
                return $this->importGmpXlsx($data);
        }
    }

    public
    function importGmpXlsx(array $data): bool
    {
        if (null !== $data['diplome']) {
            $listeMatieres = $this->typeMatiereManager->tableauApogeeDiplome($data['diplome']);
            $listePersonnels = $this->personnelRepository->tableauPersonnelHarpege($data['diplome']);

            $reader = new \PhpOffice\PhpSpreadsheet\Reader\Xlsx();
            $spreadsheet = $reader->load($this->file);
            $sheet = $spreadsheet->getSheet(0);
            $highestRow = $sheet->getHighestRow();
            $annee = $data['annee'];
            $tabPrevisionnel = [];
            for ($row = 12; $row <= $highestRow; ++$row) {
                //on parcours toutes les lignes pour construire le tableau (il y a une ligne pour CM, une pour TD et une pour TP), on fusionne pour un prof et une matière
                $matiere = $sheet->getCell('F' . $row)->getValue();
                $personnel = $sheet->getCell('O' . $row)->getValue();
                $type = $sheet->getCell('G' . $row)->getValue();

                if (!array_key_exists($personnel, $tabPrevisionnel)) {
                    $tabPrevisionnel[$personnel] = [];
                }

                if (!array_key_exists($matiere, $tabPrevisionnel[$personnel])) {
                    $tabPrevisionnel[$personnel][$matiere] = [];
                }

                if (!array_key_exists($type, $tabPrevisionnel[$personnel][$matiere])) {
                    $tabPrevisionnel[$personnel][$matiere][$type]['nbSeance'] = 0;
                    $tabPrevisionnel[$personnel][$matiere][$type]['duree'] = 0;
                    $tabPrevisionnel[$personnel][$matiere][$type]['groupes'] = [];
                }

                $tabPrevisionnel[$personnel][$matiere][$type]['nbSeance'] += $sheet->getCell('Q' . $row)->getValue();
                $tabPrevisionnel[$personnel][$matiere][$type]['duree'] += $sheet->getCell('R' . $row)->getValue();
                $tabPrevisionnel[$personnel][$matiere][$type]['groupes'][] = $sheet->getCell('L' . $row)->getValue();
            }

            //on a le tableau, on peut maintenant l'insérer en base
            // dd($tabPrevisionnel);
            foreach ($tabPrevisionnel as $keyPersonnel => $matieres) {
                if (array_key_exists($keyPersonnel, $listePersonnels)) {
                    $personnel = $listePersonnels[$keyPersonnel];
                    foreach ($matieres as $keyMatiere => $datas) {
                        if (array_key_exists($keyMatiere, $listeMatieres)) {
                            $matiere = $listeMatieres[$keyMatiere];
                            $pr = new Previsionnel($annee, $personnel);
                            $pr->setIdMatiere($matiere->id);
                            $pr->setTypeMatiere($matiere->typeMatiere);
                            //si CM
                            if (array_key_exists('CM', $datas)) {
                                $pr->setNbHCm($datas['CM']['duree'] * $datas['CM']['nbSeance']);
                                $pr->setNbGrCm(count(array_unique($datas['CM']['groupes'])));
                            }
                            //si TD
                            if (array_key_exists('TD', $datas)) {
                                $nbGroupes = count(array_unique($datas['TD']['groupes']));
                                $pr->setNbHTd($datas['TD']['duree'] * $datas['TD']['nbSeance'] / $nbGroupes);
                                $pr->setNbGrTd($nbGroupes);
                            }
                            //si TP
                            if (array_key_exists('TP', $datas)) {
                                $nbGroupes = count(array_unique($datas['TP']['groupes']));
                                $pr->setNbHTp($datas['TP']['duree'] * $datas['TP']['nbSeance'] / $nbGroupes);
                                $pr->setNbGrTp($nbGroupes);
                            }

                            $this->entityManager->persist($pr);
                        }
                    }
                }
            }

            $this->entityManager->flush();
            unlink($this->file); // suppression du fichier

            return true;
        }

        return false;
    }

    public
    function importCsv(array $data): bool
    {
        if (null !== $data['diplome']) {
            $matieres = $this->typeMatiereManager->tableauApogeeDiplome($data['diplome']);
            $personnels = $this->personnelRepository->tableauPersonnelHarpege($data['diplome']);

            $handle = fopen($this->file, 'rb');

            /* Si on a réussi à ouvrir le fichier */
            if ($handle) {
                /* suppression des données de prévi */
                $this->supprPrevisionnel($data['diplome'], $data['annee'], (bool)$data['supprimerPrevisionnel']);

                /* supprime la première ligne */
                fgetcsv($handle, 1024, ';');
                $annee = $data['annee'];
                /* Tant que l'on est pas à la fin du fichier */
                while (!feof($handle)) {
                    /* On lit la ligne courante */
                    $ligne = fgetcsv($handle, 1024, ';');

                    if (is_array($ligne) && array_key_exists($ligne[2], $matieres)) {
                        $personnel = $personnels[$ligne[4]] ?? null;
                        $pr = new Previsionnel($annee, $personnel);
                        $pr->setNbHCm($ligne[6]);
                        $pr->setNbGrCm(Tools::convertToInt($ligne[7]));
                        $pr->setNbHTd($ligne[8]);
                        $pr->setNbGrTd(Tools::convertToInt($ligne[9]));
                        $pr->setNbHTp($ligne[10]);
                        $pr->setNbGrTp(Tools::convertToInt($ligne[11]));
                        $pr->setIdMatiere($matieres[$ligne[2]]->id);
                        $pr->setTypeMatiere($matieres[$ligne[2]]->typeMatiere);
                        $this->entityManager->persist($pr);
                    }
                }
                $this->entityManager->flush();

                /* On ferme le fichier */
                fclose($handle);
                unlink($file); // suppression du fichier

                return true;
            }

            return false;
        }

        return false;
    }

    public
    function importXlsx(array $data): bool|LogHelper
    {
        if (null !== $data['diplome']) {
            $matieres = $this->typeMatiereManager->tableauApogeeDiplome($data['diplome']);
            $personnels = $this->personnelRepository->tableauPersonnelHarpege($data['diplome']);

            //ouverture du fichier XLSX
            $this->myExcelRead->readFile($this->file);
            $this->myExcelRead->setNbColumns(12);
            $this->myExcelRead->setCologneToTest(3);

            /* Si on a réussi à ouvrir le fichier */

            /* suppression des données de prévi */
            $this->supprPrevisionnel($data['diplome'], $data['annee'], (bool)$data['supprimerPrevisionnel']);

            /* supprime la première ligne */
            $ligne = $this->myExcelRead->readNewLine();

            $annee = $data['annee'];
            /* Tant que l'on est pas à la fin du fichier */
            while ($ligne = $this->myExcelRead->readNewLine()) {

                /* On lit la ligne courante */
                if (is_array($ligne) && array_key_exists($ligne[3]->getValue(), $matieres)) {
                    $personnel = $personnels[$ligne[5]->getValue()] ?? null;
                    if ($personnel === null) {
                        $this->log->addItem('Warning sur la ligne ' . $this->myExcelRead->getLigne() . ' : ' . $ligne[5]->getValue() . ' (' . $ligne[6]->getValue() . ') non trouvé', 'warning');
                    }
                    $pr = new Previsionnel($annee, $personnel);
                    $pr->setNbHCm($ligne[7]->getValue());
                    $pr->setNbGrCm(Tools::convertToInt($ligne[8]->getValue()));
                    $pr->setNbHTd($ligne[9]->getValue());
                    $pr->setNbGrTd(Tools::convertToInt($ligne[10]->getValue()));
                    $pr->setNbHTp($ligne[11]->getValue());
                    $pr->setNbGrTp(Tools::convertToInt($ligne[12]->getValue()));
                    $pr->setIdMatiere($matieres[$ligne[3]->getValue()]->id);
                    $pr->setTypeMatiere($matieres[$ligne[3]->getValue()]->typeMatiere);

                    $this->log->addItem('Import de la ligne ' . $this->myExcelRead->getLigne() . ' avec succés', 'success');

                    $this->entityManager->persist($pr);
                } else {
                    $this->log->addItem('Erreur sur la ligne ' . $this->myExcelRead->getLigne() . ' : ' . $ligne[3]->getValue() . ' non trouvé', 'danger');
                }
            }

            $this->log->addItem('Import des données de prévisionnel. ' . $this->myExcelRead->getLigne() . ' lignes', 'success');
            $this->entityManager->flush();

            /* On ferme le fichier */
            $this->myExcelRead->close();
            unlink($this->file); // suppression du fichier

            return $this->log;
        }

        return false;

    }

    private function supprPrevisionnel(Diplome $diplome, int $annee, bool $supprPrevisionnel): void
    {
        if ($supprPrevisionnel) {
            $this->log->addItem('Suppression des données de prévisionnel pour le diplôme ' . $diplome->getDisplay() . ' pour l\'année ' . $annee, 'warning');
            $pr = $this->previsionnelManager->findByDiplomeToDelete($diplome, $annee);
            foreach ($pr as $p) {
                $this->entityManager->remove($p);
            }

            $this->entityManager->flush();
        }
    }
}
