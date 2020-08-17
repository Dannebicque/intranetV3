<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/ServiceRealise/ServiceRealiseIntranet.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 16/08/2020 14:28

namespace App\Classes\ServiceRealise;


use App\DTO\EvenementEdt;
use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
use App\Entity\EdtPlanning;
use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Repository\EdtPlanningRepository;

class ServiceRealiseIntranet implements ServiceRealiseInterface
{
    /**
     * @var EdtPlanningRepository
     */
    private EdtPlanningRepository $edtPlanningRepository;

    public function __construct(EdtPlanningRepository $edtPlanningRepository)
    {
        $this->edtPlanningRepository = $edtPlanningRepository;
    }

    public function getServiceRealiseParMatiere(Matiere $matiere, AnneeUniversitaire $anneeUniversitaire): array
    {
        // TODO: Implement getServiceRealiseParMatiere() method.
    }

    public function getServiceRealiserParEnseignant(Personnel $personnel, AnneeUniversitaire $anneeUniversitaire): array
    {
        $events = $this->edtPlanningRepository->findBy(['intervenant' => $personnel->getId()],
            ['matiere' => 'ASC', 'semaine' => 'ASC', 'jour' => 'ASC', 'debut' => 'ASC']);
        $tabEvent = [];
        foreach ($events as $event) {
            $tabEvent[] = $this->convertToEvenementEdt($event);
        }

        return $tabEvent;
    }

    /**
     * @param EdtPlanning $event
     *
     * @return EvenementEdt
     */
    public function convertToEvenementEdt($event): EvenementEdt
    {
        $date = $event->getDate();
        $date->locale('fr');

        $ev = new EvenementEdt();
        $ev->groupe = $event->getDisplayGroupe();
        $ev->jour = $date->dayName;
        $ev->date = $date->isoFormat('L');
        $ev->heure = Constantes::TAB_HEURES[$event->getDebut()] . ' à ' . Constantes::TAB_HEURES[$event->getFin()];
        $ev->matiere = $event->getMatiere() !== null ? $event->getMatiere()->getDisplay() : $event->getTexte();
        $ev->type_cours = $event->getType();
        $ev->personnel = $event->getIntervenant() !== null ? $event->getIntervenantEdt() : '';

        return $ev;
    }
}
