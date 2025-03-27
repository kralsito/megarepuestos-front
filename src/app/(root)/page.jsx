import ProductCarousel from "./components/productcarousel";
import SectionACarousel from "./components/SectionACarousel";
import SectionFooter from "./components/sectionFooter";
import SectionB from "./components/SectionB";
import SectionC from "./components/sectionC";
import SectionE from "./components/sectionE";
import SectionF from "./components/sectionF";

export default function Home() {
    return (
        <>
            <SectionACarousel />
            <SectionC />
            <ProductCarousel />
            <SectionF />
            <SectionC />
            <SectionE />
            <SectionFooter />
            
        </>
    );
}
