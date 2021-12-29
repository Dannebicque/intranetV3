<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Etudiant/EtudiantImport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 10/09/2021 14:41
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Etudiant;

use App\Classes\LDAP\MyLdap;
use App\Entity\Adresse;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use App\Utils\Tools;
use Doctrine\ORM\EntityManagerInterface;
use function array_key_exists;
use function count;
use function is_array;

class EtudiantImport
{
    private MyLdap $myLdap;
    private EntityManagerInterface $entity;

    /**
     * EtudiantImport constructor.
     */
    public function __construct(MyLdap $myLdap, EntityManagerInterface $entity)
    {
        $this->myLdap = $myLdap;
        $this->entity = $entity;
    }

    /**
     * @return Etudiant
     * @throws \JsonException
     *
     */
    public function createEtudiant(?Semestre $semestre, array $dataApogee): ?Etudiant
    {
        $etudiant = new Etudiant();
        $etudiant->setSemestre($semestre);
        $etudiant->setDepartement($semestre->getDiplome()->getDepartement());
        $etudiant->updateFromApogee($dataApogee['etudiant']);
        $etudiant->setPhotoName($etudiant->getNumEtudiant() . '.jpg');
        $update = $this->updateLdap($etudiant);

        $this->saveAdresse($dataApogee, $etudiant);
        if (true === $update) {
            $this->entity->persist($etudiant);

            return $etudiant;
        }

        return null;
    }

    private function updateLdap(Etudiant $etudiant)
    {
        $etuLdap = $this->myLdap->getInfoEtudiant($etudiant->getNumEtudiant());
        if (is_array($etuLdap) && 2 === count($etuLdap) && '' !== $etuLdap['mail'] && '' !== $etuLdap['login']) {
            $etudiant->updateFromLdap($etuLdap);
            $slug = explode('@', $etudiant->getMailUniv());
            $etudiant->setSlug($slug[0]);

            return true;
        }

        $etudiant->setUsername(mb_substr($etudiant->getNumEtudiant(), 0, 6));
        $etudiant->setSlug(mb_substr($etudiant->getNumEtudiant(), 0, 6));
        $etudiant->setMailUniv(mb_substr($etudiant->getNumEtudiant(), 0, 6));

        return false;
    }

    private function saveAdresse($dataApogee, Etudiant $etudiant): void
    {
        $adresse = new Adresse();
        $adresse->updateFromApogee($dataApogee['adresse']);
        $this->entity->persist($adresse);
        $etudiant->setAdresse($adresse);
        $this->entity->persist($etudiant);
    }

    public function updateEtudiant(
        Etudiant $etudiant,
        Semestre $semestre,
        array $dataApogee
    ) {
        $etudiant->updateFromApogee($dataApogee['etudiant']);
        $etudiant->setSemestre($semestre);
        $ldap = $this->updateLdap($etudiant);
        $etudiant->getAdresse()->updateFromApogee($dataApogee['adresse']);
        $etudiant->setPhotoName($etudiant->getNumEtudiant() . '.jpg');
        $this->saveAdresse($dataApogee, $etudiant);

        if ($ldap) {
            $this->entity->persist($etudiant);

            return $etudiant;
        }

        $this->entity->clear($etudiant);

        return null;
    }

    public function importFomCsv(?string $fichier, array $tabSemestres)
    {
        $handle = fopen($fichier, 'rb');

        /*Si on a réussi à ouvrir le fichier*/
        if ($handle) {
            /* supprime la première ligne */
            fgetcsv($handle, 1024, ';');
            /*Tant que l'on est pas à la fin du fichier*/
            while (!feof($handle)) {
                /*On lit la ligne courante*/
                $ligne = fgetcsv($handle, 1024, ';');
                if (array_key_exists($ligne[10], $tabSemestres)) {
                    $this->createEtudiantFromCsv($tabSemestres[$ligne[10]], $ligne);
                }
            }
            $this->entity->flush();
            fclose($handle);
            unlink($fichier); //suppression du fichier
        }
    }

    private function createEtudiantFromCsv(bool|array $ligne, Semestre $semestre)
    {
        //todo: importer les bacs... Revoir cette partie.
        $adresse = new Adresse();
        $adresse->setAdresse1($ligne[10]);
        $adresse->setAdresse2($ligne[11]);
        $adresse->setAdresse3($ligne[12]);
        $adresse->setCodePostal($ligne[13]);
        $adresse->setVille($ligne[14]);
        $this->entity->persist($adresse);

        $etudiant = new Etudiant();
        $etudiant->setAdresse($adresse);
        $etudiant->setNumEtudiant($ligne[0]);
        $etudiant->setNumIne($ligne[1]);
        $etudiant->setNom($ligne[2]);
        $etudiant->setPrenom($ligne[3]);
        $etudiant->setDateNaissance(Tools::convertDateToObject($ligne[4])); //en fr?
        $etudiant->setPromotion($ligne[5]);

        $etudiant->setAnneeBac($ligne[6]);
        //todo: corriger
        $etudiant->setBac(true === array_key_exists($ligne[7], $tBac) ? $tBac[$ligne[7]] : null);
        $etudiant->setCivilite('M' === $ligne[8] ? 'M.' : 'Mme'); //M ou F

        $etudiant->setTel1($ligne[9]);
        $etudiant->setTypeUser('etudiant');
        $etudiant->setSemestre($semestre);

        $this->entity->persist($etudiant);

    }
}
