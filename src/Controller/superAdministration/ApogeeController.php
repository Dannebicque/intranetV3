<?php
/**
 * Copyright (C) 8 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/superAdministration/ApogeeController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 19/08/2019 09:13
 * @lastUpdate 19/08/2019 09:12
 */

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Etudiant;
use App\MesClasses\Tools;
use App\Repository\DiplomeRepository;
use App\Repository\EtudiantRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/super-administration/apogee")
 */
class ApogeeController extends BaseController
{
    /**
     * @Route("/", methods={"GET"}, name="sa_apogee_index")
     * @IsGranted("ROLE_SUPER_ADMIN")
     *
     * @return Response
     */
    public function index(DiplomeRepository $diplomeRepository)
    {
        return $this->render('super-administration/apogee/index.html.twig', [
            'diplomes' => $diplomeRepository->findAll()
        ]);
    }

    /**
     * @Route("/import/diplome/{type}", methods={"POST"}, name="sa_apogee_maj")
     * @IsGranted("ROLE_SUPER_ADMIN")
     *
     * @param Request            $request
     * @param DiplomeRepository  $diplomeRepository
     *
     * @param EtudiantRepository $etudiantRepository
     * @param                    $type
     *
     * @return Response
     * @throws \Exception
     */
    public function importMaj(
        Request $request,
        DiplomeRepository $diplomeRepository,
        EtudiantRepository $etudiantRepository,
        $type
    ): Response {
        $diplome = $diplomeRepository->find($request->request->get('diplomeforce'));
        if ($diplome) {
            $etudiants = [];
            //requete pour récupérer les étudiants de la promo.
            //pour chaque étudiant, s'il existe, on update, sinon on ajoute (et si type=force).
            $conn = oci_connect($_ENV['APOGEE_LOGIN'], $_ENV['APOGEE_PASSWORD'], $_ENV['APOGEE_STRING']);
            if (!$conn) {
                $e = oci_error();
                trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
            }

            $stid = oci_parse($conn,
                'SELECT * FROM INS_ADM_ETP INNER JOIN INDIVIDU ON INDIVIDU.COD_IND = INS_ADM_ETP.COD_IND INNER JOIN ADRESSE ON ADRESSE.COD_IND = INS_ADM_ETP.COD_IND WHERE COD_ETP=\'' . $diplome->getCodeApogee() . '\'');
            oci_execute($stid);

            while ($row = oci_fetch_array($stid, OCI_ASSOC + OCI_RETURN_NULLS)) {
                $dataApogee = $this->transformeApogeeToArray($row);
                $etudiant = $etudiantRepository->findOneBy(['numEtudiant' => $dataApogee['setNumEtudiant']]);
                if ($etudiant && $type === 'force') {
                    //todo: une classe ?
                    //on met à jour
                    $etudiant->updateFromApogee($dataApogee);
                    $this->entityManager->flush();
                    $etudiants[$dataApogee['setNumEtudiant']]['etat'] = 'maj';
                    $etudiants[$dataApogee['setNumEtudiant']]['data'] = $etudiant;
                } else {
                    //n'existe pas on ajoute.
                    $etudiant = new Etudiant();
                    $etudiant->updateFromApogee($dataApogee);
                    $this->entityManager->persist($etudiant);
                    $this->entityManager->flush();
                    $etudiants[$dataApogee['setNumEtudiant']]['etat'] = 'add';
                    $etudiants[$dataApogee['setNumEtudiant']]['data'] = $etudiant;
                }
            }
            $this->addFlashBag('success', 'import.etudiant.apogee.ok');

            return $this->render('super-administration/apogee/confirmation.html.twig', [
                'etudiants' => $etudiants
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
     * @return Response
     * @throws \Exception
     */
    public function importEtudiant(Request $request, EtudiantRepository $etudiantRepository): Response
    {
        $listeetudiants = explode(';', $request->request->get('listeetudiants'));
        $etudiants = [];
        foreach ($listeetudiants as $etudiant) {
            //            $conn = oci_connect($_ENV['APOGEE_LOGIN'], $_ENV['APOGEE_PASSWORD'], $_ENV['APOGEE_STRING']);
//        if (!$conn) {
//            $e = oci_error();
//            trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
//        }
// todo: a définir
//        $stid = oci_parse($conn, 'SELECT * FROM INS_ADM_ETP WHERE COD_ETP=\'5PSP13\'');
//        oci_execute($stid);
//
//        while (row = oci_fetch_array($stid, OCI_ASSOC + OCI_RETURN_NULLS)) {
            //requete pour récupérer les datas de l'étudiant et ajouter à la BDD.
            $dataApogee = $this->transformeApogeeToArray($row);
            //Stocker réponse dans un tableau pour page confirmation
            $etudiant = $etudiantRepository->findOneBy(['numEtudiant' => $numEtudiant]);
            if ($etudiant) {
                $etudiants[$numEtudiant]['etat'] = 'deja';
                $etudiants[$numEtudiant]['data'] = $etudiant;
            } else {
                //n'existe pas on ajoute.
                $etudiant = new Etudiant();
                $etudiant->updateFromApogee($dataApogee);
                $this->entityManager->persist($etudiant);
                $this->entityManager->flush();
                $etudiants[$numEtudiant]['etat'] = 'add';
                $etudiants[$numEtudiant]['data'] = $etudiant;
            }
            //}
        }
        $this->addFlashBag('success', 'import.etudiant.apogee.ok');

        return $this->render('super-administration/apogee/confirmation.html.twig', [
            'etudiants' => $etudiants
        ]);
    }

    private function transformeApogeeToArray($data)
    {
        return [
            'setNumEtudiant'   => $data['COD_ETU'],
            'setNumIne'        => $data['COD_NNE_IND'],
            'setDateNaissance' => Tools::convertDateToObject($data['DATE_NAI_IND']), //en fr?
            'setPromotion'     => $data['DAA_ENT_ETB'],
            'setNom'           => $data['LIB_NOM_PAT_IND'],
            'setPrenom'        => $data['LIB_PR1_IND'],
            'setCivilite'      => $data['COD_SEX_ETU'] === 'M' ? 'M.' : 'Mme', //M ou F
            'setTypeUser'      => 'etudiant',
        ];
    }

    /**
     * @Route("/test", methods={"GET"}, name="sa_apogee_test")
     * @IsGranted("ROLE_SUPER_ADMIN")
     *
     * @return Response
     * @throws \Exception
     */
    public function test(): Response
    {
        // Connexion au service XE (i.e. la base de données) sur la machine "localhost"
        $conn = oci_connect($_ENV['APOGEE_LOGIN'], $_ENV['APOGEE_PASSWORD'], $_ENV['APOGEE_STRING']);
        if (!$conn) {
            $e = oci_error();
            trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
        }

        //$stid = oci_parse($conn, 'SELECT table_name, num_rows FROM ALL_TABLES');
        $stid = oci_parse($conn,
            'SELECT * FROM INS_ADM_ETP INNER JOIN INDIVIDU ON INDIVIDU.COD_IND = INS_ADM_ETP.COD_IND INNER JOIN ADRESSE ON ADRESSE.COD_IND = INS_ADM_ETP.COD_IND WHERE COD_ETP=\'5PSP13\'');
        oci_execute($stid);

        echo "<table border='1'>\n";
        while ($row = oci_fetch_array($stid, OCI_ASSOC + OCI_RETURN_NULLS)) {
            echo "<tr>\n";
            foreach ($row as $key => $item) {
                echo "<td>" . $key . " = " . ($item !== null ? htmlentities($item, ENT_QUOTES) : "") . "</td>\n";
            }
            echo "</tr>\n";
        }
        echo "</table>\n";

//        $stid2 = oci_parse($conn, 'SELECT view_name FROM ALL_VIEWS');
//        oci_execute($stid2);
//
//        echo "<table border='1'>\n";
//        while ($row = oci_fetch_array($stid2, OCI_ASSOC + OCI_RETURN_NULLS)) {
//            echo "<tr>\n";
//            foreach ($row as $item) {
//                echo "    <td>" . ($item !== null ? htmlentities($item, ENT_QUOTES) : "") . "</td>\n";
//            }
//            echo "</tr>\n";
//        }
//        echo "</table>\n";

        return $this->render('super-administration/apogee/test.html.twig', [

        ]);
        //SELECT COD_IND FROM INS_ADM_ETP WHERE COD_ETP='5PSP13'
    }
}
