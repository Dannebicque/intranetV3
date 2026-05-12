<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260512115943 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // Garder uniquement le rapport le plus récent par étudiant
        $this->addSql('
        DELETE FROM stage_rapport
        WHERE id NOT IN (
            SELECT * FROM (
                SELECT MAX(id)
                FROM stage_rapport
                GROUP BY stage_etudiant_id
            ) as tmp
        )
    ');

        // Ensuite la contrainte unique peut être ajoutée
        $this->addSql('ALTER TABLE stage_rapport ADD UNIQUE (stage_etudiant_id)');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE stage_rapport DROP INDEX UNIQ_xxx');
    }

}
