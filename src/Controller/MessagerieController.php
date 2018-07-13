<?php

namespace App\Controller;

use App\Entity\Etudiant;
use App\Entity\Message;
use App\Entity\Personnel;
use App\Repository\MessageDestinataireEtudiantRepository;
use App\Repository\MessageDestinatairePersonnelRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class MessagerieController
 * @package App\Controller
 * @Route("/{_locale}/messagerie",
 *     requirements={
 *         "_locale": "fr|en"})
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
     * @param MessageDestinatairePersonnelRepository $messagePersonnelRepository
     * @param MessageDestinataireEtudiantRepository  $messageEtudiantRepository
     * @param                                        $filtre
     *
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     * @Route("/filtre/{filtre}", name="messagerie_filtre", options={"expose":true})
     *
     */
    public function filtre(
        MessageDestinatairePersonnelRepository $messagePersonnelRepository,
        MessageDestinataireEtudiantRepository $messageEtudiantRepository,
        $filtre
    ): Response {
        if ($this->dataUserSession->getUser() instanceof Etudiant) {
            $messages = $messageEtudiantRepository->findLast($this->dataUserSession->getUser());
        } elseif ($this->dataUserSession->getUser() instanceof Personnel) {
            $messages = $messagePersonnelRepository->findLast($this->dataUserSession->getUser());
        } else {
            $messages = null;
        }

        return $this->render('messagerie/listeMessages.html.twig', [
            'messages' => $messages
        ]);
    }

    /**
     * @Route("/{message}", name="messagerie_message", options={"expose":true})
     * @param MessageDestinatairePersonnelRepository $messagePersonnelRepository
     * @param MessageDestinataireEtudiantRepository  $messageEtudiantRepository
     * @param Message                                $message
     *
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function message(
        MessageDestinatairePersonnelRepository $messagePersonnelRepository,
        MessageDestinataireEtudiantRepository $messageEtudiantRepository,
        Message $message
    ): Response {
        if ($this->dataUserSession->getUser() instanceof Etudiant) {
            $messaged = $messageEtudiantRepository->findDest($this->dataUserSession->getUser(), $message);
        } elseif ($this->dataUserSession->getUser() instanceof Personnel) {
            $messaged = $messagePersonnelRepository->findDest($this->dataUserSession->getUser(), $message);
        } else {
            return $this->redirectToRoute('erreur_666');
        }

        if ($messaged->getEtat() === 'U') {
            $messaged->setEtat('R');
            $messaged->setDateLu(new \DateTime('now'));
            $this->entityManager->persist($messaged);
            $this->entityManager->flush();

        }

        return $this->render('messagerie/message.html.twig', [
            'message' => $message
        ]);
    }

    /**
     * @Route("/liste-messages/{page}", name="messagerie_liste_messages", options={"expose":true})
     * @param MessageDestinatairePersonnelRepository $messagePersonnelRepository
     * @param MessageDestinataireEtudiantRepository  $messageEtudiantRepository
     * @param int                                    $page
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function listeMessages(
        MessageDestinatairePersonnelRepository $messagePersonnelRepository,
        MessageDestinataireEtudiantRepository $messageEtudiantRepository,
        $page = 0
    ): Response {
        if ($this->dataUserSession->getUser() instanceof Etudiant) {
            $messages = $messageEtudiantRepository->findLast($this->dataUserSession->getUser());
        } elseif ($this->dataUserSession->getUser() instanceof Personnel) {
            echo 'coucou';
            $messages = $messagePersonnelRepository->findLast($this->dataUserSession->getUser());
        } else {
            $messages = null;
        }


        return $this->render('messagerie/listeMessages.html.twig', [
            'messages' => $messages
        ]);
    }


}
