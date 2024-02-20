<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/ApogeeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\administration;

use App\Classes\Apogee\ApogeeEtudiant;
use App\Classes\Etudiant\EtudiantImport;
use App\Controller\BaseController;
use App\Exception\SemestreNotFoundException;
use App\Repository\AnneeUniversitaireRepository;
use App\Repository\BacRepository;
use App\Repository\EtudiantRepository;
use App\Repository\SemestreRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/administration/etudiants/apogee')]
class ApogeeController extends BaseController
{
    private array $etudiants;

    /**
     * @throws \Exception
     */
    #[Route('/import/diplome/{type}', name: 'administration_apogee_maj', methods: ['GET', 'POST'])]
    public function importMaj(
        ApogeeEtudiant $apogeeEtudiant,
        EtudiantImport $etudiantImport,
        Request $request,
        SemestreRepository $semestreRepository,
        EtudiantRepository $etudiantRepository,
        AnneeUniversitaireRepository $anneeUniversitaireRepository,
        BacRepository $bacRepository,
        $type
    ): Response {
        $semestre = $semestreRepository->find($request->request->get('semestreforce'));
        $anneeUniversitaire = $anneeUniversitaireRepository->find($request->request->get('anneeuniversitaire'));
        if ($semestre && $anneeUniversitaire) {
            $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $semestre);

            $this->etudiants = [];
            // requete pour récupérer les étudiants de la promo.
            // pour chaque étudiant, s'il existe, on update, sinon on ajoute (et si type=force).
            $stid = $apogeeEtudiant->getEtudiantsAnnee($semestre->getAnnee());
            while ($row = $stid->fetch()) {
                $dataApogee = $apogeeEtudiant->transformeApogeeToArray($row, $bacRepository->getApogeeArray());
                $numEtudiant = $dataApogee['etudiant']['setNumEtudiant'];
                $etudiant = $etudiantRepository->findOneBy(['numEtudiant' => $numEtudiant]);
                if (null === $etudiant) {
                    // l'étudiant n'existe pas, quelque soit la situation, on va l'ajouter
                    $etudiant = $etudiantImport->createEtudiant($semestre, $dataApogee);
                    $this->etudiants[$numEtudiant]['etat'] = 'force';
                    $this->etudiants[$numEtudiant]['data'] = $etudiant;
                } elseif ('force' === $type) {
                    // l'étudiant existe, et on force la mise à jour
                    $etudiant = $etudiantImport->updateEtudiant($etudiant, $semestre, $dataApogee);
                    $this->etudiants[$numEtudiant]['etat'] = 'maj';
                    $this->etudiants[$numEtudiant]['data'] = $etudiant;
                }
                $this->entityManager->flush();
            }

            $this->addFlashBag('success', 'import.etudiant.apogee.ok');

            return $this->render('administration/apogee/confirmation.html.twig', [
                'etudiants' => $this->etudiants,
            ]);
        }
        $this->addFlashBag('error', 'import.etudiant.apogee.erreur.diplome');

        return $this->redirectToRoute('administration_etudiant_add');
    }

    /**
     * @throws \App\Exception\SemestreNotFoundException
     */
    #[Route('/import/etudiant', name: 'administration_apogee_un_etudiant', methods: ['GET', 'POST'])]
    public function importEtudiant(
        EtudiantImport $etudiantImport,
        ApogeeEtudiant $apogeeEtudiant,
        Request $request,
        EtudiantRepository $etudiantRepository,
        SemestreRepository $semestreRepository,
        BacRepository $bacRepository
    ): Response {
        $listeetudiants = explode(';', trim($request->request->get('listeetudiants')));
        $semestre = $semestreRepository->find($request->request->get('semestreforce'));

        if (null === $semestre) {
            throw new SemestreNotFoundException();
        }

        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $semestre);

        $this->etudiants = [];
        foreach ($listeetudiants as $numEtu) {
            $numEtu = (int) trim($numEtu);
            if (0 !== $numEtu) {
                $stid = $apogeeEtudiant->getEtudiant($numEtu, $semestre->getAnnee());
                while ($row = $stid->fetch()) {
                    // requete pour récupérer les datas de l'étudiant et ajouter à la BDD.
                    $dataApogee = $apogeeEtudiant->transformeApogeeToArray($row, $bacRepository->getApogeeArray());
                    $numEtudiant = $dataApogee['etudiant']['setNumEtudiant'];

                    // Stocker réponse dans un tableau pour page confirmation
                    $etudiant = $etudiantRepository->findOneBy(['numEtudiant' => $numEtudiant]);
                    if ($etudiant) {
                        $this->etudiants[$numEtudiant]['etat'] = 'deja';
                    } else {
                        // n'existe pas on ajoute.
                        $etudiant = $etudiantImport->createEtudiant($semestre, $dataApogee);
                        $this->etudiants[$numEtudiant]['etat'] = 'add';
                        $this->entityManager->flush();
                    }
                    $this->etudiants[$numEtudiant]['data'] = $etudiant;
                }
            }
        }

        $this->addFlashBag('success', 'import.etudiant.apogee.ok');

        return $this->render('administration/apogee/confirmation.html.twig', [
            'etudiants' => $this->etudiants,
        ]);
    }
}
