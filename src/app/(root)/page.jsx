import Head from "next/head"; 

import ProductCarousel from "./components/productcarousel";
import SectionACarousel from "./components/SectionACarousel";
import SectionFooter from "./components/sectionFooter";
import SectionB from "./components/SectionB";
import SectionC from "./components/sectionC";
import SectionE from "./components/sectionE";
import SectionF from "./components/sectionF";
import SectionG from "./components/sectionG";

export default function Home() {
    return (
        <>
            <Head>
            <title>Mega Repuestos | Repuestos de Celulares en Berazategui</title>
            <meta name="description" content="Venta de repuestos para celulares en Berazategui: pantallas, baterías, cargadores, flex y más. Mega Repuestos, tu solución en repuestos." />
            <meta name="keywords" content="repuestos celulares Berazategui, pantallas de celulares, baterías de celulares, mega repuestos" />
            <meta name="robots" content="index, follow" />
            
            <meta property="og:title" content="Mega Repuestos | Repuestos de Celulares en Berazategui" />
            <meta property="og:description" content="En Mega Repuestos tenemos todos los repuestos para tu celular en Berazategui. Calidad y buen precio garantizados." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://tusitio.com" />
            <meta property="og:image" content="https://tusitio.com/imagen-previa.jpg" />

            <link rel="icon" href="/favicon.ico" />
            </Head>

            <SectionACarousel />
            <SectionC />
            <ProductCarousel />
            <SectionB />
            <SectionG />
            <SectionF />
            <SectionC />
            <SectionE />
            <SectionFooter />
        </>
    );
}
