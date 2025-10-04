module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F0F9F0", // very light green
          100: "#D4F1D4", // light green
          200: "#A8E6A8", // medium light green
          300: "#7DD87D", // medium green
          400: "#52C952", // bright green
          500: "#2D5A27", // deep forest green - main
          600: "#245020", // darker forest green
          700: "#1B3C18", // very dark green
          800: "#122810", // extremely dark green
          900: "#091408", // almost black green
          DEFAULT: "#2D5A27", // deep forest green
        },
        secondary: {
          50: "#FBF7F3", // very light brown
          100: "#F5E6D3", // light brown
          200: "#EBCCA7", // medium light brown
          300: "#E1B37B", // medium brown
          400: "#D7994F", // bright brown
          500: "#8B4513", // rich earth brown - main
          600: "#7A3D11", // darker brown
          700: "#5C2E0D", // very dark brown
          800: "#3D1F08", // extremely dark brown
          900: "#1F0F04", // almost black brown
          DEFAULT: "#8B4513", // rich earth brown
        },
        accent: {
          50: "#FEF9F4", // very light golden
          100: "#FDF0E1", // light golden
          200: "#FBE1C3", // medium light golden
          300: "#F9D2A5", // medium golden
          400: "#F7C387", // bright golden
          500: "#F4A460", // golden harvest tone - main
          600: "#E8954D", // darker golden
          700: "#D4863A", // very dark golden
          800: "#A66B2E", // extremely dark golden
          900: "#785022", // almost black golden
          DEFAULT: "#F4A460", // golden harvest tone
        },
        background: "#FAFAF9", // warm off-white
        surface: "#FFFFFF", // pure white
        text: {
          primary: "#1F2937", // deep charcoal - gray-800
          secondary: "#6B7280", // medium gray - gray-500
        },
        success: {
          50: "#ECFDF5", // very light success green - emerald-50
          100: "#D1FAE5", // light success green - emerald-100
          500: "#059669", // vibrant green - emerald-600
          DEFAULT: "#059669", // vibrant green
        },
        warning: {
          50: "#FFFBEB", // very light warning orange - amber-50
          100: "#FEF3C7", // light warning orange - amber-100
          500: "#D97706", // amber orange - amber-600
          DEFAULT: "#D97706", // amber orange
        },
        error: {
          50: "#FEF2F2", // very light error red - red-50
          100: "#FEE2E2", // light error red - red-100
          500: "#DC2626", // clear red - red-600
          DEFAULT: "#DC2626", // clear red
        },
        border: {
          DEFAULT: "#E5E7EB", // light gray - gray-200
          light: "#F3F4F6", // very light gray - gray-100
        },
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        caption: ['Nunito Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        'source-sans': ['Source Sans Pro', 'sans-serif'],
        'nunito-sans': ['Nunito Sans', 'sans-serif'],
        'jetbrains-mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      borderRadius: {
        'soft': '6px',
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'full': '9999px',
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'soft-hover': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'none': '0 0 #0000',
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'gentle': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 200ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        'pulse-gentle': 'pulseGentle 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}