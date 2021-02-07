<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Security/AbstractAuthenticator.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:16
 */

namespace App\Security;

use App\Entity\Departement;
use App\Events;
use App\Repository\DepartementRepository;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class AbstractAuthenticator
{
    public static function onAuthenticationSuccess(
        UrlGeneratorInterface $urlGenerator,
        SessionInterface $session,
        $rolesTab,
        DepartementRepository $departementRepository,
        $user,
        $target = ''
    ) {
        if (\in_array('ROLE_SUPER_ADMIN', $rolesTab, true) || \in_array('ROLE_ADMINISTRATIF', $rolesTab,
                true) || \in_array('ROLE_SCOLARITE', $rolesTab, true) || \in_array('ROLE_QUALITE', $rolesTab,
                true) || \in_array('ROLE_RH', $rolesTab, true)) {
            // c'est un super administrateur : on le rediriger vers l'espace super-admin
            $redirection = new RedirectResponse($urlGenerator->generate('super_admin_homepage'));
        } elseif (\in_array('ROLE_PERMANENT', $rolesTab, true) || \in_array('ROLE_ETUDIANT', $rolesTab, true)) {
            // c'est un utilisaeur étudiant ou prof : on le rediriger vers l'accueil

            if (\in_array('ROLE_PERMANENT', $rolesTab, true)) {
                //init de la session departement
                $departements = $departementRepository->findDepartementPersonnelDefaut($user);
                if (\count($departements) > 1) {
                    return new RedirectResponse($urlGenerator->generate('security_choix_departement'));
                }

                if (1 === \count($departements)) {
                    /** @var Departement $departement */
                    $departement = $departements[0];
                    $session->set('departement', $departement->getUuid()); //on sauvegarde
                } else {
                    //pas de departement par défaut, ou pas de departement du tout.
                    $departements = $departementRepository->findDepartementPersonnel($user);
                    if (0 === \count($departements)) {
                        return new RedirectResponse($urlGenerator->generate('security_login',
                            ['events' => Events::REDIRECT_TO_LOGIN, 'message' => 'pas-departement']));
                    }

                    //donc il y a une departement, mais pas une par défaut.
                    return new RedirectResponse($urlGenerator->generate('security_choix_departement'));
                }
            }

            if ('' !== $target && $targetPath = $target) {
                return new RedirectResponse($targetPath);
            }

            $redirection = new RedirectResponse($urlGenerator->generate('default_homepage'));
        } else {
            //c'est aucun des rôles...
            $redirection = new RedirectResponse($urlGenerator->generate('security_login',
                ['message' => 'erreur_role']));
        }

        return $redirection;
    }
}
