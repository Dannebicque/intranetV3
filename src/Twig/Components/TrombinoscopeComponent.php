<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Twig/Components/TrombinoscopeComponent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/06/2024 15:53
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
use App\Repository\SemestreRepository;
use Doctrine\Common\Collections\Collection;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent('trombinoscope')]
class TrombinoscopeComponent extends AbstractController
{
    use DefaultActionTrait;

    #[LiveProp(writable: true)]
    public bool $separation = false;

    #[LiveProp(writable: true, onUpdated: 'onSemestreUpdated')]
    public ?Semestre $semestre = null;

    #[LiveProp(writable: true)]
    public ?TypeGroupe $typegroupe = null;

    #[LiveProp(writable: true)]
    public ?int $groupe = null;

    #[LiveProp(writable: true)]
    public string $recherche = '';

    #[LiveProp(writable: true)]
    /** @var TypeGroupe[] */
    public ?Collection $typeGroupes = null;

    /** @var Groupe[] */
    #[LiveProp(writable: true)]
    public $groupes = [];

    public function __construct(
        private DataUserSession    $dataUserSession,
        private SemestreRepository $semestreRepository,
        private EtudiantRepository $etudiantRepository,
        private GroupeRepository   $groupeRepository,
    )
    {
    }

    public function getSemestres(): array
    {
        $semestres = [];
        foreach ($this->dataUserSession->getSemestresActifs() as $semestre) {
            if (!array_key_exists($semestre->getOrdreLmd(), $semestres)) {
                $semestres[$semestre->getOrdreLmd()] = [];
            }
            $semestres[$semestre->getOrdreLmd()][] = $semestre;
        }

        return $semestres;
    }

    #[LiveAction]
    public function cleanFiltre(): void
    {
        $this->semestre = null;
        $this->typegroupe = null;
        $this->groupe = null;
        $this->recherche = '';
    }

    public function getElements(): array
    {
        if ($this->semestre === null) {
            return [];
        }
        $this->typeGroupes = $this->semestre->getTypeGroupess();
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
