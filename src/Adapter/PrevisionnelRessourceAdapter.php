<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Adapter/PrevisionnelRessourceAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/09/2021 11:09
 */

namespace App\Adapter;

use App\Classes\Previsionnel\PrevisionnelRessourceManager;
use App\DTO\Previsionnel;
use App\DTO\PrevisionnelCollection;

class PrevisionnelRessourceAdapter extends AbstractPrevisionnelAdapter implements PrevisionnelAdapterInterface
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
        $p->type_matiere = PrevisionnelRessourceManager::TYPE;
        $p->matiere_id = $previ['id_ressource'];

        return $p;
    }
}
