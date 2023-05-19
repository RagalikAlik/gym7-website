import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
//import '@pbe/react-yandex-maps/dist/style.css';


export function AddressMap(){
    const mapState = {
        center: [53.917989, 27.435670], 
        zoom: 15 
      };
    
      const placemarkGeometry = [53.917989, 27.435670];
    
      return (
        <YMaps>
          <Map state={mapState} width="100%" height="400px">
            <Placemark geometry={placemarkGeometry} />
          </Map>
        </YMaps>
      );
}