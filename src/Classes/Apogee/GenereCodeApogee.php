<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Apogee/GenereCodeApogee.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/06/2021 10:28
 */

namespace App\Classes\Apogee;

use App\Entity\Diplome;
use App\Repository\ApcRessourceRepository;
use App\Repository\ApcSaeRepository;
use Doctrine\ORM\EntityManagerInterface;

class GenereCodeApogee
{
    private ?Diplome $diplome = null;

    public function __construct(protected EntityManagerInterface $entityManager, protected ApcRessourceRepository $apcRessourceRepository, protected ApcSaeRepository $apcSaeRepository)
    {
    }

    public function checkDiplome(string $arg1): bool
    {
        $this->diplome = $this->entityManager->getRepository(Diplome::class)->findOneBy([
            'sigle' => $arg1,
            'typeDiplome' => 4,
        ]);

        return null !== $this->diplome;
    }

    public function genereCodes(): bool
    {
        //annees
        $annees = $this->diplome->getAnnees();
        foreach ($annees as $annee) {
            $debut = substr($annee->getCodeEtape(), 1,
                4); //je récupère le code étape de l'année, et je retire le 5 et le nuéro.
            $semestres = $annee->getSemestres();
            foreach ($semestres as $semestre) {
                $semestre->setCodeElement($debut.$semestre->getOrdreLmd());

                $ues = $semestre->getUes();
                foreach ($ues as $ue) {
                    $ue->setCodeElement($debut.$semestre->getOrdreLmd().$ue->getNumeroUe());
                }

                $ressources = $this->apcRessourceRepository->findBySemestre($semestre);
                foreach ($ressources as $ressource) {
                    if (1 === (is_countable($ressource->getApcRessourceCompetences()) ? count($ressource->getApcRessourceCompetences()) : 0)) {
                        $ue = $ressource->getApcRessourceCompetences()[0]->getCompetence()->getCouleur();
                        $ressource->setCodeElement($debut.$semestre->getOrdreLmd().$ue[1].substr($ressource->getCodeMatiere(),
                                -2));
                    } else {
                        $ressource->setCodeElement($debut.$semestre->getOrdreLmd().'M'.substr($ressource->getCodeMatiere(),
                                -2));
                    }
                }

                $saes = $this->apcSaeRepository->findBySemestre($semestre);
                foreach ($saes as $sae) {
                    if (1 === (is_countable($sae->getApcSaeCompetences()) ? count($sae->getApcSaeCompetences()) : 0)) {
                        $ue = $sae->getApcSaeCompetences()[0]->getCompetence()->getCouleur();
                        $sae->setCodeElement($debut.$semestre->getOrdreLmd().$ue[1].((int) substr($sae->getCodeMatiere(),
                                    -2) + 50));
                    } else {
                        $sae->setCodeElement($debut.$semestre->getOrdreLmd().'M'.((int) substr($sae->getCodeMatiere(),
                                    -2) + 50));
                    }
                }
            }
        }
        $this->entityManager->flush();

        return true;
    }
}
