<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appEtudiant/EmpruntController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 11/12/2020 11:47

namespace App\Controller\appEtudiant;

use App\Classes\MyEmprunts;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Emprunt;
use App\Repository\MaterielRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

/**
 * Class EmpruntController
 * @package App\Controller
 * @Route("/application/etudiant/emprunt")
 * @IsGranted("ROLE_ETUDIANT")
 */
class EmpruntController extends BaseController
{

    /**
     * @Route("/", name="application_etudiant_emprunt_index")
     * @param MyEmprunts         $myEmprunts
     * @param MaterielRepository $materielRepository
     *
     * @return Response
     */
    public function index(MyEmprunts $myEmprunts, MaterielRepository $materielRepository): Response
    {
        $myEmprunts->calculGrille();

        return $this->render('appEtudiant/emprunt/index.html.twig', [
            'emprunts'  => $this->dataUserSession->getUser()->getEmprunts(),
            'myEmprunt' => $myEmprunts,
            'materiels' => $materielRepository->findByDepartement($this->dataUserSession->getDepartement())
        ]);
    }

    /**
     * @param MyEmprunts $emprunt
     * @param Request    $request
     *
     * @return Response
     * @Route("/valide-demande", name="application_etudiant_emprunt_valide", methods={"POST"})
     */
    public function empruntDemandeAction(
        MyEmprunts $emprunt,
        Request $request
    ) {

        $emprunt->empruntDemande($request, $this->getConnectedUser());

        return $this->redirectToRoute('application_index', ['onglet' => 'emprunt']);
    }


    /**
     * @Route("/details/{emprunt}", name="application_etudiant_emprunt_detail")
     * @ParamConverter("emprunt", options={"mapping": {"emprunt": "uuid"}})
     * @param Emprunt $emprunt
     *
     * @return Response
     */
    public function show(Emprunt $emprunt): Response
    {
        return $this->render('appEtudiant/emprunt/show.html.twig', [
            'emprunt' => $emprunt
        ]);
    }

    /**
     * @Route("/imprimer/{emprunt}", name="app_etudiant_emprunt_imprimer_fiche")
     * @ParamConverter("emprunt", options={"mapping": {"emprunt": "uuid"}})
     * @param MyEmprunts $myEmprunts
     * @param Emprunt    $emprunt
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function imprimerFiche(MyEmprunts $myEmprunts, Emprunt $emprunt): void
    {
        $myEmprunts->genereFiche($emprunt);
    }

    /**
     * @Route("/delete", name="app_etudiant_emprunt_delete", methods={"DELETE"})
     * @param Request $request
     * @param Emprunt $emprunt
     * @ParamConverter("emprunt", options={"mapping": {"emprunt": "uuid"}})
     *
     * @return Response
     */
    public function delete(Request $request, Emprunt $emprunt): Response
    {
        //todo: a faire
        $id = $emprunt->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'actualite.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
