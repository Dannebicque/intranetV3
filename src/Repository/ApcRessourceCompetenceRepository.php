<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/ApcRessourceCompetenceRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/03/2021 18:49
 */

namespace App\Repository;

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

    public function findfBySemestre(Semestre $semestre)
    {
        return $this->createQueryBuilder('a')
            ->innerJoin(ApcRessource::class, 'r', 'WITH', 'a.ressource = r.id')
            ->where('r.semestre = :semestre')
            ->setParameter('semestre', $semestre)
            ->getQuery()
            ->getResult();
    }

    public function findBySemestreArray(Semestre $semestre)
    {
        $datas = $this->findfBySemestre($semestre);
        $array =[];
        /** @var ApcRessourceCompetence $data */
        foreach ($datas as $data) {
            $array[$data->getCompetence()->getId()][$data->getRessource()->getCodeElement()] = $data;
        }

        return $array;
    }
}
