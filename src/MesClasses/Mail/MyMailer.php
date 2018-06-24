<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 24/05/2018
 * Time: 15:48
 */

namespace App\MesClasses\Mail;


/**
 * Class MyMailer
 * @package App\MesClasses\Mail
 */
class MyMailer
{
    /** @var \Swift_Mailer */
    private $mailer;

    /**
     * MyMailer constructor.
     *
     * @param \Swift_Mailer $mailer
     */
    public function __construct(\Swift_Mailer $mailer)
    {
        $this->mailer = $mailer;
    }


}