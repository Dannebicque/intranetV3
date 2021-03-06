<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Mail/MailerFromTwig.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:10
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Mail;

use App\Classes\Configuration;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

/**
 * Class MailerFromTwig.
 */
class MailerFromTwig extends BaseMailer
{
    private TemplatedEmail $mail;

    /**
     * MailerFromTwig constructor.
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
     */
    public function setTemplate($template, $data): void
    {
        if (false === mb_strpos($template, 'html')) {
            $this->mail->textTemplate($template)
                ->context($data);
        } else {
            $this->mail->htmlTemplate($template)
                ->context($data);
        }
    }

    /**
     * @param $subject
     *
     * @throws TransportExceptionInterface
     */
    public function sendMessage(array $to, $subject, array $options = []): void
    {
        $this->baseSendMessage($this->mail, $to, $subject, $options);
    }

    public function attachFile(string $file): void
    {
        $this->baseAttachFile($this->mail, $file);
    }
}
