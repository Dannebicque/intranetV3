<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/QuestionnaireSectionRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 21/11/2020 07:31

namespace App\Repository;

use App\Entity\QuestionnaireSection;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method QuestionnaireSection|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuestionnaireSection|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuestionnaireSection[]    findAll()
 * @method QuestionnaireSection[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuestionnaireSectionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuestionnaireSection::class);
    }
}
