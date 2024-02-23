<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/Transformer/CarbonToDateTimeTransformer.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:36
 */

namespace App\Form\Transformer;

use Carbon\Carbon;
use DateTime;
use DateTimeInterface;
use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Exception\UnexpectedTypeException;

class CarbonToDateTimeTransformer implements DataTransformerInterface
{
    public function transform($value): mixed
    {
        return $value; // No conversion required
    }

    public function reverseTransform($value): ?DateTimeInterface
    {
        if (null === $value) {
            return null;
        }

        if ($value instanceof DateTime) {
            return Carbon::instance($value);
        }

        throw new UnexpectedTypeException($value, 'The type of $value should be a DateTime or null.');
    }
}
