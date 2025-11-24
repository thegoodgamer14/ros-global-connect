import adnoc from "@/assets/customer-logos/adnoc-logo.webp";
import albaddad from "@/assets/customer-logos/albaddad-logo.webp";
import dewa from "@/assets/customer-logos/dewa-logo.webp";
import genetco from "@/assets/customer-logos/genetco-logo.webp";
import healthyhome from "@/assets/customer-logos/healthyhome-logo.webp";
import kec from "@/assets/customer-logos/KEC_International_logo.webp";
import npsc from "@/assets/customer-logos/npsc-logo.webp";
import petronas from "@/assets/customer-logos/petronas-logo.webp";
import intercol from "@/assets/customer-logos/intercol-logo.webp";
import mhd from "@/assets/customer-logos/mhd-logo.webp";
import natarchive from "@/assets/customer-logos/nat-archive-logo.webp";
import dpoc from "@/assets/customer-logos/dpoc-logo.webp";

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
    { src: intercol, alt: "Intercol" },
    { src: mhd, alt: "MHD" },
    { src: natarchive, alt: "National Archive" },
    { src: dpoc, alt: "DPOC" },
  ];

  const infiniteLogos = [...logos, ...logos];

  return (
    <section className="py-12 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-corporate-blue mb-4">
            Ensuring customer satisfaction for 15+ years
          </h2>
        </div>

        <div className="marquee">
          <div className="marquee__inner">
            {infiniteLogos.map((logo, index) => {
              const isDPOC = logo.src === dpoc;
              const width = isDPOC ? "300px" : "200px";
              const height = isDPOC ? "150px" : "106.67px";

              return (
                <div
                  key={index}
                  className="flex items-center justify-center shrink-0"
                  style={{ width, height }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerLogos;
