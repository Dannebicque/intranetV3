<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Edt/MyEdtExport.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 31/08/2020 18:17

namespace App\Classes\Edt;


use App\Classes\Pdf\MyPDF;
use App\Classes\Tools;
use App\Entity\Departement;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Classes\MyIcal;
use App\Repository\CalendrierRepository;
use App\Repository\CelcatEventsRepository;
use App\Repository\EdtPlanningRepository;
use Symfony\Component\HttpKernel\KernelInterface;

class MyEdtExport
{
    protected EdtPlanningRepository $edtPlanningRepository;

    protected CelcatEventsRepository $celcatEventsRepository;

    protected CalendrierRepository $calendrierRepository;

    protected MyIcal $myIcal;

    private $calendrier;


    /**
     * @var string
     */
    private $dir;

    /**
     * MyEdtExport constructor.
     *
     * @param EdtPlanningRepository  $edtPlanningRepository
     * @param CelcatEventsRepository $celcatEventsRepository
     * @param CalendrierRepository   $calendrierRepository
     * @param MyIcal                 $myIcal
     * @param MyPDF                  $myPDF
     * @param KernelInterface        $kernel
     */
    public function __construct(
        EdtPlanningRepository $edtPlanningRepository,
        CelcatEventsRepository $celcatEventsRepository,
        CalendrierRepository $calendrierRepository,
        MyIcal $myIcal,
        MyPDF $myPDF,
        KernelInterface $kernel
    ) {

        $this->dir = $kernel->getProjectDir() . '/public/upload/';

        $this->edtPlanningRepository = $edtPlanningRepository;
        $this->celcatEventsRepository = $celcatEventsRepository;
        $this->calendrierRepository = $calendrierRepository;
        $this->myIcal = $myIcal;
        $this->myPDF = $myPDF;
    }


    public function export($user, $_format, $type)
    {
        $this->calendrier = $this->calendrierRepository->findCalendrierArray();
        $edt = [];
        if ($type === 'Personnel') {
            $temp = $this->edtPlanningRepository->getByPersonnelArray($user);
            foreach ($temp as $row) {
                $edt[] = $row;
            }
            $temp = $this->celcatEventsRepository->getByPersonnelArray($user);
            foreach ($temp as $row) {
                $edt[] = $row;
            }
        } else {
            /** @var Etudiant $user */
            $nbSemaines = $user->getSemestre()->getAnnee()->getDiplome()->getOptSemainesVisibles() !== 0 ? $user->getSemestre()->getAnnee()->getDiplome()->getOptSemainesVisibles() : 52;
            $emaineActuelle = $this->calendrierRepository->findOneBy([
                'semaineReelle'      => date('W'),
                'anneeUniversitaire' => $user->getAnneeUniversitaire()->getId()
            ]);
            $max = $emaineActuelle->getSemaineFormation() + $nbSemaines;
            if ($user->getDepartement()->isOptUpdateCelcat()) {
                for ($i = $emaineActuelle->getSemaineFormation(); $i < $max; $i++) {
                    $temp = $this->celcatEventsRepository->getByEtudiantArray($user, $i);
                    foreach ($temp as $row) {
                        $edt[] = $row;
                    }
                }
            } else {
                for ($i = $emaineActuelle->getSemaineFormation(); $i < $max; $i++) {
                    $temp = $this->edtPlanningRepository->getByEtudiantArray($user, $i);
                    foreach ($temp as $row) {
                        $edt[] = $row;
                    }
                }
            }
        }

        switch ($_format) {
            case 'ics':
                return $this->genereIcal($edt);
                break;
        }
    }

    private function genereIcal($edt)
    {
        foreach ($edt as $pl) {
            //todo: surement possible d'exploiter la date depuis EdtPlanning...
            $this->myIcal->setDtstart($this->calendrier[$pl['semaine']]['lundi'], $pl['jour'], $pl['debut']);
            $this->myIcal->setDtend($this->calendrier[$pl['semaine']]['lundi'], $pl['jour'], $pl['fin']);
            $this->myIcal->setDescription($pl['commentaire']);
            $this->myIcal->setSummary($pl['ical']);
            $this->myIcal->setLocation($pl['salle']);
            $this->myIcal->addEvent();
        }

        $handle = fopen('php://memory', 'rb+');
        fwrite($handle, $this->myIcal->getIcal());

        rewind($handle);
        $content = stream_get_contents($handle);
        fclose($handle);

        return $content;
    }

    /**
     * @param Departement $departement
     * @param Personnel[] $personnels
     *
     * @return array
     */
    public function getAllDocs(Departement $departement)
    {
        //parcour fichiers
        $folder = $this->dir . 'pdfedt/' . $departement->getId() . '/';
        $dossier = opendir($folder);

        $t = [];
        while ($fichier = readdir($dossier)) {

            if ($fichier !== '.' && $fichier !== '..') {
                $id = explode('_', $fichier);
                $t[$id[0]] = $fichier;
            }
        }

        closedir($dossier);

        return $t;
    }

    public function genereAllDocument($source, $_format, ?Departement $departement): void
    {
        if ($_format === 'pdf') {
            $this->genereaAllPdf($source, $departement);
        } else {
            //todo: export CSV/XLSX
        }
    }

    private function genereaAllPdf($source, ?Departement $departement): void
    {
        foreach ($departement->getPersonnelDepartements() as $personnelDepartement) {
            $this->generePdf($personnelDepartement->getPersonnel(), $source, $departement);
        }
    }

    private function generePdf(Personnel $personnel, $source, Departement $departement): void
    {
        $dir = $this->dir . 'pdfedt/' . $departement->getId() . '/';
        Tools::CheckDirectoryExist($dir);

        if ($source === 'intranet') {
            $planning = $this->edtPlanningRepository->findEdtProf($personnel->getId());
            $this->myPDF::genereAndSavePdf('pdf/planning.html.twig',
                ['planning' => $planning, 'personnel' => $personnel], $personnel->getId() . '_' . $personnel->getNom(),
                $dir, $departement->getLibelle());
        }
    }
}
