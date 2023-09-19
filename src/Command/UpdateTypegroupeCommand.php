<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Command/UpdateTypegroupeCommand.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/09/2023 20:59
 */

namespace App\Command;

use App\Entity\Groupe;
use App\Repository\EtudiantRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:update-typegroupe',
    description: 'Add a short description for your command',
)]
/** @deprecated */
class UpdateTypegroupeCommand extends Command
{
    public function __construct(
        protected EntityManagerInterface $entityManager,
        protected EtudiantRepository $etudiantRepository,
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $etudiants = $this->etudiantRepository->findEtudiantEnFormation();

        foreach ($etudiants as $etudiant) {
            //récupérer le groupes et vérifier si le semestre du type de groupe est le même que celui de l'étudiant.
            $groupes = $etudiant->getGroupes();
            /** @var Groupe $groupe */
            foreach ($groupes as $groupe) {
                if (!$groupe->getTypeGroupe()?->getSemestres()->contains($etudiant->getSemestre())) {
                    $etudiant->removeGroupe($groupe);
                    $groupe->removeEtudiant($etudiant);
                }
            }
        }

        $this->entityManager->flush();

        $io->success('Types de groupes mis à jour.');

        return Command::SUCCESS;
    }
}
