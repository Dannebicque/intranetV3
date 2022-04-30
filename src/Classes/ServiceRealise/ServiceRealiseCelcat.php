<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/ServiceRealise/ServiceRealiseCelcat.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/05/2021 16:35
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\ServiceRealise;

use App\Classes\Matieres\TypeMatiereManager;
use App\DTO\EvenementEdt;
use App\Entity\CelcatEvent;
use App\Entity\Personnel;
use App\Exception\MatiereNotFoundException;
use App\Interfaces\UtilisateurInterface;
use App\Repository\CelcatEventsRepository;

class ServiceRealiseCelcat implements ServiceRealiseInterface
{
    public function __construct(
        private readonly CelcatEventsRepository $celcatEventsRepository,
        private readonly TypeMatiereManager $typeMatiereManager
    ) {
    }

    /**
     * @throws \App\Exception\MatiereNotFoundException
     */
    public function getServiceRealiseParMatiere(int $idMatiere, string $type): array
    {
        $matiere = $this->typeMatiereManager->getMatiere($idMatiere, $type);
        if (null === $matiere) {
            throw new MatiereNotFoundException();
        }

        $events = $this->celcatEventsRepository->findBy(['codeModule' => $matiere->codeElement],
            ['semaine' => 'ASC', 'jour' => 'ASC', 'debut' => 'ASC']);
        $tabEvent = [];
        foreach ($events as $event) {
            $tabEvent[] = $this->convertToEvenementEdt($event);
        }

        return $tabEvent;
    }

    public function getServiceRealiserParEnseignant(Personnel $personnel): array
    {
        $events = $this->celcatEventsRepository->findBy(['codePersonnel' => $personnel->getNumeroHarpege()],
            ['matiere' => 'ASC', 'semaine' => 'ASC', 'jour' => 'ASC', 'debut' => 'ASC']);
        $tabEvent = [];
        foreach ($events as $event) {
            $tabEvent[] = $this->convertToEvenementEdt($event);
        }

        return $tabEvent;
    }

    /**
     * @param CelcatEvent $event
     */
    public function convertToEvenementEdt($event): EvenementEdt
    {
        $ev = new EvenementEdt();
        $ev->groupe = $event->getLibGroupe();
        $ev->jour = $event->getJour();
//        $ev->date = $event->getDate();
//
//        $ev->heure = $event->getDebut();
        // todo: revoir.
        $ev->matiere = $event->getLibModule();
        $ev->type_cours = $event->getType();
        $ev->personnel = $event->getLibPersonnel();

        return $ev;
    }

    public function getServiceRealiseParPersonnelMatiere(UtilisateurInterface $personnel, int $idMatiere, string $type): array
    {
        // TODO: Implement getServiceRealiseParPersonnelMatiere() method.
        return [];
    }
}
