<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Adapter/AbstractMatiereAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/05/2022 13:12
 */

namespace App\Adapter;

use App\DTO\Matiere;
use App\Interfaces\MatiereEntityInterface;

abstract class AbstractMatiereAdapter
{
    public function single(?MatiereEntityInterface $matiere): ?Matiere
    {
        if (null === $matiere) {
            return null;
        }

        $m = new Matiere();
        $m->typeMatiere = $matiere::SOURCE;
        $m->libelle = $matiere->getLibelle();
        $m->display = $matiere->getDisplay();
        $m->codeMatiere = $matiere->getCodeMatiere();
        $m->codeElement = $matiere->getCodeElement();

        $m->cmPpn = $matiere->getCmPpn();
        $m->tdPpn = $matiere->getTdPpn();
        $m->tpPpn = $matiere->getTpPpn();

        $m->nbNotes = $matiere->getNbNotes();

        $m->cmFormation = $matiere->getCmFormation();
        $m->tdFormation = $matiere->getTdFormation();
        $m->tpFormation = $matiere->getTpFormation();
        $m->suspendu = $matiere->isSuspendu();

        $m->mutualisee = $matiere->getMutualisee();
        $m->objet = $matiere;

        return $m;
    }
}
