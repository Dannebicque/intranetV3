<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyMaterielCommunReservation.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/12/2020 14:31

namespace App\Classes;


use App\Entity\MaterielCommunPret;
use App\Entity\Personnel;
use App\Event\MaterielCommunReservationEvent;
use App\Repository\MaterielCommunPretRepository;
use App\Repository\MaterielCommunRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

class MyMaterielCommunReservation
{

    private MaterielCommunRepository $materielCommunRepository;
    private MaterielCommunPretRepository $materielCommunPretRepository;
    private EntityManagerInterface $entityManager;
    private EventDispatcherInterface $eventDispatcher;

    /**
     * MyMaterielCommun constructor.
     *
     * @param MaterielCommunRepository     $materielCommunRepository
     * @param MaterielCommunPretRepository $materielCommunPretRepository
     * @param EntityManagerInterface       $entityManager
     * @param EventDispatcherInterface     $eventDispatcher
     */
    public function __construct(
        MaterielCommunRepository $materielCommunRepository,
        MaterielCommunPretRepository $materielCommunPretRepository,
        EntityManagerInterface $entityManager,
        EventDispatcherInterface $eventDispatcher
    ) {
        $this->materielCommunRepository = $materielCommunRepository;
        $this->materielCommunPretRepository = $materielCommunPretRepository;
        $this->entityManager = $entityManager;
        $this->eventDispatcher = $eventDispatcher;
    }

    /**
     * @param           $materiel
     * @param           $dateEmprunt
     * @param           $creneau
     * @param Personnel $personnel
     *
     * @return bool
     * @throws Exception
     */
    public function addReservation($materiel, $dateEmprunt, $creneau, Personnel $personnel)
    {
        $mat = $this->materielCommunRepository->find(trim($materiel));

        if ($mat !== null) {
            $pret = new MaterielCommunPret();
            $pret->setPersonnel($personnel);
            $pret->setDateEmprunt(Tools::convertDateToObject($dateEmprunt))
                ->setMaterielCommun($mat)
                ->setCreneau($creneau);

            $this->entityManager->persist($pret);
            $this->entityManager->flush();
            $event = new MaterielCommunReservationEvent($pret);
            //On déclenche les events
            $this->eventDispatcher->dispatch($event, MaterielCommunReservationEvent::ADDED);

            return true;
        }

        return false;
    }

    public function supprReservation(int $id)
    {
        $pret = $this->materielCommunPretRepository->find(trim($id));
        if ($pret !== null) {
            $event = new MaterielCommunReservationEvent($pret);
            //On déclenche les events
            $this->eventDispatcher->dispatch($event, MaterielCommunReservationEvent::REMOVED);
            $this->entityManager->remove($pret);
            $this->entityManager->flush();

            return true;
        }

        return false;
    }
}
