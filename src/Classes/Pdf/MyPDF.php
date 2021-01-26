<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Pdf/MyPDF.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 26/01/2021 15:40

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 26/07/2018
 * Time: 08:10
 */

namespace App\Classes\Pdf;

use DateTime;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;
use Knp\Snappy\Pdf;
use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

class MyPDF
{
    protected static array $options = [];

    protected static Environment $templating;

    private static Pdf $pdf;

    /**
     * MyPDF constructor.
     *
     * @param Environment $templating
     * @param Pdf         $pdf
     */
    public function __construct(Environment $templating, Pdf $pdf)
    {
        self::$templating = $templating;
        self::$pdf = $pdf;
    }

    /**
     * @param $key
     * @param $value
     */
    public static function addOptions($key, $value): void
    {
        self::$options[$key] = $value;
    }

    /**
     * @param $template
     * @param $data
     * @param $name
     * @param $departement
     *
     * @return PdfResponse
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public static function generePdf($template, $data, $name, $departement = null): PdfResponse
    {
        return self::genereOutputPdf($template, $data, $name, $departement);
    }

    /**
     * @param string      $template
     * @param array       $data
     * @param string      $name
     * @param string      $dir
     * @param string|null $departement
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public static function genereAndSavePdf(
        string $template,
        array $data,
        string $name,
        string $dir,
        string $departement = null
    ): void {
        $output = self::genereOutputPdf($template, $data, $name, $departement);

        file_put_contents($dir . $name . '.pdf', $output);
    }

    /**
     * @param $template
     * @param $data
     * @param $departement
     *
     * @return PdfResponse
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    private static function genereOutputPdf($template, $data, $name, $departement = null): PdfResponse
    {
        $html = self::$templating->render($template, $data);


        if ($departement !== null) {
            $date = new DateTime('now');
//            $canvas = self::$domPdf->getCanvas();
//            $canvas->page_text(500, 800, 'Page {PAGE_NUM} sur {PAGE_COUNT}', 'Arial', 10, [0, 0, 0]);
//            $canvas->page_text(43, 800, $departement . ' | ' . $date->format('d/m/Y') . '. Généré depuis l\'intranet',
//                'Arial', 10, [0, 0, 0]);
        }

        if (substr($name, -4) !== '.pdf') {
            $name .= '.pdf';
        }

        return new PdfResponse(
            self::$pdf->getOutputFromHtml($html, self::$options),
            $name
        );
    }
}
