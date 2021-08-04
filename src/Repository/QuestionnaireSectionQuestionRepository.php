<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/QuestionnaireSectionQuestionRepository.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/08/2021 08:01
 */

namespace App\Repository;

use App\Entity\QuestionnaireSectionQuestion;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method QuestionnaireSectionQuestion|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuestionnaireSectionQuestion|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuestionnaireSectionQuestion[]    findAll()
 * @method QuestionnaireSectionQuestion[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset =
 *         null)
 */
class QuestionnaireSectionQuestionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuestionnaireSectionQuestion::class);
    }
}
