<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyStructure.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:26
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Classes\Excel\MyExcelWriter;
use App\Classes\Pdf\MyPDF;
use App\Entity\Departement;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

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
     */
    public function __construct(MyPDF $myPdf, MyExcelWriter $myExcel)
    {
        $this->myPdf = $myPdf;
        $this->myExcel = $myExcel;
    }

    /**
     * @param $_format
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
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
