<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Structure/DiplomeImport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 13/05/2021 12:31
 */

namespace App\Classes\Structure;

use App\Entity\ApcApprentissageCritique;
use App\Entity\ApcCompetence;
use App\Entity\ApcComposanteEssentielle;
use App\Entity\ApcNiveau;
use App\Entity\ApcParcours;
use App\Entity\ApcParcoursNiveau;
use App\Entity\ApcSituationProfessionnelle;
use App\Entity\Diplome;
use Doctrine\ORM\EntityManagerInterface;

class DiplomeImport
{
    private string $fichier;
    private Diplome $diplome;
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function import(Diplome $diplome, string $fichier, $type)
    {
        $this->fichier = $fichier;
        $this->diplome = $diplome;

        switch ($type) {
            case 'competences':
                $this->importCompetence();
                break;
            case 'formation':
                $this->importFormation();
                break;
            case 'ppn':
                $this->importPpn();
                break;
        }
    }

    private function importCompetence()
    {
        $xml = $this->openXmlFile();
        $tCompetences = [];
        foreach ($xml->competences->competence as $competence) {
            $comp = new ApcCompetence($this->diplome);
            $comp->setCouleur($competence['couleur']);
            $comp->setLibelle($competence['libelle_long']);
            $comp->setNomCourt($competence['name']);
            $tCompetences[$comp->getNomCourt()] = [];

            $this->entityManager->persist($comp);

            foreach ($competence->situations->situation as $situation) {
                $sit = new ApcSituationProfessionnelle();
                $sit->setLibelle($situation);
                $sit->setCompetence($comp);
                $this->entityManager->persist($sit);
            }

            foreach ($competence->composantes_essentielles->composante as $composante) {
                $compos = new ApcComposanteEssentielle();
                $compos->setLibelle($composante);
                $compos->setCompetence($comp);
                $this->entityManager->persist($compos);
            }

            foreach ($competence->niveaux->niveau as $niveau) {
                $niv = new ApcNiveau();
                $niv->setLibelle($niveau['libelle']);
                $niv->setOrdre((int)$niveau['ordre']);
                $niv->setCompetence($comp);
                $tCompetences[$comp->getNomCourt()][$niv->getOrdre()] = $niv;

                $this->entityManager->persist($niv);

                foreach ($niveau->acs->ac as $ac) {
                    $app = new ApcApprentissageCritique();
                    $app->setLibelle($ac[0]);
                    $app->setCode($ac['code']);
                    $app->setNiveau($niv);
                    $this->entityManager->persist($app);
                }
            }
        }
        foreach ($xml->parcours->parcour as $parcour) {
            $parc = new ApcParcours($this->diplome);
            $parc->setCode($parcour['code']);
            $parc->setLibelle($parcour['libelle']);
            $this->entityManager->persist($parc);
            foreach ($parcour->niveau as $parcNiveau) {
                $pn = new ApcParcoursNiveau();
                $pn->setNiveau($tCompetences[(string)$parcNiveau['competence']][(string)$parcNiveau['ordre']]);
                $pn->setParcours($parc);
                $this->entityManager->persist($pn);
            }
        }
        $this->entityManager->flush();
    }

    private function openXmlFile()
    {
        if (file_exists($this->fichier)) {
            return simplexml_load_file($this->fichier);
        } else {
            exit('Echec lors de l\'ouverture du fichier test.xml.');
        }
    }

    private function importFormation()
    {
    }
}
