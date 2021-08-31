<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Command/UpdateDateEdtCommand.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/08/2021 21:43
 */

namespace App\Command;

use App\Repository\CalendrierRepository;
use App\Repository\EdtPlanningRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class UpdateDateEdtCommand extends Command
{
    protected static $defaultName = 'app:update-date-edt';

    private CalendrierRepository $calendrierRepository;

    private EdtPlanningRepository $edtPlanningRepository;

    private EntityManagerInterface $entityManager;

    /**
     * ClearOldNotificationCommand constructor.
     */
    public function __construct(
        CalendrierRepository $calendrierRepository,
        EdtPlanningRepository $edtPlanningRepository,
        EntityManagerInterface $entityManager
    ) {
        $this->calendrierRepository = $calendrierRepository;
        $this->edtPlanningRepository = $edtPlanningRepository;
        $this->entityManager = $entityManager;

        parent::__construct();
    }

    protected function configure()
    {
        $this->setDescription('Add a short description for your command');
    }

    /**
     * @throws Exception
     */
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $calendriers = $this->calendrierRepository->findBy(['anneeUniversitaire' => 4]);
        $t = [];
        foreach ($calendriers as $calendrier) {
            $t[$calendrier->getSemaineFormation()] = $calendrier->getDateLundi();
        }

        $edts = $this->edtPlanningRepository->findAll();

        foreach ($edts as $edt) {
            $edt->setDate($t[$edt->getSemaine()]->addDays($edt->getJour() - 1));
        }
        $this->entityManager->flush();

        return 0;
    }
}
