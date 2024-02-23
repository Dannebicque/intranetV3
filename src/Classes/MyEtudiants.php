<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/MyEtudiants.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:41
 */

namespace App\Classes;

use App\Entity\Adresse;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use App\Repository\BacRepository;
use App\Utils\Tools;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use function array_key_exists;
use function count;
use function is_array;

readonly class MyEtudiants
{
    /**
     * MyEtudiants constructor.
     */
    public function __construct(private EntityManagerInterface $entityManager, private BacRepository $bacRepository, private MyUpload $myUpload)
    {
    }

    /**
     * @throws Exception
     */
    public function importListeCsv(?UploadedFile $fichier, ?Semestre $semestre): bool
    {
        $bacs = $this->bacRepository->getApogeeArray();
        if (null !== $semestre) {
            $file = $this->myUpload->upload($fichier, 'temp');
            $handle = fopen($file, 'rb');

            /* Si on a réussi à ouvrir le fichier */
            if ($handle) {
                /* supprime la première ligne */
                fgetcsv($handle, 1024, ';');
                /* Tant que l'on est pas à la fin du fichier */
                while (!feof($handle)) {
                    /* On lit la ligne courante */
                    $ligne = fgetcsv($handle, 1024, ';');
                    if (is_array($ligne) && count($ligne) > 10) {
                        $etudiant = new Etudiant();
                        // login	numetudiant	numine	nom	prenom	photo	mailuniv	siteuniv	mailperso	siteperso	visible	sexe	promo	anneesortie	datenaissance	bac	tel1	tel2	remarques	signature	anneebac	commentaire	typeuser	intitulesecu	adressesecu	loginMMI	slug	fifc	boursier	adresse1	adresse2	adresse3	cp	ville	pays	nomadresse	codeetape
                        $etudiant->setSemestre($semestre);
                        $etudiant->setDepartement($semestre->getDiplome()->getDepartement());
                        $etudiant->setUsername($ligne[0]);
                        $etudiant->setNumEtudiant($ligne[1]);
                        $etudiant->setNumIne($ligne[2]);
                        $etudiant->setNom($ligne[3]);
                        $etudiant->setPrenom($ligne[4]);
                        $etudiant->setPhotoName($ligne[5]);
                        $etudiant->setMailUniv($ligne[6]);
                        $etudiant->setSiteUniv($ligne[7]);
                        $etudiant->setMailPerso($ligne[8]);
                        $etudiant->setSitePerso($ligne[9]);
                        $etudiant->setVisible($ligne[10]);
                        $etudiant->setCivilite($ligne[11]);
                        $etudiant->setPromotion($ligne[12]);
                        $etudiant->setAnneeSortie($ligne[13]);
                        $etudiant->setDateNaissance(Tools::convertDateToObject($ligne[14]));
                        if (array_key_exists($ligne[15], $bacs)) {
                            $etudiant->setBac($bacs[$ligne[15]]);
                        } else {
                            $etudiant->setBac(null);
                        }
                        $etudiant->setTel1($ligne[16]);
                        $etudiant->setTel2($ligne[17]);
                        $etudiant->setRemarque($ligne[18]);
                        $etudiant->setSignature($ligne[19]);
                        $etudiant->setAnneeBac($ligne[20]);
                        $etudiant->setTypeUser('etudiant');
                        $etudiant->setIntituleSecuriteSociale($ligne[23]);
                        $etudiant->setAdresseSecuriteSociale($ligne[24]);
                        $etudiant->setLoginSpecifique($ligne[25]);
                        $etudiant->setSlug($ligne[26]);
                        $etudiant->setFormationContinue($ligne[27]);
                        $etudiant->setBoursier($ligne[28]);
                        $adresse = new Adresse();
                        $adresse->setAdresse1($ligne[29]);
                        $adresse->setAdresse2($ligne[30]);
                        $adresse->setAdresse3($ligne[31]);
                        $adresse->setCodePostal($ligne[32]);
                        $adresse->setVille($ligne[33]);
                        $this->entityManager->persist($adresse);
                        $etudiant->setAdresse($adresse);

                        $this->entityManager->persist($etudiant);
                    }
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
