<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20180524114459 extends AbstractMigration
{
    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql',
            'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE cahier_texte (id INT AUTO_INCREMENT NOT NULL, semestre_id INT DEFAULT NULL, personnel_id INT DEFAULT NULL, created DATETIME NOT NULL, updated DATETIME NOT NULL, libelle VARCHAR(150) NOT NULL, description LONGTEXT NOT NULL, date_retour DATETIME NOT NULL, INDEX IDX_B554C6185577AFDB (semestre_id), INDEX IDX_B554C6181C109075 (personnel_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE cahier_texte ADD CONSTRAINT FK_B554C6185577AFDB FOREIGN KEY (semestre_id) REFERENCES semestre (id)');
        $this->addSql('ALTER TABLE cahier_texte ADD CONSTRAINT FK_B554C6181C109075 FOREIGN KEY (personnel_id) REFERENCES personnel (id)');

    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql',
            'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE cahier_texte');
        $this->addSql('ALTER TABLE borne CHANGE url url VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE formation ADD opt_ri TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE matiere RENAME INDEX idx_9014574a6e38c0db TO FK_9014574A6E38C0DB');
        $this->addSql('ALTER TABLE semestre RENAME INDEX idx_71688fbce2f2e760 TO IDX_71688FBCF48C3FCD');
        $this->addSql('ALTER TABLE semestre RENAME INDEX idx_71688fbc9266b8ba TO IDX_71688FBCDCBE01AD');
        $this->addSql('ALTER TABLE semestre RENAME INDEX idx_71688fbcf782170e TO IDX_71688FBC505021A4');
    }
}
