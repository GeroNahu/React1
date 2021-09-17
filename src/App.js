import './App.css';
import Nav from './components/Nav';
import './components/Body/bodyStyles.css'
import Body from './components/Body/Body';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import DatosPersonales from "./components/Body/DatosPersonales";
import Contacto from './components/Body/Contacto';
import TodosLosDatos from './components/Body/TodosLosDatos'
import ExperiencaLaboral from './components/Body/ExperiencaLaboral'
import Educacion from './components/Body/Educacion'
import Certificacion from './components/Body/Certificacion';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <BrowserRouter history={history}>
        <Nav />
          <Body>
            <Switch>
              <Route exact path="/infocompleta" component={TodosLosDatos} />
              <Route exact path="/datosPersonales" component={DatosPersonales} />
              <Route exact path="/experienciaLaboral" component={ExperiencaLaboral} />
              <Route exact path="/educacion" component={Educacion} />
              <Route exact path="/Certificacion" component={Certificacion} />
              <Route path="/contacto" component={Contacto} />
            </Switch>
          </Body>
      </BrowserRouter>
    </div>
  );
}

export default App;
