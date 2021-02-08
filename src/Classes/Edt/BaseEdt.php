<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Edt/BaseEdt.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/02/2021 18:42
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Edt;

use App\Entity\AnneeUniversitaire;
use App\Entity\Calendrier;
use App\Entity\Etudiant;
use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Repository\CalendrierRepository;
use Carbon\Carbon;
use Carbon\CarbonImmutable;
use RuntimeException;

abstract class BaseEdt
{
    protected array $tabJour = [];

    protected $semaines;

    protected $semaine;

    protected ?Calendrier $calendrier;

    protected $semaineFormation;

    protected CalendrierRepository $calendrierRepository;

    protected ?int $semaineFormationIUT;

    protected ?CarbonImmutable $semaineFormationLundi;
    protected $filtre;
    protected $valeur;
    protected array $total = [];

    protected ?Semestre $semestre;

    /**
     * @var Personnel|Etudiant
     */
    protected $user;

    protected ?Matiere $module;

    protected $groupes;

    protected $jour;
    protected $salle;
    protected int $groupetd = 0;
    protected int $groupetp = 0;

    protected $planning;

    private AnneeUniversitaire $anneeUniversitaire;

    /**
     * MyEdt constructor.
     */
    public function __construct(
        CalendrierRepository $calendrierRepository
    ) {
        $this->calendrierRepository = $calendrierRepository;
        $this->semestre = null;
    }

    public function getSemaineFormation()
    {
        return $this->semaineFormationIUT;
    }

    public function getSemaine()
    {
        return $this->semaine;
    }

    public function getTabJour(): array
    {
        return $this->tabJour;
    }

    protected function init(AnneeUniversitaire $anneeUniversitaire, $filtre = '', $valeur = '', $semaine = 0): self
    {
        $dateDuJour = Carbon::now();
        $this->anneeUniversitaire = $anneeUniversitaire;
        $this->total['CM'] = 0;
        $this->total['TD'] = 0;
        $this->total['TP'] = 0;

        //pour gérer les vacances
        if ($semaine >= 29 && $semaine < 35) {
            $semaine = 35;
        }

        if (0 === $semaine) {
            $semaine = $dateDuJour->weekOfYear;

            if ($semaine >= 29 && $semaine < 35) {
                $semaine = 35;
            }
            $this->semaine = $semaine;

            //traitement du Week end
            if (Carbon::SATURDAY === $dateDuJour->dayOfWeek || Carbon::SUNDAY === $dateDuJour->dayOfWeek) {
                ++$this->semaine;
                if ($this->semaine > Carbon::WEEKS_PER_YEAR) {
                    $this->semaine = 1;
                }
            }
        } else {
            if ($semaine >= 29 && $semaine < 35) {
                $semaine = 35;
            }
            $this->semaine = $semaine;
        }

        $this->calendrier = $this->calendrierRepository->findOneBy([
            'semaineReelle'      => $this->semaine,
            'anneeUniversitaire' => $anneeUniversitaire->getId(),
        ]);
        if (null !== $this->calendrier) {
            $this->semaineFormationIUT = $this->calendrier->getSemaineFormation();
            $this->semaineFormationLundi = $this->calendrier->getDatelundi();
        } else {
            //si la requete est vide, on prend la première...
            $this->calendrier = $this->calendrierRepository->findOneBy([
                'semaineFormation'   => 1,
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
            $this->filtre = 'promo';
            //récupérer promo par défaut !
        } else {
            $this->filtre = $filtre;
        }

        if ('' === $valeur) {
            //todo: a refaire...
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

    public function getFiltre()
    {
        return $this->filtre;
    }

    public function getValeur()
    {
        return $this->valeur;
    }

    public function getPlanning()
    {
        return $this->planning;
    }

    public function getSemainePrecedente(): int
    {
        $s = (int)$this->semaine - 1;

        if (0 === $s) {
            return Carbon::WEEKS_PER_YEAR;
        }

        return $s;
    }

    public function getSemaineSuivante(): int
    {
        $s = $this->semaine + 1;
        if ($s > Carbon::WEEKS_PER_YEAR) {
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

    public function getJour()
    {
        return $this->jour;
    }

    public function getSalle()
    {
        return $this->salle;
    }

    public function getGroupes()
    {
        return $this->groupes;
    }

    protected function calculSemaines(): array
    {
        $allsemaine = $this->calendrierRepository->findByAnneeUniversitaire($this->anneeUniversitaire);

        $t = [];
        $i = 0;
        /** @var Calendrier $s */
        foreach ($allsemaine as $s) {
            $t[$i]['semaineReelle'] = $s->getSemaineReelle();
            $t[$i]['semaineIUT'] = $s->getSemaineFormation();
            $t[$i]['debut'] = $s->getDatelundi();
            $date1 = strtotime($t[$i]['debut']->format('Y-m-d'));
            $fin = date('d-m-Y', mktime(12, 30, 00, date('n', $date1), date('j', $date1) + 7, date('Y', $date1)));
            $t[$i]['fin'] = $fin;
            ++$i;
        }

        return $t;
    }

    public function getSemaines()
    {
        return $this->semaines;
    }

    protected function convertEdt($nb): ?int
    {
        switch ($nb) {
            case 1:
            case 2:
            case 3:
                return 1;
            case 4:
            case 5:
            case 6:
                return 2;
            case 7:
            case 8:
            case 9:
                return 3;
            case 10:
            case 11:
                return 4;
            case 12:
            case 13:
            case 14:
                return 5;
            case 15:
            case 16:
            case 17:
                return 6;
            case 18:
            case 19:
            case 20:
                return 7;
            default:
                return null;
        }
    }

    protected function convertToDate($jour)
    {
        return $this->calendrier->getDateLundi()->addDays($jour - 1);
    }
}
