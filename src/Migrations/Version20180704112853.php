<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20180704112853 extends AbstractMigration
{
    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql',
            'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE message_destinataire (id INT AUTO_INCREMENT NOT NULL, message_id INT DEFAULT NULL, personnel_id INT DEFAULT NULL, etudiant_id INT DEFAULT NULL, created DATETIME NOT NULL, updated DATETIME NOT NULL, date_lu DATETIME NOT NULL, etat VARCHAR(1) NOT NULL, typeDestinataire VARCHAR(255) NOT NULL, INDEX IDX_3AA8CA74537A1329 (message_id), INDEX IDX_3AA8CA741C109075 (personnel_id), INDEX IDX_3AA8CA74DDEAB1A3 (etudiant_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE message_piece_jointe (id INT AUTO_INCREMENT NOT NULL, message_id INT DEFAULT NULL, fichier VARCHAR(50) NOT NULL, extension VARCHAR(5) NOT NULL, INDEX IDX_6F502432537A1329 (message_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE message (id INT AUTO_INCREMENT NOT NULL, expediteur_id INT DEFAULT NULL, sujet VARCHAR(100) NOT NULL, message LONGTEXT NOT NULL, important TINYINT(1) NOT NULL, INDEX IDX_B6BD307F10335F61 (expediteur_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE message_destinataire ADD CONSTRAINT FK_3AA8CA74537A1329 FOREIGN KEY (message_id) REFERENCES message (id)');
        $this->addSql('ALTER TABLE message_destinataire ADD CONSTRAINT FK_3AA8CA741C109075 FOREIGN KEY (personnel_id) REFERENCES personnel (id)');
        $this->addSql('ALTER TABLE message_destinataire ADD CONSTRAINT FK_3AA8CA74DDEAB1A3 FOREIGN KEY (etudiant_id) REFERENCES etudiant (id)');
        $this->addSql('ALTER TABLE message_piece_jointe ADD CONSTRAINT FK_6F502432537A1329 FOREIGN KEY (message_id) REFERENCES message (id)');
        $this->addSql('ALTER TABLE message ADD CONSTRAINT FK_B6BD307F10335F61 FOREIGN KEY (expediteur_id) REFERENCES personnel (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql',
            'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE message_destinataire DROP FOREIGN KEY FK_3AA8CA74537A1329');
        $this->addSql('ALTER TABLE message_piece_jointe DROP FOREIGN KEY FK_6F502432537A1329');
        $this->addSql('DROP TABLE message_destinataire');
        $this->addSql('DROP TABLE message_piece_jointe');
        $this->addSql('DROP TABLE message');
    }
}
