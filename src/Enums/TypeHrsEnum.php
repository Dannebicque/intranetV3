<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Enums/TypeHrsEnum.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 08:37
 */

namespace App\Enums;

enum TypeHrsEnum: string
{
    case TYPE_HRS_HRS = 'HRS';
    case TYPE_HRS_PCA = 'PCA';
    case TYPE_HRS_PRP = 'PRP';
    case TYPE_HRS_SUIVI = 'Suivi';
    case TYPE_HRS_AUTRE = 'Autre';

    public static function getChoices(): array
    {
        return [
            'choice.' . self::TYPE_HRS_HRS->value => self::TYPE_HRS_HRS,
            'choice.' . self::TYPE_HRS_PCA->value => self::TYPE_HRS_PCA,
            'choice.' . self::TYPE_HRS_PRP->value => self::TYPE_HRS_PRP,
            'choice.' . self::TYPE_HRS_SUIVI->value => self::TYPE_HRS_SUIVI,
            'choice.' . self::TYPE_HRS_AUTRE->value => self::TYPE_HRS_AUTRE,
        ];
    }

    public static function getTypes(): array
    {
        return [
            self::TYPE_HRS_HRS,
            self::TYPE_HRS_PCA,
            self::TYPE_HRS_PRP,
            self::TYPE_HRS_SUIVI,
            self::TYPE_HRS_AUTRE,
        ];
    }

    public function getMaxHeures(): float
    {
        return match ($this) {
            TypeHrsEnum::TYPE_HRS_HRS, TypeHrsEnum::TYPE_HRS_PCA, TypeHrsEnum::TYPE_HRS_PRP => 96,
            default => 0.0,
        };
    }
}
