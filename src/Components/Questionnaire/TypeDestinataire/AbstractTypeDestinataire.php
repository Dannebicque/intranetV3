<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/TypeDestinataire/AbstractTypeDestinataire.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 15/12/2022 18:26
 */

namespace App\Components\Questionnaire\TypeDestinataire;

use App\Components\Questionnaire\DTO\ReponsesUser;
use App\Components\Questionnaire\Interfaces\QuestChoixInterface;
use App\Components\Questionnaire\TypeQuestion\TypeEchelle;
use App\Components\Questionnaire\TypeQuestion\TypeOuiNon;
use App\Components\Questionnaire\TypeQuestion\TypeQcm;
use App\Components\Questionnaire\TypeQuestion\TypeQcu;
use App\Entity\QuestChoix;
use App\Entity\QuestQuestionnaire;
use App\Repository\QuestChoixRepository;
use App\Repository\QuestQuestionRepository;
use App\Repository\QuestReponseRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

abstract class AbstractTypeDestinataire
{
    protected QuestQuestionnaire $questionnaire;
    protected ?QuestChoixInterface $choixUser;
    protected ?ReponsesUser $reponses;

    public function __construct(
        protected EventDispatcherInterface $eventDispatcher,
        protected EntityManagerInterface $entityManager,
        protected QuestChoixRepository $questChoixRepository,
        protected QuestQuestionRepository $questQuestionRepository,
        protected QuestReponseRepository $questReponseRepository
    ) {
    }

    public function setQuestionnaire(QuestQuestionnaire $questionnaire): AbstractTypeDestinataire
    {
        $this->questionnaire = $questionnaire;

        return $this;
    }

    public function abstractSauvegardeReponse(
        QuestChoixInterface $choixUser,
        string $cleReponse,
        string $cleQuestion,
        string $typeDestinataire
    ): void {
        $exist = $this->questChoixRepository->findExistQuestion($cleQuestion, $choixUser, $typeDestinataire);

        $t = explode('_', $cleReponse);
        $question = $this->questQuestionRepository->find(mb_substr($t[3], 1, mb_strlen($t[0])));

        if (str_starts_with($t[4], 'c')) {
            $reponse = $this->questReponseRepository->find($t[5]);
        } else {
            $reponse = $this->questReponseRepository->find($t[4]);
        }

        if (null !== $question && null !== $reponse) {
            if (null === $exist) {
                $qr = new QuestChoix();
                $qr->setQuestion($question);
                $qr->setTypeDestinataire($typeDestinataire);
                $qr->setIdQuestChoix($choixUser->getId());

                if (TypeQcm::class === $question->getType()) {
                    $qr->setCleReponse(json_encode([$cleReponse], JSON_THROW_ON_ERROR));
                    $qr->setValeur(json_encode([$reponse->getValeur()], JSON_THROW_ON_ERROR));
                } else {
                    $qr->setCleReponse($cleReponse);
                    $qr->setValeur($reponse->getValeur());
                }

                $this->entityManager->persist($qr);
            } elseif (TypeQcu::class === $question->getType() || TypeEchelle::class === $question->getType() || TypeOuiNon::class === $question->getType()) {
                $exist->setCleReponse($cleReponse);
                $exist->setValeur($reponse->getValeur());
            } elseif (TypeQcm::class === $question->getType()) {
                // si c'est un QCM, on fait un tableau de réponse.
                $cleReponses = json_decode($exist->getCleReponse(), false, 512, JSON_THROW_ON_ERROR);
                $valeurs = json_decode($exist->getValeur(), false, 512, JSON_THROW_ON_ERROR);
                $idCle = array_search($cleReponse, $cleReponses, true);
                $idValeur = array_search($reponse->getValeur(), $valeurs, true);
                if (false !== $idCle && false !== $idValeur) {
                    // réponse déjà présente on supprime
                    unset($cleReponses[$idCle], $valeurs[$idValeur]);
                    $cleReponses = array_values($cleReponses);
                    $valeurs = array_values($valeurs);
                } else {
                    $cleReponses[] = $cleReponse;
                    $valeurs[] = $reponse->getValeur();
                }

                $exist->setCleReponse(json_encode($cleReponses, JSON_THROW_ON_ERROR));
                $exist->setValeur(json_encode($valeurs, JSON_THROW_ON_ERROR));
            }
            $this->entityManager->flush();
        }
    }

    public function abstractSauvegardeReponseTexte(
        QuestChoixInterface $choixUser,
        string $cleQuestion,
        string $typeDestinataire,
        string $value
    ): void {
        $exist = $this->questChoixRepository->findExistQuestion($cleQuestion, $choixUser, $typeDestinataire);

        $t = explode('_', $cleQuestion);
        $question = $this->questQuestionRepository->find(mb_substr($t[3], 1, mb_strlen($t[0])));

        if ('autre' === $t[3]) {
            $cleQuestion = $t[0] . '_' . $t[1] . '_reponses_' . $t[4] . '_autre';

            // gesion du cas autre...
            // on met à jour la question de base. On ajoute la réponse écrite
            if (null === $exist) {
                $qr = new QuestChoix();
                $qr->setQuestion($question);
                $qr->setTypeDestinataire($typeDestinataire);
                $qr->setIdQuestChoix($choixUser->getId());
                $qr->setCleReponse($cleQuestion);
                $qr->setValeur($value);
                $this->entityManager->persist($qr);
            } else {
                $exist->setValeur($value);
            }

            $this->entityManager->flush();
        } else {
            // pas autre
            if (null === $exist) {
                $qr = new QuestChoix();
                $qr->setQuestion($question);
                $qr->setTypeDestinataire($typeDestinataire);
                $qr->setIdQuestChoix($choixUser->getId());
                $qr->setCleReponse($cleQuestion);
                $qr->setValeur($value);
                $this->entityManager->persist($qr);
            } else {
                $exist->setValeur($value);
            }
            $this->entityManager->flush();
        }
    }

    public function abstractGetReponses(string $typeDestinataire): ReponsesUser
    {
        $this->reponses = new ReponsesUser();

        $reponses = $this->questChoixRepository->findBy([
            'idQuestChoix' => $this->choixUser->getId(),
            'typeDestinataire' => $typeDestinataire,
        ]);
        foreach ($reponses as $reponse) {
            $this->reponses->addReponse($reponse);
        }

        return $this->reponses;
    }
}
