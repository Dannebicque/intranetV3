<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/RattrapageController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/05/2021 14:32
 */

namespace App\Controller\administration;

use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\MyExport;
use App\Controller\BaseController;
use App\DataTable\RattrapageTableType;
use App\Entity\Constantes;
use App\Entity\Rattrapage;
use App\Entity\Semestre;
use App\Event\RattrapageEvent;
use App\Repository\AbsenceRepository;
use App\Repository\RattrapageRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

/**
 * Class RattrapageController.
 *
 * @Route("/administration/rattrapage")
 */
class RattrapageController extends BaseController
{
    /**
     * @Route("/semestre/{semestre}", name="administration_rattrapage_semestre_index")
     */
    public function index(
        Request $request,
        AbsenceRepository $absenceRepository,
        Semestre $semestre
    ): Response {
        $table = $this->createTable(RattrapageTableType::class, [
            'semestre' => $semestre,
            'anneeUniversitaire' => $semestre->getAnneeUniversitaire(),
            'absences' => $absenceRepository->findBySemestreRattrapage($semestre,
                $semestre->getAnneeUniversitaire())
        ]);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('administration/rattrapage/index.html.twig', [
            'semestre' => $semestre,
            'table' => $table,
        ]);
    }

    /**
     * @Route("/{semestre}/export.{_format}", name="administration_rattrapage_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     */
    public function export(
        TypeMatiereManager $typeMatiereManager,
        MyExport $myExport,
        RattrapageRepository $rattrapageRepository,
        Semestre $semestre,
        string $_format
    ): Response {
        $rattrapages = $rattrapageRepository->findBySemestre($semestre, $semestre->getAnneeUniversitaire());
        $matieres = $typeMatiereManager->findBySemestreArray($semestre);
        $tab = [];
        foreach ($rattrapages as $rattrapage) {
            if (array_key_exists($rattrapage->getTypeIdMatiere(),
                    $matieres) && $matieres[$rattrapage->getTypeIdMatiere()]->semestre->getId() === $semestre->getId()) {
                $rattrapage->setLibelleMatiere($matieres[$rattrapage->getTypeIdMatiere()]->display);
                $tab[] = $rattrapage;
            }
        }

        return $myExport->genereFichierGenerique(
            $_format,
            $tab,
            'rattrapages_' . $semestre->getLibelle(),
            ['rattrapage_administration', 'utilisateur', 'matiere'],
            [
                'etudiant' => ['nom', 'prenom'],
                'dateEval',
                'heureEval',
                'duree',
                'libelleMatiere',
                'personnel' => ['nom', 'prenom'],
                'dateRattrapage',
                'heureRattrapage',
                'salle',
                'etatDemandeLong',
            ]
        );
    }

    /**
     * @Route("/change-etat/{uuid}/{etat}", name="administration_rattrapage_change_etat", methods="GET",
     *                                     options={"expose":true})
     * @ParamConverter("rattrapage", options={"mapping": {"uuid": "uuid"}})
     */
    public function accepte(EventDispatcherInterface $eventDispatcher, Rattrapage $rattrapage, $etat): Response
    {
        if (Rattrapage::DEMANDE_ACCEPTEE === $etat || Rattrapage::DEMANDE_REFUSEE === $etat) {
            $rattrapage->setEtatDemande($etat);
            $this->entityManager->flush();

            $event = new RattrapageEvent($rattrapage);
            $eventDispatcher->dispatch($event, RattrapageEvent::DECISION);

            return new Response('', Response::HTTP_OK);
        }

        return new Response('', Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/supprimer-annee/{semestre}", name="administration_rattrapage_delete_all", methods="DELETE")
     */
    public function deleteAllAnnee(RattrapageRepository $rattrapageRepository, Semestre $semestre): Response
    {
        $rattrapages = $rattrapageRepository->findByAnnee($semestre->getAnnee());
        foreach ($rattrapages as $rattrapage) {
            $this->entityManager->remove($rattrapage);
        }
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'rattrapage_all.delete.success.flash');

        return $this->json([
            'redirect' => true,
            'url' => $this->generateUrl('administration_rattrapage_semestre_index',
                ['semestre' => $semestre->getId()]),
        ]);
    }

    /**
     * @Route("/{uuid}", name="administration_rattrapage_delete", methods="DELETE", options={"expose"=true})
     * @ParamConverter("rattrapage", options={"mapping": {"uuid": "uuid"}})
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
