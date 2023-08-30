<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Twig/MessagerieExtension.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/07/2023 16:35
 */

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class MessagerieExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            new TwigFilter('badgeTypeMessage', $this->badgeTypeMessage(...), ['is_safe' => ['html']]),
        ];
    }

    public function badgeTypeMessage(string $type): string
    {
        switch ($type) {
            case 'e':
                $badge = 'bg-primary';
                $texte = 'Etudiant(s)';
                break;
            case 's':
                $badge = 'bg-success';
                $texte = 'Semestre(s)';
                break;
            case 'g':
                $badge = 'bg-warning';
                $texte = 'Groupe(s)';
                break;
            case 'm':
                $badge = 'bg-info';
                $texte = 'Matière(s)/SAÉ/Ressource(s)';
                break;
            case 'p':
                $badge = 'bg-purple';
                $texte = 'Enseignant(s)/Intervenant(s)';
                break;
            default:
                $badge = 'bg-danger';
                $texte = 'Erreur';
                break;
        }

        return '<span class="badge ' . $badge . '">' . $texte . '</span>';
    }
}
