<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Structure/DiplomeExport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/05/2021 20:35
 */

namespace App\Classes\Structure;

use App\Entity\Diplome;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Twig\Environment;

class DiplomeExport
{
    private Environment $twig;
    private ApogeeExport $apogeeExport;

    public function __construct(Environment $twig, ApogeeExport $apogeeExport)
    {
        $this->twig = $twig;
        $this->apogeeExport = $apogeeExport;
    }

    /**
     * @throws \Twig\Error\SyntaxError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\LoaderError
     */
    public function exportRefentiel(Diplome $diplome): Response
    {
        if (true === $diplome->getTypeDiplome()->getApc()) {
            $xmlContent = $this->twig->render('xml/export-referentiel-but.xml.twig', [
                'diplome' => $diplome,
                'competences' => $diplome->getApcComptences(),
                'parcours' => $diplome->getApcParcours(),
            ]);
            $name = 'but-'.$diplome->getSigle();
        } else {
            $xmlContent = $this->twig->render('xml/export-referentiel.xml.twig', [
            ]);
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
     * @throws \Twig\Error\SyntaxError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\LoaderError
     */
    public function exportProgramme(Diplome $diplome): Response
    {
        if (true === $diplome->getTypeDiplome()->getApc()) {
            $xmlContent = $this->twig->render('xml/export-programme-but.xml.twig', [
                'semestres' => $diplome->getSemestres(),
            ]);
            $name = 'but-pn-'.$diplome->getSigle();
        } else {
            $xmlContent = $this->twig->render('xml/export-programme.xml.twig', [
            ]);
            $name = 'ppn-'.$diplome->getSigle();
        }

        return $this->exportFichier($xmlContent, $name);
    }

    public function exportMaquetteApogee(Diplome $diplome): ?StreamedResponse
    {
        if (true === $diplome->getTypeDiplome()->getApc()) {
            $this->apogeeExport->setDiplome($diplome);
            $name = 'but-maquette-'.$diplome->getSigle().'.xlsx';

            return $this->apogeeExport->export($name);
        }

        return null;
    }
}
