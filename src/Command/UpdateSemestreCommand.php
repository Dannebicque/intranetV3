<?php

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
    protected EntityManagerInterface $entityManager;
    protected AbsenceRepository $absenceRepository;
    protected AbsenceJustificatifRepository $absenceJustificatifRepository;
    protected RattrapageRepository $rattrapageRepository;

    public function __construct(
        EntityManagerInterface $entityManager,
        AbsenceRepository $absenceRepository,
        AbsenceJustificatifRepository $absenceJustificatifRepository,
        RattrapageRepository $rattrapageRepository
    ) {
        parent::__construct();
        $this->entityManager = $entityManager;
        $this->absenceRepository = $absenceRepository;
        $this->absenceJustificatifRepository = $absenceJustificatifRepository;
        $this->rattrapageRepository = $rattrapageRepository;
    }


    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $absences = $this->absenceRepository->findBy(['anneeUniversitaire' => 2]);
        foreach ($absences as $absence) {
            $absence->setSemestre($absence->getEtudiant()?->getSemestre());
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
