<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Pdf/PdfInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 30/03/2024 16:27
 */

namespace App\Classes\Pdf;

use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

interface PdfInterface
{
    public static function addOptions(string $key, string $value): void;

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public static function generePdf(string $template, array $data, string $name, array $options = []);

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public static function genereAndSavePdf(string $template, array $data, string $name, string $dir, array $options = []): string;

    public static function setFooter(array $data = []): void;

    /**
     * @throws SyntaxError
     * @throws RuntimeError
     * @throws LoaderError
     */
    public static function setFooterHtml(string $template, array $data = []): void;
}
