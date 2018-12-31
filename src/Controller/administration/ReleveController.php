<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Semestre;

use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ReleveController
 * @package App\Controller\administration
 * @Route("/administration/note/releve")
 */
class ReleveController extends BaseController
{
    /**
     * @param Semestre $semestre
     * @Route("/provisoire/all/{semestre}", name="administration_note_all_releves_provisoires")
     */
    public function releveProvisoireAll(Semestre $semestre): void
    {
    }
}
