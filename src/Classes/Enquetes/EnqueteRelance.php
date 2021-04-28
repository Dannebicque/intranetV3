<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Enquetes/EnqueteRelance.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/04/2021 10:04
 */

namespace App\Classes\Enquetes;

use App\Entity\QuestionnaireEtudiant;
use App\Entity\QuestionnaireQualite;
use App\Event\QualiteRelanceEvent;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class EnqueteRelance
{

    private EventDispatcherInterface $eventDispatcher;

    /**
     * EnqueteRelance constructor.
     *
     * @param \Symfony\Component\EventDispatcher\EventDispatcherInterface $eventDispatcher
     */
    public function __construct(EventDispatcherInterface $eventDispatcher)
    {
        $this->eventDispatcher = $eventDispatcher;
    }


    public function envoyerRelance(QuestionnaireQualite $questionnaire, $reponses, array $etudiants)
    {
        $t = [];

        /** @var QuestionnaireEtudiant $reponse */
        foreach ($reponses as $reponse) {
            $t[$reponse->getEtudiant()->getId()] = $reponse;
        }

        $mailsAEnvoyes = [];

        foreach ($etudiants as $etudiant) {
            if (!(array_key_exists($etudiant->getId(), $t) && $t[$etudiant->getId()]->getTermine() === true)) {
                $event = new QualiteRelanceEvent($questionnaire);
                $event->setEtudiant($etudiant);
                $this->eventDispatcher->dispatch($event, QualiteRelanceEvent::SEND_RELANCE);
                $mailsAEnvoyes[] = $etudiant;
            }
        }

        $event = new QualiteRelanceEvent($questionnaire);
        $event->setEtudiants($mailsAEnvoyes);
        $this->eventDispatcher->dispatch($event, QualiteRelanceEvent::SEND_SYNTHESE);
        $mailsAEnvoyes[] = $etudiant;

    }
}
