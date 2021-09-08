<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Column/SelectColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/09/2021 14:46
 */

namespace App\Components\Table\Column;

use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\Form\Exception\UnexpectedTypeException;
use Symfony\Component\OptionsResolver\Options;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\PropertyAccess\PropertyAccess;
use Symfony\Component\PropertyAccess\PropertyAccessorInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

class SelectColumnType extends ColumnType
{
    protected TranslatorInterface $translator;
    protected EntityManagerInterface $entityManager;
    protected PropertyAccessorInterface $accessor;

    public function __construct(TranslatorInterface $translator, EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
        $this->translator = $translator;
        $this->accessor = PropertyAccess::createPropertyAccessor();
    }

    public function render($rowData, array $options): string
    {
        $obj = $this->accessor->getValue($rowData, $options['property_path']); //on récupère l'objet de la liaison

        $html = '<select class="'.$options['class_select'].'" >'; //name="'.$options['name'].'"

        if (false === $options['required']) {
            $html .= '<option value="" selected>Choisir</option>';
        }

        if (null !== $options['choices']) {
            //on a un tableau
            foreach ($options['choices'] as $key => $value) {
                if ($value === $obj->getId()) {
                    $selected = 'selected';
                } else {
                    $selected = '';
                }

                $html .= '<option value="'.$value.'" '.$selected.'>'.$key.'</option>';
            }
        } elseif (null !== $options['entity']) {
            $em = $this->entityManager->getRepository($options['entity']);
            //on a une entity
            if (null !== $options['query_builder']) {
                $queryBuilder = $options['query_builder'];
                if (\is_callable($queryBuilder)) {
                    $queryBuilder = $queryBuilder($em);

                    if (null !== $queryBuilder && !$queryBuilder instanceof QueryBuilder) {
                        throw new UnexpectedTypeException($queryBuilder, 'Doctrine\ORM\QueryBuilder');
                    }
                }
                $datas = $queryBuilder->getQuery()->getResult();
            } else {
                $datas = $em->findAll();
            }
            foreach ($datas as $data) {
                if ($data->getId() === $obj->getId()) {
                    $selected = 'selected';
                } else {
                    $selected = '';
                }

                $lib = $this->accessor->getValue($data, $options['choice_label']);

                $html .= '<option value="'.$data->getId().'" '.$selected.'>'.$lib.'</option>';
            }
        }

        $html .= '</select>';

        return $html;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);

        $resolver
            ->setDefault('property_path', function (Options $options) {
                return $options['id'];
            })
            ->setDefault('order', false)
            ->setDefault('class', 'text-center row-selector')
            ->setDefault('class_select', 'form-control')
            ->setDefault('translation_domain', null)
            ->setDefault('is_safe_html', true)
            ->setDefault('choice_id', 'id')
            ->setDefault('choice_label', 'libelle')
            ->setDefault('choices', null)
            ->setDefault('entity', null)
            ->setDefault('query_builder', null)
            ->setRequired('choices')
            ->setDefault('live_update', false)
            ->setDefault('live_update_params', '')
            ->setDefault('live_update_path', '')
            ->setDefault('required', false);
    }
}
