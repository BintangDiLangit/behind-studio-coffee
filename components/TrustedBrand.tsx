import React from "react";
import Image from "next/image";

const brands = [
  { name: "Layers", logo: "/trusted_brand/Logomark-0.svg" },
  { name: "Quotient", logo: "/trusted_brand/Logomark-1.svg" },
  { name: "Sisyphus", logo: "/trusted_brand/Logomark-2.svg" },
  { name: "Hourglass", logo: "/trusted_brand/Logomark-3.svg" },
  { name: "Capsule", logo: "/trusted_brand/Logomark-4.svg" },
  { name: "Command+R", logo: "/trusted_brand/Logomark-5.svg" },
  { name: "Catalog", logo: "/trusted_brand/Logomark-6.svg" },
  { name: "GlobalBank", logo: "/trusted_brand/Logomark-7.svg" },
];

const TrustedBrand = ({ className }: { className: string }) => {
  return (
    <section
      className={`w-full py-16 text-center font-helvetica-neue ${className} mt-24`}
    >
      {/* Title */}
      <p className="text-gray-500 text-lg mb-8">Trusted by the best</p>

      {/* Brand Logos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center max-w-4xl mx-auto">
        {brands.map((brand, index) => (
          <div key={index} className="flex items-center gap-2">
            <Image
              src={brand.logo}
              alt={brand.name}
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
            <span className="text-gray-900 text-lg font-medium">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedBrand;
