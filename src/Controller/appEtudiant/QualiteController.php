<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appEtudiant/QualiteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

namespace App\Controller\appEtudiant;

use App\Classes\Mail\MailerFromTwig;
use App\Controller\BaseController;
use App\Entity\QuestionnaireQualite;
use App\Repository\PrevisionnelRepository;
use App\Repository\QuestionnaireEtudiantRepository;
use App\Repository\QuestionnaireQualiteRepository;
use DateTime;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class QualiteController.
 *
 * @Route("/application/etudiant/qualite")
 */
class QualiteController extends BaseController
{
    /**
     * @Route("/", name="application_etudiant_qualite_index")
     */
    public function index(
        QuestionnaireEtudiantRepository $questionnaireEtudiantRepository,
        QuestionnaireQualiteRepository $qualiteQuestionnaireRepository
    ): Response {
        if (null !== $this->dataUserSession->getUser()) {
            $questionnaires = $qualiteQuestionnaireRepository->findByDiplome($this->dataUserSession->getUser()->getDiplome());

            $reponsesEtudiant = $questionnaireEtudiantRepository->findByEtudiantArray($this->getConnectedUser());

            return $this->render('appEtudiant/qualite/index.html.twig', [
                'questionnaires'   => $questionnaires,
                'reponsesEtudiant' => $reponsesEtudiant,
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/complet/{uuid}", name="app_etudiant_qualite_questionnaire_complete")
     *
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     * @ParamConverter("qualiteQuestionnaire", options={"mapping": {"uuid": "uuid"}})
     */
    public function complet(
        QuestionnaireEtudiantRepository $quizzEtudiantRepository,
        MailerFromTwig $myMailer,
        QuestionnaireQualite $qualiteQuestionnaire
    ): Response {
        $quizzEtudiant = $quizzEtudiantRepository->findOneBy([
            'questionnaireQualite' => $qualiteQuestionnaire->getId(),
            'etudiant'             => $this->getConnectedUser()->getId(),
        ]);
        if (null !== $quizzEtudiant) {
            $quizzEtudiant->setDateTermine(new DateTime('now'));
            $quizzEtudiant->setTermine(true);
            $this->entityManager->flush();

            if (null !== $this->getConnectedUser() && null !== $this->getConnectedUser()->getDiplome() && null !== $this->getConnectedUser()->getDiplome()->getOptResponsableQualite()) {
                $myMailer->initEmail();
                $myMailer->setTemplate('mails/qualite-complete-etudiant.html.twig',
                    ['questionnaire' => $qualiteQuestionnaire, 'etudiant' => $this->getConnectedUser()]);
                $myMailer->sendMessage($this->getConnectedUser()->getMails(),
                    'Accusé réception questionnaire ' . $qualiteQuestionnaire->getLibelle());

                $myMailer->initEmail();
                $myMailer->setTemplate('mails/qualite-complete-responsable.html.twig',
                    ['questionnaire' => $qualiteQuestionnaire, 'etudiant' => $this->getConnectedUser()]);
                $myMailer->sendMessage($this->getConnectedUser()->getDiplome()->getOptResponsableQualite()->getMails(),
                    'Accusé réception questionnaire ' . $qualiteQuestionnaire->getLibelle());

                return $this->redirectToRoute('application_index', ['onglet' => 'qualite']);
            }
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/{questionnaire}", name="app_etudiant_qualite_questionnaire")
     */
    public function questionnaire(
        PrevisionnelRepository $previsionnelRepository,
        QuestionnaireQualite $questionnaire
    ): Response {
        return $this->render('appEtudiant/qualite/questionnaire.html.twig', [
            'questionnaireSections' => $questionnaire->getSections(),
            'questionnaire'         => $questionnaire,
            'etudiant'              => $this->getConnectedUser(),
            'typeQuestionnaire'     => 'qualite',
            'tPrevisionnel'         => $previsionnelRepository->findByDiplomeArray($this->dataUserSession->getUser()->getDiplome(),
                $this->dataUserSession->getAnneeUniversitaire()),
        ]);
    }
}
