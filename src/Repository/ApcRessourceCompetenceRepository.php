<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Repository/ApcRessourceCompetenceRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/06/2024 17:48
 */

namespace App\Repository;

use App\Entity\ApcCompetence;
use App\Entity\ApcRessource;
use App\Entity\ApcRessourceCompetence;
use App\Entity\Semestre;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ApcRessourceCompetence|null find($id, $lockMode = null, $lockVersion = null)
 * @method ApcRessourceCompetence|null findOneBy(array $criteria, array $orderBy = null)
 * @method ApcRessourceCompetence[]    findAll()
 * @method ApcRessourceCompetence[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<ApcRessourceCompetence>
 */
class ApcRessourceCompetenceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ApcRessourceCompetence::class);
    }

    public function findfBySemestre(Semestre $semestre): array
    {
        return $this->createQueryBuilder('a')
            ->innerJoin(ApcRessource::class, 'r', 'WITH', 'a.ressource = r.id')
            ->innerJoin('r.semestres', 's')
            ->where('s.id = :semestre')
            ->setParameter('semestre', $semestre)
            ->getQuery()
            ->getResult();
    }

    public function findBySemestreArray(Semestre $semestre): array
    {
        $datas = $this->findfBySemestre($semestre);
        $array = [];
        /** @var ApcRessourceCompetence $data */
        foreach ($datas as $data) {
            if ($data->getRessource()?->hasCoefficientDifferent() === true) {
                $parcours = $semestre->getDiplome()?->getApcParcours();
                if ($parcours !== null && $parcours->getId() === $data->getParcours()?->getId()) {
                    $array[$data->getCompetence()?->getId()][$data->getRessource()?->getCodeElement()] = $data;
                }
            } else {
                $array[$data->getCompetence()?->getId()][$data->getRessource()?->getCodeElement()] = $data;
            }
        }

        return $array;
    }

    public function getByRessource(mixed $matiere): array
    {
        return $this->createQueryBuilder('a')
            ->innerJoin(ApcCompetence::class, 'c', 'WITH', 'a.competence = c.id')
            ->join('c.ue', 'u')
            ->addSelect('c')
            ->addSelect('u')
            ->where('a.ressource = :ressource')
            ->setParameter('ressource', $matiere)
            ->getQuery()
            ->getResult();
    }
}
