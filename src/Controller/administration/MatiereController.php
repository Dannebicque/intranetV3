<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/MatiereController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Entity\Matiere;
use App\Entity\Ue;
use App\Form\MatiereType;
use App\MesClasses\Configuration;
use App\MesClasses\MyExport;
use App\Repository\MatiereRepository;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/matiere")
 */
class MatiereController extends BaseController
{

    /**
     * @Route("/", name="administration_matiere_index", methods="GET")
     * @return Response
     */
    public function index(): Response
    {
        return $this->render('administration/matiere/index.html.twig');
    }

    /**
     * @Route("/diplome/{diplome}", name="administration_matiere_diplome", methods="GET", options={"expose"=true})
     * @param Diplome $diplome
     *
     * @return Response
     */
    public function diplome(Diplome $diplome): Response
    {
        return $this->render('administration/matiere/_tableau.html.twig', [
            'diplome'  => $diplome,
            'matieres' => $this->getDoctrine()->getRepository(Matiere::class)->findByDiplome($diplome)
        ]);
    }


    /**
     * @Route("/{diplome}/export.{_format}", name="administration_matiere_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport $myExport
     * @param MatiereRepository $matiereRepository
     * @param Diplome $diplome
     * @param                   $_format
     *
     * @return Response
     * @throws Exception
     */
    public function export(
        MyExport $myExport,
        MatiereRepository $matiereRepository,
        Diplome $diplome,
        $_format
    ): Response
    {
        $actualites = $matiereRepository->findByDiplome($diplome);

        return $myExport->genereFichierGenerique(
            $_format,
            $actualites,
            'matieres',
            ['matiere', 'matiere_administration'],
            [
                'libelle',
                'codeMatiere',
                'cmPpn',
                'tdPpn',
                'tpPpn',
                'cmFormation',
                'tdFormation',
                'tpFormation',
                'nbNotes',
                'coefficient',
                'pac',
                'nbEcts',
                'suspendu'
            ]
        );
    }


    /**
     * @Route("/new/{diplome}/{ue}", name="administration_matiere_new", methods="GET|POST")
     * @param Request $request
     *
     * @param Diplome $diplome
     *
     * @param Ue|null $ue
     *
     * @return Response
     */
    public function create(Request $request, Diplome $diplome, Ue $ue = null): Response
    {
        if ((int)Configuration::get('MODIFICATION_PPN') === 1) {

            $matiere = new Matiere();
            $form = $this->createForm(MatiereType::class, $matiere, [
                'diplome' => $diplome,
                'attr'    => [
                    'data-provide' => 'validation'
                ]
            ]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->persist($matiere);
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'matiere.add.success.flash');
                if ($request->request->get('btn_update') !== null) {
                    return $this->redirectToRoute('administration_matiere_index');
                }

                return $this->redirectToRoute('administration_matiere_index');
            }

            return $this->render('administration/matiere/new.html.twig', [
                'matiere' => $matiere,
                'form'    => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/{id}", name="administration_matiere_show", methods="GET")
     * @param Matiere $matiere
     *
     * @return Response
     */
    public function show(Matiere $matiere): Response
    {
        return $this->render('administration/matiere/show.html.twig', ['matiere' => $matiere]);
    }

    /**
     * @Route("/{id}/edit", name="administration_matiere_edit", methods="GET|POST")
     * @param Request $request
     * @param Matiere $matiere
     *
     * @return Response
     */
    public function edit(Request $request, Matiere $matiere): Response
    {
        if ((int)Configuration::get('MODIFICATION_PPN') === 1) {
            $form = $this->createForm(MatiereType::class, $matiere, [
                'diplome' => $matiere->getSemestre()->getAnnee()->getDiplome(),
                'attr'    => [
                    'data-provide' => 'validation'
                ]
            ]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'matiere.edit.success.flash');

                return $this->redirectToRoute('administration_matiere_index');
            }

            return $this->render('administration/matiere/edit.html.twig', [
                'matiere' => $matiere,
                'form'    => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }


    /**
     * @Route("/{id}/duplicate", name="administration_matiere_duplicate", methods="GET|POST")
     * @param Matiere $matiere
     *
     * @return Response
     */
    public function duplicate(Matiere $matiere): Response
    {
        if ((int)Configuration::get('MODIFICATION_PPN')) {
            $newMatiere = clone $matiere;

            $this->entityManager->persist($newMatiere);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'matiere.duplicate.success.flash');

            return $this->redirectToRoute('administration_matiere_edit', ['id' => $newMatiere->getId()]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    /**
     * @Route("/{id}", name="administration_matiere_delete", methods="DELETE")
     */
    public function delete(): void
    {
    }
}
