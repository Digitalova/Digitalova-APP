import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef(({ className, style, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
      className={cn(
        "peer shrink-0 rounded-none border border-slate-200 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-purple-600 data-[state=checked]:text-slate-50",
        className
      )}
      style={{ 
        width: '20px',
        height: '20px',
        minWidth: '20px',
        minHeight: '20px',
        maxWidth: '20px',
        maxHeight: '20px',
        aspectRatio: '1 / 1',
        ...style
      }}
    {...props}>
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
      <Check className="h-5 w-5" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }