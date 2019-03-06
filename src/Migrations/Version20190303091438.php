<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190303091438 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE formation ADD annee_universitaire_prepare_id INT DEFAULT NULL, ADD preparation_annee TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE formation ADD CONSTRAINT FK_404021BFEB0464C9 FOREIGN KEY (annee_universitaire_prepare_id) REFERENCES annee_universitaire (id)');
        $this->addSql('CREATE INDEX IDX_404021BFEB0464C9 ON formation (annee_universitaire_prepare_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE formation DROP FOREIGN KEY FK_404021BFEB0464C9');
        $this->addSql('DROP INDEX IDX_404021BFEB0464C9 ON formation');
        $this->addSql('ALTER TABLE formation DROP annee_universitaire_prepare_id, DROP preparation_annee');
    }
}
