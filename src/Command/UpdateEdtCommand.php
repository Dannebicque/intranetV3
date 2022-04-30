<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Command/UpdateEdtCommand.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:26
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Command;

use App\Classes\Celcat\MyCelcat;
use App\Repository\CalendrierRepository;
use App\Repository\DiplomeRepository;
use App\Repository\GroupeRepository;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:update-edt',
    description: 'Synchronisation de l\'emploi du temps avec Celcat',
)]
class UpdateEdtCommand extends Command
{
    public function __construct(protected DiplomeRepository $diplomeRepository, protected MyCelcat $myCelcat, private readonly CalendrierRepository $calendrierRepository, private readonly GroupeRepository $groupeRepository)
    {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $diplomes = $this->diplomeRepository->findAllWithCelcat();
        $calendriers = $this->calendrierRepository->findBy(['anneeUniversitaire' => 4]); // todo: en argument
        $tCalendrier = [];
        foreach ($calendriers as $calendrier) {
            $tCalendrier[$calendrier->getSemaineFormation()] = $calendrier->getDateLundi();
        }

        $groupes = $this->groupeRepository->findAll();
        $tgroupes = [];
        foreach ($groupes as $groupe) {
            $tgroupes[$groupe->getCodeApogee()] = $groupe->getTypeGroupe()?->getSemestre();
        }

        foreach ($diplomes as $diplome) {
            $io->text('Mise à jour du diplome '.$diplome->getLibelle());
            $this->myCelcat->updateEventsDiplome($diplome, $tCalendrier, $tgroupes);
        }

        $io->success('Emplois du temps synchronisés avec Celcat');

        return 0;
    }
}
