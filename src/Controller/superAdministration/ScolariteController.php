<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/ScolariteController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:33

namespace App\Controller\superAdministration;

use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Classes\Excel\MyExcelRead;
use App\Repository\DiplomeRepository;
use App\Repository\SemestreRepository;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ScolariteController
 * @package App\Controller\administratif\scolarite
 * @Route("/administratif/scolarite")
 */
class ScolariteController extends AbstractController
{
    /**
     * @Route("/", name="sa_scolarite_index")
     * @param DiplomeRepository $diplomeRepository
     *
     * @return Response
     */
    public function index(DiplomeRepository $diplomeRepository): Response
    {
        return $this->render('super-administration/scolarite/index.html.twig', [
            'diplomes' => $diplomeRepository->findAll()
        ]);
    }

    /**
     * @Route("/diplome/{diplome}", name="sa_scolarite_diplome")
     * @param SemestreRepository $semestreRepository
     * @param Diplome            $diplome
     *
     * @return Response
     */
    public function diplomeShow(SemestreRepository $semestreRepository, Diplome $diplome): Response
    {
        return $this->render('super-administration/scolarite/diplome.html.twig', [
            'diplome' => $diplome,
            'semestres' => $semestreRepository->findByDiplome($diplome)
        ]);
    }

    /**
     * @Route("/semestre/{semestre}", name="sa_scolarite_semestre")
     * @param Semestre $semestre
     *
     * @return Response
     */
    public function semestreShow(Semestre $semestre): Response
    {
        return $this->render('super-administration/scolarite/semestre.html.twig', [
            'semestre' => $semestre,
        ]);
    }

    /**
     * @Route("/export-apogee/{semestre}", name="sa_scolarite_semestre_export_apogee")
     * @param Semestre $semestre
     *
     * @return Response
     */
    public function exportApogee(Semestre $semestre): Response
    {
        return $this->render('super-administration/scolarite/export-apogee.html.twig', [

        ]);
    }

    /**
     * @param Request     $request
     * @param Semestre    $semestre
     * @param MyExcelRead $myExcelRead
     *
     * @throws Exception
     * @throws \PhpOffice\PhpSpreadsheet\Reader\Exception
     * @throws \PhpOffice\PhpSpreadsheet\Writer\Exception
     * @Route("/genere-apogee/{semestre}",
     *     name="sa_scolarite_semestre_genere_apogee",
     *     methods={"POST"},
     *     requirements={"semestre":"\d+"})
     */
    public function genereFichierApogee(
        Request $request,
        Semestre $semestre,
        MyExcelRead $myExcelRead
    ): void {
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
