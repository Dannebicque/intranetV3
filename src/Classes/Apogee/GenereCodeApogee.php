<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Apogee/GenereCodeApogee.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/05/2021 22:26
 */

namespace App\Classes\Apogee;

use App\Entity\ApcRessource;
use App\Entity\ApcSae;
use App\Entity\Diplome;
use Doctrine\ORM\EntityManagerInterface;

class GenereCodeApogee
{
    protected EntityManagerInterface $entityManager;
    private ?Diplome $diplome;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function checkDiplome(string $arg1)
    {
        $this->diplome = $this->entityManager->getRepository(Diplome::class)->findOneBy([
            'sigle' => $arg1,
            'typeDiplome' => 4,
        ]);

        if (null === $this->diplome) {
            return false;
        }
    }

    public function genereCodes($lettrediplome, $lettredomaine)
    {
        $debut = 'T' . strtoupper($lettredomaine . $lettrediplome . 'X');
        //Diplôme
//        $this->diplome->setCodeDiplome('5'.$debut);
//        $this->diplome->setCodeEtape('');
//        $this->diplome->setCodeVersion('111');
//        $this->diplome->setCodeDepartement('985');

        //annees
        $annees = $this->diplome->getAnnees();
        foreach ($annees as $annee) {
//            $annee->setCodeEtape('5'.$debut.$annee->getOrdre());
//            $annee->setCodeVersion('111');
//            $annee->setCodeDepartement('985');

            $semestres = $annee->getSemestres();
            foreach ($semestres as $semestre) {
                $semestre->setCodeElement($debut . $semestre->getOrdreLmd());

                $ues = $semestre->getUes();
                foreach ($ues as $ue) {
                    $ue->setCodeElement($debut . $semestre->getOrdreLmd() . $ue->getNumeroUe());
                }

                $ressources = $this->entityManager->getRepository(ApcRessource::class)->findBySemestre($semestre);
                foreach ($ressources as $ressource) {
                    if (1 === count($ressource->getApcRessourceCompetences())) {
                        $ue = $ressource->getApcRessourceCompetences()[0]->getCompetence()->getCouleur();
                        $ressource->setCodeElement($debut . $semestre->getOrdreLmd() . $ue[1] . substr($ressource->getCodeMatiere(),
                                -2));
                    } else {
                        $ressource->setCodeElement($debut . $semestre->getOrdreLmd() . 'M' . substr($ressource->getCodeMatiere(),
                                -2));
                    }
                }

                $saes = $this->entityManager->getRepository(ApcSae::class)->findBySemestre($semestre);
                foreach ($saes as $sae) {
                    if (1 === count($ressource->getApcRessourceCompetences())) {
                        $ue = $sae->getApcSaeCompetences()[0]->getCompetence()->getCouleur();
                        $sae->setCodeElement($debut . $semestre->getOrdreLmd() . $ue[1] . ((int)substr($sae->getCodeMatiere(),
                                    -2) + 50));
                    } else {
                        $sae->setCodeElement($debut . $semestre->getOrdreLmd() . 'M' . ((int)substr($sae->getCodeMatiere(),
                                    -2) + 50));
                    }
                }
            }
        }
        $this->entityManager->flush();

        return true;
    }
}
