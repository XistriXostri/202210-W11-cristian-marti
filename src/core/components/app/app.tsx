import { Pages } from '../../types/page';
import { Layout } from '../layout/layout';
import { AppRoutes } from '../routes/app.routes';

export function App() {
    const items: Pages = [
        { path: '/login', label: 'Login' },
        { path: '/register', label: 'Register' },
    ];

    return (
        <Layout>
            <AppRoutes items={items}></AppRoutes>
        </Layout>
    );
}

export default App;
