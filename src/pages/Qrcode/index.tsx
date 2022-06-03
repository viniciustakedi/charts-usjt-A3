import { useEffect, useState } from 'react';
import Header from '../../components/Header/header';
import { TitleContext } from '../../contexts/context';

import QrCode from '../../assets/images/qrcode.png'; // Importa o QR Code
import './qrcode.scss';


export default function Qrcode() {
    const [title, setTitle] = useState("QrCode da Dashboard")

    useEffect(() => {
        document.title = "A3 | QRCode"
    }, [])

    return (
        <TitleContext.Provider value={{ title, setTitle }}>
            <div className="qrcode">
                <header>
                    <Header />
                </header>
                <main>
                    <img src={QrCode} alt="qr_code" />
                </main>
            </div>
        </TitleContext.Provider>
    )
}