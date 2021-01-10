<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyScolarite.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 10/01/2021 17:07

namespace App\Classes;


use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
use App\Entity\Departement;
use App\Entity\Etudiant;
use App\Entity\Scolarite;
use App\Entity\Semestre;
use App\Entity\Ue;
use App\Repository\ScolariteRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;

class MyScolarite
{
    public MyUpload $myUpload;

    public EntityManagerInterface $entityManager;

    private ScolariteRepository $scolariteRepository;

    /**
     * MyPpn constructor.
     *
     * @param MyUpload               $myUpload
     * @param EntityManagerInterface $entityManager
     * @param ScolariteRepository    $scolariteRepository
     */
    public function __construct(
        MyUpload $myUpload,
        EntityManagerInterface $entityManager,
        ScolariteRepository $scolariteRepository
    ) {
        $this->myUpload = $myUpload;
        $this->entityManager = $entityManager;
        $this->scolariteRepository = $scolariteRepository;
    }

    /**
     * @param             $data
     * @param Departement $departement
     *
     * @return bool
     * @throws Exception
     */
    public function importCsv($data, Departement $departement, AnneeUniversitaire $anneeUniversitaire): bool
    {
        $file = $this->myUpload->upload($data, 'temp');

        $ues = $this->entityManager->getRepository(Ue::class)->tableauUeApogee($departement);
        $semestres = $this->entityManager->getRepository(Semestre::class)->tableauSemestresApogee($departement);
        $etudiants = $this->entityManager->getRepository(Etudiant::class)->findByDepartementArray($departement);

        $handle = fopen($file, 'rb');

        /*Si on a réussi à ouvrir le fichier*/
        if ($handle) {
            /* supprime la première ligne */
            fgetcsv($handle, 1024, ';');
            /*Tant que l'on est pas à la fin du fichier*/
            while (!feof($handle)) {
                /*On lit la ligne courante*/
                $ligne = fgetcsv($handle, 1024, ';');
                if ($ligne !== false && count($ligne) > 1) {
                    if (array_key_exists($ligne[1], $semestres) && array_key_exists($ligne[0], $etudiants)) {
                        //numetudiant	codesemestre	semestre	ordre	moyenne	nbabsences	decision	suite ues
                        $scol = new Scolarite($etudiants[$ligne[0]], $semestres[$ligne[1]]);
                        $scol->setAnneeUniversitaire($anneeUniversitaire);
                        $scol->setDecision($ligne[6]);
                        $scol->setMoyenne(Tools::convertToFloat($ligne[4]));
                        $scol->setOrdre($ligne[3]);
                        $scol->setNbAbsences($ligne[5]);
                        $scol->setProposition($ligne[7]);
                        $scol->setDiffuse(true);
                    $this->entityManager->persist($scol);
                    $tues = explode('!', $ligne[8]);
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
            }
            $this->entityManager->flush();

            /*On ferme le fichier*/
            fclose($handle);
            unlink($file); //suppression du fichier

            return true;
        }

        return false;
    }
//
//    public function initSemestre(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire)
//    {
//        foreach ($semestre->getEtudiants() as $etudiant) {
//            $parcour = $this->scolariteRepository->findBy([
//                'semestre' => $semestre->getId(),
//                'etudiant' => $etudiant->getId(),
//                'decision' => Constantes::SEMESTRE_EN_COURS
//            ]);
//            if (count($parcour) === 0) {
//                $maxOrdre = $this->scolariteRepository->findOrdreMax($etudiant);
//                $scolarite = new Scolarite($etudiant, $semestre, $anneeUniversitaire);
//                $scolarite->setOrdre($maxOrdre + 1);
//                $scolarite->setDecision(Constantes::SEMESTRE_EN_COURS);
//                $this->entityManager->persist($scolarite);
//            }
//        }
//        $this->entityManager->flush();
//    }

}
