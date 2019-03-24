<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 24/12/2018
 * Time: 16:21
 */

namespace App\MesClasses;


use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Matiere;
use App\Entity\Semestre;
use App\Entity\Ue;
use App\MesClasses\Model\MoyenneMatiereEtudiant;
use App\MesClasses\Model\MoyennesSemestreEtudiant;
use App\MesClasses\Model\MoyenneUeEtudiant;
use App\MesClasses\Model\ParcoursEtudiant;

class MyEtudiantSousCommission
{
    /** @var Etudiant */
    private $etudiant;

    /** @var Semestre */
    private $semestre;

    /** @var MoyenneMatiereEtudiant[] */
    private $moyenneMatieres = [];

    /** @var MoyenneUeEtudiant[] */
    private $moyenneUes = [];

    /** @var MoyennesSemestreEtudiant */
    private $moyenneSemestre;

    private $absencesStyle = '';

    private $absences = 0;

    /** @var ParcoursEtudiant[] */
    private $parcours = [];

    /** @var */
    private $notes = [];

    /**
     * MyEtudiantSousCommission constructor.
     *
     * @param Etudiant $etudiant
     * @param Semestre $semestre
     * @param          $matieres
     * @param          $notes
     */
    public function __construct(Etudiant $etudiant, Semestre $semestre, $matieres, $notes)
    {
        $this->etudiant = $etudiant;
        $this->semestre = $semestre;
        $this->notes = $notes;

        /** @var Matiere $matiere */
        foreach ($matieres as $matiere) {
            if ($matiere->getSuspendu() === false) {
                $matId = $matiere->getId();
                if (array_key_exists($matId, $this->notes)) {
                    $this->moyenneMatieres[$matId] = new MoyenneMatiereEtudiant($etudiant, $matiere,
                        $this->notes[$matId]);
                } else {
                    $this->moyenneMatieres[$matId] = new MoyenneMatiereEtudiant($etudiant, $matiere, []);
                }
            }
        }

        /** @var Ue $ue */
        foreach ($semestre->getUes() as $ue) {
            $this->moyenneUes[$ue->getId()] = new MoyenneUeEtudiant($etudiant, $ue, $matieres, $this->moyenneMatieres);

        }

        $this->moyenneSemestre = new MoyennesSemestreEtudiant($etudiant, $semestre);

        if ($semestre->getDiplome()->getOptMethodeCalcul() == Constantes::MOYENNE_MODULES) {
            $this->moyenneSemestre->calculMoyenneModules($this->moyenneMatieres, $matieres);
        } elseif ($semestre->getDiplome()->getOptMethodeCalcul() == Constantes::MOYENNE_UES) {
            $this->moyenneSemestre->calculMoyenneUes($this->moyenneUes, $semestre->getUes());
        } else {
            //erreur
        }

        $semprec = $semestre->getPrecedent();

        while ($semprec !== null) {
            $this->parcours[$semprec->getOrdreLmd()] = new ParcoursEtudiant($etudiant, $semprec);
            $semprec = $semprec->getPrecedent();
        }

        /* Après avoir calculé les parcours, on calcul le semestre */
        $this->moyenneSemestre->calculDecision($this->parcours);
    }

    /**
     * @return MoyenneMatiereEtudiant[]
     */
    public function getMoyenneMatieres(): array
    {
        return $this->moyenneMatieres;
    }


    /**
     * @return MoyenneUeEtudiant[]
     */
    public function getMoyenneUes(): array
    {
        return $this->moyenneUes;
    }

    /**
     * @return MoyennesSemestreEtudiant
     */
    public function getMoyenneSemestre(): MoyennesSemestreEtudiant
    {
        return $this->moyenneSemestre;
    }

    /**
     * @return string
     */
    public function getAbsencesStyle(): string
    {
        return $this->absencesStyle;
    }

    /**
     * @return int
     */
    public function getAbsences(): int
    {
        return $this->absences;
    }

    /**
     * @return ParcoursEtudiant[]
     */
    public function getParcours(): array
    {
        return $this->parcours;
    }
}
