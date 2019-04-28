<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/Csv/Csv.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/28/19 8:46 PM
 *  * @lastUpdate 4/28/19 8:45 PM
 *  *
 *
 */

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 18/05/2018
 * Time: 12:06
 */

namespace App\MesClasses\Csv;

use DateTime;
use Doctrine\Common\Annotations\AnnotationException;
use Doctrine\Common\Annotations\AnnotationReader;
use InvalidArgumentException;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\Encoder\CsvEncoder;
use Symfony\Component\Serializer\Exception\RuntimeException;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
use Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader;
use Symfony\Component\Serializer\Normalizer\DataUriNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use UnexpectedValueException;

/**
 * Class Csv
 * @package App\MesClasses\Csv
 */
class Csv
{
    public const DELIMITER = ';';

    private $file;
    private $filename;

    /**
     * @param string $filename
     * @param array  $data
     * @param array  $groups
     *
     * @throws RuntimeException
     * @throws AnnotationException
     */
    public function export(string $filename, array $data, array $groups): void
    {
        $this->filename = $filename;

        //pour prendre en compte les annotations groups et maxdepth
        $classMetaDataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));

        //$serializer = new Serializer([new DateTimeNormalizer('d-m-Y')], [new CsvEncoder()]);
        $encoder = new CsvEncoder();
        $normalizer = new ObjectNormalizer($classMetaDataFactory);

        // Add Circular reference handler
        //a priori inutile si maxdepth suffisant
        /*$normalizer->setCircularReferenceHandler(function ($object) {
             return $object->getLibelle();
         });*/

        //callback pour gérer les dates
        /* $callback = function ($dateTime) {
             return $dateTime instanceof \DateTime
                 ? $dateTime->format(\DateTime::ATOM)
                 : '';
         };*/


        //$normalizer->setCallbacks(array('created' => $callback));
        //$normalizer->setCallbacks(array('updated' => $callback));

        $serializer = new Serializer(array(
            new DateTimeNormalizer(DateTime::ATOM),
            new DataUriNormalizer(),
            $normalizer
        ), array($encoder));

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
