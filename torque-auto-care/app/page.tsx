import Hero3D from "../src/components/Hero3d";
import { footer } from "framer-motion/client";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md ..."> */}

      <nav className="flex justify-between items-center px-8 py-5 border-b border-zinc-800">
        <h1 className="text-2xl font-bold text-red-500">
          TORQUE AUTO CARE
        </h1>

        <div className="hidden md:flex gap-8" >|
          <a href="#home">Home</a>|
          <a href="#services">Services</a>|
          <a href="#about">About</a>|
          <a href="#contact">Contact</a>|
        </div>
        {/* </nav> */}

        <a
          href="tel:+919173931001"
          className="bg-red-600 px-4 py-2 rounded-lg"
        >
          Call Now
        </a>
      </nav>

      <img
        src="/logo.png"
        alt="Torque Auto Care"
        className="w-32 mx-auto rounded-4xl border border-red-500"
      />

      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">

        <Hero3D />



        <h1 className="text-6xl font-bold mb-4">
          TORQUE AUTO CARE
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl">
          Professional Car Repair & Maintenance Services
        </p>
        <p className="text-xl text-gray-300 max-w-2xl">
          Precision • Performance • Perfection
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="tel:+919173931001"
            className="bg-red-600 px-6 py-3 rounded-lg"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/919173931001"
            className="border border-white px-6 py-3 rounded-lg"
          >
            WhatsApp
          </a>
        </div>
      </section>

      <section className="py-20 px-6 bg-zinc-950">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="bg-black border border-red-600 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Engine Repair</h3>
            <p>Complete engine diagnostics and repair.</p>
          </div>

          <div className="bg-black border border-red-600 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">AC Service</h3>
            <p>Cooling system inspection and maintenance.</p>
          </div>

          <div className="bg-black border border-red-600 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Oil Change</h3>
            <p>Premium engine oil replacement service.</p>
          </div>

          <div className="bg-black border border-red-600 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Battery Service</h3>
            <p>Battery testing and replacement.</p>
          </div>

          <div className="bg-black border border-red-600 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Wheel Alignment</h3>
            <p>Precision alignment and balancing.</p>
          </div>

          <div className="bg-black border border-red-600 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">Diagnostics</h3>
            <p>Advanced vehicle diagnostics.</p>
          </div>

        </div>
      </section>

      <section className="py-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            About Torque Auto Care
          </h2>

          <p className="text-gray-300 text-lg leading-8">
            Torque Auto Care is dedicated to providing reliable car repair,
            maintenance, diagnostics, and automotive solutions. We focus on
            quality workmanship, customer satisfaction, and keeping every
            vehicle performing at its best.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div>
              <h3 className="text-5xl font-bold text-red-500">1000+</h3>
              <p className="mt-2 text-gray-400">Cars Repaired</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-red-500">20+</h3>
              <p className="mt-2 text-gray-400">Years Experience</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-red-500">700+</h3>
              <p className="mt-2 text-gray-400">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-black">
        <h2 className="text-4xl font-bold text-center mb-10">
          Our Workshop
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <img
            src="/images/image1.jpg"
            alt="Workshop"
            className="rounded-2xl w-full h-[300px] object-cover"
          />

          <img
            src="/images/image2.jpg"
            alt="Workshop"
            className="rounded-2xl w-full h-[300px] object-cover"
          />

          <img
            src="/images/image3.jpg"
            alt="Mechanic"
            className="rounded-2xl w-full h-[300px] object-cover"
          />

          <img
            src="/images/image4.jpg"
            alt="Service"
            className="rounded-2xl w-full h-[300px] object-cover"
          />
        </div>
      </section>

      <section className="py-20 px-6 bg-zinc-950 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Contact Us
        </h2>

        <p className="text-xl mb-4">
          📞 +91 91 7393 1001
        </p>
        <p className="text-xl mb-4">
          📧 torqueautomative@gmail.com
        </p>

        <p className="text-lg text-gray-300 mb-8">
          Torque Auto Care, 52, VISHVAS CITY, 2, R.C. Technical Rd, Vishwas City 2, Ghatlodiya, Chanakyapuri, Ahmedabad, Gujarat 380061
        </p>

        <a
          href="https://wa.me/919173931001" target="_blank" rel="noopener noreferrer"
          className="bg-red-600 px-8 py-4 rounded-xl"
        >
          Chat on WhatsApp
        </a>
      </section>
      <footer>
        <p className="text-right text-gray-500 py-4">
          © 2026 Torque Auto Care. All Rights Reserved.</p>
      </footer>
    </main>
  );
}


