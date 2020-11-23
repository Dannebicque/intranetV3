<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/QuestionnaireQuizzRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 21/11/2020 07:35

namespace App\Repository;

use App\Entity\QuestionnaireQuizz;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method QuestionnaireQuizz|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuestionnaireQuizz|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuestionnaireQuizz[]    findAll()
 * @method QuestionnaireQuizz[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuestionnaireQuizzRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuestionnaireQuizz::class);
    }
}
