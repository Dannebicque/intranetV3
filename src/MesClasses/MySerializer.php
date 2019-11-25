<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/MySerializer.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 14/07/2018
 * Time: 10:14
 */

namespace App\MesClasses;

use DateTime;
use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
use Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader;
use Symfony\Component\Serializer\Normalizer\DataUriNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class MySerializer
{
    public function serialize($data, $groups): string
    {
        //pour prendre en compte les annotations groups et maxdepth
        $classMetaDataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));

        $encoder = new JsonEncoder();
        $normalizer = new ObjectNormalizer($classMetaDataFactory);

        $serializer = new Serializer(array(
            new DateTimeNormalizer(DateTime::ATOM),
            new DataUriNormalizer(),
            $normalizer
        ), array($encoder));

        // encoding contents in JSON format
        return $serializer->serialize($data, 'json', ['enable_max_depth' => true, 'groups' => $groups]);
    }
}
