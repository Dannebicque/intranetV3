<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 26/07/2018
 * Time: 08:10
 */

namespace App\MesClasses\Pdf;

use DateTime;
use Dompdf\Dompdf;
use Dompdf\Options;
use Twig\Environment;

class MyPDF
{
    /** @var Dompdf */
    protected static $domPdf;

    protected static $options;

    /** @var Environment */
    protected static $templating;

    /**
     * MyPDF constructor.
     *
     * @param Environment $templating
     */
    public function __construct(Environment $templating)
    {
        self::$templating = $templating;
        self::$options = new Options();

        self::$options->set('isRemoteEnabled', true);
        self::$options->set('isPhpEnabled', true);
        self::$options->set('defaultPaperSize', 'A4');
    }

    /**
     * @param array $options
     */
    public static function addOptions(array $options):void
    {
    }

    /**
     * @param $template
     * @param $data
     * @param $name
     * @param $departement
     *
     * @throws \Twig\Error\LoaderError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     */
    public static function generePdf($template, $data, $name, $departement):void
    {
        $html = self::$templating->render($template, $data);

        self::$domPdf = new Dompdf(self::$options);
        self::$domPdf->loadHtml($html);
        self::$domPdf->render();

        $date = new DateTime('now');
        $canvas = self::$domPdf->getCanvas();
        $canvas->page_text(500, 800, 'Page {PAGE_NUM} sur {PAGE_COUNT}', 'Arial', 10, array(0, 0, 0));
        $canvas->page_text(43, 800, $departement. ' | '.$date->format('d/m/Y').'. Généré depuis l\'intranet', 'Arial', 10, array(0,0,0));

        self::$domPdf->stream($name, array('Attachment' => 1));
    }
}
