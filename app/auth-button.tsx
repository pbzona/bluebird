"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export function AuthButton() {
  const supabase = createClientComponentClient();
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
  
  return (
    <>
      <button onClick={handleSignIn}>Log in</button>
      <button onClick={handleSignOut}>Log out</button>
    </>
  );
}