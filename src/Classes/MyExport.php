<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyExport.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/05/2021 16:12
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Classes\Excel\MyExcelMultiExport;
use App\Classes\Pdf\MyPDF;
use App\Entity\Semestre;
use App\Exception\SemestreNotFoundException;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;

class MyExport
{
    final public const ONLY_DATE = 'date';
    final public const ONLY_HEURE = 'heure';
    private array $options = [];

    public function __construct(
        private readonly MyPDF $myPDF,
        private readonly MySerializer $serializer,
        private readonly MyExcelMultiExport $excel
    ) {
    }

    public function getExcel(): MyExcelMultiExport
    {
        return $this->excel;
    }

    /** @deprecated  */
    public function convertDataFromSerializationToArray(array $data, array $modele, array $colonne): array
    {
        $dataArray = [];
        // serialize les data
        $dataJson = $this->serializer->serialize($data, $modele);
        $tabData = json_decode($dataJson, true, 512, JSON_THROW_ON_ERROR);
        // header
        $i = 1;
        $ligne = 1;
        foreach ($colonne as $value) {
            if (is_array($value)) {
                foreach ($value as $col) {
                    if (is_array($col)) {
                        foreach ($col as $col2) {
                            if (is_array($col2)) {
                                foreach ($col2 as $col3) {
                                    $dataArray[$ligne][$i] = $col3;

                                    ++$i;
                                }
                            } else {
                                $dataArray[$ligne][$i] = $col2;
                                ++$i;
                            }
                        }
                    } else {
                        $dataArray[$ligne][$i] = $col;
                        ++$i;
                    }
                }
            } else {
                $dataArray[$ligne][$i] = $value;
                ++$i;
            }
        }
        $i = 1;
        ++$ligne;
        // data
        foreach ($tabData as $row) {
            foreach ($colonne as $key => $value) {
                if ((!is_array($value) && array_key_exists($value,
                            $row)) || (is_array($value) && array_key_exists($key,
                            $row))) {
                    if (is_array($value)) {
                        foreach ($value as $col) {
                            if (is_array($row[$key])) {
                                $dataArray[$ligne][$i] = $this->transformValue($row[$key][$col], $key);
                            } else {
                                $dataArray[$ligne][$i] = '-';
                            }
                            ++$i;
                        }
                    } else {
                        $dataArray[$ligne][$i] = $this->transformValue($row[$value], $value);
                        ++$i;
                    }
                } else {
                    $dataArray[$ligne][$i] = '-';
                    ++$i;
                }
            }

            $i = 1;
            ++$ligne;
        }

        return $dataArray;
    }

    /** @deprecated  */
    public function genereFichierGenerique(
       string $format,
       array $data,
       string $nomFichier,
        array $groups,
        array $colonne,
        array $options = []
    ): ?Response {
        $this->options = $options;
        $dataArray = $this->convertDataFromSerializationToArray($data, $groups, $colonne);

        return match ($format) {
            'csv' => $this->excel->genereExcelFromArray($dataArray)->saveCsv($nomFichier),
            'pdf' => $this->myPDF::generePdf('pdf/pdfExport.html.twig', ['data' => $dataArray], $nomFichier),
            'xlsx' => $this->excel->genereExcelFromArray($dataArray)->saveXlsx($nomFichier),
            default => null,
        };
    }

    public function genereFichierAbsence(string $format, MyAbsences $myAbsences, string $nomFichier): ?Response
    {
        $this->excel->genereExcelAbsence($myAbsences);

        return match ($format) {
            'csv' => $this->excel->saveCsv($nomFichier),
            'pdf' => $this->excel->savePdf($nomFichier),
            'xlsx' => $this->excel->saveXlsx($nomFichier),
            default => false,
        };
    }

    /**
     * @throws \App\Exception\SemestreNotFoundException
     */
    public function genereModeleImportNote(?Semestre $semestre): ?Response
    {
        if (null === $semestre) {
            throw new SemestreNotFoundException();
        }

        $this->excel->genereModeleExcel($semestre);

        return $this->excel->saveXlsx('modele-import-note-'.$semestre->getLibelle());
    }

    public function genereFichierJustificatifAbsence(mixed $justificatifs, string $nomFichier): StreamedResponse
    {
        $this->excel->genereExcelJustificatifsAbsences($justificatifs);

        return $this->excel->saveXlsx($nomFichier);
    }

    /** @deprecated  */
    private function transformValue(?string $value, string $key): ?string
    {
        if (array_key_exists($key, $this->options)) {
            switch ($this->options[$key]) {
                case self::ONLY_DATE:
                    $t = explode(' ', (string) $value);

                    return $t[0];
                case self::ONLY_HEURE:
                    $t = explode(' ', (string) $value);

                    return 2 === count($t) ? $t[1] : 'err';
            }
        }

        return $value;
    }

    public function genereFichierGeneriqueFromData($format, $data, string $nomFichier)
    {
        return match ($format) {
            'csv' => $this->excel->genereExcelFromArray($data)->saveCsv($nomFichier),
            'pdf' => $this->myPDF::generePdf('pdf/pdfExport.html.twig', ['data' => $data], $nomFichier),
            'xlsx' => $this->excel->genereExcelFromArray($data)->saveXlsx($nomFichier),
            default => null,
        };
    }
}
