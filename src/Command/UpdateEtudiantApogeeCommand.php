<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Command/UpdateEtudiantApogeeCommand.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 10:37
 */

namespace App\Command;

use App\Classes\Apogee\ApogeeEtudiant;
use App\Repository\AnneeRepository;
use App\Repository\BacRepository;
use App\Repository\EtudiantRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class UpdateEtudiantApogeeCommand extends Command
{
    protected static $defaultName = 'app:update-etudiant-apogee';
    private AnneeRepository $anneeRepository;
    private EtudiantRepository $etudiantRepository;
    private ApogeeEtudiant $apogeeEtudiant;
    private BacRepository $bacRepository;
    private EntityManagerInterface $entityManager;

    public function __construct(
        AnneeRepository $anneeRepository,
        EtudiantRepository $etudiantRepository,
        ApogeeEtudiant $apogeeEtudiant,
        BacRepository $bacRepository,
        EntityManagerInterface $entityManager
    ) {
        $this->anneeRepository = $anneeRepository;
        $this->etudiantRepository = $etudiantRepository;
        $this->apogeeEtudiant = $apogeeEtudiant;
        $this->bacRepository = $bacRepository;
        $this->entityManager = $entityManager;

        parent::__construct();
    }

    protected function configure()
    {
        $this->setDescription('Mise à jour de la date de naissance, du lieu de naissance, et du bac')
            ->addArgument('annee', InputArgument::REQUIRED, 'Code Etape annee');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $codeAnnee = $input->getArgument('annee');
        $annee = $this->anneeRepository->findOneBy(['codeEtape' => $codeAnnee]);

        if (null !== $annee) {
            $stid = $this->apogeeEtudiant->getEtudiantsAnnee($annee);
            while ($row = $stid->fetch()) {
                $dataApogee = $this->apogeeEtudiant->transformeApogeeToArray($row,
                    $this->bacRepository->getApogeeArray());
                $numEtudiant = $dataApogee['etudiant']['setNumEtudiant'];
                $etudiant = $this->etudiantRepository->findOneBy(['numEtudiant' => $numEtudiant]);
                if (null !== $etudiant) {
                    $etudiant->setDateNaissance($dataApogee['etudiant']['setDateNaissance']);
                    $etudiant->setBac($dataApogee['etudiant']['setBac']);
                    $etudiant->setLieuNaissance($dataApogee['etudiant']['setLieuNaissance']);
                    $output->writeln('Mise à jour de ' . $etudiant->getDisplayPr());
                }
            }

            $this->entityManager->flush();
        }

        return 0;
    }
}
