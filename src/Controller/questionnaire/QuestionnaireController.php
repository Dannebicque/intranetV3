<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/questionnaire/QuestionnaireController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/09/2022 09:28
 */

namespace App\Controller\questionnaire;

use App\Classes\Previsionnel\PrevisionnelManager;
use App\Components\Questionnaire\TypeQuestion\TypeEchelle;
use App\Components\Questionnaire\TypeQuestion\TypeOuiNon;
use App\Components\Questionnaire\TypeQuestion\TypeQcm;
use App\Components\Questionnaire\TypeQuestion\TypeQcu;
use App\Entity\Etudiant;
use App\Entity\QuestionnaireEtudiant;
use App\Entity\QuestionnaireEtudiantReponse;
use App\Entity\QuestionnaireQualite;
use App\Entity\QuestionnaireQuestion;
use App\Entity\QuestionnaireQuestionnaireSection;
use App\Entity\QuestionnaireQuizz;
use App\Repository\EtudiantRepository;
use App\Repository\QuestionnaireEtudiantReponseRepository;
use App\Repository\QuestionnaireEtudiantRepository;
use App\Repository\QuestionnaireQualiteRepository;
use App\Repository\QuestionnaireQuestionRepository;
use App\Repository\QuestionnaireQuizzRepository;
use App\Repository\QuestionnaireReponseRepository;
use App\Utils\JsonRequest;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\NonUniqueResultException;
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
    public function __construct(private readonly QuestionnaireQualiteRepository $questionnaireQualiteRepository, private readonly QuestionnaireQuizzRepository $questionnaireQuizzRepository, private readonly EntityManagerInterface $entityManager)
    {
    }

    public function section(
        PrevisionnelManager $previsionnelManager,
        QuestionnaireEtudiantRepository $quizzEtudiantRepository,
        QuestionnaireEtudiantReponseRepository $quizzEtudiantReponseRepository,
        QuestionnaireQuestionnaireSection $questionnaireSection,
        string $type,
        Etudiant $etudiant,
        int $onglet = 1,
        bool $apercu = false
    ): Response {
        $quizzEtudiant = null;
        switch ($type) {
            case 'quizz':
                $questionnaire = $questionnaireSection->getQuestionnaireQuizz()->getId();
                $quizzEtudiant = $quizzEtudiantRepository->findOneBy([
                    'questionnaireQuizz' => $questionnaire,
                    'etudiant' => $etudiant->getId(),
                ]);
                break;
            case 'qualite':
                $questionnaire = $questionnaireSection->getQuestionnaireQualite()->getId();
                $quizzEtudiant = $quizzEtudiantRepository->findOneBy([
                    'questionnaireQualite' => $questionnaire,
                    'etudiant' => $etudiant->getId(),
                ]);
                break;
        }

        if (null !== $quizzEtudiant) {
            $reponses = $quizzEtudiantReponseRepository->findByQuizzEtudiant($quizzEtudiant);
        } else {
            $reponses = [];
        }

        return $this->render('appEtudiant/qualite/section.html.twig', [
            'ordre' => $questionnaireSection->getOrdre(),
            'config' => $questionnaireSection,
            'section' => $questionnaireSection->getSection(),
            'tPrevisionnel' => $previsionnelManager->getPrevisionnelAnneeArray($etudiant->getSemestre()->getAnnee(),
                $etudiant->getAnneeUniversitaire()->getAnnee()),
            'reponses' => $reponses,
            'etudiant' => $etudiant,
            'typeQuestionnaire' => $type,
            'onglet' => $onglet,
            'apercu' => $apercu,
        ]);
    }

    /**
     * @throws NonUniqueResultException
     * @throws \JsonException
     */
    #[Route(path: '/api/ajax/reponse/{questionnaire}/{typeQuestionnaire}', name: 'app_etudiant_qualite_ajax_reponse', options: ['expose' => true])]
    public function sauvegardeReponse(EtudiantRepository $etudiantRepository, QuestionnaireQuestionRepository $quizzQuestionRepository, QuestionnaireReponseRepository $quizzReponseRepository, QuestionnaireEtudiantRepository $quizzEtudiantRepository, QuestionnaireEtudiantReponseRepository $quizzEtudiantReponseRepository, Request $request, mixed $questionnaire, string $typeQuestionnaire): JsonResponse
    {
        $quizzEtudiant = null;
        $donnees = JsonRequest::getFromRequest($request);
        $cleReponse = $donnees['cleReponse'];
        $cleQuestion = $donnees['cleQuestion'];
        $etudiant = $etudiantRepository->find($donnees['etudiant']);
        if (null !== $etudiant) {
            switch ($typeQuestionnaire) {
                case 'quizz':
                    $questionnaire = $this->questionnaireQuizzRepository->find($questionnaire);
                    $quizzEtudiant = $quizzEtudiantRepository->findOneBy([
                        'questionnaireQuizz' => $questionnaire->getId(),
                        'etudiant' => $etudiant->getId(),
                    ]);
                    break;
                case 'qualite':
                    $questionnaire = $this->questionnaireQualiteRepository->find($questionnaire);
                    $quizzEtudiant = $quizzEtudiantRepository->findOneBy([
                        'questionnaireQualite' => $questionnaire->getId(),
                        'etudiant' => $etudiant->getId(),
                    ]);
                    break;
            }

            if (null === $quizzEtudiant) {
                $quizzEtudiant = new QuestionnaireEtudiant($etudiant, $questionnaire, $typeQuestionnaire);
                $this->entityManager->persist($quizzEtudiant);
                $this->entityManager->flush();
            }

            /** @var QuestionnaireEtudiantReponse $exist */
            $exist = $quizzEtudiantReponseRepository->findExistQuestion($cleQuestion, $quizzEtudiant);

            $t = explode('_', (string) $cleReponse);
            $question = $quizzQuestionRepository->find(mb_substr($t[3], 1, mb_strlen($t[0])));
            if (str_starts_with($t[4], 'c')) {
                $reponse = $quizzReponseRepository->find($t[5]);
            } else {
                $reponse = $quizzReponseRepository->find($t[4]);
            }

            if (null !== $question && null !== $reponse) {
                if (null === $exist) {
                    $qr = new QuestionnaireEtudiantReponse($quizzEtudiant);
                    $qr->setCleQuestion($cleQuestion);

                    if (QuestionnaireQuestion::QUESTION_TYPE_QCM === $question->getType()) {
                        $qr->setCleReponse(json_encode([$cleReponse], JSON_THROW_ON_ERROR));
                        $qr->setValeur(json_encode([$reponse->getValeur()], JSON_THROW_ON_ERROR));
                    } else {
                        $qr->setCleReponse($cleReponse);
                        $qr->setValeur($reponse->getValeur());
                    }

                    $this->entityManager->persist($qr);
                } elseif (TypeQcu::class === $question->getType() || TypeEchelle::class === $question->getType() || TypeOuiNon::class === $question->getType()) {
                    $exist->setCleReponse($cleReponse);
                    $exist->setValeur($reponse->getValeur());
                } elseif (TypeQcm::class === $question->getType()) {
                    // si c'est un QCM, on fait un tableau de réponse.
                    $cleReponses = json_decode($exist->getCleReponse(), false, 512, JSON_THROW_ON_ERROR);
                    $valeurs = json_decode($exist->getValeur(), false, 512, JSON_THROW_ON_ERROR);
                    $idCle = array_search($cleReponse, $cleReponses, true);
                    $idValeur = array_search($reponse->getValeur(), $valeurs, true);
                    if (false !== $idCle && false !== $idValeur) {
                        // réponse déjà présente on supprime
                        unset($cleReponses[$idCle], $valeurs[$idValeur]);
                        $cleReponses = array_values($cleReponses);
                        $valeurs = array_values($valeurs);
                    } else {
                        $cleReponses[] = $cleReponse;
                        $valeurs[] = $reponse->getValeur();
                    }

                    $exist->setCleReponse(json_encode($cleReponses, JSON_THROW_ON_ERROR));
                    $exist->setValeur(json_encode($valeurs, JSON_THROW_ON_ERROR));
                }
                $this->entityManager->flush();

                return $this->json(true, Response::HTTP_OK);
            }

            return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @throws NonUniqueResultException
     * @throws \JsonException
     * @throws \JsonException
     */
    #[Route(path: '/api/ajax/reponse-txt/{questionnaire}/{typeQuestionnaire}', name: 'app_etudiant_qualite_ajax_reponse_txt', options: ['expose' => true])]
    public function sauvegardeReponseTxt(EtudiantRepository $etudiantRepository, QuestionnaireQuestionRepository $quizzQuestionRepository, QuestionnaireEtudiantReponseRepository $quizzEtudiantReponseRepository, QuestionnaireEtudiantRepository $quizzEtudiantRepository, Request $request, mixed $questionnaire, string $typeQuestionnaire): JsonResponse
    {
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
                $cleQuestion = $t[0].'_'.$t[1].'_reponses_'.$t[4].'_autre';

                // gesion du cas autre...
                // on met à jour la question de base. On ajoute la réponse écrite

                $exist = $quizzEtudiantReponseRepository->findOneBy(['questionnaireEtudiant' => $quizzEtudiant->getId(), 'cleQuestion' => $cleQuestion]);
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
