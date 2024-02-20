import { auth, signIn } from '@/app/lib/auth'


export default async function LoginPage() {

  const session = await auth()
  console.log(session);

  const handleLogin = async () => {
    "use server"
    await signIn("github")
  }

  return (
    <form action={handleLogin}>
      <button>Log in with github</button>
    </form>
  )
}
