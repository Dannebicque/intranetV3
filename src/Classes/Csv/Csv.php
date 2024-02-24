<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Csv/Csv.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 09:27
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Csv;

use DateTimeInterface;
use InvalidArgumentException;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\Encoder\CsvEncoder;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
use Symfony\Component\Serializer\Mapping\Loader\AttributeLoader;
use Symfony\Component\Serializer\Normalizer\DataUriNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use UnexpectedValueException;

/**
 * Class Csv.
 */
class Csv
{
    final public const DELIMITER = ';';

    private string $file;
    private string$filename;

    public function export(string $filename, array $data, array $groups): void
    {
        $this->filename = $filename;

        // pour prendre en compte les annotations groups et maxdepth
        $classMetaDataFactory = new ClassMetadataFactory(new AttributeLoader());

        $encoder = new CsvEncoder();
        $normalizer = new ObjectNormalizer($classMetaDataFactory);

        $serializer = new Serializer([
            new DateTimeNormalizer([DateTimeInterface::ATOM]),
            new DataUriNormalizer(),
            $normalizer,
        ], [$encoder]);

        // encoding contents in CSV format
        $this->file = $serializer->serialize($data, 'csv', ['enable_max_depth' => true, 'groups' => $groups]);
    }

    /**
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
