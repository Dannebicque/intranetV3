<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 01/05/2018
 * Time: 12:41
 */

namespace App\Controller;

use App\MesClasses\DataUserSession;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class BaseController extends Controller
{
    /** @var DataUserSession */
    protected $dataUserSession;

    /**
     * @param DataUserSession $dataUserSession
     * @required
     */
    public function setDataUserSession(DataUserSession $dataUserSession): void
    {
        $this->dataUserSession = $dataUserSession;
    }
}