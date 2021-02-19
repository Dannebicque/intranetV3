<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MySalleExamen.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/02/2021 12:06
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Classes\Pdf\MyPDF;
use App\Entity\Departement;
use App\Entity\Etudiant;
use App\Entity\Groupe;
use App\Entity\Matiere;
use App\Entity\SalleExamen;
use App\Entity\TypeGroupe;
use App\Repository\EtudiantRepository;
use App\Repository\GroupeRepository;
use App\Repository\MatiereRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SalleExamenRepository;
use App\Repository\TypeGroupeRepository;
use Doctrine\Common\Collections\Collection;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

class MySalleExamen
{
    protected MatiereRepository $matiereRepository;
    protected TypeGroupeRepository $typeGroupeRepository;
    protected PersonnelRepository $personnelRepository;
    protected SalleExamenRepository $salleExamenRepository;
    protected GroupeRepository $groupeRepository;

    protected EtudiantRepository $etudiantRepository;

    protected ?SalleExamen $salle;
    protected ?TypeGroupe $typeGroupe;
    protected ?Matiere $matiere;

    private MyPDF $myPdf;
    private $requestgroupes;

    /**
     * MySalleExamen constructor.
     */
    public function __construct(
        MatiereRepository $matiereRepository,
        TypeGroupeRepository $typeGroupeRepository,
        PersonnelRepository $personnelRepository,
        SalleExamenRepository $salleExamenRepository,
        GroupeRepository $groupeRepository,
        EtudiantRepository $etudiantRepository,
        MyPDF $myPdf
    ) {
        $this->matiereRepository = $matiereRepository;
        $this->typeGroupeRepository = $typeGroupeRepository;
        $this->personnelRepository = $personnelRepository;
        $this->salleExamenRepository = $salleExamenRepository;
        $this->groupeRepository = $groupeRepository;
        $this->etudiantRepository = $etudiantRepository;
        $this->myPdf = $myPdf;
    }

    /**
     * @param $requestdateeval
     * @param $requestmatiere
     * @param $requestenseignant1
     * @param $requestenseignant2
     *
     * @return PdfResponse
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function genereDocument(
        $requestdateeval,
        $requestmatiere,
        $requestenseignant1,
        $requestenseignant2,
        Departement $departement
    ) {
        $this->matiere = $this->matiereRepository->find($requestmatiere);

        if (null !== $this->salle && null !== $this->matiere) {
            $groupes = $this->typeGroupe->getGroupes();
            $grdetail = [];
            $etudiants = [];
            /** @var Groupe $gr */
            foreach ($groupes as $gr) {
                foreach ($this->requestgroupes as $dgr) {
                    if ($gr->getId() === (int)$dgr) {
                        $grdetail[] = $gr;
                        foreach ($gr->getEtudiants() as $etu) {
                            $etudiants[] = $etu;
                        }
                    }
                }
            }
        } else {
            $grdetail = $this->groupeDefaut($this->matiere->getSemestre());
            $this->typeGroupe = $grdetail[0]->getTypeGroupe();
            $etudiants = $this->etudiantRepository->findBySemestre($this->matiere->getSemestre());
        }

        if (\count($etudiants) <= $this->salle->getCapacite()) {
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
                'depreuve' => (string)$requestdateeval,
            ];

            return $this->myPdf::generePdf('pdf/placement.html.twig', $data, 'placement', $departement->getLibelle());
        }
    }

    /**
     * @param $semestre
     *
     * @return Groupe[]|bool|Collection
     */
    private function groupeDefaut($semestre)
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
                    $place = \chr(65 + $i) . '0' . ($j + 1);
                } else {
                    $place = \chr(65 + $i) . ($j + 1);
                }

                if (!\in_array($place, $tabinterdit, true)) {
                    $tabplace[$k] = $place;
                }
                ++$k;
            }
        }

        shuffle($tabplace);

        return $tabplace;
    }

    /**
     * @param array $etudiants
     * @param array $tabplace
     */
    private function placement($etudiants, $tabplace): array
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

    public function calculCapacite($salle, $typeGroupe, $requestgroupes)
    {
        $this->requestgroupes = $requestgroupes;
        $this->salle = $this->salleExamenRepository->find($salle);
        $this->typeGroupe = $this->typeGroupeRepository->find($typeGroupe);
        $groupes = $this->typeGroupe->getGroupes();
        $nbEtu = 0;
        /** @var Groupe $gr */
        foreach ($groupes as $gr) {
            foreach ($this->requestgroupes as $dgr) {
                if ($gr->getId() === (int)$dgr) {
                    foreach ($gr->getEtudiants() as $etu) {
                        ++$nbEtu;
                    }
                }
            }
        }

        return $nbEtu <= $this->salle->getCapacite();
    }
}
