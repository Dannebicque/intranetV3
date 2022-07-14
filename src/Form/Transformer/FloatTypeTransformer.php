<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/Transformer/FloatTypeTransformer.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/07/2022 14:55
 */

namespace App\Form\Transformer;

use App\Utils\Tools;
use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Exception\TransformationFailedException;

class FloatTypeTransformer implements DataTransformerInterface
{
    public function transform($value): mixed
    {
        return $value; // No conversion required
    }

    public function reverseTransform($value): mixed
    {
        $convert = Tools::convertToFloat($value);
        if (null === $convert) {
            $privateErrorMessage = sprintf('La valeur "%s" n\'est pas un nombre décimal!', $value);
            $publicErrorMessage = 'La valeur "{{ value }}"doit être une valeur entière ou décimale.';

            $failure = new TransformationFailedException($privateErrorMessage);
            $failure->setInvalidMessage($publicErrorMessage, [
                '{{ value }}' => $value,
            ]);

            throw $failure;
        }

        return $convert;
    }
}
