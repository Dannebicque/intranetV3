<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 24/12/2018
 * Time: 16:11
 */

namespace App\MesClasses\Model;


use App\Entity\Etudiant;
use App\Entity\Semestre;

class ParcoursEtudiant
{
    /** @var Etudiant */
    private $etudiant;

    /** @var Semestre */
    private $semestreCourant;

    /**
     * ParcoursEtudiant constructor.
     *
     * @param Etudiant $etudiant
     * @param Semestre $semestreCourant
     */
    public function __construct(Etudiant $etudiant, Semestre $semestreCourant)
    {
        $this->etudiant = $etudiant;
        $this->semestreCourant = $semestreCourant;
    }


    public function getBadge(): void
    {
//        {% if sousCommission.moyennes[etudiant.id].parcours[sem.ordre].parcours.decision == 'V' %}
//        badge badge-success
//                            {% elseif sousCommission.moyennes[etudiant.id].parcours[sem.ordre].parcours.decision ==
//                            'MNC'
//                            or
//                            sousCommission.moyennes[etudiant.id].parcours[sem.ordre].parcours.decision ==
//                            sousCommission.moyennes[etudiant.id].parcours[sem.ordre].parcours.decision ==
//                            'NV' %}
//                                badge badge-danger
//                            {% elseif sousCommission.moyennes[etudiant.id].parcours[sem.ordre].parcours.decision ==
//                            'VCA'
//                            or
//                            sousCommission.moyennes[etudiant.id].parcours[sem.ordre].parcours.decision ==
//                            'VCJ' %}
//                                badge badge-warning
//                            {% endif %}
    }

    public function getDecision(): string
    {
        return '';
    }
}
