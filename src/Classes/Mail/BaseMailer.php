<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Mail/BaseMailer.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:10
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

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
     * @param $mail
     *
     * @throws TransportExceptionInterface
     */
    public function baseSendMessage($mail, array $to, string $subject, array $options = []): void
    {
        $mail->from($this->getFrom($options))
            ->subject($this->translator->trans($subject))
            ->replyTo($this->getReplyTo($options));

        $this->checkTo($mail, $to);
        $this->checkCc($mail, $options);
        $this->mailer->send($mail);
    }

    private function getFrom(array $options): Address
    {
        if (\array_key_exists('from', $options) && \count($options['from']) > 0) {
            return new Address($options['from'][0]);
        }

        return new Address($this->configuration->get('MAIL_FROM'));
    }

    /**
     * @return array|string
     */
    private function getReplyTo(array $options)
    {
        if (\array_key_exists('replyTofrom', $options) && '' !== $options['replyTo']) {
            return new Address($options['replyTo']);
        }

        return new Address($this->configuration->get('MAIL_FROM'));
    }

    /**
     * @param $mail
     */
    private function checkTo(&$mail, array $mails): void
    {
        foreach ($mails as $m) {
            if (null !== $m && '' !== trim($m)) {
                $mail->addTo(new Address(trim($m)));
            }
        }
    }

    private function checkCc(&$mail, array $options): void
    {
        if (\array_key_exists('cc', $options) && \count($options['cc']) > 0) {
            foreach ($options['cc'] as $cc) {
                $mail->addCc(new Address($cc));
            }
        }
    }

    public function baseAttachFile(&$mail, string $file): void
    {
        $mail->attachFromPath($file);
    }
}
