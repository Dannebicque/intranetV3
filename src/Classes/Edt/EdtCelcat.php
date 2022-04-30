<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Edt/EdtCelcat.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/09/2021 18:46
 */

namespace App\Classes\Edt;

use App\Adapter\EdtCelcatAdapter;
use App\DTO\EvenementEdt;
use App\DTO\EvenementEdtCollection;
use App\Entity\AnneeUniversitaire;
use App\Entity\Semestre;
use App\Repository\CelcatEventsRepository;
use Carbon\Carbon;

class EdtCelcat extends AbstractEdt implements EdtInterface
{
    public function __construct(private readonly CelcatEventsRepository $celcatEventsRepository, private readonly EdtCelcatAdapter $edtCelcatAdapter)
    {
    }

    public function getPlanningSemestre(Semestre $semestre, array $matieres, AnneeUniversitaire $anneeUniversitaire): EvenementEdtCollection
    {
        return new EvenementEdtCollection();
    }

    public function find(int $event): EvenementEdt
    {
        $evt = $this->celcatEventsRepository->find($event);

        return $this->edtCelcatAdapter->single($evt);
    }

    public function recupereEdtJourBorne(
        Semestre $semestre,
        array $matieres,
        int $jourSemaine,
        int $semaineFormation
    ): EvenementEdtCollection {
        // TODO: Implement recupereEdtJourBorne() method.
        return new EvenementEdtCollection();
    }

    public function getPlanningSemestreSemaine(
        Semestre $semestre,
        int $semaine,
        array $matieres,
        array $groupes,
        AnneeUniversitaire $anneeUniversitaire
    ): EvenementEdtCollection {
        $evts = $this->celcatEventsRepository->findEdtSemestreSemaine($semestre, $semaine, $anneeUniversitaire);
        $evtCollection = new EvenementEdtCollection();

        $tGroupes = [];
        foreach ($groupes as $groupe) {
            $tGroupes[$groupe->getCodeApogee()] = $groupe;
        }

        $tMatieres = [];
        foreach ($matieres as $matiere) {
            $tMatieres[$matiere->codeElement] = $matiere;
        }

        /** @var \App\Entity\CelcatEvent $evt */
        foreach ($evts as $evt) {
            $event = new EvenementEdt();

            if (array_key_exists($evt->getCodeModule(), $tMatieres)) {
                $matiere = $tMatieres[$evt->getCodeModule()];
            } else {
                $matiere = null;
            }
            $event->source = EdtManager::EDT_INTRANET;
            $event->date = $evt->getDateCours();
            $event->couleur = $semestre->getAnnee()->getCouleur();
            $event->jour = (string) $evt->getJour() + 1;
            $event->heureDebut = Carbon::createFromTimeString($evt->getDebut());
            $event->heureFin = Carbon::createFromTimeString($evt->getFin());
            $event->matiere = $matiere !== null ? $matiere->display : 'Inconnue';
            $event->typeIdMatiere = $matiere !== null ? $matiere->getTypeIdMatiere() : null;
            $event->texte = null;
            if (array_key_exists($evt->getCodeGroupe(), $tGroupes)) {
                $event->ordreGroupe = $tGroupes[$evt->getCodeGroupe()]->getOrdre();
                $event->groupeId = $tGroupes[$evt->getCodeGroupe()]->getId();
            } else {
                $event->ordreGroupe = 0;
                $event->groupeId = 0;
            }

            $event->personnel = $evt->getLibPersonnel(); //null !== $evt->getIntervenant() ? $evt->getIntervenant()->getDisplayPr() : '-';
            $event->groupe = $evt->getLibGroupe();
            $event->type_cours = $evt->getType();
            $evtCollection->add($event);
        }

        return $evtCollection;
    }
}
