<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/DTO/PrevisionnelSynthesePersonnels.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 08:52
 */

namespace App\DTO;

use App\Enums\CategorieIutEnum;

/**
 * Class PrevisionnelSynthesePersonnel.
 * permet de faire la synthèse pour d'un ensemble de personnel en particulier du total de leurs prévisionnels et du total global
 */
class PrevisionnelSynthesePersonnels
{
    public array $personnels = [];
    public array $types = [];

    public float $totalCM = 0;
    public float $totalTD = 0;
    public float $totalTP = 0;

    public function __construct()
    {
        foreach (CategorieIutEnum::cases() as $categorie) {
            $this->types[$categorie->value]['cm'] = 0;
            $this->types[$categorie->value]['td'] = 0;
            $this->types[$categorie->value]['tp'] = 0;
        }
    }


    public function addPrevisionnelPersonnel(Previsionnel $previsionnelPersonnel): void
    {
        if (!array_key_exists($previsionnelPersonnel->personnel_id, $this->personnels)) {
            $this->personnels[$previsionnelPersonnel->personnel_id] = new PrevisionnelSynthesePersonnel($previsionnelPersonnel);
        }

        $this->personnels[$previsionnelPersonnel->personnel_id]->addPrevisionnelPersonnel($previsionnelPersonnel);
        $this->addPrevisionnel($previsionnelPersonnel);
    }

    private function addPrevisionnel(Previsionnel $previsionnelPersonnel): void
    {
        $this->totalCM += $previsionnelPersonnel->getTotalHCm();
        $this->totalTD += $previsionnelPersonnel->getTotalHTd();
        $this->totalTP += $previsionnelPersonnel->getTotalHTp();

        //convertir le type de personnel en catégorie
        $cat = CategorieIutEnum::getCategorieFromType($previsionnelPersonnel->personnel_type);

        //ajout des totaux par type
        $this->types[$cat->value]['cm'] += $previsionnelPersonnel->getTotalHCm();
        $this->types[$cat->value]['td'] += $previsionnelPersonnel->getTotalHTd();
        $this->types[$cat->value]['tp'] += $previsionnelPersonnel->getTotalHTp();

    }

    public function total(): float
    {
        return $this->totalCM + $this->totalTD + $this->totalTP;
    }

    public function personnelsTries(): array
    {
        usort($this->personnels, static function ($a, $b) {
            return $a->display <=> $b->display;
        });

        return $this->personnels;
    }

    public function pourcentagePermanent(): float
    {
        $total = $this->types[CategorieIutEnum::PERMANENT->value]['cm'] + $this->types[CategorieIutEnum::PERMANENT->value]['td'] + $this->types[CategorieIutEnum::PERMANENT->value]['tp'] + $this->types[CategorieIutEnum::ADMINISTRATIF->value]['cm'] + $this->types[CategorieIutEnum::ADMINISTRATIF->value]['td'] + $this->types[CategorieIutEnum::ADMINISTRATIF->value]['tp'];
        return $this->total() > 0.0 ? $total / $this->total() * 100 : 0;
    }

    public function pourcentageVacataire(): float
    {
        $total = $this->types[CategorieIutEnum::VACATAIRE->value]['cm'] + $this->types[CategorieIutEnum::VACATAIRE->value]['td'] + $this->types[CategorieIutEnum::VACATAIRE->value]['tp'];
        return $this->total() > 0.0 ? $total / $this->total() * 100 : 0;
    }

    public function pourcentageAutre(): float
    {
        $total = $this->types[CategorieIutEnum::AUTRE->value]['cm'] + $this->types[CategorieIutEnum::AUTRE->value]['td'] + $this->types[CategorieIutEnum::AUTRE->value]['tp'];
        return $this->total() > 0.0 ? $total / $this->total() * 100 : 0;
    }
}
