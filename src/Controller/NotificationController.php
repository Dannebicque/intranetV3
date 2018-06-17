<?php

namespace App\Controller;

use App\Entity\Notification;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class MessagerieController
 * @package App\Controller
 * @Route("/{_locale}/notification",
 *     requirements={
 *         "_locale": "fr|en"})
 *
 */
class NotificationController extends BaseController
{
    // todo: gérer les notifications anciennes... Suppression après xx jours => tache cron ?
    // todo: gérer le "lu" lorsque l'on clique sur un lien
    // todo: comment détailler plus que le type ? des "sous-classes" ? En sauvegardant le type d'objet et un id ?


    /**
     * @Route("/", name="notification_index")
     */
    public function index(): Response
    {
        return $this->render('notification/index.html.twig', [
            'notifications' => $this->getUser()->getNotifications(),
        ]);
    }

    /**
     * @Route("/marquer", name="notification_marquer_lu", options={"expose":true})
     * @param EntityManagerInterface $entityManager
     *
     * @return Response
     */
    public function marquerCommeLu(EntityManagerInterface $entityManager): Response
    {
        //vérifier si c'est le bon user ?
        $notifications = $this->getUser()->getNotifications(); //todo: améliorer en récupérant uniquement les nom lu.

        /** @var Notification $notif */
        foreach ($notifications as $notif) {
            $notif->setLu(true);
            $entityManager->persist($notif);

        }
        $entityManager->flush();

        return new Response('ok', 200);

    }
}
