<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Command/UpdateVilleCommand.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 22/09/2020 16:05

namespace App\Command;

use App\Repository\CodeInseeRepository;
use App\Repository\DepartementRepository;
use App\Repository\EtudiantRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class UpdateVilleCommand extends Command
{
    protected static $defaultName = 'app:update-ville';
    private EtudiantRepository $etudiantRepository;
    private EntityManagerInterface $entityManager;
    private CodeInseeRepository $codeInseeRepository;

    /**
     * ClearOldNotificationCommand constructor.
     *
     * @param EntityManagerInterface $entityManager
     * @param EtudiantRepository     $etudiantRepository
     * @param CodeInseeRepository    $codeInseeRepository
     */
    public function __construct(
        EntityManagerInterface $entityManager,
        EtudiantRepository $etudiantRepository,
        CodeInseeRepository $codeInseeRepository
    ) {
        $this->etudiantRepository = $etudiantRepository;
        $this->codeInseeRepository = $codeInseeRepository;
        $this->entityManager = $entityManager;

        parent::__construct();
    }


    protected function configure()
    {
        $this->setDescription('Add a short description for your command');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $codes = $this->codeInseeRepository->findVilles();
        $codeVille = [];
        foreach ($codes as $code) {
            $codeVille[trim($code['code_insee'])] = $code['ville'];
        }


        $datas = $this->etudiantRepository->findAll();
        $i = 0;
        $io->writeln('depart');
        foreach ($datas as $data) {
            $adresse = $data->getAdresse();

            if ($adresse !== null && $adresse->getVille() !== null && preg_match("(\d{5})",
                    $adresse->getVille()) === 1) {
                if (array_key_exists(trim($adresse->getVille()), $codeVille)) {
                    $adresse->setVille($codeVille[trim($adresse->getVille())]);
                    $this->entityManager->persist($adresse);
                    $i++;
                }
            }
        }
        $this->entityManager->flush();

        $io->success(sprintf('%d Villes mises à jour.', ['%d' => $i]));

        return 0;
    }
}
