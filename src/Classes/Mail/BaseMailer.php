<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Mail/BaseMailer.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/05/2022 18:20
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Mail;

use App\Classes\Configuration;
use function array_key_exists;
use function count;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\Mime\Email;
use Symfony\Contracts\Translation\TranslatorInterface;

class BaseMailer
{
    protected Email|TemplatedEmail $mail;

    /**
     * MyMailer constructor.
     */
    public function __construct(
        protected MailerInterface $mailer,
        protected TranslatorInterface $translator,
        protected Configuration $configuration
    ) {
    }

    public function initEmail(): void
    {
        $this->mail = new TemplatedEmail();
    }

    /**
     * @throws TransportExceptionInterface
     */
    public function sendMessage(array $to, string $subject, array $options = []): void
    {
        $this->mail->from($this->getFrom($options))
            ->subject($this->translator->trans($subject));

        $this->getReplyTo($options);

        $this->checkTo($to);
        $this->checkCc($options);
        $this->mailer->send($this->mail);
    }

    private function getFrom(array $options): Address
    {
        // todo: ne sert plus ? tout passe par le mail générique ?
        if (array_key_exists('from', $options) && (is_countable($options['from']) ? count($options['from']) : 0) > 0) {
            if ($options['from'][0] instanceof Address) {
                return $options['from'][0];
            }

            return new Address($options['from'][0]);
        }

        return $this->configuration->getExpediteurIntranet();
    }

    private function getReplyTo(array $options): void
    {
        if (array_key_exists('replyTo', $options) && '' !== $options['replyTo']) {
            if (is_array($options['replyTo'])) {
                foreach ($options['replyTo'] as $email) {
                    $this->mail->addReplyTo(new Address($email));
                }
            } else {
                $this->mail->replyTo(new Address($options['replyTo']));
            }
        } else {
            $this->mail->replyTo(new Address($this->configuration->get('MAIL_FROM')));
        }
    }

    private function checkTo(array $mails): void
    {
        foreach ($mails as $m) {
            if (null !== $m && '' !== trim($m)) {
                $this->mail->addTo(new Address(trim($m)));
            }
        }
    }

    private function checkCc(array $options): void
    {
        if (array_key_exists('cc', $options) && (is_countable($options['cc']) ? count($options['cc']) : 0) > 0) {
            foreach ($options['cc'] as $cc) {
                $this->mail->addCc(new Address($cc));
            }
        }
    }

    public function attachFile(string $file): void
    {
        $this->mail->attachFromPath($file);
    }
}
