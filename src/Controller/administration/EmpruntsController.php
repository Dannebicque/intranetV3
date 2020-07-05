<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/EmpruntsController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:33

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Emprunt;
use App\Classes\MyEmprunts;
use App\Classes\MyExport;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

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
     * @param MyEmprunts $myEmprunts
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
     * @param MyEmprunts $myEmprunts
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
     * @param Emprunt $emprunt
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
     * @param MyEmprunts $myEmprunts
     * @param Emprunt    $emprunt
     *
     * @return void
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function imprimerFiche(MyEmprunts $myEmprunts, Emprunt $emprunt): void
    {
        $myEmprunts->genereFiche($emprunt);
    }

    /**
     * @Route("/change-etat/{emprunt}/{etat}", name="administration_emprunt_change_etat")
     *
     * @param MyEmprunts $myEmprunts
     * @param Emprunt    $emprunt
     * @param string     $etat
     *
     * @return Response
     */
    public function changeEtat(MyEmprunts $myEmprunts, Emprunt $emprunt, string $etat): Response
    {
        $myEmprunts->changeEtat($emprunt, $etat);

        return $this->redirectToRoute('administration_emprunts_index');
    }

    /**
     * @Route("/export.{_format}", name="administration_emprunts_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport            $myExport
     * @param MyEmprunts          $myEmprunts
     * @param                     $_format
     *
     * @return Response
     * @throws Exception
     */
    public function export(MyExport $myExport, MyEmprunts $myEmprunts, $_format): Response
    {
        $myEmprunts->listeEmprunts($this->dataUserSession->getDepartement());

        return $myExport->genereFichierGenerique(
            $_format,
            $myEmprunts->getEmprunts(),
            'emprunts',
            ['emprunts_administration', 'utilisateur'],
            [
                'dateDebut',
                'dateFin',
                'motif',
                'telephone',
                'etat',
                'dateSortie',
                'dateRetour',
                'etudiant'  => ['nom', 'prenom'],
                'personnel' => ['nom', 'prenom']
            ]
        );
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

        $id = $emprunt->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($emprunt);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'emprunt.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'emprunt.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

}
