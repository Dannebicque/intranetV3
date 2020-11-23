<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/QuestionnaireQuestionnaireSectionRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 23/11/2020 17:55

namespace App\Repository;

use App\Entity\QuestionnaireQuestionnaireSection;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method QuestionnaireQuestionnaireSection|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuestionnaireQuestionnaireSection|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuestionnaireQuestionnaireSection[]    findAll()
 * @method QuestionnaireQuestionnaireSection[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset
 *         = null)
 */
class QuestionnaireQuestionnaireSectionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuestionnaireQuestionnaireSection::class);
    }
}
