<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyAlternanceFicheSuivi.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 09/07/2020 11:28

namespace App\Classes;


use App\Entity\AlternanceFicheSuivi;
use Dompdf\Dompdf;
use Dompdf\Options;
use Symfony\Component\HttpFoundation\Response;

class MyAlternanceFicheSuivi
{
    public function print(AlternanceFicheSuivi $alternanceFicheSuivi): Response
    {
        $html = $this->renderView('pdf/ficheSuiviAlternant.html.twig', [
            'alternance_fiche_suivi' => $alternanceFicheSuivi,
        ]);

        $options = new Options();
        $options->set('isRemoteEnabled', true);
        $options->set('isPhpEnabled', true);

        $dompdf = new Dompdf($options);
        $dompdf->loadHtml($html);
        $dompdf->render();

        return new Response($dompdf->stream('Fiche-suivi-alternant-' . $alternanceFicheSuivi->getAlternance()->getEtudiant()->getNom() . '-' . $alternanceFicheSuivi->getDate()->format('dmY'),
            ['Attachment' => 1]));
    }
}
