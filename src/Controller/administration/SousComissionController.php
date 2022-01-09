<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/SousComissionController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/10/2021 12:14
 */

namespace App\Controller\administration;

use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\SousCommission\SousCommission;
use App\Classes\SousCommission\SousCommissionExport;
use App\Classes\SousCommission\SousCommissionManager;
use App\Classes\SousCommission\SousCommissionSauvegarde;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Scolarite;
use App\Entity\ScolaritePromo;
use App\Entity\Semestre;
use App\Event\SousCommissionEvent;
use App\Repository\BacRepository;
use App\Repository\NoteRepository;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

/**
 * Class SousComissionController.
 */
#[Route(path: '/administration/sous-commission')]
class SousComissionController extends BaseController
{
    #[Route(path: '/live/{semestre}', name: 'administration_sous_commission_live')]
    public function live(BacRepository $bacRepository, SousCommissionManager $sousCommissionManager, Semestre $semestre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_NOTE', $semestre);
        $sousCommission = $sousCommissionManager->getSousCommission($semestre);
        $sousCommission->calcul($semestre, $this->getAnneeUniversitaire());
        $bacs = $bacRepository->findAll();

        return $this->render('administration/sous_commission/'.$sousCommission::TEMPLATE_LIVE, [
            'semestre' => $semestre,
            'sousCommission' => $sousCommission, //devrait etre un DTo?
            'bacs' => $bacs,
            'stats' => $sousCommission->calculStats($bacs),
        ]);
    }

    #[Route(path: '/travail/{semestre}', name: 'administration_sous_commission_travail')]
    public function travail(TypeMatiereManager $typeMatiereManager, SousCommissionManager $sousCommissionManager, SousCommissionSauvegarde $sousCommissionSauvegarde, Semestre $semestre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_NOTE', $semestre);
        $sousCommission = $sousCommissionManager->getSousCommission($semestre);
        $matieres = $typeMatiereManager->findBySemestre($semestre);
        $sousCommission->calcul($semestre, $this->dataUserSession->getAnneeUniversitaire());
        $sousCommissionTravail = $sousCommissionSauvegarde->sauvegardeTravail($sousCommission, $matieres);

        return $this->render('administration/sous_commission/'.$sousCommission::TEMPLATE_TRAVAIL, [
            'semestre' => $semestre,
            'sc' => $sousCommissionTravail,
        ]);
    }

    #[Route(path: '/purger/{scolaritePromo}', name: 'administration_sous_commission_purger')]
    public function purger(TypeMatiereManager $typeMatiereManager, NoteRepository $noteRepository, ScolaritePromo $scolaritePromo): Response
    {
        $semestre = $scolaritePromo->getSemestre();
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_NOTE', $semestre);
        if (null !== $semestre) {
            $matieres = $typeMatiereManager->findBySemestre($semestre);
            $notes = $noteRepository->findBySemestre($matieres, $scolaritePromo->getAnneeUniversitaire());

            foreach ($notes as $n) {
                if (-0.01 === $n->getNote()) {
                    $n->setNote(0);
                    $this->entityManager->persist($n);
                }
            }

            $em->flush();
            $this->addFlash(Constantes::FLASHBAG_SUCCESS, 'Notes -0.01 remplacées par 0');
        } else {
            $this->addFlash(Constantes::FLASHBAG_ERROR, 'Erreur lors du rempalcement des -0.01 par 0');
        }

        return $this->redirectToRoute('administration_sous_commission_travail', ['semestre' => $semestre->getId()]);
    }

    #[Route(path: '/recalculer/{ssComm}', name: 'administration_sous_commission_recalculer')]
    public function recalculer(SousCommissionSauvegarde $sousCommissionSauvegarde, ScolaritePromo $ssComm): Response
    {
        $semestre = $ssComm->getSemestre();
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_NOTE', $semestre);
        $sousCommissionSauvegarde->efface($ssComm);
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'scolarite.efface.et.recalculee.success.flash');

        return $this->redirectToRoute('administration_sous_commission_travail', ['semestre' => $semestre->getId()]);
    }

    #[Route(path: '/publier/{ssComm}', name: 'administration_sous_commission_publier')]
    public function publier(EventDispatcherInterface $eventDispatcher, SousCommissionSauvegarde $sousCommissionSauvegarde, ScolaritePromo $ssComm): Response
    {
        $semestre = $ssComm->getSemestre();
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_NOTE', $semestre);
        $sousCommissionSauvegarde->visibilite($ssComm, true);
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'scolarite.publiee.success.flash');
        $publication = new SousCommissionEvent($ssComm);
        $eventDispatcher->dispatch($publication);

        return $this->redirectToRoute('administration_sous_commission_travail', ['semestre' => $semestre->getId()]);
    }

    #[Route(path: '/depublier/{ssComm}', name: 'administration_sous_commission_depublier')]
    public function depublier(SousCommissionSauvegarde $sousCommissionSauvegarde, ScolaritePromo $ssComm): Response
    {
        $semestre = $ssComm->getSemestre();
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_NOTE', $semestre);
        $sousCommissionSauvegarde->visibilite($ssComm, false);
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'scolarite.depubliee.success.flash');

        return $this->redirectToRoute('administration_sous_commission_travail', ['semestre' => $semestre->getId()]);
    }

    /**
     * @throws Exception
     */
    #[Route(path: '/exporter/{semestre}', name: 'administration_sous_commission_exporter')]
    public function exporter(SousCommissionExport $sousCommission, Semestre $semestre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_NOTE', $semestre);
        if ($semestre->getDiplome()->getTypeDiplome()->getApc() === true) {
            return $sousCommission->exportApc($semestre, $this->dataUserSession->getAnneeUniversitaire());
        }
        return $sousCommission->export($semestre, $this->dataUserSession->getAnneeUniversitaire());
    }

    /**
     * @throws \App\Exception\SemestreNotFoundException
     */
    #[Route(path: '/grand-jury/{scolaritePromo}', name: 'administration_sous_commission_exporter_grand_jury')]
    public function grandJury(SousCommissionExport $sousCommissionExport, ScolaritePromo $scolaritePromo): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_NOTE', $scolaritePromo->getSemestre());

        return $sousCommissionExport->exportGrandJury($scolaritePromo, $this->dataUserSession->getAnneeUniversitaire());
    }

    #[Route(path: '/ajax/semestre/{id}/{type}', name: 'administration_ss_comm_ajax_edit', options: ['expose' => true])]
    public function ajaxEditSsComm(SousCommission $sousCommission, Request $request, Scolarite $scolarite, $type): JsonResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_NOTE', $sousCommission->getSemestre());
        $sousCommission->updateScolarite($scolarite,
            $type,
            $request->request->get('field'),
            $request->request->get('value'));

        return $this->json(true);
    }
}
