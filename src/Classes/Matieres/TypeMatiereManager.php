<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Matieres/TypeMatiereManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/04/2024 20:44
 */

namespace App\Classes\Matieres;

use App\Entity\ApcReferentiel;
use App\Entity\ApcRessource;
use App\Entity\ApcSae;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Matiere;
use App\Entity\Semestre;

class TypeMatiereManager
{
    private array $managers;

    public function __construct(
        SaeManager $saeManager,
        RessourceManager $ressourceManager,
        MatiereManager $matiereManager
    ) {
        $this->managers[Matiere::SOURCE] = $matiereManager;
        $this->managers[ApcSae::SOURCE] = $saeManager;
        $this->managers[ApcRessource::SOURCE] = $ressourceManager;
    }

    public function getLibelleMatiere(string $value): string
    {
        $mat = $this->getMatiereFromSelect($value);

        return null !== $mat ? $mat->display : 'err';
    }

    public function getMatiereFromSelect(string $data): ?\App\DTO\Matiere
    {
        $d = explode('_', $data);

        if (2 === count($d) && '' !== $d[0]) {
            return $this->typeDeMatiere($d[0])->find($d[1]);
        }

        return null;
    }

    public function typeDeMatiere(string $type): SaeManager|RessourceManager|MatiereManager
    {
        return $this->managers[$type];
    }

    public function getMatiere(int|string $id, string $type): ?\App\DTO\Matiere
    {
        return $this->typeDeMatiere($type)->find($id);
    }

    public function tableauMatieres(Departement $departement): array
    {
        $matieres = $this->findByDepartement($departement);
        $t = [];
        foreach ($matieres as $matiere) {
            $t[$matiere->codeMatiere] = $matiere;
        }

        return $t;
    }

    public function tableauMatieresCodeApogee(Departement $departement): array
    {
        $matieres = $this->findByDepartement($departement);
        $t = [];
        foreach ($matieres as $matiere) {
            $t[$matiere->codeElement] = $matiere;
        }

        return $t;
    }

    // todo: ?? retourne plusieurs résultats : 1 pour chaque matiere
    public function findOneById(int $id): array
    {
        $t = [];
        foreach ($this->managers as $manager) {
            $matiere = $manager->find($id);
            if (null !== $matiere) {
                $t[] = $matiere;
            }
        }

        return $t;
    }

    public function findByDepartement(Departement $departement): array
    {
        $t = [];
        foreach ($this->managers as $manager) {
            $matieres = $manager->findByDepartement($departement);
            $t[] = $matieres->toArray();
        }

        return array_merge(...$t);
    }

    public function findBySemestreChoiceType(Semestre $semestre): array
    {
        $matieres = $this->findBySemestre($semestre);
        $t = [];
        foreach ($matieres as $matiere) {
            $t[$matiere->display] = $matiere->getTypeIdMatiere();
        }

        return $t;
    }

    public function findBySemestre(Semestre $semestre): array
    {
        $t = [];
        foreach ($this->managers as $manager) {
            $matieres = $manager->findBySemestre($semestre);
            $t[] = $matieres->toArray();
        }

        return array_merge(...$t);
    }

    public function findBySemestreArray(Semestre $semestre): array
    {
        $matieres = $this->findBySemestre($semestre);
        $t = [];
        foreach ($matieres as $matiere) {
            $t[$matiere->getTypeIdMatiere()] = $matiere;
        }

        return $t;
    }

    public function findByDepartementArray(Departement $departement): array
    {
        $matieres = $this->findByDepartement($departement);
        $t = [];
        foreach ($matieres as $matiere) {
            $t[$matiere->getTypeIdMatiere()] = $matiere;
        }

        return $t;
    }

    public function findByDiplomeArray(Diplome $diplome): array
    {
        $matieres = $this->findByDiplome($diplome);
        $t = [];
        foreach ($matieres as $matiere) {
            $t[$matiere->getTypeIdMatiere()] = $matiere;
        }

        return $t;
    }

    public function findByDiplome(mixed $diplome): array
    {
        $t = [];
        foreach ($this->managers as $manager) {
            if ($diplome->isApc() && !$manager instanceof MatiereManager) {
                $matieres = $manager->findByReferentiel($diplome->getReferentiel());
            } else {
                $matieres = $manager->findByDiplome($diplome);
            }
            $t[] = $matieres->toArray();
        }

        return array_merge(...$t);
    }

    public function tableauApogeeDiplome(mixed $diplome): array
    {
        $matieres = $this->findByDiplome($diplome);
        $t = [];
        foreach ($matieres as $matiere) {
            $t[$matiere->codeElement] = $matiere;
        }

        return $t;
    }

    public function tableauMatieresSemestreCodeApogee(Semestre $semestre): array
    {
        $matieres = $this->findBySemestre($semestre);
        $t = [];
        foreach ($matieres as $matiere) {
            $t[$matiere->codeElement] = $matiere;
        }

        return $t;
    }

    public function findBySemestreAndReferentiel(Semestre $semestre, ?ApcReferentiel $referentiel): array
    {
        $t = [];
        foreach ($this->managers as $manager) {
            if ($manager instanceof MatiereManager) {
                $matieres = $manager->findBySemestre($semestre);
            } else if (null !== $referentiel) {
                $matieres = $manager->findBySemestreAndReferentiel($semestre, $referentiel);
            }

            $t[] = $matieres->toArray();
        }

        return array_merge(...$t);
    }

    public function findByReferentielOrdreSemestre(Semestre $semestre, ?ApcReferentiel $referentiel): array
    {
        $t = [];
        foreach ($this->managers as $manager) {
            if ($manager instanceof MatiereManager) {
                $matieres = $manager->findBySemestre($semestre);
            } else if (null !== $referentiel) {
                $matieres = $manager->findByReferentielOrdreSemestre($referentiel, $semestre->getOrdreLmd());
            }

            $t[] = $matieres->toArray();
        }

        return array_merge(...$t);
    }

    public function findByReferentielOrdreSemestreArray(Semestre $semestre, ApcReferentiel $referentiel): array
    {
        $matieres = $this->findByReferentielOrdreSemestre($semestre, $referentiel);
        $tMatieres = [];
        foreach ($matieres as $matiere) {
            $tMatieres[$matiere->getTypeIdMatiere()] = $matiere;
        }

        return $tMatieres;
    }

    public function findAll(): array
    {
        $t = [];
        foreach ($this->managers as $manager) {
            $matieres = $manager->findAll();
            $t[] = $matieres->toArray();
        }

        return array_merge(...$t);
    }

    public function getManager(string $typeIdMatiere)
    {
        $d = explode('_', $typeIdMatiere);

        return $this->typeDeMatiere($d[0]);
    }
}
