<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Mail/MailerFromDatabase.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/12/2020 14:31

namespace App\Classes\Mail;

use App\Classes\Configuration;
use App\Entity\TwigTemplate;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Contracts\Translation\TranslatorInterface;
use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\SyntaxError;

class MailerFromDatabase extends BaseMailer
{
    private Email $mail;

    private Environment $twig;

    /**
     * MailerFromDatabase constructor.
     *
     * @param Environment         $twig
     * @param MailerInterface     $mailer
     * @param TranslatorInterface $translator
     * @param Configuration       $configuration
     */
    public function __construct(
        Environment $twig,
        MailerInterface $mailer,
        TranslatorInterface $translator,
        Configuration $configuration
    ) {
        parent::__construct($mailer, $translator, $configuration);
        $this->twig = $twig;
    }

    public function initEmail(): void
    {
        $this->mail = (new Email());
    }

    /**
     * @param TwigTemplate $templateName
     * @param array        $array
     *
     * @throws LoaderError
     * @throws SyntaxError
     */
    public function setTemplate(TwigTemplate $templateName, array $array): void
    {
        $template = $this->twig->createTemplate($templateName->getSource());
        $this->mail->html($template->render($array));
    }

    /**
     * @param array $to
     * @param       $subject
     * @param array $options
     *
     * @throws TransportExceptionInterface
     */
    public function sendMessage(array $to, $subject, array $options = []): void
    {
        $this->baseSendMessage($this->mail, $to, $subject, $options);
    }
}
