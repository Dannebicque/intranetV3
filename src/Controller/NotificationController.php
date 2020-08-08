<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/NotificationController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/08/2020 08:36

namespace App\Controller;

use App\Entity\Notification;
use App\Repository\NotificationRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class MessagerieController
 * @package App\Controller
 * @Route("/notification")
 *
 */
class NotificationController extends BaseController
{
    // feature: comment détailler plus que le type ? des "sous-classes" ? En sauvegardant le type d'objet et un id ?


    /**
     * @Route("/", name="notification_index")
     * @param NotificationRepository $notificationRepository
     *
     * @return Response
     */
    public function index(NotificationRepository $notificationRepository): Response
    {
        return $this->render('notification/index.html.twig', [
            'notifications' => $notificationRepository->findByUser($this->getConnectedUser()),
        ]);
    }

    /**
     * @param Notification $notification
     * @Route("/lire/{uuid}", name="notification_lire")
     * @ParamConverter("notification", options={"mapping": {"uuid": "uuid"}})
     *
     * @return RedirectResponse
     */
    public function lire(Notification $notification): RedirectResponse
    {
        $notification->setLu(true);
        $this->entityManager->flush();

        return $this->redirect($notification->getUrl());
    }

    /**
     * @Route("/marquer", name="notification_marquer_lu", options={"expose":true})
     *
     * @param NotificationRepository $notificationRepository
     *
     * @return Response
     */
    public function marquerCommeLu(NotificationRepository $notificationRepository): Response
    {
        $notifications = $notificationRepository->findNonLuByUser($this->getConnectedUser());

        /** @var Notification $notif */
        foreach ($notifications as $notif) {
            $notif->setLu(true);
            $this->entityManager->persist($notif);
        }
        $this->entityManager->flush();

        return new Response('ok', 200);
    }
}
