<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/TypeDestinataire/Exterieur.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/01/2023 11:04
 */

namespace App\Components\Questionnaire\TypeDestinataire;

use App\Classes\Mail\MailerFromTwig;
use App\Components\Questionnaire\DTO\ReponsesUser;
use App\Components\Questionnaire\Interfaces\QuestChoixInterface;
use App\Components\Questionnaire\Interfaces\TypeDestinataireInterface;
use App\Entity\QuestChoixExterieur;
use App\Event\QualiteRelanceEvent;
use App\Repository\QuestChoixExterieurRepository;
use App\Repository\QuestChoixRepository;
use App\Repository\QuestQuestionRepository;
use App\Repository\QuestReponseRepository;
use Carbon\Carbon;
use Doctrine\ORM\EntityManagerInterface;
use Ramsey\Uuid\Uuid;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class Exterieur extends AbstractTypeDestinataire implements TypeDestinataireInterface
{
    public const LABEL = 'exterieur';
    public const ENTITY = QuestChoixExterieur::class;

    public function __construct(
        QuestChoixRepository $questChoixRepository,
        QuestQuestionRepository $questQuestionRepository,
        QuestReponseRepository $questReponseRepository,
        protected MailerFromTwig $myMailer,
        EntityManagerInterface $entityManager,
        EventDispatcherInterface $eventDispatcher,
        protected QuestChoixExterieurRepository $questChoixExterieurRepository
    ) {
        parent::__construct($eventDispatcher, $entityManager, $questChoixRepository, $questQuestionRepository,
            $questReponseRepository);
    }

    public function getListe(): array
    {
        return $this->questChoixExterieurRepository->findBy(
            [
                'questionnaire' => $this->questionnaire,
            ]
        );
    }

    public function getListeDestinataire(): array
    {
        return $this->questChoixExterieurRepository->findByQuestionnaire($this->questionnaire);
    }

    public function getNbDestinatairesRepondus(): int
    {
        return $this->questChoixExterieurRepository->compteReponse($this->questionnaire);
    }

    public function getNbDestinataires(): int
    {
        return count($this->getListeDestinataire());
    }

    public function addExterieur(array $data): void
    {
        $choix = new QuestChoixExterieur();
        $choix->setQuestionnaire($this->questionnaire);
        $choix->setEmail($data['email']);
        $choix->setNom($data['nom']);
        $choix->setPrenom($data['prenom']);
        $choix->setCleQuestionnaire(Uuid::uuid4());

        $this->entityManager->persist($choix);
        $this->entityManager->flush();
    }

    public function addExterieurs(array $data): void
    {
        $lignes = preg_split("/\\r\\n|\\r|\\n/", $data['liste_csv']);

        foreach ($lignes as $ligne) {
            $t = explode(';', $ligne);
            $choix = new QuestChoixExterieur();
            $choix->setQuestionnaire($this->questionnaire);
            $choix->setEmail($t[2]);
            $choix->setNom($t[0]);
            $choix->setPrenom($t[1]);
            $choix->setCleQuestionnaire(Uuid::uuid4());
            $this->entityManager->persist($choix);
        }

        $this->entityManager->flush();
    }

    public function send(array $liste): void
    {
        $data = $this->questChoixExterieurRepository->findBy(
            [
                'questionnaire' => $this->questionnaire,
                'dateEnvoi' => null,
            ]
        );

        foreach ($data as $questChoixPersonnel) {
            $this->myMailer->initEmail();
            $this->myMailer->setTemplate('components/questionnaire/mails/envoi_questionnaire.html.twig',
                ['questionnaire' => $this->questionnaire, 'questChoix' => $questChoixPersonnel]);
            $this->myMailer->sendMessage([$questChoixPersonnel->getEmail()],
                '[Questionnaire Qualité] ' . $this->questionnaire->getLibelle());
            $questChoixPersonnel->setDateEnvoi(Carbon::now());
            $this->entityManager->flush();
        }
        $this->questionnaire->setEnvoye(true);
        $this->entityManager->flush();
    }

    public function sendRelance(): void
    {
        $data = $this->questChoixExterieurRepository->findBy(
            [
                'questionnaire' => $this->questionnaire,
                'dateTermine' => null,
            ]
        );
        //$mailsAEnvoyes=[];
        foreach ($data as $user) {
            $event = new QualiteRelanceEvent($this->questionnaire);
            $event->setUser($user);
            $this->eventDispatcher->dispatch($event, QualiteRelanceEvent::SEND_RELANCE);
            //$mailsAEnvoyes[] = $user;

        }

//        $event = new QualiteRelanceEvent($this->questionnaire);
//        $event->setUsers($mailsAEnvoyes);
//        $this->eventDispatcher->dispatch($event, QualiteRelanceEvent::SEND_SYNTHESE); Uniquement pour les étudiants
    }

    public function getChoixUser(string $uuid): ?QuestChoixInterface
    {
        $this->choixUser = $this->questChoixExterieurRepository->findOneBy([
            'cleQuestionnaire' => $uuid,
            'questionnaire' => $this->questionnaire,
        ]);

        return $this->choixUser;
    }

    public function sendMail(QuestChoixInterface $choixUser, MailerFromTwig $myMailer): void
    {
//        $myMailer->initEmail();
//        $myMailer->setTemplate('mails/qualite-complete-etudiant.html.twig',
//            ['questionnaire' => $this->questionnaire, 'user' => $choixUser]);
//        $myMailer->sendMessage($choixUser->getPersonnel()->getMails(),
//            'Accusé réception questionnaire '.$this->questionnaire->getLibelle());
//
//        $myMailer->initEmail();
//        $myMailer->setTemplate('mails/qualite-complete-responsable.html.twig',
//            ['questionnaire' => $this->questionnaire, 'etudiant' => $choixUser->getPersonnel()]);
//        $myMailer->sendMessage($choixUser->getPersonnel()->getDiplome()->getOptResponsableQualite()->getMails(),
//            'Accusé réception questionnaire '.$this->questionnaire->getLibelle());
    }

    public function sauvegardeReponse(QuestChoixInterface $choixUser, string $cleReponse, string $cleQuestion): void
    {
        $this->abstractSauvegardeReponse($choixUser, $cleReponse, $cleQuestion, 'exterieur');
    }

    public function sauvegardeReponseTexte(QuestChoixInterface $choixUser, string $cleQuestion, string $value): void
    {
        $this->abstractSauvegardeReponseTexte($choixUser, $cleQuestion, 'exterieur', $value);
    }

    public function getReponses(): ReponsesUser
    {
        return $this->abstractGetReponses('exterieur');
    }
}
