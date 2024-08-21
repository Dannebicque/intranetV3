<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Etudiant/GetEtudiants.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/08/2024 19:12
 */

namespace App\Classes\Etudiant;

use App\Classes\GetGroupeFromSemestre;
use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\Exception\SemestreNotFoundException;
use App\Repository\EtudiantRepository;
use App\Repository\GroupeRepository;
use App\Repository\SemestreRepository;
use App\Repository\TypeGroupeRepository;
use Symfony\Component\HttpFoundation\InputBag;

class GetEtudiants
{
    private string $recherche = '';
    private ?TypeGroupe $typegroupe = null;
    private ?Groupe $groupe = null;
    private ?Semestre $semestre = null;


    public function __construct(
        private TypeGroupeRepository $typeGroupeRepository,
        private GroupeRepository     $groupeRepository,
        private EtudiantRepository   $etudiantRepository,
        private SemestreRepository   $semestreRepository,
    )
    {
    }

    public function getEtudiants(InputBag $params): array
    {
        if (null !== $params->get('typegroupe')) {
            $this->typegroupe = $this->typeGroupeRepository->find($params->get('typegroupe'));
        } else {
            $this->typegroupe = null;
        }

        if (null !== $params->get('groupe')) {
            $this->groupe = $this->groupeRepository->find($params->get('groupe'));
        } else {
            $this->groupe = null;
        }

        if (null !== $params->get('semestre')) {
            $this->semestre = $this->semestreRepository->find($params->get('semestre'));
        }

        if ($params->get('recherche', null) !== null && trim($params->get('recherche', null)) !== '') {
            $this->recherche = $params->get('recherche');
            if (null === $this->semestre) {
                throw new SemestreNotFoundException();
            }
            $etudiants = $this->etudiantRepository->searchEtudiantTrombinoscope($params->get('recherche'), $this->semestre, $this->typegroupe, $this->groupe);
        } else {
            if (null !== $this->groupe) {
                $etudiants = $this->groupe->getEtudiants()->toArray();
            } elseif (null !== $this->typegroupe) {
                $groupes = GetGroupeFromSemestre::GetGroupeFromSemestre($this->semestre, $this->typegroupe);
                $etudiants = [];
                foreach ($groupes as $groupe) {
                    $etudiants[] = $groupe->getEtudiants()->toArray();
                }
                $etudiants = array_merge(...$etudiants);
            } else {
                $etudiants = [];
            }
        }


        return $etudiants;
    }

    public function getData(): array
    {
        return [
            'recherche' => $this->recherche,
            'typegroupe' => $this->typegroupe,
            'groupe' => $this->groupe,
            'semestre' => $this->semestre,
        ];
    }
}
