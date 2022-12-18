<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/mcc/administration/MccController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/12/2022 12:43
 */

namespace App\Controller\mcc\administration;

use App\Classes\Matieres\TypeMatiereManager;
use App\Controller\BaseController;
use App\Entity\Mcc;
use App\Entity\Semestre;
use App\Exception\MatiereNotFoundException;
use App\Form\MccType;
use App\Repository\MccRepository;
use App\Repository\MccTypeEpreuveRepository;
use App\Table\MccTableType;
use App\Utils\JsonRequest;
use App\Utils\Tools;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('administration/mcc', name: 'administration_mcc_')]
class MccController extends BaseController
{
    #[Route('/semestre/{semestre}', name: 'index')]
    public function index(
        TypeMatiereManager $typeMatiereManager,
        MccRepository $mccRepository,
        Request $request,
        Semestre $semestre
    ): Response {
        $matieres = $typeMatiereManager->findBySemestre($semestre);

        $table = $this->createTable(MccTableType::class, [
            'semestre' => $semestre,
            'anneeUniversitaire' => $this->getAnneeUniversitaire(),
            'mccs' => $mccRepository->findBySemestreTable($matieres, $this->getAnneeUniversitaire()),
        ]);

        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('mcc/administration/index.html.twig', [
            'semestre' => $semestre,
            'table' => $table,
        ]);
    }

    #[Route('/details/{semestre}/{typeIdMatiere}', name: 'show_matiere')]
    public function showMatiere(TypeMatiereManager $typeMatiereManager, Semestre $semestre, string $typeIdMatiere): Response
    {
        $matiere = $typeMatiereManager->getMatiereFromSelect($typeIdMatiere);

        return $this->render('mcc/administration/showMatiere.html.twig', [
            'semestre' => $semestre,
            'matiere' => $matiere,
        ]);
    }

    #[Route('/synthese/{semestre}/{typeIdMatiere}', name: 'synthese')]
    public function synthese(
        MccRepository $mccRepository,
        TypeMatiereManager $typeMatiereManager, Semestre $semestre, string $typeIdMatiere): Response
    {
        $matiere = $typeMatiereManager->getMatiereFromSelect($typeIdMatiere);
        if (null === $matiere) {
            throw new MatiereNotFoundException();
        }

        $mcc = new Mcc();
        $form = $this->createForm(MccType::class, $mcc);

        $mccs = $mccRepository->findByMatiereAndAnneeUniversitaire($matiere, $this->getAnneeUniversitaire());

        return $this->render('mcc/administration/_synthese.html.twig', [
            'semestre' => $semestre,
            'matiere' => $matiere,
            'mccs' => $mccs,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/addMcc/{semestre}/{typeIdMatiere}', name: 'add', methods: ['POST'])]
    public function addMcc(
        Request $request,
        MccTypeEpreuveRepository $mccTypeEpreuveRepository,
        TypeMatiereManager $typeMatiereManager, Semestre $semestre, string $typeIdMatiere): Response
    {
        $matiere = $typeMatiereManager->getMatiereFromSelect($typeIdMatiere);
        $typeEpreuve = $mccTypeEpreuveRepository->find(JsonRequest::getValueFromRequest($request, 'typeEpreuve'));
        $coefficient = Tools::convertToFloat(JsonRequest::getValueFromRequest($request, 'coefficient'));

        $mcc = new Mcc();
        $mcc->setCoefficient($coefficient);
        $mcc->setTypeEpreuve($typeEpreuve);
        $mcc->setAnneeUniversitaire($this->getAnneeUniversitaire());
        $mcc->setTypeIdMatiere($matiere);

        $this->entityManager->persist($mcc);
        $this->entityManager->flush();

        return $this->json(true);
    }

    #[Route('/duplicate', name: 'duplicate', methods: ['POST'])]
    public function duplicate(
        Request $request,
        MccRepository $mccRepository
    ): Response {
        $mcc = $mccRepository->find($request->query->get('id'));
        if ($mcc) {
            $newMcc = clone $mcc;
            $this->entityManager->persist($newMcc);
            $this->entityManager->flush();

            return $this->json(true);
        }
    }

    #[Route('/supprimer', name: 'suppr', methods: ['DELETE'])]
    public function delete(
        Request $request,
        MccRepository $mccRepository
    ): Response {
        $mcc = $mccRepository->find($request->query->get('id'));
        if (null !== $mcc) {
            $this->entityManager->remove($mcc);
            $this->entityManager->flush();
        }

        return $this->json(true);
    }
}
