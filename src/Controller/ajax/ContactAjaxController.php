<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/ajax/ContactAjaxController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:36
 */

namespace App\Controller\ajax;

use App\Classes\MyContact;
use App\Controller\BaseController;
use App\Entity\Contact;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AbsenceApiController.
 *
 * @Route("/ajax/contact")
 * @IsGranted("ROLE_PERMANENT")
 */
class ContactAjaxController extends BaseController
{
    /**
     * @Route("/edit/{id}", name="contact_ajax_edit", options={"expose":true})
     */
    public function edit(MyContact $myContact, Request $request, Contact $contact): JsonResponse
    {
        $name = $request->request->get('field');
        $value = $request->request->get('value');

        $update = $myContact->update($contact, $name, $value);

        return $update ? new JsonResponse('', Response::HTTP_OK) : new JsonResponse('erreur',
            Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
