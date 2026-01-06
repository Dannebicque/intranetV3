<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Command/UpdateSemestreCommand.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/01/2026 09:58
 */

namespace App\Command;

use App\Repository\AbsenceJustificatifRepository;
use App\Repository\AbsenceRepository;
use App\Repository\RattrapageRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:update-semestre',
    description: 'Mise à jour du semestre',
)]
class UpdateSemestreCommand extends Command
{
    public function __construct(
        protected EntityManagerInterface $entityManager,
        protected AbsenceRepository $absenceRepository,
        protected AbsenceJustificatifRepository $absenceJustificatifRepository,
        protected RattrapageRepository $rattrapageRepository
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $absences = $this->absenceRepository->findBy(['anneeUniversitaire' => 2]);
        foreach ($absences as $absence) {
            $absence->setSemestre($absence->getEtudiant()?->getSemestreActif());
        }

        $rattrapages = $this->rattrapageRepository->findBy(['anneeUniversitaire' => 2]);
        foreach ($rattrapages as $rattrapage) {
            $rattrapage->setSemestre($rattrapage->getEtudiant()?->getSemestre());
        }

        $absences = $this->absenceJustificatifRepository->findBy(['anneeUniversitaire' => 2]);
        foreach ($absences as $absence) {
            $absence->setSemestre($absence->getEtudiant()?->getSemestre());
        }

        $this->entityManager->flush();
        $io = new SymfonyStyle($input, $output);
        $io->success('Mise à jour avec succès.');

        return Command::SUCCESS;
    }
}
