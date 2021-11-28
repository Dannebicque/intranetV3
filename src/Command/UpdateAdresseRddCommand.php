<?php

namespace App\Command;

use App\Repository\EtudiantRepository;
use App\Repository\RddDiplomeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:update-adresse-rdd',
    description: 'Mise à jour des adresses des étudiants pour la RDD',
)]
class UpdateAdresseRddCommand extends Command
{
    private RddDiplomeRepository $diplomeRepository;
    private EntityManagerInterface $entityManager;
    private EtudiantRepository $etudiantRepository;

    public function __construct(
        RddDiplomeRepository $diplomeRepository,
        EntityManagerInterface $entityManager,
        EtudiantRepository $etudiantRepository
    ) {
        parent::__construct();
        $this->diplomeRepository = $diplomeRepository;
        $this->entityManager = $entityManager;
        $this->etudiantRepository = $etudiantRepository;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $rdds = $this->diplomeRepository->findAll();

        foreach ($rdds as $rdd) {
            $etudiant = $this->etudiantRepository->findOneBy(['numEtudiant' => $rdd->getNumEtudiant()]);
            if ($etudiant !== null && $etudiant->getAdresse() !== null) {
                $etudiant->getAdresse()->setAdresse1($rdd->getAdresse());
                $etudiant->getAdresse()->setAdresse2($rdd->getAdresseComplement());
                $etudiant->getAdresse()->setCodePostal($rdd->getCodePostal());
                $etudiant->getAdresse()->setVille($rdd->getVille());
                $etudiant->getAdresse()->setPays($rdd->getPays());
                $io->success(sprintf('Mise à jour de l\'adresse de l\'étudiant %s', $etudiant->getNumEtudiant()));
            }
        }

        $this->entityManager->flush();

        $io->success('Adresses mises à jour.');

        return Command::SUCCESS;
    }
}
