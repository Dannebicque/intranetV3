<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Edt/MyEdtBorne.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/10/2021 19:44
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Edt;

use App\Classes\Matieres\TypeMatiereManager;
use App\Entity\AnneeUniversitaire;
use App\Entity\Semestre;
use App\Exception\SemestreNotFoundException;
use App\Repository\CalendrierRepository;
use App\Repository\CelcatEventsRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\GroupeRepository;
use App\Repository\SemestreRepository;

class MyEdtBorne
{
    public array $data = [];

    private CalendrierRepository $calendrierRepository;
    private GroupeRepository $groupeRepository;

    private EdtManager $edtManager;
    private SemestreRepository $semestreRepository;

    /**
     * MyEdtBorne constructor.
     */
    public function __construct(
        CalendrierRepository $calendrierRepository,
        GroupeRepository $groupeRepository,
        EdtManager $edtManager,
        SemestreRepository $semestreRepository
    ) {
        $this->calendrierRepository = $calendrierRepository;
        $this->groupeRepository = $groupeRepository;
        $this->edtManager = $edtManager;
        $this->semestreRepository = $semestreRepository;
    }

    public function init(): void
    {
        $this->data['semaine'] = date('W');
        $this->data['njour'] = date('d');
        $this->data['jsem'] = date('N');
    }

    public function getData(): array
    {
        return $this->data;
    }

    public function getAffichageBorneJourSemestre(mixed $intSemestre, TypeMatiereManager $typeMatiereManager)
    {
        $semestre = $this->semestreRepository->find($intSemestre);

        if ($semestre === null) {
            throw new SemestreNotFoundException();
        }

        $semaine = $this->calendrierRepository->findOneBy([
            'semaineReelle' => $this->data['semaine'],
            'anneeUniversitaire' => $semestre->getAnneeUniversitaire()?->getId()
        ]);

        $this->data['semestre'] = $semestre;
        if (null !== $semaine) {
            $planning = $this->edtManager->recupereEDTBornes($semaine->getSemaineFormation(),
                $semestre, $this->data['jsem'], $typeMatiereManager->findBySemestreArray($semestre));
            $tab = [];
            foreach ($planning->getEvents() as $pl) {
                $tab[$pl->ordreGroupe][$pl->gridStart] = $pl;
            }
            $this->data['planning'] = $tab;
            $this->data['p1']['groupes'] = $this->groupeRepository->findAllGroupes($semestre);
            $this->data['jours'] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
            $this->data['j1'] = $this->data['jours'][$this->data['jsem']] . ' ' . date('d/m/Y',
                    mktime(12, 30, 00, date('n'), $this->data['njour'], date('Y')));
        }

        return $this->data;
    }
}
