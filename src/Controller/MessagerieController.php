<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/MessagerieController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/10/2022 18:20
 */

namespace App\Controller;

use App\Classes\MyMessagerie;
use App\Classes\MyUpload;
use App\Entity\Etudiant;
use App\Entity\Message;
use App\Entity\MessageDestinataire;
use App\Entity\Personnel;
use App\Repository\MessageDestinataireEtudiantRepository;
use App\Repository\MessageDestinatairePersonnelRepository;
use App\Repository\MessageRepository;
use App\Repository\TypeGroupeRepository;
use Carbon\Carbon;
use function count;
use Doctrine\ORM\NonUniqueResultException;
use Exception;
use function is_array;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class MessagerieController.
 */
#[Route(path: '/messagerie')]
class MessagerieController extends BaseController
{
    #[Route(path: '/{param}', name: 'messagerie_index', requirements: ['param' => '\d+'])]
    public function index(string $param = ''): Response
    {
        return $this->render('messagerie/index.html.twig', [
            'filtre' => 'all',
            'param' => $param,
        ]);
    }

    #[Route(path: '/ecrire/{message}', name: 'messagerie_nouveau', options: ['expose' => true])]
    public function nouveauMessage(TypeGroupeRepository $typeGroupeRepository, ?Message $message = null): Response
    {
        return $this->render('messagerie/nouveauMessage.html.twig', [
            'type_groupes' => $typeGroupeRepository->findByDepartementSemestresActifs($this->getDepartement()),
            'message' => $message,
        ]);
    }

    /**
     * @throws NonUniqueResultException
     */
    #[Route(path: '/change-etat', name: 'messagerie_change_etat', options: ['expose' => true])]
    public function changeEtat(MessageDestinatairePersonnelRepository $messagePersonnelRepository, MessageDestinataireEtudiantRepository $messageEtudiantRepository, MessageRepository $messageRepository, Request $request): JsonResponse
    {
        $message = $messageRepository->find($request->request->get('message'));
        $etat = $request->request->get('etat');
        if (null !== $message) {
            if ($this->getUser() instanceof Etudiant) {
                $messaged = $messageEtudiantRepository->findDest($this->getUser(), $message);
            } elseif ($this->getUser() instanceof Personnel) {
                $messaged = $messagePersonnelRepository->findDest($this->getUser(), $message);
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
     * @return JsonResponse
     */
    #[Route(path: '/filtre/{filtre}', name: 'messagerie_filtre', options: ['expose' => true])]
    public function filtre(MessageRepository $messageRepository, MessageDestinatairePersonnelRepository $messagePersonnelRepository, MessageDestinataireEtudiantRepository $messageEtudiantRepository, $filtre): Response
    {
        if ('sent' === $filtre) {
            $messages = $messageRepository->findBy(['expediteur' => $this->getUser()], ['updated' => 'DESC']);
        } elseif ('draft' === $filtre) {
            $messages = $messageRepository->findBy(['expediteur' => $this->getUser(), 'etat' => 'D'],
                ['updated' => 'DESC']);
        } elseif ($this->getUser() instanceof Etudiant) {
            $messages = $messageEtudiantRepository->findLast($this->getUser(), 0, $filtre);
        } elseif ($this->getUser() instanceof Personnel) {
            $messages = $messagePersonnelRepository->findLast($this->getUser(), 0, $filtre);
        } else {
            $messages = null;
        }

        return $this->render('messagerie/listeMessages.html.twig', [
            'filtre' => $filtre,
            'messages' => $messages,
            'pagination' => ['depart' => 1, 'fin' => is_countable($messages) ? count($messages) : 0],
        ]);
    }

    #[Route(path: '/liste-messages/{filtre}/{page}', name: 'messagerie_liste_messages', options: ['expose' => true])]
    public function listeMessages(MessageRepository $messageRepository, MessageDestinatairePersonnelRepository $messagePersonnelRepository, MessageDestinataireEtudiantRepository $messageEtudiantRepository, string $filtre = 'all', int $page = 0): Response
    {
        if ('send' === $filtre) {
            $messages = $messageRepository->findBy(['expediteur' => $this->getUser(), 'etat' => 'E']);
        } elseif ('draft' === $filtre) {
            $messages = $messageRepository->findBy(['expediteur' => $this->getUser(), 'etat' => 'D']);
        } elseif ($this->getUser() instanceof Etudiant) {
            $messages = $messageEtudiantRepository->findLast($this->getUser(), 0, $filtre, $page);
        } elseif ($this->getUser() instanceof Personnel) {
            $messages = $messagePersonnelRepository->findLast($this->getUser(), 0, $filtre, $page);
        } else {
            $messages = null;
        }
        // feature: gérer la pagination?
        return $this->render('messagerie/listeMessages.html.twig', [
            'filtre' => $filtre,
            'messages' => $messages,
            'pagination' => ['depart' => 1, 'fin' => is_countable($messages) ? count($messages) : 0],
        ]);
    }

    /**
     * @throws TransportExceptionInterface
     * @throws Exception
     */
    #[Route(path: '/envoyer', name: 'messagerie_sent', options: ['expose' => true], methods: ['POST'])]
    public function sendMessage(MyUpload $myUpload, Request $request, MyMessagerie $messagerie): JsonResponse
    {
        $typeDestinataire = $request->request->get('messageDestinataireType');
        $destinataires = $this->getDestinataires($request, $typeDestinataire);
        $sujet = $request->request->get('messageSubject');
        $copie = $request->request->has('messageCopy') ? $request->request->all()['messageCopy'] : [];
        $message = $request->request->get('messageMessage');
        foreach ($request->files as $file) {
            if (null !== $file) {
                $fichier = $myUpload->upload($file, 'pj/');
                chmod($fichier, 775);
                $messagerie->addPj($fichier);
            }
        }
        $messagerie->setMessage($sujet, $message, $this->getUser());
        try {
            $messagerie->sendToDestinataires($this->checkArray($destinataires), $typeDestinataire,
                $this->getDepartement());
            if (is_countable($copie) && count($copie) > 0) {
                $messagerie->setCopie($copie, $this->getDepartement());
            }
        } catch (Exception $e) {
            $messagerie->sendSynthese();

            return new JsonResponse(['error' => $e->getCode()], Response::HTTP_BAD_REQUEST);
        }
        $messagerie->sendSynthese();

        return $this->json(['message' => $messagerie->getId()]);
    }

    #[Route(path: '/sauvegarder', name: 'messagerie_draft', options: ['expose' => true], methods: ['POST'])]
    public function messageSave(Request $request, MyMessagerie $messagerie): JsonResponse
    {
        $typeDestinataire = $request->request->get('typeDestinataire');
        $destinataires = $this->getDestinataires($request, $typeDestinataire);
        $sujet = $request->request->get('sujet');
        $copie = $request->request->get('copie');
        $message = $request->request->get('message');
        if ('' !== $sujet && '' !== $message) {
            $messagerie->saveDraft($sujet, $message, $this->getUser(), $destinataires, $typeDestinataire, $copie);

            return $this->json('ok');
        }

        return $this->json('message vide', Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    private function getDestinataires(Request $request, ?string $typeDestinataire): string|array|null
    {
        $req = $request->request->all();
        return match ($typeDestinataire) {
            's' => $req['messageToSemestre'],
            'g' => $req['messageToGroupe'],
            'e' => $req['messageToLibreEtudiant'],
            'p' => $req['messageToLibrePersonnel'],
            default => null,
        };
    }

    #[Route(path: '/message-envoye/{message}', name: 'messagerie_message_envoye', options: ['expose' => true])]
    public function messageSent(Message $message): Response
    {
        return $this->render('messagerie/message_envoye.html.twig', [
            'message' => $message,
        ]);
    }

    /**
     * @throws NonUniqueResultException
     */
    #[Route(path: '/{message}', name: 'messagerie_message', options: ['expose' => true])]
    public function message(MessageDestinatairePersonnelRepository $messagePersonnelRepository, MessageDestinataireEtudiantRepository $messageEtudiantRepository, Message $message): Response
    {
        if ($this->getUser() instanceof Etudiant) {
            $messaged = $messageEtudiantRepository->findDest($this->getUser(), $message);
        } elseif ($this->getUser() instanceof Personnel) {
            $messaged = $messagePersonnelRepository->findDest($this->getUser(), $message);
        } else {
            return $this->redirectToRoute('erreur_666');
        }
        if (MessageDestinataire::UNREAD === $messaged->getEtat()) {
            $messaged->setEtat(MessageDestinataire::READ);
            $messaged->setDateLu(Carbon::now());
            $this->entityManager->persist($messaged);
            $this->entityManager->flush();
        }

        return $this->render('messagerie/message.html.twig', [
            'message' => $message,
        ]);
    }

    private function checkArray($get): array
    {
        if (!is_array($get)) {
            return [$get];
        }

        return $get;
    }
}
