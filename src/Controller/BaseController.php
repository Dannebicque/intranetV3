<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/BaseController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 16/07/2020 08:41

namespace App\Controller;

use App\Classes\DataUserSession;
use App\Entity\Etudiant;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Contracts\Translation\TranslatorInterface;

/**
 * Class BaseController
 * @package App\Controller
 */
class BaseController extends AbstractController
{
    /** @var DataUserSession */
    protected $dataUserSession;

    /** @var EntityManagerInterface */
    protected $entityManager;

    /** @var TranslatorInterface */
    protected $translator;

    /**
     * @param DataUserSession $dataUserSession
     *
     * @required
     */
    public function setDataUserSession(DataUserSession $dataUserSession): void
    {
        $this->dataUserSession = $dataUserSession;
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
     *
     * @required
     */
    public function setTranslator(TranslatorInterface $translator): void
    {
        $this->translator = $translator;
    }

    public function addFlashBag($niveau, $cleTraduction): void
    {
        $this->addFlash($niveau, $this->translator->trans($cleTraduction));
    }

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

        return $this->getUser()->getAnneeUniversitaire();
    }

    public function getEtudiantSemestre()
    {
        $this->denyAccessUnlessGranted('ROLE_ETUDIANT');

        return $this->getUser()->getSemestre();
    }
}

