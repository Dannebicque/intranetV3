<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/superAdministration/RhController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Personnel;
use App\Form\PersonnelType;
use App\Repository\PersonnelDepartementRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Ldap\Ldap;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class RhController
 * @package App\Controller\superAdministration
 * @Route("/super-administration/ressources-humaines")
 */
class RhController extends BaseController
{
    /**
     * @Route("/", name="sa_rh_index")
     */
    public function index(): Response
    {
        return $this->render('super-administration/rh/index.html.twig', [
        ]);
    }

    /**
     * @Route("/show/{id}", name="sa_rh_personnel_show", options={"expose"=true})
     * @param Personnel $personnel
     *
     * @return Response
     */
    public function show(Personnel $personnel): Response
    {
        return $this->render('super-administration/rh/show.html.twig', [
            'personnel' => $personnel
        ]);
    }

    /**
     * @Route("/import", name="sa_rh_import_personnel")
     * @param Request $request
     *
     * @return Response
     */
    public function import(Request $request): Response
    {
        //Todo: si fonctionne à faire en ajax?
        if ($request->getMethod() === 'POST') {
            $username = $request->request->get('username');
            $ldap = Ldap::create('ext_ldap', [
                'host'       => 'ldap.univ-reims.fr',
                'encryption' => 'ssl',
            ]);
            $ldap->bind('uid=app-intranet-iut,ou=account,ou=app,dc=univ-reims,dc=fr', 'heXzHr7p7MKuccQ2UqKu');
//supannEmpId ou uid
            $query = $ldap->query('ou=people,dc=univ-reims,dc=fr',
                '(|(supannEmpId=' . $username . ')(uid=' . $username . ')(mail=' . $username . ')(sn=' . $username . '))');
            $results = $query->execute();
            dump($results);

            return $this->render('super-administration/rh/liste-result.html.twig', [
            ]);

        }

        return $this->render('super-administration/rh/import.html.twig', [
        ]);
    }

    /**
     * @Route("/{id}/edit", name="sa_rh_personnel_edit", methods="GET|POST", options={"expose":true})
     * @param Request   $request
     * @param Personnel $personnel
     *
     * @return Response
     */
    public function edit(Request $request, Personnel $personnel): Response
    {
        $form = $this->createForm(PersonnelType::class, $personnel, [
            'attr' => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'personnel.edit.success.flash');

            return $this->redirectToRoute('sa_rh_personnel_edit', ['id' => $personnel->getId()]);
        }

        return $this->render('super-administration/rh/edit.html.twig', [
            'personnel' => $personnel,
            'form'      => $form->createView(),
        ]);
    }

    /**
     * @Route("/create", name="sa_rh_add_personnel", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     */
    public function create(Request $request): Response
    {
        $personnel = new Personnel();
        $form = $this->createForm(PersonnelType::class, $personnel, [
            'attr' => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $personnel->setRoles(['ROLE_PERMANENT']);
            $personnel->setTypeUser('permanent');
            $this->entityManager->persist($personnel);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'rh.add.success.flash');

            return $this->redirectToRoute('sa_rh_index');
        }

        return $this->render('super-administration/rh/new.html.twig', [
            'personnel' => $personnel,
            'form'      => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="sa_rh_delete_personnel", methods="DELETE", options={"expose"=true})
     * @param PersonnelDepartementRepository $personnelDepartementRepository
     * @param Request                        $request
     * @param Personnel                      $personnel
     *
     * @return Response
     */
    public function delete(
        PersonnelDepartementRepository $personnelDepartementRepository,
        Request $request,
        Personnel $personnel
    ): Response {
        $id = $personnel->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            //retirer le personnel des départements
            $departements = $personnelDepartementRepository->findByPersonnel($personnel);
            foreach ($departements as $departement) {
                $this->entityManager->remove($departement);
            }
            //suspendre le personnel (ne jamais effacer)
            $personnel->setVisible(false);
            $this->entityManager->persist($personnel);
            $this->entityManager->flush();

            return $this->json($id, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
