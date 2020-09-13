<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Mail/BaseMailer.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 13/09/2020 11:34

namespace App\Classes\Mail;

use App\Classes\Configuration;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Contracts\Translation\TranslatorInterface;

class BaseMailer
{
    protected MailerInterface $mailer;
    protected TranslatorInterface $translator;
    protected Configuration $configuration;


    /**
     * MyMailer constructor.
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
        $this->mailer = $mailer;
        $this->configuration = $configuration;
        $this->translator = $translator;
    }

    /**
     * @param array  $to
     * @param string $subject
     * @param array  $options
     *
     * @throws TransportExceptionInterface
     */
    public function baseSendMessage($mail, array $to, $subject, array $options = []): void
    {
        $mail->from($this->getFrom($options))
            ->subject($this->translator->trans($subject))
            ->replyTo($this->getReplyTo($options));

        $this->checkTo($mail, $to);
        $this->mailer->send($mail);
    }

    /**
     *
     * @param array $options
     *
     * @return Address
     */
    private function getFrom(array $options): Address
    {
        if (array_key_exists('from', $options) && count($options['from']) > 0) {
            return new Address($options['from'][0]);
        }

        return new Address($this->configuration->get('MAIL_FROM'));
    }

    /**
     * @param array $options
     *
     * @return array|string
     */
    private function getReplyTo(array $options)
    {
        if (array_key_exists('replyTofrom', $options) && count($options['replyTo']) > 0) {
            return new Address($options['replyTo']);
        }

        return new Address($this->configuration->get('MAIL_FROM'));
    }

    /**
     * @param array $mails
     *
     */
    private function checkTo($mail, array $mails): void
    {
        foreach ($mails as $m) {
            if ($m !== null && trim($m) !== '') {
                $mail->addTo(new Address(trim($m)));
            }
        }
    }

}
