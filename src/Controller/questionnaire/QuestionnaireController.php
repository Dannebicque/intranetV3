<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/questionnaire/QuestionnaireController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/12/2022 15:26
 */

namespace App\Controller\questionnaire;

use App\Classes\Mail\MailerFromTwig;
use App\Components\Questionnaire\Adapter\QuestionnaireQualiteAdapter;
use App\Components\Questionnaire\Adapter\SectionQualiteEntityAdapter;
use App\Components\Questionnaire\DTO\AbstractQuestionnaire;
use App\Components\Questionnaire\Questionnaire;
use App\Components\Questionnaire\QuestionnaireRegistry;
use App\Components\Questionnaire\Section\AbstractSection;
use App\Entity\QuestionnaireEtudiant;
use App\Entity\QuestionnaireEtudiantReponse;
use App\Entity\QuestQuestionnaire;
use App\Repository\EtudiantRepository;
use App\Repository\QuestionnaireEtudiantReponseRepository;
use App\Repository\QuestionnaireEtudiantRepository;
use App\Repository\QuestionnaireQuestionRepository;
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

//    public function section(
//        PrevisionnelManager $previsionnelManager,
//        QuestionnaireEtudiantRepository $quizzEtudiantRepository,
//        QuestionnaireEtudiantReponseRepository $quizzEtudiantReponseRepository,
//        QuestionnaireQuestionnaireSection $questionnaireSection,
//        string $type,
//        Etudiant $etudiant,
//        int $onglet = 1,
//        bool $apercu = false
//    ): Response {
//        $quizzEtudiant = null;
//        switch ($type) {
//            case 'quizz':
//                $questionnaire = $questionnaireSection->getQuestionnaireQuizz()->getId();
//                $quizzEtudiant = $quizzEtudiantRepository->findOneBy([
//                    'questionnaireQuizz' => $questionnaire,
//                    'etudiant' => $etudiant->getId(),
//                ]);
//                break;
//            case 'qualite':
//                $questionnaire = $questionnaireSection->getQuestionnaireQualite()->getId();
//                $quizzEtudiant = $quizzEtudiantRepository->findOneBy([
//                    'questionnaireQualite' => $questionnaire,
//                    'etudiant' => $etudiant->getId(),
//                ]);
//                break;
//        }
//
//        if (null !== $quizzEtudiant) {
//            $reponses = $quizzEtudiantReponseRepository->findByQuizzEtudiant($quizzEtudiant);
//        } else {
//            $reponses = [];
//        }
//
//        return $this->render('appEtudiant/qualite/section.html.twig', [
//            'ordre' => $questionnaireSection->getOrdre(),
//            'config' => $questionnaireSection,
//            'section' => $questionnaireSection->getSection(),
//            'tPrevisionnel' => $previsionnelManager->getPrevisionnelAnneeArray($etudiant->getSemestre()->getAnnee(),
//                $etudiant->getAnneeUniversitaire()->getAnnee()),
//            'reponses' => $reponses,
//            'etudiant' => $etudiant,
//            'typeQuestionnaire' => $type,
//            'onglet' => $onglet,
//            'apercu' => $apercu,
//        ]);
//    }

    /*
     *
            MailerFromTwig $myMailer, QuestQuestionnaire $questQuestionnaire, string $uuid): Response
        {
            $typeDestinataire = $questionnaireRegistry->getTypeDestinataire($questQuestionnaire->getTypeDestinataire());
            $typeDestinataire->setQuestionnaire($questQuestionnaire);
            $choixUser = $typeDestinataire->getChoixUser($uuid);
     */
    /**
     * @throws NonUniqueResultException
     * @throws \JsonException
     */
    #[Route(path: '/api/ajax/reponse/{uuidQuestionnaire}/{uuid}', name: 'app_etudiant_qualite_ajax_reponse', options: ['expose' => true])]
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
    #[Route(path: '/api/ajax/reponse-txt/{questionnaire}/{typeQuestionnaire}', name: 'app_etudiant_qualite_ajax_reponse_txt', options: ['expose' => true])]
    public function sauvegardeReponseTxt(
        EtudiantRepository $etudiantRepository,
        QuestionnaireQuestionRepository $quizzQuestionRepository,
        QuestionnaireEtudiantReponseRepository $quizzEtudiantReponseRepository,
        QuestionnaireEtudiantRepository $quizzEtudiantRepository,
        Request $request,
        mixed $questionnaire,
        string $typeQuestionnaire
    ): JsonResponse {
        $quizzEtudiant = null;
        $donnees = JsonRequest::getFromRequest($request);
        $cleQuestion = $donnees['cleQuestion'];
        $etudiant = $etudiantRepository->find($donnees['etudiant']);
        if (null !== $etudiant) {
            switch ($typeQuestionnaire) {
                case 'quizz':
                    $questionnaire = $this->questionnaireQuizzRepository->find($questionnaire);
                    $quizzEtudiant = $quizzEtudiantRepository->findOneBy([
                        'questionnaireQuizz' => $questionnaire->getId(),
                        'etudiant' => $etudiant,
                    ]);
                    break;
                case 'qualite':
                    $questionnaire = $this->questionnaireQualiteRepository->find($questionnaire);
                    $quizzEtudiant = $quizzEtudiantRepository->findOneBy([
                        'questionnaireQualite' => $questionnaire->getId(),
                        'etudiant' => $etudiant,
                    ]);
                    break;
            }

            if (null === $quizzEtudiant) {
                $quizzEtudiant = new QuestionnaireEtudiant($etudiant, $questionnaire, $typeQuestionnaire);
                $this->entityManager->persist($quizzEtudiant);
            }
            $t = explode('_', (string) $cleQuestion);
            if ('autre' === $t[3]) {
                $cleQuestion = $t[0] . '_' . $t[1] . '_reponses_' . $t[4] . '_autre';

                // gesion du cas autre...
                // on met à jour la question de base. On ajoute la réponse écrite

                $exist = $quizzEtudiantReponseRepository->findOneBy([
                    'questionnaireEtudiant' => $quizzEtudiant->getId(),
                    'cleQuestion' => $cleQuestion,
                ]);
                if (null === $exist) {
                    $qr = new QuestionnaireEtudiantReponse($quizzEtudiant);
                    $qr->setCleQuestion($cleQuestion);
                    $qr->setCleReponse($cleQuestion);
                    $qr->setValeur($donnees['value']);
                    $this->entityManager->persist($qr);
                } else {
                    $exist->setValeur($donnees['value']);
                }

                $this->entityManager->flush();

                return $this->json(true, Response::HTTP_OK);
            }

            $question = $quizzQuestionRepository->find(mb_substr($t[3], 1, mb_strlen($t[0])));
            $exist = $quizzEtudiantReponseRepository->findExistQuestion($cleQuestion, $quizzEtudiant);

            if (null !== $question) {
                if (null === $exist) {
                    $qr = new QuestionnaireEtudiantReponse($quizzEtudiant);
                    $qr->setCleQuestion($cleQuestion);
                    $qr->setCleReponse(null);
                    $qr->setValeur($donnees['value']);
                    $this->entityManager->persist($qr);
                } else {
                    $exist->setValeur($donnees['value']);
                }
                $this->entityManager->flush();

                return $this->json(true, Response::HTTP_OK);
            }

            return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
