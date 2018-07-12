<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;

/**
 * @ORM\MappedSuperclass
 * @ORM\HasLifecycleCallbacks()
 * @Vich\Uploadable
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
     * @ORM\Column(type="string", nullable=true)
     */
    protected $password = '';

    /**
     * @ORM\Column(type="string", length=255)
     */
    protected $slug;//todo: passer le champs en index

    /**
     * @ORM\Column(type="string", length=75)
     *
     */
    protected $typeUser;

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
    protected $mailUniv; //todo: passer le champs en index

    /**
     * @ORM\Column(type="string", length=255,nullable=true)
     *
     */
    protected $siteUniv;

    /**
     * @ORM\Column( type="string", length=255,nullable=true)
     *
     */
    protected $mailPerso;

    /**
     * @ORM\Column(type="string", length=255,nullable=true)
     *
     */
    protected $sitePerso;

    /**
     * @ORM\Column(name="sexe", type="string", length=1, options={"default":"M"})
     *
     */
    protected $sexe = 'H'; //H ou F

    /**
     * @ORM\Column(type="date",nullable=true)
     *
     */
    protected $dateNaissance;

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
     * @ORM\OneToOne(targetEntity="App\Entity\Adresse", cascade={"persist"})
     */
    private $adresse;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=50)
     */
    private $photoName = 'noimage.png';

    /**
     * @var UploadedFile
     *
     * @Vich\UploadableField(mapping="photo", fileNameProperty="photoName")
     * @
     */
    private $photoFile;

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

    public function __construct()
    {
    }

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
     * @ORM\PrePersist()
     */
    public function generateSlug(): void
    {
        $this->slug = strtolower($this->prenom) . '.' . strtolower($this->nom);//todo: améliorer la création du slug et vérifier les doublons.
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
        return $this->typeUser;
    }

    /**
     * @param mixed $typeUser
     */
    public function setTypeUser($typeUser): void
    {
        $this->typeUser = $typeUser;
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
        return $this->mailUniv;
    }

    /**
     * @param mixed $mailUniv
     */
    public function setMailUniv($mailUniv): void
    {
        $this->mailUniv = $mailUniv;
    }

    /**
     * @return mixed
     */
    public function getSiteUniv()
    {
        return $this->siteUniv;
    }

    /**
     * @param mixed $siteUniv
     */
    public function setSiteUniv($siteUniv): void
    {
        $this->siteUniv = $siteUniv;
    }

    /**
     * @return mixed
     */
    public function getMailPerso()
    {
        return $this->mailPerso;
    }

    /**
     * @param mixed $mailPerso
     */
    public function setMailPerso($mailPerso): void
    {
        $this->mailPerso = $mailPerso;
    }

    /**
     * @return mixed
     */
    public function getSitePerso()
    {
        return $this->sitePerso;
    }

    /**
     * @param mixed $sitePerso
     */
    public function setSitePerso($sitePerso): void
    {
        $this->sitePerso = $sitePerso;
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
        return $this->dateNaissance;
    }

    /**
     * @param mixed $dateNaissance
     */
    public function setDateNaissance($dateNaissance): void
    {
        $this->dateNaissance = $dateNaissance;
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
    public function getUsername(): ?string
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

    /**
     * @param array $roles
     */
    public function setRoles(array $roles): void
    {
        $this->roles = json_encode($roles);
    }

    /**
     * @return string
     */
    public function getDisplayPr(): string
    {
        return ucfirst($this->prenom). ' ' . mb_strtoupper($this->nom);
    }

    /**
     * @return string
     */
    public function getDisplay(): string
    {
        return mb_strtoupper($this->nom) . ' ' . ucfirst($this->prenom);
    }

    /**
     * If manually uploading a file (i.e. not using Symfony Form) ensure an instance
     * of 'UploadedFile' is injected into this setter to trigger the  update. If this
     * bundle's configuration parameter 'inject_on_load' is set to 'true' this setter
     * must be able to accept an instance of 'File' as the bundle will inject one here
     * during Doctrine hydration.
     *
     * @param null|File $photo
     */
    public function setPhotoFile(?File $photo = null): void
    {
        $this->photoFile = $photo;

        if (null !== $photo) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->setUpdatedValue();
        }
    }

    /**
     * @return null|File
     */
    public function getPhotoFile(): ?File
    {
        return $this->photoFile;
    }

    /**
     * @return string
     */
    public function getPhotoName(): ?string
    {
        return $this->photoName;
    }

    /**
     * @param string $photoName
     */
    public function setPhotoName(string $photoName): void
    {
        $this->photoName = $photoName;
    }
}
