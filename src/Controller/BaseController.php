<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/BaseController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 18:39
 */

namespace App\Controller;

use App\Classes\DataUserSession;
use App\Components\Breadcrumbs\BreadcrumbHelper;
use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
use App\Entity\Departement;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Entity\Semestre;
use Dannebicque\TableBundle\DTO\Table;
use Dannebicque\TableBundle\TableFactory;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Translation\TranslatableMessage;
use Symfony\Contracts\Service\Attribute\Required;
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
    protected BreadcrumbHelper $breadcrumbHelper;
    protected TableFactory $tableFactory;

    public static function getSubscribedServices(): array
    {
        return parent::getSubscribedServices() + [
                TableFactory::class => TableFactory::class,
            ];
    }

    #[Required]
    public function setDataUserSession(DataUserSession $dataUserSession): void
    {
        $this->dataUserSession = $dataUserSession;
    }

    protected function createTable(string $type, array $options = []): Table
    {
        return $this->tableFactory->create($type, $options);
    }

    #[Required]
    public function setEntityManager(EntityManagerInterface $entityManager): void
    {
        $this->entityManager = $entityManager;
    }

    #[Required]
    public function setTableFactory(TableFactory $tableFactory): void
    {
        $this->tableFactory = $tableFactory;
    }

    #[Required]
    public function setTranslator(TranslatorInterface $translator): void
    {
        $this->translator = $translator;
    }

    #[Required]
    public function setBreadcrumbHelper(BreadcrumbHelper $breadcrumbHelper): void
    {
        $this->breadcrumbHelper = $breadcrumbHelper;
    }

    public function addFlashBag(string $niveau, string $cleTraduction): void
    {
        $cle = $this->translator->trans($cleTraduction);
        $titre = $this->translator->trans($niveau);

        switch ($niveau) {
            case Constantes::FLASHBAG_INFO:
            case Constantes::FLASHBAG_SUCCESS:
            case Constantes::FLASHBAG_NOTICE:
            case Constantes::FLASHBAG_ERROR:
                $this->toast($niveau, $cle, $titre);
                break;
            default:
                $this->toast(Constantes::FLASHBAG_ERROR, 'Clé inexistante', 'Erreur');
        }
    }

    public function getUser(): Personnel|Etudiant
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');
        $user = parent::getUser();

        if (!$user instanceof Personnel && !$user instanceof Etudiant) {
            throw $this->createAccessDeniedException('Vous n\'êtes pas connecté');
        }

        return $user;
    }

    public function isEtudiant(): bool
    {
        return $this->isGranted('ROLE_ETUDIANT');
    }

    public function getAnneeUniversitaire(): ?AnneeUniversitaire
    {
        return $this->dataUserSession->getAnneeUniversitaire();
    }

    public function getEtudiantSemestre(): ?Semestre
    {
        $this->denyAccessUnlessGranted('ROLE_ETUDIANT');

        return null !== $this->getUser() ? $this->getUser()->getSemestre() : null;
    }

    public function getDepartement(): ?Departement
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

    protected function hasAccessOriginaux(): bool
    {
        return !$this->isEtudiant() && true === $this->getUser()->isAccessOriginaux();
    }

    protected function checkAccessApi(Request $request): void
    {
        if (!$request->headers->has('x-api-key')) {
            throw $this->createAccessDeniedException('Accès non autorisé');
        }

        if ($request->headers->get('x-api-key') !== $this->getParameter('api_key')) {
            throw $this->createAccessDeniedException('Accès non autorisé');
        }
    }
}
