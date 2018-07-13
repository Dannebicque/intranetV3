<?php

namespace App\Listener;

use Symfony\Component\HttpKernel\Event\FilterResponseEvent;

/**
 * Class AjaxProfiler
 *
 * @package App\AppListener
 */
class AjaxProfiler
{
    //todo: ne fonctionne pas ?
    public function onKernelResponse(FilterResponseEvent $event): void
    {
        $response = $event->getResponse();

        $response->headers->set('Symfony-Debug-Toolbar-Replace', 1);
    }
}