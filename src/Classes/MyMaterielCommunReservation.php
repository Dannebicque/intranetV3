<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/MyMaterielCommunReservation.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
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
    public function __construct(private MaterielCommunRepository $materielCommunRepository, private MaterielCommunPretRepository $materielCommunPretRepository, private EntityManagerInterface $entityManager, private EventDispatcherInterface $eventDispatcher)
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
