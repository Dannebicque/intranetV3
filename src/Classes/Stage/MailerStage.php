<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Stage/MailerStage.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:10
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
    private MailerFromTwig $mailerFromTwig;
    private MailerFromDatabase $mailerFromDatabase;

    /**
     * MailerStage constructor.
     */
    public function __construct(MailerFromTwig $mailerFromTwig, MailerFromDatabase $mailerFromDatabase)
    {
        $this->mailerFromTwig = $mailerFromTwig;
        $this->mailerFromDatabase = $mailerFromDatabase;
    }

    /**
     * @throws TransportExceptionInterface
     */
    public function setTemplate(string $template, array $donnees, ?array $destinataires, string $sujet)
    {
        $this->mailerFromTwig->initEmail();
        $this->mailerFromTwig->setTemplate($template, $donnees);
        $this->mailerFromTwig->sendMessage($destinataires, $sujet);
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
        string $sujet
    ) {
        $this->mailerFromDatabase->initEmail();
        $this->mailerFromDatabase->setTemplate($template, $donnees);
        $this->mailerFromDatabase->sendMessage($destinataires, $sujet);
    }
}
