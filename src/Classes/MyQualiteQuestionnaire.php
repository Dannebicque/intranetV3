<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyQualiteQuestionnaire.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:33

namespace App\Classes;


class MyQualiteQuestionnaire
{

    private $typeQuestion;
    private $obligatoire;

    public function traduitLigne(string $ligne): ?string
    {
        $code = $ligne[0];
        switch ($code) {
            case '#': //titre
                return '<h2>' . trim(substr($ligne, 1, strlen($ligne))) . '</h2>';
                break;
            case 'H': //question
                return '<p class="qualite-help">' . trim(substr($ligne, 2, strlen($ligne))) . '</p>';
                break;
            case 'Q': //question
                $t = explode('.', $ligne);
                $this->typeQuestion = $t[1];
                $this->obligatoire = $t[2];
                switch ($this->typeQuestion) {
                    case 'QCU':
                    case 'QCM':
                        return '<label class="qualite-question ' . $this->isObligatoire() . '">' . trim(substr($ligne,
                                strpos($ligne, ' '), strlen($ligne))) . '</label>';
                    case 'YESNO':
                        return '<label class="qualite-question ' . $this->isObligatoire() . '">' . trim(substr($ligne,
                                strpos($ligne, ' '), strlen($ligne))) . '</label>
                                <p><input type="radio" value="1" name=""> Oui <input type="radio" value="0" name=""> Non</p>';
                }
                break;
            case 'R': //réponse
                switch ($this->typeQuestion) {
                    case 'QCU':
                        return '<input type="radio" value=""> ' . trim(substr($ligne, 2, strlen($ligne)));
                    case 'QCM':
                        return '<input type="checkbox" value=""> ' . trim(substr($ligne, 2, strlen($ligne)));
                }
                break;
            default:
                return '<br>';
        }


    }

    private function isObligatoire(): ?string
    {
        if ($this->obligatoire === 'OBLIGATOIRE') {
            return 'required';
        }
    }
}
