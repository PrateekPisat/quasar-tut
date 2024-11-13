import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMcell = defineStore('mcell', () => {
  const loggedIn = useLocalStorage('useMcell.loggedIn', false)
  const loggingIn = ref(false)
  const loggingOut = ref(false)

  async function login () {
    loggingIn.value = true
    setTimeout(() => {
      loggedIn.value = true
      loggingIn.value = false
    }, 3_000)
  }

  async function logout () {
    loggingOut.value = true
    setTimeout(() => {
      loggedIn.value = false
      loggingOut.value = false
    }, 3_000)
  }

  return {
    loggedIn,
    loggingIn,
    loggingOut,
    login,
    logout
  }
})
