<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/QuestQuestionnaire.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 18:39
 */

namespace App\Entity;

use App\Components\Questionnaire\TypeDestinataire\Exterieur;
use App\Entity\Traits\ConfigTrait;
use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\UuidTrait;
use App\Repository\QuestQuestionnaireRepository;
use Carbon\Carbon;
use Carbon\CarbonInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;

#[ORM\Entity(repositoryClass: QuestQuestionnaireRepository::class)]
#[ORM\HasLifecycleCallbacks]
class QuestQuestionnaire extends BaseEntity
{
    use UuidTrait;
    use LifeCycleTrait;
    use ConfigTrait;

    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $libelle = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?CarbonInterface $dateOuverture = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?CarbonInterface $dateFermeture = null;

    #[ORM\Column(type: Types::STRING, length: 150)]
    private ?string $titre = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $texteExplication = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $texteDebut = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $textFin = null;

    #[ORM\ManyToOne]
    private ?Departement $departement = null;

    #[ORM\ManyToOne(targetEntity: Personnel::class, inversedBy: 'quizzQuestions')]
    private ?Personnel $auteur = null;

    #[ORM\OneToMany(mappedBy: 'questionnaire', targetEntity: QuestSection::class)]
    #[ORM\OrderBy(['ordre' => 'ASC'])]
    private Collection $questSections;

    #[ORM\ManyToOne(targetEntity: Semestre::class)]
    private ?Semestre $semestre = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $typeDestinataire = null;

    #[ORM\Column]
    private ?bool $envoye = false;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $urlFin = null;


    public function __construct()
    {
        $this->questSections = new ArrayCollection();
        $this->setUuid(Uuid::uuid4());
    }

    public function __clone(): void
    {
        $this->libelle .= ' (copie)';
        $this->setCreated(Carbon::now());
        $this->setUpdated(Carbon::now());
        $this->setUuid(Uuid::uuid4());
    }

    /**
     * @return Collection<int, QuestSection>
     */
    public function getQuestSections(): Collection
    {
        return $this->questSections;
    }

    public function addQuestSection(QuestSection $questSection): self
    {
        if (!$this->questSections->contains($questSection)) {
            $this->questSections->add($questSection);
            $questSection->setQuestionnaire($this);
        }

        return $this;
    }

    public function removeQuestSection(QuestSection $questSection): self
    {
        if ($this->questSections->removeElement($questSection)) {
            // set the owning side to null (unless already changed)
            if ($questSection->getQuestionnaire() === $this) {
                $questSection->setQuestionnaire(null);
            }
        }

        return $this;
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    public function getDateOuverture(): ?CarbonInterface
    {
        return $this->dateOuverture;
    }

    public function setDateOuverture(?CarbonInterface $dateOuverture): self
    {
        $this->dateOuverture = $dateOuverture;

        return $this;
    }

    public function getDateFermeture(): ?CarbonInterface
    {
        return $this->dateFermeture;
    }

    public function setDateFermeture(?CarbonInterface $dateFermeture): self
    {
        $this->dateFermeture = $dateFermeture;

        return $this;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    public function getTexteExplication(): ?string
    {
        return $this->texteExplication;
    }

    public function setTexteExplication(?string $texteExplication): self
    {
        $this->texteExplication = $texteExplication;

        return $this;
    }

    public function getTexteDebut(): ?string
    {
        return $this->texteDebut;
    }

    public function setTexteDebut(?string $texteDebut): self
    {
        $this->texteDebut = $texteDebut;

        return $this;
    }

    public function getTextFin(): ?string
    {
        return $this->textFin;
    }

    public function setTextFin(?string $textFin): self
    {
        $this->textFin = $textFin;

        return $this;
    }

    public function getDepartement(): ?Departement
    {
        return $this->departement;
    }

    public function setDepartement(?Departement $departement): self
    {
        $this->departement = $departement;

        return $this;
    }

    public function getConfiguration(): ?string
    {
        return $this->configuration;
    }

    public function setConfiguration(?string $configuration): self
    {
        $this->configuration = $configuration;

        return $this;
    }

    public function getAuteur(): ?Personnel
    {
        return $this->auteur;
    }

    public function setAuteur(?Personnel $auteur): self
    {
        $this->auteur = $auteur;

        return $this;
    }

    public function getSemestre(): ?Semestre
    {
        return $this->semestre;
    }

    public function setSemestre(?Semestre $semestre): self
    {
        $this->semestre = $semestre;

        return $this;
    }

    public function getTypeDestinataire(): ?string
    {
        return $this->typeDestinataire;
    }

    public function setTypeDestinataire(?string $typeDestinataire): self
    {
        $this->typeDestinataire = $typeDestinataire;

        return $this;
    }

    public function typeDestinataireLink(): ?string
    {
        if ($this->typeDestinataire === \App\Components\Questionnaire\TypeDestinataire\Etudiant::class) {
            return 'etudiant';
        }

        if ($this->typeDestinataire === \App\Components\Questionnaire\TypeDestinataire\Personnel::class) {
            return 'personnel';
        }

        if ($this->typeDestinataire === Exterieur::class) {
            return 'exterieur';
        }

        return 'inconnu';
    }

    public function isEnvoye(): ?bool
    {
        return $this->envoye;
    }

    public function setEnvoye(bool $envoye): self
    {
        $this->envoye = $envoye;

        return $this;
    }

    public function getUrlFin(): ?string
    {
        return $this->urlFin;
    }

    public function setUrlFin(?string $urlFin): self
    {
        $this->urlFin = $urlFin;

        return $this;
    }
}
