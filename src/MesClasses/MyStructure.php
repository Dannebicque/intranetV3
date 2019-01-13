<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 09/08/2018
 * Time: 17:19
 */

namespace App\MesClasses;


use App\Entity\Formation;
use App\MesClasses\Excel\MyExcelWriter;
use App\MesClasses\Pdf\MyPDF;

class MyStructure
{
    /** @var Formation */
    protected $formation;

    /** @var MyPDF */
    protected $myPdf;

    /** @var MyExcelWriter */
    protected $myExcel;

    /**
     * MyStructure constructor.
     *
     * @param MyPDF         $myPdf
     * @param MyExcelWriter $myExcel
     */
    public function __construct(MyPDF $myPdf, MyExcelWriter $myExcel)
    {
        $this->myPdf = $myPdf;
        $this->myExcel = $myExcel;
    }


    public function export(Formation $formation, $_format): void
    {
        $this->formation = $formation;

        switch ($_format) {
            case 'pdf':
                $this->myPdf::generePdf('pdf/structure.html.twig', ['formation' => $formation], 'structure_formation');
                break;
            case 'xlsx':

                break;
        }
    }
}
