<?php

namespace App\Command;

use App\Classes\Mail\MailerFromTwig;
use App\Repository\QuestionnaireQualiteRepository;
use DateTime;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:messages-qualite',
    description: 'Commande qui scanne les questionnaires qualités en attente, et envois des mails de rappels à J-2, J-1',
)]
class MessagesQualiteCommand extends Command
{
    protected QuestionnaireQualiteRepository $questionnaireQualiteRepository;
    protected MailerFromTwig $mailer;

    public function __construct(QuestionnaireQualiteRepository $questionnaireQualiteRepository, MailerFromTwig $mailer)
    {
        parent::__construct();
        $this->questionnaireQualiteRepository = $questionnaireQualiteRepository;
        $this->mailer = $mailer;
    }

    protected function configure(): void
    {
        //pas d'argument ou de commande particulière
    }

    /**
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        //todo: prendre en compte le WE/jours fériés....
        //todo: envoyé aux RP et aux assistantes (Maud en copie sur les premiers)
        //todo: fiches résultats découpées. Tout sauf les autres collègues.
        //todo: supprimer une question d'une section pour un questionnaire spécifique
        //todo: page RP identique à la page de Maud, sans les édit, et uniquement la formation.
        $io = new SymfonyStyle($input, $output);
        $nbMessages = 0;
        $questionnaires = $this->questionnaireQualiteRepository->findInDate((new DateTime())->modify('+2 days')); //tous les questionnaires dans deux jours
        /** @var \App\Entity\QuestionnaireQualite $questionnaire */
        foreach ($questionnaires as $questionnaire) {
            $dests = [
                $questionnaire->getSemestre()->getDiplome()->getAssistantDiplome()->getMailUniv(),
                $questionnaire->getSemestre()->getDiplome()->getResponsableDiplome()->getMailUniv(),
            ];
            $this->mailer->initEmail();
            $this->mailer->setTemplate('mails/qualite/rappel-j2-S1.html.twig', [
                'questionnaire' => $questionnaire,
            ]);
            $this->mailer->sendMessage($dests, 'Rappel questionnaire qualité', ['replyTo' => 'maud.briet@univ-reims.fr', 'cc' => 'maud.briet@univ-reims.fr']);
            ++$nbMessages;
        }

        $io->success(sprintf('%d messages ont été envoyées', $nbMessages));

        return Command::SUCCESS;
    }
}
