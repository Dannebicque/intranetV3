<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/BaseController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/09/2021 22:03
 */

namespace App\Controller;

use App\Classes\DataUserSession;
use App\Components\Table\DTO\Table;
use App\Components\Table\TableFactory;
use App\Entity\Constantes;
use App\Interfaces\UtilisateurInterface;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Translation\TranslatableMessage;
use Symfony\Contracts\Translation\TranslatorInterface;

/**
 * Class BaseController.
 */
class BaseController extends AbstractController
{
    public const BAG_TOAST = 'toast';
    protected DataUserSession $dataUserSession;

    protected EntityManagerInterface $entityManager;

    protected TranslatorInterface $translator;

    public static function getSubscribedServices()
    {
        return parent::getSubscribedServices() + [
                TableFactory::class => TableFactory::class
            ];
    }

    /**
     * @required
     */
    public function setDataUserSession(DataUserSession $dataUserSession): void
    {
        $this->dataUserSession = $dataUserSession;
    }

    protected function createTable(string $type, array $options = []): Table
    {
        return $this->get(TableFactory::class)->create($type, $options);
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
        //todo: revoir ?? mélange avec toast
        $cle = $this->translator->trans($cleTraduction);
        $titre = $this->translator->trans($niveau);
        switch ($niveau) {
            case Constantes::FLASHBAG_INFO:
                $this->toastInfo($cle, $titre);
                break;
            case Constantes::FLASHBAG_SUCCESS:
                $this->toastSuccess($cle, $titre);
                break;
            case Constantes::FLASHBAG_NOTICE:
                $this->toastWarning($cle, $titre);
                break;
            case Constantes::FLASHBAG_ERROR:
                $this->toastError($cle, $titre);
                break;
            default:
                $this->toastError('Clé inexistante', 'Erreur');
        }
    }

    public function getConnectedUser(): UtilisateurInterface
    {
        //todo: retourner un utilisateur interface ?
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');

        return $this->getUser();
    }

    public function isEtudiant(): bool
    {
        return $this->isGranted('ROLE_ETUDIANT');
    }

    /** @deprecated */
    public function getEtudiantAnneeUniversitaire()
    {
        $this->denyAccessUnlessGranted('ROLE_ETUDIANT');

        return null !== $this->getUser() ? $this->getUser()->getAnneeUniversitaire() : null;
    }

    public function getAnneeUniversitaire()
    {
        return $this->dataUserSession->getAnneeUniversitaire();
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
