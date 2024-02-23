<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/MyScolarite.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:41
 */

namespace App\Classes;

use App\Entity\AnneeUniversitaire;
use App\Entity\Departement;
use App\Entity\Scolarite;
use App\Repository\EtudiantRepository;
use App\Repository\SemestreRepository;
use App\Repository\UeRepository;
use App\Utils\Tools;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use function array_key_exists;
use function count;

readonly class MyScolarite
{
    public function __construct(
        private MyUpload               $myUpload,
        private EntityManagerInterface $entityManager,
        private SemestreRepository     $semestreRepository,
        private UeRepository           $ueRepository,
        private EtudiantRepository     $etudiantRepository
    ) {
    }

    /**
     * @throws Exception
     */
    public function importCsv(array $data, Departement $departement, AnneeUniversitaire $anneeUniversitaire): bool
    {
        $file = $this->myUpload->upload($data, 'temp');

        $ues = $this->ueRepository->tableauUeApogee($departement);
        $semestres = $this->semestreRepository->tableauSemestresApogee($departement);
        $etudiants = $this->etudiantRepository->findByDepartementArray($departement);

        $handle = fopen($file, 'rb');

        /* Si on a réussi à ouvrir le fichier */
        if ($handle) {
            /* supprime la première ligne */
            fgetcsv($handle, 1024, ';');
            /* Tant que l'on est pas à la fin du fichier */
            while (!feof($handle)) {
                /* On lit la ligne courante */
                $ligne = fgetcsv($handle, 1024, ';');
                if (false !== $ligne && count($ligne) > 1 && array_key_exists($ligne[1],
                        $semestres) && array_key_exists($ligne[0], $etudiants)) {
                    // numetudiant	codesemestre	semestre	ordre	moyenne	nbabsences	decision	suite ues
                    $scol = new Scolarite($etudiants[$ligne[0]], $semestres[$ligne[1]]);
                    $scol->setAnneeUniversitaire($anneeUniversitaire);
                    $scol->setDecision($ligne[6]);
                    $scol->setMoyenne(Tools::convertToFloat($ligne[4]));
                    $scol->setOrdre($ligne[3]);
                    $scol->setNbAbsences($ligne[5]);
                    $scol->setProposition($ligne[7]);
                    $scol->setDiffuse(true);
                    $this->entityManager->persist($scol);
                    $tues = explode('!', (string) $ligne[8]);
                    $tUe = [];
                    foreach ($tues as $tue) {
                        $ue = explode(':', $tue);
                        if (array_key_exists($ue[0], $ues)) {
                            $tUe[$ues[$ue[0]]->getId()]['moyenne'] = Tools::convertToFloat($ue[1]);
                            $tUe[$ues[$ue[0]]->getId()]['rang'] = -1;
                        }
                    }
                    $scol->setMoyennesUes($tUe);
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
}
