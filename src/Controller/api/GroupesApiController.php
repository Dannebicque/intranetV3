<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/api/GroupesApiController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:36
 */

namespace App\Controller\api;

use App\Controller\BaseController;
use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class MatiereApiController.
 */
#[Route(path: '/api/groupe')]
class GroupesApiController extends BaseController
{
    #[Route(path: '/type-groupe/{semestre}', name: 'api_type_groupe_semestre', options: ['expose' => true])]
    public function typeGroupeSemestreAjax(Semestre $semestre): Response
    {
        $json = [];
        /** @var TypeGroupe $typeGroupe */
        foreach ($semestre->getTypeGroupes() as $typeGroupe) {
            $json[] = ['libelle' => $typeGroupe->getLibelle(), 'id' => $typeGroupe->getId()];
        }

        return $this->json($json);
    }

    #[Route(path: '/groupe/{typeGroupe}', name: 'api_groupe_type_groupe', options: ['expose' => true])]
    public function grouepTypeGroupeAjax(TypeGroupe $typeGroupe): Response
    {
        $json = [];
        /** @var Groupe $groupe */
        foreach ($typeGroupe->getGroupes() as $groupe) {
            $json[] = ['libelle' => $groupe->getLibelle(), 'id' => $groupe->getId()];
        }

        return $this->json($json);
    }
}
