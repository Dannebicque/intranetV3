<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Mail/MailerFromTwig.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/05/2022 18:21
 */

namespace App\Classes\Mail;

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
