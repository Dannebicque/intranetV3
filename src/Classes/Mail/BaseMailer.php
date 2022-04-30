<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Mail/BaseMailer.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/06/2021 17:30
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
    /**
     * MyMailer constructor.
     */
    public function __construct(protected MailerInterface $mailer, protected TranslatorInterface $translator, protected Configuration $configuration)
    {
    }

    /**
     * @throws TransportExceptionInterface
     */
    public function baseSendMessage(Email|TemplatedEmail $mail, array $to, string $subject, array $options = []): void
    {
        $mail->from($this->getFrom($options))
            ->subject($this->translator->trans($subject));

        $this->getReplyTo($options, $mail);

        $this->checkTo($mail, $to);
        $this->checkCc($mail, $options);
        $this->mailer->send($mail);
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

    private function getReplyTo(array $options, Email|TemplatedEmail $mail): void
    {
        if (array_key_exists('replyTo', $options) && '' !== $options['replyTo']) {
            if (is_array($options['replyTo'])) {
                foreach ($options['replyTo'] as $email) {
                    $mail->addReplyTo(new Address($email));
                }
            } else {
                $mail->replyTo(new Address($options['replyTo']));
            }
        } else {
            $mail->replyTo(new Address($this->configuration->get('MAIL_FROM')));
        }
    }

    private function checkTo(Email|TemplatedEmail $mail, array $mails): void
    {
        foreach ($mails as $m) {
            if (null !== $m && '' !== trim($m)) {
                $mail->addTo(new Address(trim($m)));
            }
        }
    }

    private function checkCc(Email|TemplatedEmail $mail, array $options): void
    {
        if (array_key_exists('cc', $options) && (is_countable($options['cc']) ? count($options['cc']) : 0) > 0) {
            foreach ($options['cc'] as $cc) {
                $mail->addCc(new Address($cc));
            }
        }
    }

    public function baseAttachFile(Email|TemplatedEmail $mail, string $file): void
    {
        $mail->attachFromPath($file);
    }
}
