"use client";

import { Session, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export function AuthButtonClient({ session }: { session: Session | null}) {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  const handleSignIn = async () => {
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        "redirectTo": "http://localhost:3000/auth/callback"
      }
    });
  };
  
  const handleSignOut = async () => {
    supabase.auth.signOut();
    router.refresh();
  };
  
  return session ? (
    <button onClick={handleSignOut}>Log out</button>
  ) : (
    <button onClick={handleSignIn}>Log in</button>
  );
}