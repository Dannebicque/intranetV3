<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Mail/MailerFromTwig.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 02/10/2020 11:01

namespace App\Classes\Mail;

use App\Classes\Configuration;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Contracts\Translation\TranslatorInterface;


/**
 * Class MailerFromTwig
 * @package App\Classes\Mail
 */
class MailerFromTwig extends BaseMailer
{
    private TemplatedEmail $mail;

    /**
     * MailerFromTwig constructor.
     *
     * @param MailerInterface     $mailer
     * @param TranslatorInterface $translator
     * @param Configuration       $configuration
     */
    public function __construct(
        MailerInterface $mailer,
        TranslatorInterface $translator,
        Configuration $configuration
    ) {
        parent::__construct($mailer, $translator, $configuration);
    }


    public function initEmail(): void
    {
        $this->mail = new TemplatedEmail();
    }

    /**
     * @param $template
     * @param $data
     *
     */
    public function setTemplate($template, $data): void
    {
        $this->mail->textTemplate($template)
            ->context($data);
    }

    public function sendMessage(array $to, $subject, array $options = []): void
    {
        parent::baseSendMessage($this->mail, $to, $subject, $options);
    }
}
