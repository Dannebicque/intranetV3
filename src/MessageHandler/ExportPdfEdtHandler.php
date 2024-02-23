<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/MessageHandler/ExportPdfEdtHandler.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\MessageHandler;

use App\Classes\Configuration;
use App\Classes\Edt\MyEdtExport;
use App\Message\ExportPdfEdt;
use App\Repository\DepartementRepository;
use App\Repository\PersonnelRepository;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Messenger\Attribute\AsMessageHandler;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

#[AsMessageHandler]
readonly class ExportPdfEdtHandler
{
    /**
     * ExportReleveHandler constructor.
     */
    public function __construct(
        private Configuration         $configuration,
        private MyEdtExport           $myEdtExport,
        private DepartementRepository $departementRepository,
        private MailerInterface       $mailer,
        private PersonnelRepository   $personnelRepository
    ) {
    }
    /**
     * @throws SyntaxError
     * @throws TransportExceptionInterface
     * @throws RuntimeError
     * @throws LoaderError
     */
    public function __invoke(ExportPdfEdt $exportPdfEdt)
    {
        $departement = $this->departementRepository->find($exportPdfEdt->getDepartement());
        $personnel = $this->personnelRepository->find($exportPdfEdt->getPersonnel());

        if (null !== $departement && null !== $personnel) {
            foreach ($exportPdfEdt->getPersonnels() as $idPersonnel) {
                $pers = $this->personnelRepository->find($idPersonnel);
                if (null !== $pers) {
                    $this->myEdtExport->generePdf($pers, 'intranet', $departement);
                }
            }
            $this->myEdtExport->compressDir($departement);

            $mail = (new TemplatedEmail())
                ->from($this->configuration->get('MAIL_FROM'))
                ->to($personnel->getMailUniv())
                ->subject('Documents prêts')

                // path of the Twig template to render
                ->htmlTemplate('mails/documents_prets.html.twig')

                // pass variables (name => value) to the template
                    // todo: a finir pour les expors des PDF des EDT sur le principes des notes avec RabbitMq...
                ->context([
//                    'semestre' => $semestre,
//                    'personnel' => $personnel,
//                    'lien' => $lien,
                ]);

            $this->mailer->send($mail);
        }
    }
}
