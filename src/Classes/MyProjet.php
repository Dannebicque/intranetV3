<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyProjet.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Entity\Etudiant;
use App\Entity\ProjetEtudiant;
use App\Entity\ProjetPeriode;
use App\Repository\EtudiantRepository;
use App\Repository\ProjetEtudiantRepository;
use Doctrine\ORM\EntityManagerInterface;

class MyProjet
{
    protected EntityManagerInterface $entityManger;

    protected ProjetEtudiantRepository $projetEtudiantRepository;

    protected EtudiantRepository $etudiantRepository;

    protected $dataEtudiants = [];

    /**
     * MyStage constructor.
     */
    public function __construct(
        EntityManagerInterface $entityManger,
        ProjetEtudiantRepository $projetEtudiantRepository,
        EtudiantRepository $etudiantRepository
    ) {
        $this->entityManger = $entityManger;
        $this->projetEtudiantRepository = $projetEtudiantRepository;
        $this->etudiantRepository = $etudiantRepository;
    }

    public function getDataPeriode(ProjetPeriode $projetPeriode, ?int $anneeUniversitaire = 0): self
    {
        if (0 === $anneeUniversitaire) {
            $anneeUniversitaire = null !== $projetPeriode->getAnneeUniversitaire() ? $projetPeriode->getAnneeUniversitaire()->getAnnee() : (int)date('Y');
        }

        $etudiants = $this->etudiantRepository->findBySemestre($projetPeriode->getSemestre());

        /** @var Etudiant $etudiant */
        foreach ($etudiants as $etudiant) {
            $this->dataEtudiants[$etudiant->getId()]['etudiant'] = $etudiant;
        }

        /** @var ProjetEtudiant $projetEtudiants */
        foreach ($projetPeriode->getProjetEtudiants() as $projetEtudiants) {
            foreach ($projetEtudiants->getEtudiants() as $etudiant) {
                if (\array_key_exists($etudiant->getId(), $this->dataEtudiants)) {
                    $this->dataEtudiants[$etudiant->getId()]['projet'] = $projetEtudiants;
                }
            }
        }

        return $this;
    }

    public function getDataEtudiants(): array
    {
        return $this->dataEtudiants;
    }
}
