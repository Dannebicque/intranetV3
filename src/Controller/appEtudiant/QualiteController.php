<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appEtudiant/QualiteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/06/2021 21:20
 */

namespace App\Controller\appEtudiant;

use App\Classes\Mail\MailerFromTwig;
use App\Classes\Previsionnel\PrevisionnelManager;
use App\Components\Questionnaire\Adapter\QuestionnaireQualiteAdapter;
use App\Components\Questionnaire\Adapter\ReponsesEtudiantAdapter;
use App\Components\Questionnaire\Adapter\SectionQualiteEntityAdapter;
use App\Components\Questionnaire\Adapter\SectionQuizzEntityAdapter;
use App\Components\Questionnaire\DTO\AbstractQuestionnaire;
use App\Components\Questionnaire\DTO\ReponsesEtudiant;
use App\Components\Questionnaire\Questionnaire;
use App\Components\Questionnaire\Section\AbstractSection;
use App\Controller\BaseController;
use App\Entity\QuestionnaireQualite;
use App\Repository\QuestionnaireEtudiantRepository;
use App\Repository\QuestionnaireQualiteRepository;
use Carbon\Carbon;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
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
                'questionnaires' => $questionnaires,
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
            'etudiant' => $this->getConnectedUser()->getId(),
        ]);
        if (null !== $quizzEtudiant) {
            $quizzEtudiant->setDateTermine(Carbon::now());
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
     * @Route("/{questionnaireQualite}", name="app_etudiant_qualite_questionnaire")
     */
    public function questionnaire(
        ReponsesEtudiantAdapter $reponsesEtudiantAdapter,
        Request $request,
        Questionnaire $questionnaire,
        QuestionnaireQualite $questionnaireQualite
    ): Response {
        $reponses = new ReponsesEtudiant();//todo: créer dans Questionnaire selon le type de questionnaire...
        $questionnaire->createQuestionnaire(QuestionnaireQualite::class,
            (new QuestionnaireQualiteAdapter($questionnaireQualite))->getQuestionnaire(),
            [
                'mode' => AbstractQuestionnaire::MODE_EDITION,
                'routeEnd' => 'app_etudiant_qualite_questionnaire_complete',
                'route' => 'app_etudiant_qualite_questionnaire',
                'params' => ['questionnaireQualite' => $questionnaireQualite->getId()],
                'paramsEnd' => ['uuid' => $questionnaireQualite->getUuidString()],
            ]);
        $questionnaire->AddSpecialSection(AbstractSection::INTRODUCTION);
        foreach ($questionnaireQualite->getSections() as $section) {
            $sect = (new SectionQualiteEntityAdapter($section))->getSection();//todo: tester si la section est visible
            $questionnaire->addSection($sect);
            $reponses->merge($reponsesEtudiantAdapter->getReponsesEtudiant($sect, $this->getConnectedUser()->getId()));//todo: on pourrait faire que sur la section concernée ?
        }
        $questionnaire->setIdEtudiant($this->getConnectedUser()->getId());//todo: passer l'étudiant aux réponses
        $questionnaire->AddSpecialSection(AbstractSection::END);

        if ($questionnaire->handleRequest($request)) {
            $questionnaire->setQuestionsForSection($reponses);
            return $questionnaire->wizardPage();
        }

        return $this->render('appEtudiant/qualite/questionnaire.html.twig', [
            'questionnaire' => $questionnaire->createView(),
            'semestre' => $questionnaireQualite->getSemestre(),
        ]);
    }
}
