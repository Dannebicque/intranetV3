<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/MyMessagerie.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/07/2023 16:34
 */

namespace App\Classes;

use App\Classes\Previsionnel\PrevisionnelManager;
use App\Entity\Departement;
use App\Entity\Etudiant;
use App\Entity\Message;
use App\Entity\MessageDestinataireEtudiant;
use App\Entity\MessageDestinatairePersonnel;
use App\Entity\MessagePieceJointe;
use App\Entity\Personnel;
use App\Interfaces\UtilisateurInterface;
use App\Repository\EtudiantRepository;
use App\Repository\GroupeRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use function count;

class MyMessagerie
{
    private ?string $sujet = null;

    private ?string $message = null;

    private int $nbMessagesEnvoyes = 0;
    private int $nbEtudiants = 0;

    private ?Personnel $expediteur = null;

    /** @var Etudiant[] */
    private array|Collection $etudiants = [];

    private string $typeDestinataires = '';
    private string $logMessagerie = '';
    private ?string $type = null;
    private int $id;
    private array $pjs = [];
    private array $personnels = [];

    /**
     * MyMessagerie constructor.
     */
    public function __construct(
        private readonly MailerInterface $myMailer,
        private readonly EntityManagerInterface $entityManager,
        private readonly GroupeRepository $groupeRepository,
        private readonly EtudiantRepository $etudiantRepository,
        private readonly SemestreRepository $semestreRepository,
        private readonly PersonnelRepository $personnelRepository,
        private readonly PrevisionnelManager $previsionnelManager,
        private readonly Configuration $configuration
    ) {
    }

    /**
     * @throws TransportExceptionInterface
     */
    public function sendToPersonnels(): void
    {
        // mail réel + notification (utiliser le busMessage ?
        // sauvegarde en BDD
        $mess = $this->saveMessageDatabase(Message::ETAT_MESSAGE_ENVOYE);

        foreach ($this->personnels as $destinataire) {
            if (null !== $destinataire) {
                $message = $this->sendMessage($destinataire);

                $this->saveDestinatairePersonnelDatabase($mess, $destinataire);
                ++$this->nbEtudiants;
                $this->myMailer->send($message);
                ++$this->nbMessagesEnvoyes;
            }
        }
        $mess->setTypeDestinataires($this->typeDestinataires);
        $this->entityManager->flush();
    }

    /**
     * @throws TransportExceptionInterface
     */
    public function sendToEtudiants(): void
    {
        // sauvegarde en BDD
        $mess = $this->saveMessageDatabase(Message::ETAT_MESSAGE_ENVOYE);

        foreach ($this->etudiants as $etu) {
            $message = $this->sendMessage($etu);

            $this->saveDestinataireEtudiantDatabase($mess, $etu);
            ++$this->nbEtudiants;
            $this->myMailer->send($message);
            ++$this->nbMessagesEnvoyes;
        }

        $this->entityManager->flush();
    }

    public function setMessage(string $sujet, string $message, Personnel $expediteur): void
    {
        // pour définir les éléments du message, commun à tous les destinataires
        $this->sujet = $sujet;
        $this->expediteur = $expediteur;
        $this->message = $message;
    }

    /**
     * @throws TransportExceptionInterface
     */
    public function setCopie(array $copies): void
    {
        foreach ($copies as $copie) {
            $pers = $this->personnelRepository->find($copie);
            if (null !== $pers) {
                $this->personnels[$pers->getId()] = $pers;
            }
        }

        $this->sendToPersonnels();
    }

    /**
     * @throws TransportExceptionInterface
     */
    public function sendSynthese(): void
    {
        // envoi de la synthèse à l'auteur
        $email = (new TemplatedEmail())
            ->subject('Votre message : '.$this->sujet)
            ->from($this->configuration->getExpediteurIntranet())
            ->to($this->expediteur->getMailuniv())
            ->htmlTemplate('mails/messageSynthese.html.twig')
            ->context([
                'message' => $this->message,
                'expediteur' => $this->expediteur,
                'nb' => $this->nbMessagesEnvoyes,
                'nbetudiant' => $this->nbEtudiants,
                'log' => $this->logMessagerie,
            ]);

        $this->myMailer->send($email);
    }

    /**
     * @throws TransportExceptionInterface
     */
    public function sendToDestinataires(
        array       $destinataires,
        int         $anneePrevisionnel,
        ?string     $typeDestinataire,
        Departement $departement = null): void
    {
        $this->type = $typeDestinataire;
        $this->nbMessagesEnvoyes = 0;
        $this->nbEtudiants = 0;
        switch ($typeDestinataire) {
            case Message::MESSAGE_TYPE_PERMANENT:
                if (null !== $departement) {
                    $this->preparePersonnels($destinataires, $departement);
                    $this->sendToPersonnels();
                }
                break;
            case Message::MESSAGE_TYPE_SEMESTRE:
                foreach ($destinataires as $destinataire) {
                    $this->typeDestinataires .= $destinataire.', ';
                    $this->getEtudiantsSemestre($destinataire);
                    $this->sendToEtudiants();
                }
                break;
            case Message::MESSAGE_TYPE_GROUPE:
                foreach ($destinataires as $destinataire) {
                    $this->typeDestinataires .= $destinataire.', ';
                    $this->getEtudiantsGroupe($destinataire);
                    $this->sendToEtudiants();
                }
                break;
            case Message::MESSAGE_TYPE_ETUDIANT:
                $this->prepareEtudiants($destinataires);
                $this->sendToEtudiants();
                break;
            case Message::MESSAGE_TYPE_MATIERE:
                $this->prepareMatieres($destinataires, $anneePrevisionnel);
                $this->sendToPersonnels();
                break;
        }
    }

    private function saveMessageDatabase(string $etat = Message::ETAT_MESSAGE_DRAFT): Message
    {
        $mess = new Message();
        $mess->setMessage($this->message);
        $mess->setSujet($this->sujet);
        $mess->setExpediteur($this->expediteur);
        $mess->setImportant(false); // todo: a gérer
        $mess->setTypeDestinataires($this->typeDestinataires);
        $mess->setType($this->type);
        $mess->setEtat($etat);

        $this->entityManager->persist($mess);

        foreach ($this->pjs as $file) {
            $fichier = new MessagePieceJointe();
            $ext = explode('/', (string) $file);
            $fichier->setFichier($ext[count($ext) - 1]);
            $ext = explode('.', (string) $file);
            $fichier->setExtension($ext[count($ext) - 1]);
            $fichier->setMessage($mess);
            $this->entityManager->persist($fichier);
        }

        $this->entityManager->flush();
        $this->id = $mess->getId();

        return $mess;
    }

    private function saveDestinataireEtudiantDatabase(Message $message, Etudiant $etudiant): void
    {
        $dest = new MessageDestinataireEtudiant();
        $dest->setMessage($message);
        $dest->setEtudiant($etudiant);
        $this->entityManager->persist($dest);
    }

    private function saveDestinatairePersonnelDatabase(Message $message, Personnel $personnel): void
    {
        $dest = new MessageDestinatairePersonnel();
        $dest->setMessage($message);
        $dest->setPersonnel($personnel);
        $this->entityManager->persist($dest);
    }

    private function getEtudiantsSemestre(string $codeSemestre): void
    {
        $semestre = $this->semestreRepository->find($codeSemestre);
        // récupére tous les étudiants d'un semestre
        $this->etudiants = $this->etudiantRepository->findBySemestre($semestre);
    }

    private function getEtudiantsGroupe(int|string $codeGroupe): void
    {
        // récupère tous les étudiants d'un ensemble de groupe
        $groupe = $this->groupeRepository->find($codeGroupe);
        if (null !== $groupe) {
            $this->etudiants = $groupe->getEtudiants();
        }
    }

    private function prepareEtudiants(?array $destinataires): void
    {
        $this->etudiants = [];
        foreach ($destinataires as $destinatiare) {
            $etudiant = $this->etudiantRepository->find($destinatiare);
            if (null !== $etudiant) {
                $this->etudiants[$etudiant->getId()] = $etudiant;
            }
        }
    }

    public function saveDraft(?string $sujet, ?string $message, ?Personnel $expediteur, ?array $destinataires = [], ?string $typeDestinataire = null, ?string $copie = null): void
    {
        // todo: a refaire
        $this->sujet = $sujet;
        $this->message = $message;
        $this->expediteur = $expediteur;
        $this->type = $typeDestinataire;

        $this->saveMessageDatabase();
    }

    public function getId(): int
    {
        return $this->id;
    }

    public function addPj($file): void
    {
        $this->pjs[] = $file;
    }

    public function sendMessage(UtilisateurInterface $destinataire): TemplatedEmail
    {
        $message = (new TemplatedEmail())
            ->subject($this->sujet)
            ->from($this->configuration->getExpediteurIntranet())
            ->replyTo($this->expediteur->getMailuniv())
            ->htmlTemplate('mails/message.html.twig')
            ->context(['message' => $this->message, 'expediteur' => $this->expediteur]);

        // récupération des fichiers uploadés
        foreach ($this->pjs as $file) {
            $message->attachFromPath($file);
        }

        foreach ($destinataire->getMails() as $mail) {
            if (filter_var($mail, FILTER_VALIDATE_EMAIL)) {
                $message->addTo($mail);
            } else {
                $this->logMessagerie .= $mail.' n\'est pas un mail valide pour '.$destinataire->getPrenom().' '.$destinataire->getNom().'<br>';
            }
        }

        return $message;
    }

    private function preparePersonnels(array $destinataires, Departement $departement): void
    {
        $this->personnels = [];
        $this->typeDestinataires = '';

        $destinataires = array_merge(...$destinataires);

        foreach ($destinataires as $destinataire) {
            if (Personnel::PERMANENT === $destinataire) {
                $temp = $this->personnelRepository->findByType(Personnel::PERMANENT, $departement);
                foreach ($temp as $dest) {
                    $this->personnels[$dest->getId()] = $dest;
                }
                $this->typeDestinataires .= Personnel::PERMANENT . ', ';
            } elseif (Personnel::VACATAIRE === $destinataire) {
                $temp = $this->personnelRepository->findByType(Personnel::VACATAIRE, $departement);
                foreach ($temp as $dest) {
                    $this->personnels[$dest->getId()] = $dest;
                }
                $this->typeDestinataires .= Personnel::VACATAIRE . ', ';
            } else {
                $pers = $this->personnelRepository->find($destinataire);
                if ($pers !== null) {
                    $this->personnels[$pers->getId()] = $pers;
                }
            }
        }
    }

    private function prepareMatieres(array $matieres, int $annee): void
    {
        $this->personnels = [];

        foreach ($matieres as $matiere) {
            $tM = explode('_', $matiere);
            $previsionnel = $this->previsionnelManager->getPrevisionnelMatiere((int)$tM[1], $tM[0], $annee);
            if ($previsionnel !== null) {
                foreach ($previsionnel->getPrevisionnels() as $personnel) {
                    $personnel = $this->personnelRepository->find($personnel->personnel_id);
                    if ($personnel !== null) {
                        $this->personnels[$personnel->getId()] = $personnel;
                    }
                }
            }
        }

    }
}
