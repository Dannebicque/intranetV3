<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Structure/DiplomeExport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Classes\Structure;

use App\Entity\Diplome;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

readonly class DiplomeExport
{
    public function __construct(private Environment $twig, private ApogeeExport $apogeeExport)
    {
    }

    /**
     * @throws SyntaxError
     * @throws RuntimeError
     * @throws LoaderError
     */
    public function exportRefentiel(Diplome $diplome): Response
    {
        if (true === $diplome->isApc()) {
            $xmlContent = $this->twig->render('xml/export-referentiel-but.xml.twig', [
                'diplome' => $diplome,
                'competences' => $diplome->getReferentiel()?->getApcComptences(),
                'parcours' => $diplome->getReferentiel()?->getApcParcours(),
            ]);
            $name = 'but-'.$diplome->getSigle();
        } else {
            $xmlContent = $this->twig->render('xml/export-referentiel.xml.twig');
            $name = 'structure-'.$diplome->getSigle();
        }

        return $this->exportFichier($xmlContent, $name);
    }

    public function exportFichier(string $xmlContent, string $name): Response
    {
        $response = new Response($xmlContent);
        $response->headers->set('Content-type', 'text/xml');
        $response->headers->set('Content-Disposition', 'attachment;filename="'.$name.'.xml"');

        return $response;
    }

    /**
     * @throws SyntaxError
     * @throws RuntimeError
     * @throws LoaderError
     */
    public function exportProgramme(Diplome $diplome): Response
    {
        if (true === $diplome->isApc()) {
            $xmlContent = $this->twig->render('xml/export-programme-but.xml.twig', [
                'semestres' => $diplome->getSemestres(),
            ]);
            $name = 'but-pn-'.$diplome->getSigle();
        } else {
            $xmlContent = $this->twig->render('xml/export-programme.xml.twig');
            $name = 'ppn-'.$diplome->getSigle();
        }

        return $this->exportFichier($xmlContent, $name);
    }

    public function exportMaquetteApogee(Diplome $diplome): ?StreamedResponse
    {
        if (true === $diplome->isApc()) {
            $this->apogeeExport->setDiplome($diplome);
            $name = 'but-maquette-'.$diplome->getSigle().'.xlsx';

            return $this->apogeeExport->export($name);
        }

        return null;
    }
}
