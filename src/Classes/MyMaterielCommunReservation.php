<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyMaterielCommunReservation.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 15/05/2021 09:11
 */

namespace App\Classes;

use App\Entity\MaterielCommunPret;
use App\Entity\Personnel;
use App\Event\MaterielCommunReservationEvent;
use App\Repository\MaterielCommunPretRepository;
use App\Repository\MaterielCommunRepository;
use App\Utils\Tools;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

class MyMaterielCommunReservation
{
    /**
     * MyMaterielCommun constructor.
     */
    public function __construct(private readonly MaterielCommunRepository $materielCommunRepository, private readonly MaterielCommunPretRepository $materielCommunPretRepository, private readonly EntityManagerInterface $entityManager, private readonly EventDispatcherInterface $eventDispatcher)
    {
    }

    /**
     * @throws Exception
     */
    public function addReservation(int|string $materiel, mixed $dateEmprunt, string $creneau, Personnel $personnel): bool
    {
        $mat = $this->materielCommunRepository->find(trim($materiel));

        if (null !== $mat) {
            $pret = new MaterielCommunPret();
            $pret->setPersonnel($personnel);
            $pret->setDateEmprunt(Tools::convertDateToObject($dateEmprunt))
                ->setMaterielCommun($mat)
                ->setCreneau($creneau);

            $this->entityManager->persist($pret);
            $this->entityManager->flush();
            $event = new MaterielCommunReservationEvent($pret);
            // On déclenche les events
            $this->eventDispatcher->dispatch($event, MaterielCommunReservationEvent::ADDED);

            return true;
        }

        return false;
    }

    public function supprReservation(int|string $id): bool
    {
        $pret = $this->materielCommunPretRepository->find(trim($id));
        if (null !== $pret) {
            $event = new MaterielCommunReservationEvent($pret);
            // On déclenche les events
            $this->eventDispatcher->dispatch($event, MaterielCommunReservationEvent::REMOVED);
            $this->entityManager->remove($pret);
            $this->entityManager->flush();

            return true;
        }

        return false;
    }
}
