<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyIcal.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/07/2021 13:07
 */

namespace App\Classes;

use Carbon\Carbon;
use Carbon\CarbonInterface;
use function chr;
use DateTimeInterface;

/**
 * Class MyIcal.
 */
class MyIcal
{
    protected ?string $dtstart; //DTSTART: Date de début de l'événement
    protected ?string $dtend; //DTEND: Date de fin de l'événement
    protected ?string $summary; //SUMMARY: Titre de l'événement
    protected ?string $location; //LOCATION: Lieu de l'événement
    protected ?string $description; //DESCRIPTION: Description de l'événement
    protected ?string $filevt;
    protected ?string $uid;
    protected ?string $decalage;
    private array $tabheure;

    public function __construct()
    {
        //todo: a tester si les données viennent de Celcat ?
        $this->tabheure = [];
        $this->filevt = 'BEGIN:VCALENDAR'.chr(13).chr(10);
        $this->filevt .= 'VERSION:2.0'.chr(13).chr(10);
        $this->filevt .= 'CALSCALE:GREGORIAN'.chr(13).chr(10);
        $this->filevt .= 'METHOD:PUBLISH'.chr(13).chr(10);
        $this->filevt .= 'PRODID:-//MMI/handcal//NONSGML v1.0//FR'.chr(13).chr(10);
        $this->filevt .= 'BEGIN:VTIMEZONE'.chr(13).chr(10);
        $this->filevt .= 'TZID:Europe/Paris'.chr(13).chr(10);
        $this->filevt .= 'X-LIC-LOCATION:Europe/Paris'.chr(13).chr(10);
        $this->filevt .= 'BEGIN:DAYLIGHT'.chr(13).chr(10);
        $this->filevt .= 'TZOFFSETFROM:+0100'.chr(13).chr(10);
        $this->filevt .= 'TZOFFSETTO:+0200'.chr(13).chr(10);
        $this->filevt .= 'LAST-MODIFIED:'.gmdate('Ymd').'T'.gmdate('His').'Z'.chr(13).chr(10);
        $this->filevt .= 'TZNAME:CEST'.chr(13).chr(10);
        $this->filevt .= 'DTSTART:19700329T020000'.chr(13).chr(10);
        $this->filevt .= 'RRULE:FREQ=YEARLY;INTERVAL=1;BYDAY=-1SU;BYMONTH=3'.chr(13).chr(10);
        $this->filevt .= 'END:DAYLIGHT'.chr(13).chr(10);
        $this->filevt .= 'BEGIN:STANDARD'.chr(13).chr(10);
        $this->filevt .= 'TZOFFSETFROM:+0200'.chr(13).chr(10);
        $this->filevt .= 'TZOFFSETTO:+0100'.chr(13).chr(10);
        $this->filevt .= 'TZNAME:CET'.chr(13).chr(10);
        $this->filevt .= 'DTSTART:19701025T030000'.chr(13).chr(10);
        $this->filevt .= 'RRULE:FREQ=YEARLY;INTERVAL=1;BYDAY=-1SU;BYMONTH=10'.chr(13).chr(10);
        $this->filevt .= 'END:STANDARD'.chr(13).chr(10);
        $this->filevt .= 'X-WR-CALNAME: IUT3-Mescours'.chr(13).chr(10);
        $this->filevt .= 'X-WR-TIMEZONE:Europe/Paris'.chr(13).chr(10);
        $this->filevt .= 'END:VTIMEZONE'.chr(13).chr(10);

        $this->tabheure = [
            '',
            '08:00',
            '08:30',
            '09:00',
            '09:30',
            '10:00',
            '10:30',
            '11:00',
            '11:30',
            '12:00',
            '12:30',
            '13:00',
            '13:30',
            '14:00',
            '14:30',
            '15:00',
            '15:30',
            '16:00',
            '16:30',
            '17:00',
            '17:30',
            '18:00',
            '18:30',
            '19:00',
            '19:30',
            '20:00',
            '20:30',
            '21:00',
        ];
    }

    public function addEvent($id): void
    {
        $d = Carbon::now();
        $d = $d->format(DateTimeInterface::ATOM);
        $uid = $d.'-'.mb_substr(md5($d.$id), 0, 12).'-@IUT3Cours';
        $this->filevt .= 'BEGIN:VEVENT'.chr(13).chr(10);
        $this->filevt .= 'UID:'.$uid.chr(13).chr(10);
        $this->filevt .= $this->dtstart.chr(13).chr(10);
        $this->filevt .= $this->dtend.chr(13).chr(10);
        $this->filevt .= $this->summary.chr(13).chr(10);
        $this->filevt .= $this->location.chr(13).chr(10);
        $this->filevt .= $this->description.chr(13).chr(10);
        $this->filevt .= 'END:VEVENT'.chr(13).chr(10);
    }

    public function setDtstart(CarbonInterface $date, $creneau): void
    {
        $h = explode(':', $this->tabheure[$creneau]);

        $timestamp = mktime($h[0], $h[1], '00', $date->month, $date->day, $date->year);
        $this->dtstart = 'DTSTART:'.$this->calculHeureEte($timestamp);
    }

    public function calculHeureEte(int $timestamp)
    {
        $annee_courante = strftime('%Y', $timestamp);
        $mois_courant = strftime('%m', $timestamp);
        $jour_courant = strftime('%d', $timestamp);
        $decalage_horaire = 0;
        $num_dernier_dimanche = [];

        if (($mois_courant > 10) || ($mois_courant < 3)) {
            $decalage_horaire = 1 * 3600;
        } elseif (($mois_courant > 3) && ($mois_courant < 10)) {
            $decalage_horaire = 2 * 3600;
        } elseif (3 === (int) $mois_courant) {
            $num_dernier_dimanche[$annee_courante][$mois_courant] = $this->getDernierDimancheDuMois2($mois_courant,
                    $annee_courante);

            if ($jour_courant >= $num_dernier_dimanche[$annee_courante][$mois_courant]) {
                $decalage_horaire = 2 * 3600;
            } else {
                $decalage_horaire = 1 * 3600;
            }
        } elseif (10 === (int) $mois_courant) {
            $num_dernier_dimanche[$annee_courante][$mois_courant] = $this->getDernierDimancheDuMois2($mois_courant,
                    $annee_courante);

            if ($jour_courant >= $num_dernier_dimanche[$annee_courante][$mois_courant]) {
                $decalage_horaire = 1 * 3600;
            } else {
                $decalage_horaire = 2 * 3600;
            }
        }

        return $this->dateToCal($timestamp - $decalage_horaire);
    }

    public function getDernierDimancheDuMois2($mois, $annee): int
    {
        // Fonction utilisée pour les mois de mars et octobre (31 jours)
        for ($i = 31; $i > 1; --$i) {
            $ts = mktime(0, 0, 0, $mois, $i, $annee);
            if ('7' === strftime('%u', $ts)) {
                break;
            }
        }

        return $i;
    }

    public function dateToCal($timestamp): string
    {
        return date('Ymd\THis\Z', $timestamp);
    }

    public function setDtend(CarbonInterface $date, $creneau): void
    {
        $h = explode(':', $this->tabheure[$creneau]);

        $timestamp = mktime($h[0], $h[1], '00', $date->month, $date->day, $date->year);
        $this->dtend = 'DTEND:'.$this->calculHeureEte($timestamp);
    }

    public function setLocation($lieu): void
    {
        $this->location = 'LOCATION:'.$lieu;
    }

    public function setDescription($texte): void
    {
        $this->description = 'DESCRIPTION:'.$texte;
    }

    public function setSummary($titre): void
    {
        $this->summary = 'SUMMARY:'.$titre;
    }

    public function getIcal(): string
    {
        $this->filevt .= 'END:VCALENDAR'.chr(13).chr(10);

        return $this->filevt;
    }
}
