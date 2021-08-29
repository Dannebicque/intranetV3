<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/DTO/Toolbar.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/08/2021 11:46
 */

namespace App\Components\Table\DTO;

use App\Components\Widget\DTO\Widget;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\Request;

class Toolbar
{
    protected FormInterface $form;

    protected Widget $widget;

    protected array $options;

    protected array $formData = [];

    /**
     * Toolbar constructor.
     */
    public function __construct(FormInterface $form, Widget $widget, array $options)
    {
        $this->form = $form;
        $this->widget = $widget;
        $this->options = $options;
    }

    public function getForm(): FormInterface
    {
        return $this->form;
    }

    public function getWidget(): Widget
    {
        return $this->widget;
    }

    public function getOptions(): array
    {
        return $this->options;
    }

    public function getOption(string $name)
    {
        return $this->options[$name];
    }

    public function getFormData(): array
    {
        return $this->formData;
    }

    public function handleRequest(array $data): self
    {
        if (null !== $data && !is_array($data)) {
            throw new \InvalidArgumentException('Toolbar can only handle array form::getData()');
        }

        $this->formData = $data ?? [];

        return $this;
    }

    public function submitData(array $data): self
    {
        $name = $this->form->getName();

        if (isset($data[$name]) && is_array($data[$name])) {
            $this->form->submit($data[$name]);
        }

        $data = $this->form->getData();
        $this->formData = $data ?? [];

        return $this;
    }
}
