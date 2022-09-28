<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/EtudiantController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/09/2022 14:42
 */

namespace App\Controller\administration;

use App\Classes\Etudiant\EtudiantScolarite;
use App\Classes\Etudiant\EtudiantUpdate;
use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Form\EtudiantType;
use App\Repository\EtudiantRepository;
use App\Table\EtudiantDepartementTableType;
use App\Utils\JsonRequest;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/administration/etudiant')]
class EtudiantController extends BaseController
{
    /**
     * @throws \JsonException
     */
    #[Route('/', name: 'administration_etudiant_index', options: ['expose' => true])]
    public function index(Request $request): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $this->getDepartement());

        $table = $this->createTable(EtudiantDepartementTableType::class, [
            'departement' => $this->getDepartement(),
        ]);

        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('administration/etudiant/index.html.twig', [
            'table' => $table,
        ]);
    }

    #[Route('/edit/{id}/{origin}', name: 'administration_etudiant_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Etudiant $etudiant, string $origin = 'semestre'): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $etudiant->getSemestre());

        $form = $this->createForm(
            EtudiantType::class,
            $etudiant,
            [
                'attr' => [
                    'data-provide' => 'validation',
                ],
                'departement' => $this->dataUserSession->getDepartement(),
            ]
        );

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($etudiant);
            $this->entityManager->flush();

            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'etudiant.edit.success.flash');

            if (null !== $request->request->get('btn_update')) {
                if ('semestre' === $origin && null !== $etudiant->getSemestre()) {
                    return $this->redirectToRoute('administration_semestre_index',
                        ['semestre' => $etudiant->getSemestre()->getId()]);
                }

                return $this->redirectToRoute('administration_etudiant_index');
            }

            $this->redirectToRoute('administration_etudiant_index', ['semestre' => $etudiant->getSemestre()->getId()]);
        }

        return $this->render('administration/etudiant/edit.html.twig', [
            'etudiant' => $etudiant,
            'form' => $form->createView(),
            'origin' => $origin,
        ]);
    }

    #[Route('/add', name: 'administration_etudiant_add', methods: ['POST'])]
    public function create(Request $request): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $this->getDepartement());

        $etudiant = new Etudiant();

        $form = $this->createForm(
            EtudiantType::class,
            $etudiant,
            [
                'attr' => [
                    'data-provide' => 'validation',
                ],
                'departement' => $this->dataUserSession->getDepartement(),
            ]
        );

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($etudiant);
            $this->entityManager->flush();

            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'etudiant.add.success.flash');
        }

        return $this->redirectToRoute('administration_etudiant_semestre_add');
    }

    #[Route(path: '/change-etat/{uuid}/{etat}', name: 'adm_etudiant_change_etat', options: ['expose' => true], methods: 'POST')]
    #[ParamConverter('etudiant', options: ['mapping' => ['uuid' => 'uuid']])]
    public function changeEtat(EtudiantScolarite $etudiantScolarite, Etudiant $etudiant, string $etat): JsonResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $etudiant->getSemestre());
        $etudiantScolarite->setEtudiant($etudiant);
        $etudiantScolarite->changeEtat($etat);

        return $this->json(true, Response::HTTP_OK);
    }

    #[Route(path: '/demissionnaire/{uuid}', name: 'administration_etudiant_demissionnaire', methods: 'GET')]
    #[ParamConverter('etudiant', options: ['mapping' => ['uuid' => 'uuid']])]
    public function demissionnaire(EtudiantScolarite $etudiantScolarite, Etudiant $etudiant): RedirectResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
        $etudiantScolarite->setEtudiant($etudiant);
        $etudiantScolarite->changeEtat(Constantes::SEMESTRE_DEMISSIONNAIRE);

        return $this->redirectToRoute('trombinoscope_index');
    }

    #[Route(path: '/supprimer/{uuid}', name: 'administration_etudiant_delete', methods: 'DELETE')]
    #[ParamConverter('etudiant', options: ['mapping' => ['uuid' => 'uuid']])]
    public function delete(EtudiantScolarite $etudiantScolarite, Etudiant $etudiant): RedirectResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $etudiant->getSemestre());
        $etudiantScolarite->setEtudiant($etudiant);
        $etudiantScolarite->changeEtat(Constantes::SUPPRIMER_FORMATION);

        return $this->redirectToRoute('trombinoscope_index');
    }

    /**
     * @throws \JsonException
     */
    #[Route('/edit-ajax/{id}', name: 'adm_etudiant_edit_ajax', options: ['expose' => true], methods: ['POST'])]
    public function editAjax(EtudiantUpdate $etudiantUpdate, Request $request, Etudiant $etudiant): JsonResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $etudiant->getDepartement());
        $parametersAsArray = JsonRequest::getFromRequest($request);
        if (array_key_exists('field', $parametersAsArray) && array_key_exists('value', $parametersAsArray)) {
            $etudiantUpdate->update($etudiant, $parametersAsArray['field'], $parametersAsArray['value']);

            return $this->json(true, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route('/export.{_format}', name: 'administration_all_etudiant_export', requirements: ['_format' => 'csv|xlsx|pdf'],
        methods: ['GET'])]
    public function export(MySerializer $mySerializer, MyExport $myExport, EtudiantRepository $etudiantRepository, string $_format): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $this->getDepartement());
        $etudiants = $etudiantRepository->getByDepartement($this->getDepartement());
        $data = $mySerializer->getDataFromSerialization(
            $etudiants,
            [
                'nom',
                'prenom',
                'civilite',
                'numEtudiant',
                'mailUniv',
                'semestre' => ['libelle'],
                'adresse' => ['adresse1', 'adresse2', 'cp', 'ville', 'pays'],
            ],
            ['etudiants_administration', 'adresse']
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'etudiants_'.$this->getDepartement()?->getLibelle(),
        );
    }
}
