<?php
/*
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/AgendaController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 7/12/19 11:21 AM
 */

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AgendaController
 * @package App\Controller
 * @Route("/agenda")
 */
class AgendaController extends BaseController
{
    /**
     * @Route("/{semaine}/{filtre}/{valeur}", name="agenda_index", options={"expose"=true},
     *                                        requirements={"semaine":"\d+"})
     * @param int    $semaine
     * @param string $filtre
     * @param string $valeur
     *
     * @return Response
     */
    public function index(
        $semaine = 0,
        $filtre = 'prof',
        $valeur = ''
    ): Response {
        if ($semaine === 0) {
            $semaine = (int)date('W');
        }

        return $this->render('agenda/index.html.twig', [
            'filtre'  => $filtre,
            'valeur'  => $valeur,
            'semaine' => $semaine,
        ]);
    }
}
