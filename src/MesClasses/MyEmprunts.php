<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/MyEmprunts.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\MesClasses;


use App\Entity\Constantes;
use App\Entity\Departement;
use App\Entity\Emprunt;
use App\Events;
use App\Repository\EmpruntRepository;
use DA\KernelBundle\Entity\Configuration;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\EventDispatcher\GenericEvent;

class MyEmprunts
{
    /** @var EventDispatcherInterface */
    protected $eventDispatcher;

    /** @var EmpruntRepository */
    protected $empruntRepository;

    /** @var EntityManagerInterface */
    protected $entityManager;

    /** @var Emprunt[] */
    protected $emprunts;

    /** @var Emprunt */
    protected $emprunt;

    protected $statistiques;
    /**
     * @var array
     */
    private $jours;
    /**
     * @var int
     */
    private $nbjouremprunt;

    /**
     * MyEmprunts constructor.
     *
     * @param EmpruntRepository        $empruntRepository
     * @param EntityManagerInterface   $entityManager
     * @param EventDispatcherInterface $eventDispatcher
     */
    public function __construct(
        EmpruntRepository $empruntRepository,
        EntityManagerInterface $entityManager,
        EventDispatcherInterface $eventDispatcher
    ) {
        $this->empruntRepository = $empruntRepository;
        $this->entityManager = $entityManager;
        $this->eventDispatcher = $eventDispatcher;
        $this->statistiques = [
            Emprunt::DEMANDE => 0,
            Emprunt::ACCEPTE => 0,
            Emprunt::SORTIE  => 0,
            Emprunt::REFUS   => 0,
            Emprunt::REVENU  => 0
        ];
    }

    /**
     * @return array
     */
    public function getJours(): array
    {
        return $this->jours;
    }

    public function listeEmprunts(Departement $departement): void
    {
        $this->emprunts = $this->empruntRepository->findByDepartement($departement);
        $this->calculStatistiques();
    }

    private function calculStatistiques(): void
    {
        /** @var Emprunt $emprunt */
        foreach ($this->emprunts as $emprunt) {
            $this->statistiques[$emprunt->getEtat()]++;
        }
    }

    /**
     * @return Emprunt[]
     */
    public function getEmprunts(): array
    {
        return $this->emprunts;
    }

    /**
     * @return array
     */
    public function getStatistiques(): array
    {
        return $this->statistiques;
    }

    public function changeEtat(Emprunt $emprunt, string $etat): void
    {
        $eventMail = '';
        $eventNotif = '';
        $this->emprunt = $emprunt;
        switch ($etat) {
            case Emprunt::DEMANDE:
                $this->emprunt->setEtat(Emprunt::DEMANDE);
                $eventMail = Events::MAIL_CHGT_ETAT_EMPRUNT_DEMANDE; //MAIL AU REPSONSABLE + COPIE ETUDIANT
                $eventNotif = Events::CHGT_ETAT_EMPRUNT_DEMANDE;
                break;
            case Emprunt::ACCEPTE:
                $this->emprunt->setEtat(Emprunt::ACCEPTE);
                $this->emprunt->setDateValidation(new DateTime('now'));
                $eventMail = Events::MAIL_CHGT_ETAT_EMPRUNT_ACCEPTE; //MAIL ETUDIANT
                $eventNotif = Events::CHGT_ETAT_EMPRUNT_ACCEPTE;
                break;
            case Emprunt::SORTIE:
                $this->emprunt->setEtat(Emprunt::SORTIE);
                $this->emprunt->setDateSortie(new DateTime('now'));
                break;
            case Emprunt::REFUS:
                $this->emprunt->setEtat(Emprunt::REFUS);
                $this->emprunt->setDateValidation(new DateTime('now'));
                $eventMail = Events::MAIL_CHGT_ETAT_EMPRUNT_REFUS;
                $eventNotif = Events::CHGT_ETAT_EMPRUNT_REFUS;
                break;
            case Emprunt::REVENU:
                $this->emprunt->setEtat(Emprunt::REVENU);
                $this->emprunt->setDateRetour(new DateTime('now'));
                break;
        }

        $event = new GenericEvent($this->emprunt);
        if ($eventMail !== '') {
            $this->eventDispatcher->dispatch($event, $eventMail);
        }

        if ($eventNotif !== '') {
            $this->eventDispatcher->dispatch($event, $eventNotif);
        }

        $this->entityManager->persist($this->emprunt);
        $this->entityManager->flush();
    }

    public function calculGrille($role = 'ETU'): array
    {
        $this->jours = [];

        if ($role === 'ETU') {
            $this->nbjouremprunt = 7;
            if (date('N') === '5') {
                $j = 4;
            } else {
                $j = 2;
            }
        } else {
            $this->nbjouremprunt = 10;
            $j = -2;
        }

        for ($i = 0; $i < $this->nbjouremprunt; $i++) {
            $d = mktime(0, 0, 0, date('m'), date('d') + $j, date('Y'));

            if (date('N', $d) == 6) {
                $d2 = mktime(0, 0, 0, date('m'), date('d') + $j + 1, date('Y'));
                $this->jours[$i]['jour'] = 'WE';
                $this->jours[$i]['texte'] = date('d/m/Y', $d) . '-' . date('d/m/Y', $d2);
                $this->jours[$i]['date'] = date('Y-m-d', $d);
                $this->jours[$i]['objDate'] = $d;
                $this->jours[$i]['i'] = $i;
                $j++;
            } elseif (date('N', $d) == 7) {
                $d2 = mktime(0, 0, 0, date('m'), date('d') + $j - 1, date('Y'));
                $this->jours[$i]['jour'] = 'WE';
                $this->jours[$i]['texte'] = date('d/m/Y', $d2) . '-' . date('d/m/Y', $d);
                $this->jours[$i]['date'] = date('Y-m-d', $d);
                $this->jours[$i]['objDate'] = $d;
                $this->jours[$i]['i'] = $i;
            } else {
                $this->jours[$i]['jour'] = Constantes::TAB_JOURS[date('N', $d)];
                $this->jours[$i]['texte'] = date('d/m/Y', $d);
                $this->jours[$i]['date'] = date('Y-m-d', $d);
                $this->jours[$i]['objDate'] = $d;
                $this->jours[$i]['i'] = $i;
            }
            $j++;
        }

        return $this->jours;
    }

    /**
     * @return array
     */
//    public function getStudio()
//    {
//        $studios = $this->em->getRepository('DAKernelBundle:Planning')->findAllStudio();
//        $calendrier = $this->em->getRepository('DAKernelBundle:Calendrier')->findCalendrierInv();
//
//        for ($i = 0; $i < $this->nbjouremprunt; $i++) {
//            $semaine = (int)date('W', $this->jours[$i]['objDate']);
//            $jour = date('N', $this->jours[$i]['objDate']);
//
//            $semaineIUT = $calendrier[$semaine]['semaineIUT'];
//
//
//            if (array_key_exists($semaineIUT, $studios)) {
//                if (array_key_exists($jour, $studios[$semaineIUT])) {
//                    $this->studio[$this->jours[$i]['i']] = array();
//                    if (count($studios[$semaineIUT][$jour]) === 2) {
//                        $this->studio[$this->jours[$i]['i']]['08'] = 'STUD';
//                        $this->studio[$this->jours[$i]['i']]['14'] = 'STUD';
//                    } elseif ((count($studios[$semaineIUT][$jour]) === 1) && array_key_exists('08',
//                            $studios[$semaineIUT][$jour])) {
//                        $this->studio[$this->jours[$i]['i']]['08'] = 'STUD';
//                    } elseif ((count($studios[$semaineIUT][$jour]) === 1) && array_key_exists('14',
//                            $studios[$semaineIUT][$jour])) {
//                        $this->studio[$this->jours[$i]['i']]['14'] = 'STUD';
//                    }
//                } else {
//                    //pas de studio ce jour
//                }
//            } else {
//                //pas de studio cette semaine
//            }
//        }
//
//        return $this->studio;
//    }


}
