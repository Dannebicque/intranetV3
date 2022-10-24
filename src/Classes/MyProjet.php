<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/MyProjet.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/09/2022 09:18
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
use function array_key_exists;
use Doctrine\ORM\EntityManagerInterface;

class MyProjet
{
    protected array$dataEtudiants = [];

    /**
     * MyStage constructor.
     */
    public function __construct(
        private readonly EntityManagerInterface $entityManger,
        private readonly ProjetEtudiantRepository $projetEtudiantRepository,
        private readonly EtudiantRepository $etudiantRepository
    ) {
    }

    public function getDataPeriode(ProjetPeriode $projetPeriode, ?int $anneeUniversitaire = 0): self
    {
        if (0 === $anneeUniversitaire) {
            $anneeUniversitaire = null !== $projetPeriode->getAnneeUniversitaire() ? $projetPeriode->getAnneeUniversitaire()->getAnnee() : (int) date('Y');
        }

        $etudiants = [];
        foreach ($projetPeriode->getSemestres() as $semestre) {
            $etudiants[] = $this->etudiantRepository->findBySemestre($semestre);
        }
        $etudiants = array_merge(...$etudiants);

        /** @var Etudiant $etudiant */
        foreach ($etudiants as $etudiant) {
            $this->dataEtudiants[$etudiant->getId()]['etudiant'] = $etudiant;
        }

        /** @var ProjetEtudiant $projetEtudiants */
        foreach ($projetPeriode->getProjetEtudiants() as $projetEtudiants) {
            foreach ($projetEtudiants->getEtudiants() as $etudiant) {
                if (array_key_exists($etudiant->getId(), $this->dataEtudiants)) {
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
