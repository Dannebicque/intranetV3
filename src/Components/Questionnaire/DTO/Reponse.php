<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/DTO/Reponse.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/01/2023 11:04
 */

namespace App\Components\Questionnaire\DTO;

use Symfony\Component\OptionsResolver\OptionsResolver;

class Reponse
{
    protected array $options = [];

    public function __construct(
        public int $id,
        public string $libelle,
        public string|int $valeur,
        public int $ordre = 1,
        array $options = []
    ) {
        $this->resolveOptions($options);
    }

    private function resolveOptions(array $options): void
    {
        $resolver = new OptionsResolver();

        // Configure options from bundle config
        $resolver
            ->setDefault('alignement', '');

        // resolve
        $this->options = $resolver->resolve($options);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'alignement' => null,
        ]);
    }

    public function getOptions(): array
    {
        return $this->options;
    }

    public function getOption(string $name): string
    {
        return $this->options[$name];
    }
}
