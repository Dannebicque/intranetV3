<?php
/**
 * Copyright (C) 10 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Events.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 16/10/2019 17:41
 * @lastUpdate 06/10/2019 09:07
 */

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 24/05/2018
 * Time: 16:18
 */

namespace App;

/**
 * Class Events
 * @package App
 */
class Events
{
    /**
     * For the event naming conventions, see:
     * https://symfony.com/doc/current/components/event_dispatcher.html#naming-conventions.
     *
     * @Event("Symfony\Component\EventDispatcher\GenericEvent")
     *
     * @var string
     */
    public const NOTE_ADDED = 'note.added';
    public const ABSENCE_ADDED = 'absence.added';
    public const ABSENCE_REMOVED = 'absence.removed';
    public const CARNET_ADDED = 'carnet.added';
    public const DECISION_RATTRAPAGE = 'decision.rattrapage';
    public const DECISION_RATTRAPAGE_ACCEPTEE = 'decision.rattrapage.acceptee';
    public const DECISION_RATTRAPAGE_REFUSEE = 'decision.rattrapage.refusee';
    public const DECISION_JUSTIFICATIF = 'decision.justificatif';
    public const DECISION_JUSTIFICATIF_ACCEPTEE = 'decision.justificatif.acceptee';
    public const DECISION_JUSTIFICATIF_REFUSEE = 'decision.justificatif.refusee';


    public const MAIL_ABSENCE_ADDED = 'mail.absence.added';
    public const MAIL_ABSENCE_ADDED_RESPONSABLE = 'mail.absence.added.responsable';
    public const MAIL_ABSENCE_REMOVED = 'mail.absence.removed';
    public const MAIL_ABSENCE_REMOVED_RESPONSABLE = 'mail.absence.removed.responsable';
    public const MAIL_NOTE_MODIFICATION_RESPONSABLE = 'mail.note.modification.responsable';
    public const MAIL_NEW_TRANSCRIPT_RESPONSABLE = 'mail.new.transcript.responsable';
    public const MAIL_DECISION_RATTRAPAGE = 'mail.decision.rattrapage';
    public const MAIL_DECISION_JUSTIFICATIF = 'mail.decision.justificatif';
    public const MAIL_DELETE_JUSTIFICATIF = 'mail.delete.justificatif';

    /* ABSENCES */
    public const JUSTIFIE_ABSENCES = 'justifie.absences';
    public const VERIFICATION_JUSTIFICATIF = 'verification.justificatif.absences';

    /* STAGE */

    public const MAIL_CHGT_ETAT_STAGE_AUTORISE = 'mail.chgt.etat_stage.autorise';
    public const MAIL_CHGT_ETAT_STAGE_DEPOSE = 'mail.chgt.etat_stage.depose';
    public const MAIL_CHGT_ETAT_STAGE_VALIDE = 'mail.chgt.etat_stage.valide';
    public const MAIL_CHGT_ETAT_STAGE_IMPRIME = 'mail.chgt.etat_stage.imprime';
    public const MAIL_CHGT_ETAT_STAGE_CONVENTION_ENVOYEE = 'mail.chgt.etat_stage.convention_envoyee';
    public const MAIL_CHGT_ETAT_CONVENTION_RECUE = 'mail.chgt.etat_stage.convention_recue';

    public const CHGT_ETAT_STAGE_AUTORISE = 'chgt.etat_stage.autorise';
    public const CHGT_ETAT_STAGE_DEPOSE = 'chgt.etat_stage.depose';
    public const CHGT_ETAT_STAGE_VALIDE = 'chgt.etat_stage.valide';
    public const CHGT_ETAT_STAGE_IMPRIME = 'chgt.etat_stage.imprime';
    public const CHGT_ETAT_STAGE_CONVENTION_ENVOYEE = 'chgt.etat_stage.convention_envoyee';
    public const CHGT_ETAT_CONVENTION_RECUE = 'chgt.etat_stage.convention_recue';

    public const REDIRECT_TO_LOGIN = 'redirect.to.login';
    public const CHOISIR_DEPARTEMENT_DEFAUT = 'choisir.departement.par.defaut';

    public const MAIL_CHGT_ETAT_EMPRUNT_DEMANDE = 'mail.chgt.emprunt.demande';
    public const MAIL_CHGT_ETAT_EMPRUNT_REFUS = 'mail.chgt.emprunt.refus';
    public const MAIL_CHGT_ETAT_EMPRUNT_ACCEPTE = 'mail.chgt.emprunt.accepte';

    public const CHGT_ETAT_EMPRUNT_DEMANDE = 'chgt.emprunt.demande';
    public const CHGT_ETAT_EMPRUNT_ACCEPTE = 'chgt.emprunt.refus';
    public const CHGT_ETAT_EMPRUNT_REFUS = 'chgt.emprunt.accepte';

    public static function getConstante($constante)
    {
        return constant('self::' . $constante);
    }
}
