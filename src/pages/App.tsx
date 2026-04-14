import { useEffect } from 'react';
import Header from '@components/Header/Header';

const App = ({ title }: { title: string }) => {
    useEffect(() => {
        document.title = title;
    }, [title])

    return (
        <>
            <Header />
        </>
    )
}

export default App
