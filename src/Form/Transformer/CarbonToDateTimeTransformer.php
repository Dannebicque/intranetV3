<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/Transformer/CarbonToDateTimeTransformer.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/06/2021 16:33
 */

namespace App\Form\Transformer;

use Carbon\Carbon;
use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Exception\UnexpectedTypeException;

class CarbonToDateTimeTransformer implements DataTransformerInterface
{
    public function transform($value)
    {
        return $value; // No conversion required
    }

    public function reverseTransform($value)
    {
        if (null === $value) {
            return null;
        }

        if ($value instanceof \DateTime) {
            return Carbon::instance($value);
        }

        throw new UnexpectedTypeException($value, 'The type of $value should be a DateTime or null.');
    }
}
