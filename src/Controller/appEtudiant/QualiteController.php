<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/appEtudiant/QualiteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 10/12/2022 10:25
 */

namespace App\Controller\appEtudiant;

use App\Classes\Mail\MailerFromTwig;
use App\Components\Questionnaire\Adapter\QuestionnaireQualiteAdapter;
use App\Components\Questionnaire\Adapter\ReponsesEtudiantAdapter;
use App\Components\Questionnaire\Adapter\SectionQualiteEntityAdapter;
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
 * @deprecated Plus nécessaire
 */
#[Route(path: '/application/etudiant/qualite')]
class QualiteController extends BaseController
{
    #[Route(path: '/', name: 'application_etudiant_qualite_index')]
    public function index(QuestionnaireEtudiantRepository $questionnaireEtudiantRepository, QuestionnaireQualiteRepository $qualiteQuestionnaireRepository): Response
    {
        if (null !== $this->getUser()) {
            $questionnaires = $qualiteQuestionnaireRepository->findByDiplome($this->getUser()->getDiplome());

            $reponsesEtudiant = $questionnaireEtudiantRepository->findByEtudiantArray($this->getUser());

            return $this->render('appEtudiant/qualite/index.html.twig', [
                'questionnaires' => $questionnaires,
                'reponsesEtudiant' => $reponsesEtudiant,
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    #[Route(path: '/complet/{uuid}', name: 'app_etudiant_qualite_questionnaire_complete')]
    #[ParamConverter('qualiteQuestionnaire', options: ['mapping' => ['uuid' => 'uuid']])]
    public function complet(QuestionnaireEtudiantRepository $quizzEtudiantRepository, MailerFromTwig $myMailer, QuestionnaireQualite $qualiteQuestionnaire): Response
    {
        $quizzEtudiant = $quizzEtudiantRepository->findOneBy([
            'questionnaireQualite' => $qualiteQuestionnaire->getId(),
            'etudiant' => $this->getUser()->getId(),
        ]);
        if (null !== $quizzEtudiant) {
            $quizzEtudiant->setDateTermine(Carbon::now());
            $quizzEtudiant->setTermine(true);
            $this->entityManager->flush();

            if (null !== $this->getUser()->getDiplome() && null !== $this->getUser()->getDiplome()->getOptResponsableQualite()) {
                $myMailer->initEmail();
                $myMailer->setTemplate('mails/qualite-complete-etudiant.html.twig',
                    ['questionnaire' => $qualiteQuestionnaire, 'etudiant' => $this->getUser()]);
                $myMailer->sendMessage($this->getUser()->getMails(),
                    'Accusé réception questionnaire '.$qualiteQuestionnaire->getLibelle());

                $myMailer->initEmail();
                $myMailer->setTemplate('mails/qualite-complete-responsable.html.twig',
                    ['questionnaire' => $qualiteQuestionnaire, 'etudiant' => $this->getUser()]);
                $myMailer->sendMessage($this->getUser()->getDiplome()->getOptResponsableQualite()->getMails(),
                    'Accusé réception questionnaire '.$qualiteQuestionnaire->getLibelle());

                return $this->redirectToRoute('application_index', ['onglet' => 'qualite']);
            }
        }

        return $this->redirectToRoute('erreur_666');
    }

    #[Route(path: '/{questionnaireQualite}', name: 'app_etudiant_qualite_questionnaire')]
    public function questionnaire(ReponsesEtudiantAdapter $reponsesEtudiantAdapter, Request $request, Questionnaire $questionnaire, QuestionnaireQualite $questionnaireQualite): Response
    {
        $reponses = new ReponsesEtudiant();
        // todo: créer dans Questionnaire selon le type de questionnaire...
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
            $sect = (new SectionQualiteEntityAdapter($section))->getSection(); // todo: tester si la section est visible
            $questionnaire->addSection($sect);
            $reponses->merge($reponsesEtudiantAdapter->getReponsesEtudiant($sect, $this->getUser()->getId())); // todo: on pourrait faire que sur la section concernée ?
        }
        $questionnaire->setIdEtudiant($this->getUser()->getId());
        // todo: passer l'étudiant aux réponses
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
