<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/GroupesController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/02/2024 18:55
 */

namespace App\Controller\superAdministration;

use App\Classes\Apogee\ApogeeGroupe;
use App\Classes\MyGroupes;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Departement;
use App\Entity\Etudiant;
use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\Repository\EtudiantRepository;
use App\Repository\GroupeRepository;
use App\Repository\SemestreRepository;
use Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use function array_key_exists;
use function count;

#[Route(path: '/administratif/groupes')]
class GroupesController extends BaseController
{
    #[Route(path: '/{departement}/{semestre}', name: 'sa_groupes_departement_index')]
    public function index(SemestreRepository $semestreRepository, Departement $departement, Semestre $semestre = null): Response
    {
        return $this->render('super-administration/groupes/index.html.twig', [
            'departement' => $departement,
            'semestres' => $semestreRepository->findByDepartement($departement),
            'afficheSemestre' => $semestre?->getId(),
        ]);
    }

    #[Route(path: '/synchronise/departement/{departement}', name: 'sa_groupes_departement_synchro_all')]
    public function synchroApogeeAll(ApogeeGroupe $apogeeGroupe, SemestreRepository $semestreRepository, Departement $departement): Response
    {
        $semestres = $semestreRepository->findByDepartement($departement);
        /** @var Semestre $semestre */
        foreach ($semestres as $semestre) {
            $this->insertGroupes($semestre, $apogeeGroupe);
        }
        $this->addFlashBag('success', 'sa_groupes_departement_synchro_all.success');

        return $this->redirectToRoute('sa_groupes_departement_index', ['departement' => $departement->getId()]);
    }

    private function insertGroupes(Semestre $semestre, ApogeeGroupe $apogeeGroupe): void
    {
        // $treeGroupes = $apogeeGroupe->getHierarchieGroupesSemestre($semestre);

        // récupérer les groupes
        $groupes = $apogeeGroupe->getGroupesSemestre($semestre);
        $i = 1;
        if (count($semestre->getTypeGroupes()) > 0) {
            $tg = $semestre->getTypeGroupes()[0];
        } else {
            // si pas de type de groupe on en ajoute un par défaut.
            $tg = new TypeGroupe($semestre);
            $tg->setLibelle('Defaut');
            $tg->setDefaut(true);
            $tg->setType('TD');
            $this->entityManager->persist($tg);
        }

        while ($ligne = $groupes->fetch()) {
            // todo: gérer la hierarchie
            $groupe = new Groupe();
            $groupe->setTypeGroupe($tg);
            $groupe->setCodeApogee($ligne['COD_EXT_GPE']);
            $groupe->setLibelle($ligne['LIB_GPE']);
            $groupe->setOrdre($i);
            ++$i;
            $this->entityManager->persist($groupe);
        }
        $this->entityManager->flush();
    }

    #[Route(path: '/synchronise/semestre/{semestre}', name: 'sa_groupes_departement_synchro_semestre')]
    public function synchroApogeeSemestre(ApogeeGroupe $apogeeGroupe, GroupeRepository $groupeRepository, Semestre $semestre): Response
    {
        // supprimer les groupes du semestre
        // calcluler l'aroborescence
        $this->insertGroupes($semestre, $apogeeGroupe);

        return $this->redirectToRoute('sa_groupes_departement_index', ['semestre' => $semestre->getId()]);
    }

    #[Route(path: '/synchronise/etudiant/semestre/{semestre}', name: 'sa_groupes_etudiant_synchro_semestre')]
    public function synchroApogeeEtudiantSemestre(ApogeeGroupe $apogeeGroupe, EtudiantRepository $etudiantRepository, GroupeRepository $groupeRepository, Semestre $semestre): Response
    {
        // suppression des groupes d'origine.
        $tEtudiants = [];
        $etudiants = $etudiantRepository->findEtudiantEnFormation();
        /** @var Etudiant $etudiant */
        foreach ($etudiants as $etudiant) {
            $tEtudiants[$etudiant->getNumEtudiant()] = $etudiant;
            foreach ($etudiant->getGroupes() as $groupe) {
                $etudiant->removeGroupe($groupe);
            }
        }
        $groupes = $groupeRepository->findBySemestre($semestre);
        $tGroupes = [];
        /** @var Groupe $groupe */
        foreach ($groupes as $groupe) {
            $tGroupes[$groupe->getCodeApogee()] = $groupe;
        }
        // récupération des groupes
        $groupes = $apogeeGroupe->getEtudiantsGroupesSemestre($semestre);
        while ($groupe = $groupes->fetch()) {
            if (array_key_exists($groupe['COD_ETU'], $tEtudiants) && array_key_exists($groupe['COD_EXT_GPE'],
                    $tGroupes)) {
                $tEtudiants[$groupe['COD_ETU']]->addGroupe($tGroupes[$groupe['COD_EXT_GPE']]);
                $tGroupes[$groupe['COD_EXT_GPE']]->addEtudiant($tEtudiants[$groupe['COD_ETU']]);
                // $tEtudiants[$groupe['COD_ETU']]->setSemestre($tGroupes[$groupe['COD_EXT_GPE']]->getTypeGroupe()->getSemestre());
            }
        }
        $this->entityManager->flush();
        $this->addFlashBag('success', 'sa_groupes_etudiant_synchro_semestre.success');

        return $this->redirectToRoute('sa_groupes_departement_index',
            ['departement' => $semestre->getAnnee()->getDiplome()->getDepartement()->getId()]);
    }

    /**
     * @throws Exception
     */
    #[Route(path: '/import/{departement}', name: 'sa_groupes_import')]
    public function import(MyGroupes $myGroupes, Request $request, Departement $departement): Response
    {
        if ($request->isMethod('POST')) {
            $myGroupes->importCsv($request->files->get('fichier'), $departement);
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'groupes.import.success.flash');
            $this->redirectToRoute('sa_groupes_departement_index', ['departement' => $departement->getId()]);
        }

        return $this->render('administration/groupe/import.html.twig',
            [
                'departement' => $departement,
            ]
        );
    }

    /**
     * @throws Exception
     */
    #[Route(path: '/import-etudiant/{semestre}', name: 'sa_groupes_etudiant_import_semestre')]
    public function importEtudiant(MyGroupes $myGroupes, Request $request, Semestre $semestre): Response
    {
        if ($request->isMethod('POST')) {
            $myGroupes->importGroupeEtudiantCsv($request->files->get('fichier'), $semestre);
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'groupes.etudiants.import.success.flash');
            $this->redirectToRoute('sa_groupes_departement_index',
                ['departement' => $semestre->getDiplome()->getDepartement()->getId()]);
        }

        return $this->render('administration/groupe/import-etudiant.html.twig',
            [
                'semestre' => $semestre,
                'departement' => $semestre->getDiplome()->getDepartement(),
            ]
        );
    }
}
