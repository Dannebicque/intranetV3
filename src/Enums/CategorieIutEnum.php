<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Enums/CategorieIutEnum.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/08/2023 15:19
 */

namespace App\Enums;

enum CategorieIutEnum: string implements BadgeEnumInterface
{
    case PERMANENT = 'permanent';
    case VACATAIRE = 'vacataire';
    case ADMINISTRATIF = 'administratif';
    case AUTRE = 'autre';

    public static function getCategorieFromType(string $personnel_type): CategorieIutEnum
    {
        //méthode temporaire en attendant la bascule complète avec l'entitée
        return match ($personnel_type) {
            'ATER' => CategorieIutEnum::PERMANENT,
            'PRAG' => CategorieIutEnum::PERMANENT,
            'MCF' => CategorieIutEnum::PERMANENT,
            'PRCE' => CategorieIutEnum::PERMANENT,
            'contractuel' => CategorieIutEnum::PERMANENT,
            'vacataire' => CategorieIutEnum::VACATAIRE,
            'PRO' => CategorieIutEnum::VACATAIRE,
            'ASS' => CategorieIutEnum::ADMINISTRATIF,
            default => CategorieIutEnum::AUTRE,
        };
    }

    public function badge(): string
    {
        return match ($this) {
            self::VACATAIRE => 'info',
            self::ADMINISTRATIF => 'warning',
            self::PERMANENT => 'success',
            self::AUTRE => 'danger',
        };
    }
}
