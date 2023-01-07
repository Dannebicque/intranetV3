<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/questionnaire/QuestionnaireController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/01/2023 20:58
 */

namespace App\Controller\questionnaire;

use App\Classes\Mail\MailerFromTwig;
use App\Components\Questionnaire\Adapter\QuestionnaireQualiteAdapter;
use App\Components\Questionnaire\Adapter\SectionQualiteEntityAdapter;
use App\Components\Questionnaire\DTO\AbstractQuestionnaire;
use App\Components\Questionnaire\Questionnaire;
use App\Components\Questionnaire\QuestionnaireRegistry;
use App\Components\Questionnaire\Section\AbstractSection;
use App\Entity\QuestQuestionnaire;
use App\Utils\JsonRequest;
use Carbon\Carbon;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\NonUniqueResultException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class QualiteController.
 */
class QuestionnaireController extends AbstractController
{
    public function __construct(
        private readonly EntityManagerInterface $entityManager
    ) {
    }

    #[Route('/enquete-qualite/{uuidQuestionnaire}/{uuid}', name: 'enquete_questionnaire_qualite_index')]
    #[ParamConverter('questQuestionnaire', options: ['mapping' => ['uuidQuestionnaire' => 'uuid']])]
    public function afficheQuestionnaire(
        Request $request,
        Questionnaire $questionnaire,
        QuestionnaireRegistry $questionnaireRegistry,
        QuestQuestionnaire $questQuestionnaire,
        string $uuid
    ): Response {
        $typeDestinataire = $questionnaireRegistry->getTypeDestinataire($questQuestionnaire->getTypeDestinataire());
        $typeDestinataire->setQuestionnaire($questQuestionnaire);
        $choixUser = $typeDestinataire->getChoixUser($uuid);
        $reponses = $typeDestinataire->getReponses();

        $questionnaire->createQuestionnaire(QuestQuestionnaire::class,
            (new QuestionnaireQualiteAdapter($questQuestionnaire))->getQuestionnaire(),
            [
                'mode' => AbstractQuestionnaire::MODE_EDITION,
                'routeEnd' => 'enquete_questionnaire_qualite_complet',
                'route' => 'enquete_questionnaire_qualite_index',
                'params' => ['uuidQuestionnaire' => $questQuestionnaire->getUuidString(), 'uuid' => $uuid],
                'paramsEnd' => ['uuidQuestionnaire' => $questQuestionnaire->getUuidString(), 'uuid' => $uuid],
            ]);
        $questionnaire->AddSpecialSection(AbstractSection::INTRODUCTION);
        foreach ($questQuestionnaire->getQuestSections() as $section) {
            $sect = (new SectionQualiteEntityAdapter($section))->getSection(); // todo: tester si la section est visible
            $questionnaire->addSection($sect);
        }
        $questionnaire->setChoixUser($choixUser);
        // todo: passer l'étudiant aux réponses
        $questionnaire->AddSpecialSection(AbstractSection::END);

        if ($questionnaire->handleRequest($request)) {
            $questionnaire->setQuestionsForSection($reponses);

            return $questionnaire->wizardPage();
        }

        return $this->render('questionnaire/affiche_questionnaire.html.twig', [
            'questionnaire' => $questionnaire,
            'user' => $choixUser,
        ]);
    }

    #[Route('/enquete-qualite/complet/{uuidQuestionnaire}/{uuid}', name: 'enquete_questionnaire_qualite_complet')]
    #[ParamConverter('questQuestionnaire', options: ['mapping' => ['uuidQuestionnaire' => 'uuid']])]
    public function complet(
        QuestionnaireRegistry $questionnaireRegistry,
        MailerFromTwig $myMailer,
        QuestQuestionnaire $questQuestionnaire,
        string $uuid
    ): Response {
        $typeDestinataire = $questionnaireRegistry->getTypeDestinataire($questQuestionnaire->getTypeDestinataire());
        $typeDestinataire->setQuestionnaire($questQuestionnaire);
        $choixUser = $typeDestinataire->getChoixUser($uuid);

        if (null !== $choixUser) {
            $choixUser->setDateTermine(Carbon::now());
            $this->entityManager->flush();

            if (null !== $questQuestionnaire->getSemestre() && null !== $questQuestionnaire->getSemestre()->getDiplome()->getOptResponsableQualite()) {
                $typeDestinataire->sendMail($choixUser, $myMailer);

                return $this->redirectToRoute('security_login');
            }
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @throws NonUniqueResultException
     * @throws \JsonException
     */
    #[Route(path: '/enquete-qualite/api/ajax/reponse/{uuidQuestionnaire}/{uuid}', name: 'api_questionnaire_qualite_ajax_reponse', options: ['expose' => true])]
    #[ParamConverter('questQuestionnaire', options: ['mapping' => ['uuidQuestionnaire' => 'uuid']])]
    public function sauvegardeReponse(
        QuestionnaireRegistry $questionnaireRegistry,
        QuestQuestionnaire $questQuestionnaire,
        string $uuid,
        Request $request
    ): JsonResponse {
        $typeDestinataire = $questionnaireRegistry->getTypeDestinataire($questQuestionnaire->getTypeDestinataire());
        $typeDestinataire->setQuestionnaire($questQuestionnaire);
        $choixUser = $typeDestinataire->getChoixUser($uuid);

        $donnees = JsonRequest::getFromRequest($request);

        $cleReponse = $donnees['cleReponse'];
        $cleQuestion = $donnees['cleQuestion'];

        if (null !== $choixUser) {
            $typeDestinataire->sauvegardeReponse($choixUser, $cleReponse, $cleQuestion);

            return $this->json(true, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @throws NonUniqueResultException
     * @throws \JsonException
     * @throws \JsonException
     */
    #[Route(path: '/enquete-qualite/api/ajax/reponse-txt/{uuidQuestionnaire}/{uuid}', name: 'api_questionnaire_qualite_ajax_reponse_txt', options: ['expose' => true])]
    #[ParamConverter('questQuestionnaire', options: ['mapping' => ['uuidQuestionnaire' => 'uuid']])]
    public function sauvegardeReponseTxt(
        QuestionnaireRegistry $questionnaireRegistry,
        QuestQuestionnaire $questQuestionnaire,
        string $uuid,
        Request $request
    ): JsonResponse {
        $typeDestinataire = $questionnaireRegistry->getTypeDestinataire($questQuestionnaire->getTypeDestinataire());
        $typeDestinataire->setQuestionnaire($questQuestionnaire);
        $choixUser = $typeDestinataire->getChoixUser($uuid);
        $donnees = JsonRequest::getFromRequest($request);

        $cleQuestion = $donnees['cleQuestion'];
        $value = $donnees['value'];

        if (null !== $choixUser) {
            $typeDestinataire->sauvegardeReponseTexte($choixUser, $cleQuestion, $value);

            return $this->json(true, Response::HTTP_OK);
        }
        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

}
