<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 16/06/2018
 * Time: 08:51
 */

namespace App\MesClasses;


use Symfony\Component\Routing\RouterInterface;

abstract class MyRoute
{

    /** @var RouterInterface */
    private static $router;

    /**
     * MyRoute constructor.
     *
     * @param RouterInterface $router
     */
    public function __construct(RouterInterface $router)
    {
        self::$router = $router;
    }

    public static function getRoute($name, $params): string
    {
        return self::$router->generate($name, $params);
    }
}