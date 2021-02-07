<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/BaseController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:36
 */

namespace App\Controller;

use App\Classes\DataUserSession;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Contracts\Translation\TranslatorInterface;

/**
 * Class BaseController.
 */
class BaseController extends AbstractController
{
    protected DataUserSession $dataUserSession;

    protected EntityManagerInterface $entityManager;

    protected TranslatorInterface $translator;

    /**
     * @required
     */
    public function setDataUserSession(DataUserSession $dataUserSession): void
    {
        $this->dataUserSession = $dataUserSession;
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

    public function addFlashBag($niveau, $cleTraduction): void
    {
        $this->addFlash($niveau, $this->translator->trans($cleTraduction));
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
}
