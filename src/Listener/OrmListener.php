<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 25/06/2018
 * Time: 14:24
 */

namespace App\Listener;

use App\Entity\Constantes;
use App\Entity\Personnel;
use Doctrine\ORM\Event\LifecycleEventArgs;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;
use Symfony\Component\Translation\TranslatorInterface;


class OrmListener
{
    /** @var FlashBagInterface */
    protected $flashBag;


    /** @var TranslatorInterface */
    protected $translator;

    /**
     * OrmListener constructor.
     *
     * @param FlashBagInterface   $flashBag
     * @param TranslatorInterface $translator
     */
    public function __construct(FlashBagInterface $flashBag, TranslatorInterface $translator)
    {
        $this->flashBag = $flashBag;
        $this->translator = $translator;
    }


    /*    public function postPersist(LifecycleEventArgs $args)
        {
            $entity = $args->getEntity();
            if (!($entity instanceof Personnel)) {
                $entityName = explode('\\', get_class($entity));
                $this->flashBag->add(Constantes::FLASHBAG_SUCCESS, strtolower($entityName[2]) . '.add.success.flash');
            }
        }

        public function postUpdate(LifecycleEventArgs $args)
        {
            $entity = $args->getEntity();
            if (!($entity instanceof Personnel)) {

                $entityName = explode('\\', get_class($entity));
                $this->flashBag->add(Constantes::FLASHBAG_SUCCESS, strtolower($entityName[2]) . '.edit.success.flash');
            }
        }

        public function postRemove(LifecycleEventArgs $args)
        {
            $entity = $args->getEntity();
            if (!($entity instanceof Personnel)) {
                $entityName = explode('\\', get_class($entity));
                $this->flashBag->add(Constantes::FLASHBAG_SUCCESS, strtolower($entityName[2]) . '.delete.success.flash');
            }
        }*/
}
