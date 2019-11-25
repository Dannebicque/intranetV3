<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Migrations/Version20190315053006.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190315053006 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE departement DROP FOREIGN KEY FK_404021BFF6BD1646');
        $this->addSql('DROP INDEX IDX_404021BFF6BD1646 ON departement');
        $this->addSql('ALTER TABLE departement CHANGE site_id ufr_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE departement ADD CONSTRAINT FK_404021BFA469CB09 FOREIGN KEY (ufr_id) REFERENCES ufr (id)');
        $this->addSql('CREATE INDEX IDX_404021BFA469CB09 ON departement (ufr_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE departement DROP FOREIGN KEY FK_404021BFA469CB09');
        $this->addSql('DROP INDEX IDX_404021BFA469CB09 ON departement');
        $this->addSql('ALTER TABLE departement CHANGE ufr_id site_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE departement ADD CONSTRAINT FK_404021BFF6BD1646 FOREIGN KEY (site_id) REFERENCES site (id)');
        $this->addSql('CREATE INDEX IDX_404021BFF6BD1646 ON departement (site_id)');
    }
}
