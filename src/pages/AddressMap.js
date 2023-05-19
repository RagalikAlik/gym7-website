import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
//import '@pbe/react-yandex-maps/dist/style.css';


export function AddressMap(){
    const mapState = {
        center: [53.891588, 27.532381], // Координаты г. Минск
        zoom: 13 // Масштаб карты
      };
    
      const placemarkGeometry = [53.917989, 27.435670]; // Координаты улицы Колесникова 3
    
      return (
        <YMaps>
          <Map state={mapState} width="100%" height="400px">
            <Placemark geometry={placemarkGeometry} />
          </Map>
        </YMaps>
      );
}