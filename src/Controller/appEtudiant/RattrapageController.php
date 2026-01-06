<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/appEtudiant/RattrapageController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/01/2026 10:11
 */

namespace App\Controller\appEtudiant;

use App\Classes\Matieres\TypeMatiereManager;
use App\Controller\BaseController;
use App\Entity\Rattrapage;
use App\Event\RattrapageEvent;
use App\Form\RattrapageType;
use App\Repository\RattrapageRepository;
use App\Utils\ToolsMatiere;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

#[IsGranted('ROLE_ETUDIANT')]
#[Route(path: '/application/etudiant/rattrapage')]
class RattrapageController extends BaseController
{
    #[Route(path: '/', name: 'application_etudiant_rattrapage_index')]
    public function index(EventDispatcherInterface $eventDispatcher, TypeMatiereManager $typeMatiereManager, RattrapageRepository $rattrapageRepository, Request $request): RedirectResponse|Response
    {
        $rattrapage = new Rattrapage($this->getUser());

        if ($this->getUser()->getDiplome()?->isApc()) {
            $matieres = $typeMatiereManager->findByReferentielOrdreSemestreArray($this->getEtudiantSemestre(), $this->getUser()->getDiplome()?->getReferentiel());
        } else {
            $matieres = $typeMatiereManager->findBySemestreArray($this->getEtudiantSemestre());
        }

        $t = [];
        foreach ($matieres as $matiere) {
            $t[$matiere->display] = $matiere->getTypeIdMatiere();
        }


        $form = $this->createForm(
            RattrapageType::class,
            $rattrapage,
            [
                'semestre' => $this->getUser()->getSemestreActif(),
                'matieres' => $t,
                'locale' => $request->getLocale(),
                'attr' => [
                    'data-provide' => 'validation',
                ],
                'action' => $this->generateUrl('application_etudiant_rattrapage_index'),
            ]
        );
        $form->handleRequest($request);
        if ($form->isSubmitted()) {
            $rattrapage->setAnneeUniversitaire($this->getAnneeUniversitaire());
            $rattrapage->setSemestre($this->getEtudiantSemestre());
            $rattrapage->setTypeMatiere(ToolsMatiere::getType($request->request->all()['rattrapage']['typeIdMatiere']));
            $rattrapage->setIdMatiere(ToolsMatiere::getId($request->request->all()['rattrapage']['typeIdMatiere']));
            $this->entityManager->persist($rattrapage);
            $this->entityManager->flush();

            if ($this->getEtudiantSemestre()?->isOptMailRattrapage()) {
                $event = new RattrapageEvent($rattrapage);
                $eventDispatcher->dispatch($event, RattrapageEvent::RATTRAPAGE_MAIL_DEMANDE);
            }


            return $this->redirectToRoute('application_index', ['onglet' => 'rattrapage']);
        }


        return $this->render('appEtudiant/rattrapage/index.html.twig', [
            'form' => $form,
            'rattrapages' => $rattrapageRepository->findByEtudiant($this->getUser()),
            'matieres' => $matieres,
        ]);
    }
}
