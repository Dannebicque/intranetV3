.PHONY: start stop restart build up down logs ps clean open help cli \
        test test-coverage phpstan cypress-open cypress-run

# URL de votre application
URL = http://localhost:8840
TEST_PASSWORD_HASH = \$$2y\$$13\$$gcIIWUye7S97aO3VMWNULu569aNq6CdSh5WWnl/z/6rQbhSdiXaYm

# Exécution dans le conteneur web
EXEC = docker exec -ti -w /var/www/intranetv3 intranetv3-web
PHPUNIT = ./vendor/bin/phpunit
PHPSTAN = ./vendor/bin/phpstan

# Démarre les conteneurs Docker
start:
	docker compose up -d

# Démarre les conteneurs et ouvre le navigateur
open: start
	@echo "Ouverture de $(URL) dans le navigateur..."
	@sleep 3
	@open $(URL)

# Arrête les conteneurs Docker
stop:
	docker compose stop

# Redémarre les conteneurs
restart: stop start

# Build les images Docker
build:
	docker compose build

# Build et démarre les conteneurs
up:
	docker compose up -d --build

# Arrête et supprime les conteneurs
down:
	docker compose down

# Affiche les logs
logs:
	docker compose logs -f

# Liste les conteneurs en cours d'exécution
ps:
	docker compose ps

# Nettoie les conteneurs, volumes et images
clean:
	docker compose down -v --remove-orphans
	docker system prune -f

# cli pour accéder au terminal docker dans le bon dossier
cli:
	docker exec -ti -w /var/www/intranetv3 intranetv3-web bash

# Change tous les mots de passe user en "test"
# Change tous les mots de passe user en "test"
# Change tous les mots de passe user en "test"
reset-passwords:
	@echo "Application du hash pour le mot de passe 'test'..."
	@docker exec -i intranetv3-db mysql -u"oreof" -p"PASSWORD" "oreof_2026" -e "UPDATE personnel SET password = '$(TEST_PASSWORD_HASH)';"
	@echo "Tous les mots de passe ont été réinitialisés."


# Tests PHP (PHPUnit)
test:
	$(EXEC) $(PHPUNIT)

# Tests avec couverture (HTML dans var/coverage et Cobertura via phpunit.xml.dist)
test-coverage:
	$(EXEC) bash -lc 'XDEBUG_MODE=coverage $(PHPUNIT)'

# Analyse statique PHPStan
phpstan:
	$(EXEC) $(PHPSTAN) analyse

# Cypress (E2E)
cypress-open:
	npm run cypress:open

cypress-run:
	npm run cypress:run



# Affiche l'aide
help:
	@echo "Commandes disponibles:"
	@echo "  make start    - Démarre les conteneurs"
	@echo "  make open     - Démarre et ouvre le navigateur"
	@echo "  make stop     - Arrête les conteneurs"
	@echo "  make restart  - Redémarre les conteneurs"
	@echo "  make build    - Build les images"
	@echo "  make up       - Build et démarre"
	@echo "  make down     - Arrête et supprime les conteneurs"
	@echo "  make logs     - Affiche les logs"
	@echo "  make ps       - Liste les conteneurs"
	@echo "  make clean    - Nettoie tout"
	@echo "  make cli      - Accède au terminal docker"
	@echo "  make reset-passwords - Réinitialise tous les mots de passe utilisateurs à 'test'"
	@echo "  make test     - Lance la suite PHPUnit dans le conteneur"
	@echo "  make test-coverage - Lance PHPUnit avec la couverture (HTML: var/coverage)"
	@echo "  make phpstan  - Analyse statique du code"
	@echo "  make cypress-open - Ouvre Cypress en mode interactif"
	@echo "  make cypress-run  - Exécute Cypress en mode headless"
