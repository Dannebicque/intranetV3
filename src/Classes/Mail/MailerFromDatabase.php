<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Mail/MailerFromDatabase.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 02/10/2020 12:19

namespace App\Classes\Mail;


use App\Classes\Configuration;
use App\Classes\DatabaseTwigLoader;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Contracts\Translation\TranslatorInterface;
use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

class MailerFromDatabase extends BaseMailer
{
    private DatabaseTwigLoader $databaseTwigLoader;

    private Email $mail;
    /**
     * @var KernelInterface
     */
    private KernelInterface $kernel;

    /**
     * MailerFromDatabase constructor.
     *
     * @param MailerInterface     $mailer
     * @param TranslatorInterface $translator
     * @param Configuration       $configuration
     * @param DatabaseTwigLoader  $databaseTwigLoader
     */
    public function __construct(
        KernelInterface $kernel,
        MailerInterface $mailer,
        TranslatorInterface $translator,
        Configuration $configuration,
        DatabaseTwigLoader $databaseTwigLoader
    ) {
        parent::__construct($mailer, $translator, $configuration);
        $this->databaseTwigLoader = $databaseTwigLoader;
        $this->kernel = $kernel;
    }

    public function initEmail(): void
    {
        $this->mail = (new Email());
    }

    /**
     * @param string $templateName
     * @param array  $array
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function setTemplate(string $templateName, array $array): void
    {
        $twig = new Environment($this->databaseTwigLoader,
            ['cache' => $this->kernel->getCacheDir() . '/databaseTemplate/']);
        $this->mail->html($twig->render($templateName, $array));
    }

    public function sendMessage(array $to, $subject, array $options = []): void
    {
        parent::baseSendMessage($this->mail, $to, $subject, $options);
    }
}
