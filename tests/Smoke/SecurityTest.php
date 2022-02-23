<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/tests/Smoke/SecurityTest.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/01/2022 15:20
 */

namespace App\Tests\Smoke;

use Generator;

class SecurityTest extends SmokeTestCase
{
    public function provideRoutes(): Generator
    {
        yield 'login' => ['path' => '/fr/connexion'];
    }
}
