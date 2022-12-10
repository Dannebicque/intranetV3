<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/QuestionnaireQuestionTagRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/11/2021 13:22
 */

namespace App\Repository;

use App\Entity\QuestionnaireQuestionTag;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @deprecated Use Quest...Repository à la place
 * @method QuestionnaireQuestionTag|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuestionnaireQuestionTag|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuestionnaireQuestionTag[]    findAll()
 * @method QuestionnaireQuestionTag[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @extends ServiceEntityRepository<QuestionnaireQuestionTag>
 */
class QuestionnaireQuestionTagRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuestionnaireQuestionTag::class);
    }
}
