<?php

namespace App\Controller\social;

use App\Controller\BaseController;
use App\MesClasses\Excel\MyExcelMultiExport;
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
     * @param MyExcelMultiExport $myExcelWriter
     *
     * @return \Symfony\Component\HttpFoundation\StreamedResponse
     */
    public function index(MyExcelMultiExport $myExcelWriter): \Symfony\Component\HttpFoundation\StreamedResponse
    {
        $myExcelWriter->write('A1', 'Bonjour');
        $myExcelWriter->write('A2', 'Le monde');

        return $myExcelWriter->saveCsv('toto');
        //return $this->render('social/index.html.twig', [
        //]);
    }
}
