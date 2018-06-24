<?php

namespace App\Controller\social;

use App\Controller\BaseController;
use App\MesClasses\Excel\MyExcelWriter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


/**
 * Class SocialController
 * @package App\Controller\social
 * @Route("/{_locale}/social",
 *     requirements={
 *         "_locale": "fr|en"})
 */
class SocialController extends BaseController
{
    /**
     * @Route("/", name="social_index")
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function index(MyExcelWriter $myExcelWriter)
    {
        $myExcelWriter->write('A1', 'Bonjour');
        $myExcelWriter->write('A2', 'Le monde');

        return $myExcelWriter->saveCsv('toto');
        //return $this->render('social/index.html.twig', [
        //]);
    }
}
