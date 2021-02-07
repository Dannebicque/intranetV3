<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Event/ProjetEvent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

namespace App\Event;

use App\Entity\ProjetEtudiant;
use Symfony\Contracts\EventDispatcher\Event;

class ProjetEvent extends Event
{
    public const CHGT_ETAT_PROJET_AUTORISE = 'chgt.etat_projet_autorise';
    public const CHGT_ETAT_PROJET_DEPOSE = 'chgt.etat_projet_depose';
    public const CHGT_ETAT_PROJET_VALIDE = 'chgt.etat_projet_valide';
    public const CHGT_ETAT_PROJET_IMPRIME = 'chgt.etat_projet_imprime';

    public const EQ_ETATS = [
        self::CHGT_ETAT_PROJET_AUTORISE => ProjetEtudiant::ETAT_PROJET_AUTORISE,
        self::CHGT_ETAT_PROJET_DEPOSE   => ProjetEtudiant::ETAT_PROJET_DEPOSE,
        self::CHGT_ETAT_PROJET_VALIDE   => ProjetEtudiant::ETAT_PROJET_VALIDE,
        self::CHGT_ETAT_PROJET_IMPRIME  => ProjetEtudiant::ETAT_PROJET_IMPRIME,
    ];

    /** @var ProjetEtudiant */
    protected $projetEtudiant;

    public function __construct(ProjetEtudiant $projetEtudiant)
    {
        $this->projetEtudiant = $projetEtudiant;
    }

    public function getProjetEtudiant(): ProjetEtudiant
    {
        return $this->projetEtudiant;
    }
}
