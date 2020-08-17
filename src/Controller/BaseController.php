<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/BaseController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 16/08/2020 15:24

namespace App\Controller;

use App\Classes\DataUserSession;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Contracts\Translation\TranslatorInterface;

/**
 * Class BaseController
 * @package App\Controller
 */
class BaseController extends AbstractController
{
    protected DataUserSession $dataUserSession;

    protected EntityManagerInterface $entityManager;

    protected TranslatorInterface $translator;

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

        return $this->getUser() !== null ? $this->getUser()->getAnneeUniversitaire() : null;
    }

    public function getEtudiantSemestre()
    {
        $this->denyAccessUnlessGranted('ROLE_ETUDIANT');

        return $this->getUser() !== null ? $this->getUser()->getSemestre() : null;
    }

    public function getDepartement()
    {
        return $this->dataUserSession->getDepartement();
    }
}

