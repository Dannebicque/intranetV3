<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/SemestreExportController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/10/2021 12:14
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
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

/**
 * Class SemestreExportController.
 *
 * @Route("/administration/semestre/export")
 */
class SemestreExportController extends BaseController
{
    /**
     * @Route("/all/{semestre}", name="administration_semestre_export_tous_les_releves_provisoires")
     */
    public function exportTousLesRelevesProvisoires(
        Semestre $semestre
    ): RedirectResponse {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_NOTE', $semestre);

        $this->dispatchMessage(new ExportReleve($semestre->getId(),
            $this->dataUserSession->getAnneeUniversitaire()->getId(), $this->getConnectedUser()->getId()));
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS,
            'La génération des documents est en cours. Vous recevrez un mail pour télécharger les éléments dans quelques minutes.');

        return $this->redirectToRoute('administration_notes_semestre_index', [
            'semestre' => $semestre->getId(),
        ]);
    }

    /**
     * @Route("/provisoire/{slug}/{semestre}", name="administration_semestre_export_releve_provisoire")
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     */
    public function exportReleveProvisoire(
        EtudiantExportReleve $etudiantExportReleve,
        Etudiant $etudiant,
        Semestre $semestre = null
    ): PdfResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_NOTE', $semestre ?: $etudiant->getSemestre());

        $etudiantExportReleve->setEtudiant($etudiant);

        return $etudiantExportReleve->exportReleveProvisoire($semestre ?: $etudiant->getSemestre(),
            $etudiant->getAnneeUniversitaire());
    }

    /**
     * @Route("/definitif/{slug}/{scolarite}", name="administration_semestre_export_releve_definitif")
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     */
    public function exportReleveDefinitif(
        EtudiantExportReleve $etudiantExportReleve,
        Etudiant $etudiant,
        Scolarite $scolarite
    ) {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_NOTE', $etudiant->getSemestre());
        $etudiantExportReleve->setEtudiant($etudiant);
        $etudiantExportReleve->exportReleveDefinitif($scolarite);
    }
}
