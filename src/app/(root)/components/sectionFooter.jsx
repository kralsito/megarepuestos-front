import { Phone, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";

const SectionFooter = () => {
    return (
        <footer className="bg-gray-100 text-black py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-6">
                <div className="text-left w-full md:w-auto">
                    <h2 className="text-2xl font-semibold mb-4">Contactános</h2>
                    <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                            <MessageCircle className="w-6 h-6 text-black" />
                            <span>+54 9 11 1234-5678</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Phone className="w-6 h-6 text-black" />
                            <span>011-4321-8765</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <MapPin className="w-6 h-6 text-black" />
                            <span>Av. Eva Perón 1453, Berazategui</span>
                        </div>
                    </div>
                </div>

                <div className="mt-6 md:mt-0 w-full md:w-auto">
                    <h2 className="text-2xl font-semibold mb-4">Sigamos conectados</h2>
                    <div className="flex space-x-6">
                        <a href="https://www.instagram.com/megacelularesberazategui/" target="_blank" rel="noopener noreferrer">
                            <Instagram className="w-8 h-8 text-black hover:text-gray-400 transition" />
                        </a>
                        <a href="https://www.facebook.com/megacelularesberazategui" target="_blank" rel="noopener noreferrer">
                            <Facebook className="w-8 h-8 text-black hover:text-gray-400 transition" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default SectionFooter;


