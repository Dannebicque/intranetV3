<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Utilisateur.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/10/2021 11:51
 */

namespace App\Entity;

use Carbon\CarbonInterface;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use const JSON_THROW_ON_ERROR;
use JsonException;
use Serializable;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\MappedSuperclass
 * @ORM\HasLifecycleCallbacks()
 * @Vich\Uploadable
 */
abstract class Utilisateur implements UserInterface, PasswordAuthenticatedUserInterface, Serializable
{
    public const HOMME = 'M.';
    public const FEMME = 'Mme';

    /**
     * @ORM\Column(type="string", length=75)
     */
    protected ?string $username;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    protected ?string $password = '';

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     */
    protected ?string $slug;

    /**
     * @ORM\Column(type="string", length=75)
     */
    protected ?string $typeUser;

    /**
     * @ORM\Column(type="string", length=75)
     * @Groups({"utilisateur","etudiants_administration"})
     */
    protected ?string $nom;

    /**
     * @ORM\Column(type="string", length=75)
     * @Groups({"utilisateur","etudiants_administration"})
     */
    protected ?string $prenom;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     * @Groups({"etudiants_administration", "utilisateur"})
     */
    protected ?string $mailUniv;

    /**
     * @ORM\Column(type="string", length=255,nullable=true)
     */
    protected ?string $siteUniv;

    /**
     * @ORM\Column( type="string", length=255,nullable=true)
     */
    protected ?string $mailPerso;

    /**
     * @ORM\Column(type="string", length=255,nullable=true)
     */
    protected ?string $sitePerso;

    /**
     * @ORM\Column(name="civilite", type="string", length=3, options={"default":"M."})
     * @Groups({"etudiants_administration"})
     */
    protected string $civilite = Constantes::CIVILITE_HOMME;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    protected ?CarbonInterface $dateNaissance;

    /**
     * @ORM\Column(type="string", length=20,nullable=true)
     * @Groups({"etudiants_administration"})
     *
     */
    protected ?string $tel1;

    /**
     * @ORM\Column(type="string", length=20,nullable=true)
     * @Groups({"etudiants_administration"})
     */
    protected ?string $tel2;

    /**
     * @ORM\Column(type="text",nullable=true)
     */
    protected ?string $remarque;

    /**
     * @ORM\Column(type="text",nullable=true)
     */
    protected ?string $signature;

    /**
     * @ORM\Column(type="boolean")
     */
    protected bool $visible = true;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Adresse", cascade={"persist"})
     * @Groups({"etudiants_administration"})
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
    private ?string $lieuNaissance;

    public function __construct()
    {
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug($slug): void
    {
        $this->slug = $slug;
    }

    public function getTypeUser(): ?string
    {
        return $this->typeUser;
    }

    public function setTypeUser($typeUser): void
    {
        $this->typeUser = $typeUser;
    }

    public function getNom(): ?string
    {
        return mb_strtoupper($this->nom);
    }

    public function setNom($nom): void
    {
        $this->nom = $nom;
    }

    public function getPrenom(): ?string
    {
        return ucwords(mb_strtolower($this->prenom));
    }

    public function setPrenom($prenom): void
    {
        $this->prenom = $prenom;
    }

    public function getSiteUniv(): ?string
    {
        if ('' !== $this->siteUniv && null !== $this->siteUniv) {
            if (str_starts_with($this->siteUniv, 'http')) {
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

    public function getSitePerso(): ?string
    {
        if ('' !== $this->sitePerso && null !== $this->sitePerso) {
            if (str_starts_with($this->sitePerso, 'http')) {
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

    public function getDateNaissance(): ?CarbonInterface
    {
        return $this->dateNaissance;
    }

    public function setDateNaissance(?CarbonInterface $dateNaissance): void
    {
        $this->dateNaissance = $dateNaissance;
    }

    public function getTel1(): ?string
    {
        return $this->tel1;
    }

    public function setTel1(?string $tel1): void
    {
        $this->tel1 = $tel1;
    }

    public function getTel2(): ?string
    {
        return $this->tel2;
    }

    public function setTel2(?string $tel2): void
    {
        $this->tel2 = $tel2;
    }

    public function getRemarque(): ?string
    {
        return $this->remarque;
    }

    public function setRemarque(?string $remarque): void
    {
        $this->remarque = $remarque;
    }

    public function getSignature(): ?string
    {
        return $this->signature;
    }

    public function setSignature(?string $signature): void
    {
        $this->signature = $signature;
    }

    public function getVisible(): bool
    {
        return $this->visible;
    }

    public function setVisible(bool $visible = true): void
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

    //     * This method can be removed in Symfony 6.0 - is not needed for apps that do not check user passwords.
    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): void
    {
        $this->password = $password;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(?string $username): void
    {
        $this->username = $username;
    }

    /**
     * Retourne les rôles de l'user.
     *
     * @throws JsonException
     */
    public function getRoles(): array
    {
        $roles = json_decode($this->roles, true, 2, JSON_THROW_ON_ERROR);

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
        $this->roles = json_encode($roles, JSON_THROW_ON_ERROR);
    }

    public function getDisplayPr(): string
    {
        return $this->getPrenom() . ' ' . $this->getNom();
    }

    public function getDisplay(): string
    {
        return $this->getNom() . ' ' . $this->getPrenom();
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

    public function getMailUniv(): ?string
    {
        return $this->mailUniv;
    }

    public function setMailUniv(?string $mailUniv): void
    {
        $this->mailUniv = $mailUniv;
    }

    public function getMailPerso(): ?string
    {
        return $this->mailPerso;
    }

    public function setMailPerso(?string $mailPerso): void
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

    public function getAvatarInitiales(): ?string
    {
        return mb_strtoupper(mb_substr(trim($this->getPrenom()), 0, 1) . '' . mb_substr(trim($this->getNom()), 0, 1));
    }

    public function serialize(): ?string
    {
        return serialize($this->getId());
    }

    public function unserialize($data): void
    {
        $this->id = unserialize($data);
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

    public function getUserIdentifier(): string
    {
        return (string)$this->username;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }


    /**
     * This method can be removed in Symfony 6.0 - is not needed for apps that do not check user passwords.
     *
     * @see UserInterface
     */
    public function getSalt(): ?string
    {
        return null;
    }
}
