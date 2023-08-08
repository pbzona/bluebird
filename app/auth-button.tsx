"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export function AuthButton() {
  const supabase = createClientComponentClient();

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
  };
  
  return (
    <>
      <button onClick={handleSignIn}>Log in</button>
      <button onClick={handleSignOut}>Log out</button>
    </>
  );
}