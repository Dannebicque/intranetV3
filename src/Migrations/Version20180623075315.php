<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20180623075315 extends AbstractMigration
{
    /**
     * @param Schema $schema
     *
     * @throws \Doctrine\DBAL\DBALException
     * @throws \Doctrine\DBAL\Migrations\AbortMigrationException
     */
    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql',
            'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE article_etudiant (article_id INT NOT NULL, etudiant_id INT NOT NULL, INDEX IDX_2496D6887294869C (article_id), INDEX IDX_2496D688DDEAB1A3 (etudiant_id), PRIMARY KEY(article_id, etudiant_id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE article_etudiant ADD CONSTRAINT FK_2496D6887294869C FOREIGN KEY (article_id) REFERENCES article (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE article_etudiant ADD CONSTRAINT FK_2496D688DDEAB1A3 FOREIGN KEY (etudiant_id) REFERENCES etudiant (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE article DROP nb_like');
        $this->addSql('ALTER TABLE evaluation ADD type_groupe_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE evaluation ADD CONSTRAINT FK_1323A575CE83749C FOREIGN KEY (type_groupe_id) REFERENCES type_groupe (id)');
        $this->addSql('CREATE INDEX IDX_1323A575CE83749C ON evaluation (type_groupe_id)');
    }

    /**
     * @param Schema $schema
     *
     * @throws \Doctrine\DBAL\DBALException
     * @throws \Doctrine\DBAL\Migrations\AbortMigrationException
     */
    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql',
            'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE article_etudiant');
        $this->addSql('ALTER TABLE article ADD nb_like INT NOT NULL');
        $this->addSql('ALTER TABLE evaluation DROP FOREIGN KEY FK_1323A575CE83749C');
        $this->addSql('DROP INDEX IDX_1323A575CE83749C ON evaluation');
        $this->addSql('ALTER TABLE evaluation DROP type_groupe_id');
    }
}
