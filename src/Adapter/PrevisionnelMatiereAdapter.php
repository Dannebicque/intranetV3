<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Adapter/PrevisionnelMatiereAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/09/2021 11:07
 */

namespace App\Adapter;

use App\Classes\Previsionnel\PrevisionnelMatiereManager;
use App\DTO\Previsionnel;
use App\DTO\PrevisionnelCollection;

class PrevisionnelMatiereAdapter extends AbstractPrevisionnelAdapter implements PrevisionnelAdapterInterface
{
    public function collection(array $previsionnels): PrevisionnelCollection
    {
        $collection = new PrevisionnelCollection();

        foreach ($previsionnels as $previ) {
            $collection->add($this->single($previ));
        }

        return $collection;
    }

    public function single(array $previ): Previsionnel
    {
        $p = parent::single($previ);
        $p->type_matiere = PrevisionnelMatiereManager::TYPE;
        $p->matiere_id = $previ['id_matiere'];

        return $p;
    }
}
