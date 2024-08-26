<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/SourceEdt/Source/AbstractEdt.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/08/2024 09:20
 */

namespace App\Components\SourceEdt\Source;

use App\Classes\Edt\Calendrier;
use App\Classes\Matieres\TypeMatiereManager;
use App\DTO\EvenementEdtCollection;
use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Entity\Semestre;
use Carbon\Carbon;
use Carbon\CarbonInterface;
use Symfony\Contracts\Service\Attribute\Required;

abstract class AbstractEdt
{
    final public const SOURCE_EDT_INTRANET = 'intranet';
    final public const SOURCE_EDT_CELCAT = 'celcat';

    protected ?AnneeUniversitaire $anneeUniversitaire;
    protected TypeMatiereManager $typeMatiereManager;
    protected int $semaine;
    protected array $total = [];
    protected ?Calendrier $calendrier = null;
    protected Personnel|Etudiant $user;
    protected Semestre $semestre;
    protected array $matieres;
    protected array $groupes;
    protected mixed $filtre;
    protected mixed $valeur;
    protected ?EvenementEdtCollection $evenements;
    protected ?int $groupetd;
    protected ?int $groupetp;

    #[Required]
    public function setTypeMatiereManager(TypeMatiereManager $typeMatiereManager): void
    {
        $this->typeMatiereManager = $typeMatiereManager;
    }

    private function excluVacances(int $semaine): void
    {
        if ($semaine >= 29 && $semaine < 35) {
            $semaine = 35;
        }
        $this->semaine = $semaine;
    }

    protected function init(AnneeUniversitaire $anneeUniversitaire, string $filtre = '', string $valeur = '', int $semaine = 0): self
    {
        $dateDuJour = Carbon::now();
        $this->anneeUniversitaire = $anneeUniversitaire;
        $this->total['CM'] = 0;
        $this->total['TD'] = 0;
        $this->total['TP'] = 0;

        // todo: en doublons avec edt/Calendrier.php A supprimer plus utile ici
        if (0 === $semaine) {
            $semaine = $dateDuJour->weekOfYear;
            $this->excluVacances($semaine);

            // traitement du Week end
            if (CarbonInterface::SATURDAY === $dateDuJour->dayOfWeek || CarbonInterface::SUNDAY === $dateDuJour->dayOfWeek) {
                ++$this->semaine;
                if ($this->semaine > CarbonInterface::WEEKS_PER_YEAR) {
                    $this->semaine = 1;
                }
            }
        } else {
            $this->excluVacances($semaine);
        }

        if ('' === $filtre) {
            $this->filtre = Constantes::FILTRE_EDT_PROMO;
            // récupérer promo par défaut !
        } else {
            $this->filtre = $filtre;
        }

        if ('' === $valeur) {
            // todo: a refaire...
        } else {
            $this->valeur = $valeur;
        }

        return $this;
    }

    public function getEvenements(): EvenementEdtCollection
    {
        return $this->evenements;
    }

    private function getEvenementsAsArrayPromo(): array
    {
        return [];
    }
}
