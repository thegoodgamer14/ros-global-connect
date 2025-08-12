import adnoc from "@/assets/customer-logos/adnoc-logo.webp";
import albaddad from "@/assets/customer-logos/albaddad-logo.webp";
import dewa from "@/assets/customer-logos/dewa-logo.webp";
import genetco from "@/assets/customer-logos/genetco-logo.webp";
import healthyhome from "@/assets/customer-logos/healthyhome-logo.webp";
import kec from "@/assets/customer-logos/KEC_International_logo.webp";
import npsc from "@/assets/customer-logos/npsc-logo.webp";
import petronas from "@/assets/customer-logos/petronas-logo.webp";

const CustomerLogos = () => {
  const logos = [
    { src: adnoc, alt: "ADNOC" },
    { src: albaddad, alt: "Al Baddad" },
    { src: dewa, alt: "DEWA" },
    { src: genetco, alt: "Genetco" },
    { src: healthyhome, alt: "Healthy Home" },
    { src: kec, alt: "KEC International" },
    { src: npsc, alt: "NPSC" },
    { src: petronas, alt: "Petronas" },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-12 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-corporate-blue mb-2">
            Ensuring customer satisfaction for 15+ years
          </h2>
        </div>
        
        <div className="relative">
          <div className="flex animate-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                style={{ width: "150px", height: "80px" }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerLogos;