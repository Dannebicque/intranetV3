<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Stage/MailerStage.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 26/09/2020 08:45

namespace App\Classes\Stage;


use App\Classes\Mail\MailerFromDatabase;
use App\Classes\Mail\MailerFromTwig;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

class MailerStage
{
    private MailerFromTwig $mailerFromTwig;
    private MailerFromDatabase $mailerFromDatabase;

    /**
     * MailerStage constructor.
     *
     * @param MailerFromTwig     $mailerFromTwig
     * @param MailerFromDatabase $mailerFromDatabase
     */
    public function __construct(MailerFromTwig $mailerFromTwig, MailerFromDatabase $mailerFromDatabase)
    {
        $this->mailerFromTwig = $mailerFromTwig;
        $this->mailerFromDatabase = $mailerFromDatabase;
    }

    /**
     * @param string     $template
     * @param array      $donnees
     * @param array|null $destinataires
     * @param string     $sujet
     *
     */
    public function setTemplate(string $template, array $donnees, ?array $destinataires, string $sujet)
    {
        $this->mailerFromTwig->initEmail();
        $this->mailerFromTwig->setTemplate($template, $donnees);
        $this->mailerFromTwig->sendMessage($destinataires, $sujet);
    }

    /**
     * @param string     $template
     * @param array      $donnees
     * @param array|null $destinataires
     * @param string     $sujet
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function setTemplateFromDatabase(
        string $template,
        array $donnees,
        ?array $destinataires,
        string $sujet
    ) {
        $this->mailerFromDatabase->initEmail();
        $this->mailerFromDatabase->setTemplate($template, $donnees);
        $this->mailerFromDatabase->sendMessage($destinataires, $sujet);
    }
}
