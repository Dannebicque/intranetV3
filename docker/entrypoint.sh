#!/bin/bash
set -e

bin/console doctrine:migration:migrate -n
bin/console cache:clear --no-warmup
bin/console cache:warmup

exec "$@"
