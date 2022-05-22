<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Mail/MailerFromDatabase.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/05/2022 18:20
 */

namespace App\Classes\Mail;

use App\Classes\Configuration;
use App\Entity\TwigTemplate;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Contracts\Translation\TranslatorInterface;
use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\SyntaxError;

class MailerFromDatabase extends BaseMailer
{
    /**
     * MailerFromDatabase constructor.
     */
    public function __construct(
        private readonly Environment $twig,
        MailerInterface $mailer,
        TranslatorInterface $translator,
        Configuration $configuration
    ) {
        parent::__construct($mailer, $translator, $configuration);
    }

    /**
     * @throws LoaderError
     * @throws SyntaxError
     */
    public function setTemplate(TwigTemplate $templateName, array $array): void
    {
        $template = $this->twig->createTemplate($templateName->getSource());
        $this->mail->html($template->render($array));
    }
}
