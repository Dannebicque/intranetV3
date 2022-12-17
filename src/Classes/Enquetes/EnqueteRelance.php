<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Enquetes/EnqueteRelance.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 17/12/2022 09:21
 */

namespace App\Classes\Enquetes;

use App\Components\Questionnaire\Interfaces\QuestChoixInterface;
use App\Event\QualiteRelanceEvent;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class EnqueteRelance
{
    /**
     * EnqueteRelance constructor.
     */
    public function __construct(private readonly EventDispatcherInterface $eventDispatcher)
    {
    }

//    public function envoyerRelance(QuestQuestionnaire $questionnaire, $reponses, array $etudiants): void
//    {
//        $t = [];
//
//        foreach ($reponses as $reponse) {
//            $t[$reponse->getEtudiant()?->getId()] = $reponse;
//        }
//
//        $mailsAEnvoyes = [];
//
//        foreach ($etudiants as $etudiant) {
//            if (!(array_key_exists($etudiant->getId(), $t) && true === $t[$etudiant->getId()]->getTermine())) {
//                $event = new QualiteRelanceEvent($questionnaire);
//                $event->setEtudiant($etudiant);
//                $this->eventDispatcher->dispatch($event, QualiteRelanceEvent::SEND_RELANCE);
//                $mailsAEnvoyes[] = $etudiant;
//            }
//        }
//
//        $event = new QualiteRelanceEvent($questionnaire);
//        $event->setEtudiants($mailsAEnvoyes);
//        $this->eventDispatcher->dispatch($event, QualiteRelanceEvent::SEND_SYNTHESE);
//    }

    public function envoyerRelanceIndividuelle(QuestChoixInterface $questionnaire): void
    {
        $event = new QualiteRelanceEvent($questionnaire);
        $this->eventDispatcher->dispatch($event, QualiteRelanceEvent::SEND_RELANCE);
    }
}
