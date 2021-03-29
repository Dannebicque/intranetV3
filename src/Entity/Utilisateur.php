<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Utilisateur.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/03/2021 12:00
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use DateTime;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;
use JsonException;
use Serializable;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\MappedSuperclass
 * @ORM\HasLifecycleCallbacks()
 * @Vich\Uploadable
 */
abstract class Utilisateur implements UserInterface, Serializable
{

    public const HOMME = 'M.';
    public const FEMME = 'Mme';

    /**
     * @ORM\Column(type="string", length=75)
     */
    protected $username;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    protected ?string $password = '';

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     */
    protected $slug;

    /**
     * @ORM\Column(type="string", length=75)
     */
    protected $typeUser;

    /**
     * @ORM\Column(type="string", length=75)
     * @Groups({"utilisateur","etudiants_administration"})
     */
    protected $nom;

    /**
     * @ORM\Column(type="string", length=75)
     * @Groups({"utilisateur","etudiants_administration"})
     */
    protected $prenom;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     * @Groups({"etudiants_administration", "utilisateur"})
     */
    protected $mailUniv;

    /**
     * @ORM\Column(type="string", length=255,nullable=true)
     */
    protected $siteUniv;

    /**
     * @ORM\Column( type="string", length=255,nullable=true)
     */
    protected $mailPerso;

    /**
     * @ORM\Column(type="string", length=255,nullable=true)
     */
    protected $sitePerso;

    /**
     * @ORM\Column(name="civilite", type="string", length=3, options={"default":"M."})
     * @Groups({"etudiants_administration"})
     */
    protected string $civilite = 'M.'; //M. ou Mme

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    protected $dateNaissance;

    /**
     * @ORM\Column(type="string", length=20,nullable=true)
     */
    protected $tel1;

    /**
     * @ORM\Column(type="string", length=20,nullable=true)
     */
    protected $tel2;

    /**
     * @ORM\Column(type="text",nullable=true)
     */
    protected $remarque;

    /**
     * @ORM\Column(type="text",nullable=true)
     */
    protected $signature;

    /**
     * @ORM\Column(type="boolean")
     */
    protected bool $visible = true;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Adresse", cascade={"persist"})
     */
    private ?Adresse $adresse;

    /**
     * @ORM\Column(type="text")
     */
    private string $roles = '';

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private ?string $resetToken;

    /**
     * @ORM\Column(type="string", length=150, nullable=true)
     */
    private $lieuNaissance;

    public function __construct()
    {
    }

    public function getSlug()
    {
        return $this->slug;
    }

    public function setSlug($slug): void
    {
        $this->slug = $slug;
    }

    public function getTypeUser()
    {
        return $this->typeUser;
    }

    public function setTypeUser($typeUser): void
    {
        $this->typeUser = $typeUser;
    }

    public function getNom()
    {
        return $this->nom;
    }

    public function setNom($nom): void
    {
        $this->nom = $nom;
    }

    public function getPrenom()
    {
        return $this->prenom;
    }

    public function setPrenom($prenom): void
    {
        $this->prenom = $prenom;
    }

    public function getSiteUniv()
    {
        if ('' !== $this->siteUniv && null !== $this->siteUniv) {
            if (0 === mb_strpos($this->siteUniv, 'http')) {
                return $this->siteUniv;
            }

            return 'https://' . $this->siteUniv;
        }

        return $this->siteUniv;
    }

    public function setSiteUniv($siteUniv): void
    {
        $this->siteUniv = $siteUniv;
    }

    public function getSitePerso()
    {
        if ('' !== $this->sitePerso && null !== $this->sitePerso) {
            if (0 === mb_strpos($this->sitePerso, 'http')) {
                return $this->sitePerso;
            }

            return 'https://' . $this->sitePerso;
        }

        return $this->sitePerso;
    }

    public function setSitePerso($sitePerso): void
    {
        $this->sitePerso = $sitePerso;
    }

    public function getCivilite(): ?string
    {
        return $this->civilite;
    }

    public function getCiviliteLong(): ?string
    {
        return 'M.' === $this->civilite ? 'Monsieur' : 'Madame';
    }

    /**
     * @param $civilite
     */
    public function setCivilite($civilite): void
    {
        $this->civilite = $civilite;
    }

    public function getDateNaissance()
    {
        return $this->dateNaissance;
    }

    /**
     * @param mixed $dateNaissance
     */
    public function setDateNaissance(?DateTimeInterface $dateNaissance): void
    {
        $this->dateNaissance = $dateNaissance;
    }

    public function getTel1()
    {
        return $this->tel1;
    }

    public function setTel1($tel1): void
    {
        $this->tel1 = $tel1;
    }

    public function getTel2()
    {
        return $this->tel2;
    }

    public function setTel2($tel2): void
    {
        $this->tel2 = $tel2;
    }

    public function getRemarque()
    {
        return $this->remarque;
    }

    public function setRemarque($remarque): void
    {
        $this->remarque = $remarque;
    }

    public function getSignature()
    {
        return $this->signature;
    }

    public function setSignature($signature): void
    {
        $this->signature = $signature;
    }

    public function getVisible()
    {
        return $this->visible;
    }

    public function setVisible($visible): void
    {
        $this->visible = $visible;
    }

    public function getAdresse(): ?Adresse
    {
        return $this->adresse;
    }

    public function setAdresse(?Adresse $adresse): void
    {
        $this->adresse = $adresse;
    }

    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): void
    {
        $this->password = $password;
    }

    /**
     * Removes sensitive data from the user.
     *
     * {@inheritdoc}
     */
    public function eraseCredentials(): void
    {
        // Nous n'avons pas besoin de cette methode car nous n'utilions pas de plainPassword
        // Mais elle est obligatoire car comprise dans l'interface UserInterface
    }

    /**
     * @return mixed
     */
    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername($username): void
    {
        $this->username = $username;
    }

    /**
     * Retour le salt qui a servi à coder le mot de passe.
     *
     * {@inheritdoc}
     */
    public function getSalt(): ?string
    {
        // See "Do you need to use a Salt?" at https://symfony.com/doc/current/cookbook/security/entity_provider.html
        // we're using bcrypt in security.yml to encode the password, so
        // the salt value is built-in and you don't have to generate one

        return null;
    }

    /**
     * Retourne les rôles de l'user.
     *
     * @throws JsonException
     */
    public function getRoles(): array
    {
        $roles = json_decode($this->roles, true, 2, \JSON_THROW_ON_ERROR);

        // Afin d'être sûr qu'un user a toujours au moins 1 rôle
        if (empty($roles)) {
            $roles[] = 'ROLE_USER';
        }

        return array_unique($roles);
    }

    /**
     * @throws JsonException
     */
    public function setRoles(array $roles): void
    {
        $this->roles = json_encode($roles, \JSON_THROW_ON_ERROR);
    }

    public function getDisplayPr(): string
    {
        return ucfirst($this->prenom) . ' ' . mb_strtoupper($this->nom);
    }

    public function getDisplay(): string
    {
        return mb_strtoupper($this->nom) . ' ' . ucfirst($this->prenom);
    }

    public function getMails(): array
    {
        $mails = [];
        if (null !== $this->getMailUniv() && '' !== trim($this->getMailUniv())) {
            $mails[] = trim($this->getMailUniv());
        }

        if (null !== $this->getMailPerso() && '' !== trim($this->getMailPerso())) {
            $mails[] = trim($this->getMailPerso());
        }

        return $mails;
    }

    public function getMailUniv()
    {
        return $this->mailUniv;
    }

    public function setMailUniv($mailUniv): void
    {
        $this->mailUniv = $mailUniv;
    }

    public function getMailPerso()
    {
        return $this->mailPerso;
    }

    public function setMailPerso($mailPerso): void
    {
        $this->mailPerso = $mailPerso;
    }

    public function getResetToken(): ?string
    {
        return $this->resetToken;
    }

    public function setResetToken(?string $resetToken): self
    {
        $this->resetToken = $resetToken;

        return $this;
    }

    public function getAvatarInitiales()
    {
        return mb_strtoupper(mb_substr(trim($this->getPrenom()), 0, 1) . '' . mb_substr(trim($this->getNom()), 0, 1));
    }

    public function serialize()
    {
        return serialize($this->getId());
    }

    public function unserialize($serialized)
    {
        $this->uuid = unserialize($serialized);
    }

    public function getLieuNaissance(): ?string
    {
        return $this->lieuNaissance;
    }

    public function setLieuNaissance(?string $lieuNaissance): self
    {
        $this->lieuNaissance = $lieuNaissance;

        return $this;
    }
}
