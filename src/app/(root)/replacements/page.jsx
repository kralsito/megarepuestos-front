
'use client';

import TableReplacements from './components/tablereplacements';
import SectionAReplacementsList from './components/sectionAReplacementslist';
import SectionF
 from '../components/sectionF';
const Replacements = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <SectionAReplacementsList />
      <TableReplacements />
      <SectionF />
    </div>
  );
};

export default Replacements;