<?php

namespace App\Classes\EduSign\Adapter;

use _PHPStan_7c8075089\Nette\Utils\DateTime;
use App\DTO\EvenementEdt;
use App\Repository\PersonnelRepository;
use Carbon\Carbon;
use DateTimeZone;

class EduSignEdtIntranetAdapter
{
    private EvenementEdt $cours;

    /**
     * @param $course
     */
    public function __construct($course, $enseignant)
    {
        $startRaw = Carbon::parse($course['START'], 'UTC');
        $startRaw->setTimezone(new DateTimeZone('Europe/Paris'));
        $startFormat = $startRaw->format('Y-m-d H:i:s');
        $start = Carbon::createFromFormat("Y-m-d H:i:s", $startFormat);
        $endRaw = Carbon::parse($course['END'], 'UTC');
        $endRaw->setTimezone(new DateTimeZone('Europe/Paris'));
        $endFormat = $endRaw->format('Y-m-d H:i:s');
        $end = Carbon::createFromFormat("Y-m-d H:i:s", $endFormat);
        // changer le contenu de la date -> H:i:s par 00:00:00 pour la comparer avec 'date' dans edtPlanning
        $date = $start->copy()->startOfDay()->format('Y-m-d H:i:s');
        $date = Carbon::createFromFormat("Y-m-d H:i:s", $date);

        $this->cours = new EvenementEdt();
        $this->cours->source = 'intranet';
        $this->cours->matiere = $course['NAME'];
        $this->cours->date = $date;
        $this->cours->heureDebut = $start;
        $this->cours->heureFin = $end;
        $this->cours->personnelObjet = $enseignant;
        $this->cours->idEduSign = $course['ID'];
        $this->cours->salle = $course['CLASSROOM'];
    }

        public
        function getCourse(): ?EvenementEdt
        {
        return $this->cours;
        }
    }