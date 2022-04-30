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
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

#[AsCommand(
    name: 'app:update-date-edt',
    description: 'Mets à jour les dates de l\'EDT MMI'
)]
// probablement plus nécessaire...
class UpdateDateEdtCommand extends Command
{
    /**
     * ClearOldNotificationCommand constructor.
     */
    public function __construct(
        private readonly CalendrierRepository $calendrierRepository,
        private readonly EdtPlanningRepository $edtPlanningRepository,
        private readonly EntityManagerInterface $entityManager
    ) {
        parent::__construct();
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
