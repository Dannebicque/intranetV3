<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/ServiceRealise/ServiceRealiseIntranet.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Classes\ServiceRealise;

use App\DTO\EvenementEdt;
use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
use App\Entity\EdtPlanning;
use App\Interfaces\UtilisateurInterface;
use App\Repository\EdtPlanningRepository;

readonly class ServiceRealiseIntranet implements ServiceRealiseInterface
{
    public function __construct(private EdtPlanningRepository $edtPlanningRepository)
    {
    }

    public function getServiceRealiseParMatiere(int $idMatiere, string $type, AnneeUniversitaire $anneeUniversitaire): array
    {
        $events = $this->edtPlanningRepository->findBy(['idMatiere' => $idMatiere, 'typeMatiere' => $type, 'anneeUniversitaire' => $anneeUniversitaire->getId()],
            ['semaine' => 'ASC', 'jour' => 'ASC', 'debut' => 'ASC']);
        $tabEvent = [];
        foreach ($events as $event) {
            $tabEvent[] = $this->convertToEvenementEdt($event);
        }

        return $tabEvent;
    }

    public function getServiceRealiseParPersonnelMatiere(UtilisateurInterface $personnel, int $idMatiere, string $type, AnneeUniversitaire $anneeUniversitaire): array
    {
        $events = $this->edtPlanningRepository->findBy([
            'intervenant' => $personnel->getId(),
            'idMatiere' => $idMatiere,
            'typeMatiere' => $type,
            'anneeUniversitaire' => $anneeUniversitaire->getId(),
        ],
            ['semaine' => 'ASC', 'jour' => 'ASC', 'debut' => 'ASC']);
        $tabEvent = [];
        foreach ($events as $event) {
            $tabEvent[] = $this->convertToEvenementEdt($event);
        }

        return $tabEvent;
    }

    public function getServiceRealiserParEnseignant(UtilisateurInterface $personnel, AnneeUniversitaire $anneeUniversitaire): array
    {
        $events = $this->edtPlanningRepository->findBy(['intervenant' => $personnel->getId(), 'anneeUniversitaire' => $anneeUniversitaire->getId()],
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
//todo: DTO ?
        $ev = new EvenementEdt();
        $ev->groupe = $event->getDisplayGroupe();
        $ev->jour = $date->dayName;
        $ev->duree = $event->getDureeInt();
        $ev->date = $date->isoFormat('L');
        $ev->heureTexte = Constantes::TAB_HEURES[$event->getDebut()].' à '.Constantes::TAB_HEURES[$event->getFin()]; // todo: gérer la convesion... et pas l'affichage ici. Vérifier le template
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
