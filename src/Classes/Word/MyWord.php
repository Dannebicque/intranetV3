<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Word/MyWord.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/06/2021 10:28
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
     * @return StreamedResponse
     *
     * @throws CopyFileException
     * @throws CreateTemporaryFileException
     */
    public function exportSae(ApcSae $apcSae)
    {
        $templateProcessor = new TemplateProcessor($this->dir . 'template/sae.docx');
        $templateProcessor->setValue('nomsae', $apcSae->getCodeMatiere() . ' - ' . $apcSae->getLibelle());
        $competences = '';
        foreach ($apcSae->getCompetences() as $competence) {
            $competences .= '- ' . $competence->getNomCourt() . '</w:t><w:br/><w:t>';
        }

        $acs = '';
        foreach ($apcSae->getApcSaeApprentissageCritiques() as $ac) {
            if (null !== $ac->getApprentissageCritique()) {
                $acs .= '- ' . $ac->getApprentissageCritique()->getCode() . ' : ' . $ac->getApprentissageCritique()->getLibelle() . '</w:t><w:br/><w:t>';
            }
        }

        $ressources = '';
        foreach ($apcSae->getApcSaeRessources() as $ac) {
            if (null !== $ac->getRessource()) {
                $ressources .= '- ' . $ac->getRessource()->getCodeMatiere() . ' : ' . $ac->getRessource()->getLibelle() . '</w:t><w:br/><w:t>';
            }
        }

        $templateProcessor->setValue('competences', $competences);
        $templateProcessor->setValue('description', $this->prepareTexte($apcSae->getDescription()));
        $templateProcessor->setValue('acs', $acs);
        $templateProcessor->setValue('heures', $apcSae->getCmPpn() + $apcSae->getTdPpn());
        $templateProcessor->setValue('heuresTP', $apcSae->getTpPpn());
        $templateProcessor->setValue('heuresPtut', $apcSae->getProjetPpn());
        $templateProcessor->setValue('ressources', $ressources);
        $templateProcessor->setValue('livrables', $this->prepareTexte($apcSae->getLivrables()));
        $templateProcessor->setValue('semestre', 'Semestre ' . $apcSae->getSemestre()->getOrdreLmd());
        $templateProcessor->setValue('exemples', $this->prepareTexte($apcSae->getExemples()));

        $filename = 'sae_' . $apcSae->getCodeMatiere() . ' ' . $apcSae->getLibelle() . '.docx';

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

    private function prepareTexte($text)
    {
        $text = nl2br(trim($text));
        $text = str_replace('<br />', '</w:t><w:br/><w:t>', $text);

        return $text;
    }

    /**
     * @return StreamedResponse
     *
     * @throws CopyFileException
     * @throws CreateTemporaryFileException
     */
    public function exportRessource(ApcRessource $apcRessource)
    {
        $templateProcessor = new TemplateProcessor($this->dir . 'template/ressource.docx');
        $templateProcessor->setValue('nomressource',
            $apcRessource->getCodeMatiere() . ' - ' . $apcRessource->getLibelle());
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
            if (null !== $ac->getApprentissageCritique()) {
                $txt = '- ' . $ac->getApprentissageCritique()->getCode() . ' : ' . $ac->getApprentissageCritique()->getLibelle() . '</w:t><w:br/><w:t>';
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
            if (null !== $ac->getRessource()) {
                $ressources .= '- ' . $ac->getSae()->getCodeMatiere() . ' : ' . $ac->getSae()->getLibelle() . '</w:t><w:br/><w:t>';
            }
        }

        $templateProcessor->setValue('description', $this->prepareTexte($apcRessource->getDescription()));

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

        $templateProcessor->setValue('heures', $apcRessource->getCmPpn() + $apcRessource->getTdPpn());
        $templateProcessor->setValue('heuresTP', $apcRessource->getTpPpn());
        $templateProcessor->setValue('saes', $ressources);
        $templateProcessor->setValue('prerequis', $this->prepareTexte($apcRessource->getPreRequis()));
        $templateProcessor->setValue('motscles', $this->prepareTexte($apcRessource->getMotsCles()));
        $templateProcessor->setValue('semestre', 'Semestre ' . $apcRessource->getSemestre()->getOrdreLmd());

        $filename = 'ressource_' . $apcRessource->getCodeMatiere() . ' ' . $apcRessource->getLibelle() . '.docx';

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
