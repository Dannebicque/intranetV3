<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Edt/EdtIntranet.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 27/09/2021 08:49
 */

namespace App\Classes\Edt;

use App\Adapter\EdtIntranetAdapter;
use App\DTO\EvenementEdt;
use App\DTO\EvenementEdtCollection;
use App\Entity\Semestre;
use App\Repository\EdtPlanningRepository;
use Carbon\Carbon;

class EdtIntranet extends AbstractEdt implements EdtInterface
{
    private EdtPlanningRepository $edtPlanningRepository;
    private EdtIntranetAdapter $edtIntranetAdapter;

    public function __construct(EdtPlanningRepository $edtPlanningRepository, EdtIntranetAdapter $edtIntranetAdapter)
    {
        $this->edtPlanningRepository = $edtPlanningRepository;
        $this->edtIntranetAdapter = $edtIntranetAdapter;
    }

    public function getPlanningSemestre(Semestre $semestre, array $matieres = []): EvenementEdtCollection
    {
        $evts = $this->edtPlanningRepository->findAllEdtSemestre($semestre);
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
            $event->jour = $evt->getJour();
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

    public function find($event): EvenementEdt
    {
        $evt = $this->edtPlanningRepository->find($event);

        return $this->edtIntranetAdapter->single($evt);
    }
}
