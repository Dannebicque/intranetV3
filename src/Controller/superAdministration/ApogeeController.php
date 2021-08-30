<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/ApogeeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 30/08/2021 19:19
 */

namespace App\Controller\superAdministration;

use App\Classes\Apogee\ApogeeEtudiant;
use App\Classes\Apogee\ApogeeMaquette;
use App\Classes\Etudiant\EtudiantImport;
use App\Classes\Structure\ApogeeImport;
use App\Controller\BaseController;
use App\Entity\Annee;
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

/**
 * @Route("/administratif/apogee")
 */
class ApogeeController extends BaseController
{
    private array $etudiants;

    /**
     * @Route("/", methods={"GET"}, name="sa_apogee_index")
     * @IsGranted("ROLE_SUPER_ADMIN")
     */
    public function index(
        SemestreRepository $semestreRepository,
        AnneeUniversitaireRepository $anneeUniversitaireRepository
    ): Response {
        return $this->render('super-administration/apogee/index.html.twig', [
            'semestres' => $semestreRepository->findAll(),
            'anneeUniversitaires' => $anneeUniversitaireRepository->findAll(),
        ]);
    }

    /**
     * @Route("/import/diplome/{type}", methods={"POST"}, name="sa_apogee_maj")
     * @IsGranted("ROLE_SUPER_ADMIN")
     *
     *
     * @throws Exception
     */
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

            return $this->render('super-administration/apogee/confirmation.html.twig', [
                'etudiants' => $this->etudiants,
            ]);
        }
        $this->addFlashBag('error', 'import.etudiant.apogee.erreur.diplome');

        return $this->redirectToRoute('sa_apogee_index');
    }

    /**
     * @Route("/import/etudiant", methods={"POST"}, name="sa_apogee_import_etudiant")
     * @IsGranted("ROLE_SUPER_ADMIN")
     *
     * @throws Exception
     */
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
            $numEtu = (int)trim($numEtu);
            if (is_int($numEtu)) {
                $stid = $apogeeEtudiant->getEtudiant($numEtu, $semestre->getAnnee());
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
        }
        $this->entityManager->flush();
        $this->addFlashBag('success', 'import.etudiant.apogee.ok');

        return $this->render('super-administration/apogee/confirmation.html.twig', [
            'etudiants' => $this->etudiants,
        ]);
    }

    /**
     * @Route("/import/structure/{annee}", methods={"POST"}, name="sa_annee_synchronise_apogee")
     * @IsGranted("ROLE_SUPER_ADMIN")
     *
     * @throws Exception
     */
    public function synchronisationApogeeAnnee(
        ApogeeMaquette $apogeeMaquette,
        ApogeeImport $apogeeImport,
        Annee $annee
    ): Response {
        //suppr les données déjà présentes ?

        $apoSemestres = $apogeeMaquette->getSemestresAnnee($annee);
        $apogeeImport->createSemestre($apoSemestres);

        foreach ($annee->getSemestres() as $semestre) {
            $apoUes = $apogeeMaquette->getUesSemestre($semestre);
            $apogeeImport->createUes($apoUes);

            foreach ($semestre->getUes() as $ue) {
                $apoMatieres = $apogeeMaquette->getMatieresUe($ue);
                $apogeeImport->createMatiere($apoMatieres);
            }
        }

        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'synchro.maquette.apogee.ok');

        return $this->render('super-administration/apogee/confirmation.html.twig', [
            'etudiants' => $this->etudiants,
        ]);
    }
}
