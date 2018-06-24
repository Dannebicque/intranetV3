<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 01/05/2018
 * Time: 12:41
 */

namespace App\Controller;

use App\MesClasses\DataUserSession;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;

/**
 * Class BaseController
 * @package App\Controller
 */
class BaseController extends Controller
{
    /** @var DataUserSession */
    protected $dataUserSession;

    /** @var FlashBagInterface */
    protected $flashBag;

    /** @var EntityManagerInterface */
    protected $entityManager;

    /**
     * @param DataUserSession $dataUserSession
     * @required
     */
    public function setDataUserSession(DataUserSession $dataUserSession): void
    {
        //$this->get('php_translation.edit_in_place.activator')->activate();
        $this->dataUserSession = $dataUserSession;
    }

    /**
     * @param FlashBagInterface $flashBag
     */
    public function setFlashBag(FlashBagInterface $flashBag): void
    {
        $this->flashBag = $flashBag;
    }

    /**
     * @param EntityManagerInterface $entityManager
     */
    public function setEntityManager(EntityManagerInterface $entityManager): void
    {
        $this->entityManager = $entityManager;
    }
}