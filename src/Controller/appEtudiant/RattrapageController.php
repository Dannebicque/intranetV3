<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appEtudiant/RattrapageController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/10/2021 20:09
 */

namespace App\Controller\appEtudiant;

use App\Classes\Matieres\TypeMatiereManager;
use App\Controller\BaseController;
use App\Entity\Rattrapage;
use App\Form\RattrapageType;
use App\Repository\RattrapageRepository;
use App\Utils\ToolsMatiere;
use Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/application/etudiant/rattrapage")
 * Class RattrapageController
 * @IsGranted("ROLE_ETUDIANT")
 */
class RattrapageController extends BaseController
{
    /**
     * @Route("/", name="application_etudiant_rattrapage_index")
     *
     * @return RedirectResponse|Response
     * @throws Exception
     *
     */
    public function index(
        TypeMatiereManager $typeMatiereManager,
        RattrapageRepository $rattrapageRepository,
        Request $request
    ) {
        $rattrapage = new Rattrapage($this->getUser());
        $form = $this->createForm(
            RattrapageType::class,
            $rattrapage,
            [
                'semestre' => $this->getUser()->getSemestre(),
                'locale'   => $request->getLocale(),
                'attr'     => [
                    'data-provide' => 'validation',
                ],
                'action'   => $this->generateUrl('application_etudiant_rattrapage_index'),
            ]
        );
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $rattrapage->setAnneeUniversitaire($this->getAnneeUniversitaire());
            $rattrapage->setSemestre($this->getEtudiantSemestre());
            $rattrapage->setTypeMatiere(ToolsMatiere::getType($request->request->get('rattrapage')['typeIdMatiere']));
            $rattrapage->setIdMatiere(ToolsMatiere::getId($request->request->get('rattrapage')['typeIdMatiere']));
            $this->entityManager->persist($rattrapage);
            $this->entityManager->flush();

            return $this->redirectToRoute('application_index', ['onglet' => 'rattrapage']);
        }

        return $this->render('appEtudiant/rattrapage/index.html.twig', [
            'form' => $form->createView(),
            'rattrapages' => $rattrapageRepository->findByEtudiant($this->getUser()),
            'matieres' => $typeMatiereManager->findBySemestreArray($this->getEtudiantSemestre()),
        ]);
    }
}
