<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/ServiceRealise/ServiceRealiseCelcat.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:10
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\ServiceRealise;

use App\DTO\EvenementEdt;
use App\Entity\CelcatEvent;
use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Repository\CelcatEventsRepository;

class ServiceRealiseCelcat implements ServiceRealiseInterface
{
    private CelcatEventsRepository $celcatEventsRepository;

    public function __construct(CelcatEventsRepository $celcatEventsRepository)
    {
        $this->celcatEventsRepository = $celcatEventsRepository;
    }

    public function getServiceRealiseParMatiere(Matiere $matiere): array
    {
        $events = $this->celcatEventsRepository->findBy(['codeModule' => $matiere->getCodeElement()],
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
        $ev->date = $event->getDate();

        $ev->heure = $event->getDebut();
        $ev->matiere = $event->getLibModule();
        $ev->type_cours = $event->getType();
        $ev->personnel = $event->getLibPersonnel();

        return $ev;
    }

    public function getServiceRealiseParPersonnelMatiere(Personnel $getConnectedUser, Matiere $getMatiere): array
    {
    }
}
