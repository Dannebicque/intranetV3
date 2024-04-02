<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Pdf/MyGotenbergPdf.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/04/2024 08:55
 */

namespace App\Classes\Pdf;

use App\Utils\Tools;
use Gotenberg\Gotenberg;
use Gotenberg\Stream;
use Psr\Http\Client\ClientInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Twig\Environment;

class MyGotenbergPdf implements PdfInterface
{
    protected static array $options;
    private static string $basePath;

    protected static Environment $twig;
    protected static ClientInterface $client;

    private static array $paperSizes = [
        'A4' => [8.3, 11.7],
        'A3' => [11.7, 16.5],
        'A2' => [16.5, 23.4],
    ];

    public function __construct(
        Environment     $twig,
        ClientInterface $client,
        KernelInterface $kernel
    )
    {
        self::$twig = $twig;
        self::$client = $client;
        self::$basePath = $kernel->getProjectDir() . '/public';
    }

    public static function generePdf(string $template, array $data, string $name, array $options = [])
    {
        $request = self::calculPdf($template, $data, $name, $options);
        $reponse = self::$client->sendRequest($request);

        return new Response($reponse->getBody()->getContents(), 200, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'attachment; filename="--' . $name . '.pdf"',
        ]);
    }

    private static function calculPdf(string $template, array $data = [], string $name = 'fichier', array $options = [])
    {
        $resolver = new OptionsResolver();
        self::configureOptions($resolver);
        self::$options = $resolver->resolve($options);
        $html = self::generateHtml($template, $data);
        $title = $data['titre'] ?? null;

        $request = Gotenberg::chromium('http://localhost:3000')
            ->pdf()
            ->emulatePrintMediaType()
            ->assets(
                Stream::path(self::$basePath . '/upload/logo/urca_petit.jpg'),
                Stream::path(self::$basePath . '/build/print.css'),
            )
            ->header(Stream::string('header.html', self::getHeader($title)))
            ->footer(Stream::string('footer.html', self::getFooter()))
            ->paperSize(self::$paperSizes[self::$options['paperSize']][0], self::$paperSizes[self::$options['paperSize']][1])
            ->margins(1, 1, 0.8, 0.8)
            ->outputFilename($name);

        if (self::$options['landscape']) {
            $request->landscape();
        }

        return $request->html(Stream::string('fichier.html', $html));
    }

    public static function genereAndSavePdf(string $template, array $data, string $name, string $dir, array $options = []): string
    {
        $request = self::calculPdf($template, $data, $name, $options);

        $filename = Gotenberg::save($request, self::$basePath . '/' . $dir, self::$client);

        return $filename;
    }

    private static function generateHtml(string $template, array $context = [])
    {
        $context = array_merge($context, ['baseUrl' => self::$options['baseUrl']]);


        return self::$twig->render($template, $context);
    }

    public static function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'isRemoteEnabled' => true,
            'attachment' => true,
            'baseUrl' => self::$basePath,
            'landscape' => false,
            'paperSize' => 'A4',
        ]);
    }

    private static function valideName(string $name): string
    {
        if (false === strpos($name, '.pdf')) {
            $name .= '.pdf';
        }

        return Tools::FileName($name);
    }

    private static function getHeader(?string $titre = null): string
    {
        $imageData = file_get_contents(self::$options['baseUrl'] . '/upload/logo/urca_petit.jpg');
        $base64Image = base64_encode($imageData);
        return self::$twig->render('pdf/header.html.twig', [
            'baseUrl' => self::$options['baseUrl'],
            'titre' => $titre,
            'image' => $base64Image
        ]);
    }

    private static function getFooter(): string
    {
        return self::$twig->render('pdf/footer.html.twig', [
            'baseUrl' => self::$options['baseUrl'],
        ]);
    }

    public static function addOptions(string $key, string $value): void
    {
        self::$options[$key] = $value;
    }

    public static function setFooter(array $data = []): void
    {
        // TODO: Implement setFooter() method.
    }

    public static function setFooterHtml(string $template, array $data = []): void
    {
        // TODO: Implement setFooterHtml() method.
    }
}
