import Navbar from "./Navbar";
import Background from "./Background";

export default function Home() {
  const src =
    "https://images.unsplash.com/photo-1625794084867-8ddd239946b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <div className="fixed min-w-screen">
        <Navbar />
      </div>
      <div className="max-w-screen min-h-screen flex flex-col justify-center">
        <div className="max-w-screen">
          {/* Banner / hero image: full width, less height */}
          <img src={src} className="w-screen h-64 object-contain" alt="Banner" />
        </div>
      </div>
    </>
  );
}
