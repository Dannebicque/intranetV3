<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/RattrapageController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Rattrapage;
use App\Entity\Semestre;
use App\Event\RattrapageEvent;
use App\MesClasses\MyExport;
use App\Repository\AbsenceRepository;
use App\Repository\RattrapageRepository;
use PhpOffice\PhpSpreadsheet\Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

/**
 * Class RattrapageController
 * @package App\Controller\administration
 * @Route("/administration/rattrapage")
 */
class RattrapageController extends BaseController
{
    /**
     * @Route("/semestre/{semestre}", name="administration_rattrapage_semestre_index")
     * @param AbsenceRepository    $absenceRepository
     * @param RattrapageRepository $rattrapageRepository
     * @param Semestre             $semestre
     *
     * @return Response
     */
    public function index(
        AbsenceRepository $absenceRepository,
        RattrapageRepository $rattrapageRepository,
        Semestre $semestre
    ): Response {
        return $this->render('administration/rattrapage/index.html.twig', [
            'rattrapages' => $rattrapageRepository->findBySemestre($semestre, $semestre->getAnneeUniversitaire()),
            'semestre'    => $semestre,
            'absences'    => $absenceRepository->findBySemestreRattrapage($semestre, $semestre->getAnneeUniversitaire())
        ]);
    }

    /**
     * @Route("/{semestre}/export.{_format}", name="administration_rattrapage_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport             $myExport
     * @param RattrapageRepository $rattrapageRepository
     * @param Semestre             $semestre
     * @param                      $_format
     *
     * @return Response
     * @throws Exception
     */
    public function export(
        MyExport $myExport,
        RattrapageRepository $rattrapageRepository,
        Semestre $semestre,
        $_format
    ): Response {
        $rattrapages = $rattrapageRepository->findBySemestre($semestre, $semestre->getAnneeUniversitaire());

        return $myExport->genereFichierGenerique(
            $_format,
            $rattrapages,
            'rattrapages_' . $semestre->getLibelle(),
            ['rattrapage_administration', 'utilisateur', 'matiere'],
            [
                'etudiant'  => ['nom', 'prenom'],
                'dateEval',
                'heureEval',
                'duree',
                'matiere'   => ['libelle'],
                'personnel' => ['nom', 'prenom'],
                'dateRattrapage',
                'heureRattrapage',
                'salle',
                'etatDemande'
            ]
        );
    }

    /**
     * @Route("/change-etat/{uuid}/{etat}", name="administration_rattrapage_change_etat", methods="GET",
     *                                    requirements={"etat"="A|R"}, options={"expose":true})
     * @ParamConverter("rattrapage", options={"mapping": {"uuid": "uuid"}})
     * @param EventDispatcherInterface $eventDispatcher
     * @param Rattrapage               $rattrapage
     * @param                          $etat
     *
     * @return Response
     */
    public function accepte(EventDispatcherInterface $eventDispatcher, Rattrapage $rattrapage, $etat): Response
    {
        if ($etat === 'A' || $etat === 'R') {
            $rattrapage->setEtatDemande($etat);
            $this->entityManager->flush();

            $event = new RattrapageEvent($rattrapage);
            $eventDispatcher->dispatch($event, RattrapageEvent::DECISION);

            return new Response('', Response::HTTP_OK);
        }

        return new Response('', Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/{uuid}", name="administration_rattrapage_delete", methods="DELETE")
     * @param Request    $request
     * @param Rattrapage $rattrapage
     * @ParamConverter("rattrapage", options={"mapping": {"uuid": "uuid"}})
     *
     * @return Response
     */
    public function delete(Request $request, Rattrapage $rattrapage): Response
    {
        $id = $rattrapage->getUuidString();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($rattrapage);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'rattrapage.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'rattrapage.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
