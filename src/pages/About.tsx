import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { randomNumber } from "../utilities";

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Eloixe Energies LTD
          </h1>
          <p className="text-xl">
            Empowering a Sustainable Future Through Solar Energy
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2024, Eloixe Energies LTD is a leading solar
                consultation firm based in Lagos, Nigeria. We specialize in
                guiding customers through the process of adopting solar energy
                solutions, offering personalized consultancy, solar panel
                installation referrals, battery sourcing, and ongoing
                maintenance and support.
              </p>
              <p className="text-gray-600">
                Our mission is to make solar energy accessible, affordable, and
                efficient for all, empowering homeowners, businesses, and
                industries to transition to sustainable energy solutions.
              </p>
            </div>
            <div className="relative h-64 md:h-96">
              <img
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&auto=format&fit=crop&q=60"
                alt="Solar Panel Installation"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To empower homeowners, businesses, and industries to transition
                to sustainable energy through expert solar consultations,
                seamless installations, and ongoing support services.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the go-to solar energy consultation company, helping
                individuals and businesses reduce their carbon footprint, save
                on energy costs, and adopt renewable energy solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Leadership
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60"
                  alt="Akujobi Miracle"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">Akujobi Miracle</h3>
              <p className="text-gray-600">Founder</p>
            </div>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=60"
                  alt="Akujobi Goodluck"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">Akujobi Goodluck</h3>
              <p className="text-gray-600">CEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Consultancy",
                description:
                  "Expert consultation on the benefits of solar energy, cost savings, and tailored solar solutions.",
                image:
                  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60",
              },
              {
                title: "Installation Referrals",
                description:
                  "Referrals to trusted, certified installers ensuring high-quality solar panel installations.",
                image:
                  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60",
              },
              {
                title: "Battery Sourcing",
                description:
                  "Assistance in sourcing energy storage systems to optimize solar energy use.",
                image:
                  "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&auto=format&fit=crop&q=60",
              },
              {
                title: "Ongoing Support",
                description:
                  "Post-installation support including regular system checks, repairs, and upgrades.",
                image:
                  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60",
              },
            ].map((service) => (
              <div
                key={randomNumber()}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <div className="relative h-48">
                  <img
                    src={service.image ?? "/placeholder.svg"}
                    alt={service.title}
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 flex-grow">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Position */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Market Position
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-green-600 mb-2">$150B</h3>
              <p className="text-gray-600">Global Solar Market Size in 2024</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-green-600 mb-2">20%</h3>
              <p className="text-gray-600">Projected CAGR through 2030</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-green-600 mb-2">$500M</h3>
              <p className="text-gray-600">
                Estimated Nigerian Residential Solar Market
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Embrace Solar Energy?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for a consultation and take the first step towards
            a sustainable future.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
