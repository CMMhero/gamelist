import { ThemeProvider } from "@/components/theme-provider";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from "./pages/Home";

function App() {
	
	return (
		<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
			<Router>
				<Routes>
					<Route path="/" element={<Home/>} />
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
