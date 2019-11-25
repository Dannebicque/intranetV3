<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/Mail/MyMailer.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 24/05/2018
 * Time: 15:48
 */

namespace App\MesClasses\Mail;

use App\MesClasses\Configuration;
use App\Twig\DatabaseTwigLoader;
use Swift_Mailer;
use Swift_Message;
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
    /** @var Swift_Mailer */
    private $mailer;

    /** @var Environment */
    protected $templating;

    private $template;

    /** @var DatabaseTwigLoader */
    protected $databaseTwigLoader;

    /** @var TranslatorInterface */
    protected $translator;

    /**
     * MyMailer constructor.
     *
     * @param Swift_Mailer        $mailer
     * @param Environment         $templating
     * @param DatabaseTwigLoader  $databaseTwigLoader
     * @param TranslatorInterface $translator
     */
    public function __construct(
        Swift_Mailer $mailer,
        Environment $templating,
        DatabaseTwigLoader $databaseTwigLoader,
        TranslatorInterface $translator
    )
    {
        $this->mailer = $mailer;
        $this->translator = $translator;
        $this->templating = $templating;
        $this->databaseTwigLoader = $databaseTwigLoader;
    }

    /**
     * @param array  $to
     * @param string $subject
     * @param array  $options
     */
    public function sendMessage(array $to, $subject, array $options = []): void
    {
        $mail = new Swift_Message();

        $mail
            ->setFrom($this->getFrom($options))
            ->setTo($this->checkTo($to))
            ->setSubject($this->translator->trans($subject))
            ->setBody($this->template)
            ->setReplyTo($this->getReplyTo($options))
            ->setContentType($this->getContentType($options));

        $this->mailer->send($mail);
    }

    /**
     * @param array $mails
     *
     * @return array
     */
    private function checkTo(array $mails): array
    {
        $to = array();

        foreach ($mails as $m) {
            if ($m !== null && trim($m) !== '') {
                $to[] = trim($m);
            }
        }

        return $to;
    }


    /**
     * @param $template
     * @param $data
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function setTemplate($template, $data): void
    {
        $this->template = $this->templating->render($template, $data);
    }

    /**
     *
     * @param array $options
     *
     * @return array
     */
    private function getFrom(array $options): array
    {
        if (array_key_exists('from', $options) && count($options['from']) > 0) {
            return $this->checkTo($options['from']);
        }

        return [Configuration::get('MAIL_FROM')];
    }

    /**
     * @param array $options
     *
     * @return array|string
     */
    private function getReplyTo(array $options)
    {
        if (array_key_exists('replyTofrom', $options) && count($options['replyTo']) > 0) {
            return $this->checkTo($options['replyTo']);
        }

        return [Configuration::get('MAIL_FROM')];
    }

    /**
     * @param $options
     *
     * @return string
     */
    private function getContentType(array $options): string
    {
        if (array_key_exists('content-type', $options) && $options['content-type'] !== '') {
            return $options['content-type'];
        }

        return 'text/plain';
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
}
