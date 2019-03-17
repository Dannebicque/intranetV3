<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 09/08/2018
 * Time: 17:19
 */

namespace App\MesClasses;


use App\Entity\Departement;
use App\MesClasses\Excel\MyExcelWriter;
use App\MesClasses\Pdf\MyPDF;

class MyStructure
{
    /** @var Departement */
    protected $departement;

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


    public function export(Departement $departement, $_format): void
    {
        $this->departement = $departement;

        switch ($_format) {
            case 'pdf':
                $this->myPdf::generePdf('pdf/structure.html.twig', ['departement' => $departement], 'structure_departement');
                break;
            case 'xlsx':

                break;
        }
    }
}
