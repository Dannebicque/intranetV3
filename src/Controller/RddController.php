<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/RddController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Controller;

use App\Entity\QuestChoixExterieur;
use App\Form\RddType;
use App\Repository\EtudiantRepository;
use App\Repository\QuestChoixExterieurRepository;
use App\Repository\QuestQuestionnaireRepository;
use App\Repository\RddDiplomeRepository;
use App\Utils\Tools;
use Carbon\Carbon;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\NonUniqueResultException;
use Ramsey\Uuid\Uuid;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

#[Route('rdd', name: 'rdd_')]
class RddController extends AbstractController
{
    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly MailerInterface $mailer
    ) {
    }

    /**
     * @throws NonUniqueResultException
     */
    #[Route('/', name: 'identification')]
    public function identification(
        Request $request,
        EtudiantRepository $etudiantRepository,
        RddDiplomeRepository $rddDiplomeRepository
    ): Response {
        if ('POST' === $request->getMethod()) {
            $jour = $request->request->get('jour') < 10 ? '0' . $request->request->get('jour') : $request->request->get('jour');
            $date = Tools::convertDateToObject($jour . '/' . $request->request->get('mois') . '/' . $request->request->get('annee'));
            $etudiant = $etudiantRepository->identificationRdd($request->request->get('login'), $date);

            if (null !== $etudiant) {
                // vérification s'il est bien diplôme
                $diplome = $rddDiplomeRepository->findOneBy(['numEtudiant' => $etudiant['numEtudiant']]);
                if (null !== $diplome) {
                    return $this->redirectToRoute('rdd_inscription',
                        ['numetudiant' => md5('clerdd' . $etudiant['numEtudiant']), 'diplome' => $diplome->getId()]);
                }

                return $this->render('rdd/identification.html.twig', ['erreur' => true]);
            }

            return $this->render('rdd/identification.html.twig', ['erreur' => true]);
        }

        return $this->render('rdd/identification.html.twig', ['erreur' => false]);
    }

    /**
     * @throws TransportExceptionInterface
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
            if (md5('clerdd' . $dip->getNumetudiant()) === $numetudiant) {
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
                            ]);

                        $this->mailer->send($email);

                        return $this->render('rdd/confirm.html.twig', [
                            'etudiant' => $etudiant,
                            'rdd' => $dip,
                            'numetudiant' => md5('clerdd' . $etudiant->getNumEtudiant()),
                            'diplome' => $diplome,
                        ]);
                    }

                    return $this->render('rdd/new.html.twig', [
                        'form' => $form,
                        'etudiant' => $etudiant,
                    ]);
                }

                return $this->render('rdd/identification.html.twig', ['erreur' => false]);
            }

            return $this->render('rdd/identification.html.twig', ['erreur' => false]);
        }

        return $this->render('rdd/identification.html.twig', ['erreur' => false]);
    }

    #[Route('/enquete/{numetudiant}/{diplome}', name: 'enquete_diplome')]
    public function enquete(
        QuestQuestionnaireRepository $questQuestionnaireRepository,
        QuestChoixExterieurRepository $questChoixExterieurRepository,
        EtudiantRepository $etudiantRepository,
        RddDiplomeRepository $rddDiplomeRepository,
        $numetudiant,
        $diplome
    ): Response {
        $questionnaire = $questQuestionnaireRepository->findOneBy(['id' => 17]);
        $dip = $rddDiplomeRepository->find($diplome);
        if ($questionnaire !== null && null !== $dip && md5('clerdd' . $dip->getNumetudiant()) === $numetudiant) {
            $questChoix = $questChoixExterieurRepository->findOneBy(['email' => $dip->getMailperso()]);
            if ($questChoix === null) {
                $etudiant = $etudiantRepository->findOneBy(['numEtudiant' => $dip->getNumetudiant()]);
                if (null !== $etudiant) {
                    $questChoix = new QuestChoixExterieur();
                    $questChoix->setEmail($dip->getMailperso());
                    $questChoix->setNom($etudiant->getNom());
                    $questChoix->setPrenom($etudiant->getPrenom());
                    $questChoix->setQuestionnaire($questionnaire);
                    $questChoix->setDateEnvoi(Carbon::now());
                    $questChoix->setDateCommence(Carbon::now());
                    $questChoix->setCleQuestionnaire(Uuid::uuid4());
                    $this->entityManager->persist($questChoix);
                    $this->entityManager->flush();
                }
            }

            return $this->redirectToRoute('enquete_questionnaire_qualite_index', [
                'uuidQuestionnaire' => $questionnaire->getUuidString(),
                'uuid' => $questChoix->getCleQuestionnaire()
            ]);

        }

        throw new AccessDeniedException();
    }
}
