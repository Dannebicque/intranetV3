<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Security/Voter/AbsenceNoteVoter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/10/2021 06:57
 */

namespace App\Security\Voter;

use App\DTO\Matiere;
use App\Entity\Personnel;
use App\Repository\PrevisionnelRepository;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;

class AbsenceNoteVoter extends Voter
{
    protected AbstractVoter $abstractVoter;
    protected PrevisionnelRepository $previsionnelRepository;

    public function __construct(AbstractVoter $abstractVoter, PrevisionnelRepository $previsionnelRepository)
    {
        $this->abstractVoter = $abstractVoter;
        $this->previsionnelRepository = $previsionnelRepository;
    }

    protected function supports(string $attribute, $subject): bool
    {
        return in_array($attribute, ['CAN_ADD_ABSENCE', 'CAN_ADD_NOTE', 'CAN_EDIT_ABSENCE'])
            && $subject instanceof Matiere;
    }

    protected function voteOnAttribute(string $attribute, $subject, TokenInterface $token): bool
    {
        //vérifier que c'est un prof, qu'il est dans le bon département et qu'il a un prévisionnel associé.
        $user = $token->getUser();

        if (!$user instanceof Personnel) {
            return false;
        }
        //todo: tester éventuellement des droits supplémentaire, et donc pas besoin de prévisionnel?

        if (!$this->abstractVoter->userInGoodDepartement($subject->semestre?->getDiplome()?->getDepartement())) {
            throw new AccessDeniedException('Vous n\'êtes pas dans le département associé à cette matière/ressource/SAÉ');
        }

        if ($this->abstractVoter->isResponsableDepartement($subject->semestre?->getDiplome()?->getDepartement())) {
            return true;
        }

        switch ($attribute) {
            case 'CAN_ADD_ABSENCE':
                //check if previsionnel exist...
                $previ = $this->previsionnelRepository->findBy([
                    'typeMatiere' => $subject->typeMatiere,
                    'idMatiere' => $subject->id,
                ]);
                if (0 === count($previ)) {
                    throw new AccessDeniedException('Vous ne pouvez pas saisir d\'absence dans cette matière/ressource/SAÉ');
                }
                break;
            case 'CAN_ADD_NOTE':
                //check if previsionnel exist... Vérifier selon l'étape s'il peut agir sur l'évaluation
                $previ = $this->previsionnelRepository->findBy([
                    'typeMatiere' => $subject->typeMatiere,
                    'idMatiere' => $subject->id,
                ]);
                if (0 === count($previ)) {
                    throw new AccessDeniedException('Vous ne pouvez pas saisir d\'évaluation dans cette matière/ressource/SAÉ');
                }
                break;
            case 'CAN_EDIT_ABSENCE':
                break;
        }

        return true;
    }
}
