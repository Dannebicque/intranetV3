<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Edt/MyEdtExport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/09/2021 15:58
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Edt;

use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\MyIcal;
use App\Classes\Pdf\MyPDF;
use App\Entity\Departement;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Repository\CalendrierRepository;
use App\Repository\CelcatEventsRepository;
use App\Repository\EdtPlanningRepository;
use App\Utils\Tools;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\KernelInterface;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;
use ZipArchive;

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

    private TypeMatiereManager $typeMatiereManager;

    /**
     * MyEdtExport constructor.
     */
    public function __construct(
        EdtPlanningRepository $edtPlanningRepository,
        CelcatEventsRepository $celcatEventsRepository,
        CalendrierRepository $calendrierRepository,
        MyEdtIntranet $myEdtIntranet,
        MyEdtCelcat $myEdtCelcat,
        MyIcal $myIcal,
        MyPDF $myPDF,
        TypeMatiereManager $typeMatiereManager,
        KernelInterface $kernel
    ) {
        $this->dir = $kernel->getProjectDir() . '/public/upload/';

        $this->edtPlanningRepository = $edtPlanningRepository;
        $this->celcatEventsRepository = $celcatEventsRepository;
        $this->typeMatiereManager = $typeMatiereManager;
        $this->myEdtIntranet = $myEdtIntranet;
        $this->myEdtCelcat = $myEdtCelcat;
        $this->calendrierRepository = $calendrierRepository;
        $this->myIcal = $myIcal;
        $this->myPDF = $myPDF;
    }

    public function export($user, $_format, $type)
    {
        $this->calendrier = $this->calendrierRepository->findCalendrierArray();
        $temp = [];

        if ('Personnel' === $type) {
            foreach ($user->getPersonnelDepartements() as $departement) {
                $tabMatieresDepartement = $this->typeMatiereManager->findByDepartementArray($departement->getDepartement());
                $temp[] = $this->edtPlanningRepository->getByPersonnelArray($user, $departement->getDepartement(),
                    $tabMatieresDepartement);
            }

            $temp[] = $this->celcatEventsRepository->getByPersonnelArray($user);
        } else {
            /** @var Etudiant $user */

            if ($user->getAnneeUniversitaire() !== null && $user->getSemestre() !== null && $user->getSemestre()->getAnnee() !== null && $user->getSemestre()->getAnnee()->getDiplome() !== null) {
                $nbSemaines = 0 !== $user->getSemestre()->getAnnee()->getDiplome()->getOptSemainesVisibles() ? $user->getSemestre()->getAnnee()->getDiplome()->getOptSemainesVisibles() : 52;
                $emaineActuelle = $this->calendrierRepository->findOneBy([
                    'semaineReelle' => date('W'),
                    'anneeUniversitaire' => $user->getAnneeUniversitaire()->getId(),
                ]);

                if ($emaineActuelle !== null) {
                    $max = $emaineActuelle->getSemaineFormation() + $nbSemaines;
                    if ($user->getDepartement()->isOptUpdateCelcat()) {
                        for ($i = $emaineActuelle->getSemaineFormation(); $i < $max; ++$i) {
                            $temp[] = $this->celcatEventsRepository->getByEtudiantArray($user, $i);
                        }
                    } else {
                        for ($i = $emaineActuelle->getSemaineFormation(); $i < $max; ++$i) {
                            $temp[] = $this->edtPlanningRepository->getByEtudiantArray($user, $i,
                                $this->typeMatiereManager->findBySemestreArray($user->getSemestre()));
                        }
                    }
                }
            }
        }

        $edt = array_merge(...$temp);

        switch ($_format) {
            case 'ics':
                return $this->genereIcal($edt);
        }

        return false;
    }

    private function genereIcal($edt): bool|string
    {
        foreach ($edt as $pl) {
            if (null !== $pl['date']) {
                $this->myIcal->setDtstart($pl['date'], $pl['debut']);
                $this->myIcal->setDtend($pl['date'], $pl['fin']);
                $this->myIcal->setDescription($pl['commentaire']);
                $this->myIcal->setSummary($pl['ical']);//soit typeIdMatiere si Intranet, sinon OK pour Celcat...
                $this->myIcal->setLocation($pl['salle']);
                $this->myIcal->addEvent($pl['id']);
            }
        }

        $handle = fopen('php://memory', 'rb+');
        fwrite($handle, $this->myIcal->getIcal());

        rewind($handle);
        $content = stream_get_contents($handle);
        fclose($handle);

        return $content;
    }

    public function getAllDocs(Departement $departement): array
    {
        //parcour fichiers
        $folder = $this->dir . 'pdfedt/' . $departement->getId() . '/';
        $dossier = opendir($folder);

        $t = [];
        while ($fichier = readdir($dossier)) {
            if ('.' !== $fichier && '..' !== $fichier) {
                $id = explode('_', $fichier);
                $t[$id[0]] = $fichier;
            }
        }

        closedir($dossier);

        return $t;
    }

    public function genereAllDocument($source, $_format, ?Departement $departement): void
    {
        if ('pdf' === $_format) {
            $this->genereaAllPdf($source, $departement);
        }
        //todo: export CSV/XLSX
    }

    private function genereaAllPdf($source, ?Departement $departement): void
    {
        set_time_limit(120);
        foreach ($departement->getPersonnelDepartements() as $personnelDepartement) {
            $this->generePdf($personnelDepartement->getPersonnel(), $source, $departement);
        }
    }

    /**
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function generePdf(Personnel $personnel, $source, Departement $departement): void
    {
        $dir = $this->dir . 'pdfedt/' . $departement->getId() . '/';
        Tools::checkDirectoryExist($dir);
        //todo: passer par le DTO Evenement, comme ca compatible avec celcat
        if ('intranet' === $source) {
            $planning = $this->edtPlanningRepository->findEdtProf($personnel->getId());
            $this->myPDF::genereAndSavePdf('pdf/edt/planning.html.twig',
                [
                    'planning' => $planning,
                    'personnel' => $personnel,
                    'matieres' => $this->typeMatiereManager->findByDepartementArray($departement)
                ],
                $personnel->getId() . '_' . $personnel->getInitiales(),
                $dir, $departement->getLibelle());
        }
    }

    /**
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function exportSemestre($semaine, Semestre $semestre): void
    {
        $departement = $semestre->getDiplome()->getDepartement();
        if (null !== $departement && true === $departement->getOptUpdateCelcat()) {
            $edt = $this->celcatEventsRepository->findEdtSemestre($semestre, $semaine);
        } else {
            $edt = $this->myEdtIntranet->initSemestre($semaine, $semestre, $semestre->getAnneeUniversitaire());
        }

        $this->myPDF::addOptions(['orientation' => 'Landscape', 'fontHeightRatio' => 0.8]);
        $this->myPDF::generePdf('pdf/edt/edtSemestre.html.twig',
            ['edt' => $edt, 'semestre' => $semestre, 'departement' => $departement], $semestre->getLibelle(),
            $departement->getLibelle());
    }

    public function compressDir(Departement $departement)
    {
        $dir = $this->dir . 'pdfedt/' . $departement->getId() . '/';
        Tools::checkDirectoryExist($dir);
        $zip = new ZipArchive();
        $fileName = 'pdf-edt-' . date('YmdHis') . '.zip';
        // The name of the Zip documents.
        $zipName = $this->dir . $fileName;

        $zip->open($zipName, ZipArchive::CREATE);
        $tabFiles = [];

        //lecture du repertoire
        $repertoire = opendir($dir);
        while ($file = readdir($repertoire)) {
            if ('.' !== $file && '..' !== $file) {
                $tabFiles[] = $file;
                $zip->addFile($file,
                    'pdfEdt-' . $file . '.pdf');
            }
        }

        $zip->close();

        //suppression des PDF
        foreach ($tabFiles as $file) {
            unlink($file);
        }

        $response = new Response(file_get_contents($zipName));
        $response->headers->set('Content-Type', 'application/zip');
        $response->headers->set('Content-Disposition', 'attachment;filename="' . $zipName . '"');
        $response->headers->set('Content-length', filesize($zipName));

        return $fileName;
    }

    public function genereOneDocument($source, $_format, Personnel $personnel, Departement $departement)
    {
        $this->generePdf($personnel, $source, $departement);
    }
}
