<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Structure/DiplomeImport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/05/2021 14:21
 */

namespace App\Classes\Structure;

use App\Entity\ApcApprentissageCritique;
use App\Entity\ApcCompetence;
use App\Entity\ApcComposanteEssentielle;
use App\Entity\ApcNiveau;
use App\Entity\ApcParcours;
use App\Entity\ApcParcoursNiveau;
use App\Entity\ApcRessource;
use App\Entity\ApcRessourceApprentissageCritique;
use App\Entity\ApcRessourceCompetence;
use App\Entity\ApcSae;
use App\Entity\ApcSaeApprentissageCritique;
use App\Entity\ApcSaeCompetence;
use App\Entity\ApcSaeRessource;
use App\Entity\ApcSituationProfessionnelle;
use App\Entity\Diplome;
use App\Entity\Semestre;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Filesystem\Exception\FileNotFoundException;

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
                //todo: ajouter l'année
                $niv->setLibelle($niveau['libelle']);
                $niv->setOrdre((int) $niveau['ordre']);
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
            foreach ($parcour->annee as $annee) {
                foreach ($annee->competence as $parcNiveau) {
                    $pn = new ApcParcoursNiveau();
                    $pn->setNiveau($tCompetences[trim((string) $parcNiveau['nom'])][trim((string) $parcNiveau['niveau'])]);
                    $pn->setParcours($parc);
                    $this->entityManager->persist($pn);
                }
            }
        }
        $this->entityManager->flush();
    }

    private function openXmlFile()
    {
        if (file_exists($this->fichier)) {
            return simplexml_load_string(file_get_contents($this->fichier));
        }

        throw new FileNotFoundException();
    }

    private function importFormation()
    {
        $xml = $this->openXmlFile();
        $tAcs = $this->entityManager->getRepository(ApcApprentissageCritique::class)->findOneByDiplomeArray($this->diplome);
        $tCompetences = $this->entityManager->getRepository(ApcCompetence::class)->findOneByDiplomeArray($this->diplome);
        foreach ($xml->semestre as $sem) {
            $semestre = $this->entityManager->getRepository(Semestre::class)->findOneByDiplomeEtNumero($this->diplome,
                $sem['numero'], $sem['ordreAnnee']);

            if (null !== $semestre) {
                $tRessources = [];
                foreach ($sem->ressources->ressource as $ressource) {
                    $ar = new ApcRessource();
                    $ar->setSemestre($semestre);
                    $ar->setLibelle($ressource->titre);
                    $ar->setCodeMatiere((string) $ressource['code']);
                    $ar->setCodeElement($this->diplome->getSigle(). $ressource['code']);
                    $ar->setTdPpn((float) $ressource['heuresCMTD']);
                    $ar->setTpPpn((float) $ressource['heuresTP']);
                    $ar->setDescription((string) $ressource->description);
                    $ar->setMotsCles((string) $ressource->motsCles);
                    $this->entityManager->persist($ar);
                    $tRessources[$ar->getCodeMatiere()] = $ar;

                    //acs
                    foreach ($ressource->acs->ac as $ac) {
                        $rac = new ApcRessourceApprentissageCritique($ar, $tAcs[trim((string) $ac)]);
                        $this->entityManager->persist($rac);
                    }
                    //competences
                    foreach ($ressource->competences->competence as $comp) {
                        $rac = new ApcRessourceCompetence($ar, $tCompetences[trim((string) $comp['nom'])]);
                        $rac->setCoefficient((float) $comp['coefficient']);
                        $this->entityManager->persist($rac);
                    }
                    //les saes seront ajoutée par les SAE
                }

                foreach ($sem->saes->sae as $sae) {
                    $ar = new ApcSae();
                    $ar->setSemestre($semestre);
                    $ar->setLibelle($sae->titre);
                    $ar->setCodeMatiere((string) $sae['code']);
                    $ar->setCodeElement($this->diplome->getSigle().(string) $sae['code']);
                    $ar->setTdPpn((float) $sae['heuresCMTD']);
                    $ar->setTpPpn((float) $sae['heuresTP']);
                    $ar->setProjetPpn((float) $sae['heuresProjet']);
                    $ar->setDescription((string) $sae->description);
                    $ar->setExemples((string) $sae->exemples);
                    $ar->setLivrables((string) $sae->livrables);
                    $this->entityManager->persist($ar);

                    //acs
                    foreach ($sae->acs->ac as $ac) {
                        $rac = new ApcSaeApprentissageCritique($ar, $tAcs[trim((string) $ac)]);
                        $this->entityManager->persist($rac);
                    }

                    //competences
                    foreach ($sae->competences->competence as $comp) {
                        $rac = new ApcSaeCompetence($ar, $tCompetences[trim((string) $comp['nom'])]);
                        $rac->setCoefficient((float) $comp['coefficient']);
                        $this->entityManager->persist($rac);
                    }
                    //Ressources
                    foreach ($sae->ressources->ressource as $comp) {
                        $rac = new ApcSaeRessource($ar, $tRessources[trim((string) $comp)]);
                        $this->entityManager->persist($rac);
                    }
                }
            }
        }
        $this->entityManager->flush();
    }
}
