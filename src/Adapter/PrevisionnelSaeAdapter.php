<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Adapter/PrevisionnelSaeAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/09/2021 11:09
 */

namespace App\Adapter;

use App\Classes\Previsionnel\PrevisionnelSaeManager;
use App\DTO\Previsionnel;
use App\DTO\PrevisionnelCollection;

class PrevisionnelSaeAdapter extends AbstractPrevisionnelAdapter implements PrevisionnelAdapterInterface
{
    public function collection(array $previsionnels): PrevisionnelCollection
    {
        $collection = new PrevisionnelCollection();
        /** @var \App\Entity\Previsionnel $previ */
        foreach ($previsionnels as $previ) {
            $collection->add($this->single($previ));
        }

        return $collection;
    }

    public function single($previ): Previsionnel
    {
        $p = parent::single($previ);
        $p->type_matiere = PrevisionnelSaeManager::TYPE;
        $p->matiere_id = $previ['id_sae'];

        return $p;
    }
}
