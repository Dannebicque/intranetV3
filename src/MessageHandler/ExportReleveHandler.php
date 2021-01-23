<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/MessageHandler/ExportReleveHandler.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 23/01/2021 14:29

namespace App\MessageHandler;


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

    /**
     * ExportReleveHandler constructor.
     *
     * @param EtudiantExportReleve         $etudiantExportReleve
     * @param SemestreRepository           $semestreRepository
     * @param AnneeUniversitaireRepository $anneeUniversitaireRepository
     * @param MailerInterface              $mailer
     * @param PersonnelRepository          $personnelRepository
     */
    public function __construct(
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
    }


    public function __invoke(ExportReleve $exportReleve)
    {
        $semestre = $this->semestreRepository->find($exportReleve->getSemestre());
        $anneeUniversitaire = $this->anneeUniversitaireRepository->find($exportReleve->getAnneeUniversitaire());
        $personnel = $this->personnelRepository->find($exportReleve->getPersonnel());

        if ($semestre !== null && $anneeUniversitaire !== null) {
            $lien = $this->etudiantExportReleve->exportAllReleveProvisoire($semestre, $anneeUniversitaire);

            if ($personnel !== null) {
                $mail = (new TemplatedEmail())
                    ->from('intranet@iut-troyes.univ-reims.fr')
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
