<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;


/**
 * @ORM\MappedSuperclass
 *
 */
abstract class Utilisateur implements UserInterface
{
    /**
     * @ORM\Column(type="string", length=75)
     *
     */
    protected $username;

    /**
     * @var string
     *
     * @ORM\Column(type="string")
     */
    protected $password;

    /**
     * @ORM\Column(type="string", length=255)
     */
    protected $slug;

    /**
     * @ORM\Column(type="string", length=75)
     *
     */
    protected $type_user;

    /**
     * @ORM\Column(type="string", length=75)
     *
     */
    protected $nom;

    /**
     * @ORM\Column(type="string", length=75)
     *
     */
    protected $prenom;

    /**
     * @ORM\Column(type="string", length=255)
     *
     */
    protected $mail_univ;

    /**
     * @ORM\Column(type="string", length=255,nullable=true)
     *
     */
    protected $site_univ;

    /**
     * @ORM\Column( type="string", length=255,nullable=true)
     *
     */
    protected $mail_perso;

    /**
     * @ORM\Column(type="string", length=255,nullable=true)
     *
     */
    protected $site_perso;

    /**
     * @ORM\Column(name="sexe", type="string", length=1, options={"default":"M"})
     *
     */
    protected $sexe = 'H'; //H ou F

    /**
     * @ORM\Column(type="date",nullable=true)
     *
     */
    protected $date_naissance;

    /**
     * @ORM\Column(type="string", length=20,nullable=true)
     *
     */
    protected $tel1;

    /**
     * @ORM\Column(type="string", length=20,nullable=true)
     *
     */
    protected $tel2;

    /**
     * @ORM\Column(type="text",nullable=true)
     *
     */
    protected $remarque;

    /**
     * @ORM\Column(type="text",nullable=true)
     *
     */
    protected $signature;

    /**
     * @ORM\Column(type="boolean")
     *
     */
    protected $visible = true;

    /**
     * @var Adresse
     * @ORM\OneToOne(targetEntity="App\Entity\Adresse")
     */
    private $adresse;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     *
     */
    protected $photo;

    /**
     * @var string
     *
     * @ORM\Column(type="text")
     */
    private $roles = '';

    /**
     * @var \DateTime $created
     * @ORM\Column(type="datetime")
     */
    private $created;

    /**
     * @var \DateTime $updated
     * @ORM\Column(type="datetime")
     */
    private $updated;

    /**
     * @return mixed
     */
    public function getSlug()
    {
        return $this->slug;
    }

    /**
     * @param mixed $slug
     */
    public function setSlug($slug): void
    {
        $this->slug = $slug;
    }

    /**
     * @ORM\PreUpdate()
     * @ORM\PrePersist()
     */
    public function setUpdatedValue(): void
    {
        $this->updated = new \DateTime();
    }

    /**
     * @ORM\PrePersist()
     */
    public function setCreatedValue(): void
    {
        $this->created = new \DateTime();
    }

    /**
     * @return \DateTime
     */
    public function getCreated(): \DateTime
    {
        return $this->created;
    }

    /**
     * @param \DateTime $created
     */
    public function setCreated(\DateTime $created): void
    {
        $this->created = $created;
    }

    /**
     * @return \DateTime
     */
    public function getUpdated(): \DateTime
    {
        return $this->updated;
    }

    /**
     * @return mixed
     */
    public function getTypeUser()
    {
        return $this->type_user;
    }

    /**
     * @param mixed $type_user
     */
    public function setTypeUser($type_user): void
    {
        $this->type_user = $type_user;
    }

    /**
     * @return mixed
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * @param mixed $nom
     */
    public function setNom($nom): void
    {
        $this->nom = $nom;
    }

    /**
     * @return mixed
     */
    public function getPrenom()
    {
        return $this->prenom;
    }

    /**
     * @param mixed $prenom
     */
    public function setPrenom($prenom): void
    {
        $this->prenom = $prenom;
    }

    /**
     * @return mixed
     */
    public function getMailUniv()
    {
        return $this->mail_univ;
    }

    /**
     * @param mixed $mail_univ
     */
    public function setMailUniv($mail_univ): void
    {
        $this->mail_univ = $mail_univ;
    }

    /**
     * @return mixed
     */
    public function getSiteUniv()
    {
        return $this->site_univ;
    }

    /**
     * @param mixed $site_univ
     */
    public function setSiteUniv($site_univ): void
    {
        $this->site_univ = $site_univ;
    }

    /**
     * @return mixed
     */
    public function getMailPerso()
    {
        return $this->mail_perso;
    }

    /**
     * @param mixed $mail_perso
     */
    public function setMailPerso($mail_perso): void
    {
        $this->mail_perso = $mail_perso;
    }

    /**
     * @return mixed
     */
    public function getSitePerso()
    {
        return $this->site_perso;
    }

    /**
     * @param mixed $site_perso
     */
    public function setSitePerso($site_perso): void
    {
        $this->site_perso = $site_perso;
    }

    /**
     * @return mixed
     */
    public function getSexe()
    {
        return $this->sexe;
    }

    /**
     * @param mixed $sexe
     */
    public function setSexe($sexe): void
    {
        $this->sexe = $sexe;
    }

    /**
     * @return mixed
     */
    public function getDateNaissance()
    {
        return $this->date_naissance;
    }

    /**
     * @param mixed $date_naissance
     */
    public function setDateNaissance($date_naissance): void
    {
        $this->date_naissance = $date_naissance;
    }

    /**
     * @return mixed
     */
    public function getTel1()
    {
        return $this->tel1;
    }

    /**
     * @param mixed $tel1
     */
    public function setTel1($tel1): void
    {
        $this->tel1 = $tel1;
    }

    /**
     * @return mixed
     */
    public function getTel2()
    {
        return $this->tel2;
    }

    /**
     * @param mixed $tel2
     */
    public function setTel2($tel2): void
    {
        $this->tel2 = $tel2;
    }

    /**
     * @return mixed
     */
    public function getRemarque()
    {
        return $this->remarque;
    }

    /**
     * @param mixed $remarque
     */
    public function setRemarque($remarque): void
    {
        $this->remarque = $remarque;
    }

    /**
     * @return mixed
     */
    public function getSignature()
    {
        return $this->signature;
    }

    /**
     * @param mixed $signature
     */
    public function setSignature($signature): void
    {
        $this->signature = $signature;
    }

    /**
     * @return mixed
     */
    public function getVisible()
    {
        return $this->visible;
    }

    /**
     * @param mixed $visible
     */
    public function setVisible($visible): void
    {
        $this->visible = $visible;
    }

    /**
     * @return Adresse
     */
    public function getAdresse(): ?Adresse
    {
        return $this->adresse;
    }

    /**
     * @param Adresse $adresse
     */
    public function setAdresse(Adresse $adresse): void
    {
        $this->adresse = $adresse;
    }

    /**
     * @return mixed
     */
    public function getPhoto()
    {
        return $this->photo;
    }

    /**
     * @param mixed $photo
     */
    public function setPhoto($photo): void
    {
        $this->photo = $photo;
    }

    /**
     * @return string
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    /**
     * @param string $password
     */
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
        // $this->plainPassword = null;
    }

    /**
     * @return mixed
     */
    public function getUsername() : string
    {
        return $this->username;
    }

    /**
     * @param mixed $username
     */
    public function setUsername($username): void
    {
        $this->username = $username;
    }

    /**
     * Retour le salt qui a servi à coder le mot de passe
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
     * Retourne les rôles de l'user
     */
    public function getRoles(): array
    {
        $roles = json_decode($this->roles, true);

        // Afin d'être sûr qu'un user a toujours au moins 1 rôle
        if (empty($roles)) {
            $roles[] = 'ROLE_USER';
        }

        return array_unique($roles);
    }

    public function setRoles(array $roles): void
    {
        $this->roles = json_encode($roles);
    }

    public function getDisplayPr(): string
    {
        return ucfirst($this->prenom). ' ' . mb_strtoupper($this->nom);
    }

    public function getDisplay(): string
    {
        return mb_strtoupper($this->nom) . ' ' . ucfirst($this->prenom);
    }
}
