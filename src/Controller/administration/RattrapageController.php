<?php

namespace App\Controller\administration;

use App\Entity\Semestre;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class RattrapageController
 * @package App\Controller\administration
 * @Route("/{_locale}/administration/rattrapge",
 *     requirements={
 *         "_locale": "fr|en"})
 */
class RattrapageController extends Controller
{
    /**
     * @Route("/semestre/{semestre}", name="administration_rattrapage_semestre_index")
     * @param Semestre $semestre
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(Semestre $semestre)
    {
        return $this->render('administration/rattrapage/index.html.twig', [
            'semestre' => $semestre
        ]);
    }
}
