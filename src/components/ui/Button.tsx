// -- componente button estilo shadcn/ui
import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'accent'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    // -- estilos base
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:scale-105"
    
    // -- variantes de estilo
    const variants = {
      default: "bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-lg hover:shadow-xl",
      secondary: "bg-white text-primary-600 border-2 border-primary-500 hover:bg-primary-50",
      outline: "border-2 border-gray-300 bg-transparent hover:bg-gray-100 text-gray-700",
      ghost: "hover:bg-gray-100 text-gray-700",
      accent: "bg-gradient-to-r from-accent to-accent-light text-white hover:from-accent-dark hover:to-accent shadow-lg hover:shadow-xl",
    }
    
    // -- tamaños
    const sizes = {
      default: "h-12 px-8 py-3 text-base",
      sm: "h-9 px-4 py-2 text-sm",
      lg: "h-14 px-10 py-4 text-lg",
      icon: "h-10 w-10",
    }
    
    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
