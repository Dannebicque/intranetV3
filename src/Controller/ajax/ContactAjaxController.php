<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/ajax/ContactAjaxController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 25/09/2020 09:02

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
 * Class AbsenceApiController
 * @package App\Controller
 * @Route("/ajax/contact")
 * @IsGranted("ROLE_PERMANENT")
 */
class ContactAjaxController extends BaseController
{
    /**
     * @Route("/edit/{id}", name="contact_ajax_edit", options={"expose":true})
     *
     * @param MyContact $myContact
     * @param Request   $request
     *
     * @param Contact   $contact
     *
     * @return JsonResponse
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
