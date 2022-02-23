.DEFAULT_GOAL:=help

.PHONY: twig-lint
twig-lint:
	bin/console lint:twig

.PHONY: build
build:
	cd infra && docker-compose build

.PHONY: up
up:
	cd infra && docker-compose up -d


.PHONY: check-package-json
check-package-json:
	ncu

.PHONY: ps
ps:
	cd infra && docker-compose ps

.PHONY: down
down:
	cd infra && docker-compose down

.PHONY: init-database
init-database:
	cd infra && docker exec -i mysql8-container mysql -uintranetv3 -proot intranetv3 < intranetv3.sql


.PHONY: logs
logs:
	cd infra && docker-compose logs -f

.PHONY: bash
bash:
	cd infra && docker-compose exec php8-container bash

.PHONY: composer-update
composer-update:
	cd infra && docker-compose run --rm php8-service sh -c 'composer update --no-interaction --no-suggest --ansi --ignore-platform-req=ext-ldap'


.PHONY: install
install:
	cd infra && docker-compose run --rm php8-service sh -c 'composer install --no-interaction --no-suggest --ansi'

.PHONY: test
test:
	cd infra && docker-compose run --rm php8-service sh -c './initTests.sh' && docker-compose run --rm php8-service sh -c 'vendor/bin/phpunit --testdox --exclude-group=none --colors=always'

.PHONY: cs
cs:
	cd infra && docker-compose run --rm php8-service sh -c 'vendor/bin/php-cs-fixer fix --no-interaction --diff --verbose'

.PHONY: insight
insight:
	cd infra && docker-compose run --rm php8-service sh -c 'vendor/bin/phpinsights'

.PHONY: stan
stan:
	cd infra && docker-compose run --rm php8-service sh -c 'vendor/bin/phpstan analyse --memory-limit=-1'
# php vendor/bin/phpstan analyse -c phpstan.neon src --no-progress

.PHONY: rector
rector:
	cd infra && docker-compose run --rm php8-service sh -c 'vendor/bin/rector process src/Entity'
