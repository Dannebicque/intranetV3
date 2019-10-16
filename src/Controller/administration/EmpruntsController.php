<?php
/**
 * Copyright (C) 10 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/EmpruntsController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 16/10/2019 17:41
 * @lastUpdate 16/10/2019 17:40
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Emprunt;
use App\MesClasses\MyEmprunts;
use App\MesClasses\MyExport;
use App\Repository\EmpruntRepository;
use Dompdf\Dompdf;
use Dompdf\Options;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class EmpruntsController
 * @package App\Controller\administration
 * @Route("/administration/emprunts")
 */
class EmpruntsController extends BaseController
{
    /**
     * @Route("/", name="administration_emprunts_index")
     *
     * @param EmpruntRepository $empruntRepository
     *
     * @return Response
     */
    public function index(MyEmprunts $myEmprunts): Response
    {
        $myEmprunts->listeEmprunts($this->dataUserSession->getDepartement());

        return $this->render('administration/emprunts/index.html.twig', [
            'emprunts'     => $myEmprunts->getEmprunts(),
            'types'        => Emprunt::ETATS,
            'statistiques' => $myEmprunts->getStatistiques()
        ]);
    }

    /**
     * @Route("/historique", name="administration_emprunt_historique")
     *
     * @param EmpruntRepository $empruntRepository
     *
     * @return Response
     */
    public function historique(MyEmprunts $myEmprunts): Response
    {
        $myEmprunts->listeEmprunts($this->dataUserSession->getDepartement());

        return $this->render('administration/emprunts/historique.html.twig', [
            'emprunts'     => $myEmprunts->getEmprunts(),
            'types'        => Emprunt::ETATS,
            'statistiques' => $myEmprunts->getStatistiques()
        ]);
    }

    /**
     * @Route("/detail/{emprunt}", name="administration_emprunt_show")
     *
     * @return Response
     */
    public function show(Emprunt $emprunt): Response
    {
        return $this->render('administration/emprunts/show.html.twig', [
            'emprunt' => $emprunt
        ]);
    }

    /**
     * @Route("/fiche/{emprunt}", name="administration_emprunt_imprimer_fiche")
     *
     * @return Response
     */
    public function fiche(Emprunt $emprunt): Response
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
     * @Route("/change-etat/{emprunt}/{etat}", name="administration_emprunt_change_etat")
     *
     * @return Response
     */
    public function changeEtat(MyEmprunts $myEmprunts, Emprunt $emprunt, string $etat): Response
    {
        $myEmprunts->changeEtat($emprunt, $etat);

        return $this->redirectToRoute('administration_emprunts_index'); //todo: a faire en javascript sans reload?
    }

    /**
     * @Route("/export.{_format}", name="administration_emprunts_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport            $myExport
     * @param EmpruntRepository   $empruntRepository
     *
     * @param                     $_format
     *
     * @return Response
     * @throws Exception
     */
    public function export(MyExport $myExport, MyEmprunts $myEmprunts, $_format): Response
    {
        $myEmprunts->listeEmprunts($this->dataUserSession->getDepartement());

        $response = $myExport->genereFichierGenerique(
            $_format,
            $myEmprunts->getEmprunts(),//todo: a définir
            'materiels',
            ['emprunts_administration', 'utilisateur'],
            ['titre', 'texte', 'departement' => ['libelle']]
        );

        return $response;
    }

    /**
     * @Route("/{emprunt}", name="administration_emprunt_delete", methods="DELETE")
     * @param Request $request
     * @param Emprunt $emprunt
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
