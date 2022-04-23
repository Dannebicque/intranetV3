<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MySalleExamen.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/07/2021 17:05
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\Pdf\MyPDF;
use App\DTO\Matiere;
use App\Entity\Departement;
use App\Entity\Etudiant;
use App\Entity\Groupe;
use App\Entity\SalleExamen;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\Repository\EtudiantRepository;
use App\Repository\GroupeRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SalleExamenRepository;
use App\Repository\TypeGroupeRepository;
use function chr;
use function count;
use Doctrine\Common\Collections\Collection;
use function in_array;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

class MySalleExamen
{
    protected ?SalleExamen $salle;
    protected ?TypeGroupe $typeGroupe;
    protected ?Matiere $matiere;
    private array $requestgroupes;

    /**
     * MySalleExamen constructor.
     */
    public function __construct(
        private TypeMatiereManager $typeMatiereManager,
        private TypeGroupeRepository $typeGroupeRepository,
        private PersonnelRepository $personnelRepository,
        private SalleExamenRepository $salleExamenRepository,
        private GroupeRepository $groupeRepository,
        private EtudiantRepository $etudiantRepository,
        private MyPDF $myPdf
    ) {
    }

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function genereDocument(
        string $requestdateeval,
        string $requestmatiere,
        int | string $requestenseignant1,
        int | string $requestenseignant2,
        Departement $departement
    ) {
        $this->matiere = $this->typeMatiereManager->getMatiereFromSelect($requestmatiere);

        if (null !== $this->salle && null !== $this->matiere) {
            $groupes = $this->typeGroupe->getGroupes();
            $grdetail = [];
            $etudiants = [];
            /** @var Groupe $gr */
            foreach ($groupes as $gr) {
                foreach ($this->requestgroupes as $dgr) {
                    if ($gr->getId() === (int) $dgr) {
                        $grdetail[] = $gr;
                        foreach ($gr->getEtudiants() as $etu) {
                            $etudiants[] = $etu;
                        }
                    }
                }
            }
        } else {
            $grdetail = $this->groupeDefaut($this->matiere->semestre); //todo: comment récupérer le semestre sans dépendre de matière ? ou justement garder ca et afficher tous les groupes mutualisés
            $this->typeGroupe = $grdetail[0]->getTypeGroupe();
            $etudiants = $this->etudiantRepository->findBySemestre($this->matiere->semestre);
        }

        if (count($etudiants) <= $this->salle->getCapacite()) {
            $tabplace = $this->calculPlaces();

            /* document 1 par groupe */
            $data = [
                'matiere' => $this->matiere,
                'etudiants' => $etudiants,
                'tabplace' => $this->placement($etudiants, $tabplace),
                'typeg' => $this->typeGroupe,
                'salle' => $this->salle,
                'ens1' => '' !== $requestenseignant1 ? $this->personnelRepository->find($requestenseignant1) : null,
                'ens2' => '' !== $requestenseignant2 ? $this->personnelRepository->find($requestenseignant2) : null,
                'groupes' => $grdetail,
                'depreuve' => $requestdateeval,
            ];

            return $this->myPdf::generePdf('pdf/placement.html.twig', $data, 'placement');
        }

        return null; //todo: afficher un lessage de salle trop petite ?
    }

    private function groupeDefaut(Semestre $semestre): bool | Collection | array
    {
        $typegroupe = $this->typeGroupeRepository->findBySemestre($semestre);

        /** @var TypeGroupe $tg */
        foreach ($typegroupe as $tg) {
            if (true === $tg->getDefaut()) {
                return $tg->getGroupes();
            }
        }

        return false;
    }

    private function calculPlaces(): array
    {
        $k = 0;
        $tabinterdit = explode(';', $this->salle->getPlacesInterdites());
        $tabplace = [];

        $nbCol = $this->salle->getNbColonnes();
        $nbRang = $this->salle->getNbRangs();
        for ($i = 0; $i < $nbCol; ++$i) {
            for ($j = 0; $j < $nbRang; ++$j) {
                if ($j + 1 < 10) {
                    $place = chr(65 + $i).'0'.($j + 1);
                } else {
                    $place = chr(65 + $i).($j + 1);
                }

                if (!in_array($place, $tabinterdit, true)) {
                    $tabplace[$k] = $place;
                }
                ++$k;
            }
        }

        shuffle($tabplace);

        return $tabplace;
    }

    private function placement(array $etudiants, array $tabplace): array
    {
        $placementetu = [];
        $placement = [];
        $i = 0;

        /** @var Etudiant $etu */
        foreach ($etudiants as $etu) {
            $placementetu[$etu->getId()] = $tabplace[$i];
            $placement[$tabplace[$i]] = $etu;
            ++$i;
        }
        ksort($placement);
        $pl = [];
        $pl['etudiant'] = $placementetu;
        $pl['place'] = $placement;

        return $pl;
    }

    public function calculCapacite(int | string $salle, int | string $typeGroupe, array $requestgroupes): bool
    {
        $this->requestgroupes = $requestgroupes;
        $this->salle = $this->salleExamenRepository->find($salle);
        $this->typeGroupe = $this->typeGroupeRepository->find($typeGroupe);
        $groupes = $this->typeGroupe->getGroupes();
        $nbEtu = 0;
        /** @var Groupe $gr */
        foreach ($groupes as $gr) {
            foreach ($this->requestgroupes as $dgr) {
                if ($gr->getId() === (int) $dgr) {
                    $nbEtu += $gr->getEtudiants()->count();
                }
            }
        }

        return $nbEtu <= $this->salle->getCapacite();
    }
}
