<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Edt/BaseEdt.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 10/05/2022 16:28
 */

namespace App\Classes\Edt;

use App\DTO\Matiere;
use App\Entity\AnneeUniversitaire;
use App\Entity\Calendrier;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Repository\CalendrierRepository;
use Carbon\Carbon;
use Carbon\CarbonImmutable;
use Carbon\CarbonInterface;
use RuntimeException;

abstract class BaseEdt
{
    protected array $tabJour = [];
    protected array $groupes;
    protected array $planning;
    protected array $semaines;

    protected int $semaine;

    protected ?Calendrier $calendrier = null;

    protected ?int $semaineFormationIUT = null;

    protected ?CarbonImmutable $semaineFormationLundi = null;
    protected ?string $filtre = null;
    protected mixed $valeur;
    protected array $total = [];

    protected ?Semestre $semestre = null;
    protected Personnel|Etudiant $user;
    protected ?Matiere $module = null;

    protected int $jour;
    protected string $salle;
    protected int $groupetd = 0;
    protected int $groupetp = 0;

    private AnneeUniversitaire $anneeUniversitaire;

    public function __construct(
        protected CalendrierRepository $calendrierRepository
    ) {
    }

    public function getSemaineFormation(): ?int
    {
        return $this->semaineFormationIUT;
    }

    public function getSemaine(): int
    {
        return $this->semaine;
    }

    public function getTabJour(): array
    {
        return $this->tabJour;
    }

    protected function init(AnneeUniversitaire $anneeUniversitaire, string $filtre = '', string $valeur = '', int $semaine = 0): self
    {
        $dateDuJour = Carbon::now();
        $this->anneeUniversitaire = $anneeUniversitaire;
        $this->total['CM'] = 0;
        $this->total['TD'] = 0;
        $this->total['TP'] = 0;

        //todo: en doublons avec edt/Calendrier.php A supprimer plus utile ici
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

        $this->calendrier = $this->calendrierRepository->findOneBy([
            'semaineReelle' => $this->semaine,
            'anneeUniversitaire' => $anneeUniversitaire->getId(),
        ]);
        if (null !== $this->calendrier) {
            $this->semaineFormationIUT = $this->calendrier->getSemaineFormation();
            $this->semaineFormationLundi = $this->calendrier->getDatelundi();
        } else {
            // si la requete est vide, on prend la première...
            $this->calendrier = $this->calendrierRepository->findOneBy([
                'semaineFormation' => 1,
                'anneeUniversitaire' => $anneeUniversitaire->getId(),
            ]);
            if (null !== $this->calendrier) {
                $this->semaineFormationIUT = $this->calendrier->getSemaineFormation();
                $this->semaineFormationLundi = $this->calendrier->getDatelundi();
                $this->semaine = $this->calendrier->getSemaineReelle();
            } else {
                throw new RuntimeException('Erreur de semaine');
            }
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
        $this->getJours();

        return $this;
    }

    private function getJours(): void
    {
        $this->tabJour['lundi'] = $this->semaineFormationLundi;
        $this->tabJour['mardi'] = $this->semaineFormationLundi->addDays();
        $this->tabJour['mercredi'] = $this->semaineFormationLundi->addDays(2);
        $this->tabJour['jeudi'] = $this->semaineFormationLundi->addDays(3);
        $this->tabJour['vendredi'] = $this->semaineFormationLundi->addDays(4);
    }

    public function getFiltre(): ?string
    {
        return $this->filtre;
    }

    public function getValeur(): string
    {
        return $this->valeur;
    }

    /** @deprecated  */
    public function getSemainePrecedente(): int
    {
        $s = $this->semaine - 1;

        if (0 === $s) {
            return CarbonInterface::WEEKS_PER_YEAR;
        }

        return $s;
    }

    /** @deprecated  */
    public function getSemaineSuivante(): int
    {
        $s = $this->semaine + 1;
        if ($s > CarbonInterface::WEEKS_PER_YEAR) {
            return 1;
        }

        return $s;
    }

    public function getTotal(): array
    {
        return $this->total;
    }

    public function getSemestre(): ?Semestre
    {
        return $this->semestre;
    }

    public function getModule(): ?Matiere
    {
        return $this->module;
    }

    public function getJour(): int
    {
        return $this->jour;
    }

    public function getSalle(): string
    {
        return $this->salle;
    }

    public function calculSemaines(): array
    {
        // déja fait dans le parent ??
        $allsemaine = $this->calendrierRepository->findByAnneeUniversitaire($this->anneeUniversitaire);

        $t = [];
        $i = 0;
        /** @var Calendrier $s */
        foreach ($allsemaine as $s) {
            $t[$i]['semaineReelle'] = $s->getSemaineReelle();
            $t[$i]['semaineIUT'] = $s->getSemaineFormation();
            $t[$i]['debut'] = $s->getDatelundi();
            $date1 = strtotime($t[$i]['debut']->format('Y-m-d'));
            $fin = date('d-m-Y', mktime(12, 30, 00, (int) date('n', $date1), ((int) date('j', $date1)) + 7, ((int) date('Y', $date1))));
            $t[$i]['fin'] = $fin;
            ++$i;
        }

        return $t;
    }

    public function getSemaines(): array
    {
        return $this->semaines;
    }

    protected function convertEdt(int $nb): ?int
    {
        return match ($nb) {
            1, 2, 3 => 1,
            4, 5, 6 => 2,
            7, 8, 9 => 3,
            10, 11 => 4,
            12, 13, 14 => 5,
            15, 16, 17 => 6,
            18, 19, 20 => 7,
            default => null,
        };
    }

    protected function convertToDate(int $jour): CarbonImmutable
    {
        return $this->calendrier->getDateLundi()?->addDays($jour - 1);
    }

    public function getGroupes(): array
    {
        return $this->groupes;
    }

    public function getPlanning(): array
    {
        return $this->planning;
    }

    private function excluVacances(int $semaine): void
    {
        if ($semaine >= 29 && $semaine < 35) {
            $semaine = 35;
        }
        $this->semaine = $semaine;
    }
}
