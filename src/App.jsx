import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import BlogPost from './routes/BlogPost';
import NotFound from './routes/NotFound';

const App = () => (
	<Routes>
		<Route path='/' element={Home} />
		<Route path='/blog/:blogId' element={BlogPost} />
		<Route path='*' element={NotFound} />
	</Routes>
);

export default App;
