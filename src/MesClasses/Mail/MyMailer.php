<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 24/05/2018
 * Time: 15:48
 */

namespace App\MesClasses\Mail;

use App\Entity\Constantes;
use Symfony\Bundle\FrameworkBundle\Templating\EngineInterface;


/**
 * Class MyMailer
 * @package App\MesClasses\Mail
 */
class MyMailer
{
    /** @var \Swift_Mailer */
    private $mailer;

    /** @var EngineInterface */
    protected $templating;

    private $template;

    /**
     * MyMailer constructor.
     *
     * @param \Swift_Mailer   $mailer
     * @param EngineInterface $templating
     */
    public function __construct(\Swift_Mailer $mailer, EngineInterface $templating)
    {
        $this->mailer = $mailer;
        $this->templating = $templating;
    }

    /**
     * @param array  $to
     * @param string $subject
     * @param array  $options
     */
    public function sendMessage(array $to, $subject, array $options = []): void
    {
        $mail = new \Swift_Message();

        $mail
            ->setFrom($this->getFrom($options))
            ->setTo($this->checkTo($to))
            ->setSubject($subject)
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
     */
    public function setTemplate($template, $data): void
    {
        $this->template = $this->templating->render($template, $data);
    }

    /**
     * @param $from
     *
     * @return array
     */
    private function getFrom(array $options): array
    {
        if (array_key_exists('from', $options) && \count($options['from']) > 0) {
            return $this->checkTo($options['from']);
        }

        return [Constantes::MAIL_FROM];
    }

    /**
     * @param $replyTo
     *
     * @return array|string
     */
    private function getReplyTo(array $options)
    {
        if (array_key_exists('replyTofrom', $options) && \count($options['replyTo']) > 0) {
            return $this->checkTo($options['replyTo']);
        }

        return [Constantes::MAIL_FROM];
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
}