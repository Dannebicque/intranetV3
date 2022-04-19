<?php

namespace App\Controller;

use App\Exception\DiplomeNotFoundException;
use App\Repository\DiplomeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class StructureDiplomeController extends AbstractController
{
    #[Route('/structure/diplome/affiche', name: 'structure_diplome_affiche')]
    public function index(
        DiplomeRepository $diplomeRepository,
        Request $request
    ): Response {
        $idDiplome = $request->query->get('diplome');
        $diplome = $diplomeRepository->find($idDiplome);

        if (null === $diplome) {
            throw new DiplomeNotFoundException();
        }

        return $this->render('structure_diplome/affiche.html.twig', [
            'diplome' => $diplome,
        ]);
    }
}
