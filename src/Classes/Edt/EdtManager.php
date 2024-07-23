<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Edt/EdtManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/04/2024 18:06
 */

namespace App\Classes\Edt;

use App\Components\SourceEdt\Source\EdtCelcat;
use App\Components\SourceEdt\Source\EdtInterface;
use App\Components\SourceEdt\Source\EdtIntranet;
use App\Components\SourceEdt\SourceEdtRegistry;
use App\DTO\EvenementEdt;
use App\DTO\EvenementEdtCollection;
use App\Entity\AnneeUniversitaire;
use App\Entity\Groupe;
use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Entity\Salle;
use App\Entity\Semestre;
use App\Enums\TypeGroupeEnum;
use App\Repository\EdtCelcatRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\GroupeRepository;
use App\Repository\MatiereRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SalleRepository;
use App\Repository\SemestreRepository;
use Symfony\Component\Security\Core\User\UserInterface;

class EdtManager
{
    final public const EDT_CELCAT = 'celcat';
    final public const EDT_INTRANET = 'intranet';
    protected string $source;

    private array $tabSources;

    public function __construct(
        private readonly EdtIntranet           $edtIntranet,
        private readonly EdtCelcat             $edtCelcat,
        private readonly SourceEdtRegistry     $sourceEdtRegistry,
        private readonly EdtPlanningRepository $edtPlanningRepository,
        private readonly EdtCelcatRepository   $edtCelcatRepository,
        private readonly SemestreRepository    $semestreRepository,
        private readonly GroupeRepository      $groupeRepository,
        private readonly PersonnelRepository   $personnelRepository,
        private readonly SalleRepository       $salleRepository,
        private readonly MatiereRepository     $matiereRepository,
    )
    {
        $this->tabSources = $this->sourceEdtRegistry->getSourcesEdt();
    }

    public function getPlanningSemestre(
        Semestre           $semestre,
        array              $matieres,
        AnneeUniversitaire $anneeUniversitaire,
        array              $groupes
    ): ?EvenementEdtCollection
    {
        switch ($this->getSourceEdt($semestre)) {
            case self::EDT_CELCAT:
                $this->source = self::EDT_CELCAT;

                return $this->edtCelcat->getPlanningSemestre($semestre, $matieres, $anneeUniversitaire, $groupes);
            case self::EDT_INTRANET:
                $this->source = self::EDT_INTRANET;

                return $this->edtIntranet->getPlanningSemestre($semestre, $matieres, $anneeUniversitaire, $groupes);
            default:
                return null;
        }
    }

    public function getPlanningPersonnelSemaine(
        Personnel          $personnel,
        int                $semaine,
        AnneeUniversitaire $anneeUniversitaire,
        array              $matieres,
        array              $groupes
    ): ?array
    {
        foreach ($this->tabSources as $source) {
            $planning[] = $source->getPlanningPersonnelSemaine($personnel, $semaine, $anneeUniversitaire, $matieres, $groupes);
        }

        return array_merge(...$planning);

    }

    public function getPlanningSemestreSemaine(
        Semestre           $semestre,
        int                $semaine,
        AnneeUniversitaire $anneeUniversitaire,
        array              $matieres,
        array              $groupes
    ): ?EvenementEdtCollection
    {
        switch ($this->getSourceEdt($semestre)) {
            case self::EDT_CELCAT:
                $this->source = self::EDT_CELCAT;

                return $this->edtCelcat->getPlanningSemestreSemaine($semestre, $semaine, $anneeUniversitaire, $matieres, $groupes);
            case self::EDT_INTRANET:
                $this->source = self::EDT_INTRANET;

                return $this->edtIntranet->getPlanningSemestreSemaine($semestre, $semaine, $anneeUniversitaire, $matieres, $groupes);
            default:
                return null;
        }
    }

    public function getPlanningEduSign(Semestre           $semestre,
                                       array              $matieres,
                                       AnneeUniversitaire $anneeUniversitaire,
                                       array              $groupes): ?EvenementEdtCollection
    {
        switch ($this->getSourceEdt($semestre)) {
            case self::EDT_CELCAT:
                $this->source = self::EDT_CELCAT;

                return $this->edtCelcat->getPlanningEduSign($semestre, $matieres, $anneeUniversitaire, $groupes);
            case self::EDT_INTRANET:
                $this->source = self::EDT_INTRANET;

                return $this->edtIntranet->getPlanningEduSign($semestre, $matieres, $anneeUniversitaire, $groupes);
            default:
                return null;
        }
    }

    public function initSemestre(
        Semestre           $semestre,
        Calendrier         $semaine,
        AnneeUniversitaire $anneeUniversitaire,
        array              $matieres = [],
        array              $groupes = [],
    ): EvenementEdtCollection
    {
        switch ($this->getSourceEdt($semestre)) {
            case self::EDT_CELCAT:
                $this->source = self::EDT_CELCAT;

                return $this->edtCelcat->initSemestre($semestre, $semaine, $anneeUniversitaire, $matieres, $groupes);
            case self::EDT_INTRANET:
                $this->source = self::EDT_INTRANET;

                return $this->edtIntranet->initSemestre($semestre, $semaine, $anneeUniversitaire, $matieres,
                    $groupes);
            default:
                return new EvenementEdtCollection();
        }
    }

    private function getSourceEdt(mixed $objet): string
    {
        if (true === $objet->getDiplome()?->getDepartement()?->getOptUpdateCelcat()) {
            return self::EDT_CELCAT;
        }

        return self::EDT_INTRANET;
    }

    public function getManager(string $source): ?EdtInterface
    {
        return $this->tabSources[$source] ?? null;
    }

    public function recupereEDTBornes(
        int                $semaineFormation,
        Semestre           $semestre,
        string             $jourSemaine,
        array              $matieres,
        array              $groupes,
        AnneeUniversitaire $anneeUniversitaire
    ): EvenementEdtCollection
    {
        return $this->getManager($this->getSourceEdt($semestre))?->recupereEdtJourBorne($semestre, $matieres,
            $jourSemaine, $semaineFormation, $groupes, $anneeUniversitaire);
    }

    public function getEvent(string $idEvent, array $matieres = [], array $groupes = []): ?EvenementEdt
    {
        return $this->getManager($this->getSourceFromString($idEvent))?->find($this->getIdFromString($idEvent),
            $matieres, $groupes);
    }

    private function getSourceFromString(string $idEvent): string
    {
        return explode('_', $idEvent)[0];
    }

    private function getIdFromString(string $idEvent): string
    {
        return explode('_', $idEvent)[1];
    }

    public function getSource(): string
    {
        return $this->source;
    }

    public function initPersonnel(
        string             $source,
        Calendrier         $calendrier,
        Personnel          $user,
        AnneeUniversitaire $anneeUniversitaire,
        array              $matieres,
    ): array
    {
        switch ($source) {
            case self::EDT_CELCAT:
                $this->source = self::EDT_CELCAT;

                return $this->edtCelcat->initPersonnel($user, $calendrier, $anneeUniversitaire, $matieres);
            case self::EDT_INTRANET:
                $this->source = self::EDT_INTRANET;

                return $this->edtIntranet->initPersonnel($user, $calendrier, $anneeUniversitaire, $matieres);
            default:
                return [];
        }
    }

    public function transformeGroupe(Semestre $semestre, array $groupes): array
    {
        $tGroupes = [];
        switch ($this->getSourceEdt($semestre)) {
            case self::EDT_CELCAT:
                foreach ($groupes as $groupe) {
                    if ($groupe instanceof Groupe) {
                        $tGroupes[$groupe->getCodeApogee()] = $groupe;
                    }
                }
                break;
            case self::EDT_INTRANET:
                foreach ($groupes as $groupe) {
                    if ($groupe instanceof Groupe) {
                        if (TypeGroupeEnum::TYPE_GROUPE_TP === $groupe->getTypeGroupe()->getType()) {
                            $tGroupes[$groupe->getOrdre()] = $groupe;
                        }
                    }
                }
                break;
        }

        return $tGroupes;
    }

    public function transformeMatieres(Semestre $semestre, array $matieres): array
    {
        $tMatieres = [];

        switch ($this->getSourceEdt($semestre)) {
            case self::EDT_CELCAT:
            case self::EDT_INTRANET:
                foreach ($matieres as $matiere) {
                    $tMatieres[$matiere->getTypeIdMatiere()] = $matiere;
                }
                break;
        }

        return $tMatieres;
    }

    public function getCurrentEvent(UserInterface $user, AnneeUniversitaire $anneeUniversitaire): ?EvenementEdt
    {
        $tEvents = [];
        foreach ($this->tabSources as $source) {
            if ($user instanceof Personnel) {
                $event = $source->getCurrentEventPersonnel($user, $anneeUniversitaire);
            } else {
                $event = $source->getCurrentEventEtudiant($user, $anneeUniversitaire);
            }
            if (null !== $event) {
                $tEvents[] = $event;
            }
        }

        return count($tEvents) === 1 ? $tEvents[0] : null;
    }

    public function getNextEvent(UserInterface $user, AnneeUniversitaire $anneeUniversitaire): ?EvenementEdt
    {
        $tEvents = [];
        foreach ($this->tabSources as $source) {
            if ($user instanceof Personnel) {
                $event = $source->getNextEventPersonnel($user, $anneeUniversitaire);
            } else {
                $event = $source->getNextEventEtudiant($user, $anneeUniversitaire);
            }
            if (null !== $event) {
                $tEvents[] = $event;
            }
        }

        return count($tEvents) === 1 ? $tEvents[0] : null;
    }

    public function saveCourseEduSign(?string $source, $cours): void
    {
        if ($source === 'intranet') {
            $this->edtPlanningRepository->save($cours);
        } elseif ($source === 'celcat') {
            $this->edtCelcatRepository->save($cours);
        }
    }

    public function updateCourse(
        $cours,
        ?string $source,
        ?Matiere    $matiere,
        ?Semestre    $semestre,
        ?Groupe    $groupe,
        ?Personnel    $enseignant,
        ?Salle    $salle)
    {

        if ($source === 'intranet') {
            $this->edtPlanningRepository->updateCourse($cours, $matiere, $semestre, $groupe, $enseignant, $salle);
        } elseif ($source === 'celcat') {
            $this->edtCelcatRepository->updateCourse($cours, $matiere, $semestre, $groupe, $enseignant, $salle);
        }
    }

}
