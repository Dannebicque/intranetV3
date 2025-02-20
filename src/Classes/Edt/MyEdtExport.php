<?php
/*
 * Copyright (c) 2025. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Edt/MyEdtExport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/02/2025 09:32
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Edt;

use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\MyIcal;
use App\Classes\Pdf\PdfManager;
use App\Entity\AnneeUniversitaire;
use App\Entity\Departement;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Repository\CalendrierRepository;
use App\Repository\EdtCelcatRepository;
use App\Repository\EdtPlanningRepository;
use App\Utils\Tools;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;
use ZipArchive;

class MyEdtExport
{
    private array $calendrier;

    private readonly string $dir;

    /**
     * MyEdtExport constructor.
     */
    public function __construct(
        protected EdtManager            $edtManager,
        protected EdtPlanningRepository $edtPlanningRepository,
        protected EdtCelcatRepository   $celcatEventsRepository,
        protected CalendrierRepository  $calendrierRepository,
        private readonly MyEdtIntranet  $myEdtIntranet,
        private readonly MyEdtCelcat    $myEdtCelcat,
        protected MyIcal                $myIcal,
        private readonly PdfManager     $myPDF,
        private readonly TypeMatiereManager $typeMatiereManager,
        KernelInterface                 $kernel
    )
    {
        $this->dir = $kernel->getProjectDir() . '/public/';
    }

    public function export(UserInterface $user, string $_format, string $type, AnneeUniversitaire $anneeUniversitaire): bool|string
    {
        $this->calendrier = $this->calendrierRepository->findCalendrierArray($anneeUniversitaire);
        $temp = [];

        if ('Personnel' === $type) {
            foreach ($user->getPersonnelDepartements() as $departement) {
                $tabMatieresDepartement = $this->typeMatiereManager->findByDepartementArray($departement->getDepartement());
                $temp[] = $this->edtPlanningRepository->getByPersonnelArray($user, $departement->getDepartement(),
                    $tabMatieresDepartement);
//                $temp[] = $this->edtManager->initPersonnel(
//                    'intranet',
//                    $this->calendrier,
//                    $user,
//                    $anneeUniversitaire, $tabMatieresDepartement,
//                );
            }

            $temp[] = $this->celcatEventsRepository->getByPersonnelArray($user);
        } elseif (null !== $user->getAnneeUniversitaire() && null !== $user->getSemestre() && null !== $user->getSemestre()->getAnnee() && null !== $user->getSemestre()->getAnnee()->getDiplome()) {
            $nbSemaines = 0 !== $user->getSemestre()->getAnnee()->getDiplome()->getOptSemainesVisibles() ? $user->getSemestre()->getAnnee()->getDiplome()->getOptSemainesVisibles() : 52;
            $emaineActuelle = $this->calendrierRepository->findOneBy([
                'semaineReelle' => date('W'),
                'anneeUniversitaire' => $user->getAnneeUniversitaire()->getId(),
            ]);

            if (null !== $emaineActuelle) {
                $max = $emaineActuelle->getSemaineFormation() + $nbSemaines;
                if ($user->getDepartement()->isOptUpdateCelcat()) {
                    for ($i = $emaineActuelle->getSemaineFormation(); $i < $max; ++$i) {
                        $temp[] = $this->celcatEventsRepository->getByEtudiantArray($user, $i, $user->getAnneeUniversitaire());
                    }
                } else {
                    if ($user->getSemestre()->getDiplome()->isApc()) {
                        $matieres = $this->typeMatiereManager->findByReferentielOrdreSemestre(
                            $user->getSemestre(), $user->getSemestre()->getDiplome()->getReferentiel());
                    } else {
                        $matieres = $this->typeMatiereManager->findBySemestre($user->getSemestre());
                    }

                    $tMatieres = [];
                    foreach ($matieres as $matiere) {
                        $tMatieres[$matiere->getTypeIdMatiere()] = $matiere;
                    }

                    for ($i = $emaineActuelle->getSemaineFormation(); $i < $max; ++$i) {
                        $temp[] = $this->edtPlanningRepository->getByEtudiantArray($user, $i,
                            $tMatieres, $user->getAnneeUniversitaire());
                    }
                }
            }
        }

        $edt = array_merge(...$temp);

        return match ($_format) {
            'ics' => $this->genereIcal($edt),// todo: gérer avec le EvenementCollection
            'json' => $this->genereJson($edt),// todo: gérer avec le EvenementCollection
            default => false,
        };
    }

    private function genereJson(array $edt): bool|string
    {
        $t = [];
        foreach ($edt as $pl) {
            if (null !== $pl['date']) {
                $temp['id'] = $pl['id'];
                $temp['start'] = $this->myIcal->getDtstartJson($pl['date'], $pl['debut']);
                $temp['end'] = $this->myIcal->getDtendJson($pl['date'], $pl['fin']);
                $temp['description'] = $pl['commentaire'];
                $temp['title'] = $pl['ical']; // soit typeIdMatiere si Intranet, sinon OK pour Celcat...
                $temp['extendedProps']['salle'] = $pl['salle'];
                $temp['backgroundColor'] = $pl['couleur'];
                $t[] = $temp;
            }
        }

        return json_encode($t, JSON_PRETTY_PRINT);
    }

    private function genereIcal(mixed $edt): bool|string
    {
        foreach ($edt as $pl) {
            if (null !== $pl['date']) {
                $this->myIcal->setDtstart($pl['date'], $pl['debut']);
                $this->myIcal->setDtend($pl['date'], $pl['fin']);
                if (array_key_exists('enseignant', $pl)) {
                    $this->myIcal->setDescription(
                        'Ens. : ' . $pl['enseignant'] . ' - Commentaire : ' .
                        $pl['commentaire'] ?? '-');
                } else {
                    $this->myIcal->setDescription($pl['commentaire']);
                }

                $this->myIcal->setSummary($pl['ical']); // soit typeIdMatiere si Intranet, sinon OK pour Celcat...
                $this->myIcal->setLocation($pl['salle']);
                $this->myIcal->setColor($pl['couleur']);
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
        // parcour fichiers
        $folder = $this->dir . 'upload/pdfedt/' . $departement->getId() . '/';
        $dossier = opendir($folder);

        $t = [];
        while ($fichier = readdir($dossier)) {
            if ('.' !== $fichier && '..' !== $fichier) {
                $id = explode('-', $fichier);
                $t[$id[0]] = $fichier;
            }
        }

        closedir($dossier);

        return $t;
    }

    public function genereAllDocument(string $source, string $_format, ?Departement $departement): void
    {
        if ('pdf' === $_format) {
            $this->genereaAllPdf($source, $departement);
        }
        // todo: export CSV/XLSX
    }

    /**
     * @throws RuntimeError
     * @throws SyntaxError
     * @throws LoaderError
     */
    private function genereaAllPdf(string $source, ?Departement $departement): void
    {
        set_time_limit(120);
        foreach ($departement->getPersonnelDepartements() as $personnelDepartement) {
            $this->generePdf($personnelDepartement->getPersonnel(), $source, $departement);
        }
    }

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function generePdf(Personnel $personnel, string $source, Departement $departement): void
    {
        $dir = 'upload/pdfedt/' . $departement->getId();
        Tools::checkDirectoryExist($this->dir . $dir);
        // todo: passer par le DTO Evenement, comme ca compatible avec celcat
        // todo: gérer l'année universitaire d'export
        if ('intranet' === $source) {
            $planning = $this->edtPlanningRepository->findEdtProf($personnel->getId(), $personnel->getAnneeUniversitaire());
            //supprimer l'ancien fichier
            if (file_exists($this->dir . $dir . '/' . $personnel->getId() . '-' . $personnel->getInitiales() . '.pdf')) {
                unlink($this->dir . $dir . '/' . $personnel->getId() . '-' . $personnel->getInitiales() . '.pdf');
            }


            $this->myPDF->pdf()::genereAndSavePdf('pdf/edt/planning.html.twig',
                [
                    'planning' => $planning,
                    'personnel' => $personnel,
                    'departement' => $departement,
                    'matieres' => $this->typeMatiereManager->findByDepartementArray($departement),
                ],
                $personnel->getId() . '-' . $personnel->getInitiales(),
                $dir);
        }
    }

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function exportSemestre(int $semaine, Semestre $semestre): void
    {
        $departement = $semestre->getDiplome()->getDepartement();
        if (null !== $departement && true === $departement->getOptUpdateCelcat()) {
            $edt = $this->celcatEventsRepository->findEdtSemestreSemaine($semestre, $semaine, $semestre->getAnneeUniversitaire());
        } else {
            $edt = $this->myEdtIntranet->initSemestre($semaine, $semestre, $semestre->getAnneeUniversitaire());
        }

        $this->myPDF->pdf()::addOptions(['landscape' => true, 'fontHeightRatio' => 0.8]);
        $this->myPDF->pdf()::generePdf('pdf/edt/edtSemestre.html.twig',
            ['edt' => $edt, 'semestre' => $semestre, 'departement' => $departement], $semestre->getLibelle());
    }

    public function compressDir(Departement $departement): string
    {
        $dir = $this->dir . 'pdfedt/' . $departement->getId() . '/';
        Tools::checkDirectoryExist($dir);
        $zip = new ZipArchive();
        $fileName = 'pdf-edt-' . date('YmdHis') . '.zip';
        // The name of the Zip documents.
        $zipName = $this->dir . $fileName;

        $zip->open($zipName, ZipArchive::CREATE);
        $tabFiles = [];

        // lecture du repertoire
        $repertoire = opendir($dir);
        while ($file = readdir($repertoire)) {
            if ('.' !== $file && '..' !== $file) {
                $tabFiles[] = $file;
                $zip->addFile($file,
                    'pdfEdt-' . $file . '.pdf');
            }
        }

        $zip->close();

        // suppression des PDF
        foreach ($tabFiles as $file) {
            unlink($file);
        }

        $response = new Response(file_get_contents($zipName));
        $response->headers->set('Content-Type', 'application/zip');
        $response->headers->set('Content-Disposition', 'attachment;filename="' . $zipName . '"');
        $response->headers->set('Content-length', filesize($zipName));

        return $fileName;
    }

    /**
     * @throws RuntimeError
     * @throws SyntaxError
     * @throws LoaderError
     */
    public function genereOneDocument(string $source, string $_format, Personnel $personnel, Departement $departement): void
    {
        $this->generePdf($personnel, $source, $departement);
    }

    public function getOneDoc(Personnel $personnel, Departement $departement): ?array
    {

        $folder = $this->dir . 'upload/pdfedt/' . $departement->getId() . '/';
        $dossier = opendir($folder);
        while ($fichier = readdir($dossier)) {
            if ('.' !== $fichier && '..' !== $fichier) {
                $id = explode('-', $fichier);

                if ((int)$id[0] === $personnel->getId()) {
                    return ['folder' => $folder,
                        'file' => $fichier,
                        'path' => $folder . $fichier,
                    ];
                }
            }
        }

        closedir($dossier);

        return null;
    }
}
