import { Outlet, Link, useNavigation } from "react-router";

export default function RootLayout() {
  const navigation = useNavigation();

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="border-b px-6 py-4 flex justify-between items-center bg-white">
        <h1 className="text-xl font-bold">Enterprise App</h1>
        <nav className="flex gap-4">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <Link to="/dashboard" className="text-blue-600 hover:underline">
            Dashboard
          </Link>
        </nav>
      </header>

      {/* Global loading state spinner/bar */}
      {navigation.state === "loading" && (
        <div className="h-1 w-full bg-blue-100 overflow-hidden">
          <div className="h-full bg-blue-600 animate-pulse w-1/3" />
        </div>
      )}

      <main className="flex-1 p-6 bg-slate-50">
        <Outlet />
      </main>
    </div>
  );
}
