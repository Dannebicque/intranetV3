<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/MySerializer.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 09:27
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
use Symfony\Component\Serializer\Mapping\Loader\AttributeLoader;
use Symfony\Component\Serializer\Normalizer\DataUriNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class MySerializer
{
    final public const ONLY_DATE = 'date';
    final public const ONLY_TIME = 'heure';
    final public const YES_NO = 'yes_no';
    private array $options = [];

    public function serialize(array|Collection $data, array|string $groups): string
    {
        // pour prendre en compte les annotations groups et maxdepth
        $classMetaDataFactory = new ClassMetadataFactory(new AttributeLoader());

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

    public function getDataFromSerialization(array|Collection $data, array $colonne, array $modele, array $options = []): array
    {
        $this->options = $options;
        $dataArray = [];
        // serialize les data
        $dataJson = $this->serialize($data, $modele);

        $tabData = json_decode($dataJson, true, 512, JSON_THROW_ON_ERROR);
        // header
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
        // data : todo: 3 niveaux possible... comment généraliser ?
        foreach ($tabData as $row) {
            foreach ($colonne as $key => $value) {
                if ((!is_array($value) && array_key_exists($value,
                            $row)) || (is_array($value) && array_key_exists($key,
                            $row))) {
                    if (is_array($value)) {
                        foreach ($value as $key2 => $col) {
                            if (is_array($row[$key])) {
                                if (is_array($col)) {
                                    foreach ($col as $col2) {
                                        if (array_key_exists($col2, $row[$key][$key2])) {
                                            $dataArray[$ligne][$i] = $this->transformValue($row[$key][$key2][$col2], $key2);
                                        } else {
                                            $dataArray[$ligne][$i] = '-';
                                        }
                                        ++$i;
                                    }
                                }
                                else if (array_key_exists($col, $row[$key])) {
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
                        $dataArray[$ligne][$i] = $this->transformValue($row[$value], $value);
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

    // todo: traiter le cas d'une collection ? Exemple des dates avec semestres ?
    private function transformValue(?string $value, string $key): ?string
    {
        if (array_key_exists($key, $this->options)) {
            switch ($this->options[$key]) {
                case self::ONLY_DATE:
                    $t = explode(' ', (string) $value);

                    return $t[0];
                case self::ONLY_TIME:
                    $t = explode(' ', (string) $value);

                    return 2 === count($t) ? $t[1] : 'err';
                case self::YES_NO:
                    return $value ? 'Oui' : 'Non';
            }
        }

        return $value;
    }
}
