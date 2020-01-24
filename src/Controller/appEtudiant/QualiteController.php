<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/appEtudiant/StageController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use App\Entity\QualiteQuestionnaire;
use App\Entity\QualiteQuestionnaireSection;
use App\Entity\QuizzEtudiant;
use App\Entity\QuizzEtudiantReponse;
use App\Entity\QuizzQuestion;
use App\MesClasses\Mail\MyMailer;
use App\Repository\PrevisionnelRepository;
use App\Repository\QualiteQuestionnaireRepository;
use App\Repository\QuizzEtudiantReponseRepository;
use App\Repository\QuizzEtudiantRepository;
use App\Repository\QuizzQuestionRepository;
use App\Repository\QuizzReponseRepository;
use DateTime;
use Doctrine\ORM\NonUniqueResultException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
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
     * @param QualiteQuestionnaireRepository $qualiteQuestionnaireRepository
     *
     * @return Response
     */
    public function index(QualiteQuestionnaireRepository $qualiteQuestionnaireRepository): Response
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
     * @ParamConverter("questionnaire", options={"mapping": {"uuid": "uuid"}})
     * @param QuizzEtudiantRepository $quizzEtudiantRepository
     * @param MyMailer                $myMailer
     * @param QualiteQuestionnaire    $qualiteQuestionnaire
     *
     * @return Response
     * @throws TransportExceptionInterface
     */
    public function complet(QuizzEtudiantRepository $quizzEtudiantRepository, MyMailer $myMailer, QualiteQuestionnaire $qualiteQuestionnaire): Response
    {
        $quizzEtudiant = $quizzEtudiantRepository->findOneBy(['questionnaire' => $qualiteQuestionnaire->getId(), 'etudiant' => $this->getConnectedUser()->getId()]);
        if ($quizzEtudiant !== null) {
            $quizzEtudiant->setDateTermine(new DateTime('now'));
            $quizzEtudiant->setTermine(false);
            $this->entityManager->flush();

            if ($this->getConnectedUser() !== null && $this->getConnectedUser()->getDiplome() !== null && $this->getConnectedUser()->getDiplome()->getOptResponsableQualite() !== null) {
                $myMailer->setTemplate('mails/qualite-complete-etudiant.html.twig',
                    ['questionnaire' => $qualiteQuestionnaire, 'etudiant' => $this->getConnectedUser()]);
                $myMailer->sendMessage($this->getConnectedUser()->getMails(),
                    'Accusé réception questionnaire ' . $qualiteQuestionnaire->getLibelle());

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
     * @Route("/section/{qualiteQuestionnaireSection}", name="app_etudiant_qualite_section")
     * @param QuizzEtudiantReponseRepository $quizzEtudiantReponseRepository
     * @param PrevisionnelRepository         $previsionnelRepository
     * @param QualiteQuestionnaireSection    $qualiteQuestionnaireSection
     *
     * @return Response
     */
    public function section(
        QuizzEtudiantRepository $quizzEtudiantRepository,
        QuizzEtudiantReponseRepository $quizzEtudiantReponseRepository,
        PrevisionnelRepository $previsionnelRepository,
        QualiteQuestionnaireSection $qualiteQuestionnaireSection
    ): Response {
        $quizzEtudiant = $quizzEtudiantRepository->findOneBy(['questionnaire' => $qualiteQuestionnaireSection->getQuestionnaire()->getId(), 'etudiant' => $this->getConnectedUser()->getId()]);
        if ($quizzEtudiant !== null) {
            $reponses = $quizzEtudiantReponseRepository->findByQuestionnaire($quizzEtudiant);
        } else {
            $reponses = [];
        }


        return $this->render('appEtudiant/qualite/section.html.twig', [
            'ordre'         => $qualiteQuestionnaireSection->getOrdre(),
            'section'       => $qualiteQuestionnaireSection->getSection(),
            'tPrevisionnel' => $previsionnelRepository->findByDiplomeArray($this->getConnectedUser()->getDiplome(),
                $this->dataUserSession->getAnneeUniversitaire()),
            'reponses'      => $reponses
        ]);
    }

    /**
     * @Route("/ajax/reponse/{uuid}", name="app_etudiant_qualite_ajax_reponse", options={"expose"=true})
     * @ParamConverter("questionnaire", options={"mapping": {"uuid": "uuid"}})
     * @param QuizzQuestionRepository        $quizzQuestionRepository
     * @param QuizzReponseRepository         $quizzReponseRepository
     * @param QuizzEtudiantReponseRepository $quizzEtudiantReponseRepository
     * @param Request                        $request
     * @param QualiteQuestionnaire           $questionnaire
     *
     * @return JsonResponse
     * @throws NonUniqueResultException
     */
    public function sauvegardeReponse(
        QuizzQuestionRepository $quizzQuestionRepository,
        QuizzReponseRepository $quizzReponseRepository,
        QuizzEtudiantRepository $quizzEtudiantRepository,
        QuizzEtudiantReponseRepository $quizzEtudiantReponseRepository,
        Request $request,
        QualiteQuestionnaire $questionnaire
    ): JsonResponse {
        $cleReponse = $request->request->get('cleReponse');
        $cleQuestion = $request->request->get('cleQuestion');

        $quizzEtudiant = $quizzEtudiantRepository->findOneBy(['questionnaire' => $questionnaire->getId(), 'etudiant' => $this->getConnectedUser()->getId()]);
        if ($quizzEtudiant === null) {
            $quizzEtudiant = new QuizzEtudiant($this->getConnectedUser(), $questionnaire);
            $this->entityManager->persist($quizzEtudiant);

        }
        /** @var QuizzEtudiantReponse $exist */
        $exist = $quizzEtudiantReponseRepository->findExistQuestion($cleQuestion, $quizzEtudiant);

        $t = explode('_', $cleReponse);
        $question = $quizzQuestionRepository->find(substr($t[3], 1, strlen($t[0])));
        if (strpos($t[4], 'c') === 0) {
            $reponse = $quizzReponseRepository->find($t[5]);
        } else {
            $reponse = $quizzReponseRepository->find($t[4]);
        }

        if ($question !== null && $reponse !== null) {
            if ($exist === null) {
                $qr = new QuizzEtudiantReponse($quizzEtudiant);
                $qr->setCleQuestion($cleQuestion);

                if ($question->getType() === QuizzQuestion::QUESTION_TYPE_QCM) {
                    $qr->setCleReponse(json_encode([$cleReponse]));
                    $qr->setValeur(json_encode([$reponse->getValeur()]));
                } else {
                    $qr->setCleReponse($cleReponse);
                    $qr->setValeur($reponse->getValeur());
                }

                $this->entityManager->persist($qr);
            } else {
                if ($question->getType() === QuizzQuestion::QUESTION_TYPE_QCU || $question->getType() === QuizzQuestion::QUESTION_TYPE_ECHELLE || $question->getType() === QuizzQuestion::QUESTION_TYPE_YESNO) {
                    $exist->setCleReponse($cleReponse);
                    $exist->setValeur($reponse->getValeur());
                } elseif ($question->getType() === QuizzQuestion::QUESTION_TYPE_QCM) {
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

            }
            $this->entityManager->flush();

            return $this->json(true, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/ajax/reponse-txt/{uuid}", name="app_etudiant_qualite_ajax_reponse_txt", options={"expose"=true})
     * @ParamConverter("questionnaire", options={"mapping": {"uuid": "uuid"}})
     * @param QuizzQuestionRepository        $quizzQuestionRepository
     * @param QuizzEtudiantReponseRepository $quizzEtudiantReponseRepository
     * @param Request                        $request
     * @param QualiteQuestionnaire           $questionnaire
     *
     * @return JsonResponse
     * @throws NonUniqueResultException
     */
    public function sauvegardeReponseTxt(
        QuizzQuestionRepository $quizzQuestionRepository,
        QuizzEtudiantReponseRepository $quizzEtudiantReponseRepository,
        QuizzEtudiantRepository $quizzEtudiantRepository,
        Request $request,
        QualiteQuestionnaire $questionnaire
    ): JsonResponse {
        $cleQuestion = $request->request->get('cleQuestion');

        $quizzEtudiant = $quizzEtudiantRepository->findOneBy(['questionnaire' => $questionnaire->getId(), 'etudiant' => $this->getConnectedUser()->getId()]);
        if ($quizzEtudiant === null) {
            $quizzEtudiant = new QuizzEtudiant($this->getConnectedUser(), $questionnaire);
            $this->entityManager->persist($quizzEtudiant);
        }
        /** @var QuizzEtudiantReponse $exist */
        $exist = $quizzEtudiantReponseRepository->findExistQuestion($cleQuestion, $quizzEtudiant);

        $t = explode('_', $cleQuestion);
        $question = $quizzQuestionRepository->find(substr($t[3], 1, strlen($t[0])));
        if ($question !== null) {
            if ($exist === null) {
                $qr = new QuizzEtudiantReponse($quizzEtudiant);
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
     * @param QualiteQuestionnaire   $questionnaire
     *
     * @return Response
     */
    public function questionnaire(
        PrevisionnelRepository $previsionnelRepository,
        QualiteQuestionnaire $questionnaire
    ): Response {
        return $this->render('appEtudiant/qualite/questionnaire.html.twig', [
            'questionnaire' => $questionnaire,
            'tPrevisionnel' => $previsionnelRepository->findByDiplomeArray($this->dataUserSession->getUser()->getDiplome(),
                $this->dataUserSession->getAnneeUniversitaire())
        ]);
    }


}
