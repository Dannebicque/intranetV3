<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Reponse.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/08/2021 08:00
 */

namespace App\Components\Questionnaire;

use Symfony\Component\OptionsResolver\OptionsResolver;

class Reponse
{
    public int $id;
    public string $libelle;
    public string|int $valeur;
    public int $ordre = 1;
    protected array $options = [];

    public function __construct(int $id, string $libelle, string|int $valeur, int $ordre = 1, array $options = [])
    {
        $this->id = $id;
        $this->libelle = $libelle;
        $this->valeur = $valeur;
        $this->ordre = $ordre;

        $resolver = new OptionsResolver();
        $this->configureOptions($resolver);
        $this->options = $resolver->resolve($options);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
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
