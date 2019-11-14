<?php /**
 * Copyright (C) 8 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/ModificationNoteRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 26/08/2019 13:45
 * @lastUpdate 26/08/2019 13:13
 */ /**
 * Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Repository/ModificationNoteRepository.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 14/11/2019 14:57
 * @lastUpdate 14/11/2019 08:14
 */ /** @noinspection ALL */
/** @noinspection PhpUnused */

namespace App\Repository;

use App\Entity\ModificationNote;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method ModificationNote|null find($id, $lockMode = null, $lockVersion = null)
 * @method ModificationNote|null findOneBy(array $criteria, array $orderBy = null)
 * @method ModificationNote[]    findAll()
 * @method ModificationNote[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ModificationNoteRepository extends ServiceEntityRepository
{
    /**
     * ModificationNoteRepository constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ModificationNote::class);
    }
}
