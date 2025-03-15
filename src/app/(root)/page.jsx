import ProductCarousel from "./components/productcarousel";
import SectionACarousel from "./components/SectionACarousel";
import SectionFooter from "./components/sectionFooter";
export default function Home() {
    return (
        <>
            <SectionACarousel />
            <ProductCarousel />
            <SectionFooter />
            
        </>
    );
}
