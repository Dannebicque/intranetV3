<?php
/**
 * Copyright (C) 9 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/recipe/symfony.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 30/09/2019 09:56
 * @lastUpdate 30/09/2019 09:55
 */

namespace Deployer;

require_once __DIR__ . '/common.php';
set('shared_dirs', ['var/log', 'var/sessions']);
set('shared_files', ['.env.local.php', '.env.local']);
set('writable_dirs', ['var']);
set('migrations_config', '');
set('bin/console', function() {
    return parse('{{bin/php}} {{release_path}}/bin/console --no-interaction');
});
desc('Migrate database');
task('database:migrate', function() {
    $options = '--allow-no-migration';
    if (get('migrations_config') !== '') {
        $options = sprintf('%s --configuration={{release_path}}/{{migrations_config}}', $options);
    }
    run(sprintf('{{bin/console}} doctrine:migrations:migrate %s', $options));
});
desc('Clear cache');
task('deploy:cache:clear', function() {
    run('{{bin/console}} cache:clear --no-warmup');
});
desc('Warm up cache');
task('deploy:cache:warmup', function() {
    run('{{bin/console}} cache:warmup');
});
desc('Deploy project');
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'deploy:vendors',
    'deploy:writable',
    'deploy:cache:clear',
    'deploy:cache:warmup',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
]);
after('deploy', 'success');
