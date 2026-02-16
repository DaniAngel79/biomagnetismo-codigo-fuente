import { useToast } from "../../hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} className="bg-white border-emerald-100 shadow-xl">
            <div className="grid gap-1">
              {title && <ToastTitle className="text-slate-900 font-bold">{title}</ToastTitle>}
              {description && (
                <ToastDescription className="text-slate-500 text-sm">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className="text-emerald-600 hover:text-emerald-700" />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}