import { Phone, MapPin, Instagram, Facebook } from "lucide-react";

const SectionFooter = () => {
    return (
        <footer className="bg-gray-100 text-black py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-6">
                <div className="text-left w-full md:w-auto">
                    <h2 className="text-2xl mb-4" style={{ fontFamily: "'oktah', sans-serif" }}>Contactános</h2>
                    <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                            <Phone className="w-6 h-6 text-black" />
                            <span>011-4321-8765</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <MapPin className="w-6 h-6 text-black" />
                            <a
                                href="https://maps.app.goo.gl/gVWJWAKucFYtSGUDA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary-yellow transition"
                            >
                                Calle 150 N°1485, Berazategui
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-6 md:mt-0 w-full md:w-auto">
                    <h2 className="text-2xl mb-4" style={{ fontFamily: "'oktah', sans-serif" }}>Sigamos conectados</h2>
                    <div className="flex space-x-6">
                        <a href="https://www.instagram.com/megacelularesberazategui/" target="_blank" rel="noopener noreferrer">
                            <Instagram className="w-8 h-8 text-black hover:text-primary-yellow transition" />
                        </a>
                        <a href="https://www.facebook.com/megacelularesberazategui" target="_blank" rel="noopener noreferrer">
                            <Facebook className="w-8 h-8 text-black hover:text-primary-yellow transition" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default SectionFooter;



