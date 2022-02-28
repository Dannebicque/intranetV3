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
    public const ONLY_DATE = 'date';
    public const ONLY_HEURE = 'heure';
    private array $options = [];

    public function serialize(array $data, array | string $groups): string
    {
        //pour prendre en compte les annotations groups et maxdepth
        $classMetaDataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));

        $encoder = new JsonEncoder();
        $normalizer = new ObjectNormalizer($classMetaDataFactory);

        $serializer = new Serializer([
            new DateTimeNormalizer(['datetime_format' => 'd/m/Y H:i']),
            new DataUriNormalizer(),
            $normalizer,
        ], [$encoder]);

        // encoding contents in JSON format
        return $serializer->serialize($data, 'json', ['enable_max_depth' => true, 'groups' => $groups]);
    }

    public function getDataFromSerialization(array $data, array $colonne, array $modele, array $options = [])
    {
        $this->options = $options;
        $dataArray = [];
        //serialize les data
        $dataJson = $this->serialize($data, $modele);

        $tabData = json_decode($dataJson, true);
        //header
        $i = 1;
        $ligne = 1;
        foreach ($colonne as $value) {
            if (is_array($value)) {
                foreach ($value as $col) {
                    if (is_array($col)) {
                        foreach ($col as $col2) {
                            if (is_array($col2)) {
                                foreach ($col2 as $col3) {
                                    $dataArray[$ligne][$i] = $col3;
                                    ++$i;
                                }
                            } else {
                                $dataArray[$ligne][$i] = $col2;
                                ++$i;
                            }
                        }
                    } else {
                        $dataArray[$ligne][$i] = $col;
                        ++$i;
                    }
                }
            } else {
                $dataArray[$ligne][$i] = $value;
                ++$i;
            }
        }
        $i = 1;
        ++$ligne;
        //data
        foreach ($tabData as $row) {
            foreach ($colonne as $key => $value) {
                if ((!is_array($value) && array_key_exists($value,
                            $row)) || (is_array($value) && array_key_exists($key,
                            $row))) {
                    if (is_array($value)) {
                        foreach ($value as $col) {
                            if (is_array($row[$key])) {
                                if (array_key_exists($col, $row[$key])) {
                                    $dataArray[$ligne][$i] = $this->transformValue($row[$key][$col], $key);
                                } else {
                                    $dataArray[$ligne][$i] = '-';
                                }
                            } else {
                                $dataArray[$ligne][$i] = '-';
                            }
                            ++$i;
                        }
                    } else {
                        $dataArray[$ligne][$i] = $this->transformValue($row[$value], $colonne[$key]);
                        ++$i;
                    }
                } else {
                    $dataArray[$ligne][$i] = '-';
                    ++$i;
                }
            }

            $i = 1;
            ++$ligne;
        }

        return $dataArray;
    }

    private function transformValue(?string $value, string $key): ?string
    {
        if (array_key_exists($key, $this->options)) {
            switch ($this->options[$key]) {
                case self::ONLY_DATE:
                    $t = explode(' ', $value);

                    return $t[0];
                case self::ONLY_HEURE:
                    $t = explode(' ', $value);

                    return 2 === count($t) ? $t[1] : 'err';
            }
        }

        return $value;
    }
}
