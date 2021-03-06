<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/MessagerieController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/02/2021 11:06
 */

namespace App\Controller;

use App\Classes\MyMessagerie;
use App\Classes\MyUpload;
use App\Entity\Etudiant;
use App\Entity\Message;
use App\Entity\Personnel;
use App\Repository\MessageDestinataireEtudiantRepository;
use App\Repository\MessageDestinatairePersonnelRepository;
use App\Repository\MessageRepository;
use App\Repository\TypeGroupeRepository;
use DateTime;
use Doctrine\ORM\NonUniqueResultException;
use Exception;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class MessagerieController.
 *
 * @Route("/messagerie")
 */
class MessagerieController extends BaseController
{
    /**
     * @Route("/{param}", name="messagerie_index", requirements={"param"="\d+"})
     *
     * @param string $param
     */
    public function index($param = ''): Response
    {
        return $this->render('messagerie/index.html.twig', [
            'filtre' => 'all',
            'param' => $param,
        ]);
    }

    /**
     * @Route("/ecrire/{message}", name="messagerie_nouveau", options={"expose":true})
     */
    public function nouveauMessage(TypeGroupeRepository $typeGroupeRepository, ?Message $message = null): Response
    {
        return $this->render('messagerie/nouveauMessage.html.twig', [
            'type_groupes' => $typeGroupeRepository->findByDepartementSemestresActifs($this->dataUserSession->getDepartement()),
            'message' => $message,
        ]);
    }

    /**
     * @Route("/change-etat", name="messagerie_change_etat", options={"expose":true})
     *
     * @throws NonUniqueResultException
     */
    public function changeEtat(
        MessageDestinatairePersonnelRepository $messagePersonnelRepository,
        MessageDestinataireEtudiantRepository $messageEtudiantRepository,
        MessageRepository $messageRepository,
        Request $request
    ): JsonResponse {
        $message = $messageRepository->find($request->request->get('message'));
        $etat = $request->request->get('etat');

        if (null !== $message) {
            if ($this->getConnectedUser() instanceof Etudiant) {
                $messaged = $messageEtudiantRepository->findDest($this->getConnectedUser(), $message);
            } elseif ($this->getConnectedUser() instanceof Personnel) {
                $messaged = $messagePersonnelRepository->findDest($this->getConnectedUser(), $message);
            } else {
                return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
            }

            if (null !== $messaged) {
                $messaged->setEtat($etat);
                $this->entityManager->persist($messaged);
                $this->entityManager->flush();

                return $this->json(true, Response::HTTP_OK);
            }
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @param $filtre
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
        if ('sent' === $filtre) {
            $messages = $messageRepository->findBy(['expediteur' => $this->getConnectedUser()], ['updated' => 'DESC']);
        } elseif ('draft' === $filtre) {
            $messages = $messageRepository->findBy(['expediteur' => $this->getConnectedUser(), 'etat' => 'D'],
                ['updated' => 'DESC']);
        } elseif ($this->getConnectedUser() instanceof Etudiant) {
            $messages = $messageEtudiantRepository->findLast($this->getConnectedUser(), 0, $filtre);
        } elseif ($this->getConnectedUser() instanceof Personnel) {
            $messages = $messagePersonnelRepository->findLast($this->getConnectedUser(), 0, $filtre);
        } else {
            $messages = null;
        }

        return $this->render('messagerie/listeMessages.html.twig', [
            'filtre' => $filtre,
            'messages' => $messages,
            'pagination' => ['depart' => 1, 'fin' => \count($messages)],
        ]);
    }

    /**
     * @Route("/liste-messages/{filtre}/{page}", name="messagerie_liste_messages", options={"expose":true})
     *
     * @param string $filtre
     * @param int    $page
     */
    public function listeMessages(
        MessageRepository $messageRepository,
        MessageDestinatairePersonnelRepository $messagePersonnelRepository,
        MessageDestinataireEtudiantRepository $messageEtudiantRepository,
        $filtre = 'all',
        $page = 0
    ): Response {
        if ('send' === $filtre) {
            $messages = $messageRepository->findBy(['expediteur' => $this->getConnectedUser(), 'etat' => 'E']);
        } elseif ('draft' === $filtre) {
            $messages = $messageRepository->findBy(['expediteur' => $this->getConnectedUser(), 'etat' => 'D']);
        } elseif ($this->getConnectedUser() instanceof Etudiant) {
            $messages = $messageEtudiantRepository->findLast($this->getConnectedUser(), 0, $filtre, $page);
        } elseif ($this->getConnectedUser() instanceof Personnel) {
            $messages = $messagePersonnelRepository->findLast($this->getConnectedUser(), 0, $filtre, $page);
        } else {
            $messages = null;
        }

        //feature: gérer la pagination?
        return $this->render('messagerie/listeMessages.html.twig', [
            'filtre' => $filtre,
            'messages' => $messages,
            'pagination' => ['depart' => 1, 'fin' => \count($messages)],
        ]);
    }

    /**
     * @Route("/envoyer", name="messagerie_sent", methods={"POST"}, options={"expose":true})
     *
     * @throws TransportExceptionInterface
     * @throws Exception
     */
    public function sendMessage(MyUpload $myUpload, Request $request, MyMessagerie $messagerie): JsonResponse
    {
        $typeDestinataire = $request->request->get('messageDestinataireType');
        $destinataires = $this->getDestinataires($typeDestinataire, $request);

        $sujet = $request->request->get('messageSubject');
        $copie = $request->request->get('messageCopy');
        $message = $request->request->get('messageMessage');

        foreach ($request->files as $file) {
            if (null !== $file) {
                $fichier = $myUpload->upload($file, 'pj/');
                chmod($fichier, 775);
                $messagerie->addPj($fichier);
            }
        }

        $messagerie->setMessage($sujet, $message, $this->getConnectedUser());
        $messagerie->sendToDestinataires($this->checkArray($destinataires), $typeDestinataire, $this->getDepartement());

        if (is_countable($copie) && \count($copie) > 0) {
            $messagerie->setCopie($copie, $this->getDepartement());
        }

        $messagerie->sendSynthese();

        return $this->json(['message' => $messagerie->getId()]);
    }

    /**
     * @Route("/sauvegarder", name="messagerie_draft", methods={"POST"}, options={"expose":true})
     */
    public function messageSave(Request $request, MyMessagerie $messagerie): JsonResponse
    {
        $typeDestinataire = $request->request->get('typeDestinataire');
        $destinataires = $this->getDestinataires($typeDestinataire, $request);

        $sujet = $request->request->get('sujet');
        $copie = $request->request->get('copie');
        $message = $request->request->get('message');

        $messagerie->saveDraft($sujet, $message, $this->getConnectedUser(), $copie, $destinataires, $typeDestinataire);

        return $this->json('ok');
    }

    private function getDestinataires($typeDestinataire, Request $request)
    {
        switch ($typeDestinataire) {
            case 's':
                return $request->request->get('messageToSemestre');
            case 'g':
                return $request->request->get('messageToGroupe');
            case 'e':
                return $request->request->get('messageToLibreEtudiant');
            case 'p':
                return $request->request->get('messageToLibrePersonnel');
        }

        return null;
    }

    /**
     * @Route("/message-envoye/{message}", name="messagerie_message_envoye", options={"expose":true})
     */
    public function messageSent(
        Message $message
    ): Response {
        return $this->render('messagerie/message_envoye.html.twig', [
            'message' => $message,
        ]);
    }

    /**
     * @Route("/{message}", name="messagerie_message", options={"expose":true})
     *
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

        if ('U' === $messaged->getEtat()) {
            $messaged->setEtat('R');
            $messaged->setDateLu(new DateTime('now'));
            $this->entityManager->persist($messaged);
            $this->entityManager->flush();
        }

        return $this->render('messagerie/message.html.twig', [
            'message' => $message,
        ]);
    }

    private function checkArray($get)
    {
        if (!\is_array($get)) {
            return [$get];
        }

        return $get;
    }
}
