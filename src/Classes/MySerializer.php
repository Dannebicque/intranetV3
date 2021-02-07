<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MySerializer.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:26
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

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

        $serializer = new Serializer([
            new DateTimeNormalizer(),
            new DataUriNormalizer(),
            $normalizer,
        ], [$encoder]);

        // encoding contents in JSON format
        return $serializer->serialize($data, 'json', ['enable_max_depth' => true, 'groups' => $groups]);
    }
}
