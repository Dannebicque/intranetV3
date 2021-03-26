<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/MessageHandler/ExportReleveHandler.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/03/2021 08:12
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
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;

class ExportReleveHandler implements MessageHandlerInterface
{
    private EtudiantExportReleve $etudiantExportReleve;
    private SemestreRepository $semestreRepository;
    private AnneeUniversitaireRepository $anneeUniversitaireRepository;
    private PersonnelRepository $personnelRepository;
    private MailerInterface $mailer;
    private Configuration $configuration;

    /**
     * ExportReleveHandler constructor.
     */
    public function __construct(
        Configuration $configuration,
        EtudiantExportReleve $etudiantExportReleve,
        SemestreRepository $semestreRepository,
        AnneeUniversitaireRepository $anneeUniversitaireRepository,
        MailerInterface $mailer,
        PersonnelRepository $personnelRepository
    ) {
        $this->etudiantExportReleve = $etudiantExportReleve;
        $this->semestreRepository = $semestreRepository;
        $this->anneeUniversitaireRepository = $anneeUniversitaireRepository;
        $this->personnelRepository = $personnelRepository;
        $this->mailer = $mailer;
        $this->configuration = $configuration;
    }

    public function __invoke(ExportReleve $exportReleve)
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
                        'semestre'  => $semestre,
                        'personnel' => $personnel,
                        'lien'      => $lien,
                    ]);

                $this->mailer->send($mail);
            }
        }
    }
}
