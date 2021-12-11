<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Table/ColumnType/SemestreColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 12:18
 */

namespace App\Table\ColumnType;

use App\Components\Table\Column\ColumnType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Routing\RouterInterface;

class SemestresAvecActifColumnType extends ColumnType
{
    private RouterInterface $router;

    public function __construct(RouterInterface $router)
    {
        $this->router = $router;
    }

    public function render($rowData, array $options): string
    {
        if (null === $rowData) {
            return 'err';
        }
        $html = '';
        foreach ($rowData->getSemestres() as $semestre) {
            if ($semestre->getActif()) {
                $html .= '<a class="btn btn-success me-1" href="'.$this->router->generate('administratif_enquete_semestre', ['semestre' => $semestre->getId()]).'">' . $semestre->getLibelle() . '</a>';
            } else {
                $html .= '<a href="#" disabled="disabled" class="btn btn-outline-default me-1">' . $semestre->getLibelle() . '</a>';
            }

        }

        return $html;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
    }
}
