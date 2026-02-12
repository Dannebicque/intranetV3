<?php

namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class GeolocationService
{
    public function __construct(
        private HttpClientInterface $httpClient
    ) {}

    public function geolocateByIp(string $ip): ?array
    {
        // Valider et nettoyer l'IP
        if (!filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
            return null;
        }

        try {
            // ipapi.co en version gratuite ne nécessite pas de clé.
            $response = $this->httpClient->request('GET',
                "https://ipapi.co/{$ip}/json/",
                ['timeout' => 5]
            );

            return $response->toArray();
        } catch (\Exception $e) {
            // Logger l'erreur
            return null;
        }
    }

    /**
     * Geocode an address (free Nominatim OpenStreetMap) and return lat/lon or null.
     * Returned array: ['lat' => (float), 'lon' => (float)]
     */
    public function geocodeAddress(string $address): ?array
    {
        $address = trim($address);
        if ($address === '') {
            return null;
        }

        try {
            $query = http_build_query([
                'q' => $address,
                'format' => 'json',
                'limit' => 1,
            ]);

            $url = 'https://nominatim.openstreetmap.org/search?' . $query;

            $response = $this->httpClient->request('GET', $url, [
                'timeout' => 10,
                'headers' => [
                    // Nominatim requires a valid User-Agent identifying the application
                    'User-Agent' => 'intranetV3/1.0 (+https://example.org)'
                ]
            ]);

            $data = $response->toArray();
            if (!is_array($data) || count($data) === 0) {
                return null;
            }

            $first = $data[0];
            if (isset($first['lat']) && isset($first['lon'])) {
                return [
                    'lat' => (float) $first['lat'],
                    'lon' => (float) $first['lon'],
                ];
            }

            return null;
        } catch (\Exception $e) {
            // Logger l'erreur
            return null;
        }
    }
}
