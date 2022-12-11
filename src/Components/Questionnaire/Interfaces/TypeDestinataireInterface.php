<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/Interfaces/TypeDestinataireInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/12/2022 14:54
 */

namespace App\Components\Questionnaire\Interfaces;

use App\Classes\Mail\MailerFromTwig;
use App\Components\Questionnaire\DTO\ReponsesUser;

interface TypeDestinataireInterface
{
    public function getListe(): array; // liste pour l'affichage des choix

    public function getListeDestinataire(): array; // liste des répondants

    public function send(array $liste): void; // envoi des questionnaires

    public function getChoixUser(string $uuid): ?QuestChoixInterface;


    public function sendMail(QuestChoixInterface $choixUser, MailerFromTwig $myMailer): void;

    public function sauvegardeReponse(QuestChoixInterface $choixUser, string $cleReponse, string $cleQuestion): void;

    public function getReponses(): ReponsesUser;

}
