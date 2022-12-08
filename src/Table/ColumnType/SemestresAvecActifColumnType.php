<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/ColumnType/SemestresAvecActifColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Table\ColumnType;

use DavidAnnebicque\TableBundle\Column\ColumnType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Routing\RouterInterface;

class SemestresAvecActifColumnType extends ColumnType
{
    public function __construct(private readonly RouterInterface $router)
    {
    }

    public function render(mixed $rowData, array $options): string
    {
        if (null === $rowData) {
            return 'err';
        }
        $html = '';
        foreach ($rowData->getSemestres() as $semestre) {
            if ($semestre->getActif()) {
                $html .= '<a class="btn btn-success me-1" href="'.$this->router->generate('administratif_enquete_semestre', ['semestre' => $semestre->getId()]).'">'.$semestre->getLibelle().'</a>';
            } else {
                $html .= '<a href="#" disabled="disabled" class="btn btn-outline-default me-1">'.$semestre->getLibelle().'</a>';
            }
        }

        return $html;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
    }
}
