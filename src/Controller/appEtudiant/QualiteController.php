<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appEtudiant/QualiteController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 23/11/2020 17:55

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use App\Entity\QuestionnaireQualite;
use App\Entity\QuestionnaireQuestionnaireSection;
use App\Entity\QuestionnaireEtudiant;
use App\Entity\QuestionnaireEtudiantReponse;
use App\Entity\QuestionnaireQuestion;
use App\Classes\Mail\MailerFromTwig;
use App\Repository\PrevisionnelRepository;
use App\Repository\QuestionnaireQualiteRepository;
use App\Repository\QuestionnaireEtudiantReponseRepository;
use App\Repository\QuestionnaireEtudiantRepository;
use App\Repository\QuestionnaireQuestionRepository;
use App\Repository\QuestionnaireReponseRepository;
use DateTime;
use Doctrine\ORM\NonUniqueResultException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class QualiteController
 * @package App\Controller
 * @Route("/application/etudiant/qualite")
 */
class QualiteController extends BaseController
{
    /**
     * @Route("/", name="application_etudiant_qualite_index")
     * @param QuestionnaireQualiteRepository $qualiteQuestionnaireRepository
     *
     * @return Response
     */
    public function index(QuestionnaireQualiteRepository $qualiteQuestionnaireRepository): Response
    {
        if ($this->dataUserSession->getUser() !== null) {
            $questionnaires = $qualiteQuestionnaireRepository->findByDiplome($this->dataUserSession->getUser()->getDiplome());

            return $this->render('appEtudiant/qualite/index.html.twig', [
                'questionnaires' => $questionnaires
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/complet/{uuid}", name="app_etudiant_qualite_questionnaire_complete")
     * @param QuestionnaireEtudiantRepository $quizzEtudiantRepository
     * @param MailerFromTwig                  $myMailer
     * @param QuestionnaireQualite            $qualiteQuestionnaire
     *
     * @return Response
     */
    public function complet(
        QuestionnaireEtudiantRepository $quizzEtudiantRepository,
        MailerFromTwig $myMailer,
        QuestionnaireQualite $qualiteQuestionnaire
    ): Response {
        $quizzEtudiant = $quizzEtudiantRepository->findOneBy([
            'questionnaire' => $qualiteQuestionnaire->getId(),
            'etudiant'      => $this->getConnectedUser()->getId()
        ]);
        if ($quizzEtudiant !== null) {
            $quizzEtudiant->setDateTermine(new DateTime('now'));
            $quizzEtudiant->setTermine(true);
            $this->entityManager->flush();

            if ($this->getConnectedUser() !== null && $this->getConnectedUser()->getDiplome() !== null && $this->getConnectedUser()->getDiplome()->getOptResponsableQualite() !== null) {
                $myMailer->setTemplate('mails/qualite-complete-etudiant.html.twig',
                    ['questionnaire' => $qualiteQuestionnaire, 'etudiant' => $this->getConnectedUser()]);
                $myMailer->sendMessage($this->getConnectedUser()->getMails(),
                    'Accusé réception questionnaire ' . $qualiteQuestionnaire->getLibelle());

                $myMailer->initEmail();
                $myMailer->setTemplate('mails/qualite-complete-responsable.html.twig',
                    ['questionnaire' => $qualiteQuestionnaire, 'etudiant' => $this->getConnectedUser()]);
                $myMailer->sendMessage($this->getConnectedUser()->getDiplome()->getOptResponsableQualite()->getMails(),
                    'Accusé réception questionnaire ' . $qualiteQuestionnaire->getLibelle());
                return $this->redirectToRoute('application_index',['onglet' => 'qualite']);
            }
        }
        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/ajax/reponse/{questionnaire}", name="app_etudiant_qualite_ajax_reponse", options={"expose"=true})
     * @param QuestionnaireQuestionRepository        $quizzQuestionRepository
     * @param QuestionnaireReponseRepository         $quizzReponseRepository
     * @param QuestionnaireEtudiantRepository        $quizzEtudiantRepository
     * @param QuestionnaireEtudiantReponseRepository $quizzEtudiantReponseRepository
     * @param Request                                $request
     * @param QuestionnaireQualite                   $questionnaire
     *
     * @return JsonResponse
     * @throws NonUniqueResultException
     */
    public function sauvegardeReponse(
        QuestionnaireQuestionRepository $quizzQuestionRepository,
        QuestionnaireReponseRepository $quizzReponseRepository,
        QuestionnaireEtudiantRepository $quizzEtudiantRepository,
        QuestionnaireEtudiantReponseRepository $quizzEtudiantReponseRepository,
        Request $request,
        QuestionnaireQualite $questionnaire
    ): JsonResponse {
        $cleReponse = $request->request->get('cleReponse');
        $cleQuestion = $request->request->get('cleQuestion');


        $quizzEtudiant = $quizzEtudiantRepository->findOneBy([
            'questionnaire'     => $questionnaire->getId(),
                'etudiant'      => $this->getConnectedUser()->getId()
            ]);
            if ($quizzEtudiant === null) {
                $quizzEtudiant = new QuestionnaireEtudiant($this->getConnectedUser(), $questionnaire);
                $this->entityManager->persist($quizzEtudiant);
            }


        /** @var QuestionnaireEtudiantReponse $exist */
        $exist = $quizzEtudiantReponseRepository->findExistQuestion($cleQuestion, $quizzEtudiant->getId());

        $t = explode('_', $cleReponse);
        $question = $quizzQuestionRepository->find(substr($t[3], 1, strlen($t[0])));
        if (strpos($t[4], 'c') === 0) {
            $reponse = $quizzReponseRepository->find($t[5]);
        } else {
            $reponse = $quizzReponseRepository->find($t[4]);
        }

        if ($question !== null && $reponse !== null) {
            if ($exist === null) {
                $qr = new QuestionnaireEtudiantReponse($quizzEtudiant);
                $qr->setCleQuestion($cleQuestion);

                if ($question->getType() === QuestionnaireQuestion::QUESTION_TYPE_QCM) {
                    $qr->setCleReponse(json_encode([$cleReponse]));
                    $qr->setValeur(json_encode([$reponse->getValeur()]));
                } else {
                    $qr->setCleReponse($cleReponse);
                    $qr->setValeur($reponse->getValeur());
                }

                $this->entityManager->persist($qr);
            } else if ($question->getType() === QuestionnaireQuestion::QUESTION_TYPE_QCU || $question->getType() === QuestionnaireQuestion::QUESTION_TYPE_ECHELLE || $question->getType() === QuestionnaireQuestion::QUESTION_TYPE_YESNO) {
                $exist->setCleReponse($cleReponse);
                $exist->setValeur($reponse->getValeur());
            } elseif ($question->getType() === QuestionnaireQuestion::QUESTION_TYPE_QCM) {
                //si c'est un QCM, on fait un tableau de réponse.
                $cleReponses = json_decode($exist->getCleReponse(), false);
                $valeurs = json_decode($exist->getValeur(), false);
                $idCle = array_search($cleReponse, $cleReponses, true);
                $idValeur = array_search($reponse->getValeur(), $valeurs, true);
                if ($idCle !== false && $idValeur !== false) {
                    //réponse déjà présente on supprime
                    unset($cleReponses[$idCle], $valeurs[$idValeur]);
                    $cleReponses = array_values($cleReponses);
                    $valeurs = array_values($valeurs);
                } else {
                    $cleReponses[] = $cleReponse;
                    $valeurs[] = $reponse->getValeur();
                }

                $exist->setCleReponse(json_encode($cleReponses));
                $exist->setValeur(json_encode($valeurs));
            }
            $this->entityManager->flush();

            return $this->json(true, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/ajax/reponse-txt/{questionnaire}", name="app_etudiant_qualite_ajax_reponse_txt",
     *                                             options={"expose"=true})
     * @param QuestionnaireQuestionRepository        $quizzQuestionRepository
     * @param QuestionnaireEtudiantReponseRepository $quizzEtudiantReponseRepository
     * @param QuestionnaireEtudiantRepository        $quizzEtudiantRepository
     * @param Request                                $request
     * @param QuestionnaireQualite                   $questionnaire
     *
     * @return JsonResponse
     * @throws NonUniqueResultException
     */
    public function sauvegardeReponseTxt(
        QuestionnaireQuestionRepository $quizzQuestionRepository,
        QuestionnaireEtudiantReponseRepository $quizzEtudiantReponseRepository,
        QuestionnaireEtudiantRepository $quizzEtudiantRepository,
        Request $request,
        QuestionnaireQualite $questionnaire
    ): JsonResponse {
        $cleQuestion = $request->request->get('cleQuestion');

        $quizzEtudiant = $quizzEtudiantRepository->findOneBy([
            'questionnaire' => $questionnaire->getId(),
            'etudiant'      => $this->getConnectedUser()->getId()
        ]);
        if ($quizzEtudiant === null) {
            $quizzEtudiant = new QuestionnaireEtudiant($this->getConnectedUser(), $questionnaire);
            $this->entityManager->persist($quizzEtudiant);
        }
        /** @var QuestionnaireEtudiantReponse $exist */
        $exist = $quizzEtudiantReponseRepository->findExistQuestion($cleQuestion, $quizzEtudiant);

        $t = explode('_', $cleQuestion);
        $question = $quizzQuestionRepository->find(substr($t[3], 1, strlen($t[0])));
        if ($question !== null) {
            if ($exist === null) {
                $qr = new QuestionnaireEtudiantReponse($quizzEtudiant);
                $qr->setCleQuestion($cleQuestion);
                $qr->setCleReponse(null);
                $qr->setValeur($request->request->get('value'));
                $this->entityManager->persist($qr);
            } else {
                $exist->setValeur($request->request->get('value'));
            }
            $this->entityManager->flush();

            return $this->json(true, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/{questionnaire}", name="app_etudiant_qualite_questionnaire")
     * @param PrevisionnelRepository $previsionnelRepository
     * @param QuestionnaireQualite   $questionnaire
     *
     * @return Response
     */
    public function questionnaire(
        PrevisionnelRepository $previsionnelRepository,
        QuestionnaireQualite $questionnaire
    ): Response {

        return $this->render('appEtudiant/qualite/questionnaire.html.twig', [
            'questionnaireSections' => $questionnaire->getSections(),
            'questionnaire'         => $questionnaire,
            'typeQuestionnaire'     => 'qualite',
            'tPrevisionnel'         => $previsionnelRepository->findByDiplomeArray($this->dataUserSession->getUser()->getDiplome(),
                $this->dataUserSession->getAnneeUniversitaire())
        ]);
    }


}
