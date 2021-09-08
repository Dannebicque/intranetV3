<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Structure/ApogeeImport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/09/2021 21:42
 */

namespace App\Classes\Structure;

use App\Classes\Apogee\Apogee;
use App\Classes\Matieres\TypeMatiereManager;
use App\Entity\Semestre;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class ApogeeImport extends Apogee
{


    private EntityManagerInterface $entityManager;
    private typeMatiereManager $typeMatiereManager;

    public function __construct(
        ParameterBagInterface $parameterBag,
        EntityManagerInterface $entityManager,
        typeMatiereManager $typeMatiereManager
    ) {
        parent::__construct($parameterBag);
        $this->entityManager = $entityManager;
        $this->typeMatiereManager = $typeMatiereManager;
    }

//SELECT ELEMENT_PEDAGOGI.COD_ELP, ELEMENT_PEDAGOGI.LIB_ELP, ELEMENT_PEDAGOGI.LIC_ELP, ELEMENT_PEDAGOGI.COD_NEL, ELP_CHG_TYP_HEU.COD_TYP_HEU, ELP_CHG_TYP_HEU.NBR_HEU_ELP FROM ELP_REGROUPE_ELP  INNER JOIN ELEMENT_PEDAGOGI ON ELP_REGROUPE_ELP.COD_ELP_FILS=ELEMENT_PEDAGOGI.COD_ELP INNER JOIN ELP_CHG_TYP_HEU ON ELP_CHG_TYP_HEU.COD_ELP=ELEMENT_PEDAGOGI.COD_ELP WHERE COD_LSE='L5RV1S' and ELP_REGROUPE_ELP.COD_ELP_PERE IS NULL;

//
//        SELECT * FROM VET_REGROUPE_LSE WHERE COD_ETP='RD102'; COD_ETP => annéee...

    public function createSemestre(Semestre $semestre)
    {
        //récupérer un PN ???
        $this->connect();
        $stid = $this->conn->prepare(
            "SELECT COD_ELP, COD_LSE FROM ELP_REGROUPE_LSE WHERE COD_ELP=:codesemestre");
        $stid->execute([':codesemestre' => $semestre->getCodeElement()]);

        while ($row = $stid->fetch()) {
            //pour chaque liste (logiquement 1 seule)
            $stidListe = $this->conn->prepare(
                'SELECT ELEMENT_PEDAGOGI.COD_ELP, ELEMENT_PEDAGOGI.LIB_ELP, ELEMENT_PEDAGOGI.LIC_ELP, ELEMENT_PEDAGOGI.COD_NEL, ELP_CHG_TYP_HEU.COD_TYP_HEU, ELP_CHG_TYP_HEU.NBR_HEU_ELP FROM ELP_REGROUPE_ELP  INNER JOIN ELEMENT_PEDAGOGI ON ELP_REGROUPE_ELP.COD_ELP_FILS=ELEMENT_PEDAGOGI.COD_ELP INNER JOIN ELP_CHG_TYP_HEU ON ELP_CHG_TYP_HEU.COD_ELP=ELEMENT_PEDAGOGI.COD_ELP WHERE COD_LSE=:codeliste and ELP_REGROUPE_ELP.COD_ELP_PERE IS NULL');
            $stidListe->execute([':codeliste' => $row['COD_LSE']]);

            return $stidListe;
//            while ($elp = $stidListe->fetch()) {
//                dump($elp);
//                //création de la matière...
//                if (substr($elp['COD_ELP'], 1, 1) === 'R') {
//                    //ressource
//
//                } elseif (substr($elp['COD_ELP'], 1, 1) === 'S') {
//                    //Sae
//                }
//            }
        }


//        //récupérer la liste du semestre
//        SELECT COD_ELP, COD_LSE FROM ELP_REGROUPE_LSE WHERE COD_ELP='RD102';
//        //récupèrer les matières de la liste
//        SELECT ELEMENT_PEDAGOGI.COD_ELP, ELEMENT_PEDAGOGI.LIB_ELP, ELEMENT_PEDAGOGI.LIC_ELP, ELEMENT_PEDAGOGI.COD_NEL, ELP_CHG_TYP_HEU.COD_TYP_HEU, ELP_CHG_TYP_HEU.NBR_HEU_ELP FROM ELP_REGROUPE_ELP  INNER JOIN ELEMENT_PEDAGOGI ON ELP_REGROUPE_ELP.COD_ELP_FILS=ELEMENT_PEDAGOGI.COD_ELP INNER JOIN ELP_CHG_TYP_HEU ON ELP_CHG_TYP_HEU.COD_ELP=ELEMENT_PEDAGOGI.COD_ELP WHERE COD_LSE='L5RV1S' and ELP_REGROUPE_ELP.COD_ELP_PERE IS NULL;
    }

    public function createUes($apoUes)
    {
    }

    public function createMatiere($apoMatieres)
    {
    }
}
