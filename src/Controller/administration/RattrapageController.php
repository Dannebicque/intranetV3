<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/RattrapageController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/09/2022 08:55
 */

namespace App\Controller\administration;

use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Rattrapage;
use App\Entity\Semestre;
use App\Event\RattrapageEvent;
use App\Repository\AbsenceRepository;
use App\Repository\RattrapageRepository;
use App\Table\RattrapageTableType;
use JsonException;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

#[Route('/administration/rattrapage')]
class RattrapageController extends BaseController
{
    /**
     * @throws JsonException
     */
    #[Route('/semestre/{semestre}', name: 'administration_rattrapage_semestre_index', options: ['expose' => true])]
    public function index(
        TypeMatiereManager $typeMatiereManager,
        Request $request,
        AbsenceRepository $absenceRepository,
        Semestre $semestre
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $semestre);

        $table = $this->createTable(RattrapageTableType::class, [
            'semestre' => $semestre,
            'anneeUniversitaire' => $this->getAnneeUniversitaire(),
            'absences' => $absenceRepository->findBySemestreRattrapage($semestre,
                $semestre->getAnneeUniversitaire()),
            'matieres' => $typeMatiereManager->findBySemestreArray($semestre),
        ]);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('administration/rattrapage/index.html.twig', [
            'semestre' => $semestre,
            'table' => $table,
        ]);
    }

    #[Route(path: '/{semestre}/export.{_format}', name: 'administration_rattrapage_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function export(
        MySerializer $mySerializer,
        TypeMatiereManager $typeMatiereManager, MyExport $myExport, RattrapageRepository $rattrapageRepository, Semestre $semestre, string $_format): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $semestre);
        $rattrapages = $rattrapageRepository->findBySemestre($semestre, $semestre->getAnneeUniversitaire());
        $matieres = $typeMatiereManager->findBySemestreArray($semestre);
        $tab = [];
        foreach ($rattrapages as $rattrapage) {
            if (array_key_exists($rattrapage->getTypeIdMatiere(),
                    $matieres)) {
                $rattrapage->setLibelleMatiere($matieres[$rattrapage->getTypeIdMatiere()]->display);
                $tab[] = $rattrapage;
            }
        }

        $data = $mySerializer->getDataFromSerialization(
            $tab,
            [
                'etudiant' => ['nom', 'prenom'],
                'dateEval',
                'heureEval',
                'duree',
                'libelleMatiere',
                'personnel' => ['nom', 'prenom'],
                'dateRattrapage',
                'heureRattrapage',
                'salle',
                'etatDemandeLong',
            ],
            ['rattrapage_administration', 'utilisateur', 'matiere'],
            ['dateEval' => MySerializer::ONLY_DATE,
                'heureEval' => MySerializer::ONLY_TIME,
                'dateRattrapage' => MySerializer::ONLY_DATE,
                'heureRattrapage' => MySerializer::ONLY_TIME, ]
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'rattrapages_'.$semestre->getLibelle(),
        );
    }

    #[Route(path: '/change-etat/{uuid}/{etat}', name: 'administration_rattrapage_change_etat', options: ['expose' => true], methods: 'GET')]
    public function accepte(EventDispatcherInterface $eventDispatcher, #[MapEntity(mapping: ['uuid' => 'uuid'])]
    Rattrapage                                       $rattrapage, string $etat): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $rattrapage->getEtudiant()?->getSemestre());
        if (Rattrapage::DEMANDE_ACCEPTEE === $etat || Rattrapage::DEMANDE_REFUSEE === $etat) {
            $rattrapage->setEtatDemande($etat);
            $this->entityManager->flush();

            $event = new RattrapageEvent($rattrapage);
            $eventDispatcher->dispatch($event, RattrapageEvent::DECISION);

            return new Response('', Response::HTTP_OK);
        }

        return new Response('', Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/supprimer-annee/{semestre}', name: 'administration_rattrapage_delete_all', methods: 'DELETE')]
    public function deleteAllAnnee(RattrapageRepository $rattrapageRepository, Semestre $semestre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $semestre);
        $rattrapages = $rattrapageRepository->findByAnnee($semestre->getAnnee());
        foreach ($rattrapages as $rattrapage) {
            $this->entityManager->remove($rattrapage);
        }
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'rattrapage_all.delete.success.flash');

        return $this->json([
            'redirect' => true,
            'url' => $this->generateUrl('administration_rattrapage_semestre_index',
                ['semestre' => $semestre->getId()]),
        ]);
    }

    #[Route(path: '/{uuid}', name: 'administration_rattrapage_delete', options: ['expose' => true], methods: 'DELETE')]
    public function delete(Request $request, #[MapEntity(mapping: ['uuid' => 'uuid'])]
    Rattrapage                     $rattrapage): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $rattrapage->getEtudiant()?->getSemestre());
        $id = $rattrapage->getUuidString();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($rattrapage);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'rattrapage.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'rattrapage.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
