<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Enums/CategorieIutEnum.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 08:31
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
            'ATER', 'PRAG', 'MCF', 'PRCE', 'contractuel' => self::PERMANENT,
            'vacataire', 'PRO' => self::VACATAIRE,
            'ASS' => self::ADMINISTRATIF,
            default => self::AUTRE,
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
