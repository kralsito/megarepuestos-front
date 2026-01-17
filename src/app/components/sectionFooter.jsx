'use client';

import { Phone, MapPin, Instagram, Facebook, Mail, Clock } from "lucide-react";
import { useState } from "react";

const SectionFooter = () => {
    const [hoveredSocial, setHoveredSocial] = useState(null);
    const [hoveredLocation, setHoveredLocation] = useState(null);

    return (
        <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Gradient orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 py-16 md:py-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    
                    {/* Contact Section */}
                    <div className="space-y-8">
                        {/* Title with decorative elements */}
                        <div className="relative">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
                                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                            </div>
                            <h2 
                                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-white mb-8"
                                style={{ fontFamily: "'oktah', sans-serif" }}
                            >
                                Contactános
                            </h2>
                        </div>

                        {/* Contact Items */}
                        <div className="space-y-5">
                            {/* Phone */}
                            <div className="group relative backdrop-blur-sm bg-white/5 hover:bg-white/10 rounded-2xl p-5 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                                        <Phone className="w-6 h-6 text-slate-900" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs text-white/60 mb-1 font-medium">Teléfono</div>
                                        <a 
                                            href="tel:01136546874"
                                            className="text-white text-lg font-semibold hover:text-yellow-400 transition-colors"
                                        >
                                            011-3654-6874
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Location 1 - Berazategui */}
                            <div 
                                className="group relative backdrop-blur-sm bg-white/5 hover:bg-white/10 rounded-2xl p-5 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10"
                                onMouseEnter={() => setHoveredLocation('berazategui')}
                                onMouseLeave={() => setHoveredLocation(null)}
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs text-white/60 mb-1 font-medium">Berazategui</div>
                                        <a
                                            href="https://maps.app.goo.gl/gVWJWAKucFYtSGUDA"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white text-lg font-semibold hover:text-yellow-400 transition-colors inline-flex items-center gap-2"
                                        >
                                            Calle 150 N°1485
                                            <svg 
                                                className={`w-4 h-4 transition-transform duration-300 ${hoveredLocation === 'berazategui' ? 'translate-x-1 -translate-y-1' : ''}`}
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Location 2 - Quilmes */}
                            <div 
                                className="group relative backdrop-blur-sm bg-white/5 hover:bg-white/10 rounded-2xl p-5 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/10"
                                onMouseEnter={() => setHoveredLocation('quilmes')}
                                onMouseLeave={() => setHoveredLocation(null)}
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs text-white/60 mb-1 font-medium">Quilmes</div>
                                        <a
                                            href="https://maps.app.goo.gl/dxpDh7KeeJf5ChNP6"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white text-lg font-semibold hover:text-yellow-400 transition-colors inline-flex items-center gap-2"
                                        >
                                            Rivadavia 309 - Local 5
                                            <svg 
                                                className={`w-4 h-4 transition-transform duration-300 ${hoveredLocation === 'quilmes' ? 'translate-x-1 -translate-y-1' : ''}`}
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social & Additional Info Section */}
                    <div className="space-y-8">
                        {/* Social Media Title */}
                        <div className="relative">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
                                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                            </div>
                            <h2 
                                className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-white mb-8"
                                style={{ fontFamily: "'oktah', sans-serif" }}
                            >
                                Sigamos conectados
                            </h2>
                        </div>

                        {/* Social Media Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* Instagram */}
                            <a 
                                href="https://www.instagram.com/megarepuestosquilmes/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="Instagram Megacelulares"
                                className="group relative"
                                onMouseEnter={() => setHoveredSocial('instagram')}
                                onMouseLeave={() => setHoveredSocial(null)}
                            >
                                <div className="relative backdrop-blur-sm bg-white/5 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20 rounded-2xl p-8 border border-white/10 hover:border-pink-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-pink-400/20 overflow-hidden">
                                    {/* Animated background on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 transition-opacity duration-300 ${hoveredSocial === 'instagram' ? 'opacity-100' : 'opacity-0'}`}></div>
                                    
                                    <div className="relative flex flex-col items-center justify-center space-y-4">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                                            <Instagram className="w-8 h-8 text-white" />
                                        </div>
                                        <span className="text-white font-semibold text-lg">Instagram</span>
                                        <div className={`w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 ${hoveredSocial === 'instagram' ? 'scale-x-100' : 'scale-x-0'}`}></div>
                                    </div>
                                </div>
                            </a>

                            {/* Facebook */}
                            <a 
                                href="https://www.facebook.com/megacelularesberazategui" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="Facebook Megacelulares"
                                className="group relative"
                                onMouseEnter={() => setHoveredSocial('facebook')}
                                onMouseLeave={() => setHoveredSocial(null)}
                            >
                                <div className="relative backdrop-blur-sm bg-white/5 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-blue-600/20 rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-400/20 overflow-hidden">
                                    {/* Animated background on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 transition-opacity duration-300 ${hoveredSocial === 'facebook' ? 'opacity-100' : 'opacity-0'}`}></div>
                                    
                                    <div className="relative flex flex-col items-center justify-center space-y-4">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                                            <Facebook className="w-8 h-8 text-white" />
                                        </div>
                                        <span className="text-white font-semibold text-lg">Facebook</span>
                                        <div className={`w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-300 ${hoveredSocial === 'facebook' ? 'scale-x-100' : 'scale-x-0'}`}></div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Additional Info Card */}
                        <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
                                    <Clock className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-2">Horarios de atención</h3>
                                    <p className="text-white/70 text-sm">Lunes a Viernes: 9:00 - 18:00</p>
                                    <p className="text-white/70 text-sm">Sábados: 9:00 - 13:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }

                .animate-pulse {
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
            `}</style>
        </footer>
    );
};

export default SectionFooter;



