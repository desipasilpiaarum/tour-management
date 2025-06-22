// Middleware untuk mengecek apakah user sudah login
export const checkAuth = async () => {
  const res = await fetch("http://localhost:5000/api/auth/me", {
    credentials: "include",
  });

  if (!res.ok) throw new Error("Unauthorized");
  return await res.json();
};