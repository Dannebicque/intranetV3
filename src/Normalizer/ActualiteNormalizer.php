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
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;

/**
 * Class ActualiteNormalizer
 * @package App\Normalizer
 */
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

    /**
     * @param object $object
     * @param null   $format
     * @param array  $context
     *
     * @return array|bool|float|int|string|void
     */
    public function normalize($object, $format = null, array $context = array())
    {
        // TODO: Implement normalize() method.
    }

    /**
     * @param      $data
     * @param null $format
     *
     * @return bool
     */
    public function supportsNormalization($data, $format = null): bool
    {
        return $data instanceof Actualite;
    }


}