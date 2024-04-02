<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/DTO/EduSignEnseignant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:34
 */

namespace App\Classes\EduSign\DTO;

class EduSignEnseignant
{
    /**
     * {
     * "professor": {
     * "FIRSTNAME": "Bob",
     * "LASTNAME": "Dylan",
     * "EMAIL": "bobdylan@gmail.com",
     * "SPECIALITY": "Marketing",
     * "API_ID": "f0js9Uj", // API ID of the teacher (can be used to make a link with your service)
     * "API_TYPE": "hyperplanning", // Name of the connector associated with the API ID (do not use if you don't know)
     * "TAGS": ["tag1", "tag2", "..."]
     * },
     * "dontSendCredentials": false // false if you want to send an email with the credentials to the teacher
     * }
     */
    public ?string $id = '';
    public ?string $firstname = '';
    public ?string $lastname = '';
    public ?string $email = '';
    public ?string $speciality = '';
    public ?string $api_id = '';
    public ?string $api_type = '';
    public ?array $tags = [];
    public ?bool $dontSendCredentials = false;

    public function toArray(): array
    {
        return [
            'ID' => $this->id,
            'FIRSTNAME' => $this->firstname,
            'LASTNAME' => $this->lastname,
            'EMAIL' => $this->email,
            'SPECIALITY' => $this->speciality,
            'API_ID' => $this->api_id,
            'API_TYPE' => $this->api_type,
            'TAGS' => $this->tags,
        ];
    }
}
