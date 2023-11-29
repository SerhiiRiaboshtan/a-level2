import * as React from 'react';

import { LoginFormTest, FileUpload } from '../tempScreens';

const MainPage = () => {
    return (
        <div  style={{height: "87vh"}}>
            MainPage
            <LoginFormTest/>
            Выгрузка файлов на сервер
            <FileUpload/>
        </div>
    )
}

export default MainPage;