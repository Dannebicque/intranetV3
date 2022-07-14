<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Edt/MyEdtImport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 13/07/2022 16:53
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Edt;

use App\Classes\DataUserSession;
use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\MyUpload;
use App\Entity\Calendrier;
use App\Entity\EdtPlanning;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\Enums\TypeGroupeEnum;
use App\Repository\CalendrierRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Carbon\CarbonInterface;
use function array_key_exists;
use Carbon\CarbonImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use function ord;

class MyEdtImport
{
    private ?string $nomfile = null;

    private mixed $semaine;

    private mixed $semestre;

    private DataUserSession $dataUserSession;

    private Calendrier $calendrier;

    /**
     * MyEdtImport constructor.
     */
    public function __construct(
        private readonly EdtPlanningRepository $edtPlanningRepository,
        private readonly CalendrierRepository $calendrierRepository,
        private readonly PersonnelRepository $personnelRepository,
        private readonly TypeMatiereManager $typeMatiereManager,
        private readonly SemestreRepository $semestreRepository,
        private readonly EntityManagerInterface $entityManager,
        private readonly MyUpload $myUpload
    ) {
    }

    /**
     * @throws Exception
     */
    public function init($file, DataUserSession $dataUserSession): self
    {
        $this->dataUserSession = $dataUserSession;

        $this->nomfile = $this->myUpload->upload($file, 'temp/', ['txt']);

        return $this;
    }

    public function traite(): void
    {
        // Récupérer la liste des profs avec initiales
        $tabIntervenants = $this->personnelRepository->tableauIntervenants($this->dataUserSession->getDepartement());
        $tabMatieres = $this->typeMatiereManager->tableauMatieres($this->dataUserSession->getDepartement());
        $tabSemestre = $this->semestreRepository->tableauSemestres($this->dataUserSession->getDepartement());
        $tabdebut = [1 => 1, 2 => 4, 3 => 7, 4 => 13, 5 => 16, 6 => 19, 7 => 22];

        $handle = fopen($this->nomfile, 'rb');
        $tSemaineClear = []; // tableau pour mémoriser les semaines à supprimer

        /* Si on a réussi à ouvrir le fichier */
        if ($handle) {
            /* Tant que l'on est pas à la fin du fichier */
            while (!feof($handle)) {
                /* On lit la ligne courante */
                $phrase = fgets($handle);
                $phrase = trim($phrase);
                if (mb_strlen($phrase) > 10 && '*' !== $phrase[mb_strlen($phrase) - 1]) {
                    $this->semaine = mb_substr($phrase, 1, 2); // on ne récupère pas le S
                    $jour = $phrase[3];
                    $heure = $phrase[4]; // a convertir
                    $semestre = mb_substr($phrase, 5, 2);

                    if (!array_key_exists($semestre, $tSemaineClear)) {
                        // si la clé n'est pas dans le tableau, la semaine n'a pas encore été effacée, on supprime
                        $this->clearSemaine($this->semaine, $tabSemestre[$semestre]);

                        // on mémorise le semestre
                        $tSemaineClear[$semestre] = true;
                    }
                    $this->calendrier = $this->calendrierRepository->findOneBy([
                        'semaineFormation' => $this->semaine,
                        'anneeUniversitaire' => $this->dataUserSession->getAnneeUniversitaire()->getId(),
                    ]);
                    $date = $this->convertToDate($jour);
                    $groupe = $phrase[7];

                    if ('Z' === $phrase[8]) {
                        //todo: traiter groupe TD Exemple TDEH => Implique TD EF et TD GH.
                        //todo: 3 => Nombre de ligne pour le TD Exemple => 3
                        //todo: si projet => PRJ + code SAE (PRJ WS...)
                        // prof commence par Z, donc, c'est une zone sans enseignant
                        // && mb_substr($phrase, 16, 4) !== 'PROJ'
                        $salle = mb_substr($phrase, 11, 4);
                        $fin = $phrase[15];
                        $texte = mb_substr($phrase, 16);

                        $pl = new EdtPlanning();
                        $pl->setSemestre($tabSemestre[$semestre]);
                        $pl->setIdMatiere(0);
                        $pl->setIntervenant(null);
                        $pl->setJour($jour);
                        $pl->setDate($date);
                        $pl->setSalle($salle);
                        $pl->setGroupe(1);
                        if ('D' === mb_substr($pl->getSemestre()->getLibelle(), -1)) {
                            $pl->setType(TypeGroupeEnum::TYPE_GROUPE_TD);
                        } else {
                            $pl->setType(TypeGroupeEnum::TYPE_GROUPE_CM);
                        }

                        $pl->setDebut($tabdebut[$heure]);
                        $pl->setFin($tabdebut[$heure] + (3 * $fin));
                        $pl->setSemaine($this->semaine);
                        $pl->setEvaluation(false);
                        $pl->setTexte($texte);

                        $this->entityManager->persist($pl);
                    } else {
                        $prof = mb_substr($phrase, 8, 3);
                        if ('S' === $phrase[11] || 'R' === $phrase[11]) {
                            // code sur 4
                            $matiere = mb_substr($phrase, 11, 4);
                            $typecours = mb_substr($phrase, 15, 2);
                            $ordre = mb_substr($phrase, 17, 2);
                            $salle = mb_substr($phrase, 19);
                        } else {
                            // code sur 5
                            $matiere = mb_substr($phrase, 11, 5);
                            $typecours = mb_substr($phrase, 16, 2);
                            if ('T' !== $typecours[0] && 'C' !== $typecours[0]) {
                                $matiere .= $typecours[0];
                                $typecours = mb_substr($phrase, 17, 2);
                                $ordre = mb_substr($phrase, 19, 2);
                                $salle = mb_substr($phrase, 21);
                            } else {
                                $ordre = mb_substr($phrase, 18, 2);
                                $salle = mb_substr($phrase, 20);
                            }
                        }

                        if (array_key_exists($matiere, $tabMatieres)) {
                            $pl = new EdtPlanning();
                            $pl->setSemestre($tabMatieres[$matiere]->getSemestres()->first());
                            $this->semestre = $pl->getSemestre()?->getId();
                            $pl->setIdMatiere($tabMatieres[$matiere]->id);
                            $pl->setTypeMatiere($tabMatieres[$matiere]->typeMatiere);
                            if ('DOA' !== $prof && 'DOB' !== $prof && 'DOC' !== $prof && 'DOD' !== $prof && 'PRJ' !== $prof && array_key_exists($prof,
                                    $tabIntervenants)) {
                                $pl->setIntervenant($tabIntervenants[$prof]); // todo: pourrait être NULL  équivalent à john doe?? gérer affichage
                            } else {
                                $pl->setIntervenant(null);
                            }
                            $pl->setJour($jour);
                            $pl->setSalle($salle);
                            $pl->setOrdre($ordre);
                            $pl->setDate($date);
                            $pl->setGroupe(ord($groupe) - 64);
                            $pl->setType(mb_strtoupper($typecours));
                            $pl->setDebut($tabdebut[$heure]);
                            $pl->setFin($tabdebut[$heure] + 3);
                            $pl->setSemaine($this->semaine);
                            if ('EVAL' === $salle) {
                                $pl->setEvaluation(true);
                            } else {
                                $pl->setEvaluation(false);
                            }
                            $this->entityManager->persist($pl);
                        }
                    }
                }
            }

            /* On ferme le fichier */
            fclose($handle);
            unlink($this->nomfile); // suppression du fichier
            $this->entityManager->flush();
        }
    }

    public function getSemaine()
    {
        return $this->semaine;
    }

    public function getSemestre()
    {
        return $this->semestre;
    }

    public function getCalendrier(): Calendrier
    {
        return $this->calendrier;
    }

    private function clearSemaine($semaine, Semestre $semestre): void
    {
        $sem = $this->edtPlanningRepository->findBy([
            'semaine' => $semaine,
            'semestre' => $semestre,
        ]);

        foreach ($sem as $s) {
            $this->entityManager->remove($s);
        }
        $this->entityManager->flush();
    }

    private function convertToDate($jour): CarbonInterface
    {
        return $this->calendrier->getDateLundi()->addDays($jour - 1);
    }
}
