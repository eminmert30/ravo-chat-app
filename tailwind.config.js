/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', // Modern indigo
        secondary: '#7C3AED', // Rich purple
        accent: '#0EA5E9', // Vibrant blue
        success: '#10B981', // Emerald
        dark: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        'chat-hover': '#F1F5F9',
        'chat-selected': '#EEF2FF',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
        'gradient-accent': 'linear-gradient(135deg, #0EA5E9 0%, #2563EB 100%)',
        'gradient-success': 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
        'gradient-surface': 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
        'gradient-overlay': 'linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)',
        'gradient-message': 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
        'gradient-pattern': 'radial-gradient(circle at 100% 100%, rgba(79, 70, 229, 0.15) 0%, transparent 50%)',
        'mesh-pattern': 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z\' fill=\'%234F46E5\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(15, 23, 42, 0.08)',
        'message': '0 2px 5px rgba(15, 23, 42, 0.06)',
        'glow': '0 0 20px rgba(79, 70, 229, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-in-out',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(79, 70, 229, 0.15)' },
          '50%': { boxShadow: '0 0 30px rgba(79, 70, 229, 0.3)' },
        },
      },
    },
  },
  plugins: [],
}
