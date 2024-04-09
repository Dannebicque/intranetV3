<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/apc/ApcSaeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/04/2024 14:35
 */

namespace App\Controller\administration\apc;

use App\Classes\Matieres\SaeManager;
use App\Classes\Pdf\PdfManager;
use App\Controller\BaseController;
use App\Entity\ApcSae;
use App\Entity\ApcSaeApprentissageCritique;
use App\Entity\ApcSaeCompetence;
use App\Entity\ApcSaeRessource;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Form\ApcSaeType;
use App\Repository\ApcApprentissageCritiqueRepository;
use App\Repository\ApcRessourceRepository;
use App\Repository\ApcSaeApprentissageCritiqueRepository;
use App\Repository\ApcSaeRepository;
use App\Repository\ApcSaeRessourceRepository;
use App\Repository\SemestreRepository;
use App\Utils\JsonRequest;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

#[Route(path: '/administration/apc/sae', name: 'administration_')]
class ApcSaeController extends BaseController
{
    /**
     * @throws RuntimeError
     * @throws SyntaxError
     * @throws LoaderError
     */
    #[Route(path: '/imprimer/{id}.pdf', name: 'apc_sae_export_one', methods: 'GET')]
    public function exportOne(PdfManager $myPDF, ApcSae $apcSae): Response
    {
        return $myPDF->pdf()::generePdf(
            'pdf/apc/fiche_sae.html.twig',
            ['apc_sae' => $apcSae],
            'sae'
        );
    }

    #[Route(path: '/ajax-edit/{id}', name: 'apc_sae_ajax_edit', options: ['expose' => true], methods: ['POST'])]
    public function ajaxEdit(SaeManager $saeManager, Request $request, ApcSae $acpSae): JsonResponse
    {
        $name = $request->request->get('field');
        $value = $request->request->get('value');
        $update = $saeManager->update($name, $value, $acpSae);

        return $update ? new JsonResponse('', Response::HTTP_OK) : new JsonResponse('erreur',
            Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/ajax-ac', name: 'apc_sae_ajax_ac', options: ['expose' => true], methods: ['POST'])]
    public function ajaxAc(
        SemestreRepository                    $semestreRepository,
        ApcSaeApprentissageCritiqueRepository $apcSaeApprentissageCritiqueRepository,
        ApcApprentissageCritiqueRepository    $apcApprentissageCritiqueRepository,
        Request                               $request): Response
    {
        $semestres = [];
        $idSemestres = JsonRequest::getValueFromRequest($request, 'semestres');
        foreach ($idSemestres as $idSemestre) {
            $sem = $semestreRepository->find($idSemestre);
            if (null !== $sem) {
                $semestres[] = $sem;
            }
        }

        $competences = JsonRequest::getValueFromRequest($request, 'competences');
        $t = [];
        if (0 !== count($semestres) && (null === $competences ? 0 : count($competences)) > 0) {
            if (null !== JsonRequest::getValueFromRequest($request, 'sae')) {
                $tabAcSae = $apcSaeApprentissageCritiqueRepository->findArrayIdAc(JsonRequest::getValueFromRequest($request, 'sae'));
            } else {
                $tabAcSae = [];
            }

            $datas = $apcApprentissageCritiqueRepository->findBySemestreAndCompetences($semestres[0]->getAnnee(),
                $competences);

            foreach ($datas as $d) {
                $b = [];

                $b['id'] = $d->getId();
                $b['libelle'] = $d->getLibelle();
                $b['code'] = $d->getCode();
                $b['checked'] = in_array($d->getId(), $tabAcSae);
                if (null !== $d->getNiveau() && null !== $d->getNiveau()->getCompetence() && !array_key_exists($d->getNiveau()->getCompetence()->getNomCourt(),
                        $t)) {
                    $t[$d->getNiveau()->getCompetence()->getNomCourt()] = [];
                }
                $t[$d->getNiveau()->getCompetence()->getNomCourt()][] = $b;
            }
        }

        return $this->render('apc/apc_sae/_bloc_ac.html.twig', [
            'acs' => $t,
        ]);
    }

    #[Route(path: '/ajax-ressources', name: 'apc_ressources_ajax', options: ['expose' => true], methods: ['POST'])]
    public function ajaxRessources(SemestreRepository $semestreRepository, ApcSaeRessourceRepository $apcSaeRessourceRepository, ApcRessourceRepository $apcRessourceRepository, Request $request): Response
    {
        $semestres = [];
        $idSemestres = JsonRequest::getValueFromRequest($request, 'semestres');
        foreach ($idSemestres as $idSemestre) {
            $sem = $semestreRepository->find($idSemestre);
            if (null !== $sem) {
                $semestres[] = $sem;
            }
        }

        $t = [];
        if (0 !== count($semestres)) {
            if (null !== JsonRequest::getValueFromRequest($request, 'sae') || '' !== trim(JsonRequest::getValueFromRequest($request, 'sae'))) {
                $tabAcSae = $apcSaeRessourceRepository->findArrayIdRessources(JsonRequest::getValueFromRequest($request, 'sae'));
            } else {
                $tabAcSae = [];
            }

            $datas = $apcRessourceRepository->findBySemestreReferentiel($semestres[0],
                $semestres[0]->getDiplome()?->getReferentiel());

            foreach ($datas as $d) {
                $b = [];

                $b['id'] = $d->getId();
                $b['libelle'] = $d->getLibelle();
                $b['code'] = $d->getCodeMatiere();
                $b['checked'] = in_array($d->getId(), $tabAcSae);
                $t[] = $b;
            }
        }

        return $this->render('apc/apc_sae/_bloc_ressources.html.twig', [
            'ressources' => $t,
        ]);
    }

    #[Route(path: '/{id}/enfants', name: 'apc_sae_enfants', methods: ['GET'])]
    public function enfants(
        ApcSaeRepository $apcSaeRepository,
        ApcSae $apcSae
    ): Response
    {
        $saes = [];
        foreach ($apcSae->getSemestres() as $semestre) {
            $saes[] = $apcSaeRepository->findBySemestre($semestre);
        }

        $saes = array_merge(...$saes);

        return $this->render('apc/apc_sae/enfants.html.twig', [
            'apcSae' => $apcSae,
            'saes' => $saes,
            'saeSemestres' => $apcSae->getSemestres(),
            'semestres' => $this->dataUserSession->getSemestres(),
        ]);
    }

    #[Route(path: '/ajouter/{diplome}', name: 'apc_sae_new', methods: ['GET', 'POST'])]
    public function new(
        SemestreRepository $semestreRepository,
        ApcApprentissageCritiqueRepository $apcApprentissageCritiqueRepository, ApcRessourceRepository $apcRessourceRepository, Request $request, Diplome $diplome): Response
    {
        $apcSae = new ApcSae();
        $form = $this->createForm(ApcSaeType::class, $apcSae, ['diplome' => $diplome]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $semestre = $semestreRepository->find($request->request->all()['apc_sae']['semestre']);
            if (null !== $semestre) {
                $apcSae->addSemestre($semestre);
                $semestre->addApcSemestresSae($apcSae);
                $this->entityManager->persist($apcSae);
                // sauvegarde des AC
                $acs = $request->request->has('ac') ? $request->request->all()['ac'] : [];
                if (is_array($acs)) {
                    foreach ($acs as $idAc) {
                        $ac = $apcApprentissageCritiqueRepository->find($idAc);
                        $saeAc = new ApcSaeApprentissageCritique($apcSae, $ac);
                        $this->entityManager->persist($saeAc);
                    }
                }

                $acs = $request->request->has('ressources') ? $request->request->all()['ressources'] : [];
                if (is_array($acs)) {
                    foreach ($acs as $idAc) {
                        $res = $apcRessourceRepository->find($idAc);
                        $saeRes = new ApcSaeRessource($apcSae, $res);
                        $this->entityManager->persist($saeRes);
                    }
                }

                $this->entityManager->flush();
                $this->addFlashBag(
                    Constantes::FLASHBAG_SUCCESS,
                    'apc.sae.new.success.flash'
                );
            } else {
                $this->addFlashBag(
                    Constantes::FLASHBAG_SUCCESS,
                    'apc.sae.new.error.flash'
                );

                return $this->render('apc/apc_sae/new.html.twig', [
                    'apc_sae' => $apcSae,
                    'diplome' => $diplome,
                    'form' => $form,
                ]);
            }

            if (true === $apcSae->getMutualisee()) {
                // si c'est défini comme une ressource parente, on redirige vers la page de gestion des ressources "enfants"
                return $this->redirectToRoute('administration_apc_sae_enfants', ['id' => $apcSae->getId()]);
            }

            return $this->redirectToRoute('administration_matiere_index', ['diplome' => $diplome->getId()]);
        }

        return $this->render('apc/apc_sae/new.html.twig', [
            'apc_sae' => $apcSae,
            'form' => $form,
            'diplome' => $diplome,
        ]);
    }

    #[Route(path: '/voir/{id}', name: 'apc_sae_show', methods: ['GET'])]
    public function show(ApcSae $apcSae): Response
    {
        return $this->render('apc/apc_sae/show.html.twig', [
            'apc_sae' => $apcSae,
            'diplome' => $apcSae->getSemestres()->first()->getDiplome(),
        ]);
    }

    #[Route(path: '/{id}/diplomes', name: 'apc_sae_add_diplome', methods: ['POST'])]
    public function addDiplome(
        Request $request,
        SemestreRepository $semestreRepository,
        ApcSae  $apcSae
    ): Response
    {
        $id = JsonRequest::getValueFromRequest($request, 'diplome');
        $semestre = $semestreRepository->find($id);

        if (null !== $semestre) {
            $apcSae->addSemestre($semestre);
            $semestre->addApcSemestresSae($apcSae);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'apc.sae.diplome.add.success.flash'
            );

            return $this->json(['success' => true], Response::HTTP_OK);
        }

        return $this->json(['success' => false], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/{id}/diplomes/supprimer', name: 'apc_sae_delete_diplome', methods: ['POST', 'GET'])]
    public function deleteDiplome(
        Request $request,
        SemestreRepository $semestreRepository,
        ApcSae  $apcSae
    ): Response
    {
        $id = JsonRequest::getValueFromRequest($request, 'diplome');
        $semestre = $semestreRepository->find($id);

        if (null !== $semestre) {
            $apcSae->removeSemestre($semestre);
            $semestre->removeApcSemestresSae($apcSae);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'apc.sae.diplome.remove.success.flash'
            );

            return $this->json(['success' => true], Response::HTTP_OK);
        }

        return $this->json(['success' => false], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/{id}/diplomes/liste', name: 'apc_sae_liste_diplomes', methods: ['GET'])]
    public function listeDiplomes(
        ApcSae $apcSae
    ): Response
    {
        return $this->render('apc/apc_sae/_liste_diplomes.html.twig', [
            'apcSae' => $apcSae,
            'saeSemestres' => $apcSae->getSemestres(),
        ]);
    }

    #[Route(path: '/{id}/{semestre}/modifier', name: 'apc_sae_edit', methods: ['GET', 'POST'])]
    public function edit(
        ApcRessourceRepository $apcRessourceRepository,
        ApcApprentissageCritiqueRepository $apcApprentissageCritiqueRepository,
        Request                $request,
        ApcSae                 $apcSae,
        Semestre               $semestre
    ): Response
    {
        $form = $this->createForm(ApcSaeType::class, $apcSae, [
            'diplome' => $semestre->getDiplome()
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            // on supprimer ceux présent
            foreach ($apcSae->getApcSaeApprentissageCritiques() as $ac) {
                $this->entityManager->remove($ac);
            }

            // sauvegarde des AC
            $acs = $request->request->all()['ac'] ?? [];
            if (is_array($acs)) {
                foreach ($acs as $idAc) {
                    $ac = $apcApprentissageCritiqueRepository->find($idAc);
                    $saeAc = new ApcSaeApprentissageCritique($apcSae, $ac);
                    $this->entityManager->persist($saeAc);
                }
            }

            foreach ($apcSae->getApcSaeRessources() as $ac) {
                $this->entityManager->remove($ac);
            }

            $acs = $request->request->all()['ressources'] ?? [];
            if (is_array($acs)) {
                foreach ($acs as $idAc) {
                    $res = $apcRessourceRepository->find($idAc);
                    $saeRes = new ApcSaeRessource($apcSae, $res);
                    $this->entityManager->persist($saeRes);
                }
            }


            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'apc.sae.edit.success.flash'
            );

            if (null !== $request->request->get('btn_update')) {
                return $this->redirectToRoute('administration_matiere_index',
                    ['diplome' => $semestre->getDiplome()->getId()]);
            }

            return $this->redirectToRoute('administration_apc_sae_edit',
                ['id' => $apcSae->getId(), 'semestre' => $semestre->getId()]);
        }

        return $this->render('apc/apc_sae/edit.html.twig', [
            'apc_sae' => $apcSae,
            'form' => $form,
            'diplome' => $semestre->getDiplome(),
        ]);
    }

    #[Route(path: '/{id}', name: 'apc_sae_delete', methods: ['DELETE'])]
    public function delete(Request $request, ApcSae $apcSae): Response
    {
        $id = $apcSae->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($apcSae);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'apc.sae.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'apc.sae.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/{id}/{semestre}/dupliquer', name: 'apc_sae_duplicate', methods: 'GET|POST')]
    public function duplicate(ApcSae $apcSae, Semestre $semestre): Response
    {
        $newApcSae = clone $apcSae;
        $this->entityManager->persist($newApcSae);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.sae.duplicate.success.flash');

        return $this->redirectToRoute('administration_apc_sae_edit', ['id' => $newApcSae->getId(), 'semestre' => $semestre->getId()]);
    }

    #[Route(path: '/{sae}/dupliquer/semestre', name: 'apc_duplique_move_sae', methods: 'POST')]
    public function duplicateAndMove(
        ApcSae  $sae,
        SemestreRepository $semestreRepository,
        Request $request
    ): Response
    {
        if ($request->isMethod('POST')) {
            $semestreCible = $semestreRepository->find($request->request->get('semestre_destination'));
            if (null !== $semestreCible) {
                $newSae = $this->duplicateSae($sae, $semestreCible);

                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.sae.duplicate.success.flash');

                return $this->redirectToRoute('administration_apc_sae_edit',
                    [
                        'id' => $newSae->getId(),
                        'semestre' => $semestreCible->getId(),
                    ]);
            }
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'apc.sae.duplicate.error.flash');

        return $this->redirectToRoute('administration_apc_sae_enfants', [
            'sae' => $sae->getId(),
        ]);
    }

    #[Route(path: '/{semestre}/dupliquer/semestre', name: 'apc_pn_duplique_sae_semestre', methods: 'GET|POST')]
    public function duplicateSemestre(
        ApcSaeRepository $apcSaeRepository,
        SemestreRepository $semestreRepository,
        Request          $request, Semestre $semestre): Response
    {
        if ($request->isMethod('POST')) {
            $semestreCible = $semestreRepository->find($request->request->get('semestre_destination'));
            if (null !== $semestreCible) {
                $saes = $apcSaeRepository->findBySemestreReferentiel($semestre, $semestre->getDiplome()->getReferentiel());
                foreach ($saes as $sae) {
                    $this->duplicateSae($sae, $semestreCible);
                }
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.sae.duplicate.success.flash');

                return $this->redirectToRoute('sa_apc_codification_mise_a_jour', ['semestre' => $semestreCible->getId()]);
            }

            $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'apc.sae.duplicate.error.flash');
        }

        return $this->render('apc/apc_sae/duplicate_semestre.html.twig', [
            'semestre' => $semestre,
            'semestres' => $semestreRepository->findAllSemestreByDiplomeApc($semestre->getDiplome()),
        ]);
    }

    private function duplicateSae(mixed $sae, Semestre $semestreCible)
    {
        $newApcSae = clone $sae;
        foreach ($newApcSae->getSemestres() as $sem) {
            $newApcSae->removeSemestre($sem);
            $sem->removeApcSemestresSae($newApcSae);
        }
        $newApcSae->addSemestre($semestreCible);
        $semestreCible->addApcSemestresSae($newApcSae);

        foreach ($sae->getApcSaeApprentissageCritiques() as $ac) {
            $newAc = new ApcSaeApprentissageCritique($newApcSae, $ac->getApprentissageCritique());
            $this->entityManager->persist($newAc);
        }

        foreach ($sae->getApcSaeCompetences() as $comp) {
            $newComp = new ApcSaeCompetence($newApcSae, $comp->getCompetence());
            $newComp->setCoefficient($comp->getCoefficient());
            $this->entityManager->persist($newComp);
        }

        $this->entityManager->persist($newApcSae);

        return $newApcSae;
    }
}
