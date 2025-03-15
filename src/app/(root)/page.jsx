import ProductCarousel from "./components/productcarousel";
import SectionACarousel from "./components/SectionACarousel";
import SectionFooter from "./components/sectionFooter";
import SectionB from "./components/SectionB";

export default function Home() {
    return (
        <>
            <SectionACarousel />
            <SectionB />
            <ProductCarousel />
            <SectionB />
            <SectionFooter />
            
        </>
    );
}
