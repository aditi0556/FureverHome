import Navbar from "./Navbar";
import Background from "./Background";

export default function Home() {
  const src =
    "https://images.unsplash.com/photo-1625794084867-8ddd239946b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="relative min-h-screen h-full">
        <Navbar />
        <div className="relative h-screen w-full bg-cover bg-center" style={{backgroundImage: `url(${src})`}}>
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col justify-center items-start md:items-center px-6 md:px-16 text-white">
              <h1 className="text-4xl md:text-6xl font-black mb-4 leading-snug">Give Every Pet A <span className="text-yellow-300">Forever Home</span></h1>
              <p className="text-lg md:text-2xl mb-6 max-w-lg">Adopt, connect, and make a difference. Find a pet or give yours a second chance at a loving home.</p>
            </div>
        </div>
    </div>
  );
}
