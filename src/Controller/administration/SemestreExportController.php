<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/SemestreExportController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\administration;

use App\Classes\Etudiant\EtudiantExportReleve;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Scolarite;
use App\Entity\Semestre;
use App\Message\ExportReleve;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Routing\Attribute\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

/**
 * Class SemestreExportController.
 */
#[Route(path: '/administration/semestre/export')]
class SemestreExportController extends BaseController
{
    #[Route(path: '/all/{semestre}', name: 'administration_semestre_export_tous_les_releves_provisoires')]
    public function exportTousLesRelevesProvisoires(MessageBusInterface $messageBus, Semestre $semestre): RedirectResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_NOTE', $semestre);
        $messageBus->dispatch(new ExportReleve($semestre->getId(),
            $this->dataUserSession->getAnneeUniversitaire()->getId(), $this->getUser()->getId()));
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS,
            'La génération des documents est en cours. Vous recevrez un mail pour télécharger les éléments dans quelques minutes.');

        return $this->redirectToRoute('administration_notes_semestre_index', [
            'semestre' => $semestre->getId(),
        ]);
    }

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    #[Route(path: '/provisoire/{slug}/{semestre}', name: 'administration_semestre_export_releve_provisoire')]
    public function exportReleveProvisoire(EtudiantExportReleve $etudiantExportReleve, #[MapEntity(mapping: ['slug' => 'slug'])]
    Etudiant                                                    $etudiant, Semestre $semestre = null): PdfResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_NOTE', $semestre ?: $etudiant->getSemestre());
        $etudiantExportReleve->setEtudiant($etudiant);

        return $etudiantExportReleve->exportReleveProvisoire($semestre ?: $etudiant->getSemestre(),
            $etudiant->getAnneeUniversitaire());
    }

    #[Route(path: '/definitif/{slug}/{scolarite}', name: 'administration_semestre_export_releve_definitif')]
    public function exportReleveDefinitif(EtudiantExportReleve $etudiantExportReleve, #[MapEntity(mapping: ['slug' => 'slug'])]
    Etudiant                                                   $etudiant, Scolarite $scolarite): PdfResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_NOTE', $etudiant->getSemestre());
        $etudiantExportReleve->setEtudiant($etudiant);

        return $etudiantExportReleve->exportReleveDefinitif($scolarite);
    }
}
