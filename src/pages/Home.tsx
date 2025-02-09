import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { randomNumber } from "../utilities";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <section className="px-4 py-12 md:px-6 md:py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Get Expert <span className="text-green-600">Solar Energy</span>{" "}
              Consultation!
            </h1>
            <p className="text-gray-600 text-lg">
              Our experts provide expert guidance on solar panel installation
              and inverter solutions to help you transition to clean, renewable
              energy.
            </p>
            {/* <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2">
              <input
                type="text"
                placeholder="Enter your location"
                className="w-full sm:flex-1 p-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-600"
              />
              <button className="w-full sm:w-auto bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
                Search
              </button>
            </div> */}
          </div>
          <div className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=60"
              alt="Solar Panel Installation"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 py-12 md:px-6 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&auto=format&fit=crop&q=60"
              alt="Solar Consultation"
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <span className="text-green-600 font-medium">About Us</span>
            <h2 className="text-2xl md:text-3xl font-bold">
              World-Class Solar Energy Solutions & Expert Consultation
            </h2>
            <p className="text-gray-600">
              Leading the transition to sustainable energy with expert
              consultation on solar panels and inverter systems. Our team
              ensures optimal energy solutions for your specific needs.
            </p>
            <button
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
              onClick={() => {
                navigate("/about");
              }}
              onKeyDown={() => {
                navigate("/about");
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-12 md:px-6 md:py-24" id="services">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive solar energy solutions
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Solar Assessment",
                description: "Get consultation from our solar assessment team",
                image:
                  "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&auto=format&fit=crop&q=60",
              },
              {
                title: "System Design",
                description: "Custom solar system design for your needs",
                image:
                  "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&auto=format&fit=crop&q=60",
              },
              {
                title: "Installation",
                description: "Professional installation services",
                image:
                  "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=60",
              },
              {
                title: "Maintenance",
                description: "Regular maintenance and support",
                image:
                  "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&auto=format&fit=crop&q=60",
              },
              {
                title: "Monitoring",
                description: "24/7 system performance monitoring",
                image:
                  "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?w=800&auto=format&fit=crop&q=60",
              },
              {
                title: "Support",
                description: "Dedicated customer support team",
                image:
                  "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop&q=60",
              },
            ].map((service) => (
              <div
                key={randomNumber()}
                className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-100">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-12 md:px-6 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[150px] md:h-[200px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&auto=format&fit=crop&q=60"
                alt="Solar Team 1"
                className="object-cover"
              />
            </div>
            <div className="relative h-[150px] md:h-[200px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60"
                alt="Solar Team 2"
                className="object-cover"
              />
            </div>
            <div className="relative h-[150px] md:h-[200px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60"
                alt="Solar Team 3"
                className="object-cover"
              />
            </div>
            <div className="relative h-[150px] md:h-[200px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=60"
                alt="Solar Team 4"
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            <span className="text-green-600 font-medium">Integrity</span>
            <h2 className="text-2xl md:text-3xl font-bold">Our Core Values</h2>
            <p className="text-gray-600">
              We believe in sustainable energy solutions that benefit both our
              clients and the environment. Our team of certified professionals
              is committed to excellence in every project we undertake.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-12 md:px-6 md:py-24">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end space-y-4 md:space-y-0">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                Read feedback about our Services and wonderful team!
              </h2>
              <p className="text-gray-600 max-w-2xl">
                Discover what our clients say about their experience with our
                solar solutions
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                text: "The consultation was excellent and the installation team was very professional. Highly recommended!",
                name: "Sarah Johnson",
                role: "Homeowner",
                image:
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60",
              },
              {
                text: "Fantastic service from start to finish. Our energy bills have significantly reduced since installation.",
                name: "Michael Chen",
                role: "Business Owner",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60",
              },
              {
                text: "Very knowledgeable team. They helped us choose the perfect solar solution for our needs.",
                name: "Emma Davis",
                role: "Property Manager",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60",
              },
              {
                text: "The monitoring system they installed gives us great insight into our energy production.",
                name: "James Wilson",
                role: "Homeowner",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60",
              },
            ].map((testimonial) => (
              <div
                key={randomNumber()}
                className="p-6 bg-white rounded-xl shadow-sm"
              >
                <div className="space-y-4">
                  <p className="text-gray-600">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
