<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Twig/Components/PersonnelMesCoursComponent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/06/2024 23:01
 */

namespace App\Twig\Components;

use App\Classes\Previsionnel\PrevisionnelManager;
use App\DTO\Previsionnel;
use App\Entity\Departement;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Repository\SemestreRepository;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use Symfony\UX\TwigComponent\Attribute\PostMount;

#[AsLiveComponent('personnel_mes_cours', csrf: false)]
class PersonnelMesCoursComponent
{
    use DefaultActionTrait;

    #[LiveProp(writable: true)]
    public ?Semestre $semestre = null;

    #[LiveProp(writable: true)]
    public ?Personnel $user = null;

    #[LiveProp(writable: true)]
    public ?Departement $departement = null;

    #[LiveProp(writable: true)]
    public ?int $idsemestre = null;

    /** @var Previsionnel[] */
    public array $previsionnels = [];

    public function __construct(
        protected SemestreRepository  $semestreRepository,
        protected PrevisionnelManager $myPrevisionnel,
    )
    {
    }


    #[PostMount]
    public function getPrevisionnelEnseignant(): void
    {
        $previs = $this->myPrevisionnel->getPrevisionnelPersonnelDepartementAnneeCollection(
            $this->user,
            $this->departement,
            $this->user?->getAnneeUniversitaire()?->getAnnee() ?? (int)date('Y')
        );

        $this->previsionnels = [];

        // filtre le tableau pour n'avoir qu'une seule fois les éléments
        foreach ($previs->previsionnels as $prev) {
            $this->previsionnels[$prev->getTypeIdMatiere()] = $prev;
        }
    }

    public function getPrevisionnelSemestre(): void
    {
        $previs = $this->myPrevisionnel->getPrevisionnelPersonnelSemestre(
            $this->user,
            $this->semestre,
            $this->user?->getAnneeUniversitaire()?->getAnnee() ?? (int)date('Y')

        );

        $this->previsionnels = [];

        // filtre le tableau pour n'avoir qu'une seule fois les éléments
        foreach ($previs as $prev) {
            $this->previsionnels[$prev->getTypeIdMatiere()] = $prev;
        }
    }
}
