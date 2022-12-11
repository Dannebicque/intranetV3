<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/TypeDestinataire/Exterieur.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/12/2022 15:26
 */

namespace App\Components\Questionnaire\TypeDestinataire;

use App\Classes\Mail\MailerFromTwig;
use App\Components\Questionnaire\DTO\ReponsesUser;
use App\Components\Questionnaire\Interfaces\QuestChoixInterface;
use App\Components\Questionnaire\Interfaces\TypeDestinataireInterface;
use App\Entity\QuestChoixExterieur;
use App\Repository\QuestChoixExterieurRepository;
use App\Repository\QuestChoixRepository;
use App\Repository\QuestQuestionRepository;
use App\Repository\QuestReponseRepository;
use Doctrine\ORM\EntityManagerInterface;

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
        protected QuestChoixExterieurRepository $questChoixExterieurRepository
    ) {
        parent::__construct($entityManager, $questChoixRepository, $questQuestionRepository, $questReponseRepository);
    }

    public function getListe(): array
    {
//        if (null !== $this->questionnaire->getDepartement()) {
//            return $this->personnelRepository->findByDepartement($this->questionnaire->getDepartement());
//        }
//
//        return $this->personnelRepository->findAll();
    }

    public function getListeDestinataire(): array
    {
        return $this->questChoixExterieurRepository->findByQuestionnaire($this->questionnaire);
    }

    public function send(array $liste): void
    {
        foreach ($liste as $pers) {
//
//                $questChoixPersonnel = new QuestChoixExterieur();
//                $questChoixPersonnel->setQuestionnaire($this->questionnaire);
//                $questChoixPersonnel->setCleQuestionnaire(Uuid::uuid4());
//                $this->myMailer->initEmail();
//                $this->myMailer->setTemplate('components/questionnaire/mails/envoi_questionnaire.html.twig',
//                    ['questionnaire' => $this->questionnaire, 'questChoix' => $questChoixPersonnel]);
//                $this->myMailer->sendMessage($personnel->getMails(),
//                    '[Questionnaire Qualité] '.$this->questionnaire->getLibelle());
//                $questChoixPersonnel->setDateEnvoi(new \DateTime());
//                $this->entityManager->persist($questChoixPersonnel);
//                $this->entityManager->flush();

        }
        $this->questionnaire->setEnvoye(true);
        $this->entityManager->flush();
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
        $this->abstractSauvegardeReponse($choixUser, $cleReponse, $cleQuestion, 'personnel');
    }

    public function getReponses(): ReponsesUser
    {
        return $this->abstractGetReponses('personnel');
    }
}
