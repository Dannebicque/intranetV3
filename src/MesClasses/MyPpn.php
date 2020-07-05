<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/MesClasses/MyPpn.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\MesClasses;


use App\Entity\Departement;
use App\Entity\Matiere;
use App\Entity\Parcour;
use App\Entity\Ppn;
use App\Entity\Ue;
use Doctrine\ORM\EntityManagerInterface;
use Exception;

class MyPpn
{
    /** @var MyUpload */
    public $myUpload;

    /** @var EntityManagerInterface */
    public $entityManager;

    /**
     * MyPpn constructor.
     *
     * @param MyUpload               $myUpload
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(MyUpload $myUpload, EntityManagerInterface $entityManager)
    {
        $this->myUpload = $myUpload;
        $this->entityManager = $entityManager;
    }

    /**
     * @param             $data
     * @param Departement $departement
     *
     * @return bool
     * @throws Exception
     */
    public function importCsv($data, Departement $departement): bool
    {
        $ppn = $this->entityManager->getRepository(Ppn::class)->find($data['ppn']);
        if ($ppn !== null) {
            $file = $this->myUpload->upload($data['fichier'], 'temp');

            $ues = $this->entityManager->getRepository(Ue::class)->tableauUeApogee($departement);
            $parcours = $this->entityManager->getRepository(Parcour::class)->tableauParcourApogee($departement);

            $handle = fopen($file, 'rb');

            /*Si on a réussi à ouvrir le fichier*/
            if ($handle) {
                /* supprime la première ligne */
                fgetcsv($handle, 1024, ';');
                /*Tant que l'on est pas à la fin du fichier*/
                while (!feof($handle)) {
                    /*On lit la ligne courante*/
                    $ligne = fgetcsv($handle, 1024, ';');

                    if (array_key_exists($ligne[0], $ues)) {
                        $matiere = new Matiere();
                        if ($ligne[1] !== '' || $ligne[1] !== null) {
                            if (array_key_exists($ligne[1], $parcours)) {
                                $matiere->setParcours($parcours[$ligne[1]]);
                            }
                        }
                        $matiere->setPpn($ppn);
                        $matiere->setUe($ues[$ligne[0]]);
                        $matiere->setCodeElement(trim($ligne[2]));
                        $matiere->setLibelle(trim($ligne[3]));
                        $matiere->setCodeMatiere(trim($ligne[4]));
                        $matiere->setCmPpn(trim($ligne[5]));
                        $matiere->setTdPpn(trim($ligne[6]));
                        $matiere->setTpPpn(trim($ligne[7]));
                        $matiere->setCmFormation(trim($ligne[8]));
                        $matiere->setTdFormation(trim($ligne[9]));
                        $matiere->setTpFormation(trim($ligne[10]));
                        $matiere->setCommentaire(trim($ligne[11]));
                        $matiere->setNbNotes(trim($ligne[12]));
                        $matiere->setCoefficient(trim($ligne[13]));
                        $matiere->setNbEcts(trim($ligne[14]));
                        $matiere->setObjectifsModule(trim($ligne[15]));
                        $matiere->setCompetencesVisees(trim($ligne[16]));
                        $matiere->setContenu(trim($ligne[17]));
                        $matiere->setPreRequis(trim($ligne[18]));
                        $matiere->setModalites(trim($ligne[19]));
                        $matiere->setProlongements(trim($ligne[20]));
                        $matiere->setMotsCles(trim($ligne[21]));
                        $this->entityManager->persist($matiere);
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

        return false;
    }

}
