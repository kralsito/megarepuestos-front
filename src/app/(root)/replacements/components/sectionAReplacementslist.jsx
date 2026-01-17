"use client";

const SectionAReplacementsList = () => {

    return (
        <div className="relative px-4 sm:px-6 lg:px-0">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-1/3 w-48 h-48 bg-yellow-400 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4 mt-16 sm:mt-20 md:mt-28">
                    <h1 
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight"
                        style={{ fontFamily: "'oktah', sans-serif" }}
                    >
                        Repuestos
                    </h1>
                </div>
                
                {/* Modern gradient divider */}
                <div className="relative w-full mb-8 mt-4">
                    <div className="w-full h-0.5 bg-gradient-to-r from-black via-yellow-400 to-black rounded-full"></div>
                    {/* Optional: Center accent dot */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
                </div>
            </div>
        </div>
    )
};

export default SectionAReplacementsList;