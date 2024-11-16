<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/MessagerieController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/11/2024 12:46
 */

namespace App\Controller;

use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\MyMessagerie;
use App\Classes\MyUpload;
use App\Entity\Etudiant;
use App\Entity\Message;
use App\Entity\MessageDestinataire;
use App\Entity\Personnel;
use App\Repository\MessageDestinataireEtudiantRepository;
use App\Repository\MessageDestinatairePersonnelRepository;
use App\Repository\MessageRepository;
use App\Repository\PersonnelRepository;
use App\Repository\TypeGroupeRepository;
use App\Utils\JsonRequest;
use Carbon\Carbon;
use Doctrine\ORM\NonUniqueResultException;
use Exception;
use JsonException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Routing\Attribute\Route;
use function count;
use function is_array;

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

    #[Route(path: '/ecrire/type-destinataire', name: 'messagerie_nouveau_type_destinataire')]
    public function typeDestinataire(
        PersonnelRepository  $personnelRepository,
        TypeMatiereManager   $typeMatiereManager,
        TypeGroupeRepository $typeGroupeRepository,
        MessageRepository    $messageRepository,
        Request              $request,
    ): Response
    {
        $typeDestinataire = $request->query->get('typeDestinataire');

        if ($request->query->has('message') && null !== $request->query->get('message')) {
            $message = $messageRepository->find($request->query->get('message'));
        } else {
            $message = null;
        }

        return match ($typeDestinataire) {
            Message::MESSAGE_TYPE_SEMESTRE => $this->render('messagerie/_typeDestinataireSemestre.html.twig', [
                'semestres' => $this->getDataUserSession()->getSemestresActifs(),
                'message' => $message
            ]),
            Message::MESSAGE_TYPE_GROUPE => $this->render('messagerie/_typeDestinataireGroupe.html.twig', [
                'type_groupes' => $typeGroupeRepository->findByDepartementSemestresActifs($this->getDepartement()),
                'message' => $message
            ]),
            Message::MESSAGE_TYPE_ETUDIANT => $this->render('messagerie/_typeDestinataireEtudiant.html.twig', [
                'semestres' => $this->getDataUserSession()->getSemestresActifs(),
                'message' => $message
            ]),
            Message::MESSAGE_TYPE_PERMANENT => $this->render('messagerie/_typeDestinatairePersonnel.html.twig', [
                'personnels' => $personnelRepository->findByDepartement($this->getDepartement()),
                'message' => $message
            ]),
            Message::MESSAGE_TYPE_MATIERE => $this->render('messagerie/_typeDestinataireMatiere.html.twig', [
                'matieres' => $typeMatiereManager->findByDepartement($this->getDepartement()),
                'message' => $message
            ]),
            default => $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR),
        };
    }

    #[Route(path: '/ecrire/{message}', name: 'messagerie_nouveau', options: ['expose' => true])]
    public function nouveauMessage(?Message $message = null): Response
    {
        if ($message !== null && $message->getExpediteur() !== $this->getUser()) {
            return $this->redirectToRoute('erreur_666');
        }

        return $this->render('messagerie/_nouveauMessage.html.twig', [
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

    #[Route(path: '/liste-messages', name: 'messagerie_filtre_messages', options: ['expose' => true])]
    public function listeMessages(
        Request           $request,
        MessageRepository $messageRepository, MessageDestinatairePersonnelRepository $messagePersonnelRepository, MessageDestinataireEtudiantRepository $messageEtudiantRepository): Response
    {
        $filtre = $request->query->get('filtre', 'all');
        $page = $request->query->get('page');

        $page = $page ?? 0;

        if ('sent' === $filtre) {
            $messages = $messageRepository->findBy(['expediteur' => $this->getUser(), 'etat' => 'E'], ['created' => 'DESC']);
        } elseif ('draft' === $filtre) {
            $messages = $messageRepository->findBy(['expediteur' => $this->getUser(), 'etat' => 'D'], ['created' => 'DESC']);
        } elseif ($this->getUser() instanceof Etudiant) {
            $messages = $messageEtudiantRepository->findLast($this->getUser(), 0, $filtre, $page);
        } elseif ($this->getUser() instanceof Personnel) {
            $messages = $messagePersonnelRepository->findLast($this->getUser(), 0, $filtre, $page);
        } else {
            $messages = null;
        }
        // feature: gérer la pagination?
        return $this->render('messagerie/_listeMessages.html.twig', [
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
        $this->denyAccessUnlessGranted('ROLE_PERMANENT');
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
            $messagerie->sendToDestinataires($this->checkArray($destinataires),
                $this->dataUserSession->getAnneePrevisionnel(),
                $typeDestinataire, $this->getDepartement());
            if (is_countable($copie) && count($copie) > 0) {
                $messagerie->setCopie($copie);
            }
        } catch (Exception $e) {
            $messagerie->sendSynthese();
            return new JsonResponse(['error' => $e->getCode()], Response::HTTP_BAD_REQUEST);
        }
        $messagerie->sendSynthese();

        return $this->json(['url' => $this->generateUrl('messagerie_message_envoye', ['message' => $messagerie->getId()])]);
    }

    #[Route(path: '/sauvegarder', name: 'messagerie_draft', options: ['expose' => true], methods: ['POST'])]
    public function messageSave(Request $request, MyMessagerie $messagerie): JsonResponse
    {
        $typeDestinataire = $request->request->has('messageDestinataireType') ? $request->request->get('messageDestinataireType') : null;
        $destinataires = $this->getDestinataires($request, $typeDestinataire);
        $sujet = $request->request->has('messageSubject') ? $request->request->get('messageSubject') : '';
        $copie = $request->request->has('messageCopy') ? $request->request->all()['messageCopy'] : null;
        $message = $request->request->has('messageMessage') ? $request->request->get('messageMessage') : '';
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
            Message::MESSAGE_TYPE_SEMESTRE => $req['messageToSemestre'],
            Message::MESSAGE_TYPE_GROUPE => $req['messageToGroupe'],
            Message::MESSAGE_TYPE_ETUDIANT => $req['messageToLibreEtudiant'],
            Message::MESSAGE_TYPE_PERMANENT => [$req['messageToPersonnel'] ?? [], $req['messageToLibrePersonnel'] ?? []],
            Message::MESSAGE_TYPE_MATIERE => $req['messageToMatiere'],
            default => null,
        };
    }

    #[Route(path: '/message-envoye/{message}', name: 'messagerie_message_envoye')]
    public function messageSent(Message $message): Response
    {
        if ($message->getExpediteur() !== $this->getUser()) {
            return $this->redirectToRoute('erreur_666');
        }

        return $this->render('messagerie/_message_envoye.html.twig', [
            'message' => $message,
        ]);
    }

    /**
     * @throws JsonException
     */
    #[Route(path: '/supprimer/all/', name: 'messagerie_delete_all', methods: ['DELETE'])]
    public function deleteAll(
        MessageRepository $messageRepository,
        Request           $request,
    ): Response
    {
        $messages = JsonRequest::getFromRequest($request);

        foreach ($messages as $idMessage) {
            $message = $messageRepository->find($idMessage);
            if ($message !== null && $message->getExpediteur() === $this->getUser()) {
                foreach ($message->getMessageDestinataires() as $destinataire) {
                    $this->entityManager->remove($destinataire);
                }

                foreach ($message->getMessagePieceJointes() as $pj) {
                    $file = $this->getParameter('kernel.project_dir') . '/public/uploads/pj/' . $pj->getFichier();
                    if (file_exists($file)) {
                        unlink($file);
                    }
                    $this->entityManager->remove($pj);
                }
                $this->entityManager->remove($message);
                $this->entityManager->flush();
            }
        }

        return new JsonResponse(['message' => 'ok']);
    }

    /**
     * @throws NonUniqueResultException
     */
    #[Route(path: '/lire-message/{message}', name: 'messagerie_message', options: ['expose' => true])]
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

        return $this->render('messagerie/_message.html.twig', [
            'message' => $message,
        ]);
    }

    private function checkArray(mixed $get): array
    {
        if (!is_array($get)) {
            return [$get];
        }

        return $get;
    }
}
