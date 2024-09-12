<?php

/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Command/UpdateLdapCommand.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/09/2024 12:02
 */

namespace App\Command;

use App\Classes\LDAP\MyLdap;
use App\Entity\Etudiant;
use App\Repository\SemestreRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:update-ldap',
    description: 'Add a short description for your command',
)]
class UpdateLdapCommand extends Command
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private MyLdap                 $myLdap,
        private SemestreRepository     $semestreRepository
    )
    {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('semestre', InputArgument::REQUIRED, 'id semestre concerné');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $idSemestre = $input->getArgument('semestre');

        $semestre = $this->semestreRepository->find($idSemestre);

        if ($semestre === null) {
            $io->error('Semestre not found');
            return Command::FAILURE;
        }

        $etudiants = $semestre->getEtudiants();

        /** @var Etudiant $etudiant */
        foreach ($etudiants as $etudiant) {
            $data = $this->myLdap->getInfoEtudiant($etudiant->getNumEtudiant());
            if ($data !== null) {
                $etudiant->setUsername($data['login']);
                $etudiant->setMailUniv($data['mail']);
                $io->info('Mise à jour de l\'étudiant ' . $etudiant->getNumEtudiant() . ' : ' . $data['login'] . ' - ' . $data['mail']);
            } else {
                $io->error('Etudiant ' . $etudiant->getNumEtudiant() . ' non trouvé');
            }
        }

        $this->entityManager->flush();

        $io->success('LDAP updated');

        return Command::SUCCESS;
    }
}
