<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Csv/Csv.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/08/2020 10:27

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 18/05/2018
 * Time: 12:06
 */

namespace App\Classes\Csv;

use DateTime;
use Doctrine\Common\Annotations\AnnotationReader;
use InvalidArgumentException;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\Encoder\CsvEncoder;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
use Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader;
use Symfony\Component\Serializer\Normalizer\DataUriNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use UnexpectedValueException;

/**
 * Class Csv
 * @package App\Classes\Csv
 */
class Csv
{
    public const DELIMITER = ';';

    private $file;
    private string$filename;

    /**
     * @param string $filename
     * @param array  $data
     * @param array  $groups
     *
     */
    public function export(string $filename, array $data, array $groups): void
    {
        $this->filename = $filename;

        //pour prendre en compte les annotations groups et maxdepth
        $classMetaDataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));

        $encoder = new CsvEncoder();
        $normalizer = new ObjectNormalizer($classMetaDataFactory);

        $serializer = new Serializer([
            new DateTimeNormalizer([DateTime::ATOM]),
            new DataUriNormalizer(),
            $normalizer
        ], array($encoder));

        // encoding contents in CSV format
        $this->file = $serializer->serialize($data, 'csv', ['enable_max_depth' => true, 'groups' => $groups]);
    }

    /**
     * @return Response
     * @throws UnexpectedValueException
     * @throws InvalidArgumentException
     */
    public function response(): Response
    {
        $response = new Response();
        $response->headers->set('Content-Disposition', sprintf('attachment; filename="%s"', $this->filename));
        $response->headers->set('Content-Type', 'text/csv');
        $response->setContent($this->file);

        return $response;
    }
}
