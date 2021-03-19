<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Word/MyWord.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/03/2021 21:29
 */

namespace App\Classes\Word;

use App\Entity\ApcSae;
use PhpOffice\PhpWord\Exception\CopyFileException;
use PhpOffice\PhpWord\Exception\CreateTemporaryFileException;
use PhpOffice\PhpWord\TemplateProcessor;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\HttpKernel\KernelInterface;

class MyWord
{
    private string $dir;

    public function __construct(KernelInterface $kernel)
    {
        $this->dir = $kernel->getProjectDir() . '/public/upload/apc/';
    }

    /**
     * @param ApcSae $apcSae
     *
     * @return StreamedResponse
     * @throws CopyFileException
     * @throws CreateTemporaryFileException
     */
    public function exportSae(ApcSae $apcSae)
    {
        $templateProcessor = new TemplateProcessor($this->dir . 'template/sae2.docx');
        $templateProcessor->setValue('nomsae', $apcSae->getCodeSae() . ' - ' . $apcSae->getLibelle());
        $competences = '';
        foreach ($apcSae->getCompetences() as $competence) {
            $competences .= '- ' . $competence->getNomCourt() . "</w:t><w:br/><w:t>";
        }

        $acs = '';
        foreach ($apcSae->getApcSaeApprentissageCritiques() as $ac) {
            if ($ac->getApprentissageCritique() !== null) {
                $acs .= '- ' . $ac->getApprentissageCritique()->getCode() . ' : ' . $ac->getApprentissageCritique()->getLibelle() . "</w:t><w:br/><w:t>";
            }
        }

        $ressources = '';
        foreach ($apcSae->getApcSaeRessources() as $ac) {
            if ($ac->getRessource() !== null) {
                $ressources .= '- ' . $ac->getRessource()->getCodeRessource() . ' : ' . $ac->getRessource()->getLibelle() . "</w:t><w:br/><w:t>";
            }
        }

        $templateProcessor->setValue('competences', $competences);
        $templateProcessor->setValue('description', $apcSae->getDescription());
        $templateProcessor->setValue('acs', $acs);
        $templateProcessor->setValue('heures', $apcSae->getHeuresCM() + $apcSae->getHeuresTD());
        $templateProcessor->setValue('heuresTP', $apcSae->getHeuresTP());
        $templateProcessor->setValue('heuresPtut', $apcSae->getHeuresProjet());
        $templateProcessor->setValue('ressources', $ressources);
        $templateProcessor->setValue('livrables', $apcSae->getLivrables());
        $templateProcessor->setValue('semestre', 'Semestre ' . $apcSae->getSemestre()->getOrdreLmd());

        $filename = 'sae_' . $apcSae->getCodeSae() . '.docx';

        return new StreamedResponse(
            static function() use ($templateProcessor) {
                $templateProcessor->saveAs('php://output');
            },
            200,
            [
                'Content-Description' => 'File Transfer',
                'Content-Transfer-Encoding' => 'binary',
                'Cache-Control' => 'must-revalidate, post-check=0, pre-check=0',
                'Content-Type' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'Content-Disposition' => 'attachment;filename="' . $filename . '"',
            ]
        );


    }
}
