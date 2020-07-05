<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Command/UpdateUuidCommand.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Command;

use App\Repository\DepartementRepository;
use App\Repository\NotificationRepository;
use App\Repository\QualiteQuestionnaireRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Uid\UuidV4;

class UpdateUuidCommand extends Command
{
    protected static $defaultName = 'app:update-uuid';
    /** @var DepartementRepository */
    private $repository;

    /** @var EntityManagerInterface */
    private $entityManager;

    /**
     * ClearOldNotificationCommand constructor.
     *
     * @param DepartementRepository $repository
     */
    public function __construct(EntityManagerInterface $entityManager, DepartementRepository $repository)
    {
        $this->repository = $repository;
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

        $datas = $this->repository->findAll();
        foreach ($datas as $data) {
            $data->setUuid(new UuidV4());

        }
        $this->entityManager->flush();


        $io->success(sprintf('Uuid mis à jour.'));

        return 0;
    }
}
