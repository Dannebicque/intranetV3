<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/DTO/Toolbar.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 10:37
 */

namespace App\Components\Table\DTO;

use App\Components\Widget\DTO\Widget;
use Symfony\Component\Form\FormInterface;

class Toolbar
{
    protected array $formData = [];

    /**
     * Toolbar constructor.
     */
    public function __construct(protected FormInterface $form, protected Widget $widget, protected array $options)
    {
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

    public function getOption(string $name): mixed
    {
        return $this->options[$name];
    }

    public function getFormData(): array
    {
        return $this->formData;
    }

    public function handleRequest(array $data): self
    {
        $this->formData = $data;

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
