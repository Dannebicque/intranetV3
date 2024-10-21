<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/SourceEdt/Adapter/EdtIntranetAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/10/2024 16:07
 */

namespace App\Components\SourceEdt\Adapter;

use App\Adapter\AbstractEdtAdapter;
use App\Classes\Edt\EdtManager;
use App\DTO\EvenementEdt;
use App\DTO\EvenementEdtCollection;
use App\Entity\Constantes;
use Carbon\Carbon;

class EdtIntranetAdapter extends AbstractEdtAdapter implements EdtAdapterInterface
{
    public function __construct()
    {
    }

    public function collection(array $events, array $matieres, array $groupes): EvenementEdtCollection
    {
        $collection = new EvenementEdtCollection();

        foreach ($events as $event) {
            $collection->add($this->single($event, $matieres, $groupes));
        }

        return $collection;
    }

    public function singleNew(mixed $event): ?EvenementEdt
    {
        $evt = new EvenementEdt();
        $evt->source = EdtManager::EDT_INTRANET;
        $evt->id = $event->getId();
        $evt->jour = (string)($event->getJour());
        $evt->heureDebut = $event->getDebut();
        $evt->indexDebut = Constantes::TAB_HEURES_EDT_2[$event->getDebut() - 1][0];
        $evt->heureFin = $event->getFin();
        $evt->matiere = $event->getTexte();
        $evt->typeIdMatiere = $event->getTypeIdMatiere();
        $evt->salle = $event->getSalle();
        $evt->personnel = $event->getIntervenant()->getDisplayPr();
        $evt->groupe = $event->getDisplayGroupe();
        $evt->type_cours = $event->getType();
        $evt->date = $event->getDate();
        $evt->dateObjet = $event->getGroupe();
        $evt->gridStart = Constantes::TAB_HEURES_EDT_2[$event->getDebut() - 1][0];
        $evt->gridEnd = Constantes::TAB_HEURES_EDT_2[$event->getFin() - 1][0];
        $evt->largeur = $this->getLargeur($event);
        $evt->duree = $event->getFin() - $event->getDebut();
        $evt->groupeObjet = $event->getGroupe();
        $evt->groupeId = $event->getGroupe()->getId();
        $evt->personnelObjet = $event->getIntervenant();
        $evt->personnel = null !== $event->getIntervenant() ? $event->getIntervenant()->getDisplayPr() : '-';
        $evt->idEduSign = $event->getIdEduSign();

        return $evt;
    }

    public function single(mixed $evt, array $matieres = [], array $groupes = []): ?EvenementEdt
    {
        $event = new EvenementEdt();
        if (array_key_exists($evt->getTypeIdMatiere(), $matieres)) {
            $matiere = $matieres[$evt->getTypeIdMatiere()];
            $event->matiere = $matiere->display ?? $matiere->getDisplay();
            $event->code_matiere = $matiere->codeMatiere ?? $matiere->getCodeMatiere();
            $event->semestre = $evt->getSemestre() ?? $matiere->getSemestres()->first() ?? $matiere->getSemestre();
            $event->couleur = $event->semestre->getAnnee()?->getCouleur();
        } elseif ($evt->getTexte() === null) {
            $event->matiere = 'Inconnue';
            $event->couleur = '#cccccc';
        }
        $event->largeur = $this->getLargeur($evt);
        $event->source = EdtManager::EDT_INTRANET;
        $event->id = $evt->getId();
        $event->date = $evt->getDate();
        $event->jour = (string)$evt->getJour();
        $event->diplome = $evt->getDiplome();
        $event->ordreSemestre = $evt->getOrdreSemestre();
        $event->heureDebut = Carbon::createFromTimeString($evt->getDebutTexte());
        $event->indexDebut = $evt->getDebut() - 1;
        $event->heureFin = Carbon::createFromTimeString($evt->getFinTexte());
        $event->typeIdMatiere = $evt->getTypeIdMatiere();
        $event->texte = $evt->getTexte();
        $event->salle = $evt->getSalle();
        $event->dateObjet = $evt->getDate();
        $event->gridStart = Constantes::TAB_HEURES_EDT_2[$evt->getDebut() - 1][0];
        $event->gridEnd = Constantes::TAB_HEURES_EDT_2[$evt->getFin() - 1][0];
        $event->ordreGroupe = $evt->getGroupe();
        $event->type_cours = $evt->getType();

        // Le tableau $groupes doit avoir le format suivant:
        // $groupes = [
        //     'CM' => [
        //         1 => $groupe1,
        //         2 => $groupe2,
        //         ...
        //     ],
        //     'TD' => [
        //         1 => $groupe1,
        //         2 => $groupe2,
        //         ...
        //     ],
        //     ...] -> s'en assurer grâce à transformeGroupes dans EdtIntranet qui récupère la liste de tous les groupes du semestre et construit ce tableau


        if (array_key_exists($evt->getType(), $groupes) && array_key_exists($evt->getGroupe(), $groupes[$evt->getType()])) {
            $event->groupeId = $groupes[$evt->getType()][$evt->getGroupe()]->getId();
            $event->groupeObjet = $groupes[$evt->getType()][$evt->getGroupe()];
        }

        $event->personnel = null !== $evt->getIntervenant() ? $evt->getIntervenant()->getDisplayPr() : '-';
        $event->personnelObjet = $evt->getIntervenant();
        $event->groupe = $evt->getDisplayGroupe();

        $event->duree = $evt->getFin() - $evt->getDebut();
        $event->idEduSign = $evt->getIdEduSign();

        return $event;
    }

    private function getLargeur(mixed $evt): int
    {
        switch ($evt->getType()) {
            case 'cm':
            case 'CM':
            case 'PTCM':
                if ($evt->getGroupe() > 40) {
                    return 4;
                }

                return 0;
            case 'TD':
            case 'td':
            case 'PTTD':
                if ($evt->getGroupe() > 40) {
                    return 4;
                }

                return 2;
            default:
                return 1;
        }
    }
}
