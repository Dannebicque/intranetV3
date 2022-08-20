<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Command/ConfigApcCommand.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/08/2022 16:55
 */

namespace App\Command;

use App\Entity\Annee;
use App\Entity\Semestre;
use App\Entity\Ue;
use App\Repository\DiplomeRepository;
use Carbon\Carbon;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:config-apc',
    description: 'Configuration de la structure de base d\'un diplôme de BUT',
)]
class ConfigApcCommand extends Command
{
    public function __construct(
        protected EntityManagerInterface $em,
        protected DiplomeRepository $diplomeRepository
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('arg1', InputArgument::OPTIONAL, 'Spécialité');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $arg1 = $input->getArgument('arg1');

        if ($arg1) {
            $diplome = $this->diplomeRepository->findOneBy(['sigle' => $arg1, 'typeDiplome' => 4]);
            if (null !== $diplome) {
                $io->note(sprintf('Traitement en cours pour la spécialité : %s', $arg1));

                $referentiel = $diplome->getReferentiel();
                $parcours = $referentiel->getApcParcours();

                foreach ($parcours as $parcour) {
                    if (true === $parcour->getActif()) {
                        $parcour->setApcReferentiel($referentiel);
                        $newDiplome = clone $diplome;
                        $newDiplome->setCreated(Carbon::now());
                        $newDiplome->setUpdated(Carbon::now());
                        $newDiplome->setReferentiel($referentiel);
                        $newDiplome->setApcParcours($parcour);
                        $newDiplome->setLibelle($diplome->getLibelle().' Parcours : '.$parcour->getLibelle());
                        $newDiplome->setSigle($diplome->getSigle().' - '.$parcour->getCode());
                        $newDiplome->setParent($diplome);
                        $this->em->persist($newDiplome);

                        $io->note(sprintf('Création du sous diplome pour le parcours %s', $parcour->getLibelle()));

                        // création des années (dupliquer du diplôme de base ?)
                        for ($i = 2; $i <= 3; ++$i) {
                            // todo: faire une page pour la mise à jour des données codes + couleur
                            $newAnnee = new Annee();
                            $newAnnee->setDiplome($newDiplome);
                            $newAnnee->setOrdre($i);
                            $newAnnee->setLibelle($diplome->getSigle().' - '.$parcour->getCode().' - '.$i);
                            if (2 === $i) {
                                $newAnnee->setLibelleLong('Deuxiéme année de B.U.T. '.$diplome->getSigle().' - parcours '.$parcour->getLibelle());
                                $newAnnee->setCouleur('indigo');
                            }

                            if (3 === $i) {
                                $newAnnee->setLibelleLong('Troisième année de B.U.T. '.$diplome->getSigle().' - parcours '.$parcour->getLibelle());
                                $newAnnee->setActif(false);
                                $newAnnee->setCouleur('red');
                            }

                            $newAnnee->setCodeEtape('-');
                            $newAnnee->setCodeVersion(111);

                            $this->em->persist($newAnnee);
                            for ($j = 1; $j <= 2; ++$j) {
                                $newSemestre = new Semestre();
                                $newSemestre->setAnnee($newAnnee);
                                $newSemestre->setOrdreAnnee($j);
                                $newSemestre->setCodeElement('-');

                                if (2 === $i) {
                                    $newSemestre->setOrdreLmd($j + 2);
                                }

                                if (3 === $i) {
                                    $newSemestre->setOrdreLmd($j + 4);
                                }

                                $newSemestre->setLibelle('S'.$newSemestre->getOrdreLmd());
                                $newSemestre->setMoisDebut(1 === $j ? 9 : 2);

                                $this->em->persist($newSemestre);

                                // création des UEs
                                foreach ($parcour->getApcParcoursNiveaux() as $niv) {
                                    $niveau = $niv->getNiveau();
                                    $competence = $niveau->getCompetence();
                                    if (null !== $niveau && null !== $competence && $niveau->getOrdreAnnee() === $newSemestre->getAnnee()->getOrdre()) {
                                        $num = substr($competence->getCouleur(), 1, 1);
                                        $ue = new Ue($newSemestre);
                                        $ue->setLibelle('UE '.$newSemestre->getOrdreLmd().'.'.$num);
                                        $ue->setNumeroUe($num);
                                        $ue->setCoefficient(1);
                                        $ue->setCodeElement('-');
                                        $ue->setApcCompetence($competence);
                                        $this->em->persist($ue);
                                    }
                                }
                            }
                        }

                        $this->em->flush();
                    }
                }
            } else {
                $io->error(sprintf('Spécialité %s non trouvée', $arg1));

                return Command::FAILURE;
            }
        } else {
            $io->error('Spécialité non spécifiée');

            return Command::FAILURE;
        }

        $io->success('Structure mise à jour.');

        return Command::SUCCESS;
    }
}
