<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/enquete/EnqueteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\superAdministration\enquete;

use App\Controller\BaseController;
use App\Table\EnqueteQualiteEtudiantsTableType;
use App\Table\EnqueteQualiteExterieursTableType;
use App\Table\EnqueteQualitePersonnelsTableType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/administratif/enquete')]
class EnqueteController extends BaseController
{
    /**
     * @throws \JsonException
     */
    #[Route('/{typeDestinataire}', name: 'administratif_enquete_destinataire_index', options: ['expose' => true])]
    public function indexEtudiant(
        Request $request,
        string $typeDestinataire
    ): Response {
        if ('etudiant' === $typeDestinataire) {
            $table = $this->createTable(EnqueteQualiteEtudiantsTableType::class, [
                'typeDestinataire' => $typeDestinataire,
                'effectifs' => [],
                'type' => 'administratif',
            ]);
        } elseif ('personnel' === $typeDestinataire) {
            $table = $this->createTable(EnqueteQualitePersonnelsTableType::class, [
                'typeDestinataire' => $typeDestinataire,
                'effectifs' => [],
                'type' => 'administratif',
            ]);
        } else {
            $table = $this->createTable(EnqueteQualiteExterieursTableType::class, [
                'typeDestinataire' => $typeDestinataire,
                'effectifs' => [],
                'type' => 'administratif',
            ]);
        }

        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('super-administration/enquete/index.html.twig', [
            'table' => $table,
            'typeDestinataire' => $typeDestinataire,
        ]);
    }
}
