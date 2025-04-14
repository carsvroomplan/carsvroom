'use client';

import Navbar from "../components/ Navbar.js";
import ContactForm from "../components/ContactForm.js";
import { useRef } from "react";
import SubscribeButton from "../components/SubscribeButton";

export default function Home() {

  // Cria referências para cada seção
  const homeRef = useRef(null);
  const subscriptionRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  // Função para rolar para uma seção
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Objeto de handlers para os itens da Navbar
  const navHandlers = {
    home: () => scrollToSection(homeRef),
    subscription: () => scrollToSection(subscriptionRef),
    about: () => scrollToSection(aboutRef),
    services: () => scrollToSection(servicesRef),
    contact: () => scrollToSection(contactRef),
  };

  return (
    <>
        {/* Hero Section */}
        <section
          ref={homeRef}
          className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/cadilac_front.png')" }}
        >
          {/* Floating Navbar */}
          <Navbar onNavClick={navHandlers} />

          {/* Hero Content */}
          <div className="flex flex-col items-center justify-center h-full px-6 md:px-32 py-42 md:py-42">
            <div className="text-white max-w-2xl text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
                Book and repair your car in Easy steps.
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Sign up with Carsvroom and repair your car whenever you need, asap, and online booking.
              </p>
              <button
                onClick={() => scrollToSection(subscriptionRef)}
                className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-800 transition"
              >
                Get Started
              </button>
            </div>
          </div>
        </section>


      {/* Maintenance Plans Section */}
      <section
        ref={subscriptionRef}
        id="subscription"
        className="w-full py-16 px-6 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
          Choose Your Plan
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* BASIC PLAN */}
                    <div className="bg-white rounded-xl shadow-md p-8 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center space-x-2">
              <span>Basic</span>
            </h3>
            <p className="mt-2 text-2xl font-bold text-gray-900">
              $59.99<span className="text-base font-normal">/month</span>
            </p>
            <p className="mt-1 text-sm text-gray-500">Ideal for light usage</p>
            <ul className="mt-6 space-y-2 text-gray-600 flex-1">
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Oil Changes (3 per year)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Minor Parts Replacement</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>24/7 Chat Support</span>
              </li>
            </ul>
            <SubscribeButton planId="price_1RDuBsHvSLf3LnqcI3LdAli3" />   
          </div>

          {/* STANDARD (RECOMMENDED) */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col relative border-2 border-red-600">
            <span className="absolute -top-3 right-3 bg-red-600 text-white text-sm px-3 py-1 rounded-full">
              Recommended
            </span>
            <h3 className="text-xl font-semibold text-gray-800 flex items-center space-x-2">
              <span>Standard</span>
            </h3>
            <p className="mt-2 text-2xl font-bold text-gray-900">
              $99.99<span className="text-base font-normal">/month</span>
            </p>
            <p className="mt-1 text-sm text-gray-500">Perfect for regular drivers</p>
            <ul className="mt-6 space-y-2 text-gray-600 flex-1">
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>All Basic features</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Tire Rotation &amp; Alignment</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Annual Inspection</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Priority Scheduling</span>
              </li>
            </ul>
            <SubscribeButton planId="price_1RDuCNHvSLf3LnqcR0FmqOIG" />
          </div>

          {/* PREMIUM PLAN */}
          <div className="bg-white rounded-xl shadow-md p-8 flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center space-x-2">
              <span>Premium</span>
            </h3>
            <p className="mt-2 text-2xl font-bold text-gray-900">
              $169.99<span className="text-base font-normal">/month</span>
            </p>
            <p className="mt-1 text-sm text-gray-500">For heavy-duty &amp; frequent drivers</p>
            <ul className="mt-6 space-y-2 text-gray-600 flex-1">
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>All Standard features</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Advanced Parts Replacement</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Loaner Vehicle Included</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Unlimited Service Calls</span>
              </li>
            </ul>
            <SubscribeButton planId="price_1RDuD8HvSLf3LnqcQzNgklzU" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 px-6 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
          Why choose Carsvroom?
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition">
            <div className="text-5xl mb-4 text-red-600">
              <span>🛠️</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              All-in-One Maintenance
            </h3>
            <p className="text-gray-600">
              Covers oil changes, inspections, brake service, and more.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition">
            <div className="text-5xl mb-4 text-red-600">
              <span>💰</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Fixed Monthly Price
            </h3>
            <p className="text-gray-600">
              No surprise bills — just one flat rate for peace of mind.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition">
            <div className="text-5xl mb-4 text-red-600">
              <span>📅</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Flexible Plans
            </h3>
            <p className="text-gray-600">
              Choose the duration and coverage that fits your driving habits.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        id="services"
        className="relative py-16 text-white"
        style={{
          backgroundImage: "url('/images/ferrari.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay para escurecer o fundo */}
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-wider text-red-500 mb-2">
            OUR SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Restoring Vehicles with Precision and Care
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              "Insurance Claims",
              "Bodywork and Paint",
              "Bumper Repair",
              "Paint Correction",
              "Paint Touch-Up",
              "Windshield & Window Replacement",
              "Collision Repair",
              "Frame Repair",
            ].map((service, i) => (
              <div
                key={i}
                className="bg-red-600 text-white px-4 py-2 rounded-full flex items-center space-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 14.25l4.5 4.5m0 0l2.25-2.25m-2.25 2.25L4.5 16.5m4.5-6.75c0-2.761 2.239-5 5-5 .414 0 .75-.336.75-.75s-.336-.75-.75-.75a6.75 6.75 0 00-6.75 6.75c0 .414.336.75.75.75s.75-.336.75-.75z"
                  />
                </svg>
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">
            HOW IT WORKS
          </p>
          <h4 className="text-xl md:text-4xl font-bold mb-12 text-black">
            Get the job done following 3 steps
          </h4>
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-12">
            {/* This line between steps is visible only on medium screens and above */}
            <div className="absolute hidden md:block inset-x-0 top-1/2 h-[2px]" />
            
            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center w-full md:w-52 text-center">
              <div
                className="w-20 h-20 rounded-md flex items-center justify-center mb-4"
                style={{
                  background: "radial-gradient(circle at center, #b71c1c 0%, #7f0e0e 100%)",
                }}
              >
                <img
                  src="/images/car_protected.png"
                  alt="Car Protected Icon"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-black font-semibold mb-1">Get your plan</h3>
              <p className="text-gray-600 text-sm">
                Choose your best fit for your needs
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center w-full md:w-52 text-center">
              <div
                className="w-20 h-20 rounded-md flex items-center justify-center mb-4"
                style={{
                  background: "radial-gradient(circle at center, #b71c1c 0%, #7f0e0e 100%)",
                }}
              >
                <img
                  src="/images/calendar.png"
                  alt="Calendar Icon"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-black font-semibold mb-1">Book</h3>
              <p className="text-gray-600 text-sm">
                Book your maintenance on the same day
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center w-full md:w-52 text-center">
              <div
                className="w-20 h-20 rounded-md flex items-center justify-center mb-4"
                style={{
                  background: "radial-gradient(circle at center, #b71c1c 0%, #7f0e0e 100%)",
                }}
              >
                <img
                  src="/images/location.png"
                  alt="Location Icon"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-black font-semibold mb-1">Bring your car</h3>
              <p className="text-gray-600 text-sm">
                Bring your mobile phone or your angle for the easiest drive
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Image + Text Section */}
      <section className="py-12 px-6 bg-red-800 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            CARSVROOM | THE FAMILY PLAN YOU CHOOSE FOR LIFE
          </h2>
          <p className="text-lg mb-8">
            We’ve serviced over 3,000 cars across WA — and now, we’re bringing the power of a single subscription to your driveway.
          </p>
          {/* Grade de 3 colunas x 3 linhas */}
          <div className="grid grid-cols-3 grid-rows-3 gap-4 h-96">
            {/* 1) Woman: ocupa 1 coluna e 2 linhas */}
            <img
              src="/images/woman1.jpg"
              alt="Woman driver"
              className="col-span-1 row-span-2 object-cover w-full h-full rounded-lg object-[35%_center]"
            />
            {/* 2) Tucson: ocupa 2 colunas e 1 linha */}
            <img
              src="/images/car3.jpg"
              alt="Tucson"
              className="col-span-2 row-span-1 object-cover w-full h-full rounded-lg"
            />
            {/* 3) Rav4: ocupa 1 coluna e 1 linha */}
            <img
              src="/images/car4.jpg"
              alt="Rav4"
              className="col-span-1 row-span-1 object-cover w-full h-full rounded-lg"
            />
            {/* 4) Cadilac: ocupa 1 coluna e 2 linhas */}
            <img
              src="/images/car6.jpg"
              alt="Cadilac"
              className="col-span-1 row-span-2 object-cover w-full h-full object-[60%_center] rounded-lg"
            />
            {/* 5) Subaru: ocupa 1 coluna e 1 linha */}
            <img
              src="/images/car1.jpg"
              alt="Subaru"
              className="col-span-1 row-span-1 object-cover w-full h-full rounded-lg"
            />
            {/* 6) Tail Light: ocupa 1 coluna e 1 linha */}
            <img
              src="/images/car5.jpg"
              alt="Tail Light"
              className="col-span-1 row-span-1 object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Testimonies Section */}
      <section
        className="relative py-16 text-white"
        style={{
          backgroundImage: "url('/images/bmw_back.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay para escurecer o fundo */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Texto à esquerda + botão */}
            <div>
              <p className="text-sm uppercase tracking-wide text-red-500 mb-2">
                Reviews
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Clients Say
              </h2>
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
                Call Us
              </button>
            </div>
            {/* Cartões de depoimentos à direita */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              {/* Card 1 */}
              <div className="bg-white text-black p-6 rounded-lg w-full md:w-1/2">
                <div className="flex items-center space-x-2 mb-1">
                  <img
                    src="/images/google_icon.png"
                    alt="Google icon"
                    className="h-5 w-5 object-contain"
                  />
                  <p className="font-semibold">Tamrattom Pomyanuyeong</p>
                </div>
                <p className="text-xs text-gray-500">2023-04-03</p>
                <div className="flex space-x-1 text-yellow-400 mt-1">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <p className="mt-2 text-sm">
                  “Andre did a great job carrying out cosmetic work on my car. He was very friendly and went above and beyond. Highly recommend!”
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-white text-black p-6 rounded-lg w-full md:w-1/2">
                <div className="flex items-center space-x-2 mb-1">
                  <img
                    src="/images/google_icon.png"
                    alt="Google icon"
                    className="h-5 w-5 object-contain"
                  />
                  <p className="font-semibold">Jacqueline Siso</p>
                </div>
                <p className="text-xs text-gray-500">2023-04-02</p>
                <div className="flex space-x-1 text-yellow-400 mt-1">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <p className="mt-2 text-sm">
                  “I was thoroughly impressed with the service at Carsvroom. Andre was very responsive to all my questions, and would answer me in a few minutes. Definitely recommend!”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placa Approved Section */}
      <section
        ref={aboutRef} 
        id="about"
        className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          {/* Images on the left */}
          <div className="relative flex flex-row justify-center items-center md:justify-end">
            <img
              src="/images/brodinho.png"
              alt="Brodinho"
              className="w-48 h-64 object-cover rounded-lg shadow-lg transform rotate-2"
            />
            <img
              src="/images/andre.png"
              alt="Andre"
              className="w-48 h-64 object-cover rounded-lg shadow-lg transform -rotate-10 -ml-12 md:ml-0 md:absolute md:top-8 md:left-20"
            />
          </div>
          {/* Text on the right */}
          <div className="text-center md:text-left">
            <p className="text-sm text-red-600 font-semibold uppercase tracking-wider mb-2">
              WHY CHOOSE US
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug text-black">
              We offer the best experience with our maintenance service
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Best price guaranteed</li>
              <li>Experience professional</li>
              <li>Monday to Saturday</li>
              <li>24/7 online assistance</li>
            </ul>
          </div>
        </div>
      </section>


      {/* Contact Form Section */}
      <section 
        ref={contactRef}
        id="contact"
        className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm text-red-600 font-bold uppercase tracking-wider mb-8">
            ALL-IN-ONE CAR CARE STARTS HERE
          </h2>
          <p className="text-lg text-gray-800 mb-6">
            At Carsvroom, we don’t just fix cars — we care for them. With our Carsvroom Plan, 
            you get access to a full range of auto services — including bodywork, paint, 
            bumper and frame repairs, paint correction, and more — in a single, convenient subscription. 
            Located in Kirkland, WA, our experienced technicians restore and maintain all makes 
            and models with precision, pride, and care. Whether it’s routine upkeep or accident repair, 
            our subscription covers it — even insurance claims.
          </p>
          <p className="text-lg text-gray-800 mb-24">
            We’re here to make the process seamless and stress-free. Just drop off your vehicle, 
            and we handle the rest — so you can get back on the road with confidence. 
            Carsvroom Plan: One subscription. Everything your car needs.
          </p>
          <ContactForm />
        </div>
      </section>

        {/* CTA Final Section with Background */}
        <section
          className="relative py-10 px-6"
          style={{
            backgroundImage: "url('/images/background_prefooter.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-red-600/90"></div>
          <div className="relative z-10 max-w-6xl mx-auto text-white">
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center text-center">
              {/* Logo and Plan Name */}
              <div className="flex flex-col items-center">
                <img
                  src="/images/Logo_Carsvroom_black.png"
                  alt="Carsvroom"
                  className="h-32 mb-1"
                />
                <p className="text-lg font-bold">Carsvroom Plan</p>
              </div>
              {/* Address & Contacts */}
              <div>
                <h3 className="text-lg font-bold mb-2">Address &amp; Info</h3>
                <p>13090 100th Ave, Kirkland, 98034</p>
                <p>Opening hours: Mon-Fri 9am to 6pm</p>
                <p>
                  Email:{" "}
                  <a href="mailto:carsvroomplan@gmail.com" className="underline hover:text-gray-300">
                    carsvroomplan@gmail.com
                  </a>
                </p>
                <p>Support: (425) 477-6527</p>
              </div>
              {/* Embedded Map */}
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2684.0957657625886!2d-122.211978009679!3d47.721390405796015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490120b03c88247%3A0xbbb11738d7eafadd!2sParking%20lot%2C%2013500%20100th%20Ave%20NE%2C%20Kirkland%2C%20WA%2098034!5e0!3m2!1spt-BR!2sus!4v1743739628575!5m2!1spt-BR!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>


      {/* Footer */}
      <footer 
        className="bg-black text-white py-4 mt-1">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Carsvroom. All rights reserved.
          </p>
          <p className="text-sm">
            <a href="/terms" className="underline">Terms</a> |{" "}
            <a href="/privacy" className="underline">Privacy</a>
          </p>
        </div>
      </footer>
    </>
  );
}
