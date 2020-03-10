<?php

namespace App\Command;

use App\Repository\NotificationRepository;
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

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $count = $this->notificationRepository->deleteOldNotification();

        $io->success(sprintf('"%d" notifications supprimées.', $count));

        return 0;
    }
}
