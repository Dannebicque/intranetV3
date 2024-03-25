<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Edt/Calendrier.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 18:39
 */

namespace App\Classes\Edt;

use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
use App\Repository\CalendrierRepository;
use Carbon\Carbon;
use Carbon\CarbonImmutable;
use Carbon\CarbonInterface;
use RuntimeException;

class Calendrier
{
    public ?int $semaine = null;
    public array $tabJour;
    public ?int $semaineFormationIUT = null;
    public ?CarbonImmutable $semaineFormationLundi = null;

    public array $tabHeures;

    public function __construct(
        protected CalendrierRepository $calendrierRepository
    ) {
    }

    public function calculSemaines(AnneeUniversitaire $anneeUniversitaire): array
    {
        // déja fait dans le parent ??
        $allsemaine = $this->calendrierRepository->findByAnneeUniversitaire($anneeUniversitaire);

        $t = [];
        $i = 0;
        /** @var \App\Entity\Calendrier $s */
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

    public function calculSemaine(int $semaine, AnneeUniversitaire $anneeUniversitaire): Calendrier
    {
        // pour gérer les vacances
        $dateDuJour = Carbon::now();

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

        $calendrier = $this->calendrierRepository->findOneBy([
            'semaineReelle' => $this->semaine,
            'anneeUniversitaire' => $anneeUniversitaire->getId(),
        ]);
        if (null !== $calendrier) {
            $this->semaineFormationIUT = $calendrier->getSemaineFormation();
            $this->semaineFormationLundi = $calendrier->getDatelundi();
        } else {
            // si la requete est vide, on prend la première...
            $calendrier = $this->calendrierRepository->findOneBy([
                'semaineFormation' => 1,
                'anneeUniversitaire' => $anneeUniversitaire->getId(),
            ]);
            if (null !== $calendrier) {
                $this->semaineFormationIUT = $calendrier->getSemaineFormation();
                $this->semaineFormationLundi = $calendrier->getDatelundi();
                $this->semaine = $calendrier->getSemaineReelle();
            } else {
                throw new RuntimeException('Erreur de semaine');
            }
        }

        $this->tabJour['lundi'] = $this->semaineFormationLundi;
        $this->tabJour['mardi'] = $this->semaineFormationLundi->addDays();
        $this->tabJour['mercredi'] = $this->semaineFormationLundi->addDays(2);
        $this->tabJour['jeudi'] = $this->semaineFormationLundi->addDays(3);
        $this->tabJour['vendredi'] = $this->semaineFormationLundi->addDays(4);
        $this->tabHeures = Constantes::TAB_HEURES_EDT;

        return $this;
    }

    private function excluVacances(int $semaine): void
    {
        if ($semaine >= 29 && $semaine < 35) {
            $semaine = 35;
        }
        $this->semaine = $semaine;
    }

    public function getSemainePrecedente(): int
    {
        $s = $this->semaine - 1;

        if (0 === $s) {
            return CarbonInterface::WEEKS_PER_YEAR;
        }

        return $s;
    }

    public function getSemaineSuivante(): int
    {
        $s = $this->semaine + 1;
        if ($s > CarbonInterface::WEEKS_PER_YEAR) {
            return 1;
        }

        return $s;
    }
}
