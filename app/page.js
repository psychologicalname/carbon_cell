import Sidebar from "@/components/Sidebar";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <main className="w-screen min-h-screen">
      <div className="lg:flex">
        <Sidebar />
        <HomePage />
      </div>
    </main>
  );
}
