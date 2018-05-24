<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 18/05/2018
 * Time: 19:14
 */

namespace App\Normalizer;


use App\Entity\Actualite;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Serializer\Exception\CircularReferenceException;
use Symfony\Component\Serializer\Exception\InvalidArgumentException;
use Symfony\Component\Serializer\Exception\LogicException;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;

class ActualiteNormalizer implements NormalizerInterface
{

    private $router;
    private $normalizer;

    /**
     * ActualiteNormalizer constructor.
     *
     * @param $router
     * @param $normalizer
     */
    public function __construct(RouterInterface $router, ObjectNormalizer $normalizer)
    {
        $this->router = $router;
        $this->normalizer = $normalizer;
    }

    public function normalize($object, $format = null, array $context = array())
    {
        // TODO: Implement normalize() method.
    }

    public function supportsNormalization($data, $format = null)
    {
        return $data instanceof Actualite;
    }


}