<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Adapter/PrevisionnelSaeAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/08/2022 16:05
 */

namespace App\Adapter;

use App\Classes\Previsionnel\PrevisionnelSaeManager;
use App\DTO\Previsionnel;
use App\DTO\PrevisionnelCollection;

class PrevisionnelSaeAdapter extends AbstractPrevisionnelAdapter implements PrevisionnelAdapterInterface
{
    public function collection(array $previsionnels): PrevisionnelCollection
    {
        $listeKey = [];
        $collection = new PrevisionnelCollection();

        foreach ($previsionnels as $previ) {
            if (!in_array($previ['id_previsionnel'], $listeKey, true)) {
                $collection->add($this->single($previ));
                $listeKey[] = $previ['id_previsionnel'];
            }
        }

        return $collection;
    }

    public function single(array $previ): Previsionnel
    {
        $p = parent::single($previ);
        $p->type_matiere = PrevisionnelSaeManager::TYPE;
        $p->matiere_id = $previ['id_sae'];

        return $p;
    }
}
