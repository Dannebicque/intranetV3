<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyProjetEtudiant.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 26/09/2020 08:52

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 06/08/2018
 * Time: 15:49
 */

namespace App\Classes;

use App\Entity\Etudiant;
use App\Entity\ProjetEtudiant;
use App\Entity\ProjetPeriode;
use App\Entity\StagePeriode;
use App\Event\ProjetEvent;
use App\Repository\ProjetEtudiantRepository;
use Carbon\Carbon;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\NonUniqueResultException;
use Exception;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

class MyProjetEtudiant
{
    protected EntityManagerInterface $entityManger;

    protected EventDispatcherInterface $eventDispatcher;

    protected ProjetEtudiantRepository $projetEtudiantRepository;

    protected ProjetEtudiant $stageEtudiant;

    /**
     * MyProjetEtudiant constructor.
     *
     * @param EntityManagerInterface   $entityManger
     * @param EventDispatcherInterface $eventDispatcher
     * @param ProjetEtudiantRepository $projetEtudiantRepository
     */
    public function __construct(
        EntityManagerInterface $entityManger,
        EventDispatcherInterface $eventDispatcher,
        ProjetEtudiantRepository $projetEtudiantRepository
    ) {
        $this->eventDispatcher = $eventDispatcher;
        $this->entityManger = $entityManger;
        $this->projetEtudiantRepository = $projetEtudiantRepository;
    }

    /**
     * @param ProjetPeriode $projetPeriode
     * @param Etudiant      $etudiant
     * @param               $etat
     *
     * @throws NonUniqueResultException
     */
    public function changeEtat(ProjetPeriode $projetPeriode, Etudiant $etudiant, $etat): void
    {
        $this->stageEtudiant = $this->checkProjetEtudiantExist($projetPeriode, $etudiant);

        $eventNotif = '';

        switch ($etat) {
            case ProjetEtudiant::ETAT_PROJET_AUTORISE:
                $this->stageEtudiant->setEtatProjet(ProjetEtudiant::ETAT_PROJET_AUTORISE);
                $this->stageEtudiant->setDateAutorise(new Carbon('now'));
                $eventNotif = ProjetEvent::CHGT_ETAT_PROJET_AUTORISE;
                break;
            case ProjetEtudiant::ETAT_PROJET_DEPOSE:
                $this->stageEtudiant->setEtatProjet(ProjetEtudiant::ETAT_PROJET_DEPOSE);
                $this->stageEtudiant->setDateDepotFormulaire(new Carbon('now'));
                $eventNotif = ProjetEvent::CHGT_ETAT_PROJET_DEPOSE;
                break;
            case ProjetEtudiant::ETAT_PROJET_VALIDE:
                $this->stageEtudiant->setEtatProjet(ProjetEtudiant::ETAT_PROJET_VALIDE);
                $this->stageEtudiant->setDateValidation(new Carbon('now'));
                $eventNotif = ProjetEvent::CHGT_ETAT_PROJET_VALIDE;
                break;
            case ProjetEtudiant::ETAT_PROJET_IMPRIME:
                $this->stageEtudiant->setEtatProjet(ProjetEtudiant::ETAT_PROJET_IMPRIME);
                $this->stageEtudiant->setDateImpression(new Carbon('now'));
                $eventNotif = ProjetEvent::CHGT_ETAT_PROJET_IMPRIME;
                break;
        }

        $event = new ProjetEvent($this->stageEtudiant);

        if ($eventNotif !== '') {
            $this->eventDispatcher->dispatch($event, $eventNotif);
        }

        $this->entityManger->persist($this->stageEtudiant);
        $this->entityManger->flush();
    }

    /**
     * @param ProjetPeriode $projetPeriode
     * @param Etudiant      $etudiant
     *
     * @return ProjetEtudiant|mixed
     * @throws NonUniqueResultException
     */
    private function checkProjetEtudiantExist(ProjetPeriode $projetPeriode, Etudiant $etudiant)
    {
        $result = $this->projetEtudiantRepository->findExist($projetPeriode, $etudiant);

        if ($result === null) {
            return $this->createProjetEtudiant($projetPeriode, $etudiant);
        }

        return $result;
    }

    /**
     * @param ProjetPeriode $projetPeriode
     * @param Etudiant      $etudiant
     *
     * @return ProjetEtudiant
     */
    private function createProjetEtudiant(ProjetPeriode $projetPeriode, Etudiant $etudiant): ProjetEtudiant
    {
        $projetEtudiant = new ProjetEtudiant();
        $projetEtudiant->addEtudiant($etudiant);
        $projetEtudiant->setProjetPeriode($projetPeriode);

        $this->entityManger->persist($projetEtudiant);
        $this->entityManger->flush();

        return $projetEtudiant;
    }
}
