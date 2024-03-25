<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Structure/DiplomeImport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 08:59
 */

namespace App\Classes\Structure;

use App\Entity\Annee;
use App\Entity\ApcApprentissageCritique;
use App\Entity\ApcCompetence;
use App\Entity\ApcComposanteEssentielle;
use App\Entity\ApcNiveau;
use App\Entity\ApcParcours;
use App\Entity\ApcParcoursNiveau;
use App\Entity\ApcReferentiel;
use App\Entity\ApcRessource;
use App\Entity\ApcRessourceApprentissageCritique;
use App\Entity\ApcRessourceCompetence;
use App\Entity\ApcSae;
use App\Entity\ApcSaeApprentissageCritique;
use App\Entity\ApcSaeCompetence;
use App\Entity\ApcSaeRessource;
use App\Entity\ApcSituationProfessionnelle;
use App\Entity\Constantes;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Ppn;
use App\Entity\Semestre;
use App\Entity\Ue;
use App\Repository\TypeDiplomeRepository;
use Doctrine\ORM\EntityManagerInterface;
use RuntimeException;
use SimpleXMLElement;
use Symfony\Component\Filesystem\Exception\FileNotFoundException;

class DiplomeImport
{
    protected ?ApcReferentiel $referentiel;
    private string $fichier;
    private Diplome $diplome;
    private string $log = '';
    private array $diplomes = [];
    private array $annees = [];
    private array $semestres = [];
    private array $ues = [];

    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly TypeDiplomeRepository $typeDiplomeRepository
    ) {
    }

    public function import(Diplome $diplome, string $fichier, $type, Ppn $ppn): void
    {
        $this->fichier = $fichier;
        $this->diplome = $diplome;
        $this->referentiel = $ppn->getApcReferentiel();

        switch ($type) {
            case 'competences':
                if (null === $this->referentiel) {
                    throw new RuntimeException('Le référentiel du diplôme n\'est pas défini');
                }
                $this->deleteFormation($this->referentiel);
                $this->deleteCompetences();
                $this->importCompetence();
                break;
            case 'formation':
                if (null === $this->referentiel) {
                    throw new RuntimeException('Le référentiel du diplôme n\'est pas défini');
                }
                $this->deleteFormation($this->referentiel);
                $this->importFormation($this->referentiel);
                break;
            case 'structure':
                // $this->deleteFormation($ppn);
                $this->importStructure($diplome->getDepartement());
                break;
        }
    }

    private function importCompetence(): void
    {
        $xml = $this->openXmlFile();
        $tCompetences = [];

        $this->referentiel->setTypeStructure($xml['type_structure']);

        foreach ($xml->competences->competence as $competence) {
            $comp = new ApcCompetence($this->referentiel);
            $comp->setApcReferentiel($this->referentiel);
            $id = $competence['id'];
            $comp->setCouleur($competence['couleur']);
            $comp->setLibelle($competence['libelle_long']);
            $comp->setNomCourt($competence['nom_court']);
            $tCompetences[(string)$id] = [];

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
                // todo: à intégrer ici et dans ORéBUT $compos->setCode();
                $compos->setCompetence($comp);
                $this->entityManager->persist($compos);
            }

            foreach ($competence->niveaux->niveau as $niveau) {
                $niv = new ApcNiveau();

                $niv->setLibelle(substr($niveau['libelle'], 0, 255));
                $niv->setOrdre((int)$niveau['ordre']);
                $niv->setOrdreAnnee((int)substr($niveau['annee'], 3));
                $niv->setCompetence($comp);
                $tCompetences[(string)$id][$niv->getOrdre()] = $niv;
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
        $numParcours = 1;
        foreach ($xml->parcours->parcour as $parcour) {
            $parc = new ApcParcours($this->referentiel);
            $parc->setCode($parcour['code']);
            $parc->setLibelle($parcour['libelle']);
            $parc->setApcReferentiel($this->referentiel);
            $parc->setCouleur('c' . $numParcours);
            ++$numParcours;
            $this->entityManager->persist($parc);
            foreach ($parcour->annee as $annee) {
                foreach ($annee->competence as $parcNiveau) {
                    $pn = new ApcParcoursNiveau();
                    $pn->setNiveau($tCompetences[trim((string)$parcNiveau['id'])][(int)trim($parcNiveau['niveau'])]);
                    $pn->setParcours($parc);
                    $this->entityManager->persist($pn);
                }
            }
        }
        $this->entityManager->flush();
    }

    private function openXmlFile(): SimpleXMLElement|bool
    {
        if (file_exists($this->fichier)) {
            return simplexml_load_string(file_get_contents($this->fichier));
        }

        throw new FileNotFoundException();
    }

    private function importFormation(ApcReferentiel $referentiel): void
    {
        $xml = $this->openXmlFile();

        $typeStructure = $this->diplome->getTypeStructure();
        $tSemestres = [];

        $semestres = $this->entityManager->getRepository(Semestre::class)->findAllSemestreByDiplomeApc($this->diplome);


        foreach ($semestres as $semestre) {
            if (Constantes::APC_TYPE_3 === $typeStructure || $semestre->getOrdreLmd() > 2) {
                if (null !== $semestre->getDiplome()->getApcParcours()) {
                    $tSemestres[$semestre->getOrdreLmd()][$semestre->getDiplome()->getApcParcours()->getCode()] = $semestre;
                }
            } else {
                $tSemestres[$semestre->getOrdreLmd()] = $semestre;
            }
        }

        $tAcs = $this->entityManager->getRepository(ApcApprentissageCritique::class)->findOneByReferentielArray($this->referentiel);
        $tCompetences = $this->entityManager->getRepository(ApcCompetence::class)->findOneByReferentielArray($this->referentiel);
        foreach ($xml->semestre as $sem) {
            $numeroSemestre = (int)$sem['numero'];
            if (array_key_exists($numeroSemestre, $tSemestres)) {
                $tRessources = [];
                $prerequis = [];
                foreach ($sem->ressources->ressource as $ressource) {
                    $ar = new ApcRessource();

                    $ar->setLibelle($ressource->titre);
                    $ar->setCodeMatiere((string)$ressource['code']);
                    $ar->setCodeElement($this->diplome->getSigle() . $ressource['code']);
                    $ar->setTdPpn((float)$ressource['heuresCMTD']);
                    $ar->setTpPpn((float)$ressource['heuresTP']);
                    $ar->setDescription((string)$ressource->description);
                    $ar->setMotsCles((string)$ressource->{'mots-cles'});
                    $this->entityManager->persist($ar);
                    $tRessources[$ar->getCodeMatiere()] = $ar;

                    // acs
                    foreach ($ressource->acs->ac as $ac) {
                        $rac = new ApcRessourceApprentissageCritique($ar, $tAcs[trim((string)$ac)]);
                        $this->entityManager->persist($rac);
                    }

                    foreach ($ressource->prerequis->ressource as $res) {
                        $prerequis[$ar->getCodeMatiere()][] = (string)$res;
                    }

                    // competences
                    foreach ($ressource->competences->competence as $comp) {
                        $rac = new ApcRessourceCompetence($ar, $tCompetences[trim((string)$comp['nom'])]);
                        $rac->setCoefficient((float)$comp['coefficient']);
                        $this->entityManager->persist($rac);
                    }
                    // les saes seront ajoutée par les SAE

                    if (Constantes::APC_TYPE_3 === $typeStructure || $numeroSemestre > 2) {
                        foreach ($ressource->liste_parcours->parcours as $parcours) {
                            if (array_key_exists(trim((string)$parcours), $tSemestres[$numeroSemestre])) {
                                $ar->addSemestre($tSemestres[$numeroSemestre][trim((string)$parcours)]);
                                $tSemestres[$numeroSemestre][trim((string)$parcours)]->addApcSemestresRessource($ar);
                            }
                        }
                        if ($ar->getSemestres()->count() > 1) {
                            $ar->setMutualisee(true);
                        }
                    } else {
                        $ar->addSemestre($tSemestres[$numeroSemestre]);
                        $tSemestres[$numeroSemestre]->addApcSemestresRessource($ar);
                    }
                }

                foreach ($sem->saes->sae as $sae) {
                    $ar = new ApcSae();

                    $ar->setLibelle($sae->titre);
                    $ar->setCodeMatiere((string)$sae['code']);
                    $ar->setCodeElement($this->diplome->getSigle() . $sae['code']);
                    $ar->setDescription((string)$sae->description);
                    $ar->setObjectifs((string)$sae->objectifs);
                    $this->entityManager->persist($ar);

                    // acs
                    foreach ($sae->acs->ac as $ac) {
                        $rac = new ApcSaeApprentissageCritique($ar, $tAcs[trim((string)$ac)]);
                        $this->entityManager->persist($rac);
                    }

                    // competences
                    foreach ($sae->competences->competence as $comp) {
                        $rac = new ApcSaeCompetence($ar, $tCompetences[trim((string)$comp['nom'])]);
                        $rac->setCoefficient((float)$comp['coefficient']);
                        $this->entityManager->persist($rac);
                    }
                    // Ressources
                    foreach ($sae->ressources->ressource as $comp) {
                        $rac = new ApcSaeRessource($ar, $tRessources[trim((string)$comp)]);
                        $this->entityManager->persist($rac);
                    }

                    if (Constantes::APC_TYPE_3 === $typeStructure || $numeroSemestre > 2) {
                        foreach ($sae->liste_parcours->parcours as $parcours) {
                            if (array_key_exists(trim((string)$parcours), $tSemestres[$numeroSemestre])) {
                                $ar->addSemestre($tSemestres[$numeroSemestre][trim((string)$parcours)]);
                                $tSemestres[$numeroSemestre][trim((string)$parcours)]->addApcSemestresSae($ar);
                            }
                        }
                        if ($ar->getSemestres()->count() > 1) {
                            $ar->setMutualisee(true);
                        }
                    } else {
                        $ar->addSemestre($tSemestres[$numeroSemestre]);
                        $tSemestres[$numeroSemestre]->addApcSemestresSae($ar);
                    }
                }
                foreach ($prerequis as $key => $ressources) {
                    $ar = $tRessources[$key];
                    foreach ($ressources as $ressource) {
                        if (array_key_exists($ressource, $tRessources)) {
                            $ar->addRessourcesPreRequise($tRessources[$ressource]);
                            $tRessources[$ressource]->addRessourcesAvecPreRequi($ar);
                        }
                    }
                }
            }
        }
        $this->entityManager->flush();
    }

    private function deleteFormation(ApcReferentiel $referentiel): void
    {
        $ressources = $this->entityManager->getRepository(ApcRessource::class)->findByReferentiel($referentiel);
        $saes = $this->entityManager->getRepository(ApcSae::class)->findByReferentiel($referentiel);

        foreach ($ressources as $ressource) {
            foreach ($ressource->getApcRessourceCompetences() as $ac) {
                $this->entityManager->remove($ac);
            }

            foreach ($ressource->getApcRessourceApprentissageCritiques() as $ac) {
                $this->entityManager->remove($ac);
            }

            foreach ($ressource->getApcSaeRessources() as $ac) {
                $this->entityManager->remove($ac);
            }
            foreach ($ressource->getApcRessourceParentEnfants() as $ac) {
                $this->entityManager->remove($ac);
            }
            $this->entityManager->remove($ressource);
        }

        foreach ($saes as $sae) {
            foreach ($sae->getApcSaeCompetences() as $ac) {
                $this->entityManager->remove($ac);
            }

            foreach ($sae->getApcSaeApprentissageCritiques() as $ac) {
                $this->entityManager->remove($ac);
            }

            foreach ($sae->getApcSaeRessources() as $ac) {
                $this->entityManager->remove($ac);
            }

            $this->entityManager->remove($sae);
        }
    }

    private function importStructure(?Departement $departement): string
    {
        $handle = fopen($this->fichier, 'rb');

        /* Si on a réussi à ouvrir le fichier */
        if ($handle) {
            // on récupère l'en-tête
            $phrase = fgetcsv($handle, 1024, ';');
            while (!feof($handle)) {
                /* On lit la ligne courante */
                $phrase = fgetcsv($handle, 1024, ';');
                switch ($phrase[0]) {
                    case 'DIPLOME':
                        $this->importDiplome($phrase, $departement);
                        break;
                    case 'ANNEE':
                        $this->importAnnee($phrase);
                        break;
                    case 'SEMESTRE':
                        $this->importSemestre($phrase);
                        break;

                    case 'UE':
                        $this->importUe($phrase);
                        break;
                }
            }

            $this->entityManager->flush();
        } else {
            $this->log .= 'Erreur lors de l\'ouverture du fichier<br>';
        }

        return $this->log;
    }

    private function importDiplome(bool|array $phrase, Departement $departement): void
    {
        $typeDiplome = $this->typeDiplomeRepository->findOneBy(['code' => $phrase[7]]);

        $dip = new Diplome($departement);
        $dip->setLibelle($phrase[1]);
        $dip->setSigle($phrase[2]);
        $dip->setCodeDiplome($phrase[3]);
        $dip->setCodeVersion($phrase[4]);
        $dip->setCodeDepartement($phrase[5]);
        $dip->setVolumeHoraire($phrase[6]);
        $dip->setTypeDiplome($typeDiplome);
        $this->entityManager->persist($dip);
        $this->diplomes[$dip->getCodeDiplome() . '_' . $dip->getCodeVersion()] = $dip;
    }

    private function importAnnee(bool|array $phrase): void
    {
        if (array_key_exists($phrase[9], $this->diplomes)) {
            $dip = $this->diplomes[trim($phrase[9])];

            $annee = new Annee();
            $annee->setDiplome($dip);
            $annee->setLibelleLong($phrase[1]);
            $annee->setLibelle($phrase[2]);
            $annee->setCodeEtape($phrase[3]);
            $annee->setOrdre($phrase[8]);
            $this->entityManager->persist($annee);
            $this->annees[$annee->getCodeEtape()] = $annee;
        }
        $this->log .= 'Diplome non trouvé : ' . $phrase[9] . '<br>';
    }

    private function importSemestre(bool|array $phrase): void
    {
        if (array_key_exists($phrase[9], $this->annees)) {
            $annee = $this->annees[trim($phrase[9])];

            $semestre = new Semestre();
            $semestre->setAnnee($annee);
            $semestre->setLibelle($phrase[1]);
            $semestre->setLibelle($phrase[2]);
            $semestre->setCodeElement($phrase[3]);
            $semestre->setOrdreLmd($phrase[8]);
            $semestre->setOrdreAnnee($phrase[8] % 2 === 0 ? 2 : 1);
            $semestre->setNbGroupesCm($phrase[10]);
            $semestre->setNbGroupesTd($phrase[11]);
            $semestre->setNbGroupesTp($phrase[12]);
            $this->entityManager->persist($semestre);
            $this->semestres[$semestre->getCodeElement()] = $semestre;
        }
        $this->log .= 'Année non trouvée : ' . $phrase[9] . '<br>';
    }

    private function importUe(bool|array $phrase): void
    {
        if (array_key_exists($phrase[9], $this->semestres)) {
            $semestre = $this->semestres[trim($phrase[9])];

            $ue = new Ue();
            $ue->setSemestre($semestre);
            $ue->setLibelle($phrase[1]);
            // $ue->setSigle($phrase[2]);
            $ue->setNumeroUe($phrase[8]);
            $ue->setCodeElement($phrase[3]);
            $ue->setNbEcts($phrase[13]);

            $this->entityManager->persist($ue);
            $this->ues[$ue->getCodeElement()] = $ue;
        }
        $this->log .= 'Semestre non trouvé : ' . $phrase[9] . '<br>';
    }

    private function deleteCompetences(): void
    {
        // suppression du référentiel de compétences associé au référentiel de compétences
        foreach ($this->referentiel->getApcComptences() as $competence) {
            foreach ($competence->getApcComposanteEssentielles() as $ce) {
                $this->entityManager->remove($ce);
            }

            foreach ($competence->getApcSituationProfessionnelles() as $situationProfessionnelle) {
                $this->entityManager->remove($situationProfessionnelle);
            }

            foreach ($competence->getApcNiveaux() as $niveau) {
                foreach ($niveau->getApcApprentissageCritiques() as $ac) {
                    $this->entityManager->remove($ac);
                }

                $this->entityManager->remove($niveau);
            }

            $this->entityManager->remove($competence);
        }

        foreach ($this->referentiel->getApcParcours() as $parcours) {
            foreach ($parcours->getDiplomes() as $dip) {
                $dip->setApcParcours(null);
            }
            $this->entityManager->remove($parcours);
        }

        $this->entityManager->flush();
    }
}
