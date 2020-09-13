<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Mail/MailerFromTwig.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 13/09/2020 11:21

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 24/05/2018
 * Time: 15:48
 */

namespace App\Classes\Mail;

use App\Classes\BaseMailer;
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
