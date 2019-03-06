<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190304163959 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE calendrier (id INT AUTO_INCREMENT NOT NULL, annee_universitaire_id INT DEFAULT NULL, created DATETIME NOT NULL, updated DATETIME NOT NULL, semaine_formation INT NOT NULL, semaine_reelle INT NOT NULL, date_lundi DATETIME NOT NULL, INDEX IDX_B2753CB9544BFD58 (annee_universitaire_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE creneau_cours (id INT AUTO_INCREMENT NOT NULL, annee_universitaire_id INT DEFAULT NULL, formation_id INT DEFAULT NULL, jour INT NOT NULL, debut TIME NOT NULL, fin TIME NOT NULL, INDEX IDX_E844BB21544BFD58 (annee_universitaire_id), INDEX IDX_E844BB215200282E (formation_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE creneau_bloque (id INT AUTO_INCREMENT NOT NULL, creneau_id INT DEFAULT NULL, semaine_id INT DEFAULT NULL, texte VARCHAR(255) NOT NULL, obligatoire TINYINT(1) NOT NULL, type VARCHAR(2) NOT NULL, INDEX IDX_441F29EE7D0729A9 (creneau_id), INDEX IDX_441F29EE122EEC90 (semaine_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE indisponibilite_personnel (id INT AUTO_INCREMENT NOT NULL, creneau_id INT DEFAULT NULL, semaine_id INT DEFAULT NULL, personnel_id INT DEFAULT NULL, priorite INT NOT NULL, INDEX IDX_C98EDDB57D0729A9 (creneau_id), INDEX IDX_C98EDDB5122EEC90 (semaine_id), INDEX IDX_C98EDDB51C109075 (personnel_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE calendrier ADD CONSTRAINT FK_B2753CB9544BFD58 FOREIGN KEY (annee_universitaire_id) REFERENCES annee_universitaire (id)');
        $this->addSql('ALTER TABLE creneau_cours ADD CONSTRAINT FK_E844BB21544BFD58 FOREIGN KEY (annee_universitaire_id) REFERENCES annee_universitaire (id)');
        $this->addSql('ALTER TABLE creneau_cours ADD CONSTRAINT FK_E844BB215200282E FOREIGN KEY (formation_id) REFERENCES formation (id)');
        $this->addSql('ALTER TABLE creneau_bloque ADD CONSTRAINT FK_441F29EE7D0729A9 FOREIGN KEY (creneau_id) REFERENCES creneau_cours (id)');
        $this->addSql('ALTER TABLE creneau_bloque ADD CONSTRAINT FK_441F29EE122EEC90 FOREIGN KEY (semaine_id) REFERENCES calendrier (id)');
        $this->addSql('ALTER TABLE indisponibilite_personnel ADD CONSTRAINT FK_C98EDDB57D0729A9 FOREIGN KEY (creneau_id) REFERENCES creneau_cours (id)');
        $this->addSql('ALTER TABLE indisponibilite_personnel ADD CONSTRAINT FK_C98EDDB5122EEC90 FOREIGN KEY (semaine_id) REFERENCES calendrier (id)');
        $this->addSql('ALTER TABLE indisponibilite_personnel ADD CONSTRAINT FK_C98EDDB51C109075 FOREIGN KEY (personnel_id) REFERENCES personnel (id)');
        $this->addSql('DROP TABLE celcat_calendrier');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE creneau_bloque DROP FOREIGN KEY FK_441F29EE122EEC90');
        $this->addSql('ALTER TABLE indisponibilite_personnel DROP FOREIGN KEY FK_C98EDDB5122EEC90');
        $this->addSql('ALTER TABLE creneau_bloque DROP FOREIGN KEY FK_441F29EE7D0729A9');
        $this->addSql('ALTER TABLE indisponibilite_personnel DROP FOREIGN KEY FK_C98EDDB57D0729A9');
        $this->addSql('CREATE TABLE celcat_calendrier (id INT AUTO_INCREMENT NOT NULL, created DATETIME NOT NULL, updated DATETIME NOT NULL, semaine_formation INT NOT NULL, semaine_reelle INT NOT NULL, date_lundi DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('DROP TABLE calendrier');
        $this->addSql('DROP TABLE creneau_cours');
        $this->addSql('DROP TABLE creneau_bloque');
        $this->addSql('DROP TABLE indisponibilite_personnel');
    }
}
