<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/DTO/ArticleAide.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 11/12/2020 15:45

namespace App\DTO;


use DateTimeInterface;

class ArticleAide
{
    public string $titre;
    public string $content;
    public DateTimeInterface $lastUpdate;
}
