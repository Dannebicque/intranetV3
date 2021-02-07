<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyQualiteQuestionnaire.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

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
                return '<h2>' . trim(mb_substr($ligne, 1, mb_strlen($ligne))) . '</h2>';
            case 'H': //question
                return '<p class="qualite-help">' . trim(mb_substr($ligne, 2, mb_strlen($ligne))) . '</p>';
            case 'Q': //question
                $t = explode('.', $ligne);
                $this->typeQuestion = $t[1];
                $this->obligatoire = $t[2];
                switch ($this->typeQuestion) {
                    case 'QCU':
                    case 'QCM':
                        return '<label class="qualite-question ' . $this->isObligatoire() . '">' . trim(mb_substr($ligne,
                                mb_strpos($ligne, ' '), mb_strlen($ligne))) . '</label>';
                    case 'YESNO':
                        return '<label class="qualite-question ' . $this->isObligatoire() . '">' . trim(mb_substr($ligne,
                                mb_strpos($ligne, ' '), mb_strlen($ligne))) . '</label>
                                <p><input type="radio" value="1" name=""> Oui <input type="radio" value="0" name=""> Non</p>';
                }
                break;
            case 'R': //réponse
                switch ($this->typeQuestion) {
                    case 'QCU':
                        return '<input type="radio" value=""> ' . trim(mb_substr($ligne, 2, mb_strlen($ligne)));
                    case 'QCM':
                        return '<input type="checkbox" value=""> ' . trim(mb_substr($ligne, 2, mb_strlen($ligne)));
                }
                break;
            default:
                return '<br>';
        }

        return 'erreur';
    }

    private function isObligatoire(): ?string
    {
        if ('OBLIGATOIRE' === $this->obligatoire) {
            return 'required';
        }

        return '';
    }
}
