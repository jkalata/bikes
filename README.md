# Readme
#### Moduły
Aplikacja poza nadrzędnym **AppModule** składa się z modułu **PlannerModule**, który poprzez Route\'y ładuje (lazy loading) **BikeStationsListModule** oraz **BikeStationDetailsModule**

#### Informacje o stacjach rowerowych
Komponent wyświetlający listę stacji (**BikeStationsListComponent**) wywołuje request do API. Informacje są zapisywane w Store. Dodatkowo stan Store\'a jest zapisywany w sessionStorage (Store Rehydration). Komponenty reaktywnie poprzez selectory pobierają interesujące je dane.
Dodatkowo przy każdej zmianie lokalizacji użytkownika lista stacji jest sortowana rosnąco według dystansu użytkownika do stacji.

#### Lokalizacja użytkownika
W **AppComponent** poprzez akcję wywoływana jest funkcja `navigator.geolocation.watchPosition()`, która wywołuje dialog pytający użytkownika o pozwolenie na lokalizację. Gdy użytkownik się nie zgodzi, lub wystąpi inny błąd związany z lokalizacją, w Store ustawiana jest flaga `error = true`. W przyszłości można to wykorzystać do wyświetlania informacji o błędach lokalizacji.

#### Testy jednostkowe
Napisane zostały podstawowe testy jednostkowe wszystkich komponentów, serwisów, pipe\'ów, selectorów, efektów oraz reducerów.

## Uwagi
- Określenie dokładnej lokalizacji, w której znajduje się stacja wymaga użycia *reverse geocodingu*. Istniejące API służące w tym celu są jednak albo płatne albo ograniczone (np. liczba requestów na sekundę), dlatego roboczo lokalizacja każdej ze stacji została na sztywno wpisana jako \'ulica Testowa\'.