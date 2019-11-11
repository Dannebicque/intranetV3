<?php
/**
 * Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administratif/scolarite/ScolariteController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 11/11/2019 12:10
 * @lastUpdate 11/11/2019 12:10
 */

namespace App\Controller\administratif\scolarite;

use App\Entity\Diplome;
use App\Entity\Semestre;
use App\MesClasses\Excel\MyExcelRead;
use App\Repository\DiplomeRepository;
use App\Repository\SemestreRepository;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ScolariteController
 * @package App\Controller\administratif\scolarite
 * @Route("administratif/scolarite")
 */
class ScolariteController extends AbstractController
{
    /**
     * @Route("/", name="administratif_scolarite")
     */
    public function index(DiplomeRepository $diplomeRepository)
    {
        return $this->render('administratif/scolarite/index.html.twig', [
            'diplomes' => $diplomeRepository->findAll()
        ]);
    }

    /**
     * @Route("/diplome/{diplome}", name="administratif_scolarite_diplome")
     */
    public function diplomeShow(SemestreRepository $semestreRepository, Diplome $diplome)
    {
        return $this->render('administratif/scolarite/diplome.html.twig', [
            'diplome' => $diplome,
            'semestres' => $semestreRepository->findByDiplome($diplome)
        ]);
    }

    /**
     * @Route("/semestre/{semestre}", name="administratif_scolarite_semestre")
     */
    public function semestreShow(Semestre $semestre)
    {
        return $this->render('administratif/scolarite/semestre.html.twig', [
            'semestre' => $semestre,
        ]);
    }

    /**
     * @Route("/export-apogee/{semestre}", name="administratif_scolarite_semestre_export_apogee")
     */
    public function exportApogee(Semestre $semestre)
    {
        return $this->render('administratif/scolarite/export-apogee.html.twig', [

        ]);
    }

    /**
     * @param \Symfony\Component\HttpFoundation\Request $request
     * @param Semestre                                  $semestre
     * @param MyExcelRead                               $myExcelRead
     *
     * @throws Exception
     * @throws \PhpOffice\PhpSpreadsheet\Reader\Exception
     * @throws \PhpOffice\PhpSpreadsheet\Writer\Exception
     * @Route("/genere-apogee/{semestre}",
     *     name="administratif_scolarite_semestre_genere_apogee",
     *     methods={"POST"},
     *     requirements={"semestre":"\d+"})
     */
    public function genereFichierApogee(
        \Symfony\Component\HttpFoundation\Request $request,
        Semestre $semestre,
        MyExcelRead $myExcelRead
    ) {
        $file = $request->files->get('fichier');
        $originalName = $file->getClientOriginalName();
        $dir = $this->container->getParameter('kernel.root_dir') . '/../web/uploads/apogee';
        $file->move($dir, $originalName);

        $fichier = $dir . '/' . $originalName;
        $myExcelRead->readFile($fichier);

        $ligne = 18;

        /* récupère les étudiants */
        $tEtudiant = [];
        while ($myExcelRead->getCellColLigne(1, $ligne) != '') {
            $tEtudiant[$ligne] = trim($myExcelRead->getCellColLigne(0, $ligne));
            $ligne++;
        }

        /* récupère les modules */
        $tModule = [];
        $colonne = 4;
        while ($myExcelRead->getCellColLigne($colonne, 14) != '') {
            $val = explode('-', $myExcelRead->getCellColLigne($colonne, 14));
            $tModule[$colonne] = trim($val[0]);
            $colonne += 2; //3 si colonne résultat
        }

        $sousComm = $this->getDoctrine()->getRepository('DAKernelBundle:Scscommission')->findBy(['semestre' => $semestre->getId()]); //todo: si plusieurs ?
        $scModule = $this->getDoctrine()->getRepository('DAKernelBundle:ScEtudiantModule')->findBy(['sc' => $sousComm[0]->getId()]);

        $tEtu = [];
        foreach ($scModule as $sc) {
            $tEtu[$sc->getEtudiant()->getNumetudiant()][$sc->getMatiere()->getCodeapogee()] = $sc->getMoyenne();
        }

        foreach ($tEtudiant as $keyTe => $valueTe) {
            foreach ($tModule as $keyTm => $valueTm) {
                if (array_key_exists($valueTe, $tEtu) && array_key_exists($valueTm, $tEtu[$valueTe])) {
                    $myExcelRead->writeCellColLigne($keyTm, $keyTe, number_format($tEtu[$valueTe][$valueTm], 2));
                    $myExcelRead->writeCellColLigne($keyTm + 1, $keyTe, 20);
                }
            }

        }

        //EXPORT
        unlink($fichier);
        $myExcelRead->sauvegarde($dir . '/temp.xls');

        $nom = explode('.', basename($fichier));
        $this->transformeApogeeTexte($dir . '/temp.xls', $nom[0]);

        unlink($dir . '/temp.xls');
        exit();
    }
}
