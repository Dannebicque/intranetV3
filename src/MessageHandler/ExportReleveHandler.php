<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/MessageHandler/ExportReleveHandler.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 13/05/2022 12:07
 */

namespace App\MessageHandler;

use App\Classes\Configuration;
use App\Classes\Etudiant\EtudiantExportReleve;
use App\Message\ExportReleve;
use App\Repository\AnneeUniversitaireRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Messenger\Attribute\AsMessageHandler;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;

#[AsMessageHandler]
class ExportReleveHandler
{
    /**
     * ExportReleveHandler constructor.
     */
    public function __construct(
        private readonly Configuration $configuration,
        private readonly EtudiantExportReleve $etudiantExportReleve,
        private readonly SemestreRepository $semestreRepository,
        private readonly AnneeUniversitaireRepository $anneeUniversitaireRepository,
        private readonly MailerInterface $mailer,
        private readonly PersonnelRepository $personnelRepository)
    {
    }

    /**
     * @throws \Twig\Error\SyntaxError
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\LoaderError
     */
    public function __invoke(ExportReleve $exportReleve): void
    {
        $semestre = $this->semestreRepository->find($exportReleve->getSemestre());
        $anneeUniversitaire = $this->anneeUniversitaireRepository->find($exportReleve->getAnneeUniversitaire());
        $personnel = $this->personnelRepository->find($exportReleve->getPersonnel());

        if (null !== $semestre && null !== $anneeUniversitaire) {
            $lien = $this->etudiantExportReleve->exportAllReleveProvisoire($semestre, $anneeUniversitaire);

            if (null !== $personnel) {
                $mail = (new TemplatedEmail())
                    ->from($this->configuration->get('MAIL_FROM'))
                    ->to($personnel->getMailUniv())
                    ->subject('Documents prêts')

                    // path of the Twig template to render
                    ->htmlTemplate('mails/documents_prets.html.twig')

                    // pass variables (name => value) to the template
                    ->context([
                        'semestre' => $semestre,
                        'personnel' => $personnel,
                        'lien' => $lien,
                        'baseUrl' => $this->configuration->get('BASE_PATH'),
                    ]);

                $this->mailer->send($mail);
            }
        }
    }
}
