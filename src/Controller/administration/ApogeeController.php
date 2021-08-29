<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/ApogeeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/08/2021 17:00
 */

namespace App\Controller\administration;

use App\Classes\Apogee\ApogeeEtudiant;
use App\Classes\Apogee\ApogeeMaquette;
use App\Classes\Etudiant\EtudiantImport;
use App\Classes\MyStructure;
use App\Classes\Structure\ApogeeImport;
use App\Controller\BaseController;
use App\Entity\Annee;
use App\Entity\Configuration;
use App\Entity\Constantes;
use App\Repository\AnneeUniversitaireRepository;
use App\Repository\BacRepository;
use App\Repository\EtudiantRepository;
use App\Repository\SemestreRepository;
use Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


#[Route("/administration/etudiants/apogee")]
class ApogeeController extends BaseController
{
    private array $etudiants;


    #[Route("/import/diplome/{type}", name: "administration_apogee_maj", methods: ["POST"])]
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
            $this->etudiants = [];
            //requete pour récupérer les étudiants de la promo.
            //pour chaque étudiant, s'il existe, on update, sinon on ajoute (et si type=force).
            $stid = $apogeeEtudiant->getEtudiantsAnnee($semestre->getAnnee());
            while ($row = $stid->fetch()) {
                if ((int)$row['DAA_ETB'] === $semestre->getAnneeUniversitaire()->getAnnee()) {
                    //if ((int)Tools::convertDateToObject($row['DAT_MOD_IND'])->format('Y') === $semestre->getAnneeUniversitaire()->getAnnee()) {
                    $dataApogee = $apogeeEtudiant->transformeApogeeToArray($row, $bacRepository->getApogeeArray());
                    $numEtudiant = $dataApogee['etudiant']['setNumEtudiant'];
                    $etudiant = $etudiantRepository->findOneBy(['numEtudiant' => $numEtudiant]);
                    if (null === $etudiant) {
                        //l'étudiant n'existe pas, quelque soit la situation, on va l'ajouter
                        $etudiant = $etudiantImport->createEtudiant($semestre, $dataApogee);
                        $this->etudiants[$numEtudiant]['etat'] = 'force';
                        $this->etudiants[$numEtudiant]['data'] = $etudiant;
                    } elseif ($etudiant && 'force' === $type) {
                        //l'étudiant existe, et on force la mise à jour
                        $etudiant = $etudiantImport->updateEtudiant($etudiant, $semestre, $dataApogee);
                        $this->etudiants[$numEtudiant]['etat'] = 'maj';
                        $this->etudiants[$numEtudiant]['data'] = $etudiant;
                    }
                    $this->entityManager->flush();
                }
            }

            $this->addFlashBag('success', 'import.etudiant.apogee.ok');

            return $this->render('administration/apogee/confirmation.html.twig', [
                'etudiants' => $this->etudiants,
            ]);
        }
        $this->addFlashBag('error', 'import.etudiant.apogee.erreur.diplome');

        return $this->redirectToRoute('administration_etudiant_add');
    }

    #[Route("/import/etudiant", name: "administration_apogee_un_etudiant", methods: ['POST'])]
    public function importEtudiant(
        EtudiantImport $etudiantImport,
        ApogeeEtudiant $apogeeEtudiant,
        Request $request,
        EtudiantRepository $etudiantRepository,
        SemestreRepository $semestreRepository,
        BacRepository $bacRepository
    ): Response {
        $listeetudiants = explode(';', $request->request->get('listeetudiants'));
        $semestre = $semestreRepository->find($request->request->get('semestreforce'));

        $this->etudiants = [];
        foreach ($listeetudiants as $numEtu) {
            $stid = $apogeeEtudiant->getEtudiant($numEtu);
            while ($row = $stid->fetch()) {
                //requete pour récupérer les datas de l'étudiant et ajouter à la BDD.
                $dataApogee = $apogeeEtudiant->transformeApogeeToArray($row, $bacRepository->getApogeeArray());
                $numEtudiant = $dataApogee['etudiant']['setNumEtudiant'];

                //Stocker réponse dans un tableau pour page confirmation
                $etudiant = $etudiantRepository->findOneBy(['numEtudiant' => $numEtudiant]);
                if ($etudiant) {
                    $this->etudiants[$numEtudiant]['etat'] = 'deja';
                } else {
                    //n'existe pas on ajoute.
                    $etudiant = $etudiantImport->createEtudiant($semestre, $dataApogee);
                    $this->etudiants[$numEtudiant]['etat'] = 'add';
                }
                $this->etudiants[$numEtudiant]['data'] = $etudiant;
            }
        }
        $this->entityManager->flush();
        $this->addFlashBag('success', 'import.etudiant.apogee.ok');

        return $this->render('administration/apogee/confirmation.html.twig', [
            'etudiants' => $this->etudiants,
        ]);
    }
}
