import Header from '../../components/Home/header';
import Datas from '../../components/Home/datas';
import './home.scss';

export default function Home() {

    const HEADER_TITLE = 'Inflação da Gasolina no Brasil'

    return (
        <div className="home">
            <div className="content-home">
                <header>
                    <Header title={HEADER_TITLE} />
                </header>
                <main>
                    <section className='datas'>
                        <Datas />
                    </section>
                </main>
            </div>

        </div>
    )
}