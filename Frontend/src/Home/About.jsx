import React from 'react'
import Navbar from './Navbar.jsx'


const About = () => {
    const src = "https://images.unsplash.com/photo-1625794084867-8ddd239946b1?q=80&w=1170&auto=format&fit=crop";
  return (
    <div className="relative min-h-screen h-full">
        <Navbar />
        <div className="relative h-screen w-full bg-cover bg-center" style={{backgroundImage: `url(${src})`}}>
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex justify-center items-center px-4">
                <div className="bg-white/20 backdrop-blur-md p-6 md:p-12 rounded-xl shadow-xl max-w-3xl w-full text-center">
                    <h1 className="font-mono text-3xl md:text-5xl text-white mb-4">Our Mission</h1>
                    <p className="text-sm md:text-lg text-white font-sans leading-relaxed">
                        At Furever Home, we believe that every pet deserves a warm and loving home. 
                        Unfortunately, many pets are abandoned when their owners no longer have the time 
                        or resources to care for them. <span className="font-bold">This is where we step in. </span> 
                        Our platform connects these pets with potential adopters, making the entire process 
                        safe and simple. People can chat about their pets' needs and ensure that they end up 
                        in a safe and permanent home. From adorable puppies to colorful fishes to even friendly snakes, 
                        we strive to find a home for all of them. Join our community and make a difference today!
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About