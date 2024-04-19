<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Enums/TypeMatiereEnum.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/04/2024 10:44
 */

namespace App\Enums;

enum TypeMatiereEnum: string implements BadgeEnumInterface
{
    case TYPE_MATIERE_SAE = 'sae';
    case TYPE_MATIERE_RESSOURCE = 'ressource';
    case TYPE_MATIERE_MATIERE = 'matiere';

    public static function getChoices(): array
    {
        return [
            'choice.' . self::TYPE_MATIERE_SAE->value => self::TYPE_MATIERE_SAE,
            'choice.' . self::TYPE_MATIERE_RESSOURCE->value => self::TYPE_MATIERE_RESSOURCE,
            'choice.' . self::TYPE_MATIERE_MATIERE->value => self::TYPE_MATIERE_MATIERE,
        ];
    }

    public static function getTypes(): array
    {
        return [
            self::TYPE_MATIERE_SAE,
            self::TYPE_MATIERE_RESSOURCE,
            self::TYPE_MATIERE_MATIERE,
        ];
    }

    public function badge(): string
    {
        return match ($this) {
            self::TYPE_MATIERE_SAE => 'primary',
            self::TYPE_MATIERE_RESSOURCE => 'secondary',
            self::TYPE_MATIERE_MATIERE => 'success',
            default => 'primary',
        };
    }

    public function getLibelle(): string
    {
        return match ($this) {
            self::TYPE_MATIERE_SAE => 'SAE',
            self::TYPE_MATIERE_RESSOURCE => 'Ressource',
            self::TYPE_MATIERE_MATIERE => 'Matière',
            default => 'Inconnu',
        };
    }
}
