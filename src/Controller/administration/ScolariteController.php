<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/ScolariteController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Etudiant;
use App\Entity\Scolarite;
use App\Entity\ScolariteMoyenneUe;
use App\Entity\Semestre;
use App\Entity\Ue;
use App\Form\ScolariteType;
use App\Repository\ScolariteMoyenneUeRepository;
use Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ScolariteController
 * @package App\Controller\administration
 * @Route("/administration/scolarite")
 */
class ScolariteController extends BaseController
{
    /**
     * @Route("/edit/{slug}", name="administration_scolarite_etudiant_edit")
     *
     * @param ScolariteMoyenneUeRepository $scolariteMoyenneUeRepository
     * @param Request                      $request
     * @param Etudiant                     $etudiant
     *
     * @return Response
     * @throws Exception
     * @ParamConverter("etudiant", options={"mapping": {"slug": "slug"}})
     */
    public function editScolariteEtudiant(
        ScolariteMoyenneUeRepository $scolariteMoyenneUeRepository,
        Request $request,
        Etudiant $etudiant
    ): Response {
        $scolarite = new Scolarite();
        $scolarite->setEtudiant($etudiant);

        $form = $this->createForm(ScolariteType::class, $scolarite,
            ['departement' => $this->dataUserSession->getDepartement()]);

        $form->handleRequest($request);
        if ($form->isSubmitted()) {
            $this->entityManager->persist($scolarite);

            /** @var UE $ue */
            foreach ($scolarite->getSemestre()->getUes() as $ue) {
                $pue = new ScolariteMoyenneUe();
                $pue->setScolarite($scolarite);
                $pue->setMoyenne($request->request->get('ue_' . $ue->getId()));
                $pue->setUe($ue);
                $this->entityManager->persist($pue);
            }
            $this->entityManager->flush();
            $this->addFlashBag('success', 'adm.scolarite.add.flashbag');
        }
        $scolariteUes = $scolariteMoyenneUeRepository->findByEtudiantArray($etudiant);

        return $this->render('administration/scolarite/edit.html.twig', [
            'etudiant'     => $etudiant,
            'scolarite'    => $etudiant->getScolarites(),
            'scolariteUes' => $scolariteUes,
            'form'         => $form->createView()
        ]);
    }

    /**
     * @param Semestre $semestre
     *
     * @return JsonResponse
     * @Route("/ajax/ues/{semestre}", name="administration_scolarite_ues_semestre", options={"expose"=true})
     */
    public function uesSemestre(Semestre $semestre): JsonResponse
    {

        $ues = $semestre->getUes();

        $t = [];
        /** @var Ue $ue */
        foreach ($ues as $ue) {
            $t[$ue->getId()] = $ue->getNumeroUe();
        }

        return $this->json($t, Response::HTTP_OK);
    }
}
