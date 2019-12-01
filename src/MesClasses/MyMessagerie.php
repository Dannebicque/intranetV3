<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/MyMessagerie.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\MesClasses;


use App\Entity\Departement;
use App\Entity\Etudiant;
use App\Entity\Message;
use App\Entity\MessageDestinataireEtudiant;
use App\Entity\MessageDestinatairePersonnel;
use App\Entity\Personnel;
use App\MesClasses\Mail\MyMailer;
use App\Repository\EtudiantRepository;
use App\Repository\GroupeRepository;
use App\Repository\PersonnelRepository;
use App\Repository\TypeGroupeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Swift_Mailer;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;


class MyMessagerie
{
    /** @var MailerInterface */
    private $myMailer;

    /** @var EntityManagerInterface */
    private $entityManager;

    private $sujet;

    private $message;
    private $pjs;

    private $nbMessagesEnvoyes = 0;
    private $nbEtudiants = 0;

    /** @var Personnel */
    private $expediteur;

    /** @var Etudiant[] */
    private $etudiants = [];

    /** @var GroupeRepository */
    private $groupeRepository;

    /** @var EtudiantRepository */
    private $etudiantRepository;

    /** @var PersonnelRepository */
    private $personnelRepository;

    /** @var TypeGroupeRepository */
    private $typeGroupeRepository;

    /**
     * MyMessagerie constructor.
     *
     * @param MailerInterface        $mailer
     * @param EntityManagerInterface $entityManager
     * @param GroupeRepository       $groupeRepository
     * @param EtudiantRepository     $etudiantRepository
     * @param PersonnelRepository    $personnelRepository
     * @param TypeGroupeRepository   $typeGroupeRepository
     */
    public function __construct(
        MailerInterface $mailer,
        EntityManagerInterface $entityManager,
        GroupeRepository $groupeRepository,
        EtudiantRepository $etudiantRepository,
        PersonnelRepository $personnelRepository,
        TypeGroupeRepository $typeGroupeRepository
    ) {
        $this->myMailer = $mailer;
        $this->entityManager = $entityManager;
        $this->groupeRepository = $groupeRepository;
        $this->etudiantRepository = $etudiantRepository;
        $this->typeGroupeRepository = $typeGroupeRepository;
        $this->personnelRepository = $personnelRepository;
    }


    /**
     * @param $destinataires
     *
     * @throws TransportExceptionInterface
     */
    public function sendToPersonnels($destinataires): void
    {
        //mail réel + notification (utiliser le busMessage ?
        $message = (new TemplatedEmail())
            ->subject($this->sujet)
            ->from($this->expediteur->getMailuniv())
            ->textTemplate('mails:message.txt.twig')
            ->context(['message' => $this->message, 'expediteur' => $this->expediteur]);

        //sauvegarde en BDD
        $mess = $this->saveMessageDatabase();

        foreach ($destinataires as $destinataire) {
            $personnel = $this->personnelRepository->find($destinataire);
            if ($personnel !== null) {
                foreach ($personnel->getMails() as $mail) {
                    $message->addTo($mail);
                }

                $this->saveDestinatairePersonnelDatabase($mess, $personnel);
                $this->nbEtudiants++;
                $this->myMailer->send($message);
                $this->nbMessagesEnvoyes ++;
                //todo: envoyer notification ?
            }
        }
        $this->entityManager->flush();
    }

    /**
     * @throws TransportExceptionInterface
     */
    public function sendToEtudiants(): void
    {
        $this->nbMessagesEnvoyes = 0;
        $this->nbEtudiants = 0;

        $message = (new TemplatedEmail())
            ->subject($this->sujet)
            ->from($this->expediteur->getMailuniv())
            ->textTemplate('mails:message.txt.twig')
            ->context(['message' => $this->message, 'expediteur' => $this->expediteur]);

        //sauvegarde en BDD
        $mess = $this->saveMessageDatabase();

        //récupération des fichiers uploadés
//        $files = $this->getDoctrine()->getRepository('DAKernelBundle:MessagePJ')->findBy(['cle' => $this->get('session')->get('clemessage')]);
//
//       foreach ($files as $file) {
//           $message->attachFromPath($this->get('kernel')->getRootDir() . '/../web/uploads/mails/'  . $file->getFichier());
//
//            $file->setMessage($mess);
//            $this->entityManager->persist($file);
//        }


        /** @var Etudiant $etu */
        foreach ($this->etudiants as $etu) {
            foreach ($etu->getMails() as $mail) {
                $message->addTo($mail);
            }

            $this->saveDestinataireEtudiantDatabase($mess, $etu);
            $this->nbEtudiants++;
            $this->myMailer->send($message);
            $this->nbMessagesEnvoyes ++;
            //todo: envoyer notification ?
        }


        $this->entityManager->flush();

    }

    public function setMessage($sujet, $message, $expediteur, $pjs = null): void
    {
        //pour définir les éléments du message, commun à tous les destinataires
        $this->sujet = $sujet;
        $this->expediteur = $expediteur;
        $this->message = $message;
        $this->pjs = $pjs;
    }

    public function setCopie(array $copie): void
    {
        //envoi d'une copie du message à des destinataires

    }

    /**
     * @throws TransportExceptionInterface
     */
    public function sendSynthese(): void
    {
        //envoi de la synthèse à l'auteur
        $email = (new TemplatedEmail())
            ->subject('Votre message : ' . $this->sujet)
            ->from()
            ->to($this->expediteur->getMailuniv())
            ->textTemplate('mails:messageSynthese.txt.twig')
            ->context([
                'message'    => $this->message,
                'expediteur' => $this->expediteur,
                'nb'         => $this->nbMessagesEnvoyes,
                'nbetudiant' => $this->nbEtudiants
            ]);

        $this->myMailer->send($email);

    }

    /**
     * @param             $destinataires
     * @param             $typeDestinataire
     * @param Departement $departement
     *
     * @throws TransportExceptionInterface
     */
    public function sendToDestinataires($destinataires, $typeDestinataire, Departement $departement): void
    {
        $this->departement = $departement;

        switch ($typeDestinataire) {
            case 'p':
                $this->sendToPersonnels($destinataires);
                break;
            case 's':
                $this->getEtudiantsSemestre($destinataires);
                $this->sendToEtudiants();
                break;
            case 'g':
                $this->getEtudiantsGroupe($destinataires);
                $this->sendToEtudiants();
                break;
            case 'e':
                $this->prepareEtudiants($destinataires);
                $this->sendToEtudiants();
                break;
        }


    }

    private function saveMessageDatabase(): Message
    {

        $mess = new Message();
        $mess->setMessage($this->message);
        $mess->setSujet($this->sujet);
        $mess->setExpediteur($this->expediteur);
        $mess->setImportant(false); //todo: a gérer

        $this->entityManager->persist($mess);
        $this->entityManager->flush();

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
        $this->etudiants = $this->etudiantRepository->findBySemestreCodeApogee($codeSemestre);
    }

    private function getEtudiantsTypeGroupe($codeTypeGroupe): void
    {
        //récupère tous les étudiants d'un ensemble de groupe
        $typeGroupes = $this->typeGroupeRepository->findOneBy(['libelle' => $codeTypeGroupe]);
        if ($typeGroupes !== null) {
            foreach ($typeGroupes->getGroupes() as $groupe) {
                $this->etudiants[] = $groupe->getEtudiants();
            }
        }
    }

    private function getEtudiantsGroupe($codeGroupe): void
    {
        //récupère tous les étudiants d'un ensemble de groupe
        $groupe = $this->groupeRepository->findOneBy(['codeApogee' => $codeGroupe]);
        if ($groupe !== null) {
            $this->etudiants[] = $groupe->getEtudiants();
        }
    }

    /**
     * @param $destinataires
     */
    private function prepareEtudiants($destinataires) : void
    {
        $this->etudiants = [];
        foreach ($destinataires as $destinatiare) {
            $etudiant = $this->etudiantRepository->find($destinatiare);
            if ($etudiant !== null) {
                $this->etudiants[] = $etudiant;
            }
        }

    }


}
