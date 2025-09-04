"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function PasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const returnTo = searchParams.get("returnTo") || "/";

  useEffect(() => {
    // If cookie already present, redirect to home
    async function checkAuth() {
      try {
        const res = await fetch("/api/auth/status", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (data?.authenticated) {
            router.replace(returnTo);
          }
        }
      } catch (_e) {}
    }
    checkAuth();
  }, [router, returnTo]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/auth/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.replace(returnTo);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data?.message || "Invalid password");
      }
    } catch (_e) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm space-y-4 border rounded-xl p-6 shadow-sm bg-white/80 dark:bg-black/30"
      >
        <h1 className="text-xl font-semibold text-center">Enter Password</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full border rounded-md px-3 py-2 bg-transparent"
          required
        />
        {error ? (
          <p className="text-sm text-red-600">{error}</p>
        ) : null}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 rounded-md bg-black text-white disabled:opacity-50 dark:bg-white dark:text-black"
        >
          {loading ? "Checking..." : "Continue"}
        </button>
      </form>
    </div>
  );
}


