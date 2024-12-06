import {
  useContext,
  createContext,
  useEffect,
  useState,
  type PropsWithChildren
} from 'react'
import * as SecureStore from 'expo-secure-store'

const AuthContext = createContext<{
  signIn: (token: string) => void
  signOut: () => void
  session?: string | null
  isLoading: boolean
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false
})

export function useSession() {
  const value = useContext(AuthContext)
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />')
    }
  }

  return value
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const loadSession = async () => {
      setIsLoading(true)
      const storedSession = await SecureStore.getItemAsync('accessToken')
      setSession(storedSession)
      setIsLoading(false)
    }

    loadSession()
  }, [])

  const signIn = async (token: string) => {
    await SecureStore.setItemAsync('accessToken', token)
    setSession(token)
  }

  const signOut = async () => {
    await SecureStore.deleteItemAsync('accessToken')
    setSession(null)
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        session,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
