<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/ServiceRealise/ServiceRealiseIntranet.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 30/08/2021 18:54
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\ServiceRealise;

use App\DTO\EvenementEdt;
use App\Entity\Constantes;
use App\Entity\EdtPlanning;
use App\Interfaces\UtilisateurInterface;
use App\Repository\EdtPlanningRepository;

class ServiceRealiseIntranet implements ServiceRealiseInterface
{
    public function __construct(private readonly EdtPlanningRepository $edtPlanningRepository)
    {
    }

    public function getServiceRealiseParMatiere(int $idMatiere, string $type): array
    {
        $events = $this->edtPlanningRepository->findBy(['idMatiere' => $idMatiere, 'typeMatiere' => $type],
            ['semaine' => 'ASC', 'jour' => 'ASC', 'debut' => 'ASC']);
        $tabEvent = [];
        foreach ($events as $event) {
            $tabEvent[] = $this->convertToEvenementEdt($event);
        }

        return $tabEvent;
    }

    public function getServiceRealiseParPersonnelMatiere(UtilisateurInterface $personnel, int $idMatiere, string $type): array
    {
        $events = $this->edtPlanningRepository->findBy([
            'intervenant' => $personnel->getId(),
            'idMatiere' => $idMatiere,
            'typeMatiere' => $type,
        ],
            ['semaine' => 'ASC', 'jour' => 'ASC', 'debut' => 'ASC']);
        $tabEvent = [];
        foreach ($events as $event) {
            $tabEvent[] = $this->convertToEvenementEdt($event);
        }

        return $tabEvent;
    }

    public function getServiceRealiserParEnseignant(UtilisateurInterface $personnel): array
    {
        $events = $this->edtPlanningRepository->findBy(['intervenant' => $personnel->getId()],
            ['semaine' => 'ASC', 'jour' => 'ASC', 'debut' => 'ASC']);
        $tabEvent = [];
        foreach ($events as $event) {
            $tabEvent[] = $this->convertToEvenementEdt($event);
        }

        return $tabEvent;
    }

    /**
     * @param EdtPlanning $event
     */
    public function convertToEvenementEdt($event): EvenementEdt
    {
        $date = $event->getDate();
        $date->locale('fr');

        $ev = new EvenementEdt();
        $ev->groupe = $event->getDisplayGroupe();
        $ev->jour = $date->dayName;
        $ev->duree = $event->getDureeInt();
        $ev->date = $date->isoFormat('L');
        $ev->heure = Constantes::TAB_HEURES[$event->getDebut()].' à '.Constantes::TAB_HEURES[$event->getFin()]; // todo: gérer la convesion... et pas l'affichage ici. Vérifier le template
        // $ev->matiere = null !== $event->getMatiere() ? $event->getMatiere()->getDisplay() : $event->getTexte();
        $ev->typeIdMatiere = $event->getTypeIdMatiere();
        $ev->type_cours = $event->getType();
        $ev->personnel = null !== $event->getIntervenant() ? $event->getIntervenantEdt() : '';

        return $ev;
    }

    public function statistiques(array $chronologique): array
    {
        $tab = [];
        $tab['nbCM'] = 0;
        $tab['nbTD'] = 0;
        $tab['nbTP'] = 0;
        $tab['nbHCM'] = 0;
        $tab['nbHTD'] = 0;
        $tab['nbHTP'] = 0;
        $tab['total'] = 0;
        $tab['totalH'] = 0;

        /** @var EvenementEdt $event */
        foreach ($chronologique as $event) {
            ++$tab['nb'.$event->type_cours];
            $tab['nbH'.$event->type_cours] += $event->duree;
            ++$tab['total'];
            $tab['totalH'] += $event->duree;
        }

        return $tab;
    }
}
