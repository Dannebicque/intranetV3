<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Mail/MyMailer.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:33

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 24/05/2018
 * Time: 15:48
 */

namespace App\Classes\Mail;

use App\Classes\Configuration;
use App\Twig\DatabaseTwigLoader;
use Swift_Mailer;
use Swift_Message;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Contracts\Translation\TranslatorInterface;
use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;
use function count;

/**
 * Class MyMailer
 * @package App\MesClasses\Mail
 */
class MyMailer
{
    /** @var MailerInterface */
    private $mailer;

    /** @var Environment */
    protected $templating;

    private $template;

    /** @var DatabaseTwigLoader */
    protected $databaseTwigLoader;

    /** @var TranslatorInterface */
    protected $translator;
    /**
     * @var TemplatedEmail
     */
    private $mail;

    /**
     * MyMailer constructor.
     *
     * @param MailerInterface        $mailer
     * @param Environment         $templating
     * @param DatabaseTwigLoader  $databaseTwigLoader
     * @param TranslatorInterface $translator
     */
    public function __construct(
        MailerInterface $mailer,
        Environment $templating,
        DatabaseTwigLoader $databaseTwigLoader,
        TranslatorInterface $translator
    )
    {
        $this->mailer = $mailer;
        $this->translator = $translator;
        $this->templating = $templating;
        $this->databaseTwigLoader = $databaseTwigLoader;
        $this->mail = new TemplatedEmail();
    }

    /**
     * @param array  $to
     * @param string $subject
     * @param array  $options
     *
     * @throws TransportExceptionInterface
     */
    public function sendMessage(array $to, $subject, array $options = []): void
    {
        $this->mail->from($this->getFrom($options))
            ->subject($this->translator->trans($subject))
            ->replyTo($this->getReplyTo($options));

        $this->checkTo($to);
        $this->mailer->send($this->mail);
    }

    /**
     * @param array $mails
     *
     */
    private function checkTo(array $mails): void
    {
        foreach ($mails as $m) {
            if ($m !== null && trim($m) !== '') {
                $this->mail->addTo(new Address(trim($m)));
            }
        }
    }


    /**
     * @param $template
     * @param $data
     *
     */
    public function setTemplate($template, $data): void
    {
        $this->mail->htmlTemplate($template)
            ->context($data);
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

        return new Address(Configuration::get('MAIL_FROM'));
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

        return new Address(Configuration::get('MAIL_FROM'));
    }

    /**
     * @param string $templateName
     * @param array  $array
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function setTemplateFromDatabase(string $templateName, array $array): void
    {
        $twig = new Environment($this->databaseTwigLoader);

        $this->template = $twig->render($templateName, $array);
    }

    public function initMessage()
    {
        $this->mail = new TemplatedEmail();
    }
}
