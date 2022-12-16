<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/appEtudiant/EmpruntController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/12/2022 12:09
 */

namespace App\Controller\appEtudiant;

use App\Classes\MyEmprunts;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Emprunt;
use App\Repository\MaterielRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

/**
 * Class EmpruntController.
 */
#[Route(path: '/application/etudiant/emprunt')]
#[\Symfony\Component\Security\Http\Attribute\IsGranted('ROLE_ETUDIANT')]
class EmpruntController extends BaseController
{
    #[Route(path: '/', name: 'application_etudiant_emprunt_index')]
    public function index(MyEmprunts $myEmprunts, MaterielRepository $materielRepository): Response
    {
        if (null !== $this->getUser()) {
            $myEmprunts->calculGrille();

            return $this->render('appEtudiant/emprunt/index.html.twig', [
                'emprunts' => $this->getUser()->getEmprunts(),
                'myEmprunt' => $myEmprunts,
                'materiels' => $materielRepository->findByDepartement($this->dataUserSession->getDepartement()),
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    #[Route(path: '/valide-demande', name: 'application_etudiant_emprunt_valide', methods: ['POST'])]
    public function empruntDemandeAction(MyEmprunts $emprunt, Request $request): Response
    {
        $emprunt->empruntDemande($request, $this->getUser());

        return $this->redirectToRoute('application_index', ['onglet' => 'emprunt']);
    }

    #[Route(path: '/details/{emprunt}', name: 'application_etudiant_emprunt_detail')]
    #[ParamConverter('emprunt', options: ['mapping' => ['emprunt' => 'uuid']])]
    public function show(Emprunt $emprunt): Response
    {
        return $this->render('appEtudiant/emprunt/show.html.twig', [
            'emprunt' => $emprunt,
        ]);
    }

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    #[Route(path: '/imprimer/{emprunt}', name: 'app_etudiant_emprunt_imprimer_fiche')]
    #[ParamConverter('emprunt', options: ['mapping' => ['emprunt' => 'uuid']])]
    public function imprimerFiche(MyEmprunts $myEmprunts, Emprunt $emprunt): void
    {
        $myEmprunts->genereFiche($emprunt);
    }

    #[Route(path: '/delete', name: 'app_etudiant_emprunt_delete', methods: ['DELETE'])]
    #[ParamConverter('emprunt', options: ['mapping' => ['emprunt' => 'uuid']])]
    public function delete(MyEmprunts $myEmprunts, Request $request, Emprunt $emprunt): Response
    {
        $id = $emprunt->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $myEmprunts->deleteReservation($emprunt);
            $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'emprunt.delete.error.flash');

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'emprunt.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
