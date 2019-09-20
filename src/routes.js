import {createStackNavigator} from 'react-navigation';
import Main from './pages/main';
import Graficos from './pages/graficos'
import formulario from './controles/formularioG'
import Detalhes from './pages/detalhes'

export default createStackNavigator({
    Main,
    Graficos,
    formulario,
    Detalhes,
});