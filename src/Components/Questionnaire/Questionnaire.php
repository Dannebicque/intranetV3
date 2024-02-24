<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/Questionnaire.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 08:59
 */

namespace App\Components\Questionnaire;

use App\Components\Graphs\GraphRegistry;
use App\Components\Questionnaire\DTO\AbstractQuestionnaire;
use App\Components\Questionnaire\DTO\ListeChoix;
use App\Components\Questionnaire\DTO\ReponsesUser;
use App\Components\Questionnaire\Interfaces\QuestChoixInterface;
use App\Components\Questionnaire\Section\AbstractSection;
use App\Components\Questionnaire\Section\ConfigurableSection;
use App\Components\Questionnaire\Section\EndSection;
use App\Components\Questionnaire\Section\StartSection;
use App\Entity\QuestChoix;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Routing\RouterInterface;
use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

class Questionnaire
{
    private const DEFAULT_TEMPLATE = 'components/questionnaire/questionnaire.html.twig';
    private const DEFAULT_TEMPLATE_RESULTATS = 'components/questionnaire/questionnaire_resultats.html.twig';
    private const DEFAULT_TEMPLATE_GRAPHIQUES = 'components/questionnaire/questionnaire_graphiques.html.twig';

    protected Sections $sections;
    protected ReponsesUser $reponses;
    protected ?string $choixUserUuid = null;

    protected ListeChoix $listeChoix;
    private AbstractQuestionnaire $questionnaire;
    private array $options = [];
    private ?int $ordreSection = null;

    public function __construct(
        private readonly Environment $twig,
        private readonly RouterInterface $router,
        private readonly QuestionnaireRegistry $questionnaireRegistry,
        private readonly GraphRegistry $graphRegistry
    ) {
        $this->sections = new Sections();
        $this->listeChoix = new ListeChoix();
    }

    public function setChoixUser(QuestChoixInterface $choix): void
    {
        $this->choixUserUuid = $choix->getCleQuestionnaire();
    }

    public function getChoixUser(): ?string
    {
        return $this->choixUserUuid;
    }

    public function createQuestionnaire(
        string $type,
        AbstractQuestionnaire $abstractQuestionnaire,
        array $options = []
    ): Questionnaire {
        $resolver = new OptionsResolver();
        $this->configureOptions($resolver);
        $this->options = $resolver->resolve($options);
        $this->questionnaire = $abstractQuestionnaire;

        return $this;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'template' => self::DEFAULT_TEMPLATE,
            'template_resultats' => self::DEFAULT_TEMPLATE_RESULTATS,
            'template_graphiques' => self::DEFAULT_TEMPLATE_GRAPHIQUES,
            'mode' => AbstractQuestionnaire::MODE_APERCU,
            'route' => '',
            'routeEnd' => '',
            'params' => [],
            'paramsEnd' => []
        ]);
    }

    public function addSection(DTO\Section $section): Questionnaire
    {
        if (ConfigurableSection::class === $section->typeSection) {
            // c'est configurable, potentiellement plusieurs sections à créer
            $configSection = new ConfigurableSection($this->questionnaireRegistry, $this->graphRegistry);
            $configSection->setSection($section, [
                'mode' => $this->options['mode'],
                'questionnaireUuid' => $this->getQuestionnaire()->uuidString,
                'choixUserUuid' => $this->choixUserUuid,
            ]);
            $sections = $configSection->genereSections();
            foreach ($sections as $cSection) {
                // pour chaque "section configurable", on ajoute une section "classique"
                $this->sections->addSection($cSection);
            }
        } else {
            $abstractSection = new Section\Section($this->questionnaireRegistry, $this->graphRegistry);
            $abstractSection->setSection($section, [
                'mode' => $this->options['mode'],
                'questionnaireUuid' => $this->getQuestionnaire()->uuidString,
                'choixUserUuid' => $this->choixUserUuid,
            ]);
            $this->sections->addSection($abstractSection->getSection());
        }

        return $this;
    }

    public function getOptions(): array
    {
        return $this->options;
    }

    public function getOption(string $name): string
    {
        return $this->options[$name];
    }

    public function getQuestionnaire(): AbstractQuestionnaire
    {
        return $this->questionnaire;
    }

    public function createView(): Questionnaire
    {
        return $this;
    }

    public function getSections(): array
    {
        return $this->sections->getSections();
    }

    public function getSection(int $ordreSection): ?AbstractSection
    {
        foreach ($this->getSections() as $section) {
            if ($section->arrayKey === $ordreSection) {
                return $section;
            }
        }

        return null;
    }

    public function AddSpecialSection(string $type): Questionnaire
    {
        $abstractSection = match ($type) {
            AbstractSection::INTRODUCTION => (new StartSection($this->questionnaireRegistry,
                $this->graphRegistry))->setQuestionnaire($this->questionnaire),
            AbstractSection::END => (new EndSection($this->questionnaireRegistry,
                $this->graphRegistry))->setQuestionnaire(count($this->getSections()),
                $this->questionnaire),
        };
        $abstractSection->setOptions(['mode' => $this->options['mode']]);
        $this->sections->addSection($abstractSection);

        return $this;
    }

    public function setQuestionsForSection(?ReponsesUser $reponsesUser = null): void
    {
        foreach ($this->getSections() as $section) {
            if ($section instanceof Section\Section && $section->arrayKey === $this->ordreSection) {
                $section->prepareQuestions([
                    'questionnaireUuid' => $this->getQuestionnaire()->uuidString,
                    'choixUserUuid' => $this->choixUserUuid,
                    'mode' => $this->getOption('mode'),
                ], $reponsesUser);
                break;
            }
        }
    }

    public function setReponses(ReponsesUser $reponses): void
    {
        $this->reponses = $reponses;
    }

    public function getUrl(): string
    {
        if (array_key_exists('route', $this->options) && array_key_exists('params', $this->options)) {
            return $this->router->generate($this->options['route'], $this->options['params']);
        }

        return '';
    }

    public function handleRequest(Request $request): bool
    {
        if ($request->isMethod('POST')) {
            $this->ordreSection = (int) $request->query->get('page');

            return true;
        }

        return false;
    }

    /**
     * @throws RuntimeError
     * @throws SyntaxError
     * @throws LoaderError
     */
    public function wizardPage(string $template = 'components/questionnaire/_wizard.html.twig', array $options = []): Response
    {
        $params = array_merge([
            'section' => $this->getSection($this->ordreSection),
            'questionnaireUuid' => $this->questionnaire->uuidString,
        ], $options);

        return new Response($this->twig->render($template, $params));
    }

    public function getOnlySectionConfigurable(DTO\Section $section): ?array
    {
        if (ConfigurableSection::class === $section->typeSection) {
            $configSection = new ConfigurableSection($this->questionnaireRegistry, $this->graphRegistry);
            $configSection->setSection($section);

            return
                [
                    'section' => $section,
                    'datas' => $configSection->getDataPourConfiguration($this->questionnaire->semestre),
                ];
        }

        return null;
    }

    public function getUrlEnd(): string
    {
//        if ('' !== $this->options['routeEnd']) {
//            return $this->router->generate($this->options['routeEnd'], $this->options['paramsEnd']);
//        }

        return 'https://www.iut-troyes.univ-reims.fr';
    }

    public function calculResultats(ListeChoix $listeChoix): void
    {
        foreach ($this->getSections() as $section) {
            if ($section instanceof Section\Section) {
                $section->calculResultatsQuestions([
                    'questionnaireUuid' => $this->questionnaire->uuidString,
                    'mode' => $this->getOption('mode'),
                ], $listeChoix);
            }
        }
    }

    public function addChoix(QuestChoix $reponse): void
    {
        $this->listeChoix->addChoix($reponse);
    }

    /**
     * @return ListeChoix
     */
    public function getListeChoix(): ListeChoix
    {
        return $this->listeChoix;
    }

    public function exportExcel(): void
    {


    }
}
