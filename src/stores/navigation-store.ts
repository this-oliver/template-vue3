import { defineStore } from 'pinia'
import { useNotification } from '@/composables/useNotification'

export const useNavigationStore = defineStore('navigation', () => {
  const { notify } = useNotification();
  
  const options = [
    { 
      label: 'about',
      to: '/about'
    },
    { 
      label: 'login',
      action: () => {
        notify('Nav Bar', 'Login clicked', 'success')
      } 
    },
    { 
      label: 'register',
      action: () => {
        notify('Nav Bar', 'Register clicked', 'success')
      }
    }
  ]

  return {
    options
  }
})