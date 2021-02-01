<?php

// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/ApogeeController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 01/02/2021 15:08

namespace App\Controller\superAdministration;

use App\Classes\Apogee\MyApogee;
use App\Classes\Etudiant\EtudiantImport;
use App\Classes\Tools;
use App\Controller\BaseController;
use App\Repository\AnneeUniversitaireRepository;
use App\Repository\BacRepository;
use App\Repository\EtudiantRepository;
use App\Repository\SemestreRepository;
use Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administratif/apogee")
 */
class ApogeeController extends BaseController
{
    /**
     * @var array
     */
    private $etudiants;

    /**
     * @Route("/", methods={"GET"}, name="sa_apogee_index")
     * @IsGranted("ROLE_SUPER_ADMIN")
     *
     * @param SemestreRepository           $semestreRepository
     *
     * @param AnneeUniversitaireRepository $anneeUniversitaireRepository
     *
     * @return Response
     */
    public function index(
        SemestreRepository $semestreRepository,
        AnneeUniversitaireRepository $anneeUniversitaireRepository
    ): Response {
        return $this->render('super-administration/apogee/index.html.twig', [
            'semestres'           => $semestreRepository->findAll(),
            'anneeUniversitaires' => $anneeUniversitaireRepository->findAll()
        ]);
    }

    /**
     * @Route("/import/diplome/{type}", methods={"POST"}, name="sa_apogee_maj")
     * @IsGranted("ROLE_SUPER_ADMIN")
     *
     * @param MyApogee                     $myApogee
     * @param EtudiantImport               $etudiantImport
     * @param Request                      $request
     * @param SemestreRepository           $semestreRepository
     * @param EtudiantRepository           $etudiantRepository
     * @param AnneeUniversitaireRepository $anneeUniversitaireRepository
     * @param BacRepository                $bacRepository
     * @param                              $type
     *
     * @return Response
     * @throws Exception
     */
    public function importMaj(
        MyApogee $myApogee,
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
            $stid = $myApogee->getEtudiantsAnnee($semestre->getAnnee());
            while ($row = $stid->fetch()) {
                if ((int)$row['DAA_ETB'] === $semestre->getAnneeUniversitaire()->getAnnee()) {
                    //if ((int)Tools::convertDateToObject($row['DAT_MOD_IND'])->format('Y') === $semestre->getAnneeUniversitaire()->getAnnee()) {
                    $dataApogee = $myApogee->transformeApogeeToArray($row, $bacRepository->getApogeeArray());
                    $numEtudiant = $dataApogee['etudiant']['setNumEtudiant'];
                    $etudiant = $etudiantRepository->findOneBy(['numEtudiant' => $numEtudiant]);
                    if ($etudiant === null) {
                        //l'étudiant n'existe pas, quelque soit la situation, on va l'ajouter
                        $etudiant = $etudiantImport->createEtudiant($semestre, $dataApogee);
                        $this->etudiants[$numEtudiant]['etat'] = 'force';
                        $this->etudiants[$numEtudiant]['data'] = $etudiant;
                    } elseif ($etudiant && $type === 'force') {
                        //l'étudiant existe, et on force la mise à jour
                        $etudiant = $etudiantImport->updateEtudiant($etudiant, $semestre, $dataApogee);
                        $this->etudiants[$numEtudiant]['etat'] = 'maj';
                        $this->etudiants[$numEtudiant]['data'] = $etudiant;
                    }
                    $this->entityManager->flush();
                }
            }

            $this->addFlashBag('success', 'import.etudiant.apogee.ok');

            return $this->render('super-administration/apogee/confirmation.html.twig', [
                'etudiants' => $this->etudiants
            ]);
        }
        $this->addFlashBag('error', 'import.etudiant.apogee.erreur.diplome');

        return $this->redirectToRoute('sa_apogee_index');
    }

    /**
     * @Route("/import/etudiant", methods={"POST"}, name="sa_apogee_import_etudiant")
     * @IsGranted("ROLE_SUPER_ADMIN")
     *
     * @param EtudiantImport     $etudiantImport
     * @param MyApogee           $myApogee
     * @param Request            $request
     *
     * @param EtudiantRepository $etudiantRepository
     *
     * @param SemestreRepository $semestreRepository
     * @param BacRepository      $bacRepository
     *
     * @return Response
     * @throws Exception
     */
    public function importEtudiant(
        EtudiantImport $etudiantImport,
        MyApogee $myApogee,
        Request $request,
        EtudiantRepository $etudiantRepository,
        SemestreRepository $semestreRepository,
        BacRepository $bacRepository
    ): Response {
        $listeetudiants = explode(';', $request->request->get('listeetudiants'));
        $semestre = $semestreRepository->find($request->request->get('semestreforce'));

        $this->etudiants = [];
        foreach ($listeetudiants as $numEtu) {
            $stid = $myApogee->getEtudiant($numEtu);
            while ($row = $stid->fetch()) {
                //requete pour récupérer les datas de l'étudiant et ajouter à la BDD.
                $dataApogee = $myApogee->transformeApogeeToArray($row, $bacRepository->getApogeeArray());
                $numEtudiant = $dataApogee['etudiant']['setNumEtudiant'];

                //Stocker réponse dans un tableau pour page confirmation
                $etudiant = $etudiantRepository->findOneBy(['numEtudiant' => $numEtudiant]);
                if ($etudiant) {
                    $this->etudiants[$numEtudiant]['etat'] = 'deja';
                    $this->etudiants[$numEtudiant]['data'] = $etudiant;
                } else {
                    //n'existe pas on ajoute.
                    $etudiant = $etudiantImport->createEtudiant($semestre, $dataApogee);
                    $this->etudiants[$numEtudiant]['etat'] = 'add';
                    $this->etudiants[$numEtudiant]['data'] = $etudiant;
                }
            }
        }
        $this->entityManager->flush();
        $this->addFlashBag('success', 'import.etudiant.apogee.ok');

        return $this->render('super-administration/apogee/confirmation.html.twig', [
            'etudiants' => $this->etudiants
        ]);
    }


}
