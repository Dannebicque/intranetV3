<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/apc/ApcRessourceController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 15/09/2021 20:34
 */

namespace App\Controller\administration\apc;

use App\Classes\Matieres\RessourceManager;
use App\Classes\Pdf\MyPDF;
use App\Controller\BaseController;
use App\Entity\ApcRessource;
use App\Entity\ApcRessourceApprentissageCritique;
use App\Entity\ApcRessourceEnfants;
use App\Entity\ApcSaeRessource;
use App\Entity\Constantes;
use App\Entity\Diplome;
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
    public function ajaxEdit(RessourceManager $ressourceManager, Request $request, ApcRessource $apcRessource): JsonResponse
    {
        $name = $request->request->get('field');
        $value = $request->request->get('value');
        $update = $ressourceManager->update($name, $value, $apcRessource);

        return $update ? new JsonResponse('', Response::HTTP_OK) : new JsonResponse('erreur',
            Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/ajax-ac', name: 'apc_ressources_ajax_ac', options: ['expose' => true], methods: ['POST'])]
    public function ajaxAc(SemestreRepository $semestreRepository, ApcRessourceApprentissageCritiqueRepository $apcRessourceApprentissageCritiqueRepository, ApcApprentissageCritiqueRepository $apcApprentissageCritiqueRepository, Request $request): Response
    {
        $semestre = $semestreRepository->find($request->request->get('semestre'));
        $competences = $request->request->get('competences');
        if (null !== $semestre && (null === $competences ? 0 : count($competences)) > 0) {
            if (null !== $request->request->get('ressource')) {
                $tabAcSae = $apcRessourceApprentissageCritiqueRepository->findArrayIdAc($request->request->get('ressource'));
            } else {
                $tabAcSae = [];
            }

            $datas = $apcApprentissageCritiqueRepository->findBySemestreAndCompetences($semestre->getAnnee(),
                $competences);

            $t = [];
            foreach ($datas as $d) {
                $b = [];

                $b['id'] = $d->getId();
                $b['libelle'] = $d->getLibelle();
                $b['code'] = $d->getCode();
                $b['checked'] = true === in_array($d->getId(), $tabAcSae) ? 'checked="checked"' : '';
                if (null !== $d->getNiveau() && null !== $d->getNiveau()->getCompetence() && !array_key_exists($d->getNiveau()->getCompetence()->getNomCourt(),
                        $t)) {
                    $t[$d->getNiveau()->getCompetence()->getNomCourt()] = [];
                }
                $t[$d->getNiveau()->getCompetence()->getNomCourt()][] = $b;
            }

            return $this->json($t);
        }

        return $this->json(false);
    }

    #[Route(path: '/ajax-sae', name: 'apc_sae_ajax', options: ['expose' => true], methods: ['POST'])]
    public function ajaxSae(SemestreRepository $semestreRepository, ApcSaeRessourceRepository $apcSaeRessourceRepository, ApcSaeRepository $apcSaeRepository, Request $request): Response
    {
        $semestre = $semestreRepository->find($request->request->get('semestre'));
        if (null !== $semestre) {
            if (null !== $request->request->get('ressource')) {
                $tabAcSae = $apcSaeRessourceRepository->findArrayIdSae($request->request->get('ressource'));
            } else {
                $tabAcSae = [];
            }

            $datas = $apcSaeRepository->findBySemestre($semestre);

            $t = [];
            foreach ($datas as $d) {
                $b = [];

                $b['id'] = $d->getId();
                $b['libelle'] = $d->getLibelle();
                $b['code'] = $d->getCodeMatiere();
                $b['checked'] = true === in_array($d->getId(), $tabAcSae) ? 'checked="checked"' : '';
                $t[] = $b;
            }

            return $this->json($t);
        }

        return $this->json(false);
    }

    #[Route(path: '/new/{diplome}', name: 'apc_ressource_new', methods: ['GET', 'POST'])]
    public function new(ApcApprentissageCritiqueRepository $apcApprentissageCritiqueRepository, ApcSaeRepository $apcSaeRepository, Request $request, Diplome $diplome): Response
    {
        $apcRessource = new ApcRessource();
        $form = $this->createForm(ApcRessourceType::class, $apcRessource, [
            'diplome' => $diplome,
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($apcRessource);

            $acs = $request->request->get('ac');
            if (is_array($acs)) {
                foreach ($acs as $idAc) {
                    $ac = $apcApprentissageCritiqueRepository->find($idAc);
                    $saeAc = new ApcRessourceApprentissageCritique($apcRessource, $ac);
                    $this->entityManager->persist($saeAc);
                }
            }

            $saes = $request->request->get('saes');
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
                'apc.ressource.new.success.flash'
            );

            if (true === $apcRessource->getRessourceParent() || true === $apcRessource->getMutualisee()) {
                //si c'est défini comme une ressource parente, on redirige vers la page de gestion des ressources "enfants"
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
        ApcRessource $apcRessource): Response
    {
        $enfants = $apcRessourceEnfantsRepository->findBy(['apcRessourceParent' => $apcRessource->getId()]);
        $groupes = $groupeRepository->findBySemestre($apcRessource->getSemestre());

        return $this->render('apc/apc_ressource/enfants.html.twig', [
            'groupes' => $groupes,
            'apcRessource' => $apcRessource,
            'enfants' => $enfants,
            'ressources' => $apcRessourceRepository->findBySemestre($apcRessource->getSemestre()), //todo: comment gérer le semestre ?
            'ressourceSemestres' => $apcRessource->getSemestres(),
            'semestres' => $this->dataUserSession->getSemestres(),
        ]);
    }

    #[Route(path: '/{id}/enfants', name: 'apc_ressource_add_enfant', methods: ['POST'])]
    public function addEnfant(
        Request $request,
        ApcRessourceRepository $apcRessourceRepository,
        ApcRessource $apcRessource): Response
    {
        $id = JsonRequest::getValueFromRequest($request, 'enfant');
        $apcRessourceEnfant = $apcRessourceRepository->find($id);

        if (null !== $apcRessourceEnfant) {
            $apcE = new ApcRessourceEnfants();
            $apcE->setApcRessourceParent($apcRessource);
            $apcE->setApcRessourceEnfant($apcRessourceEnfant);
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
        ApcRessource $apcRessource): Response
    {
        $id = JsonRequest::getValueFromRequest($request, 'enfant');
        $apcRessourceEnfant = $apcRessourceEnfantsRepository->findOneBy(['apcRessourceParent' => $apcRessource->getId(), 'apcRessourceEnfant' => $id]);

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
        ApcRessource $apcRessource): Response
    {
        $id = JsonRequest::getValueFromRequest($request, 'enfant');
        $idGroupe = JsonRequest::getValueFromRequest($request, 'groupe');
        $apcRessourceEnfant = $apcRessourceEnfantsRepository->findOneBy(['apcRessourceParent' => $apcRessource->getId(), 'apcRessourceEnfant' => $id]);
        $groupe = $groupeRepository->find($idGroupe);

        if (null !== $apcRessourceEnfant && null !== $groupe) {
            $apcRessourceEnfant->setGroupe($groupe);
            $this->entityManager->flush();

            return $this->json(['success' => true], Response::HTTP_OK);
        }

        return $this->json(['success' => false], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/{id}/enfants/liste', name: 'apc_ressource_liste_enfants', methods: ['GET'])]
    public function listeEnfants(
        GroupeRepository $groupeRepository,
        ApcRessourceEnfantsRepository $apcRessourceEnfantsRepository,
        ApcRessource $apcRessource): Response
    {
        $enfants = $apcRessourceEnfantsRepository->findBy(['apcRessourceParent' => $apcRessource->getId()]);
        $groupes = $groupeRepository->findBySemestre($apcRessource->getSemestre());

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
        ApcRessource $apcRessource): Response
    {
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
        ApcRessource $apcRessource): Response
    {
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
        ApcRessourceEnfantsRepository $apcRessourceEnfantsRepository,
        ApcRessource $apcRessource): Response
    {
        return $this->render('apc/apc_ressource/_liste_diplomes.html.twig', [
            'apcRessource' => $apcRessource,
            'ressourceSemestres' => $apcRessource->getSemestres(),
        ]);
    }

    #[Route(path: '/{id}/edit', name: 'apc_ressource_edit', methods: ['GET', 'POST'])]
    public function edit(ApcApprentissageCritiqueRepository $apcApprentissageCritiqueRepository, ApcSaeRepository $apcSaeRepository, Request $request, ApcRessource $apcRessource): Response
    {
        $form = $this->createForm(ApcRessourceType::class, $apcRessource, [
            'diplome' => $apcRessource->getDiplome(),
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            foreach ($apcRessource->getApcRessourceApprentissageCritiques() as $ac) {
                $this->entityManager->remove($ac);
            }

            $acs = $request->request->get('ac');
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
            $saes = $request->request->get('saes');
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
                ['id' => $apcRessource->getId()]);
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
        if ($this->isCsrfTokenValid('delete'.$id, $request->request->get('_token'))) {
            //todo: vérifier si pas d'évaluation ou d'absence (idem SAE)
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

    #[Route(path: '/{id}/duplicate', name: 'apc_ressource_duplicate', methods: 'GET|POST')]
    public function duplicate(ApcRessource $apcRessource): Response
    {
        $newApcRessource = clone $apcRessource;

        // Recopie des semestres (todo: faire idem sur les autres)
        foreach ($apcRessource->getSemestres() as $semestre) {
            $newApcRessource->addSemestre($semestre);
            $semestre->addApcSemestresRessource($newApcRessource);
        }

        $this->entityManager->persist($newApcRessource);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.ressource.duplicate.success.flash');

        return $this->redirectToRoute('administration_apc_ressource_edit', ['id' => $newApcRessource->getId()]);
    }
}
