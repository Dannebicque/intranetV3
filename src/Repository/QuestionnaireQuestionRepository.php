<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/QuestionnaireQuestionRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:08
 */

namespace App\Repository;

use App\Entity\Personnel;
use App\Entity\QuestionnaireQuestion;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @deprecated Use Quest...Repository à la place
 * @method QuestionnaireQuestion|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuestionnaireQuestion|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuestionnaireQuestion[]    findAll()
 * @method QuestionnaireQuestion[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<QuestionnaireQuestion>
 */
class QuestionnaireQuestionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuestionnaireQuestion::class);
    }

    public function findByUser(Personnel $getConnectedUser): array
    {
        return $this->findBy(['auteur' => $getConnectedUser->getId()]);
    }
}
