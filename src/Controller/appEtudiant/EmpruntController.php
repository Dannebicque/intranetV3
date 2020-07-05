<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appEtudiant/EmpruntController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Emprunt;
use App\Entity\EmpruntEtudiant;
use App\Entity\EmpruntMateriel;
use App\Entity\Materiel;
use App\Event\EmpruntEvent;
use App\MesClasses\MyEmprunts;
use App\MesClasses\Tools;
use App\Repository\MaterielRepository;
use Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;
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
     * @param EventDispatcherInterface $eventDispatcher
     * @param MaterielRepository       $materielRepository
     * @param Request                  $request
     *
     * @return Response
     * @throws Exception
     * @Route("/valide-demande", name="application_etudiant_emprunt_valide", methods={"POST"})
     */
    public function empruntDemandeAction(
        EventDispatcherInterface $eventDispatcher,
        MaterielRepository $materielRepository,
        Request $request
    ) {

        $pret = new EmpruntEtudiant($this->getConnectedUser());

        $pret->setMotif($request->request->get('listemotif'));
        $pret->setDescription($request->request->get('motif'));
        $pret->setTelephone($request->request->get('telportable'));
        $pret->setDepartement($this->dataUserSession->getDepartement());

        $materieljour = $request->request->get('materiels');

        $materiels = $materielRepository->findByDepartement($this->dataUserSession->getDepartement());
        $tmat = [];
        /** @var Materiel $materiel */
        foreach ($materiels as $materiel) {
            $tmat[$materiel->getId()] = $materiel;
        }
        $matde = [];

        $d1 = null;
        $d2 = null;

        foreach ($materieljour as $m) {
            $t = explode('_', $m); //jour, AM/PM, matériel
            if (array_key_exists($t[1], $tmat)) {
                //matériel existant, on ajoute
                if (!array_key_exists($t[1], $matde)) {
                    $matde[$t[1]] = $tmat[$t[1]];
                }

                if ($d1 === null) {
                    $d1 = $t[0];
                    $d2 = $t[0];
                } else {
                    $d1 = min($d1, $t[0]);
                    $d2 = max($d2, $t[0]);
                }
            }
        }

        $pret->setDateDebut(Tools::convertDateToObject($d1));
        $pret->setDateFin(Tools::convertDateToObject($d2));

        $this->entityManager->persist($pret);
        $this->entityManager->flush();

        foreach ($matde as $m) {
            $pm = new EmpruntMateriel();
            $pm->setEmprunt($pret);
            $pm->setMateriel($m);
            $pm->setEtat(EmpruntMateriel::ETAT_MATERIEL_RESERVE);

            $this->entityManager->persist($pm);
        }
        $this->entityManager->flush();

        $event = new EmpruntEvent($pret);
        $eventDispatcher->dispatch($event, EmpruntEvent::CHGT_ETAT_EMPRUNT_DEMANDE);

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
