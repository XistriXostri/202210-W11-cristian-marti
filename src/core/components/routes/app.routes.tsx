import { Route, Routes } from 'react-router-dom';
import { ErrorPage } from '../../features/error/errorpage';
import { FormPage } from '../../features/form/pages/form.page';
import { LoginPage } from '../../features/login/pages/loginpage';
import { Pages } from '../../types/page';

export function AppRoutes({ items }: { items: Pages }) {
    return (
        <Routes>
            <Route path={''} element={<LoginPage></LoginPage>}></Route>
            <Route
                path={items[0].path}
                element={<LoginPage></LoginPage>}
            ></Route>
            <Route path={items[1].path} element={<FormPage></FormPage>}></Route>
            <Route path={'*'} element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
    );
}
