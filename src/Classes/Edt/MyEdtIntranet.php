<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Edt/MyEdtIntranet.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/09/2024 11:53
 */

namespace App\Classes\Edt;

use App\Classes\Matieres\TypeMatiereManager;
use App\DTO\EvenementEdt;
use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
use App\Entity\EdtPlanning;
use App\Entity\Etudiant;
use App\Entity\Groupe;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Enums\TypeGroupeEnum;
use App\Exception\MatiereNotFoundException;
use App\Repository\CalendrierRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\GroupeRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Carbon\Carbon;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Component\HttpFoundation\Request;
use function array_key_exists;
use function chr;
use function count;

class MyEdtIntranet extends BaseEdt
{
    protected ?AnneeUniversitaire $anneeUniversitaire = null;
    protected ?string $couleur = '';
    private array $tab = [];
    private array $matieres = [];
    private array $tabCouleur = [];

    /**
     * MyEdt constructor.
     */
    public function __construct(
        CalendrierRepository $celcatCalendrierRepository,
        protected EdtPlanningRepository $edtPlanningRepository,
        private readonly SemestreRepository $semestreRepository,
        private readonly GroupeRepository $groupeRepository,
        private readonly TypeMatiereManager $typeMatiereManager,
        private readonly PersonnelRepository $personnelRepository,
        private readonly EntityManagerInterface $entityManager
    ) {
        parent::__construct($celcatCalendrierRepository);
    }

    public function initPersonnel(
        Personnel $personnel,
        AnneeUniversitaire $anneeUniversitaire,
        int $semaine = 0,
        array $matieres = []
    ): self {
        $this->matieres = $matieres;
        $this->anneeUniversitaire = $anneeUniversitaire;
        $this->user = $personnel;
        $this->init($anneeUniversitaire, Constantes::FILTRE_EDT_PROF, $personnel->getId(), $semaine);
        $this->semaines = $this->calculSemaines();
        $this->calculEdt(); // todo: pour des datas en BDD sans scelcat. Ajouter test. Devrait permettre de récupérer les EDT des deux tables... et fusionner. Pour ensuite un affichage. On se moque de savoir qui est où...

        return $this;
    }

    public function initEtudiant(
        Etudiant $etudiant,
        AnneeUniversitaire $anneeUniversitaire,
        int $semaine = 0
    ): self {
        $this->user = $etudiant;
        $this->anneeUniversitaire = $anneeUniversitaire;
        $this->init($anneeUniversitaire, Constantes::FILTRE_EDT_ETUDIANT, $etudiant->getId(), $semaine);
        $this->calculEdt();

        return $this;
    }

    public function calculEdt(): bool
    {
        switch ($this->filtre) {
            case Constantes::FILTRE_EDT_PROMO:
                $this->semestre = $this->semestreRepository->find($this->valeur);
                $this->groupes = $this->groupeRepository->findAllGroupesOrdreSemestre($this->semestre);

                $pl = $this->edtPlanningRepository->findEdtSemestre($this->semestre, $this->semaineFormationIUT,
                    $this->anneeUniversitaire);

                $this->planning = $this->transformePromo($pl);
                break;
            case Constantes::FILTRE_EDT_PROF:
                $pl = $this->edtPlanningRepository->findEdtProf($this->valeur, $this->anneeUniversitaire,
                    $this->semaineFormationIUT);
                $this->planning = $this->transformeIndividuel($pl);
                break;
            case Constantes::FILTRE_EDT_ETUDIANT:
                $this->groupes();
                $pl = $this->edtPlanningRepository->findEdtEtu($this->user, $this->semaineFormationIUT,
                    $this->anneeUniversitaire);
                if (null !== $this->user->getSemestre() && ($this->user->getSemestre()->getOrdreLmd() === 3 || $this->user->getSemestre()->getOrdreLmd() === 5)) {
                    $pl2 = $this->edtPlanningRepository->findEdtEtuCmFi($this->user, $this->semaineFormationIUT,
                        $this->anneeUniversitaire);
                    if ($pl2 !== null) {
                        $pl = array_merge($pl, $pl2);
                    }
                }

                if (null !== $pl) {
                    $this->semestre = $this->user->getSemestre();
                    $this->planning = $this->transformeEtudiant($pl, $this->semestre->getAnnee()->getCouleur());
                } else {
                    return false;
                }
                break;
            case Constantes::FILTRE_EDT_MODULE:
                $this->module = $this->typeMatiereManager->getMatiereFromSelect($this->valeur);
                $this->semestre = $this->module->getSemestres()->first(); // todo: pas idéal, comment récupérer le semestre du module ? En fait ne doit pas dépendre du semestre... si un module est sur plusieurs semestres.
                $this->groupes = $this->groupeRepository->findAllGroupes($this->semestre);

                $pl = $this->edtPlanningRepository->findEdtModule($this->module->id, $this->module->typeMatiere,
                    $this->semaineFormationIUT, $this->anneeUniversitaire);
                $this->planning = $this->transformeModule($pl);
                break;
            case Constantes::FILTRE_EDT_SALLE:
                $pl = $this->edtPlanningRepository->findEdtSalle($this->valeur, $this->semaineFormationIUT,
                    $this->anneeUniversitaire);
                $this->salle = $this->valeur;
                $this->planning = $this->transformeSalle($pl);
                break;

            case Constantes::FILTRE_EDT_JOUR:
                $pl = $this->edtPlanningRepository->findEdtJour($this->valeur,
                    $this->semaineFormationIUT, $this->anneeUniversitaire);

                $this->jour = $this->valeur;
                $this->planning = $this->transformeJour($pl);
                break;
        }

        return false;
    }

    public function initAdministration(
        $departement,
        $semaine,
        $filtre,
        $valeur,
        AnneeUniversitaire $anneeUniversitaire,
        array $matieres
    ): self {
        $this->anneeUniversitaire = $anneeUniversitaire;
        $semestres = $this->semestreRepository->findByDepartement($departement);
        if (('' === $valeur) && (is_countable($semestres) ? count($semestres) : 0) > 0) {
            $valeur = $semestres[0]->getId();
        }

        foreach ($semestres as $semestre) {
            $this->tabCouleur[$semestre->getOrdreLmd()] = $semestre->getAnnee()->getCouleur();
        }
        $this->matieres = $matieres;

        $this->init($anneeUniversitaire, $filtre, $valeur, $semaine);

        $this->semaines = $this->calculSemaines();

        $this->calculEdt();

        return $this;
    }

    private function transformeIndividuel(array $pl): array
    {
        // prof ou étudiant
        $tab = [];

        /** @var EdtPlanning $p */
        foreach ($pl as $p) {
            $evt = new EvenementEdt();
            // todo: utiliser le manager?? => En fait la requete doit être via le manager... Du coup un seul fichier EDT???
            $evt->source = EdtManager::EDT_INTRANET;
            $evt->id = $p->getId();
            $evt->jour = $p->getJour();
            $evt->heureDebut = Carbon::createFromTimeString($p->getDebutTexte());
            $evt->heureFin = Carbon::createFromTimeString($p->getFinTexte());

            $evt->salle = $p->getSalle();
            $evt->personnel = $p->getIntervenant()?->getDisplay();
            $evt->groupe = $p->getDisplayGroupe();
            $evt->typeIdMatiere = $p->getTypeIdMatiere();
            $evt->type_cours = $p->getType();
            $evt->ordreSemestre = $p->getOrdreSemestre();

            $evt->gridStart = Constantes::TAB_HEURES_EDT_2[$p->getDebut() - 1][0];
            $evt->gridEnd = Constantes::TAB_HEURES_EDT_2[$p->getFin() - 1][0];

            $evt = $this->getDonneesFromModule($p, $evt);
            $dbtEdt = $p->getDebut() - 1;
            $tab[$evt->jour][$dbtEdt] = $evt;
        }

        return $tab;
    }

    private function getDonneesFromModule(EdtPlanning $p, EvenementEdt $evt): EvenementEdt
    {
        // todo: utuliser un transformer/adapter ? et ne plus dépenedre de EdtPlanning
        if (array_key_exists($p->getTypeIdMatiere(), $this->matieres)) {
            $matiere = $this->matieres[$p->getTypeIdMatiere()];

            if (null !== $matiere) {
                $evt->matiere = $matiere->display;
                $evt->semestre = $p->getSemestre();
                $evt->ordreSemestre = $p->getOrdreSemestre();
                $annee = $matiere->getSemestres()->first()->getAnnee();
                if (null !== $annee) {
                    $evt->couleur = $annee->getCouleur();
                }
            }
        }

        return $evt;
    }

    private function transformeEtudiant($pl, string $couleur): array
    {
        $this->tab = [];
        $this->groupes();
        $this->couleur = $couleur;

        /** @var EdtPlanning $p */
        foreach ($pl as $p) {
            if ((TypeGroupeEnum::TYPE_GROUPE_CM->value === $p->getType()) || (TypeGroupeEnum::TYPE_GROUPE_TD->value === $p->getType() && $p->getGroupe() === $this->groupetd) || (TypeGroupeEnum::TYPE_GROUPE_TP->value === $p->getType() && $p->getGroupe() === $this->groupetp)) {
                $dbtEdt = $this->convertEdt($p->getDebut());

                if (!array_key_exists($p->getJour(), $this->tab)) {
                    $this->tab[$p->getJour()] = [];
                }

                if (array_key_exists($dbtEdt, $this->tab[$p->getJour()])) {
                    // le créneau est déjà utilisé on utilise le suivant
                    ++$dbtEdt;
                }

                $debut = $p->getDebut();
                $this->tab[$p->getJour()][$dbtEdt] = [];
                $this->tab[$p->getJour()][$dbtEdt]['duree'] = $p->getFin() - $debut;
                $this->tab[$p->getJour()][$dbtEdt]['fin'] = $p->getFin();

                $this->tab[$p->getJour()][$dbtEdt]['texte'] = $this->isEvaluation($p,
                        'long').'<br />'.$p->getSalle().' | '.$p->getDisplayGroupe().' <br /> '.$p->getIntervenantEdt();

                $this->tab[$p->getJour()][$dbtEdt]['couleur'] = $this->getCouleur($p);
                $this->tab[$p->getJour()][$dbtEdt]['id'] = $p->getId();
                $this->tab[$p->getJour()][$dbtEdt]['couleurTexte'] = $this->getCouleurTexte($p);
                $this->tab[$p->getJour()][$dbtEdt]['commentaire'] = $this->hasCommentaire($p);

                $this->valideFormat($p, $dbtEdt);
            }
        }

        return $this->tab;
    }

    private function transformePromo($pl): array
    {
        $tab = [];
        /** @var EdtPlanning $p */
        foreach ($pl as $p) {
            $debut = $p->getDebut();
            $fin = $p->getFin();

            if ($p->getGroupe() > 40) {
                $groupe = $p->getGroupe() - 40;
                $specialGroupe = true;
            } else {
                $groupe = $p->getGroupe();
                $specialGroupe = false;
            }

            $tab[$p->getJour()][$debut][$groupe]['duree'] = $fin - $debut;

            $tab[$p->getJour()][$debut][$groupe]['couleur'] = $this->getCouleur($p);
            $tab[$p->getJour()][$debut][$groupe]['couleurTexte'] = $this->getCouleurTexte($p);
            $tab[$p->getJour()][$debut][$groupe]['planning'] = $p;
            $taille = 0;
            switch ($p->getType()) {
                case 'CM':
                case 'cm':
                    $tab[$p->getJour()][$debut][$groupe]['largeur'] = $this->semestre->getNbgroupeTPEDT();
                    break;
                case 'TP':
                case 'tp':
                    $tab[$p->getJour()][$debut][$groupe]['largeur'] = 1;
                    $taille = 4;
                    break;
                case 'TD':
                case 'td':
                    $tab[$p->getJour()][$debut][$groupe]['largeur'] = 2;
                    $taille = 12;
                    break;
            }

            if ($specialGroupe) {
                $tab[$p->getJour()][$debut][$groupe]['largeur'] = 4;
            }

            $groupefin = $groupe + $tab[$p->getJour()][$debut][$groupe]['largeur'];
            for ($i = $debut; $i < $fin; ++$i) {
                for ($j = $groupe; $j < $groupefin; ++$j) {
                    $tab[$p->getJour()][$i][$j]['texte'] = 'xx';
                }
            }

            if (null === $p->getIntervenant()) {
                $inter = '';
            } elseif (0 === $taille) {
                $inter = $p->getIntervenant()->getNom();
            } else {
                $inter = mb_substr($p->getIntervenant()->getNom(), 0, $taille);
            }

            $tab[$p->getJour()][$debut][$groupe]['texte'] = $this->isEvaluation($p).'<br />'.$p->getSalle().'<br />'.$inter.'<br />'.$p->getDisplayGroupe();
            $tab[$p->getJour()][$debut][$groupe]['commentaire'] = $this->hasCommentaire($p);
        }

        return $tab;
    }

    private function getCouleur(EdtPlanning $p): ?string
    {
        if (array_key_exists($p->getOrdreSemestre(), $this->tabCouleur)) {
            $couleur = $this->tabCouleur[$p->getOrdreSemestre()];
        } else {
            $couleur = $this->couleur;
        }

        return match (mb_strtolower($p->getType())) {
            'cm', 'td', 'tp' => mb_strtolower($p->getType()).'_'.$couleur, // todo: passer par DTO...
            default => 'CCCCCC',
        };
    }

    private function getCouleurTexte(EdtPlanning $p): string
    {
        if (array_key_exists($p->getOrdreSemestre(), $this->tabCouleur)) {
            $couleur = $this->tabCouleur[$p->getOrdreSemestre()];
        } else {
            $couleur = $this->couleur;
        }

        return match ($couleur) {// todo: passer par DTO...
            'pink', 'red', 'orange' => 'black',
            default => 'white',
        };
    }

    private function isEvaluation(EdtPlanning $p, string $type = 'short'): string
    {
        if (0 !== $p->getIdMatiere()) {
            $matiere = $this->typeMatiereManager->getMatiere($p->getIdMatiere(), $p->getTypeMatiere());
            if (null !== $matiere) {
                if ('short' === $type) {
                    return $p->getEvaluation() ? '** '.$matiere->codeMatiere.' **' : $matiere->codeMatiere;
                }

                return $p->getEvaluation() ? '** '.$matiere->libelle.' ('.$matiere->codeMatiere.') **' : $matiere->libelle.' ('.$matiere->codeMatiere.')';
            }

            return 'err...';
        }

        return $p->getEvaluation() ? '** '.$p->getTexte().' **' : $p->getTexte();
    }

    private function hasCommentaire(EdtPlanning $p): bool
    {
        return '' !== $p->getCommentaire() && null !== $p->getCommentaire();
    }

    private function groupes(): void
    {
        /** @var Groupe $groupe */
        foreach ($this->user->getGroupes() as $groupe) {
            if (null !== $groupe->getTypegroupe()) {
                if ($groupe->getTypegroupe()->isTd()) {
                    $this->groupetd = $groupe->getOrdre();
                } elseif ($groupe->getTypegroupe()->isTp()) {
                    $this->groupetp = $groupe->getOrdre();
                }
            }
        }
    }

    private function transformeModule($pl): array
    {
        $tab = [];

        /** @var EdtPlanning $p */
        foreach ($pl as $p) {
            $debut = $p->getDebut();
            $tab[$p->getJour()][$debut][$p->getGroupe()]['duree'] = $p->getFin() - $debut;
            $fin = $p->getFin();

            $tab[$p->getJour()][$debut][$p->getGroupe()]['couleur'] = $this->getCouleur($p);
            $tab[$p->getJour()][$debut][$p->getGroupe()]['couleurTexte'] = $this->getCouleurTexte($p);
            $tab[$p->getJour()][$debut][$p->getGroupe()]['planning'] = $p;
            $taille = 0;
            switch ($p->getType()) {
                case 'CM':
                case 'cm':
                    $tab[$p->getJour()][$debut][$p->getGroupe()]['largeur'] = $this->semestre->getNbgroupeTpEdt();
                    break;
                case 'TP':
                case 'tp':
                    $tab[$p->getJour()][$debut][$p->getGroupe()]['largeur'] = 1;
                    $taille = 4;
                    break;
                case 'TD':
                case 'td':
                    $tab[$p->getJour()][$debut][$p->getGroupe()]['largeur'] = 2;
                    $taille = 8;
                    break;
            }

            $groupe = $p->getGroupe();
            $groupefin = $groupe + $tab[$p->getJour()][$debut][$p->getGroupe()]['largeur'];
            for ($i = $debut; $i < $fin; ++$i) {
                for ($j = $groupe; $j < $groupefin; ++$j) {
                    $tab[$p->getJour()][$i][$j]['texte'] = 'xx';
                }
            }

            if (null === $p->getIntervenant()) {
                $inter = '';
            } elseif (0 === $taille) {
                $inter = $p->getIntervenant()->getNom();
            } else {
                $inter = mb_substr($p->getIntervenant()->getNom(), 0, $taille);
            }

            $tab[$p->getJour()][$debut][$p->getGroupe()]['texte'] = $this->isEvaluation($p).'<br />'.$p->getSalle().'<br />'.$inter.'<br />'.$p->getDisplayGroupe();
            $tab[$p->getJour()][$debut][$p->getGroupe()]['commentaire'] = $this->hasCommentaire($p);
        }

        return $tab;
    }

    private function transformeSalle($pl): array
    {
        $tab = [];

        /** @var EdtPlanning $p */
        foreach ($pl as $p) {
            $debut = $p->getDebut();
            $tab[$p->getJour()][$debut]['duree'] = $p->getFin() - $debut;
            $fin = $p->getFin();
            for ($i = $debut; $i < $fin; ++$i) {
                $tab[$p->getJour()][$i]['texte'] = 'xx';
            }

            $tab[$p->getJour()][$debut]['texte'] = $this->isEvaluation($p) . '<br />Semes x <br /> ' . $p->getDisplayGroupe();

            if (null !== $p->getIntervenant()) {
                $tab[$p->getJour()][$debut]['texte'] .= ' <br /> '.$p->getIntervenant()->getNom();
            }

            $tab[$p->getJour()][$debut]['couleur'] = $this->getCouleur($p);
            $tab[$p->getJour()][$debut]['pl'] = $p->getId();
            $tab[$p->getJour()][$debut]['couleurTexte'] = $this->getCouleurTexte($p);
        }

        return $tab;
    }

    private function transformeJour($pl): array
    {
        $tab = [];
        /** @var EdtPlanning $p */
        foreach ($pl as $p) {
            $debut = $p->getDebut();
            $tab[$p->getSemestre()->getId()][$debut][$p->getGroupe()]['duree'] = $p->getFin() - $debut;
            $fin = $p->getFin();

            $tab[$p->getSemestre()->getId()][$debut][$p->getGroupe()]['couleur'] = $this->getCouleur($p);
            $tab[$p->getSemestre()->getId()][$debut][$p->getGroupe()]['couleurTexte'] = $this->getCouleurTexte($p);
            $tab[$p->getSemestre()->getId()][$debut][$p->getGroupe()]['planning'] = $p;
            $taille = 0;
            switch ($p->getType()) {
                case TypeGroupeEnum::TYPE_GROUPE_CM:
                    $tab[$p->getSemestre()->getId()][$debut][$p->getGroupe()]['largeur'] = $p->getSemestre()->getNbgroupeTpEdt();
                    break;
                case TypeGroupeEnum::TYPE_GROUPE_TP:
                    $tab[$p->getSemestre()->getId()][$debut][$p->getGroupe()]['largeur'] = 1;
                    $taille = 4;
                    break;
                case TypeGroupeEnum::TYPE_GROUPE_TD:
                    $tab[$p->getSemestre()->getId()][$debut][$p->getGroupe()]['largeur'] = 2;
                    $taille = 8;
                    break;
            }

            $groupe = $p->getGroupe();
            $groupefin = $groupe + $tab[$p->getSemestre()->getId()][$debut][$p->getGroupe()]['largeur'];
            for ($i = $debut; $i < $fin; ++$i) {
                for ($j = $groupe; $j < $groupefin; ++$j) {
                    $tab[$p->getSemestre()->getId()][$i][$j]['texte'] = 'xx';
                }
            }

            if (null === $p->getIntervenant()) {
                $inter = '';
            } elseif (0 === $taille) {
                $inter = $p->getIntervenant()->getNom();
            } else {
                $inter = mb_substr($p->getIntervenant()->getNom(), 0, $taille);
            }

            $tab[$p->getSemestre()->getId()][$debut][$p->getGroupe()]['texte'] = $this->isEvaluation($p).'<br />'.$p->getSalle().'<br />'.$inter.'<br />'.$p->getDisplayGroupe();
            $tab[$p->getSemestre()->getId()][$debut][$p->getGroupe()]['commentaire'] = $this->hasCommentaire($p);
        }

        return $tab;
    }

    public function transformeDetails(?EdtPlanning $pl): ?array
    {
        if (null !== $pl) {
            $t = [];
            $t['matiere'] = null !== $this->typeMatiereManager->getMatiereFromSelect($pl->getTypeIdMatiere())->display;

            if (null !== $pl->getIntervenant()) {
                $t['enseignant'] = $pl->getIntervenant()->getDisplayPr();
            } else {
                $t['enseignant'] = '';
            }

            $t['horaires'] = Constantes::TAB_HEURES[$pl->getDebut()].' - '.Constantes::TAB_HEURES[$pl->getFin()];
            $t['commentaire'] = $pl->getCommentaire();
            $t['salle'] = $pl->getSalle();

            switch ($pl->getType()) {
                case TypeGroupeEnum::TYPE_GROUPE_CM:
                    $t['type'] = 'Cours Magistral';
                    $t['groupes'] = 'Tous';
                    break;
                case TypeGroupeEnum::TYPE_GROUPE_TD:
                    $t['type'] = 'Travaux Dirigés';
                    $t['groupes'] = chr($pl->getGroupe() + 64).chr($pl->getGroupe() + 65);
                    break;
                case TypeGroupeEnum::TYPE_GROUPE_TP:
                    $t['type'] = 'Travaux Pratiques';
                    $t['groupes'] = chr($pl->getGroupe() + 64);
                    break;
            }

            if ('O' === $pl->getEvaluation()) {
                $t['evaluation'] = 'Ce cours est une évaluation !';
            } else {
                $t['evaluation'] = '';
            }

            return $t;
        }

        return [];
    }

    public function initSemestre(
        int $semaine,
        Semestre $semestre,
        AnneeUniversitaire $anneeUniversitaire
    ): self {
        $this->semestre = $semestre;
        $this->init($anneeUniversitaire, 'promo', $semestre->getId(), $semaine);
        $this->semaines = $this->calculSemaines();
        $this->calculEdt(); // todo: pour des datas en BDD sasn scelcat. Ajouter test.

        return $this;
    }

    /**
     * @throws MatiereNotFoundException
     */
    public function addCours(Request $request, AnneeUniversitaire $anneeUniversitaire): EdtPlanning
    {
        $pl = new EdtPlanning();
        $semestre = $this->semestreRepository->find($request->request->get('promo'));
        if ($semestre === null) {
            throw new Exception('Semestre non trouvé');
        }
        $pl->setSemestre($semestre);
        $pl->setAnneeUniversitaire($anneeUniversitaire);
        $pl->setOrdreSemestre($semestre->getOrdreLmd());
        $pl->setSemaine($request->request->get('semaine'));
        $pl->setDiplome($semestre->getDiplome()?->getParent() ?? $semestre->getDiplome());

        return $this->updatePl($request, $pl, $anneeUniversitaire);
    }

    /**
     * @throws MatiereNotFoundException
     */
    public function updateCours(
        Request $request,
        EdtPlanning $plann,
        AnneeUniversitaire $anneeUniversitaire
    ): EdtPlanning {
        return $this->updatePl($request, $plann, $anneeUniversitaire);
    }

    /**
     * @throws MatiereNotFoundException
     */
    private function updatePl(
        $request,
        EdtPlanning $plann,
        AnneeUniversitaire $anneeUniversitaire
    ): EdtPlanning {
        $semestre = $this->semestreRepository->find($request->request->get('promo'));
        $plann->setSemestre($semestre);
        $this->calendrier = $this->calendrierRepository->findOneBy([
            'semaineFormation' => $plann->getSemaine(),
            'anneeUniversitaire' => $anneeUniversitaire->getId(),
        ]);

        if ('' !== $request->request->get('texte')) {
            $plann->setTexte($request->request->get('texte'));
            $plann->setIdMatiere(0);
        } else {
            $module = $this->typeMatiereManager->getMatiereFromSelect($request->request->get('selectmatiere'));
            if (null === $module) {
                throw new MatiereNotFoundException();
            }

            $plann->setIdMatiere($module->id);
            $plann->setTypeMatiere($module->typeMatiere);
        }

        if ('' !== $request->request->get('selectenseignant') && null !== $request->request->get('selectenseignant')) {
            $pr = $this->personnelRepository->find($request->request->get('selectenseignant'));
        } else {
            $pr = null;
        }

        $plann->setDebut($request->request->get('hdbt'));
        $plann->setFin($request->request->get('hfin'));
        $plann->setDate($this->convertToDate($request->request->get('jourc')));
        $plann->setIntervenant($pr);
        $plann->setSalle($request->request->get('salle'));
        $plann->setJour($request->request->get('jourc'));
        $plann->setEvaluation($request->request->get('evaluation'));

        $tc = explode('-', (string) $request->request->get('typecours'));
        $plann->setType($tc[0]);

        switch (TypeGroupeEnum::from($tc[0])) {
            case TypeGroupeEnum::TYPE_GROUPE_CM:
                $plann->setGroupe(1);
                break;
            case TypeGroupeEnum::TYPE_GROUPE_TD:
            case TypeGroupeEnum::TYPE_GROUPE_TP:
                $plann->setGroupe(trim($tc[1]));
                break;
            case TypeGroupeEnum::TYPE_GROUPE_VIDE:
                throw new Exception('To be implemented');
                break;
            case TypeGroupeEnum::TYPE_GROUPE_LV:
                throw new Exception('To be implemented');
        }

        $this->entityManager->persist($plann);
        $this->entityManager->flush();

        return $plann;
    }

    private function valideFormat(EdtPlanning $p, $idDebut): void
    {
        $casedebut = $p->getDebut();
        $casefin = $p->getFin();
        $jour = $p->getJour();
        $duree = $casefin - $casedebut;
        $this->tab[$jour][$idDebut]['debut'] = $casedebut;
        $this->tab[$jour][$idDebut]['format'] = 'aie';

        // regarde si le format entre dans une case ou dépasse. retourne 'ok' ou 'nok'
        if (array_key_exists($casedebut, Constantes::TAB_CRENEAUX) && 0 === ($duree % 3)) {
            $this->tab[$jour][$idDebut]['format'] = 'ok';

            if (0 === $duree % 3) {
                for ($i = 1; $i < $duree / 3; ++$i) {
                    $this->tab[$jour][$this->convertEdt($casedebut + ($i * 3))] = $this->tab[$jour][$idDebut];
                }
            }
        } else {
            $this->tab[$jour][$idDebut]['debut'] = $p->getDebut();
            $this->tab[$jour][$idDebut]['format'] = 'nok';
            $this->tab[$jour][$idDebut]['fin'] = $casefin;
        }
    }
}
