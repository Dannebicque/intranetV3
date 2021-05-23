<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/BaseController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/05/2021 14:21
 */

namespace App\Controller;

use App\Classes\DataUserSession;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Translation\TranslatableMessage;
use Symfony\Contracts\Translation\TranslatorInterface;
use Umbrella\CoreBundle\Component\DataTable\DataTableFactory;
use Umbrella\CoreBundle\Component\DataTable\DTO\DataTable;
use Umbrella\CoreBundle\Component\JsResponse\JsResponseBuilder;
use Umbrella\CoreBundle\Component\Toast\Toast;

/**
 * Class BaseController.
 */
class BaseController extends AbstractController
{
    const BAG_TOAST = 'toast';
    protected DataUserSession $dataUserSession;

    protected EntityManagerInterface $entityManager;

    protected TranslatorInterface $translator;

    public static function getSubscribedServices()
    {
        return parent::getSubscribedServices() + [
                'datatable.factory' => DataTableFactory::class,
                // 'jsresponse.builder' => JsResponseBuilder::class,
            ];
    }

//    protected function jsResponseBuilder(): JsResponseBuilder
//    {
//        return $this->get('jsresponse.builder');
//    }

    /**
     * @required
     */
    public function setDataUserSession(DataUserSession $dataUserSession): void
    {
        $this->dataUserSession = $dataUserSession;
    }

    protected function createTable(string $type, array $options = []): DataTable
    {
        return $this->get('datatable.factory')->create($type, $options);
    }

    /**
     * @required
     */
    public function setEntityManager(EntityManagerInterface $entityManager): void
    {
        $this->entityManager = $entityManager;
    }

    /**
     * @required
     */
    public function setTranslator(TranslatorInterface $translator): void
    {
        $this->translator = $translator;
    }

    public function addFlashBag($niveau, $cleTraduction)
    {
        $cle = $this->translator->trans($cleTraduction);
        $niv = $this->translator->trans($niveau);
        switch ($niveau) {
            case Constantes::FLASHBAG_INFO:
                $this->toastInfo($cle, $niv);
                break;
            case Constantes::FLASHBAG_SUCCESS:
                $this->toastSuccess($cle, $niv);
                break;
            case Constantes::FLASHBAG_NOTICE:
                $this->toastWarning($cle, $niv);
                break;
            case Constantes::FLASHBAG_ERROR:
                $this->toastError($cle, $niv);
                break;
            default:
                $this->toastError('Clé inexistante', 'Erreur');
        }
    }

    /**
     * @return Personnel|Etudiant
     */
    public function getConnectedUser()
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');

        return $this->getUser();
    }

    public function isEtudiant(): bool
    {
        return $this->isGranted('ROLE_ETUDIANT');
    }

    public function getEtudiantAnneeUniversitaire()
    {
        $this->denyAccessUnlessGranted('ROLE_ETUDIANT');

        return null !== $this->getUser() ? $this->getUser()->getAnneeUniversitaire() : null;
    }

    public function getEtudiantSemestre()
    {
        $this->denyAccessUnlessGranted('ROLE_ETUDIANT');

        return null !== $this->getUser() ? $this->getUser()->getSemestre() : null;
    }

    public function getDepartement()
    {
        return $this->dataUserSession->getDepartement();
    }

    public function getDataUserSession(): DataUserSession
    {
        return $this->dataUserSession;
    }

    public function getEntityManager(): EntityManagerInterface
    {
        return $this->entityManager;
    }

    protected function toast(string $type, $text, $title = null): void
    {
        $this->addFlash(self::BAG_TOAST, [
            'type' => $type,
            'text' => $text instanceof TranslatableMessage ? $text->trans($this->translator) : $text,
            'title' => $title instanceof TranslatableMessage ? $title->trans($this->translator) : $title,
        ]);
    }

    protected function toastInfo($text, $title = null): void
    {
        $this->toast('info', $text, $title);
    }

    protected function toastSuccess($text, $title = null): void
    {
        $this->toast('success', $text, $title);
    }

    protected function toastWarning($text, $title = null): void
    {
        $this->toast('warning', $text, $title);
    }

    protected function toastError($text, $title = null): void
    {
        $this->toast('error', $text, $title);
    }
}
