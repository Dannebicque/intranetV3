<?php

namespace App\Controller;

use App\Entity\Notification;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

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
    public function index()
    {
        return $this->render('notification/index.html.twig', [
            'notifications' => $this->getUser()->getNotifications(),
        ]);
    }

    /**
     * @Route("/marquer", name="notification_marquer_lu", options={"expose":true})
     */
    public function marquerCommeLu()
    {
        //vérifier si c'est le bon user ?
        $notifications = $this->getUser()->getNotifications(); //todo: améliorer en récupérant uniquement les nom lu.
        $em = $this->getDoctrine()->getManager();

        /** @var Notification $notif */
        foreach ($notifications as $notif) {
            $notif->setLu(true);
            $em->persist($notif);

        }
        $em->flush();

        return new Response('ok', 200);

    }
}
