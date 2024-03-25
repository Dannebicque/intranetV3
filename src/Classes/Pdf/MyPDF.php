<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Pdf/MyPDF.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:40
 */

namespace App\Classes\Pdf;

use App\Utils\Tools;
use Carbon\Carbon;
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
     */
    public function __construct(Environment $templating, Pdf $pdf)
    {
        self::$templating = $templating;
        self::$pdf = $pdf;
        self::$options['enable-local-file-access'] = true; // https://yusufbiberoglu.medium.com/symfony-5-knpsnappybundle-wkhtmltopdf-setup-and-example-with-an-explanation-of-possible-errors-a890dbca238a

        $date = Carbon::now();

        self::setFooter([
            'footer-left' => "Document généré depuis l'intranet le ".$date->format('d/m/Y H:i').'.',
            'footer-right' => '[page] / [topage]',
            'footer-center' => '',
        ]);
    }

    public static function addOptions(string $key, string $value): void
    {
        // options disponibles : https://wkhtmltopdf.org/usage/wkhtmltopdf.txt
        self::$options[$key] = $value;
    }

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public static function generePdf(string $template, array $data, string $name): PdfResponse
    {
        return self::genereOutputPdf($template, $data, $name);
    }

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public static function genereAndSavePdf(
        string $template,
        array $data,
        string $name,
        string $dir
    ): void {
        $output = self::genereOutputPdf($template, $data, $name);

        file_put_contents($dir.Tools::slug($name).'.pdf', $output);
    }

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    private static function genereOutputPdf(string $template, array $data, string $name): PdfResponse
    {
        $name = Tools::slug($name);

        $html = self::$templating->render($template, $data);

        if ('.pdf' !== mb_substr($name, -4)) {
            $name .= '.pdf';
        }

        return new PdfResponse(
            self::$pdf->getOutputFromHtml($html, self::$options),
            $name
        );
    }

    public static function setFooter(array $data = []): void
    {
        foreach ($data as $key => $d) {
            self::addOptions($key, $d);
        }
    }

    /**
     * @throws SyntaxError
     * @throws RuntimeError
     * @throws LoaderError
     */
    public static function setFooterHtml(string $template, array $data = []): void
    {
        self::addOptions('footer-html', self::$templating->render($template, $data));
    }
}
