<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/TypeDestinataire/Etudiant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 27/11/2022 17:42
 */

namespace App\Components\Questionnaire\TypeDestinataire;

use App\Classes\Mail\MailerFromTwig;
use App\Components\Questionnaire\Interfaces\QuestChoixInterface;
use App\Components\Questionnaire\Interfaces\TypeDestinataireInterface;
use App\Entity\QuestChoixEtudiant;
use App\Repository\EtudiantRepository;
use App\Repository\QuestChoixEtudiantRepository;
use Doctrine\ORM\EntityManagerInterface;
use Ramsey\Uuid\Uuid;

class Etudiant extends AbstractTypeDestinataire implements TypeDestinataireInterface
{
    public const LABEL = 'etudiant';
    public const ENTITY = QuestChoixEtudiant::class;

    public function __construct(
        protected MailerFromTwig $myMailer,
        protected EntityManagerInterface $entityManager,
        protected QuestChoixEtudiantRepository $questChoixEtudiantRepository,
        protected EtudiantRepository $etudiantRepository
    ) {
    }

    public function getListe(): array
    {
        return $this->etudiantRepository->findBySemestre($this->questionnaire->getSemestre());
    }

    public function getListeDestinataire(): array
    {
        return $this->questChoixEtudiantRepository->findByQuestionnaire($this->questionnaire);
    }

    public function send(array $liste): void
    {
        foreach ($liste as $etu) {
            $etudiant = $this->etudiantRepository->find($etu);

            if ($etudiant !== null) {
                $questChoixEtudiant = new QuestChoixEtudiant();
                $questChoixEtudiant->setEtudiant($etudiant);
                $questChoixEtudiant->setQuestionnaire($this->questionnaire);
                $questChoixEtudiant->setCleQuestionnaire(Uuid::uuid4());
                $this->myMailer->initEmail();
                $this->myMailer->setTemplate('components/questionnaire/mails/envoi_questionnaire.html.twig',
                    ['questionnaire' => $this->questionnaire, 'questChoix' => $questChoixEtudiant]);
                $this->myMailer->sendMessage($etudiant->getMails(),
                    '[Questionnaire Qualité] ' . $this->questionnaire->getLibelle());
                $questChoixEtudiant->setDateEnvoi(new \DateTime());
                $this->entityManager->persist($questChoixEtudiant);
                $this->entityManager->flush();
            }
        }
        $this->questionnaire->setEnvoye(true);
        $this->entityManager->flush();
    }

    public function getChoixUser(string $uuid): QuestChoixInterface
    {
        return $this->questChoixEtudiantRepository->findOneBy([
            'cleQuestionnaire' => $uuid,
            'questionnaire' => $this->questionnaire
        ]);
    }
}
