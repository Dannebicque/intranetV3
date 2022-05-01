<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Edt/EdtIntranet.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/05/2022 19:47
 */

namespace App\Classes\Edt;

use App\Adapter\EdtIntranetAdapter;
use App\DTO\EvenementEdt;
use App\DTO\EvenementEdtCollection;
use App\Entity\AnneeUniversitaire;
use App\Entity\Semestre;
use App\Repository\EdtPlanningRepository;
use Carbon\Carbon;

class EdtIntranet extends AbstractEdt implements EdtInterface
{
    public function __construct(private readonly EdtPlanningRepository $edtPlanningRepository, private readonly EdtIntranetAdapter $edtIntranetAdapter)
    {
    }

    public function getPlanningSemestre(Semestre $semestre, array $matieres, AnneeUniversitaire $anneeUniversitaire): EvenementEdtCollection
    {
        $evts = $this->edtPlanningRepository->findAllEdtSemestre($semestre, $anneeUniversitaire);
        $evtCollection = new EvenementEdtCollection();

        /** @var \App\Entity\EdtPlanning $evt */
        foreach ($evts as $evt) {
            $event = new EvenementEdt();

            if (array_key_exists($evt->getTypeIdMatiere(), $matieres)) {
                $matiere = $matieres[$evt->getTypeIdMatiere()]->display;
            } else {
                $matiere = 'Inconnue';
            }
            $event->source = EdtManager::EDT_INTRANET;
            $event->date = $evt->getDate();
            $event->jour = (string) $evt->getJour();
            $event->heureDebut = Carbon::createFromTimeString($evt->getDebutTexte());
            $event->heureFin = Carbon::createFromTimeString($evt->getFinTexte());
            $event->matiere = $matiere;
            $event->typeIdMatiere = $evt->getTypeIdMatiere();
            $event->texte = $evt->getTexte();
            $event->groupeId = $evt->getGroupe();
            $event->personnel = null !== $evt->getIntervenant() ? $evt->getIntervenant()->getDisplayPr() : '-';
            $event->groupe = $evt->getDisplayGroupe();
            $event->type_cours = $evt->getType();
            $evtCollection->add($event);
        }

        return $evtCollection;
    }

    public function find(int $event): EvenementEdt
    {
        $evt = $this->edtPlanningRepository->find($event);

        return $this->edtIntranetAdapter->single($evt);
    }

    public function recupereEdtJourBorne(Semestre $semestre, array $matieres, int $jourSemaine, int $semaineFormation): EvenementEdtCollection
    {
        $evts = $this->edtPlanningRepository->recupereEdtBorne($semaineFormation, $semestre, $jourSemaine);

        return $this->edtIntranetAdapter->collection($evts, $matieres);
    }

    public function getPlanningSemestreSemaine(
        Semestre $semestre,
        int $semaine,
        array $matieres,
        array $groupes,
        AnneeUniversitaire $anneeUniversitaire
    ) {
        $evts = $this->edtPlanningRepository->findEdtSemestreSemaine($semestre, $semaine, $anneeUniversitaire);
        $evtCollection = new EvenementEdtCollection();

        $tGroupes = [];
        foreach ($groupes as $groupe) {
            $tGroupes[$groupe->getOrdre()] = $groupe;
        }
        /** @var \App\Entity\EdtPlanning $evt */
        foreach ($evts as $evt) {
            $event = new EvenementEdt();

            if (array_key_exists($evt->getTypeIdMatiere(), $matieres)) {
                $matiere = $matieres[$evt->getTypeIdMatiere()]->display;
            } else {
                $matiere = 'Inconnue';
            }
            $event->source = EdtManager::EDT_INTRANET;
            $event->date = $evt->getDate();
            $event->jour = (string) $evt->getJour();
            $event->heureDebut = Carbon::createFromTimeString($evt->getDebutTexte());
            $event->heureFin = Carbon::createFromTimeString($evt->getFinTexte());
            $event->matiere = $matiere;
            $event->typeIdMatiere = $evt->getTypeIdMatiere();
            $event->texte = $evt->getTexte();
            $event->groupeId = $evt->getGroupe();
            $event->ordreGroupe = $tGroupes[$evt->getGroupe()]->getOrdre();
            $event->personnel = null !== $evt->getIntervenant() ? $evt->getIntervenant()->getDisplayPr() : '-';
            $event->groupe = $evt->getDisplayGroupe();
            $event->type_cours = $evt->getType();
            $event->couleur = $semestre->getCouleur();
            $evtCollection->add($event);
        }

        return $evtCollection;
    }
}
