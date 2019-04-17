<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/MyMessagerie.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/13/19 7:11 PM
 *  * @lastUpdate 4/13/19 7:11 PM
 *  *
 *
 */

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
use App\Repository\SemestreRepository;
use App\Repository\TypeGroupeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mime\Email;


class MyMessagerie
{
    /** @var MyMailer */
    private $myMailer;

    /** @var EntityManagerInterface */
    private $entityManager;

    private $sujet;

    private $message;
    private $pjs;

    /** @var Departement */
    private $departement;

    private $nbMessagesEnvoyes = 0;
    private $nbEtudiants = 0;

    /** @var Personnel */
    private $expediteur;

    /** @var Etudiant[] */
    private $etudiants = [];

    /** @var SemestreRepository */
    private $semestreRepository;

    /** @var GroupeRepository */
    private $groupeRepository;

    /** @var EtudiantRepository */
    private $etudiantRepository;


    /** @var TypeGroupeRepository */
    private $typeGroupeRepository;

    /**
     * MyMessagerie constructor.
     *
     * @param MyMailer               $myMailer
     * @param EntityManagerInterface $entityManager
     * @param SemestreRepository     $semestreRepository
     * @param GroupeRepository       $groupeRepository
     * @param EtudiantRepository     $etudiantRepository
     * @param TypeGroupeRepository   $typeGroupeRepository
     */
    public function __construct(
        MyMailer $myMailer,
        EntityManagerInterface $entityManager,
        SemestreRepository $semestreRepository,
        GroupeRepository $groupeRepository,
        EtudiantRepository $etudiantRepository,
        TypeGroupeRepository $typeGroupeRepository
    ) {
        $this->myMailer = $myMailer;
        $this->entityManager = $entityManager;
        $this->semestreRepository = $semestreRepository;
        $this->groupeRepository = $groupeRepository;
        $this->etudiantRepository = $etudiantRepository;
        $this->typeGroupeRepository = $typeGroupeRepository;
    }


    public function sendToPermanents()
    {
        //mail réel + notification (utiliser le busMessage ?
        $message = (new TemplatedEmail())
            ->subject($this->sujet)
            ->from($this->expediteur->getMailuniv())
            ->textTemplate('mails:message.txt.twig')
            ->context(['message' => $this->message, 'expediteur' => $this->expediteur]);

        //sauvegarde en BDD
        $mess = $this->saveMessageDatabase('permanents');

        /** @var Etudiant $etu */
        foreach ($this->departement->getPersonnelDepartements() as $personnelDepartement) {
            if ($personnelDepartement->getPersonnel() !== null && $personnelDepartement->getPersonnel()->getTypeUser() === 'permanent') {
                foreach ($personnelDepartement->getPersonnel()->getMails() as $mail) {
                    $message->addTo($mail);
                }

                $this->saveDestinatairePersonnelDatabase($mess, $personnelDepartement->getPersonnel());
                $this->nbEtudiants++;
                //$this->nbMessagesEnvoyes += $this->get('mailer')->send($message);
                //todo: envoyer notification ?
            }
        }
        $this->entityManager->flush();
    }

    public function sendToVacataires()
    {
        //mail réel + notification (utiliser le busMessage ?
    }

    public function sendToEtudiants()
    {
        $this->nbMessagesEnvoyes = 0;
        $this->nbEtudiants = 0;

        $message = (new TemplatedEmail())
            ->subject($this->sujet)
            ->from($this->expediteur->getMailuniv())
            ->textTemplate('mails:message.txt.twig')
            ->context(['message' => $this->message, 'expediteur' => $this->expediteur]);

        //sauvegarde en BDD
        $mess = $this->saveMessageDatabase('etudiants');

        //récupération des fichiers uploadés
//        $files = $this->getDoctrine()->getRepository('DAKernelBundle:MessagePJ')->findBy(['cle' => $this->get('session')->get('clemessage')]);
//
//        foreach ($files as $file) {
//            $message->attach(Swift_Attachment::fromPath($this->get('kernel')->getRootDir() . '/../web/uploads/mails/' . $connect->getFormation()->getId() . '/' . $file->getFichier()));
//            $file->setMessage($mess);
//            $em->persist($file);
//        }


        /** @var Etudiant $etu */
        foreach ($this->etudiants as $etu) {
            foreach ($etu->getMails() as $mail) {
                $message->addTo($mail);
            }

            $this->saveDestinataireEtudiantDatabase($mess, $etu);
            $this->nbEtudiants++;
            //$this->nbMessagesEnvoyes += $this->get('mailer')->send($message);
            //todo: envoyer notification ?
        }

        $this->entityManager->flush();

    }

    public function setMessage($sujet, $message, $expediteur, $pjs = null)
    {
        //pour définir les éléments du message, commun à tous les destinataires
        $this->sujet = $sujet;
        $this->expediteur = $expediteur;
        $this->message = $message;
        $this->pjs = $pjs;
    }

    public function setCopie(array $copie)
    {
        //envoi d'une copie du message à des destinataires

    }

    public function sendSynthese()
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

    }

    public function sendToDestinataires(array $destinataires, Departement $departement)
    {
        $this->departement = $departement;
        foreach ($destinataires as $destinataire) {
            //tester si pas un email valide.

            //sinon
            switch (strtolower($destinataire)) {
                case 'permanents':
                    echo '-permanents-';
                    $this->sendToPermanents();
                    break;
                case 'vacataires':
                    $this->sendToVacataires();
                    break;
                default:
                    $data = explode('_', $destinataire);
                    $this->etudiants = [];
                    switch ($data[0]) {
                        case 'semestre':
                            $this->getEtudiantsSemestre($data[1]);
                            $this->sendToEtudiants();
                            break;
                        case 'groupe':
                            $this->getEtudiantsGroupe($data[1]);
                            $this->sendToEtudiants();
                            break;
                        case 'typegroupe':
                            $this->getEtudiantsTypeGroupe($data[1]);
                            $this->sendToEtudiants();
                            break;
                    }
            }
        }
    }

    private function saveMessageDatabase(string $type)
    {

        $mess = new Message();

        //$mess->setType($type);
        $mess->setMessage($this->message);
        $mess->setSujet($this->sujet);
        $mess->setExpediteur($this->expediteur);
        $mess->setImportant(false); //todo: a gérer

        $this->entityManager->persist($mess);
        $this->entityManager->flush();

        return $mess;
    }

    private function saveDestinataireEtudiantDatabase(Message $message, $etudiant)
    {
        $dest = new MessageDestinataireEtudiant();
        $dest->setMessage($message);
        $dest->setEtudiant($etudiant);
        $this->entityManager->persist($dest);
    }

    private function saveDestinatairePersonnelDatabase(Message $message, $personnel)
    {
        echo 'detinataires';
        $dest = new MessageDestinatairePersonnel();
        $dest->setMessage($message);
        $dest->setPersonnel($personnel);
        $this->entityManager->persist($dest);
    }

    private function getEtudiantsSemestre($codeSemestre)
    {
        //récupére tous les étudiants d'un semestre
        $this->etudiants = $this->etudiantRepository->findBySemestreCodeApogee($codeSemestre);
    }

    private function getEtudiantsTypeGroupe($codeTypeGroupe)
    {
        //récupère tous les étudiants d'un ensemble de groupe
        $typeGroupes = $this->typeGroupeRepository->findOneBy(['libelle' => $codeTypeGroupe]);
        if ($typeGroupes !== null) {
            foreach ($typeGroupes->getGroupes() as $groupe) {
                $this->etudiants[] = $groupe->getEtudiants();
            }
        }
    }

    private function getEtudiantsGroupe($codeGroupe)
    {
        //récupère tous les étudiants d'un ensemble de groupe
        $groupe = $this->groupeRepository->findOneBy(['codeApogee' => $codeGroupe]);
        if ($groupe !== null) {
            $this->etudiants[] = $groupe->getEtudiants();

        }
    }


}
