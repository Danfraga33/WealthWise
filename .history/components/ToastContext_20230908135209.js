const { useContext } from 'react'

const ToastContext = useContext()

export const useToast = () => {
   return useContext(ToastContext)
}