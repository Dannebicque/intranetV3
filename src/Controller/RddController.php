<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/RddController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/12/2022 15:26
 */

namespace App\Controller;

use App\Components\Questionnaire\Adapter\QuestionnaireQuizzAdapter;
use App\Components\Questionnaire\Adapter\ReponsesEtudiantAdapter;
use App\Components\Questionnaire\Adapter\SectionQuizzEntityAdapter;
use App\Form\RddType;
use App\Repository\EtudiantRepository;
use App\Repository\RddDiplomeRepository;
use App\Utils\Tools;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\Routing\Annotation\Route;

//use App\Components\Questionnaire\DTO\ReponsesEtudiant;

#[Route('rdd', name: 'rdd_')]
class RddController extends AbstractController
{
    public function __construct(private readonly EntityManagerInterface $entityManager, private readonly MailerInterface $mailer)
    {
    }

    /**
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    #[Route('/', name: 'identification')]
    public function identification(
        Request $request,
        EtudiantRepository $etudiantRepository,
        RddDiplomeRepository $rddDiplomeRepository
    ): Response {
        if ('POST' === $request->getMethod()) {
            $jour = $request->request->get('jour') < 10 ? '0'.$request->request->get('jour') : $request->request->get('jour');
            $date = Tools::convertDateToObject($jour.'/'.$request->request->get('mois').'/'.$request->request->get('annee'));
            $etudiant = $etudiantRepository->identificationRdd($request->request->get('login'), $date);

            if (null !== $etudiant) {
                // vérification s'il est bien diplôme
                $diplome = $rddDiplomeRepository->findOneBy(['numEtudiant' => $etudiant['numEtudiant']]);
                if (null !== $diplome) {
                    return $this->redirectToRoute('rdd_inscription',
                        ['numetudiant' => md5('clerdd'.$etudiant['numEtudiant']), 'diplome' => $diplome->getId()]);
                }

                return $this->render('rdd/identification.html.twig', ['erreur' => true]);
            }

            return $this->render('rdd/identification.html.twig', ['erreur' => true]);
        }

        return $this->render('rdd/identification.html.twig', ['erreur' => false]);
    }

    /**
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    #[Route('/inscription/{numetudiant}/{diplome}', name: 'inscription')]
    public function inscription(
        EtudiantRepository $etudiantRepository,
        RddDiplomeRepository $rddDiplomeRepository,
        Request $request,
        $numetudiant,
        $diplome
    ): Response {
        $dip = $rddDiplomeRepository->find($diplome);
        if (null !== $dip) {
            if (md5('clerdd'.$dip->getNumetudiant()) === $numetudiant) {
                $etudiant = $etudiantRepository->findOneBy(['numEtudiant' => $dip->getNumetudiant()]);

                if (null !== $etudiant) {
                    $form = $this->createForm(RddType::class, $etudiant);
                    $form->handleRequest($request);

                    if ($form->isSubmitted() && $form->isValid()) {
                        $dip->setConfirme(true);
                        $this->entityManager->flush();

                        $email = (new TemplatedEmail())
                            ->from(new Address('intranet.iut-troyes@univ-reims.fr'))
                            ->to(new Address($dip->getMailperso()))
                            ->subject('Confirmation d\'enregistrement de vos informations pour la remise de votre diplôme')

                            // path of the Twig template to render
                            ->htmlTemplate('mails/confirmRdd.html.twig')

                            // pass variables (name => value) to the template
                            ->context([
                                'etudiant' => $etudiant,
                                'rdd' => $dip,
                                'diplome' => $diplome,
                            ])
                        ;

                        $this->mailer->send($email);

                        return $this->render('rdd/confirm.html.twig', [
                            'etudiant' => $etudiant,
                            'rdd' => $dip,
                            'numetudiant' => md5('clerdd'.$etudiant->getNumEtudiant()),
                            'diplome' => $diplome,
                        ]);
                    }

                    return $this->render('rdd/new.html.twig', [
                        'form' => $form->createView(),
                        'etudiant' => $etudiant,
                    ]);
                }

                return $this->render('rdd/identification.html.twig', ['erreur' => false]);
            }

            return $this->render('rdd/identification.html.twig', ['erreur' => false]);
        }

        return $this->render('rdd/identification.html.twig', ['erreur' => false]);
    }

    //#[Route('/enquete/{numetudiant}/{diplome}', name: 'enquete_diplome')]
//todo: refaire avec nouveau questionnaire
//    public function enquete(
//        Request $request,
//        Questionnaire $questionnaire,
//        QuestionnaireQuizzRepository $questionnaireQuizzRepository,
//        EtudiantRepository $etudiantRepository,
//        RddDiplomeRepository $rddDiplomeRepository,
//        $numetudiant,
//        $diplome
//    ): Response {
//        //$reponses = new ReponsesEtudiant();
//
//        $dip = $rddDiplomeRepository->find($diplome);
//        if ((null !== $dip) && md5('clerdd'.$dip->getNumetudiant()) === $numetudiant) {
//            $questionnaireQuizz = $questionnaireQuizzRepository->find(1);
//            $etudiant = $etudiantRepository->findOneBy(['numEtudiant' => $dip->getNumetudiant()]);
//
//            $questionnaire->createQuestionnaire(QuestionnaireQuizz::class,
//                (new QuestionnaireQuizzAdapter($questionnaireQuizz))->getQuestionnaire(),
//                ['mode' => AbstractQuestionnaire::MODE_EDITION,
//                    'typeQuestionnaire' => 'quizz',
//                    'route' => 'rdd_enquete_diplome',
//                    'params' => [
//                        'numetudiant' => $numetudiant,
//                        'diplome' => $diplome,
//                    ], ]);
//            $questionnaire->setIdEtudiant($etudiant->getId()); // todo: pourrait être plus générique si c'est des questionnaires aux personnels
//            $questionnaire->AddSpecialSection(AbstractSection::INTRODUCTION);
//
//            foreach ($questionnaireQuizz->getSections() as $section) {
//                $sect = (new SectionQuizzEntityAdapter($section))->getSection();
//                $questionnaire->addSection($sect);
//                $reponses->merge($reponsesEtudiantAdapter->getReponsesEtudiant($sect, $etudiant->getId())); // todo: on pourrait faire que sur la section concernée ?
//            }
//
//            $questionnaire->AddSpecialSection(AbstractSection::END);
//
//            if ($questionnaire->handleRequest($request)) {
//                $questionnaire->setQuestionsForSection($reponses);
//
//                return $questionnaire->wizardPage();
//            }
//
//            return $this->render('rdd/enquete.html.twig', [
//                'etudiant' => $etudiant,
//                'questionnaire' => $questionnaire->createView(),
//            ]);
//        }
//
//        throw new AccessDeniedException();
//    }

//    #[Route('/enquete-page/', name: 'enquete_wizard_page', options: ['expose' => true])]
//    public function wizardPage(
//        ReponsesEtudiantAdapter $reponsesEtudiantAdapter,
//        QuestionnaireQuizzRepository $qualiteRepository,
//        Questionnaire $questionnaire,
//        Request $request
//    ): Response {
//        $reponses = new ReponsesEtudiant();
//        $ordreSection = (int) $request->query->get('page');
//        $etudiant = $request->query->get('etudiant');
//        $questionnaireQualite = $qualiteRepository->find($request->query->get('questionnaire'));
//        if (null !== $questionnaireQualite) {
//            $questionnaire->createQuestionnaire(QuestionnaireQuizz::class,
//                (new QuestionnaireQuizzAdapter($questionnaireQualite))->getQuestionnaire(),
//                [
//                    'mode' => AbstractQuestionnaire::MODE_EDITION,
//                ]); //todo: prendre le parametre de la route du wizard... ? Gérer la vue du wizard en automatique?
//            $questionnaire->setIdEtudiant($etudiant); //todo: pourrait être plus générique si c'est des questionnaires aux personnels
//            $questionnaire->AddSpecialSection(AbstractSection::INTRODUCTION);
//            foreach ($questionnaireQualite->getSections() as $section) {
//                $sect = (new SectionQuizzEntityAdapter($section))->getSection();//todo: update avec la nouvelle gestion
//                $questionnaire->addSection($sect);
//                $reponses->merge($reponsesEtudiantAdapter->getReponsesEtudiant($sect, $etudiant));
//            }
//            $questionnaire->AddSpecialSection(AbstractSection::END);
//            $questionnaire->setQuestionsForSection($ordreSection, $reponses);
//
//            return $this->render('table/wizard-page.html.twig', [
//                'section' => $questionnaire->getSection($ordreSection),
//                'etudiant' => $etudiant,
//                'idQuestionnaire' => $request->query->get('questionnaire'),
//            ]);
//        }
 //   }
}
