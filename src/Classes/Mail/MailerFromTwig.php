<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Mail/MailerFromTwig.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/05/2022 14:37
 */

namespace App\Classes\Mail;

use App\Classes\Configuration;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

class MailerFromTwig extends BaseMailer
{
    public function setTemplate(?string $template, ?array $data): void
    {
        if (!str_contains((string) $template, 'html')) {
            $this->mail->textTemplate($template)
                ->context($data);
        } else {
            $this->mail->htmlTemplate($template)
                ->context($data);
        }
    }
}
