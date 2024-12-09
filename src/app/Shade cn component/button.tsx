import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils'; // Ensure this import is correct

// Define the button variants using cva
const button = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

// Define ButtonProps interface to accept the variant, size, and other HTML button attributes
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  asChild?: boolean; // If true, use Slot instead of button
}

// Define the Button component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'; // Use Slot if asChild is true, else use button tag

    // When `asChild` is true, we only want to pass `children` and `ref` to Slot, not button-specific props
    if (asChild) {
      return (
        <Comp ref={ref} {...props}>
          {children}
        </Comp>
      );
    }

    // When not `asChild`, pass normal button props (including `disabled`, `form`, etc.)
    return (
      <Comp
        className={cn(button({ variant, size, className }))} // Combine variants and additional classes
        ref={ref}
        {...props} // Spread button-specific props
      />
    );
  }
);

// Set the display name of the Button component for better debugging
Button.displayName = 'Button';

// Export Button and the button variants
export { Button, button };
 