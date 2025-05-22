import TableReplacements from './components/tablereplacements';
import SectionAReplacementsList from './components/sectionAReplacementslist';
import SectionFooter from '../components/sectionFooter';
import SectionH from '../components/SectionH';

export const metadata = {
  title: "Repuestos y Reemplazos | Mega Repuestos",
  description: "Catálogo completo de repuestos y reemplazos para celulares en Berazategui. Encuentra el repuesto que necesitas para tu dispositivo.",
  robots: "index, follow",
  alternates: {
    canonical: "https://repuestosmega.com.ar/replacements",
  },
};

const Replacements = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-8">
        <SectionAReplacementsList />
        <TableReplacements />
      </div>
      <div>
        <SectionH />
        <SectionFooter />
      </div>
    </div>
  );
};

export default Replacements;