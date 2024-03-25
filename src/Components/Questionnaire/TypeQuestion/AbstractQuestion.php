<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/TypeQuestion/AbstractQuestion.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 08:59
 */

namespace App\Components\Questionnaire\TypeQuestion;

use App\Components\Graphs\GraphRegistry;
use App\Components\Questionnaire\DTO\AbstractQuestionnaire;
use App\Components\Questionnaire\DTO\Choix;
use App\Components\Questionnaire\DTO\Question;
use App\Components\Questionnaire\DTO\Reponse;
use App\Components\Questionnaire\Reponses;
use App\Entity\QuestChoix;
use App\Entity\QuestQuestion;
use App\Entity\QuestReponse;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\OptionsResolver\OptionsResolver;

abstract class AbstractQuestion
{
    public const LABEL = 'non_defini'; // ajouter constante de couleur et de nom de template ?
    public const BADGE = 'non_defini'; // ajouter constante de couleur et de nom de template ?
    public const ICON = 'non_defini'; // ajouter constante de couleur et de nom de template ?

    public string $libelle;
    public ?array $valeurs = null;
    public ?string $valeur_config = '';

    public ?string $help = null;
    public int $id;
    public array $parametres = [];
    public array $config;
    public ?string $cle;
    public bool $obligatoire = true;
    public array $options = [];
    public ?Question $questionParente = null;
    public bool $hasEnfants = false;
    public string $numero = '1';
    //  public Collection $questionsEnfants;
    public array $reponsesUser = [];
    protected array $data;

    protected ?EntityManagerInterface $em;
    private readonly Reponses $reponses;
    public ?QuestChoix $reponseUser = null;
    public ?Choix $choix = null;

    public function __construct(protected GraphRegistry $graphRegistry)
    {
        $this->reponses = new Reponses();
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver
            ->setDefault('mode', AbstractQuestionnaire::MODE_APERCU)
            ->setDefault('type_question', '')
            ->setDefault('parametres', [])
            ->setDefault('type', [])
            ->setDefault('alignement', [])
            ->setDefault('questionnaireUuid', null)
            ->setDefault('choixUserUuid', null)
            ->setDefault('block_name', '');
    }

    public function getOption(string $name): mixed
    {
        return $this->options[$name];
    }

    public function getOptions(): array
    {
        return $this->options;
    }

    public function sauvegarde(
        QuestQuestion $question,
        Request $request,
        ?EntityManagerInterface $entityManager = null
    ): void {
        $this->data = $request->request->all()[$request->request->keys()[0]];
        $this->em = $entityManager;

        $question->setLibelle($this->data['libelle']);
        $question->setObligatoire($this->data['obligatoire']);
        $question->setHelp($this->data['help']);
    }

    public function addReponse(Reponse $reponse): void
    {
        $this->reponses->addReponse($reponse);
    }

    public function getReponses(): array
    {
        return $this->reponses->getReponses();
    }

    public function getReponsesArray(): array
    {
        $t = [];
        foreach ($this->reponses->getReponses() as $reponse) {
            $t[$reponse->id] = $reponse->libelle;
        }
        return $t;
    }

    protected function removeReponses(QuestQuestion $question, EntityManagerInterface $entityManager): void
    {
        foreach ($question->getQuestReponses() as $reponse) {
            $entityManager->remove($reponse);
        }
        $entityManager->flush();
    }

    protected function sauvegardeReponses(
        QuestQuestion $question,
        ?EntityManagerInterface $entityManager
    ): void
    {
        if (array_key_exists('questReponses', $this->data) && null !== $entityManager) {
            $this->removeReponses($question, $entityManager);//todo: suppression des réponses existantes plus générale
            foreach ($this->data['questReponses'] as $reponse) {
                $qR = new QuestReponse();
                $qR->setLibelle($reponse['libelle']);
                $qR->setOrdre($reponse['ordre']);
                $qR->setValeur($reponse['valeur']);
                $qR->setQuestion($question);
                $entityManager->persist($qR);
            }
        }
    }
}
