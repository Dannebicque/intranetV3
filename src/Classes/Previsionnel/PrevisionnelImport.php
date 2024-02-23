<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Previsionnel/PrevisionnelImport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:41
 */

namespace App\Classes\Previsionnel;

use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\MyUpload;
use App\Entity\Diplome;
use App\Entity\Previsionnel;
use App\Repository\PersonnelRepository;
use App\Utils\Tools;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use function array_key_exists;

/**
 * Class PrevisionnelImport.
 */
readonly class PrevisionnelImport
{
    public function __construct(
        private TypeMatiereManager     $typeMatiereManager,
        private PrevisionnelManager    $previsionnelManager,
        private EntityManagerInterface $entityManager,
        private PersonnelRepository    $personnelRepository,
        private MyUpload               $myUpload
    ) {
    }

    /**
     * @throws Exception
     */
    public function importCsv(array $data): bool
    {
        $file = $this->myUpload->upload($data['fichier'], 'temp');

        if (null !== $data['diplome']) {
            $matieres = $this->typeMatiereManager->tableauApogeeDiplome($data['diplome']);
            $personnels = $this->personnelRepository->tableauPersonnelHarpege($data['diplome']);

            $handle = fopen($file, 'rb');

            /* Si on a réussi à ouvrir le fichier */
            if ($handle) {
                /* suppression des données de prévi */
                $this->supprPrevisionnel($data['diplome'], $data['annee']);

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

    private function supprPrevisionnel(Diplome $diplome, int $annee): void
    {
        $pr = $this->previsionnelManager->findByDiplomeToDelete($diplome, $annee);

        foreach ($pr as $p) {
            $this->entityManager->remove($p);
        }

        $this->entityManager->flush();
    }
}
