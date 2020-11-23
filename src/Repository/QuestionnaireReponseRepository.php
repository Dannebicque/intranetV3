<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Repository/QuestionnaireReponseRepository.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 21/11/2020 07:22

namespace App\Repository;

use App\Entity\QuestionnaireReponse;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method QuestionnaireReponse|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuestionnaireReponse|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuestionnaireReponse[]    findAll()
 * @method QuestionnaireReponse[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuestionnaireReponseRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuestionnaireReponse::class);
    }
}
