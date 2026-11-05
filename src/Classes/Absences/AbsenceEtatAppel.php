<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Absences/AbsenceEtatAppel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/11/2026 09:24
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
use Exception;

class AbsenceEtatAppel
{
    public function __construct(
        private AbsenceEtatAppelRepository $absenceEtatAppelRepository,
        private AbsenceRepository $absenceRepository,
        private EntityManagerInterface     $entityManager
    ) {
    }

    /**
     * @throws Exception
     */
    public function enregistreAppelFait(array $data): bool
    {
        if ($data['groupe'] !== null && null === $this->verifieIfExist($data)) { //todo: ajouter d'autres tests ?
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
     * @throws Exception
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
                $date = $ab->getDate()->format('Ymd');
                $typeIdMatiere = $ab->getTypeIdMatiere();
                $heure = $ab->getHeure()->format('Hi');
                $groupe = $ab->getGroupe()->getOrdre();

                if (!array_key_exists($date, $tab)) {
                    $tab[$date] = [];
                }
                if (!array_key_exists($typeIdMatiere, $tab[$date])) {
                    $tab[$date][$typeIdMatiere] = [];
                }
                if (!array_key_exists($heure, $tab[$date][$typeIdMatiere])) {
                    $tab[$date][$typeIdMatiere][$heure] = [];
                }
                if (!array_key_exists($groupe, $tab[$date][$typeIdMatiere][$heure])) {
                    // todo: ordre risuqe de buguer... faudrait un type+ordre?
                    $tab[$date][$typeIdMatiere][$heure][$groupe] = [];
                }

                $tab[$date][$typeIdMatiere][$heure][$groupe] = $ab->getTypeSaisie();
            }
        }

        // Un appel avec absents ne crée que des Absence (sans groupe) : on les rattache aux groupes de l'étudiant
        foreach ($this->absenceRepository->getBySemestre($semestre, $anneeUniversitaire) as $absence) {
            $dateHeure = $absence->getDateHeure();
            if (null === $dateHeure) {
                continue;
            }
            $date = $dateHeure->format('Ymd');
            $heure = $dateHeure->format('Hi');
            $typeIdMatiere = $absence->getTypeIdMatiere();

            foreach ($absence->getEtudiant()->getGroupes() as $groupe) {
                $ordre = $groupe->getOrdre();
                if (!isset($tab[$date][$typeIdMatiere][$heure][$ordre])) {
                    $tab[$date][$typeIdMatiere][$heure][$ordre] = \App\Entity\AbsenceEtatAppel::SAISIE_AVEC_ABSENT;
                }
            }
        }

        return $tab;
    }

    public function getByMatiereArray(Matiere $mat, ?AnneeUniversitaire $anneeUniversitaire): array
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
