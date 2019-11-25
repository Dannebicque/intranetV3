<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/appEtudiant/EmpruntController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Emprunt;
use App\MesClasses\MyEmprunts;
use App\Repository\MaterielRepository;
use Dompdf\Dompdf;
use Dompdf\Options;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

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
     * @param Emprunt $emprunt
     *
     * @return Response
     */
    public function imprimerFiche(Emprunt $emprunt): Response
    {
        $html = $this->renderView('pd/ficheEmprunt.html.twig', [
            'emprunt' => $emprunt,
        ]);

        $options = new Options();
        $options->set('isRemoteEnabled', true);
        $options->set('isPhpEnabled', true);

        $dompdf = new Dompdf($options);
        $dompdf->loadHtml($html);
        $dompdf->render();

        return new Response($dompdf->stream('pret-' . $emprunt->getEtudiant()->getNom(),
            ['Attachment' => 1]));
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
//            $this->entityManager->remove($emprunt);
//            $this->entityManager->flush();
//            $this->addFlashBag(
//                Constantes::FLASHBAG_SUCCESS,
//                'actualite.delete.success.flash'
//            );

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'actualite.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
