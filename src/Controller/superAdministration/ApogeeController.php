<?php

// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/ApogeeController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 20/08/2020 12:11

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Adresse;
use App\Entity\Etudiant;
use App\Classes\Apogee\MyApogee;
use App\Classes\LDAP\MyLdap;
use App\Classes\Tools;
use App\Repository\AnneeRepository;
use App\Repository\BacRepository;
use App\Repository\DiplomeRepository;
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
     * @param AnneeRepository $anneeRepository
     *
     * @return Response
     */
    public function index(AnneeRepository $anneeRepository): Response
    {
        return $this->render('super-administration/apogee/index.html.twig', [
            'annees' => $anneeRepository->findAll()
        ]);
    }

    /**
     * @Route("/import/diplome/{type}", methods={"POST"}, name="sa_apogee_maj")
     * @IsGranted("ROLE_SUPER_ADMIN")
     *
     * @param MyApogee           $myApogee
     * @param MyLdap             $myLdap
     * @param Request            $request
     * @param AnneeRepository    $anneeRepository
     * @param EtudiantRepository $etudiantRepository
     * @param BacRepository      $bacRepository
     * @param                    $type
     *
     * @return Response
     * @throws Exception
     */
    public function importMaj(
        MyApogee $myApogee,
        MyLdap $myLdap,
        Request $request,
        AnneeRepository $anneeRepository,
        EtudiantRepository $etudiantRepository,
        BacRepository $bacRepository,
        $type
    ): Response {
        $annee = $anneeRepository->find($request->request->get('anneeforce'));
        if ($annee) {
            $this->etudiants = [];
            //requete pour récupérer les étudiants de la promo.
            //pour chaque étudiant, s'il existe, on update, sinon on ajoute (et si type=force).
            $stid = $myApogee->getEtudiantsAnnee($annee);
            while ($row = $stid->fetch()) {
                if ((int)Tools::convertDateToObject($row['DAT_MOD_IND'])->format('Y') === $annee->getAnneeUniversitaire()) {
                    $dataApogee = $myApogee->transformeApogeeToArray($row, $bacRepository->getApogeeArray());

                    $numEtudiant = $dataApogee['etudiant']['setNumEtudiant'];
                    $etuLdap = $myLdap->getInfoEtudiant($numEtudiant);
                    $etudiant = $etudiantRepository->findOneBy(['numEtudiant' => $numEtudiant]);
                    if ($etudiant && $type === 'force') {
                        //todo: une classe ?
                        //on met à jour
                        $etudiant->updateFromApogee($dataApogee['etudiant']);
                        if (count($etuLdap) === 2) {
                            $etudiant->updateFromLdap($etuLdap);
                        }
                        $etudiant->getAdresse()->updateFromApogee($dataApogee['adresse']);
                        $this->etudiants[$numEtudiant]['etat'] = 'maj';
                        $this->etudiants[$numEtudiant]['data'] = $etudiant;
                    } else {
                        //n'existe pas on ajoute.
                        $etudiant = new Etudiant();
                        $etudiant->updateFromApogee($dataApogee['etudiant']);
                        if (count($etuLdap) === 2) {
                            $etudiant->updateFromLdap($etuLdap);
                        }
                        $this->saveAdresse($dataApogee, $etudiant);
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
     * @param Request            $request
     *
     * @param EtudiantRepository $etudiantRepository
     *
     * @param BacRepository      $bacRepository
     *
     * @return Response
     * @throws Exception
     */
    public function importEtudiant(
        Request $request,
        EtudiantRepository $etudiantRepository,
        BacRepository $bacRepository
    ): Response {
        $listeetudiants = explode(';', $request->request->get('listeetudiants'));
        $this->etudiants = [];
        foreach ($listeetudiants as $etudiant) {
            $stid = MyApogee::getEtudiant($etudiant);

            while ($row = $stid->fetch()) {
                //requete pour récupérer les datas de l'étudiant et ajouter à la BDD.
                $dataApogee = MyApogee::transformeApogeeToArray($row, $bacRepository->getApogeeArray());
                $numEtudiant = $dataApogee['etudiant']['setNumEtudiant'];

                //Stocker réponse dans un tableau pour page confirmation
                $etudiant = $etudiantRepository->findOneBy(['numEtudiant' => $numEtudiant]);
                if ($etudiant) {
                    $this->etudiants[$numEtudiant]['etat'] = 'deja';
                    $this->etudiants[$numEtudiant]['data'] = $etudiant;
                } else {
                    //n'existe pas on ajoute.
                    $etudiant = new Etudiant();
                    $etudiant->updateFromApogee($dataApogee['etudiant']);
                    $this->saveAdresse($dataApogee, $etudiant);
                }
            }
        }
        $this->entityManager->flush();
        $this->addFlashBag('success', 'import.etudiant.apogee.ok');

        return $this->render('super-administration/apogee/confirmation.html.twig', [
            'etudiants' => $this->etudiants
        ]);
    }

    private function saveAdresse($dataApogee, Etudiant $etudiant): void
    {
        $adresse = new Adresse();
        $adresse->updateFromApogee($dataApogee['adresse']);
        $this->entityManager->persist($adresse);
        $etudiant->setAdresse($adresse);
        $this->entityManager->persist($etudiant);
        $this->etudiants[$etudiant->getNumEtudiant()]['etat'] = 'add';
        $this->etudiants[$etudiant->getNumEtudiant()]['data'] = $etudiant;
    }


}
