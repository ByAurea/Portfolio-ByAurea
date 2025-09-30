/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. Defina o KEYFRAMES (o que a animação faz)
      keyframes: {
        'shadow-pulse': {
          '0%, 100%': { 
            // Sombra inicial sutil (ajuste as cores e expansão se necessário)
            'shadow': '0 0 5px rgba(255, 255, 255, 0.7)' 
          },
          '50%': { 
            // Pico da pulsação: sombra mais expandida e intensa
            'shadow': '0 0 15px 5px rgba(255, 255, 255, 1)' 
          },
        },
      },
      // 2. Defina a ANIMAÇÃO (como ela se comporta: duração, repetição)
      animation: {
        // Gera a classe utilitária: "animate-pulse-shadow"
        'pulse-shadow': 'shadow-pulse 2s infinite alternate',
      },
    },
  },
  plugins: [],
}