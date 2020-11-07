<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Mail/MailerFromTwig.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/11/2020 10:16

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
        if (strpos($template, 'html') === false) {
            $this->mail->textTemplate($template)
                ->context($data);
        } else {
            $this->mail->htmlTemplate($template)
                ->context($data);
        }

    }

    public function sendMessage(array $to, $subject, array $options = []): void
    {
        $this->baseSendMessage($this->mail, $to, $subject, $options);
    }

    public function attachFile(string $file): void
    {
        $this->baseAttachFile($this->mail, $file);
    }
}
