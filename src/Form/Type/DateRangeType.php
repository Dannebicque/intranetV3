<?php
// src/Form/Type/ShippingType.php
namespace App\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\FormBuilderInterface;

/**
 * Class YesNoType
 * @package App\Form\Type
 */
class DateRangeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->add('from_date', DateType::class,
            array_merge($options['from_date_options'], ['data' => $options['date_data']['from']]));
        $builder->add('to_date', DateType::class,
            array_merge($options['from_date_options'], ['data' => $options['date_data']['to']]));
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver): void
    {

        $resolver
            ->setDefaults(array(
                'required'          => true,
                'from_date_options' => array('widget' => 'single_text', 'html5' => false, 'format' => 'dd/MM/yyyy'),
                //todo: il faudrait caller le format en fonction de la locale?
                'to_date_options'   => array('widget' => 'single_text', 'html5' => false, 'format' => 'dd/MM/yyyy'),
                'date_data'         => ['from' => new \DateTime('now'), 'to' => new \DateTime('now')]
            ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix(): string
    {
        return 'my_date_range';
    }
}
