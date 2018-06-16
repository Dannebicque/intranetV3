<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20180613053534 extends AbstractMigration
{
    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql',
            'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE ufr ADD responsable_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE ufr ADD CONSTRAINT FK_20D7AF9853C59D72 FOREIGN KEY (responsable_id) REFERENCES personnel (id)');
        $this->addSql('CREATE INDEX IDX_20D7AF9853C59D72 ON ufr (responsable_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql',
            'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE ufr DROP FOREIGN KEY FK_20D7AF9853C59D72');
        $this->addSql('DROP INDEX IDX_20D7AF9853C59D72 ON ufr');
        $this->addSql('ALTER TABLE ufr DROP responsable_id');
    }
}
