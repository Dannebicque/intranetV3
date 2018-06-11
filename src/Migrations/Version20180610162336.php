<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20180610162336 extends AbstractMigration
{
    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql',
            'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE type_groupe (id INT AUTO_INCREMENT NOT NULL, semestre_id INT DEFAULT NULL, created DATETIME NOT NULL, updated DATETIME NOT NULL, libelle VARCHAR(100) NOT NULL, code_apogee VARCHAR(50) NOT NULL, type VARCHAR(5) NOT NULL, INDEX IDX_276EE7195577AFDB (semestre_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE groupe (id INT AUTO_INCREMENT NOT NULL, type_groupe_id INT DEFAULT NULL, created DATETIME NOT NULL, updated DATETIME NOT NULL, libelle VARCHAR(50) NOT NULL, code_apogee VARCHAR(50) NOT NULL, INDEX IDX_4B98C21CE83749C (type_groupe_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE type_groupe ADD CONSTRAINT FK_276EE7195577AFDB FOREIGN KEY (semestre_id) REFERENCES semestre (id)');
        $this->addSql('ALTER TABLE groupe ADD CONSTRAINT FK_4B98C21CE83749C FOREIGN KEY (type_groupe_id) REFERENCES type_groupe (id)');

    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql',
            'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE groupe DROP FOREIGN KEY FK_4B98C21CE83749C');
        $this->addSql('DROP TABLE type_groupe');
        $this->addSql('DROP TABLE groupe');
        $this->addSql('ALTER TABLE borne CHANGE url url VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE cahier_texte RENAME INDEX idx_b554c618f46cd258 TO FK_B554C618F46CD258');
        $this->addSql('ALTER TABLE formation ADD opt_ri TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE matiere RENAME INDEX idx_9014574a6e38c0db TO FK_9014574A6E38C0DB');
        $this->addSql('ALTER TABLE notification DROP FOREIGN KEY FK_BF5476CADDEAB1A3');
        $this->addSql('ALTER TABLE notification RENAME INDEX idx_bf5476caddeab1a3 TO IDX_BF5476CAA4F84F6E');
        $this->addSql('ALTER TABLE semestre RENAME INDEX idx_71688fbce2f2e760 TO IDX_71688FBCF48C3FCD');
        $this->addSql('ALTER TABLE semestre RENAME INDEX idx_71688fbc9266b8ba TO IDX_71688FBCDCBE01AD');
        $this->addSql('ALTER TABLE semestre RENAME INDEX idx_71688fbcf782170e TO IDX_71688FBC505021A4');
    }
}
