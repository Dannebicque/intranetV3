<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Questionnaire.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/10/2021 18:17
 */

namespace App\Components\Questionnaire;

use App\Components\Questionnaire\DTO\AbstractQuestionnaire;
use App\Components\Questionnaire\DTO\ReponsesEtudiant;
use App\Components\Questionnaire\Section\AbstractSection;
use App\Components\Questionnaire\Section\ConfigurableSection;
use App\Components\Questionnaire\Section\EndSection;
use App\Components\Questionnaire\Section\StartSection;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Routing\RouterInterface;
use Twig\Environment;

class Questionnaire
{
    private const DEFAULT_TEMPLATE = 'components/questionnaire/questionnaire.html.twig';

    protected Sections $sections;
    protected ReponsesEtudiant  $reponses;
    protected ?int $etudiant = null;
    private AbstractQuestionnaire $questionnaire;
    private array $options = [];
    private QuestionnaireRegistry $questionnaireRegistry;
    private string $typeQuestionnaire;
    private RouterInterface $router;
    private Environment $twig;
    private ?int $ordreSection;

    public function __construct(
        Environment $twig,
        RouterInterface $router,
        QuestionnaireRegistry $questionnaireRegistry
    ) {
        $this->sections = new Sections();
        $this->questionnaireRegistry = $questionnaireRegistry;
        $this->router = $router;
        $this->twig = $twig;
    }

    public function setIdEtudiant(?int $etudiant)
    {
        $this->etudiant = $etudiant;
    }

    public function createQuestionnaire(
        string $type,
        AbstractQuestionnaire $abstractQuestionnaire,
        array $options = []
    ): Questionnaire {
        $resolver = new OptionsResolver();
        $this->configureOptions($resolver);
        $this->options = $resolver->resolve($options);
        $this->typeQuestionnaire = $type;
        $this->questionnaire = $abstractQuestionnaire;

        return $this;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'template' => self::DEFAULT_TEMPLATE,
            'mode' => AbstractQuestionnaire::MODE_APERCU,
            'route' => '',
            'routeEnd' => '',
            'params' => [],
            'paramsEnd' => [],
        ]);
    }

    public function addSection(DTO\Section $section): Questionnaire
    {
        if (ConfigurableSection::class === $section->typeSection) {
            //c'est configurable, potentiellement plusieurs sections à créer
            $configSection = new ConfigurableSection($this->questionnaireRegistry);
            $configSection->setSection($section,[
                'questionnaire_id' => $this->getQuestionnaire()->id,
                'etudiant_id' => $this->etudiant,
            ]);
            $sections = $configSection->genereSections();
            foreach ($sections as $cSection) {
                //pour chaque "section configurable", on ajoute une section "classique"
                $this->sections->addSection($cSection);
            }
        } else {
            $abstractSection = new Section\Section($this->questionnaireRegistry);
            $abstractSection->setSection($section, [
                'questionnaire_id' => $this->getQuestionnaire()->id,
                'etudiant_id' => $this->etudiant,
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

    public function AddSpecialSection($type): Questionnaire
    {
        $abstractSection = match ($type) {
            AbstractSection::INTRODUCTION => (new StartSection($this->questionnaireRegistry))->setQuestionnaire($this->questionnaire),
            AbstractSection::END => (new EndSection($this->questionnaireRegistry))->setQuestionnaire(count($this->getSections()),
                $this->questionnaire),
        };
        $this->sections->addSection($abstractSection);

        return $this;
    }

    public function setQuestionsForSection(?ReponsesEtudiant $reponsesEtudiant = null): void
    {
        foreach ($this->getSections() as $section) {
            if ($section instanceof Section\Section && $section->arrayKey === $this->ordreSection) {
                $section->prepareQuestions([
                    'questionnaire_id' => $this->getQuestionnaire()->id,
                    'etudiant_id' => $this->etudiant,
                    'mode' => $this->getOption('mode'),
                ], $reponsesEtudiant);
                break;
            }
        }
    }

    public function getIdEtudiant()
    {
        return $this->etudiant;
    }

    public function setReponses(ReponsesEtudiant $reponses)
    {
        $this->reponses = $reponses;
    }

    public function getUrl()
    {
        if (array_key_exists('route', $this->options) && array_key_exists('params', $this->options)) {
            return $this->router->generate($this->options['route'], $this->options['params']);
        }
    }

    public function handleRequest(Request $request)
    {
        if ($request->isMethod('POST')) {
            $this->ordreSection = (int)$request->query->get('page');
            return true;
        }

        return false;
    }

    public function wizardPage($template = 'components/questionnaire/_wizard.html.twig', array $options = []): Response
    {
        $params = array_merge([
            'section' => $this->getSection($this->ordreSection),
            'idQuestionnaire' => $this->questionnaire->id,
        ], $options);
        return new Response($this->twig->render($template, $params));
    }

    public function getOnlySectionConfigurable(DTO\Section $section)
    {
        if (ConfigurableSection::class === $section->typeSection) {
            $this->addSection($section);
        }
    }

    public function getUrlEnd()
    {
        if (array_key_exists('routeEnd', $this->options) && array_key_exists('paramsEnd', $this->options)) {
            return $this->router->generate($this->options['routeEnd'], $this->options['paramsEnd']);
        }

        return '';
    }
}
