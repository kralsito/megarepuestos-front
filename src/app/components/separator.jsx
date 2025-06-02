const VisualSeparator = ({ variant = "default", spacing = "normal", darkBg = false }) => {
  // Configuración de espaciado
  const spacingClasses = {
    small: "py-4",
    normal: "py-8", 
    large: "py-12",
    xl: "py-16"
  };

  // Diferentes variantes de separadores
  const variants = {
    // Línea simple con gradiente
    default: (
      <div className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
    ),

    // Separador con color primario
    primary: (
      <div className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-primary-yellow to-transparent" />
    ),

    // Separador con puntos decorativos
    dots: (
      <div className="flex items-center justify-center space-x-4">
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
        <div className="w-2 h-2 bg-primary-yellow rounded-full"></div>
        <div className="w-32 h-px bg-gray-400"></div>
        <div className="w-2 h-2 bg-primary-yellow rounded-full"></div>
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
      </div>
    ),

    // Separador con patrón geométrico
    geometric: (
      <div className="flex items-center justify-center">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="w-1 h-8 bg-gradient-to-b from-transparent via-primary-yellow to-transparent opacity-60"
              style={{ 
                transform: `scaleY(${0.3 + (i === 2 ? 0.7 : i === 1 || i === 3 ? 0.5 : 0.3)})`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      </div>
    ),

    // Separador con animación sutil
    animated: (
      <div className="relative w-full max-w-4xl mx-auto h-px bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-primary-yellow to-black animate-pulse opacity-95"></div>
      </div>
    ),

    // Separador invisible (solo espaciado)
    invisible: <div></div>,

    // Separador con texto decorativo
    text: (
      <div className="flex items-center justify-center space-x-4">
        <div className="w-24 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
        <span className="text-gray-400 text-xs font-medium tracking-wider">•••</span>
        <div className="w-24 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
      </div>
    ),

    // Separador con efecto brillante
    shine: (
      <div className="relative w-full max-w-4xl mx-auto h-px bg-gray-300 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-primary-yellow/80 to-transparent transform -skew-x-12 animate-pulse"></div>
      </div>
    ),

    // Variantes específicas para fondo negro
    darkDefault: (
      <div className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
    ),

    darkPrimary: (
      <div className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-primary-yellow to-transparent" />
    ),

    darkDots: (
      <div className="flex items-center justify-center space-x-4">
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-600"></div>
        <div className="w-2 h-2 bg-primary-yellow rounded-full"></div>
        <div className="w-32 h-px bg-gray-600"></div>
        <div className="w-2 h-2 bg-primary-yellow rounded-full"></div>
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-600"></div>
      </div>
    )
  };

  return (
    <div className={`w-full ${spacingClasses[spacing]} flex items-center justify-center ${darkBg ? 'bg-black' : ''}`}>
      {variants[variant] || variants.default}
    </div>
  );
};

export default VisualSeparator;