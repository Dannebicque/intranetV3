<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/DTO/ListeChoix.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/01/2023 22:37
 */

namespace App\Components\Questionnaire\DTO;

use App\Entity\QuestChoix;

class ListeChoix
{
    public array $listeChoix = [];

    public function addChoix(QuestChoix $choix): void
    {
        $cle = $choix->getQuestion()->getCle();
        $cleReponse = $choix->getCleReponse();
        $tCleReponse = explode('_', $cleReponse);


        if (count($tCleReponse) > 4 && str_starts_with($tCleReponse[4], 'c')) {
            if (!isset($this->listeChoix[$cle])) {
                $this->listeChoix[$cle] = [];
            }

            if (!isset($this->listeChoix[$cle][$tCleReponse[4]])) {
                $this->listeChoix[$cle][$tCleReponse[4]] = new Choix();
            }

            ++$this->listeChoix[$cle][$tCleReponse[4]]->nbReponsesTotal;
            $cleR = $choix->getValeur();

            if (!array_key_exists($cleR, $this->listeChoix[$cle][$tCleReponse[4]]->totalReponses)) {
                $this->listeChoix[$cle][$tCleReponse[4]]->totalReponses[$cleR] = 0;
            }

            ++$this->listeChoix[$cle][$tCleReponse[4]]->totalReponses[$cleR];
        } else {
            if (!isset($this->listeChoix[$cle])) {

                $this->listeChoix[$cle] = new Choix();

            }
            ++$this->listeChoix[$cle]->nbReponsesTotal;
            $cleR = $choix->getValeur();
            if (!array_key_exists($cleR, $this->listeChoix[$cle]->totalReponses)) {
                $this->listeChoix[$cle]->totalReponses[$cleR] = 0;
            }

            ++$this->listeChoix[$cle]->totalReponses[$cleR];
        }
    }

    public function getChoix(?string $cle): ?Choix
    {
        return $this->listeChoix[$cle] ?? null;
    }
}
