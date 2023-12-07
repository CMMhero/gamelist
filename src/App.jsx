import { ThemeProvider } from "@/components/theme-provider";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
	
	return (
		<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
