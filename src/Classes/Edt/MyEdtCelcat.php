<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Edt/MyEdtCelcat.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/09/2022 12:59
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Edt;

use App\DTO\EvenementEdt;
use App\Entity\Annee;
use App\Entity\AnneeUniversitaire;
use App\Entity\CelcatEvent;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Groupe;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Repository\CalendrierRepository;
use App\Repository\EdtCelcatRepository;
use App\Repository\GroupeRepository;
use function array_key_exists;

class MyEdtCelcat extends BaseEdt
{
    /**
     * @var \App\Entity\AnneeUniversitaire
     */
    protected AnneeUniversitaire $anneeUniversitaire;
    private ?Annee $annee = null;

    private array $matieres;

    public function __construct(
        CalendrierRepository $celcatCalendrierRepository,
        protected EdtCelcatRepository $celcatEventsRepository,
        private readonly GroupeRepository $groupeRepository
    ) {
        parent::__construct($celcatCalendrierRepository);
    }

    public function initPersonnel(
        Personnel $personnel,
        AnneeUniversitaire $anneeUniversitaire,
        int $semaine = 0,
        array $matieres = []
    ): self {
        $this->user = $personnel;
        $this->matieres = $matieres;
        $this->init($anneeUniversitaire, 'prof', $personnel->getId(), $semaine);
        $this->semaines = $this->calculSemaines();
        $this->calculEdt();

        return $this;
    }

    public function initEtudiant(
        Etudiant $etudiant,
        AnneeUniversitaire $anneeUniversitaire,
        int $semaine = 0,
        array $matieres = []
    ): self {
        $this->anneeUniversitaire = $anneeUniversitaire;
        $this->matieres = $matieres; // todo: vériifer que pas vide
        $this->user = $etudiant;
        $this->init($anneeUniversitaire, 'etudiant', $etudiant->getId(), $semaine);
        $this->calculEdt();

        return $this;
    }

    public function initAdministration(): self
    {
        return $this;
    }

    public function calculEdt(): bool
    {
        switch ($this->filtre) {
            case Constantes::FILTRE_EDT_PROMO:
                $this->groupes = $this->groupeRepository->findAllGroupes($this->semestre);
                $pl = $this->celcatEventsRepository->findEdtSemestre($this->semestre, $this->semaineFormationIUT, $this->anneeUniversitaire);
                $this->planning = $this->transformePromo($pl);
                break;
            case Constantes::FILTRE_EDT_PROF:
                $pl = $this->celcatEventsRepository->findEdtProf($this->user,
                    $this->semaineFormationIUT, $this->anneeUniversitaire);
                $this->planning = $this->transformeIndividuel($pl);
                break;
            case Constantes::FILTRE_EDT_ETUDIANT:
                $pl = $this->celcatEventsRepository->findEdtEtu($this->user, $this->semaineFormationIUT, $this->anneeUniversitaire);
                if (null !== $pl) {
                    $this->planning = $this->transformeIndividuel($pl);
                } else {
                    return false;
                }
                break;
        }

        return false;
    }

    public function transformePromo(array $pl): array
    {
        $gr = [];
        $groupes = $this->groupeRepository->getGroupesTP($this->semestre);

        /** @var Groupe $groupe */
        foreach ($groupes as $groupe) {
            $gr[$groupe->getCodeapogee()] = $groupe->getOrdre();
        }

        $tab = [];
        /** @var CelcatEvent $p */
        foreach ($pl as $p) {
            // todo: passer par le DTO???
            if (array_key_exists($p->getCodeGroupe(), $gr)) {
                $groupe = $gr[$p->getCodeGroupe()];
                $jour = $p->getJour() + 1;
                $dbtEdt = $p->getDebut();

                $tab[$jour][$dbtEdt][$groupe]['duree'] = $p->getFin()->sub($p->getDebut());

                $tab[$jour][$dbtEdt][$groupe]['couleur'] = $this->getCouleur($p);
                $tab[$jour][$dbtEdt][$groupe]['couleurTexte'] = $this->annee->getCouleurTexte(); // todo: le code est dans le semestre...

                $tab[$jour][$dbtEdt][$groupe]['largeur'] = match ($p->getType()) {
                    'CM', 'cm' => $this->semestre->getNbgroupeTPEDT(),
                    'TP', 'tp' => 1,
                    'TD', 'td' => 2,
                };

                $groupefin = $groupe + $tab[$jour][$dbtEdt][$groupe]['largeur'];
                $fin = $p->getFin();
                for ($i = $dbtEdt; $i < $fin; ++$i) {
                    for ($j = $groupe; $j < $groupefin; ++$j) {
                        $tab[$jour][$i][$j]['texte'] = 'xx';
                    }
                }

                $tab[$jour][$dbtEdt][$groupe]['texte'] = $p->getLibModule().'<br />'.$p->getLibSalle().'<br />'.$p->getLibPersonnel().' |  '.$p->getType().' |  '.$p->getLibGroupe();
            }
        }

        return $tab;
    }

    private function transformeIndividuel(array $pl): array
    {
        // prof ou étudiant
        $tab = [];

        /** @var CelcatEvent $p */
        foreach ($pl as $p) {
            // todo: passer en partie par le manager ?
            $evt = new EvenementEdt();
            $evt->source = EdtManager::EDT_CELCAT;
            $evt->id = $p->getId();
            $evt->jour = $p->getJour() + 1;
            $evt->heureDebut = $p->getDebut();
            $evt->heureFin = $p->getFin();
            $evt->dateObjet = $p->getDateCours();
            $evt->matiere = $p->getLibModule();
            $evt->salle = $p->getLibSalle();
            $evt->personnel = $p->getLibPersonnel();
            $evt->groupe = $p->getLibGroupe();
            $evt->typeIdMatiere = $this->getTypeIdMatiere($p);
            $evt->type_cours = $p->getType();
            $evt->codeelement = $p->getCodeModule();
            $evt->couleur = $p->getSemestre()?->getAnnee()?->getCouleur();
            $evt->gridStart = $p->getDebut()?->format('Hi');
            $evt->gridEnd = $p->getFin()?->format('Hi');
            $evt->ordreSemestre = $p->getSemestre()?->getOrdreLmd();
            $evt->diplome = $p->getSemestre()?->getDiplome();

            $dbtEdt = Constantes::TAB_HEURES_EDT_LIGNE_2[$p->getDebut()->format('Hi')];
            $tab[$evt->jour][$dbtEdt] = $evt;
        }

        return $tab;
    }

    public function initSemestre(int $semaine, Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): self
    {
        $this->semestre = $semestre;
        $this->init($anneeUniversitaire, 'promo', $semestre->getId(), $semaine);
        $this->semaines = $this->calculSemaines();
        $this->calculEdt();

        return $this;
    }

    private function getTypeIdMatiere(CelcatEvent $p)
    {
        if (array_key_exists($p->getCodeModule(), $this->matieres)) {
            return $this->matieres[$p->getCodeModule()]->getTypeIdMatiere();
        }

        return null;
    }
}
