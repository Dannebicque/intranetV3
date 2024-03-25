<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/MessageHandler/ExportReleveHandler.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 08:10
 */

namespace App\MessageHandler;

use App\Classes\Configuration;
use App\Classes\Etudiant\EtudiantExportReleve;
use App\Message\ExportReleve;
use App\Repository\AnneeUniversitaireRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Messenger\Attribute\AsMessageHandler;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

#[AsMessageHandler]
class ExportReleveHandler
{
    /**
     * ExportReleveHandler constructor.
     */
    public function __construct(
        private Configuration                $configuration,
        private EtudiantExportReleve         $etudiantExportReleve,
        private SemestreRepository           $semestreRepository,
        private AnneeUniversitaireRepository $anneeUniversitaireRepository,
        private MailerInterface              $mailer,
        private PersonnelRepository          $personnelRepository)
    {
    }

    /**
     * @throws SyntaxError
     * @throws TransportExceptionInterface
     * @throws RuntimeError
     * @throws LoaderError
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
