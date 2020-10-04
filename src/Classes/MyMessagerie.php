<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyMessagerie.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 04/10/2020 07:42

namespace App\Classes;


use App\Entity\Departement;
use App\Entity\Etudiant;
use App\Entity\Message;
use App\Entity\MessageDestinataireEtudiant;
use App\Entity\MessageDestinatairePersonnel;
use App\Entity\MessagePieceJointe;
use App\Entity\Personnel;
use App\Repository\EtudiantRepository;
use App\Repository\GroupeRepository;
use App\Repository\PersonnelRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;

class MyMessagerie
{

    private Configuration $configuration;
    private MailerInterface $myMailer;

    private EntityManagerInterface $entityManager;

    private $sujet;

    private $message;

    private $nbMessagesEnvoyes = 0;
    private $nbEtudiants = 0;

    private Personnel $expediteur;

    /** @var Etudiant[] */
    private $etudiants = [];

    private GroupeRepository $groupeRepository;

    private EtudiantRepository $etudiantRepository;

    private PersonnelRepository $personnelRepository;

    private $typeDestinataires = '';
    private $type;
    private $id;
    private $pjs = [];
    private string $dir;

    /**
     * MyMessagerie constructor.
     *
     * @param MailerInterface        $mailer
     * @param EntityManagerInterface $entityManager
     * @param GroupeRepository       $groupeRepository
     * @param EtudiantRepository     $etudiantRepository
     * @param PersonnelRepository    $personnelRepository
     * @param Configuration          $configuration
     */
    public function __construct(
        MailerInterface $mailer,
        EntityManagerInterface $entityManager,
        GroupeRepository $groupeRepository,
        EtudiantRepository $etudiantRepository,
        PersonnelRepository $personnelRepository,
        Configuration $configuration,
        ParameterBagInterface $parameterBag
    ) {
        $this->myMailer = $mailer;
        $this->entityManager = $entityManager;
        $this->groupeRepository = $groupeRepository;
        $this->etudiantRepository = $etudiantRepository;
        $this->personnelRepository = $personnelRepository;
        $this->configuration = $configuration;
        $this->dir = $parameterBag->get('kernel.project_dir') . '/public/upload/pj/';
    }


    /**
     * @param             $destinataires
     *
     * @param Departement $departement
     *
     * @throws TransportExceptionInterface
     */
    public function sendToPersonnels($destinataires, Departement $departement): void
    {
        //mail réel + notification (utiliser le busMessage ?
        //sauvegarde en BDD
        $mess = $this->saveMessageDatabase('E');
        $listeDestinataires = [];
        $this->typeDestinataires = '';

        foreach ($destinataires as $destinataire) {
            if ($destinataire === Personnel::PERMANENT) {
                $listeDestinataires[] = $this->personnelRepository->findByType(Personnel::PERMANENT, $departement);
                $this->typeDestinataires .= Personnel::PERMANENT . ', ';
            } elseif ($destinataire === Personnel::VACATAIRE) {
                $listeDestinataires[] = $this->personnelRepository->findByType(Personnel::VACATAIRE, $departement);
                $this->typeDestinataires .= Personnel::VACATAIRE . ', ';
            }
        }

        foreach ($listeDestinataires as $tdestinataire) {
            foreach ($tdestinataire as $destinataire) {
                if ($destinataire !== null) {

                    $message = (new TemplatedEmail())
                        ->subject($this->sujet)
                        ->from($this->expediteur->getMailuniv())
                        ->textTemplate('mails/message.txt.twig')
                        ->context(['message' => $this->message, 'expediteur' => $this->expediteur]);

                    //récupération des fichiers uploadés
                    foreach ($this->pjs as $file) {
                        $message->attachFromPath($file);
                    }

                    foreach ($destinataire->getMails() as $mail) {
                        $message->addTo($mail);
                    }

                    $this->saveDestinatairePersonnelDatabase($mess, $destinataire);
                    $this->nbEtudiants++;
                    $this->myMailer->send($message);
                    $this->nbMessagesEnvoyes++;
                }
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

        //sauvegarde en BDD
        $mess = $this->saveMessageDatabase('E');

        foreach ($this->etudiants as $etu) {
            $message = (new TemplatedEmail())
                ->subject($this->sujet)
                ->from($this->expediteur->getMailuniv())
                ->htmlTemplate('mails/message.html.twig')
                ->context(['message' => $this->message, 'expediteur' => $this->expediteur]);

            //récupération des fichiers uploadés
            foreach ($this->pjs as $file) {
                $message->attachFromPath($this->dir . $file);
            }

            foreach ($etu->getMails() as $mail) {
                $message->addTo($mail);
            }

            $this->saveDestinataireEtudiantDatabase($mess, $etu);
            $this->nbEtudiants++;
            $this->myMailer->send($message);
            $this->nbMessagesEnvoyes++;
        }

        $this->entityManager->flush();

    }

    public function setMessage($sujet, $message, $expediteur, $pjs = null): void
    {
        //pour définir les éléments du message, commun à tous les destinataires
        $this->sujet = $sujet;
        $this->expediteur = $expediteur;
        $this->message = $message;
    }

    /**
     * @param array       $copie
     *
     * @param Departement $departement
     *
     * @throws TransportExceptionInterface
     */
    public function setCopie(array $copie, Departement $departement): void
    {
        $this->sendToPersonnels($copie, $departement);
    }

    /**
     * @throws TransportExceptionInterface
     */
    public function sendSynthese(): void
    {
        //envoi de la synthèse à l'auteur
        $email = (new TemplatedEmail())
            ->subject('Votre message : ' . $this->sujet)
            ->from($this->configuration->get('MAIL_FROM'))
            ->to($this->expediteur->getMailuniv())
            ->htmlTemplate('mails/messageSynthese.html.twig')
            ->context([
                'message'    => $this->message,
                'expediteur' => $this->expediteur,
                'nb'         => $this->nbMessagesEnvoyes,
                'nbetudiant' => $this->nbEtudiants
            ]);

        $this->myMailer->send($email);

    }

    /**
     * @param                  $destinataires
     * @param                  $typeDestinataire
     *
     * @param Departement|null $departement
     *
     * @throws TransportExceptionInterface
     */
    public function sendToDestinataires($destinataires, $typeDestinataire, Departement $departement = null): void
    {
        $this->type = $typeDestinataire;
        $this->nbMessagesEnvoyes = 0;
        $this->nbEtudiants = 0;
        switch ($typeDestinataire) {
            case 'p':
                if ($departement !== null) {
                    $this->sendToPersonnels($destinataires, $departement);
                }
                break;
            case 's':
                foreach ($destinataires as $destinataire) {
                    $this->typeDestinataires .= $destinataire . ', ';
                    $this->getEtudiantsSemestre($destinataire);
                    $this->sendToEtudiants();
                }
                break;
            case 'g':
                foreach ($destinataires as $destinataire) {
                    $this->typeDestinataires .= $destinataire . ', ';
                    $this->getEtudiantsGroupe($destinataire);
                    $this->sendToEtudiants();
                }
                break;
            case 'e':
                $this->prepareEtudiants($destinataires);
                $this->sendToEtudiants();
                break;
        }
    }

    private function saveMessageDatabase($etat = 'D'): Message
    {
        $mess = new Message();
        $mess->setMessage($this->message);
        $mess->setSujet($this->sujet);
        $mess->setExpediteur($this->expediteur);
        $mess->setImportant(false); //todo: a gérer
        $mess->setTypeDestinataires($this->typeDestinataires);
        $mess->setType($this->type);
        $mess->setEtat($etat);

        $this->entityManager->persist($mess);

        foreach ($this->pjs as $file) {
            $fichier = new MessagePieceJointe();
            $ext = explode('/', $file);
            $fichier->setFichier($ext[count($ext) - 1]);
            $ext = explode('.', $file);
            $fichier->setExtension($ext[count($ext) - 1]);
            $fichier->setMessage($mess);
            $this->entityManager->persist($fichier);
        }


        $this->entityManager->flush();
        $this->id = $mess->getId();

        return $mess;
    }

    private function saveDestinataireEtudiantDatabase(Message $message, $etudiant): void
    {
        $dest = new MessageDestinataireEtudiant();
        $dest->setMessage($message);
        $dest->setEtudiant($etudiant);
        $this->entityManager->persist($dest);
    }

    private function saveDestinatairePersonnelDatabase(Message $message, $personnel): void
    {
        $dest = new MessageDestinatairePersonnel();
        $dest->setMessage($message);
        $dest->setPersonnel($personnel);
        $this->entityManager->persist($dest);
    }

    private function getEtudiantsSemestre($codeSemestre): void
    {
        //récupére tous les étudiants d'un semestre
        $this->etudiants = $this->etudiantRepository->findBySemestre($codeSemestre);
    }

    private function getEtudiantsGroupe($codeGroupe): void
    {
        //récupère tous les étudiants d'un ensemble de groupe
        $groupe = $this->groupeRepository->find($codeGroupe);
        if ($groupe !== null) {
            $this->etudiants = $groupe->getEtudiants();
        }
    }

    /**
     * @param $destinataires
     */
    private function prepareEtudiants($destinataires): void
    {
        $this->etudiants = [];
        foreach ($destinataires as $destinatiare) {
            $etudiant = $this->etudiantRepository->find($destinatiare);
            if ($etudiant !== null) {
                $this->etudiants[] = $etudiant;
            }
        }
    }

    public function saveDraft($sujet, $message, Personnel $expediteur, $copie, $destinataires, $typeDestinataire)
    {
        $this->sujet = $sujet;
        $this->message = $message;
        $this->expediteur = $expediteur;
        $this->type = $typeDestinataire;

        $this->saveMessageDatabase('D');
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    public function addPj($file)
    {
        $this->pjs[] = $file;
    }

}
