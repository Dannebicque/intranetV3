<?php

// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/superAdministration/GroupesController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Departement;
use App\Entity\Etudiant;
use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\MesClasses\Apogee\MyApogee;
use App\Repository\EtudiantRepository;
use App\Repository\GroupeRepository;
use App\Repository\SemestreRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/super-administration/groupes")
 */
class GroupesController extends BaseController
{
    /**
     * @Route("/{departement}", name="sa_groupes_departement_index")
     * @param GroupeRepository   $groupeRepository
     * @param SemestreRepository $semestreRepository
     * @param Departement        $departement
     *
     * @return Response
     */
    public function index(
        GroupeRepository $groupeRepository,
        SemestreRepository $semestreRepository,
        Departement $departement
    ): Response {
        return $this->render('super-administration/groupes/index.html.twig', [
            'groupes'     => $groupeRepository->findByDepartement($departement),
            'departement' => $departement,
            'semestres'   => $semestreRepository->findByDepartement($departement)
        ]);
    }

    /**
     * @Route("/synchronise/departement/{departement}", name="sa_groupes_departement_synchro_all")
     * @param SemestreRepository $semestreRepository
     * @param Departement        $departement
     *
     * @return Response
     */
    public function synchroApogeeAll(SemestreRepository $semestreRepository, Departement $departement): Response
    {
        $semestres = $semestreRepository->findByDepartement($departement);
        /** @var Semestre $semestre */
        foreach ($semestres as $semestre) {
            $groupes = MyApogee::getHierarchieGroupesSemestre($semestre);
            $nbgroupes = $groupes->rowCount();
            //todo: déplacer dans une classe si OK.
            if ($nbgroupes === 0) {
                //pas de hierarchie
                $groupes = MyApogee::getGroupesSemestre($semestre);
                $i = 1;
                if (count($semestre->getTypeGroupes()) > 0) {
                    $tg = $semestre->getTypeGroupes()[0];
                } else {
                    //si pas de type de groupe on en ajoute un par défaut.
                    $tg = new TypeGroupe($semestre);
                    $tg->setLibelle('Defaut');
                    $tg->setDefaut(true);
                    $tg->setType('TD');
                    $this->entityManager->persist($tg);
                }

                while ($ligne = $groupes->fetch()) {
                    $groupe = new Groupe($tg);
                    $groupe->setCodeApogee($ligne['COD_EXT_GPE']);
                    $groupe->setLibelle($ligne['LIB_GPE']);
                    $groupe->setOrdre($i);
                    $i++;
                    $this->entityManager->persist($groupe);
                }
                $this->entityManager->flush();
            } else {

            }


        }
        $this->addFlashBag('success', 'sa_groupes_departement_synchro_all.success');

        return $this->redirectToRoute('sa_groupes_departement_index', ['departement' => $departement->getId()]);
    }

    /**
     * @Route("/synchronise/semestre/{semestre}", name="sa_groupes_departement_synchro_semestre")
     * @param GroupeRepository $groupeRepository
     * @param Semestre         $semestre
     *
     * @return Response
     */
    public function synchroApogeeSemestre(GroupeRepository $groupeRepository, Semestre $semestre): Response
    {
        //supprimer les groupes du semestre
        //récupérer les gorupes
        //calcluler l'aroborescence

        $groupes = MyApogee::getHierarchieGroupesSemestre($semestre);

        while ($row = $groupes->fetch($groupes)) {

        }
    }

    /**
     * @Route("/synchronise/etudiant/semestre/{semestre}", name="sa_groupes_etudiant_synchro_semestre")
     * @param EtudiantRepository $etudiantRepository
     * @param GroupeRepository   $groupeRepository
     * @param Semestre           $semestre
     *
     * @return Response
     */
    public function synchroApogeeEtudiantSemestre(EtudiantRepository $etudiantRepository, GroupeRepository $groupeRepository, Semestre $semestre): Response
    {
        //suppression des groupes d'origine.
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
        //récupération des groupes
        $groupes = MyApogee::getEtudiantsGroupesSemestre($semestre);

        while ($groupe = $groupes->fetch()) {
            if (array_key_exists($groupe['COD_ETU'], $tEtudiants) && array_key_exists($groupe['COD_EXT_GPE'], $tGroupes)) {
                $tEtudiants[$groupe['COD_ETU']]->addGroupe($tGroupes[$groupe['COD_EXT_GPE']]);
                $tGroupes[$groupe['COD_EXT_GPE']]->addEtudiant($tEtudiants[$groupe['COD_ETU']]);
                $tEtudiants[$groupe['COD_ETU']]->setSemestre($tGroupes[$groupe['COD_EXT_GPE']]->getTypeGroupe()->getSemestre());
            }
        }
        $this->entityManager->flush();
        $this->addFlashBag('success', 'sa_groupes_etudiant_synchro_semestre.success');

        return $this->redirectToRoute('sa_groupes_departement_index',
            ['departement' => $semestre->getAnnee()->getDiplome()->getDepartement()->getId()]);

    }
}
