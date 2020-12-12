<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Command/ClearOldNotificationCommand.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/12/2020 14:31

namespace App\Command;

use App\Repository\NotificationRepository;
use Exception;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class ClearOldNotificationCommand extends Command
{
    protected static $defaultName = 'app:clear-old-notification';
    /** @var NotificationRepository */
    private $notificationRepository;

    /**
     * ClearOldNotificationCommand constructor.
     *
     * @param NotificationRepository $notificationRepository
     */
    public function __construct(NotificationRepository $notificationRepository)
    {
        $this->notificationRepository = $notificationRepository;

        parent::__construct();
    }


    protected function configure()
    {
        $this->setDescription('Add a short description for your command');
    }

    /**
     * @param InputInterface  $input
     * @param OutputInterface $output
     *
     * @return int
     * @throws Exception
     */
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $count = $this->notificationRepository->deleteOldNotification();

        $io->success(sprintf('"%d" notifications supprimées.', $count));

        return 0;
    }
}
