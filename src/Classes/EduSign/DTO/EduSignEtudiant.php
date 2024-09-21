<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/DTO/EduSignEtudiant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/08/2023 15:56
 */

namespace App\Classes\EduSign\DTO;

class EduSignEtudiant
{
    /**
     * {
     * "student": {
     * "FIRSTNAME": "Kurt",
     * "LASTNAME": "Cobain",
     * "EMAIL": "kurtcobain@gmail.com (mandatory)",
     * "FILE_NUMBER": "4567098547",
     * "PHOTO": "https://randomuser.me/api/portraits/men/64.jpg",
     * "PHONE": "+33782576806",
     * "GROUPS": ["groupIds"],
     * "TRAINING_NAME": "Master 1 Digital",
     * "COMPANY": "Edusign", // student's company (if apprenticeship or continuing education)
     * "TAGS": ["tag 1", "tag 2"],
     * "SEND_EMAIL_CREDENTIALS": true, // if true it will send an email to the student with his credentials
     * "API_ID": "f0js9Uj", // External ID of the student (can be used to make a link with your service)
     * "API_TYPE": "hyperplanning", // Name of the connector associated with the external ID (do not use if you don't know)
     * "BADGE_ID": "1234567", // ID of NFC card (if needed)
     * "STUDENT_FOLLOWER_ID": [] // ID of externals (see external section) that follows the student (Tuteur, Maitre d'apprentissage...)
     * }
     * }
     */

    public ?string $id = '';
    public ?string $firstname = '';
    public ?string $lastname = '';
    public ?string $email = '';
    public ?string $file_number = '';
    public ?string $photo = '';
    public ?string $phone = '';
    public ?array $groups = [];
    public ?string $training_name = '';
    public ?string $company = '';
    public ?array $tags = [];
    public ?bool $send_email_credentials = false;
    public ?bool $new_password_needed = false;
    public ?string $api_id = '';
    public ?string $api_type = '';
    public ?string $badge_id = '';
    public ?array $student_follower_id = [];

    public function toArray(): array
    {
        return [
            'ID' => $this->id,
            'FIRSTNAME' => $this->firstname,
            'LASTNAME' => $this->lastname,
            'EMAIL' => $this->email,
            'FILE_NUMBER' => $this->file_number,
            'PHOTO' => $this->photo,
            'PHONE' => $this->phone,
            'GROUPS' => $this->groups,
            'TRAINING_NAME' => $this->training_name,
            'COMPANY' => $this->company,
            'TAGS' => $this->tags,
            'API_ID' => $this->api_id,
            'API_TYPE' => $this->api_type,
            'BADGE_ID' => $this->badge_id,
            'STUDENT_FOLLOWER_ID' => $this->student_follower_id,
            'SEND_EMAIL_CREDENTIALS' => $this->send_email_credentials,
            'NEW_PASSWORD_NEEDED' => $this->new_password_needed,
        ];
    }
}
