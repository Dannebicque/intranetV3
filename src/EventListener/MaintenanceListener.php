<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/EventListener/MaintenanceListener.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 02/10/2020 11:50

namespace App\EventListener;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelInterface;
use Twig\Environment;

class MaintenanceListener
{
    private $maintenance, $ipAuthorized;
    /**
     * @var Environment
     */
    private Environment $twig;
    /**
     * @var KernelInterface
     */
    private KernelInterface $kernel;

    public function __construct($maintenance, Environment $template, KernelInterface $kernel)
    {
        $this->twig = $template;
        $this->kernel = $kernel;
        $this->maintenance = $maintenance["statut"];
        $this->ipAuthorized = $maintenance["ipAuthorized"];
    }

    public function onKernelRequest(RequestEvent $event)
    {
        if (!$event->isMasterRequest()) {
            // don't do anything if it's not the master request
            return;
        }

// This will get the value of our maintenance parameter
        $maintenance = $this->maintenance ? $this->maintenance : false;
        $currentIP = $_SERVER['REMOTE_ADDR'];
// This will detect if we are in dev environment (app_dev.php)
        if ($this->kernel->getEnvironment() === 'prod') {
// If maintenance is active and in prod environment
            if ($maintenance and !in_array($currentIP, $this->ipAuthorized)) {
// We load our maintenance template
                $template = $this->twig->render('maintenance/maintenance.html.twig');
// We send our response with a 503 response code (service unavailable)
                $event->setResponse(new Response($template, 503));
                $event->stopPropagation();
            }
        }
    }
}
