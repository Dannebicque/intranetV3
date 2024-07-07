<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Twig/Components/TrombinoscopeComponent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/07/2024 19:17
 */

namespace App\Twig\Components;

use App\Classes\DataUserSession;
use App\Classes\GetGroupeFromSemestre;
use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\Exception\DiplomeNotFoundException;
use App\Repository\EtudiantRepository;
use App\Repository\GroupeRepository;
use Doctrine\Common\Collections\Collection;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use Symfony\UX\TwigComponent\Attribute\PostMount;

#[AsLiveComponent('trombinoscope')]
class TrombinoscopeComponent extends AbstractController
{
    use DefaultActionTrait;

    #[LiveProp(writable: true)]
    public bool $separation = false;

    public ?Semestre $semestre = null;

    #[LiveProp(writable: true)]
    public ?TypeGroupe $typegroupe = null;

    #[LiveProp(writable: true)]
    public ?int $groupe = null;

    #[LiveProp(writable: true)]
    public string $recherche = '';

    /** @var TypeGroupe[] */
    public ?Collection $typeGroupes = null;

    /** @var Groupe[] */
    public $groupes = [];

    public function __construct(
        private DataUserSession    $dataUserSession,
        private EtudiantRepository $etudiantRepository,
        private GroupeRepository   $groupeRepository,
    )
    {
    }

    #[LiveAction]
    public function cleanFiltre(): void
    {
        $this->typegroupe = null;
        $this->groupe = null;
        $this->recherche = '';
    }

    #[PostMount]
    public function postMount(): void
    {
        $this->typeGroupes = $this->semestre->getTypeGroupess();
        foreach ($this->typeGroupes as $typeGroupe) {
            if (true === $typeGroupe->getDefaut()) {
                $this->typegroupe = $typeGroupe;
                $this->groupes = GetGroupeFromSemestre::GetGroupeFromSemestre($this->semestre, $this->typegroupe);
            }
        }
    }


    public function getElements(): array
    {
        if ($this->semestre === null) {
            return [];
        }
        if (null !== $this->semestre->getDiplome() && null !== $this->semestre->getDiplome()->getParent()) {
            $dip = $this->semestre->getDiplome()?->getParent();
        } else {
            $dip = $this->semestre->getDiplome();
        }

        if (null === $dip) {
            throw new DiplomeNotFoundException();
        }

        $this->groupes = null;
        if (null !== $this->typegroupe) {
            $this->groupes = GetGroupeFromSemestre::GetGroupeFromSemestre($this->semestre, $this->typegroupe);
        } else {
            foreach ($this->typeGroupes as $typeGroupe) {
                if (true === $typeGroupe->getDefaut()) {
                    $this->typegroupe = $typeGroupe;
                    $this->groupes = GetGroupeFromSemestre::GetGroupeFromSemestre($this->semestre, $this->typegroupe);
                }
            }
        }
        if (null !== $this->typegroupe) {
            $etudiants = $this->groupeRepository->getEtudiantsByGroupes($this->typegroupe);
        } else {
            $etudiants = [];
        }

        //todo: si semestre avec parcours, filtrer sur parcours également si pas de groupe


        return $etudiants;
    }
}
