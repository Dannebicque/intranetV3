<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/EmpruntsController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/09/2022 09:13
 */

namespace App\Controller\administration;

use App\Classes\MyEmprunts;
use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Emprunt;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

/**
 * Class EmpruntsController.
 */
#[Route(path: '/administration/emprunts')]
class EmpruntsController extends BaseController
{
    #[Route(path: '/', name: 'administration_emprunts_index')]
    public function index(MyEmprunts $myEmprunts): Response
    {
        $myEmprunts->listeEmprunts($this->dataUserSession->getDepartement());

        return $this->render('administration/emprunts/index.html.twig', [
            'emprunts' => $myEmprunts->getEmprunts(),
            'types' => Emprunt::ETATS,
            'statistiques' => $myEmprunts->getStatistiques(),
        ]);
    }

    #[Route(path: '/historique', name: 'administration_emprunt_historique')]
    public function historique(MyEmprunts $myEmprunts): Response
    {
        $myEmprunts->listeEmprunts($this->dataUserSession->getDepartement());

        return $this->render('administration/emprunts/historique.html.twig', [
            'emprunts' => $myEmprunts->getEmprunts(),
            'types' => Emprunt::ETATS,
            'statistiques' => $myEmprunts->getStatistiques(),
        ]);
    }

    #[Route(path: '/detail/{emprunt}', name: 'administration_emprunt_show')]
    public function show(Emprunt $emprunt): Response
    {
        return $this->render('administration/emprunts/show.html.twig', [
            'emprunt' => $emprunt,
        ]);
    }

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    #[Route(path: '/fiche/{emprunt}', name: 'administration_emprunt_imprimer_fiche')]
    public function imprimerFiche(MyEmprunts $myEmprunts, Emprunt $emprunt): void
    {
        $myEmprunts->genereFiche($emprunt);
    }

    #[Route(path: '/change-etat/{emprunt}/{etat}', name: 'administration_emprunt_change_etat')]
    public function changeEtat(MyEmprunts $myEmprunts, Emprunt $emprunt, string $etat): Response
    {
        $myEmprunts->changeEtat($emprunt, $etat);

        return $this->redirectToRoute('administration_emprunts_index');
    }

    #[Route(path: '/export.{_format}', name: 'administration_emprunts_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function export(
        MySerializer $mySerializer,
        MyExport $myExport, MyEmprunts $myEmprunts, string $_format): Response
    {
        $myEmprunts->listeEmprunts($this->dataUserSession->getDepartement());
        $data = $mySerializer->getDataFromSerialization(
            $myEmprunts,
            [
                'dateDebut',
                'dateFin',
                'motif',
                'telephone',
                'etat',
                'dateSortie',
                'dateRetour',
                'etudiant' => ['nom', 'prenom'],
                'personnel' => ['nom', 'prenom'],
            ],
            ['emprunts_administration', 'utilisateur'],
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'emprunts_'.$this->getDepartement()?->getLibelle(),
        );
    }

    #[Route(path: '/{emprunt}', name: 'administration_emprunt_delete', methods: 'DELETE')]
    public function delete(Request $request, Emprunt $emprunt): Response
    {
        $id = $emprunt->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
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
