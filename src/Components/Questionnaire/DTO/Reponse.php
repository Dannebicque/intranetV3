<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/DTO/Reponse.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/08/2021 08:00
 */

namespace App\Components\Questionnaire\DTO;

use Symfony\Component\OptionsResolver\OptionsResolver;

class Reponse
{
    public int $id;
    public string $libelle;
    public string|int $valeur;
    public int $ordre = 1;
    protected array $options = [];

    public function __construct(int $id, string $libelle, string|int $valeur, int $ordre = 1,  array $options = [])
    {
        $this->id = $id;
        $this->libelle = $libelle;
        $this->valeur = $valeur;
        $this->ordre = $ordre;

        $this->resolveOptions($options);
    }

    private function resolveOptions(array $options)
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
            'alignement' => null
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
