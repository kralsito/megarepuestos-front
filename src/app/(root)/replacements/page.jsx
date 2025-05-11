'use client';

import TableReplacements from './components/tablereplacements';
import SectionAReplacementsList from './components/sectionAReplacementslist';
import SectionFooter from '../components/sectionFooter';
import SectionH from '../components/SectionH';

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