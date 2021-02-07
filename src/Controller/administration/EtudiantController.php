<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/EtudiantController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Controller\administration;

use App\Classes\Etudiant\EtudiantScolarite;
use App\Classes\Etudiant\EtudiantUpdate;
use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Form\EtudiantType;
use App\Repository\EtudiantRepository;
use Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class EtudiantController.
 *
 * @Route("/administration/etudiant")
 */
class EtudiantController extends BaseController
{
    /**
     * @Route("/", name="administration_etudiant_index")
     */
    public function index(): Response
    {
        return $this->render('administration/etudiant/index.html.twig', [
        ]);
    }

    /**
     * @Route("/edit/{id}/{origin}", name="administration_etudiant_edit", methods="GET|POST")
     *
     * @param string $origin
     */
    public function edit(Request $request, Etudiant $etudiant, $origin = 'semestre'): Response
    {
        $form = $this->createForm(
            EtudiantType::class,
            $etudiant,
            [
                'attr' => [
                    'data-provide' => 'validation',
                ],
                'departement' => $this->dataUserSession->getDepartement(),
            ]
        );

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($etudiant);
            $this->entityManager->flush();

            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'etudiant.edit.success.flash');

            if (null !== $request->request->get('btn_update')) {
                if ('semestre' === $origin && null !== $etudiant->getSemestre()) {
                    return $this->redirectToRoute('administration_semestre_index',
                        ['semestre' => $etudiant->getSemestre()->getId()]);
                }

                return $this->redirectToRoute('administration_etudiant_index');
            }

            $this->redirectToRoute('administration_etudiant_index', ['semestre' => $etudiant->getSemestre()->getId()]);
        }

        return $this->render('administration/etudiant/edit.html.twig', [
            'etudiant' => $etudiant,
            'form'     => $form->createView(),
            'origin'   => $origin,
        ]);
    }

    /**
     * @Route("/add", name="administration_etudiant_add", methods="POST")
     *
     * @throws Exception
     */
    public function create(Request $request): Response
    {
        $etudiant = new Etudiant();

        $form = $this->createForm(
            EtudiantType::class,
            $etudiant,
            [
                'attr' => [
                    'data-provide' => 'validation',
                ],
                'departement' => $this->dataUserSession->getDepartement(),
            ]
        );

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($etudiant);
            $this->entityManager->flush();

            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'etudiant.add.success.flash');
        }

        return $this->redirectToRoute('administration_etudiant_semestre_add');
    }

    /**
     * @Route("/change-etat/{uuid}/{etat}", name="adm_etudiant_change_etat", methods="POST", options={"expose":true})
     * @ParamConverter("etudiant", options={"mapping": {"uuid": "uuid"}})
     *
     * @param $etat
     */
    public function changeEtat(EtudiantScolarite $etudiantScolarite, Etudiant $etudiant, $etat): JsonResponse
    {
        $etudiantScolarite->setEtudiant($etudiant);
        $etudiantScolarite->changeEtat($etat);

        return $this->json(true, Response::HTTP_OK);
    }

    /**
     * @Route("/demissionnaire/{uuid}", name="administration_etudiant_demissionnaire", methods="GET")
     * @ParamConverter("etudiant", options={"mapping": {"uuid": "uuid"}})
     */
    public function demissionnaire(
        EtudiantScolarite $etudiantScolarite,
        Etudiant $etudiant
    ): RedirectResponse {
        $etudiantScolarite->setEtudiant($etudiant);
        $etudiantScolarite->changeEtat(Constantes::SEMESTRE_DEMISSIONNAIRE);

        return $this->redirectToRoute('trombinoscope_index');
    }

    /**
     * @Route("/edit-ajax/{id}", name="adm_etudiant_edit_ajax", methods="POST", options={"expose":true})
     */
    public function editAjax(EtudiantUpdate $etudiantUpdate, Request $request, Etudiant $etudiant): JsonResponse
    {
        $field = $request->request->get('field');
        $value = $request->request->get('value');

        $etudiantUpdate->update($etudiant, $field, $value);

        return $this->json(true, Response::HTTP_OK);
    }

    /**
     * @Route("/export.{_format}", name="administration_all_etudiant_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     *
     * @param $_format
     */
    public function export(MyExport $myExport, EtudiantRepository $etudiantRepository, $_format): Response
    {
        $etudiants = $etudiantRepository->getByDepartement($this->getDepartement(), []);

        return $myExport->genereFichierGenerique(
            $_format,
            $etudiants,
            'etudiants_' . $this->getDepartement()->getLibelle(),
            ['etudiants_administration'],
            ['nom', 'prenom', 'civilite', 'numEtudiant', 'mailUniv', 'semestre' => ['libelle']]
        );
    }
}
