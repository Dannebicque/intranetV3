<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/MessagerieController.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/30/19 2:35 PM
 *  * @lastUpdate 4/30/19 2:35 PM
 *  *
 *
 */

namespace App\Controller;

use App\Entity\Etudiant;
use App\Entity\Message;
use App\Entity\Personnel;
use App\MesClasses\MyMessagerie;
use App\Repository\MessageDestinataireEtudiantRepository;
use App\Repository\MessageDestinatairePersonnelRepository;
use App\Repository\MessageRepository;
use App\Repository\TypeGroupeRepository;
use DateTime;
use Doctrine\ORM\NonUniqueResultException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class MessagerieController
 * @package App\Controller
 * @Route("/messagerie")
 *
 */
class MessagerieController extends BaseController
{
    /**
     * @Route("/", name="messagerie_index")
     */
    public function index() :Response
    {
        return $this->render('messagerie/index.html.twig', [
        ]);
    }

    /**
     * @Route("/ecrire", name="messagerie_nouveau", options={"expose":true})
     */
    public function nouveauMessage(TypeGroupeRepository $typeGroupeRepository) :Response
    {
        return $this->render('messagerie/nouveauMessage.html.twig', [
            'type_groupes' => $typeGroupeRepository->findByDepartement($this->dataUserSession->getDepartement())
        ]);
    }

    /**
     * @Route("/starred", name="messagerie_starred", options={"expose":true})
     * @param MessageDestinatairePersonnelRepository $messagePersonnelRepository
     * @param MessageDestinataireEtudiantRepository  $messageEtudiantRepository
     * @param Request                                $request
     *
     * @return JsonResponse
     */
    public function starred(MessageDestinatairePersonnelRepository $messagePersonnelRepository,
        MessageDestinataireEtudiantRepository $messageEtudiantRepository, Request $request): JsonResponse
    {
        $message = $request->request->get('message');
        $valeur = $request->request->get('valeur') !== 'false';


        if ($this->getConnectedUser() instanceof Etudiant) {
            $messageDest = $messageEtudiantRepository->find($message);

        } elseif ($this->getConnectedUser() instanceof Personnel) {
            $messageDest = $messagePersonnelRepository->find($message);
        }

        if( $messageDest !== null) {
            $messageDest->setStarred($valeur);
            $this->entityManager->persist($messageDest);
            $this->entityManager->flush();

            return $this->json(true, Response::HTTP_OK);
        }
        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @param MessageRepository                      $messageRepository
     * @param MessageDestinatairePersonnelRepository $messagePersonnelRepository
     * @param MessageDestinataireEtudiantRepository  $messageEtudiantRepository
     * @param                                        $filtre
     *
     * @return JsonResponse
     * @Route("/filtre/{filtre}", name="messagerie_filtre", options={"expose"=true})
     */
    public function filtre(
        MessageRepository $messageRepository,
        MessageDestinatairePersonnelRepository $messagePersonnelRepository,
        MessageDestinataireEtudiantRepository $messageEtudiantRepository,
        $filtre
    ): Response {

        if ($filtre === 'sent'){
            $messages = $messageRepository->findBy(['expediteur' => $this->getConnectedUser(), 'etat' => 'E']);
        } elseif ($filtre === 'draft') {
            $messages = $messageRepository->findBy(['expediteur' => $this->getConnectedUser(), 'etat' => 'D']);
        } else if ($this->getConnectedUser() instanceof Etudiant) {
            $messages = $messageEtudiantRepository->findLast($this->getConnectedUser(), 0, $filtre);
        } elseif ($this->getConnectedUser() instanceof Personnel) {
            $messages = $messagePersonnelRepository->findLast($this->getConnectedUser(), 0, $filtre);
        } else {
            $messages = null;
        }

        return $this->render('messagerie/listeMessages.html.twig', [
            'filtre' => $filtre,
            'messages' => $messages
        ]);
    }

    /**
     * @Route("/liste-messages/{filtre}/{page}", name="messagerie_liste_messages", options={"expose":true})
     * @param MessageRepository                      $messageRepository
     * @param MessageDestinatairePersonnelRepository $messagePersonnelRepository
     * @param MessageDestinataireEtudiantRepository  $messageEtudiantRepository
     * @param string                                 $filtre
     * @param int                                    $page
     *
     * @return Response
     */
    public function listeMessages(
        MessageRepository $messageRepository,
        MessageDestinatairePersonnelRepository $messagePersonnelRepository,
        MessageDestinataireEtudiantRepository $messageEtudiantRepository,
        $filtre = 'all',
        $page = 0
    ): Response {
        if ($filtre === 'send'){
            $messages = $messageRepository->findBy(['expediteur' => $this->getConnectedUser(), 'etat' => 'E']);
        } elseif ($filtre === 'draft') {
            $messages = $messageRepository->findBy(['expediteur' => $this->getConnectedUser(), 'etat' => 'D']);
        } else if ($this->getConnectedUser() instanceof Etudiant) {
            $messages = $messageEtudiantRepository->findLast($this->getConnectedUser(), 0, $filtre);
        } elseif ($this->getConnectedUser() instanceof Personnel) {
            $messages = $messagePersonnelRepository->findLast($this->getConnectedUser(), 0, $filtre);
        } else {
            $messages = null;
        }

        return $this->render('messagerie/listeMessages.html.twig', [
            'filtre' => $filtre,
            'messages' => $messages
        ]);
    }

    /**
     * @Route("/envoyer", name="messagerie_sent", methods={"POST"}, options={"expose":true})
     * @param Request      $request
     * @param MyMessagerie $messagerie
     *
     * @return JsonResponse
     */
    public function messageSend(Request $request, MyMessagerie $messagerie): JsonResponse
    {
        //todo: mercure pour notification...
        $destinataires = explode(',', $request->request->get('destinataires'));
        $sujet = $request->request->get('sujet');
        $copie = explode(',', $request->request->get('copie'));
        $message = $request->request->get('message');

        $messagerie->setMessage($sujet, $message, $this->getConnectedUser());
        $messagerie->sendToDestinataires($destinataires, $this->dataUserSession->getDepartement());


        if ($copie !== null) {
            $messagerie->setCopie($copie);
        }

        $messagerie->sendSynthese();

        return $this->json('ok');
    }

    /**
     * @Route("/{message}", name="messagerie_message", options={"expose":true})
     * @param MessageDestinatairePersonnelRepository $messagePersonnelRepository
     * @param MessageDestinataireEtudiantRepository  $messageEtudiantRepository
     * @param Message                                $message
     *
     * @return Response
     * @throws NonUniqueResultException
     */
    public function message(
        MessageDestinatairePersonnelRepository $messagePersonnelRepository,
        MessageDestinataireEtudiantRepository $messageEtudiantRepository,
        Message $message
    ): Response {
        if ($this->getConnectedUser() instanceof Etudiant) {
            $messaged = $messageEtudiantRepository->findDest($this->getConnectedUser(), $message);
        } elseif ($this->getConnectedUser() instanceof Personnel) {
            $messaged = $messagePersonnelRepository->findDest($this->getConnectedUser(), $message);
        } else {
            return $this->redirectToRoute('erreur_666');
        }

        if ($messaged->getEtat() === 'U') {
            $messaged->setEtat('R');
            $messaged->setDateLu(new DateTime('now'));
            $this->entityManager->persist($messaged);
            $this->entityManager->flush();
        }

        return $this->render('messagerie/message.html.twig', [
            'message' => $message
        ]);
    }
}
