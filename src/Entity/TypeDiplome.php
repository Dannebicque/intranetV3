<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TypeDiplomeRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class TypeDiplome extends BaseEntity
{


    /**
     * @ORM\Column(type="string", length=255)
     */
    private $libelle;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=20)
     */
    private $sigle;

    /**
     * @var integer
     *
     * @ORM\Column(type="integer")
     */
    private $nb_semestres = 2;

    /**
     * @var integer
     *
     * @ORM\Column(type="integer")
     */
    private $niveau_entree = 0;

    /**
     * @var integer
     *
     * @ORM\Column(type="integer")
     */
    private $niveau_sortie = 2;

    /**
     * @return mixed
     */
    public function getLibelle()
    {
        return $this->libelle;
    }

    /**
     * @param mixed $libelle
     */
    public function setLibelle($libelle): void
    {
        $this->libelle = $libelle;
    }

    /**
     * @return string
     */
    public function getSigle(): ?string
    {
        return $this->sigle;
    }

    /**
     * @param string $sigle
     */
    public function setSigle(string $sigle): void
    {
        $this->sigle = $sigle;
    }

    /**
     * @return int
     */
    public function getNbSemestres(): int
    {
        return $this->nb_semestres;
    }

    /**
     * @param int $nb_semestres
     */
    public function setNbSemestres(int $nb_semestres): void
    {
        $this->nb_semestres = $nb_semestres;
    }

    /**
     * @return int
     */
    public function getNiveauEntree(): int
    {
        return $this->niveau_entree;
    }

    /**
     * @param int $niveau_entree
     */
    public function setNiveauEntree(int $niveau_entree): void
    {
        $this->niveau_entree = $niveau_entree;
    }

    /**
     * @return int
     */
    public function getNiveauSortie(): int
    {
        return $this->niveau_sortie;
    }

    /**
     * @param int $niveau_sortie
     */
    public function setNiveauSortie(int $niveau_sortie): void
    {
        $this->niveau_sortie = $niveau_sortie;
    }


}
