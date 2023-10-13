<?php

namespace App\Classes\EduSign;

interface GroupeInterface
{
    public function getLibelle(): ?string;

    public function getId(): ?int;

    public function getIdEduSign(): ?string;
}