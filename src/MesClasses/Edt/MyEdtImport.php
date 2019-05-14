<?php
/**
 * Copyright (C) 2013 - 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 *
 * @file       /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/Edt/MyEdtImport.php
 * @author     David annebicque
 * @project    intranetv3
 * @date       07/05/2019 12:19
 * @lastUpdate 07/05/2019 12:19
 *
 */

namespace App\MesClasses\Edt;


use App\Entity\EdtPlanning;
use App\Entity\Semestre;
use App\MesClasses\DataUserSession;
use App\MesClasses\MyUpload;
use App\Repository\EdtPlanningRepository;
use App\Repository\MatiereRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Doctrine\ORM\EntityManagerInterface;

class MyEdtImport
{

    /** @var PersonnelRepository */
    private $personnelRepository;

    /** @var MatiereRepository */
    private $matiereRepository;

    /** @var SemestreRepository */
    private $semestreRepository;

    /** @var EntityManagerInterface */
    private $entityManager;

    private $dir;
    private $nomfile;

    private $semaine;

    private $semestre;
    /**
     * @var DataUserSession
     */
    private $dataUserSession;
    /**
     * @var MyUpload
     */
    private $myUpload;

    /**
     * MyEdtImport constructor.
     *
     * @param PersonnelRepository    $personnelRepository
     * @param MatiereRepository      $matiereRepository
     * @param SemestreRepository     $semestreRepository
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(
        EdtPlanningRepository $edtPlanningRepository,
        PersonnelRepository $personnelRepository,
        MatiereRepository $matiereRepository,
        SemestreRepository $semestreRepository,
        EntityManagerInterface $entityManager,
        MyUpload $myUpload
    ) {
        $this->edtPlanningRepository = $edtPlanningRepository;
        $this->personnelRepository = $personnelRepository;
        $this->matiereRepository = $matiereRepository;
        $this->semestreRepository = $semestreRepository;
        $this->entityManager = $entityManager;
        $this->myUpload = $myUpload;
    }


    public function init($file, DataUserSession $dataUserSession)
    {
        $this->dataUserSession = $dataUserSession;

        $this->nomfile = $this->myUpload->upload($file, 'temp/', ['txt']);

        return $this;

    }


    public function traite()
    {
        //Récupérer la liste des profs avec initiales
        $tabIntervenants = $this->personnelRepository->tableauIntervenants($this->dataUserSession->getDepartement());
        $tabMatieres = $this->matiereRepository->tableauMatieres($this->dataUserSession->getDepartement());
        $tabSemestre = $this->semestreRepository->tableauSemestres($this->dataUserSession->getDepartement());

        $tabdebut = [1 => 1, 2 => 4, 3 => 7, 4 => 13, 5 => 16, 6 => 19, 7 => 22];

        $handle = fopen($this->nomfile, 'rb');
        $tSemaineClear = []; //tableau pour mémoriser les semaines à supprimer

        /*Si on a réussi à ouvrir le fichier*/
        if ($handle) {
            /*Tant que l'on est pas à la fin du fichier*/
            while (!feof($handle)) {
                /*On lit la ligne courante*/
                $phrase = fgets($handle);
                $phrase = trim($phrase);
                if (strlen($phrase) > 10 && $phrase[strlen($phrase) - 1] !== '*') {
                    $this->semaine = substr($phrase, 1, 2); //on ne récupère pas le S
                    $jour = $phrase[3];
                    $heure = $phrase[4]; //a convertir
                    $semestre = substr($phrase, 5, 2);

                    if (!array_key_exists($semestre, $tSemaineClear)) {
                        //si la clé n'est pas dans le tableau, la semaine n'a pas encore été effacée, on supprime
                        $this->clearSemaine($this->semaine, $tabSemestre[$semestre]);

                        //on mémorise le semestre
                        $tSemaineClear[$semestre] = true;
                    }

                    $groupe = $phrase[7];

                    if ($phrase[8] === 'Z') {
                        //prof commence par Z, donc, c'est une zone sans enseignant
                        $salle = substr($phrase, 11, 4);
                        $fin = $phrase[15];
                        $texte = substr($phrase, 16, strlen($phrase) - 15);

                        $pl = new EdtPlanning();
                        $pl->setSemestre($tabSemestre[$semestre]);
                        $pl->setMatiere(null);
                        $pl->setIntervenant(null);
                        $pl->setJour($jour);
                        $pl->setSalle($salle);
                        $pl->setGroupe(1);
                        $pl->setType('cm');
                        $pl->setDebut($tabdebut[$heure]);
                        $pl->setFin($tabdebut[$heure] + (3 * $fin));
                        $pl->setSemaine($this->semaine);
                        $pl->setEvaluation(false);
                        $pl->setTexte($texte);

                        $this->entityManager->persist($pl);

                    } else {

                        $prof = substr($phrase, 8, 3);

                        if ($semestre[1] === 'D') {
                            $matiere = substr($phrase, 11, 6);
                            $typecours = substr($phrase, 17, 2);
                            if ($typecours[0] !== 'T' && $typecours[0] !== 'C') {
                                $matiere .= $typecours[0];
                                $typecours = substr($phrase, 18, 2);
                                $ordre = substr($phrase, 20, 2);
                                $salle = substr($phrase, 22, 4);
                            } else {
                                $ordre = substr($phrase, 19, 2);
                                $salle = substr($phrase, 21, 4);
                            }
                        } else {
                            $matiere = substr($phrase, 11, 5);
                            $typecours = substr($phrase, 16, 2);
                            if ($typecours[0] !== 'T' && $typecours[0] !== 'C') {
                                $matiere .= $typecours[0];
                                $typecours = substr($phrase, 17, 2);
                                $ordre = substr($phrase, 19, 2);
                                $salle = substr($phrase, 21, 4);
                            } else {
                                $ordre = substr($phrase, 18, 2);
                                $salle = substr($phrase, 20, 4);
                            }
                        }

                        if (array_key_exists($matiere, $tabMatieres) && array_key_exists($prof, $tabIntervenants)) {
                            $pl = new EdtPlanning();
                            $pl->setSemestre($tabMatieres[$matiere]->getUE()->getSemestre());
                            $this->semestre = $pl->getSemestre()->getId();
                            $pl->setMatiere($tabMatieres[$matiere]);
                            $pl->setIntervenant($tabIntervenants[$prof]);
                            $pl->setJour($jour);
                            $pl->setSalle($salle);
                            $pl->setOrdre($ordre);
                            $pl->setGroupe(ord($groupe) - 64);
                            $pl->setType(strtolower($typecours));
                            $pl->setDebut($tabdebut[$heure]);
                            $pl->setFin($tabdebut[$heure] + 3);
                            $pl->setSemaine($this->semaine);
                            if ($salle === 'EVAL') {
                                $pl->setEvaluation(true);
                            } else {
                                $pl->setEvaluation(false);
                            }
                            $this->entityManager->persist($pl);
                        }
                    }
                }
            }

            /*On ferme le fichier*/
            fclose($handle);
            unlink($this->dir . $this->nomfile); //suppression du fichier
            $this->entityManager->flush();

        }
    }

    /**
     * @return mixed
     */
    public function getSemaine()
    {
        return $this->semaine;
    }

    /**
     * @return mixed
     */
    public function getSemestre()
    {
        return $this->semestre;
    }

    private function clearSemaine($semaine, Semestre $semestre)
    {
        $sem = $this->edtPlanningRepository->findBy(array(
            'semaine'  => $semaine,
            'semestre' => $semestre
        ));

        foreach ($sem as $s) {
            $this->entityManager->remove($s);
        }
        $this->entityManager->flush();
    }
}
