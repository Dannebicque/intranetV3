<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Stage/MailerStage.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/04/2021 18:55
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Stage;

use App\Classes\Mail\MailerFromDatabase;
use App\Classes\Mail\MailerFromTwig;
use App\Entity\TwigTemplate;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Twig\Error\LoaderError;
use Twig\Error\SyntaxError;

class MailerStage
{
    /**
     * MailerStage constructor.
     */
    public function __construct(private readonly MailerFromTwig $mailerFromTwig, private readonly MailerFromDatabase $mailerFromDatabase)
    {
    }

    /**
     * @throws TransportExceptionInterface
     */
    public function setTemplate(
        string $template,
        array $donnees,
        ?array $destinataires,
        string $sujet,
        array $options = []
    ): void {
        $this->mailerFromTwig->initEmail();
        $this->mailerFromTwig->setTemplate($template, $donnees);
        $this->mailerFromTwig->sendMessage($destinataires, $sujet, $options);
    }

    /**
     * @throws LoaderError
     * @throws SyntaxError
     * @throws TransportExceptionInterface
     */
    public function setTemplateFromDatabase(
        TwigTemplate $template,
        array $donnees,
        ?array $destinataires,
        string $sujet,
        array $options = []
    ): void {
        $this->mailerFromDatabase->initEmail();
        $this->mailerFromDatabase->setTemplate($template, $donnees);
        $this->mailerFromDatabase->sendMessage($destinataires, $sujet, $options);
    }
}
