<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/ToolBarController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Controller;

use App\Entity\Etudiant;
use App\Entity\MessageDestinataire;
use App\Entity\Personnel;
use App\Repository\AnneeUniversitaireRepository;
use App\Repository\MessageDestinataireEtudiantRepository;
use App\Repository\MessageDestinatairePersonnelRepository;
use App\Repository\NotificationRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class ToolBarController extends AbstractController
{
    private MessageDestinatairePersonnelRepository|MessageDestinataireEtudiantRepository $messagesRepository;

    public function __construct(private readonly NotificationRepository $notificationRepository, private readonly AnneeUniversitaireRepository $anneeUniversitaireRepository, private readonly MessageDestinataireEtudiantRepository $messageDestinataireEtudiantRepository, private readonly MessageDestinatairePersonnelRepository $messageDestinatairePersonnelRepository)
    {
    }

    /**
     * @throws NonUniqueResultException
     * @throws NoResultException
     */
    public function messages(): Response
    {
        if ($this->getUser() instanceof Etudiant) {
            $this->messagesRepository = $this->messageDestinataireEtudiantRepository;
        } elseif ($this->getUser() instanceof Personnel) {
            $this->messagesRepository = $this->messageDestinatairePersonnelRepository;
        }

        $messages = $this->messagesRepository->findLast($this->getUser(), 4);
        $nbUnread = $this->messagesRepository->getNbUnread($this->getUser());

        $nouveauxMessages = false;
        foreach ($messages as $message) {
            if (MessageDestinataire::UNREAD === $message->getEtat()) {
                $nouveauxMessages = true;
            }
        }

        return $this->render('tool_bar/messages.html.twig', [
            'messages' => $messages,
            'nbUnread' => $nbUnread,
            'nouveauxMessages' => $nouveauxMessages,
        ]);
    }

    public function notifications(): Response
    {
        $notifications = [];
        $newNotification = false;

        if (null !== $this->getUser()) {
            $notifications = $this->notificationRepository->findByUser($this->getUser());

            foreach ($notifications as $notification) {
                if (false === $notification->getLu()) {
                    $newNotification = true;
                }
            }
        }

        return $this->render('tool_bar/notifications.html.twig', [
            'notifications' => $notifications,
            'newNotification' => $newNotification,
        ]);
    }

    public function anneeUniversitairePermanent(): Response
    {
        return $this->render('tool_bar/anneeUniversitairePermanent.html.twig', [
            'annees_universitaire' => $this->anneeUniversitaireRepository->findAll(),
        ]);
    }
}
