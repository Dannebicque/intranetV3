<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/QualiteController.php
// @author     David Annebicque
// @project intranetv3
// @date 28/11/2019 14:27
// @lastUpdate 28/11/2019 14:27

namespace App\Controller;

use App\Repository\QuizzQuestionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/qualite")
 */
class QualiteController extends AbstractController
{
    /**
     * @Route("/apercu", name="qualite_apercu")
     */
    public function apercu(KernelInterface $kernel, QuizzQuestionRepository $quizzQuestionRepository)
    {
//        $dir = $kernel->getProjectDir() . '/public/upload/qualite/';
////        $fichier = 'qualite.txt';
////        $file = fopen($dir.$fichier, 'r');
////        $tab = [];
////        while(!feof($file)){
////            $ligne = fgets($file, 1024);
////            $tab[] = $myQualiteQuestionnaire->traduitLigne(trim($ligne));
////        }
////
////
////        return $this->render('qualite/apercu.html.twig', [
////            'tab' => $tab
////        ]);
///
///
        return $this->render('qualite/apercu2.html.twig', [
            'questions' => $quizzQuestionRepository->findAll()
        ]);
    }
}
