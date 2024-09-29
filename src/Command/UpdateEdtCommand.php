<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Command/UpdateEdtCommand.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/09/2024 16:23
 */

namespace App\Command;

use App\Classes\Celcat\MyCelcat;
use App\Entity\Diplome;
use App\Repository\AnneeUniversitaireRepository;
use App\Repository\DiplomeRepository;
use DateTime;
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
    public function __construct(
        protected AnneeUniversitaireRepository $anneeUniversitaireRepository,
        protected DiplomeRepository $diplomeRepository,
        protected MyCelcat $myCelcat
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $diplomes = $this->diplomeRepository->findAllWithCelcat();
        $annee = $this->anneeUniversitaireRepository->findActive();

        /** @var Diplome $diplome */
        foreach ($diplomes as $diplome) {
            $tDiplomes[$diplome->getCodeCelcatDepartement()] = $diplome->getParent() ?? $diplome;
        }

        if (null !== $annee) {
            $this->myCelcat->getData($annee);
            /** @var Diplome $diplome */
            foreach ($tDiplomes as $codeCelcat => $diplome) {
                $date = new DateTime();
                $io->text($date->format('d/m/Y H:i:s').' | Mise à jour du diplome '.$diplome->getLibelle());
                $this->myCelcat->addEvents($codeCelcat, $diplome, $annee);
            }

            $io->success('Emplois du temps synchronisés avec Celcat');

            return Command::SUCCESS;
        }

        $io->error('Aucune année universitaire trouvée');

        return Command::FAILURE;
    }
}
