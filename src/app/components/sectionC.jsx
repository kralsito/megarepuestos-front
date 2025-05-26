const SectionC = () => {
    const logos = [
      { src: "/images/Motorola.png", alt: "Motorola" },
      { src: "/images/Samsung.png", alt: "Samsung" },
      { src: "/images/Xiaomi.png", alt: "Xiaomi" },
      { src: "/images/IPhone.png", alt: "iPhone" },
      { src: "/images/tcl.png", alt: "Tcl" },
      { src: "/images/alcatel.png", alt: "Alcatel" },
      { src: "/images/lg.png", alt: "LG" },
      { src: "/images/huawei.png", alt: "Huawei" },
      { src: "/images/zte.png", alt: "ZTE" },
      { src: "/images/tecnospark.png", alt: "TecnoSpark" },
    ];
  
    return (
      <div className="w-full bg-gray-200 py-4 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-track">
            {logos.map((logo, index) => (
              <div key={index} className="marquee-item">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-6 sm:h-8 lg:h-12"
                />
              </div>
            ))}
            
            {logos.map((logo, index) => (
              <div key={`dup-${index}`} className="marquee-item">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-6 sm:h-8 lg:h-12"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
export default SectionC;