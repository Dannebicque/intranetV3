<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/Interfaces/TypeDestinataireInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 27/11/2022 20:45
 */

namespace App\Components\Questionnaire\Interfaces;

interface TypeDestinataireInterface
{
    public function getListe(): array; // liste pour l'affichage des choix

    public function getListeDestinataire(): array; // liste des répondants

    public function send(array $liste): void; // envoi des questionnaires
}
