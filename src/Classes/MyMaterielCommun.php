<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyMaterielCommun.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 19/09/2020 09:29

namespace App\Classes;


use App\Entity\Constantes;
use App\Entity\MaterielCommunPret;
use App\Repository\MaterielCommunPretRepository;
use App\Repository\MaterielCommunRepository;

class MyMaterielCommun
{

    private MaterielCommunRepository $materielCommunRepository;
    private MaterielCommunPretRepository $materielCommunPretRepository;
    private array $jours;

    /**
     * MyMaterielCommun constructor.
     *
     * @param MaterielCommunRepository     $materielCommunRepository
     * @param MaterielCommunPretRepository $materielCommunPretRepository
     */
    public function __construct(
        MaterielCommunRepository $materielCommunRepository,
        MaterielCommunPretRepository $materielCommunPretRepository
    ) {
        $this->materielCommunRepository = $materielCommunRepository;
        $this->materielCommunPretRepository = $materielCommunPretRepository;
    }


    /**
     * @param string $role
     *
     * @return array
     */
    public function getJours()
    {
        $this->jours = [];
        $this->nbjouremprunt = 28;
        $j = -2;


        for ($i = 0; $i < $this->nbjouremprunt; $i++) {
            $d = mktime(0, 0, 0, date('m'), date('d') + $j, date('Y'));
            $jour = date('N', $d);
            if ($jour != 6 && $jour != 7) {
                $this->jours[$i]['jour'] = Constantes::TAB_JOURS[date('N', $d)];
                $this->jours[$i]['texte'] = date('d/m/Y', $d);
                $this->jours[$i]['date'] = date('Y-m-d', $d);
                $this->jours[$i]['objDate'] = $d;
                $this->jours[$i]['i'] = $i;
            }
            $j++;
        }

        return $this->jours;
    }

    /**
     * @param array $jours
     *
     * @return array
     */
    public function obtainDispoMateriel($jours)
    {
        $prets = $this->materielCommunPretRepository->findAll();
        $t = [];

        foreach ($jours as $j) {
            $t[$j['date']]['0800'] = [];
            $t[$j['date']]['0930'] = [];
            $t[$j['date']]['1100'] = [];
            $t[$j['date']]['1400'] = [];
            $t[$j['date']]['1530'] = [];
            $t[$j['date']]['1700'] = [];
        }

        /** @var MaterielCommunPret $p */
        foreach ($prets as $p) {
            $t[$p->getDateEmprunt()->format('Y-m-d')][$p->getCreneau()][$p->getMaterielCommun()->getId()] = $p;
        }

        return $t;
    }
}
