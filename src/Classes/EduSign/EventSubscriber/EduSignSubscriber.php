<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/EduSign/EventSubscriber/EduSignSubscriber.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/09/2024 20:33
 */

namespace App\Classes\EduSign\EventSubscriber;

use App\Classes\Edt\EdtManager;
use App\Classes\EduSign\Adapter\IntranetEdtEduSignAdapter;
use App\Classes\EduSign\Api\ApiCours;
use App\Classes\EduSign\Events\EduSignEvent;
use App\Repository\DiplomeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class EduSignSubscriber implements EventSubscriberInterface
{
    public function __construct(
        protected EntityManagerInterface $entityManager,
        protected ApiCours               $apiCours,
        protected DiplomeRepository      $diplomeRepository
    )
    {
    }

    public static function getSubscribedEvents(): array
    {
        return [
            EduSignEvent::EDUSIGN_UPDATE_COURSE => 'onUpdateCourse',
            EduSignEvent::EDUSIGN_DELETE_COURSE => 'onDeleteCourse',
            EduSignEvent::EDUSIGN_CREATE_COURSE => 'onCreateCourse',
        ];
    }

    public function onCreateCourse(EduSignEvent $eduSignEvent): void
    {
        $evenementEdt = $eduSignEvent->getEvenementEdt();
        $cleApi = $eduSignEvent->getCleApi();
        $diplomes = $this->diplomeRepository->findBy(['keyEduSign' => $cleApi]);

        foreach ($diplomes as $diplome) {
            if ($evenementEdt->source !== EdtManager::EDT_INTRANET) {
                // Update EdtCelcat with $eduSignCourse data
                $course = (new IntranetEdtEduSignAdapter($evenementEdt, $diplome))->getCourse();
                if (null !== $course) {
                    dump($this->apiCours->addCourse($course, $cleApi));
                }
            } else {
                // Update EdtCelcat with $eduSignCourse data
                $course = (new IntranetEdtEduSignAdapter($evenementEdt, $diplome))->getCourse();
                if (null !== $course) {
                    $this->apiCours->addCourse($course, $cleApi);
                }
            }
        }
    }

    public function onUpdateCourse(EduSignEvent $eduSignEvent): void
    {
        $evenementEdt = $eduSignEvent->getEvenementEdt();
        $cleApi = $eduSignEvent->getCleApi();
        $diplomes = $this->diplomeRepository->findBy(['keyEduSign' => $cleApi]);


        foreach ($diplomes as $diplome) {
            if ($evenementEdt->source !== EdtManager::EDT_INTRANET) {
                // Update EdtCelcat with $eduSignCourse data
                $course = (new IntranetEdtEduSignAdapter($evenementEdt, $diplome))->getCourse();
                if (null !== $course) {
                    dump($this->apiCours->updateCourse($course, $cleApi));
                }
            } else {
                // Update EdtCelcat with $eduSignCourse data
                $course = (new IntranetEdtEduSignAdapter($evenementEdt, $diplome))->getCourse();
                if (null !== $course) {
                    $this->apiCours->updateCourse($course, $cleApi);
                }
            }
        }

    }

    public function onDeleteCourse(EduSignEvent $eduSignEvent): void
    {
        $evenementEdt = $eduSignEvent->getEvenementEdt();
        $cleApi = $eduSignEvent->getCleApi();

        dump($this->apiCours->deleteCourse($evenementEdt->idEduSign, $cleApi));

    }
}
