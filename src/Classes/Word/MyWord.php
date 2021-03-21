<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Word/MyWord.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/03/2021 12:12
 */

namespace App\Classes\Word;

use App\Entity\ApcRessource;
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
        $this->dir = $kernel->getProjectDir() . '/public/exemples/apc/';
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
        $templateProcessor = new TemplateProcessor($this->dir . 'template/sae.docx');
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

        $exemples = '';
        $t = explode('-', strip_tags(html_entity_decode($apcSae->getExemples())));
        foreach ($t as $ex) {
            $exemples .= '- ' . $ex . "</w:t><w:br/><w:t>";
        }

        $templateProcessor->setValue('competences', $competences);
        $templateProcessor->setValue('description', strip_tags(html_entity_decode($apcSae->getDescription())));
        $templateProcessor->setValue('acs', $acs);
        $templateProcessor->setValue('heures', $apcSae->getHeuresCM() + $apcSae->getHeuresTD());
        $templateProcessor->setValue('heuresTP', $apcSae->getHeuresTP());
        $templateProcessor->setValue('heuresPtut', $apcSae->getHeuresProjet());
        $templateProcessor->setValue('ressources', $ressources);
        $templateProcessor->setValue('livrables', strip_tags(html_entity_decode($apcSae->getLivrables())));
        $templateProcessor->setValue('semestre', 'Semestre ' . $apcSae->getSemestre()->getOrdreLmd());
        $templateProcessor->setValue('exemples', $exemples);

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

    /**
     * @param ApcRessource $apcRessource
     *
     * @return StreamedResponse
     * @throws CopyFileException
     * @throws CreateTemporaryFileException
     */
    public function exportRessource(ApcRessource $apcRessource)
    {
        $templateProcessor = new TemplateProcessor($this->dir . 'template/ressource.docx');
        $templateProcessor->setValue('nomressource',
            $apcRessource->getCodeRessource() . ' - ' . $apcRessource->getLibelle());
        $comp1 = 'NON';
        $comp2 = 'NON';
        $comp3 = 'NON';
        $comp4 = 'NON';
        $comp5 = 'NON';
        foreach ($apcRessource->getCompetences() as $competence) {
            switch ($competence->getNomCourt()) {
                case 'Comprendre':
                    $comp1 = 'OUI';
                    break;
                case 'Concevoir':
                    $comp2 = 'OUI';
                    break;
                case 'Exprimer':
                    $comp3 = 'OUI';
                    break;
                case 'Développer':
                    $comp4 = 'OUI';
                    break;
                case 'Entreprendre':
                    $comp5 = 'OUI';
                    break;
            }
        }

        $accomp1 = '';
        $accomp2 = '';
        $accomp3 = '';
        $accomp4 = '';
        $accomp5 = '';

        foreach ($apcRessource->getApcRessourceApprentissageCritiques() as $ac) {
            if ($ac->getApprentissageCritique() !== null) {
                $txt = '- ' . $ac->getApprentissageCritique()->getCode() . ' : ' . $ac->getApprentissageCritique()->getLibelle() . "</w:t><w:br/><w:t>";
                switch ($ac->getApprentissageCritique()->getCompetence()->getNomCourt()) {
                    case 'Comprendre':
                        $accomp1 .= $txt;
                        break;
                    case 'Concevoir':
                        $accomp2 .= $txt;
                        break;
                    case 'Exprimer':
                        $accomp3 .= $txt;
                        break;
                    case 'Développer':
                        $accomp4 .= $txt;
                        break;
                    case 'Entreprendre':
                        $accomp5 .= $txt;
                        break;
                }

            }
        }

        $ressources = '';
        foreach ($apcRessource->getApcSaeRessources() as $ac) {
            if ($ac->getRessource() !== null) {
                $ressources .= '- ' . $ac->getSae()->getCodeSae() . ' : ' . $ac->getSae()->getLibelle() . "</w:t><w:br/><w:t>";
            }
        }

        $templateProcessor->setValue('description', strip_tags($apcRessource->getDescription()));

        $templateProcessor->setValue('comp1', $comp1);
        $templateProcessor->setValue('comp2', $comp2);
        $templateProcessor->setValue('comp3', $comp3);
        $templateProcessor->setValue('comp4', $comp4);
        $templateProcessor->setValue('comp5', $comp5);

        $templateProcessor->setValue('accomp1', $accomp1);
        $templateProcessor->setValue('accomp2', $accomp2);
        $templateProcessor->setValue('accomp3', $accomp3);
        $templateProcessor->setValue('accomp4', $accomp4);
        $templateProcessor->setValue('accomp5', $accomp5);

        $templateProcessor->setValue('heures', $apcRessource->getHeuresCM() + $apcRessource->getHeuresTD());
        $templateProcessor->setValue('heuresTP', $apcRessource->getHeuresTP());
        $templateProcessor->setValue('saes', $ressources);
        $templateProcessor->setValue('prerequis', strip_tags(html_entity_decode($apcRessource->getPreRequis())));
        $templateProcessor->setValue('motscles', strip_tags(html_entity_decode($apcRessource->getMotsCles())));
        $templateProcessor->setValue('semestre', 'Semestre ' . $apcRessource->getSemestre()->getOrdreLmd());

        $filename = 'ressource_' . $apcRessource->getCodeRessource() . '.docx';

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
