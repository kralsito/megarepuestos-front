'use client';

import { useState } from "react";
import SectionAClients from "./components/SectionAClients";
import TableClients from "./components/tableClients";

const Clients = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <SectionAClients />
            <TableClients />
        </div>
    );
};

export default Clients;
