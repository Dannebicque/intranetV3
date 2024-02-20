<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/ApogeeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\superAdministration;

use App\Classes\Apogee\ApogeeEtudiant;
use App\Classes\Apogee\ApogeeMaquette;
use App\Classes\Etudiant\EtudiantImport;
use App\Classes\Structure\ApogeeImport;
use App\Controller\BaseController;
use App\Entity\Annee;
use App\Entity\Constantes;
use App\Entity\Ppn;
use App\Entity\Semestre;
use App\Entity\Ue;
use App\Repository\AnneeUniversitaireRepository;
use App\Repository\BacRepository;
use App\Repository\EtudiantRepository;
use App\Repository\SemestreRepository;
use Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route(path: '/administratif/apogee')]
class ApogeeController extends BaseController
{
    private array $etudiants;

    #[Route(path: '/', name: 'sa_apogee_index', methods: ['GET'])]
    #[\Symfony\Component\Security\Http\Attribute\IsGranted('ROLE_SUPER_ADMIN')]
    public function index(SemestreRepository $semestreRepository, AnneeUniversitaireRepository $anneeUniversitaireRepository): Response
    {
        return $this->render('super-administration/apogee/index.html.twig', [
            'semestres' => $semestreRepository->findAll(),
            'anneeUniversitaires' => $anneeUniversitaireRepository->findAll(),
        ]);
    }

    /**
     * @throws Exception
     */
    #[Route(path: '/import/diplome/{type}', name: 'sa_apogee_maj', methods: ['POST'])]
    #[\Symfony\Component\Security\Http\Attribute\IsGranted('ROLE_SUPER_ADMIN')]
    public function importMaj(ApogeeEtudiant $apogeeEtudiant, EtudiantImport $etudiantImport, Request $request, SemestreRepository $semestreRepository, EtudiantRepository $etudiantRepository, AnneeUniversitaireRepository $anneeUniversitaireRepository, BacRepository $bacRepository, string $type): Response
    {
        $semestre = $semestreRepository->find($request->request->get('semestreforce'));
        $anneeUniversitaire = $anneeUniversitaireRepository->find($request->request->get('anneeuniversitaire'));
        if ($semestre && $anneeUniversitaire) {
            $this->etudiants = [];
            // requete pour récupérer les étudiants de la promo.
            // pour chaque étudiant, s'il existe, on update, sinon on ajoute (et si type=force).
            $stid = $apogeeEtudiant->getEtudiantsAnnee($semestre->getAnnee());
            while ($row = $stid->fetch()) {
                if ((int) $row['DAA_ETB'] === $semestre->getAnneeUniversitaire()->getAnnee()) {
                    // if ((int)Tools::convertDateToObject($row['DAT_MOD_IND'])->format('Y') === $semestre->getAnneeUniversitaire()->getAnnee()) {
                    $dataApogee = $apogeeEtudiant->transformeApogeeToArray($row, $bacRepository->getApogeeArray());
                    $numEtudiant = $dataApogee['etudiant']['setNumEtudiant'];
                    $etudiant = $etudiantRepository->findOneBy(['numEtudiant' => $numEtudiant]);
                    if (null === $etudiant) {
                        // l'étudiant n'existe pas, quelque soit la situation, on va l'ajouter
                        $etudiant = $etudiantImport->createEtudiant($semestre, $dataApogee);
                        $this->etudiants[$numEtudiant]['etat'] = 'force';
                        $this->etudiants[$numEtudiant]['data'] = $etudiant;
                    } elseif ($etudiant && 'force' === $type) {
                        // l'étudiant existe, et on force la mise à jour
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
     * @throws Exception
     */
    #[Route(path: '/import/etudiant', name: 'sa_apogee_import_etudiant', methods: ['POST'])]
    #[\Symfony\Component\Security\Http\Attribute\IsGranted('ROLE_SUPER_ADMIN')]
    public function importEtudiant(EtudiantImport $etudiantImport, ApogeeEtudiant $apogeeEtudiant, Request $request, EtudiantRepository $etudiantRepository, SemestreRepository $semestreRepository, BacRepository $bacRepository): Response
    {
        $listeetudiants = explode(';', (string) $request->request->get('listeetudiants'));
        $semestre = $semestreRepository->find($request->request->get('semestreforce'));
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
     * @throws Exception
     */
    #[Route(path: '/import/structure/annee/{annee}', name: 'sa_annee_synchronise_apogee', methods: ['GET'])]
    #[\Symfony\Component\Security\Http\Attribute\IsGranted('ROLE_SUPER_ADMIN')]
    public function synchronisationApogeeAnnee(ApogeeMaquette $apogeeMaquette, ApogeeImport $apogeeImport, Annee $annee): Response
    {
        // création d'un PN
        $pn = new Ppn();
        $pn->setDiplome($annee->getDiplome());
        if (4 === $annee->getDiplome()->getTypeDiplome()) {
            $pn->setLibelle('PN B.U.T. '.$annee->getDiplome()->getSigle());
            $pn->setAnnee(2021);
        } else {
            $pn->setLibelle('PPN DUT '.$annee->getDiplome()->getSigle());
            $pn->setAnnee(2013);
        }
        $this->entityManager->persist($pn);
        $t = [];
        if (true === $annee->getDiplome()?->isApc()) {
            // BUT
            $elementsAnnee = $apogeeImport->getElementsFromAnnee($annee);
            while ($elpAnnee = $elementsAnnee->fetch()) {
                // echo $elpAnnee['COD_ELP'].'<br>';
                if ('SEM' === $elpAnnee['COD_NEL']) {
                    $semestre = $apogeeMaquette->createSemestre($elpAnnee, $annee, $pn);
                    $elementsSemestre = $apogeeImport->getElementsFromSemestre($elpAnnee['COD_ELP']);

                    while ($elpSemestre = $elementsSemestre->fetch()) {
                        // print_r($elpSemestre);echo '<br>';
                        echo $elpSemestre['LIC_ELP'].'<br>';
                        if (!array_key_exists($elpSemestre['COD_ELP'], $t)) {
                            // création
                            $data = $apogeeMaquette->createElement($elpSemestre, $semestre);
                            if (null !== $data) {
                                $t[$elpSemestre['COD_ELP']] = $data;
                            }
                        } else {
                            // mise à jour avec les heures
                            $t[$elpSemestre['COD_ELP']] = $apogeeMaquette->updateElement($t[$elpSemestre['COD_ELP']],
                                $elpSemestre);
                        }
                    }
                }
            }
            $this->entityManager->flush();
            $elementsAnnee = $apogeeImport->getElementsFromAnnee($annee);
            while ($elpAnnee = $elementsAnnee->fetch()) {
                if ('COMP' === $elpAnnee['COD_NEL']) {
                    $competence = $apogeeMaquette->createCompetence($elpAnnee, $annee);
                    $elementsUe = $apogeeImport->getCompUesFromSemestre($elpAnnee['COD_ELP']);
                    while ($elpUe = $elementsUe->fetch()) {
                        $apogeeMaquette->createUe($elpUe, $competence, $annee);
                        echo $elpUe['COD_ELP'];
                    }
                }
            }
        } else {
            // DUT
            $semestres = $apogeeImport->getElementsFromAnneeDut($annee);
            while ($semestre = $semestres->fetch()) {
                $objSemestre = $apogeeMaquette->createSemestreDut($semestre, $annee, $pn);
                $ues = $apogeeImport->getUesFromSemestreDut($objSemestre);
                while ($ue = $ues->fetch()) {
                    $objUe = $apogeeMaquette->createUeDut($ue, $objSemestre);
                    $matieres = $apogeeImport->getMatieresFromUe($objUe);
                    while ($matiere = $matieres->fetch()) {
                        if (!array_key_exists($matiere['COD_ELP'], $t)) {
                            // création
                            $t[$matiere['COD_ELP']] = $apogeeMaquette->createMatiere($matiere, $objUe, $pn);
                        } else {
                            // mise à jour avec les heures
                            $t[$matiere['COD_ELP']] = $apogeeMaquette->updateMatiere($t[$matiere['COD_ELP']], $matiere);
                        }
                    }
                }
            }
            $this->entityManager->flush();
        }
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'synchro.maquette.apogee.ok');

        return $this->redirectToRoute('sa_structure_index',
            ['departement' => $annee->getDiplome()->getDepartement()->getId()]);
    }

    /**
     * @throws Exception
     */
    #[Route(path: '/import/structure/semestre/{semestre}', name: 'sa_semestre_synchronise_apogee', methods: ['GET'])]
    #[\Symfony\Component\Security\Http\Attribute\IsGranted('ROLE_SUPER_ADMIN')]
    public function synchronisationApogeeSemestre(ApogeeMaquette $apogeeMaquette, ApogeeImport $apogeeImport, Semestre $semestre): Response
    {
        // création d'un PN
        $pn = $semestre->getPpnActif();
        $t = [];
        if (true === $semestre->getDiplome()?->isApc()) {
            // BUT

            $elementsSemestre = $apogeeImport->getElementsFromSemestre($semestre->getCodeElement());

            while ($elpSemestre = $elementsSemestre->fetch()) {
                // print_r($elpSemestre);echo '<br>';
                echo $elpSemestre['LIC_ELP'].'<br>';
                if (!array_key_exists($elpSemestre['COD_ELP'], $t)) {
                    // création
                    $data = $apogeeMaquette->createElement($elpSemestre, $semestre);
                    if (null !== $data) {
                        $t[$elpSemestre['COD_ELP']] = $data;
                    }
                } else {
                    // mise à jour avec les heures
                    $t[$elpSemestre['COD_ELP']] = $apogeeMaquette->updateElement($t[$elpSemestre['COD_ELP']],
                        $elpSemestre);
                }
            }
        } else {
            // DUT

            $ues = $apogeeImport->getUesFromSemestreDut($semestre);
            while ($ue = $ues->fetch()) {
                $objUe = $apogeeMaquette->createUeDut($ue, $semestre);
                $matieres = $apogeeImport->getMatieresFromUe($objUe);
                while ($matiere = $matieres->fetch()) {
                    if (!array_key_exists($matiere['COD_ELP'], $t)) {
                        // création
                        $t[$matiere['COD_ELP']] = $apogeeMaquette->createMatiere($matiere, $objUe, $pn);
                    } else {
                        // mise à jour avec les heures
                        $t[$matiere['COD_ELP']] = $apogeeMaquette->updateMatiere($t[$matiere['COD_ELP']], $matiere);
                    }
                }
            }
        }
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'synchro.maquette.apogee.ok');

        return $this->redirectToRoute('sa_structure_index',
            ['departement' => $semestre->getDiplome()->getDepartement()->getId()]);
    }

    /**
     * @throws Exception
     */
    #[Route(path: '/import/structure/ue/{ue}', name: 'sa_ue_synchronise_apogee', methods: ['GET'])]
    #[\Symfony\Component\Security\Http\Attribute\IsGranted('ROLE_SUPER_ADMIN')]
    public function synchronisationApogeeUe(ApogeeMaquette $apogeeMaquette, ApogeeImport $apogeeImport, Ue $ue): Response
    {
        // création d'un PN
        $pn = $ue->getSemestre()?->getPpnActif();
        if (true === $ue->getDiplome()?->isApc()) {
            // BUT
            // todo: a définir.
        } else {
            // DUT
            $t = [];

            $matieres = $apogeeImport->getMatieresFromUe($ue);
            while ($matiere = $matieres->fetch()) {
                if (!array_key_exists($matiere['COD_ELP'], $t)) {
                    // création
                    $t[$matiere['COD_ELP']] = $apogeeMaquette->createMatiere($matiere, $ue, $pn);
                } else {
                    // mise à jour avec les heures
                    $t[$matiere['COD_ELP']] = $apogeeMaquette->updateMatiere($t[$matiere['COD_ELP']], $matiere);
                }
            }
            $this->entityManager->flush();
        }
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'synchro.maquette.apogee.ok');

        return $this->redirectToRoute('sa_structure_index',
            ['departement' => $ue->getDiplome()->getDepartement()->getId()]);
    }
}
