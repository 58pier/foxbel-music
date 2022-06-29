import { SongsContextProvider } from "./context/SongsContext";
import {
	HashRouter as Router,
	Routes,
	Route,
	Navigate
} from 'react-router-dom';

import FoxbelApp from "./components/pages/FoxbelApp";
import {GlobalStyles} from './styles/GlobalStyles'
const App = ()=> {
	return (
		<SongsContextProvider>
			<GlobalStyles/>
			<Router>
					<Routes>
						<Route path='/' element={<FoxbelApp/>}/>
						<Route path='/track/:id' element={<FoxbelApp/>} />
						<Route path='*' element={<Navigate to='/' />} />
					</Routes>
				</Router>
		</SongsContextProvider>
	);
}

export default App;
