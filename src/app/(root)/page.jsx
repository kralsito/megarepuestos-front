import ProductCarousel from "./components/productcarousel";
import SectionACarousel from "./components/SectionACarousel";
import SectionFooter from "./components/sectionFooter";
import SectionB from "./components/SectionB";
import SectionC from "./components/sectionC";
import SectionE from "./components/sectionE";

export default function Home() {
    return (
        <>
            <SectionACarousel />
            <SectionC />
            <ProductCarousel />
            <SectionE />
            <SectionFooter />
            
        </>
    );
}
