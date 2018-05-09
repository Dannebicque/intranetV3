<?php /** @noinspection ForeachSourceInspection */

/** @noinspection ExceptionsAnnotatingAndHandlingInspection */

namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Yaml\Yaml;

class AppTranslationRearangeCommand extends Command
{
    protected static $defaultName = 'app:translation-rearange';

    protected function configure(): void
    {
        $this
            ->setDescription('Rearange the yml translation file')
            ->addArgument('domain', InputArgument::OPTIONAL, 'Translation domain file to rearange')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): void
    {
        $io = new SymfonyStyle($input, $output);
        $arg1 = $input->getArgument('domain');

        if ($arg1) {
            $io->note(sprintf('Translation domain file to rearange: %s', $arg1));
        }

        $data = Yaml::parseFile('./translations/messages.fr.yml');

        $tab = array();

        foreach ($data as $key => $value) {
           $t = explode('.', $key);
           $nbkey = \count($t);
           if ($nbkey === 1)
           {
               $tab[$t[0]] = $value;
           } else {
               $this->insertData($t, $tab, $value);
           }
        }
        $yaml = Yaml::dump($tab, 10);

        file_put_contents('./translations/messages.fr.yml', $yaml);

        $io->success('You have a new command! Now make it your own! Pass --help to see your options.');
    }

    private function insertData($keys, &$tab, $value)
    {
        if (array_key_exists($keys[0], $tab)) {
            if (! \is_array($tab[$keys[0]]))
            {
                $temp = $tab[$keys[0]];
                $tab[$keys[0]] = array();
                $tab[$keys[0]][] = $temp;
                //todo: mémoriser les conflits ?
            }
        } else {
            $tab[$keys[0]] = array();
        }

        if (\count($keys) > 1) {
            $k = $keys[0];
            array_shift($keys);
            $this->insertData($keys, $tab[$k], $value);
        } else {
            $tab[$keys[0]] = $value;
        }


    }


}
