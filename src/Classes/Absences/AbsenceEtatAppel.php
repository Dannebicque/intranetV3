<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Absences/AbsenceEtatAppel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/07/2023 13:56
 */

namespace App\Classes\Absences;

use App\DTO\Matiere;
use App\Entity\AnneeUniversitaire;
use App\Entity\Semestre;
use App\Repository\AbsenceEtatAppelRepository;
use App\Repository\AbsenceRepository;
use App\Utils\Tools;
use App\Utils\ToolsMatiere;
use Doctrine\ORM\EntityManagerInterface;

class AbsenceEtatAppel
{
    public function __construct(
        private readonly AbsenceEtatAppelRepository $absenceEtatAppelRepository,
        private readonly AbsenceRepository $absenceRepository,
        private readonly EntityManagerInterface $entityManager
    ) {
    }

    /**
     * @throws \Exception
     */
    public function enregistreAppelFait(array $data): bool
    {
        if (null === $this->verifieIfExist($data)) {
            $appel = new \App\Entity\AbsenceEtatAppel();
            $appel->setPersonnel($data['personnel']);
            $appel->setTypeMatiere(ToolsMatiere::getType($data['matiere']));
            $appel->setIdMatiere(ToolsMatiere::getId($data['matiere']));
            $appel->setDate(Tools::convertDateToObject($data['date']));
            $appel->setGroupe($data['groupe']);
            $appel->setHeure(Tools::convertTimeToObject($data['heure']));
            $appel->setTypeSaisie($data['type_saisie']);
            $appel->setSemestre($data['groupe']->getTypeGroupe()->getSemestre());

            $this->entityManager->persist($appel);
            $this->entityManager->flush();

            return true;
        }

        return false; // déjà présent
    }

    /**
     * @throws \Exception
     */
    private function verifieIfExist(array $data): ?\App\Entity\AbsenceEtatAppel
    {
        return $this->absenceEtatAppelRepository->findOneBy([
            'personnel' => $data['personnel']->getId(),
            'date' => Tools::convertDateToObject($data['date']),
            'heure' => Tools::convertTimeToObject($data['heure']),
            'groupe' => $data['groupe']->getId(),
            'typeMatiere' => ToolsMatiere::getType($data['matiere']),
            'idMatiere' => ToolsMatiere::getId($data['matiere']),
        ]);
    }

    public function getBySemestre(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): array
    {
        $suiviAppel[] = $this->absenceEtatAppelRepository->findBySemestreEtat($semestre);
        //   $suiviAppel[] = $this->absenceRepository->findBySemestreEtat($semestre, $anneeUniversitaire);
        //passer par un DTO???
        $suiviAppel = array_merge_recursive(...$suiviAppel);

        $tab = [];
        $tab['statistiques']['nbcours'] = 0;
        $tab['statistiques']['nbsaisie'] = 0;

        foreach ($suiviAppel as $ab) {
            if (null !== $ab->getDate() && null !== $ab->getHeure() && null !== $ab->getGroupe()) {
                if (!array_key_exists($ab->getDate()->format('Ymd'), $tab)) {
                    $tab[$ab->getDate()->format('Ymd')] = [];
                }
                if (!array_key_exists($ab->getTypeIdMatiere(), $tab[$ab->getDate()->format('Ymd')])) {
                    $tab[$ab->getDate()->format('Ymd')][$ab->getTypeIdMatiere()] = [];
                }
                if (!array_key_exists($ab->getHeure()->format('H:i'),
                    $tab[$ab->getDate()->format('Ymd')][$ab->getTypeIdMatiere()])) {
                    $tab[$ab->getDate()->format('Ymd')][$ab->getTypeIdMatiere()][$ab->getHeure()->format('Hi')] = [];
                }
                if (!array_key_exists($ab->getGroupe()->getOrdre(),
                    $tab[$ab->getDate()->format('Ymd')][$ab->getTypeIdMatiere()][$ab->getHeure()->format('Hi')])) {
                    // todo: ordre risuqe de buguer... faudrait un type+ordre?
                    $tab[$ab->getDate()->format('Ymd')][$ab->getTypeIdMatiere()][$ab->getHeure()->format('Hi')][$ab->getGroupe()->getOrdre()] = [];
                }

                $tab[$ab->getDate()->format('Ymd')][$ab->getTypeIdMatiere()][$ab->getHeure()->format('Hi')][$ab->getGroupe()->getOrdre()] = $ab->getTypeSaisie();
            }
        }

        return $tab;
    }

    public function getByMatiereArray(Matiere $mat, ?AnneeUniversitaire $anneeUniversitaire)
    {
        $data = $this->absenceEtatAppelRepository->findByMatiere($mat, $anneeUniversitaire);
        $tab = [];
        foreach ($data as $absence) {
            $date = null !== $absence->getDate() ? $absence->getDate()->format('Y-m-d') : '';
            $heure = null !== $absence->getHeure() ? $absence->getHeure()->format('H:i') : '';

            if (!array_key_exists($date, $tab)) {
                $tab[$date] = [];
            }

            if (!array_key_exists($heure, $tab[$date])) {
                $tab[$date][$heure] = [];
            }

            $tab[$date][$heure][] = $absence->getGroupe()->getId();
        }

        return $tab;
    }
}
