'use client';

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { getAccessTokenAction } from "@/actions/auth";
import SectionAClients from "./components/SectionAClients";
import TableClients from "./components/tableClients";

const Clients = () => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const token = await getAccessTokenAction();
                
                if (!token) {
                    router.push('/login');
                } else {
                    setIsAuthenticated(true);
                }
            } catch (error) {
                console.error('Error checking authentication:', error);
                router.push('/login');
            }
        };

        checkAuthentication();
    }, [router]);

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <SectionAClients />
            <TableClients />
        </div>
    );
};

export default Clients;