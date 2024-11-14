<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Utilisateur.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/11/2024 11:22
 */

namespace App\Entity;

use Carbon\CarbonInterface;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use JsonException;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use const JSON_THROW_ON_ERROR;

#[Vich\Uploadable]
#[ORM\MappedSuperclass]
#[ORM\HasLifecycleCallbacks]
abstract class Utilisateur implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Column(type: Types::STRING, length: 75, unique: true)]
    protected ?string $username = null;

    #[ORM\Column(type: Types::STRING, nullable: true)]
    protected ?string $password = null;

    #[ORM\Column(type: Types::STRING, length: 255, unique: true)]
    protected ?string $slug = null;

    #[ORM\Column(type: Types::STRING, length: 75)]
    protected ?string $typeUser = null;

    #[ORM\Column(type: Types::STRING, length: 75)]
    #[Groups(['etudiants_administration', 'utilisateur'])]
    protected ?string $nom = '';

    #[ORM\Column(type: Types::STRING, length: 75)]
    #[Groups(['etudiants_administration', 'utilisateur'])]
    protected ?string $prenom = null;

    #[ORM\Column(type: Types::STRING, length: 255, unique: true)]
    #[Groups(['etudiants_administration', 'utilisateur'])]
    protected ?string $mailUniv = null;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    protected ?string $siteUniv = null;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    protected ?string $mailPerso = null;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    protected ?string $sitePerso = null;

    #[ORM\Column(name: 'civilite', type: Types::STRING, length: 3, options: ['default' => Constantes::CIVILITE_HOMME])]
    #[Groups(['etudiants_administration', 'personnel:read'])]
    protected string $civilite = Constantes::CIVILITE_HOMME;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    protected ?CarbonInterface $dateNaissance = null;

    #[ORM\Column(type: Types::STRING, length: 20, nullable: true)]
    #[Groups(['etudiants_administration'])]
    protected ?string $tel1 = null;

    #[ORM\Column(type: Types::STRING, length: 20, nullable: true)]
    #[Groups(['etudiants_administration'])]
    protected ?string $tel2 = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    protected ?string $remarque = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    protected ?string $signature = null;

    #[ORM\Column(type: Types::BOOLEAN)]
    protected bool $visible = true;

    #[ORM\OneToOne(targetEntity: Adresse::class, cascade: ['persist'])]
    #[Groups(['etudiants_administration'])]
    private ?Adresse $adresse = null;

    #[ORM\Column(type: Types::TEXT)]
    private string $roles = '';

    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    private ?string $resetToken = null;

    #[ORM\Column(type: Types::STRING, length: 150, nullable: true)]
    private ?string $lieuNaissance = null;

    public function __construct()
    {
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(?string $slug): void
    {
        $this->slug = $slug;
    }

    public function getTypeUser(): ?string
    {
        return $this->typeUser;
    }

    public function setTypeUser(?string $typeUser): void
    {
        $this->typeUser = $typeUser;
    }

    public function getSiteUniv(): ?string
    {
        if ('' !== $this->siteUniv && null !== $this->siteUniv) {
            if (str_starts_with($this->siteUniv, 'http')) {
                return $this->siteUniv;
            }

            return 'https://'.$this->siteUniv;
        }

        return $this->siteUniv;
    }

    public function setSiteUniv(?string $siteUniv): void
    {
        $this->siteUniv = $siteUniv;
    }

    public function getSitePerso(): ?string
    {
        if ('' !== $this->sitePerso && null !== $this->sitePerso) {
            if (str_starts_with($this->sitePerso, 'http')) {
                return $this->sitePerso;
            }

            return 'https://'.$this->sitePerso;
        }

        return $this->sitePerso;
    }

    public function setSitePerso(?string $sitePerso): void
    {
        $this->sitePerso = $sitePerso;
    }

    public function getCivilite(): ?string
    {
        return $this->civilite;
    }

    public function setCivilite(?string $civilite): void
    {
        $this->civilite = $civilite;
    }

    public function getCiviliteLong(): ?string
    {
        return Constantes::CIVILITE_HOMME === $this->civilite ? 'Monsieur' : 'Madame';
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
        return $this->getPrenom().' '.$this->getNom();
    }

    public function getPrenom(): ?string
    {
        return ucwords(mb_strtolower($this->prenom));
    }

    public function setPrenom(?string $prenom): void
    {
        $this->prenom = $prenom;
    }

    public function getNom(): ?string
    {
        return mb_strtoupper($this->nom);
    }

    public function setNom(?string $nom): void
    {
        $this->nom = $nom;
    }

    public function getDisplay(): string
    {
        return $this->getNom().' '.$this->getPrenom();
    }

    public function getMails(): array
    {
        $mails = [];
        if (null !== $this->getMailUniv() && '' !== trim($this->getMailUniv())) {
            $mails[] = trim($this->getMailUniv());
        }

//        if (null !== $this->getMailPerso() && '' !== trim($this->getMailPerso())) {
//            $mails[] = trim($this->getMailPerso());
//        }

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
        return mb_strtoupper(mb_substr(trim($this->getPrenom()), 0, 1).mb_substr(trim($this->getNom()), 0, 1));
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
        return (string) $this->username;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials(): void
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

    public function serialize(): string
    {
        return serialize($this->__serialize());
    }

    public function code(): string
    {
        return md5($this->getSlug());
    }
}
