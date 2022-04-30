<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Security/Voter/AdministrationVoter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/10/2021 12:14
 */

namespace App\Security\Voter;

use App\Entity\Annee;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Personnel;
use App\Entity\Semestre;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

class AdministrationVoter extends Voter
{
    public function __construct(protected AbstractVoter $abstractVoter)
    {
    }

    protected function supports(string $attribute, $subject): bool
    {
        return in_array($attribute, AbstractVoter::LIST_OF_MINIMAL_ROLES)
            && ($subject instanceof Semestre || $subject instanceof Annee || $subject instanceof Diplome || $subject instanceof Departement);
    }

    protected function voteOnAttribute(string $attribute, $subject, TokenInterface $token): bool
    {
        $user = $token->getUser();
        // if the user is anonymous, do not grant access
        if (!$user instanceof Personnel) {
            return false;
        }

        if ($subject instanceof Semestre || $subject instanceof Annee) {
            $departement = $subject->getDiplome()->getDepartement();
        } elseif ($subject instanceof Diplome) {
            $departement = $subject->getDepartement();
        } elseif ($subject instanceof Departement) {
            $departement = $subject;
        } else {
            return false;
        }

        if (!$this->abstractVoter->userHasMinimalRoleInDepartement($attribute, $departement
        )) {
            //on vérifie s'il a le rôle dans le département associé
            throw new AccessDeniedException('Vous ne disposez pas des droits suffisant dans ce département');
        }

        return true;
    }
}
