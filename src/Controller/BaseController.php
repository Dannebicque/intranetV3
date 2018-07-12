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
use Symfony\Component\Translation\TranslatorInterface;

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

    /** @var TranslatorInterface */
    protected $translator;

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
     *
     * @required
     */
    public function setFlashBag(FlashBagInterface $flashBag): void
    {
        $this->flashBag = $flashBag;
    }

    /**
     * @param EntityManagerInterface $entityManager
     *
     * @required
     */
    public function setEntityManager(EntityManagerInterface $entityManager): void
    {
        $this->entityManager = $entityManager;
    }

    /**
     * @param TranslatorInterface $translator
     * @required
     */
    public function setTranslator(TranslatorInterface $translator): void
    {
        $this->translator = $translator;
    }

    public function addFlashBag($niveau, $cleTraduction): void
    {
        $this->flashBag->add($niveau, $this->translator->trans($cleTraduction));
    }
}