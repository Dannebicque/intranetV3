<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Exporter/SourceIterator/DtoSourceIterator.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/07/2021 14:03
 */

namespace App\Classes\Exporter\SourceIterator;

use Carbon\CarbonInterface;
use DateInterval;
use DateTimeInterface;
use Symfony\Component\PropertyInfo\Extractor\PhpDocExtractor;
use Symfony\Component\PropertyInfo\Extractor\ReflectionExtractor;
use Symfony\Component\PropertyInfo\PropertyInfoExtractor;
use Traversable;

class DtoSourceIterator implements SourceInterface
{
    private const DATE_PARTS = [
        'y' => 'Y',
        'm' => 'M',
        'd' => 'D',
    ];
    private const TIME_PARTS = [
        'h' => 'H',
        'i' => 'M',
        's' => 'S',
    ];

    protected array $fields = [];
    protected array $datas = [];
    private $dateFormat = 'd/m/Y';
    private $timeFormat = 'H:i';

    private PropertyInfoExtractor $propertyInfo;
    private string $classType;

    public function __construct($datas, string $fqcn)
    {
        $this->classType = $fqcn;
        $phpDocExtractor = new PhpDocExtractor();
        $reflectionExtractor = new ReflectionExtractor();

        $listExtractors = [$reflectionExtractor];

        $typeExtractors = [$phpDocExtractor, $reflectionExtractor];
        $descriptionExtractors = [$phpDocExtractor];

        $this->propertyInfo = new PropertyInfoExtractor($listExtractors, $typeExtractors, $descriptionExtractors);
        $properties = $this->propertyInfo->getProperties($this->classType);
        $this->getHeader($properties);
        foreach ($datas as $data) {
            $this->prepareDatas($data);
        }
    }

    private function getHeader($datas)
    {
        foreach ($datas as $data) {
            if ('ne-pas-exporter' !== $this->propertyInfo->getShortDescription($this->classType, $data)) {
                $this->fields[$data] = $this->propertyInfo->getTypes($this->classType, $data);
            }
        }
    }

    private function prepareDatas(mixed $data)
    {
        $d = [];
        foreach ($data as $key => $value) {
            if (array_key_exists($key, $this->fields)) {
                $d[$key] = $this->getValue($value);
            }
        }


        $this->datas[] = $d;
    }

    private function getValue(mixed $value): ?string
    {
        switch (true) {
            case is_array($value):
                return '[' . implode(', ', array_map([$this, 'getValue'], $value)) . ']';
            case $value instanceof Traversable:
                return '[' . implode(', ', array_map([$this, 'getValue'], iterator_to_array($value))) . ']';
            case $value instanceof DateTimeInterface:
            case $value instanceof CarbonInterface:
                if ('01/01/1970' === $value->format($this->dateFormat) || '00/00/0000' === $value->format($this->dateFormat)) {
                    return $value->format($this->timeFormat);
                }

                return $value->format($this->dateFormat . ' ' . $this->timeFormat);
            case $value instanceof DateInterval:
                return $this->getDuration($value);
            case is_object($value):
                if (method_exists($value, '__toString')) {
                    return (string)$value;
                }
                if (method_exists($value, 'display')) {
                    return $value->display();
                }
                if (method_exists($value, 'getDisplay')) {
                    return $value->getDisplay();
                }

                return '-';
            case is_bool($value):
                return true === $value ? 'Oui' : 'Non';
            default:
                return $value;
        }
    }

    public function getDuration(DateInterval $interval): string
    {
        $datePart = '';
        foreach (self::DATE_PARTS as $datePartAttribute => $datePartAttributeString) {
            if ($interval->$datePartAttribute !== 0) {
                $datePart .= $interval->$datePartAttribute . $datePartAttributeString;
            }
        }

        $timePart = '';
        foreach (self::TIME_PARTS as $timePartAttribute => $timePartAttributeString) {
            if ($interval->$timePartAttribute !== 0) {
                $timePart .= $interval->$timePartAttribute . $timePartAttributeString;
            }
        }

        if ('' === $datePart && '' === $timePart) {
            return 'P0Y';
        }

        return 'P' . $datePart . ('' !== $timePart ? 'T' . $timePart : '');
    }

    public function toArray(): array
    {
        return [
            'fields' => $this->fields,
            'datas' => $this->datas,
        ];
    }

    public
    function getFields(): array
    {
        return $this->fields;
    }

    public
    function getDatas(): array
    {
        return $this->datas;
    }
}
