<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Event/ProjetEvent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 09:46
 */

namespace App\Event;

use App\Entity\ProjetEtudiant;
use Symfony\Contracts\EventDispatcher\Event;

class ProjetEvent extends Event
{
    final public const CHGT_ETAT_PROJET_AUTORISE = 'chgt.etat_projet_autorise';
    final public const CHGT_ETAT_PROJET_DEPOSE = 'chgt.etat_projet_depose';
    final public const CHGT_ETAT_PROJET_VALIDE = 'chgt.etat_projet_valide';
    final public const CHGT_ETAT_PROJET_IMPRIME = 'chgt.etat_projet_imprime';

    final public const EQ_ETATS = [
        self::CHGT_ETAT_PROJET_AUTORISE => ProjetEtudiant::ETAT_PROJET_AUTORISE,
        self::CHGT_ETAT_PROJET_DEPOSE => ProjetEtudiant::ETAT_PROJET_DEPOSE,
        self::CHGT_ETAT_PROJET_VALIDE => ProjetEtudiant::ETAT_PROJET_VALIDE,
        self::CHGT_ETAT_PROJET_IMPRIME => ProjetEtudiant::ETAT_PROJET_IMPRIME,
    ];

    public function __construct(protected ProjetEtudiant $projetEtudiant)
    {
    }

    public function getProjetEtudiant(): ProjetEtudiant
    {
        return $this->projetEtudiant;
    }
}
