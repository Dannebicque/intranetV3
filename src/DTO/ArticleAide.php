<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DTO/ArticleAide.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:41
 */

namespace App\DTO;

use DateTimeInterface;

class ArticleAide
{
    public string $titre;
    public string $content;
    public DateTimeInterface $lastUpdate;
}
