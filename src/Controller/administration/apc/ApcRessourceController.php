<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/apc/ApcRessourceController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/09/2022 08:41
 */

namespace App\Controller\administration\apc;

use App\Classes\Matieres\RessourceManager;
use App\Classes\Pdf\MyPDF;
use App\Controller\BaseController;
use App\Entity\ApcRessource;
use App\Entity\ApcRessourceApprentissageCritique;
use App\Entity\ApcRessourceCompetence;
use App\Entity\ApcRessourceEnfants;
use App\Entity\ApcSaeRessource;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Form\ApcRessourceType;
use App\Repository\ApcApprentissageCritiqueRepository;
use App\Repository\ApcRessourceApprentissageCritiqueRepository;
use App\Repository\ApcRessourceEnfantsRepository;
use App\Repository\ApcRessourceRepository;
use App\Repository\ApcSaeRepository;
use App\Repository\ApcSaeRessourceRepository;
use App\Repository\GroupeRepository;
use App\Repository\SemestreRepository;
use App\Utils\JsonRequest;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/administration/apc/ressource', name: 'administration_')]
class ApcRessourceController extends BaseController
{
    /**
     * @throws \Twig\Error\SyntaxError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\LoaderError
     */
    #[Route(path: '/imprime/{id}.pdf', name: 'apc_ressource_export_one', methods: 'GET')]
    public function exportOne(MyPDF $myPDF, ApcRessource $apcRessource): PdfResponse
    {
        return $myPDF::generePdf(
            'pdf/apc/fiche_ressource.html.twig',
            ['apc_sae' => $apcRessource],
            'ressource'
        );
    }

    #[Route(path: '/ajax-edit/{id}', name: 'apc_ressources_ajax_edit', options: ['expose' => true], methods: ['POST'])]
    public function ajaxEdit(
        RessourceManager $ressourceManager,
        Request $request,
        ApcRessource $apcRessource
    ): JsonResponse {
        $name = $request->request->get('field');
        $value = $request->request->get('value');
        $update = $ressourceManager->update($name, $value, $apcRessource);

        return $update ? new JsonResponse('', Response::HTTP_OK) : new JsonResponse('erreur',
            Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/ajax-ac', name: 'apc_ressources_ajax_ac', options: ['expose' => true], methods: ['POST'])]
    public function ajaxAc(
        SemestreRepository $semestreRepository,
        ApcRessourceApprentissageCritiqueRepository $apcRessourceApprentissageCritiqueRepository,
        ApcApprentissageCritiqueRepository $apcApprentissageCritiqueRepository,
        Request $request
    ): Response {
        $semestre = $semestreRepository->find(JsonRequest::getValueFromRequest($request, 'semestre'));
        $competences = JsonRequest::getValueFromRequest($request, 'competences');
        $t = [];
        if (null !== $semestre && (null === $competences ? 0 : count($competences)) > 0) {
            if (null !== JsonRequest::getValueFromRequest($request, 'ressource')) {
                $tabAcSae = $apcRessourceApprentissageCritiqueRepository->findArrayIdAc((int) JsonRequest::getValueFromRequest($request,
                    'ressource'));
            } else {
                $tabAcSae = [];
            }

            $datas = $apcApprentissageCritiqueRepository->findBySemestreAndCompetences($semestre->getAnnee(),
                $competences);

            foreach ($datas as $d) {
                $b = [];

                $b['id'] = $d->getId();
                $b['libelle'] = $d->getLibelle();
                $b['code'] = $d->getCode();
                $b['checked'] = in_array($d->getId(), $tabAcSae, true);
                if (null !== $d->getNiveau() && null !== $d->getNiveau()->getCompetence() && !array_key_exists($d->getNiveau()->getCompetence()->getNomCourt(),
                        $t)) {
                    $t[$d->getNiveau()->getCompetence()->getNomCourt()] = [];
                }
                $t[$d->getNiveau()->getCompetence()->getNomCourt()][] = $b;
            }
        }

        return $this->render('apc/apc_ressource/_bloc_ac.html.twig', [
            'acs' => $t,
        ]);
    }

    #[Route(path: '/ajax-sae', name: 'apc_sae_ajax', options: ['expose' => true], methods: ['POST'])]
    public function ajaxSae(
        SemestreRepository $semestreRepository,
        ApcSaeRessourceRepository $apcSaeRessourceRepository,
        ApcSaeRepository $apcSaeRepository,
        Request $request
    ): Response {
        $t = [];
        $semestre = $semestreRepository->find(JsonRequest::getValueFromRequest($request, 'semestre'));
        if (null !== $semestre) {
            if (null !== $request->request->get('ressource')) {
                $tabAcSae = $apcSaeRessourceRepository->findArrayIdSae(JsonRequest::getValueFromRequest($request,
                    'ressource'));
            } else {
                $tabAcSae = [];
            }

            $datas = $apcSaeRepository->findBySemestreReferentiel($semestre,
                $semestre->getDiplome()?->getReferentiel());

            foreach ($datas as $d) {
                $b = [];

                $b['id'] = $d->getId();
                $b['libelle'] = $d->getLibelle();
                $b['code'] = $d->getCodeMatiere();
                $b['checked'] = in_array($d->getId(), $tabAcSae, true);
                $t[] = $b;
            }
        }

        return $this->render('apc/apc_ressource/_bloc_sae.html.twig', [
            'saes' => $t,
        ]);
    }

    #[Route(path: '/new/{diplome}', name: 'apc_ressource_new', methods: ['GET', 'POST'])]
    public function new(
        SemestreRepository $semestreRepository,
        ApcApprentissageCritiqueRepository $apcApprentissageCritiqueRepository,
        ApcSaeRepository $apcSaeRepository,
        Request $request,
        Diplome $diplome
    ): Response {
        $apcRessource = new ApcRessource();
        $form = $this->createForm(ApcRessourceType::class, $apcRessource, [
            'diplome' => $diplome,
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $semestre = $semestreRepository->find($request->request->all()['apc_ressource']['semestre']);
            if (null !== $semestre) {
                $apcRessource->addSemestre($semestre);
                $semestre->addApcSemestresRessource($apcRessource);

                $this->entityManager->persist($apcRessource);

                $acs = $request->request->has('ac') ? $request->request->all()['ac'] : [];;
                if (is_array($acs)) {
                    foreach ($acs as $idAc) {
                        $ac = $apcApprentissageCritiqueRepository->find($idAc);
                        $saeAc = new ApcRessourceApprentissageCritique($apcRessource, $ac);
                        $this->entityManager->persist($saeAc);
                    }
                }

                $saes = $request->request->has('saes') ? $request->request->all()['saes'] : null;
                if (is_array($saes)) {
                    foreach ($saes as $idAc) {
                        $apcSae = $apcSaeRepository->find($idAc);
                        $saeRes = new ApcSaeRessource($apcSae, $apcRessource);
                        $this->entityManager->persist($saeRes);
                    }
                }
                $this->addFlashBag(
                    Constantes::FLASHBAG_SUCCESS,
                    'apc.ressource.new.success.flash'
                );
                $this->entityManager->flush();
            } else {
                $this->addFlashBag(
                    Constantes::FLASHBAG_SUCCESS,
                    'apc.ressource.new.error.flash'
                );

                return $this->render('apc/apc_ressource/new.html.twig', [
                    'apc_ressource' => $apcRessource,
                    'diplome' => $diplome,
                    'form' => $form->createView(),
                ]);
            }

            if (true === $apcRessource->getRessourceParent() || true === $apcRessource->getMutualisee()) {
                // si c'est défini comme une ressource parente, on redirige vers la page de gestion des ressources "enfants"
                return $this->redirectToRoute('administration_apc_ressource_enfants', ['id' => $apcRessource->getId()]);
            }

            return $this->redirectToRoute('administration_matiere_index', ['diplome' => $diplome->getId()]);
        }

        return $this->render('apc/apc_ressource/new.html.twig', [
            'apc_ressource' => $apcRessource,
            'diplome' => $diplome,
            'form' => $form->createView(),
        ]);
    }

    #[Route(path: '/{id}', name: 'apc_ressource_show', methods: ['GET'])]
    public function show(ApcRessource $apcRessource): Response
    {
        return $this->render('apc/apc_ressource/show.html.twig', [
            'apc_ressource' => $apcRessource,
        ]);
    }

    #[Route(path: '/{id}/enfants', name: 'apc_ressource_enfants', methods: ['GET'])]
    public function enfants(
        GroupeRepository $groupeRepository,
        ApcRessourceEnfantsRepository $apcRessourceEnfantsRepository,
        ApcRessourceRepository $apcRessourceRepository,
        ApcRessource $apcRessource
    ): Response {
        $enfants = $apcRessourceEnfantsRepository->findBy(['apcRessourceParent' => $apcRessource->getId()]);

        $groupes = [];
        $ressources = [];
        foreach ($apcRessource->getSemestres() as $semestre) {
            $groupes[] = $groupeRepository->findBySemestre($semestre);
            $ressources[] = $apcRessourceRepository->findBySemestre($semestre);
        }

        $groupes = array_merge(...$groupes);
        $ressources = array_merge(...$ressources);

        return $this->render('apc/apc_ressource/enfants.html.twig', [
            'groupes' => $groupes,
            'apcRessource' => $apcRessource,
            'enfants' => $enfants,
            'ressources' => $ressources,
            'ressourceSemestres' => $apcRessource->getSemestres(),
            'semestres' => $this->dataUserSession->getSemestres(),
        ]);
    }

    #[Route(path: '/{id}/enfants', name: 'apc_ressource_add_enfant', methods: ['POST'])]
    public function addEnfant(
        Request $request,
        GroupeRepository $groupeRepository,
        ApcRessourceRepository $apcRessourceRepository,
        ApcRessource $apcRessource
    ): Response {
        $id = JsonRequest::getValueFromRequest($request, 'enfant');
        $idsGroupe = JsonRequest::getValueFromRequest($request, 'groupes');
        $apcRessourceEnfant = $apcRessourceRepository->find($id);

        if (null !== $apcRessourceEnfant) {
            $apcE = new ApcRessourceEnfants();
            $apcE->setApcRessourceParent($apcRessource);
            $apcE->setApcRessourceEnfant($apcRessourceEnfant);
            foreach ($idsGroupe as $idGroupe) {
                $groupe = $groupeRepository->find($idGroupe);
                if (null !== $groupe) {
                    $apcE->addGroupe($groupe);
                    $groupe->addApcRessourceEnfant($apcE);
                }
            }
            $this->entityManager->persist($apcE);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'apc.ressource.enfant.add.success.flash'
            );

            return $this->json(['success' => true], Response::HTTP_OK);
        }

        return $this->json(['success' => false], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/{id}/enfants/delete', name: 'apc_ressource_delete_enfant', methods: ['POST'])]
    public function deleteEnfant(
        Request $request,
        ApcRessourceEnfantsRepository $apcRessourceEnfantsRepository,
        ApcRessource $apcRessource
    ): Response {
        $id = JsonRequest::getValueFromRequest($request, 'enfant');
        $apcRessourceEnfant = $apcRessourceEnfantsRepository->findOneBy([
            'apcRessourceParent' => $apcRessource->getId(),
            'apcRessourceEnfant' => $id,
        ]);

        if (null !== $apcRessourceEnfant) {
            $this->entityManager->remove($apcRessourceEnfant);
            $this->entityManager->flush();

            return $this->json(['success' => true], Response::HTTP_OK);
        }

        return $this->json(['success' => false], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/{id}/enfants/groupe', name: 'apc_ressource_groupe_enfant', methods: ['POST'])]
    public function updateGroupeEnfant(
        Request $request,
        GroupeRepository $groupeRepository,
        ApcRessourceEnfantsRepository $apcRessourceEnfantsRepository,
        ApcRessource $apcRessource
    ): Response {
        $id = JsonRequest::getValueFromRequest($request, 'enfant');
        $idsGroupe = JsonRequest::getValueFromRequest($request, 'groupes');
        $apcRessourceEnfant = $apcRessourceEnfantsRepository->findOneBy([
            'apcRessourceParent' => $apcRessource->getId(),
            'apcRessourceEnfant' => $id,
        ]);

        if (null !== $apcRessourceEnfant) {
            foreach ($idsGroupe as $idGroupe) {
                $groupe = $groupeRepository->find($idGroupe);
                if (null !== $groupe) {
                    $apcRessourceEnfant->addGroupe($groupe);
                    $groupe->addApcRessourceEnfant($apcRessourceEnfant);
                }
            }

            $this->entityManager->flush();

            return $this->json(['success' => true], Response::HTTP_OK);
        }

        return $this->json(['success' => false], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/{id}/enfants/liste', name: 'apc_ressource_liste_enfants', methods: ['GET'])]
    public function listeEnfants(
        GroupeRepository $groupeRepository,
        ApcRessourceEnfantsRepository $apcRessourceEnfantsRepository,
        ApcRessource $apcRessource
    ): Response {
        $enfants = $apcRessourceEnfantsRepository->findBy(['apcRessourceParent' => $apcRessource->getId()]);

        $groupes = [];
        foreach ($apcRessource->getSemestres() as $semestre) {
            $groupes[] = $groupeRepository->findBySemestre($semestre);
        }

        $groupes = array_merge(...$groupes);

        return $this->render('apc/apc_ressource/_liste_enfants.html.twig', [
            'apcRessource' => $apcRessource,
            'enfants' => $enfants,
            'groupes' => $groupes,
        ]);
    }

    #[Route(path: '/{id}/diplomes', name: 'apc_ressource_add_diplome', methods: ['POST'])]
    public function addDiplome(
        Request $request,
        SemestreRepository $semestreRepository,
        ApcRessource $apcRessource
    ): Response {
        $id = JsonRequest::getValueFromRequest($request, 'diplome');
        $semestre = $semestreRepository->find($id);

        if (null !== $semestre) {
            $apcRessource->addSemestre($semestre);
            $semestre->addApcSemestresRessource($apcRessource);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'apc.ressource.diplome.add.success.flash'
            );

            return $this->json(['success' => true], Response::HTTP_OK);
        }

        return $this->json(['success' => false], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/{id}/diplomes/delete', name: 'apc_ressource_delete_diplome', methods: ['POST'])]
    public function deleteDiplome(
        Request $request,
        SemestreRepository $semestreRepository,
        ApcRessource $apcRessource
    ): Response {
        $id = JsonRequest::getValueFromRequest($request, 'diplome');
        $semestre = $semestreRepository->find($id);

        if (null !== $semestre) {
            $apcRessource->removeSemestre($semestre);
            $semestre->removeApcSemestresRessource($apcRessource);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'apc.ressource.diplome.remove.success.flash'
            );

            return $this->json(['success' => true], Response::HTTP_OK);
        }

        return $this->json(['success' => false], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/{id}/diplomes/liste', name: 'apc_ressource_liste_diplomes', methods: ['GET'])]
    public function listeDiplomes(
        ApcRessource $apcRessource
    ): Response {
        return $this->render('apc/apc_ressource/_liste_diplomes.html.twig', [
            'apcRessource' => $apcRessource,
            'ressourceSemestres' => $apcRessource->getSemestres(),
        ]);
    }

    #[Route(path: '/{id}/{semestre}/edit', name: 'apc_ressource_edit', methods: ['GET', 'POST'])]
    public function edit(
        ApcApprentissageCritiqueRepository $apcApprentissageCritiqueRepository,
        ApcSaeRepository $apcSaeRepository,
        Request $request,
        ApcRessource $apcRessource,
        Semestre $semestre
    ): Response {
        // todo: semestre n'est plus dans ApcRessource, il faut le supprimer
        $form = $this->createForm(ApcRessourceType::class, $apcRessource, [
            'diplome' => $apcRessource->getDiplome(),
            'semestre' => $semestre,
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            foreach ($apcRessource->getApcRessourceApprentissageCritiques() as $ac) {
                $this->entityManager->remove($ac);
            }

            $acs = $request->request->all()['ac'];
            if (is_array($acs)) {
                foreach ($acs as $idAc) {
                    $ac = $apcApprentissageCritiqueRepository->find($idAc);
                    $saeAc = new ApcRessourceApprentissageCritique($apcRessource, $ac);
                    $this->entityManager->persist($saeAc);
                }
            }

            foreach ($apcRessource->getApcSaeRessources() as $ac) {
                $this->entityManager->remove($ac);
            }
            $saes = $request->request->all()['saes'];
            if (is_array($saes)) {
                foreach ($saes as $idAc) {
                    $apcSae = $apcSaeRepository->find($idAc);
                    $saeRes = new ApcSaeRessource($apcSae, $apcRessource);
                    $this->entityManager->persist($saeRes);
                }
            }

            $this->entityManager->flush();

            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'apc.ressource.edit.success.flash'
            );

            if (null !== $request->request->get('btn_update') && null !== $apcRessource->getDiplome()) {
                return $this->redirectToRoute('administration_matiere_index',
                    ['diplome' => $apcRessource->getDiplome()->getId()]);
            }

            if (null !== $request->request->get('btn_update_enfants') && (true === $apcRessource->getRessourceParent() || true === $apcRessource->getMutualisee())) {
                return $this->redirectToRoute('administration_apc_ressource_enfants',
                    ['id' => $apcRessource->getId()]);
            }

            return $this->redirectToRoute('administration_apc_ressource_edit',
                ['id' => $apcRessource->getId(), 'semestre' => $semestre->getId()]);
        }

        return $this->render('apc/apc_ressource/edit.html.twig', [
            'apc_ressource' => $apcRessource,
            'form' => $form->createView(),
            'diplome' => $apcRessource->getDiplome(),
        ]);
    }

    #[Route(path: '/{id}', name: 'apc_ressource_delete', methods: 'DELETE')]
    public function delete(Request $request, ApcRessource $apcRessource): Response
    {
        $id = $apcRessource->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            // todo: vérifier si pas d'évaluation ou d'absence (idem SAE)
            $this->entityManager->remove($apcRessource);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'apc.ressource.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'apc.ressource.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/{id}/{semestre}/duplicate', name: 'apc_ressource_duplicate', methods: 'GET|POST')]
    public function duplicate(ApcRessource $apcRessource, Semestre $semestre): Response
    {
        $newApcRessource = clone $apcRessource;

        // Recopie des semestres (todo: faire idem sur les autres)
        foreach ($apcRessource->getSemestres() as $sem) {
            $newApcRessource->addSemestre($sem);
            $sem->addApcSemestresRessource($newApcRessource);
        }

        $this->entityManager->persist($newApcRessource);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.ressource.duplicate.success.flash');

        return $this->redirectToRoute('administration_apc_ressource_edit',
            ['id' => $newApcRessource->getId(), 'semestre' => $semestre->getId()]);
    }

    #[Route(path: '/{ressource}/dupliquer/semestre', name: 'apc_duplique_move_ressource', methods: 'POST')]
    public function duplicateAndMove(
        ApcRessource $ressource,
        SemestreRepository $semestreRepository,
        Request $request
    ): Response {
        if ($request->isMethod('POST')) {
            $semestreCible = $semestreRepository->find($request->request->get('semestre_destination'));
            if (null !== $semestreCible) {
                $newRessource = $this->duplicateRessource($ressource, $semestreCible);

                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.ressource.duplicate.success.flash');

                return $this->redirectToRoute('administration_apc_ressource_edit',
                    [
                        'id' => $newRessource->getId(),
                        'semestre' => $semestreCible->getId(),
                    ]);
            }
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'apc.sae.duplicate.error.flash');

        return $this->redirectToRoute('administration_apc_ressource_enfants', [
            'ressource' => $ressource->getId(),
        ]);
    }

    #[Route(path: '/{semestre}/dupliquer/semestre', name: 'apc_pn_duplique_ressource_semestre', methods: 'GET|POST')]
    public function duplicateSemestre(
        ApcRessourceRepository $apcRessourceRepository,
        SemestreRepository $semestreRepository,
        Request $request,
        Semestre $semestre
    ): Response {
        if ($request->isMethod('POST')) {
            $semestreCible = $semestreRepository->find($request->request->get('semestre_destination'));
            if (null !== $semestreCible) {
                $ressources = $apcRessourceRepository->findBySemestreReferentiel($semestre,
                    $semestre->getDiplome()->getReferentiel());
                foreach ($ressources as $ressource) {
                    $this->duplicateRessource($ressource, $semestreCible);
                }
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.ressource.duplicate.success.flash');

                return $this->redirectToRoute('sa_apc_codification_mise_a_jour',
                    ['semestre' => $semestreCible->getId()]);
            }

            $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'apc.sae.duplicate.error.flash');
        }

        return $this->render('apc/apc_ressource/duplicate_semestre.html.twig', [
            'semestre' => $semestre,
            'semestres' => $semestreRepository->findAllSemestreByDiplomeApc($semestre->getDiplome()),
        ]);
    }

    /**
     * @return void
     */
    private function duplicateRessource(ApcRessource $ressource, Semestre $semestreCible): ApcRessource
    {
        $newApcRessource = clone $ressource;
        foreach ($newApcRessource->getSemestres() as $sem) {
            $newApcRessource->removeSemestre($sem);
            $sem->removeApcSemestresRessource($newApcRessource);
        }
        $newApcRessource->addSemestre($semestreCible);
        $semestreCible->addApcSemestresRessource($newApcRessource);

        foreach ($ressource->getApcRessourceApprentissageCritiques() as $ac) {
            $newAc = new ApcRessourceApprentissageCritique($newApcRessource,
                $ac->getApprentissageCritique());
            $this->entityManager->persist($newAc);
        }

        foreach ($ressource->getApcRessourceCompetences() as $comp) {
            $newComp = new ApcRessourceCompetence($newApcRessource, $comp->getCompetence());
            $newComp->setCoefficient($comp->getCoefficient());
            $this->entityManager->persist($newComp);
        }
        $this->entityManager->persist($newApcRessource);

        return $newApcRessource;
    }
}
