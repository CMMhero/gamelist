import { ThemeProvider } from "@/components/theme-provider";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from "./pages/About";
import Game from "./pages/Game";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
	
	return (
		<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/game/:id" element={<Game />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
