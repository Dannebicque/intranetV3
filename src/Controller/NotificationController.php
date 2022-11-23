<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/NotificationController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/11/2022 07:51
 */

namespace App\Controller;

use App\Entity\Constantes;
use App\Entity\Notification;
use App\Repository\NotificationRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class MessagerieController.
 */
#[Route(path: '/notification', name:'notification_')]
class NotificationController extends BaseController
{
    #[Route(path: '/', name: 'index')]
    public function index(NotificationRepository $notificationRepository): Response
    {
        return $this->render('notification/index.html.twig', [
            'notifications' => $notificationRepository->findByUser($this->getUser()),
        ]);
    }

    #[Route(path: '/lire/{uuid}', name: 'lire')]
    #[ParamConverter('notification', options: ['mapping' => ['uuid' => 'uuid']])]
    public function lire(Notification $notification): RedirectResponse
    {
        $notification->setLu(true);
        $this->entityManager->flush();

        return $this->redirect($notification->getUrl());
    }

    #[Route(path: '/marquer', name: 'marquer_lu', options: ['expose' => true])]
    public function marquerCommeLu(NotificationRepository $notificationRepository): Response
    {
        $notifications = $notificationRepository->findNonLuByUser($this->getUser());
        /** @var Notification $notif */
        foreach ($notifications as $notif) {
            $notif->setLu(true);
            $this->entityManager->persist($notif);
        }
        $this->entityManager->flush();

        return new Response('ok', Response::HTTP_OK);
    }

    #[Route('/tout', name: 'delete_all', methods: ['DELETE'])]
    public function deleteAll(
        NotificationRepository $notificationRepository,
        Request $request): Response
    {
        if ($this->isCsrfTokenValid('delete', $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $allNotifications = $notificationRepository->findByUser($this->getUser());
            foreach ($allNotifications as $notification) {
                $this->entityManager->remove($notification);
            }
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'notification.delete.success.flash'
            );

            return $this->json(true, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'notification.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route('/{id}', name: 'delete', methods: ['DELETE'])]
    public function delete(Request $request, Notification $notification): Response
    {
        $id = $notification->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($notification);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'notification.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'notification.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }


}
