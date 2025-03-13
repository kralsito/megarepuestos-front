'use client';

import SectionA from './components/sectionA';
import Table from './components/table';



const Admin = () => {

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <SectionA></SectionA>
            <Table></Table>
        </div>
    )
};

export default Admin;