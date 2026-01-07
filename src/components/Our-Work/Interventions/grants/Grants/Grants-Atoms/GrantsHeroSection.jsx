import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const DEFAULT_BG =
  "https://d29l0tur8ol1gj.cloudfront.net/uploads/beekeeping_as_sustainable_livelihood_in_the_cockpit_country_jamaica._credit_ncclfmcbs0c69b1a1023a2b0f5b9e7d61226abe11.jpeg";

const GrantsHeroSection = ({
  grantType,
  fundingAmount,
  fundingDetails = [],
  // Accept either a single string OR an array of strings.

  HeroImage,
}) => {
  // Normalize to an array of URLs
  const images = useMemo(() => {
    if (Array.isArray(HeroImage) && HeroImage.length > 0) return HeroImage;
    if (typeof HeroImage === "string" && HeroImage.trim()) return [HeroImage];
    return [DEFAULT_BG];
  }, [HeroImage]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  // Timing controls
  const SWITCH_EVERY_MS = 6000; // 4 seconds
  const FADE_DURATION_MS = 700; // small fade

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      // Start fade out
      setFadeIn(false);

      // After fade-out finishes, switch image and fade back in
      const t = setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
        setFadeIn(true);
      }, FADE_DURATION_MS);

      return () => clearTimeout(t);
    }, SWITCH_EVERY_MS);

    return () => clearInterval(interval);
  }, [images.length]);

  const currentBg = images[activeIndex];

  return (
    <div className="relative w-full h-[657px] md:h-[657px] overflow-hidden">
      {/* Background layers (only this changes) */}
      <div className="absolute inset-0">
        {/* Image layer */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity`}
          style={{
            backgroundImage: `url("${currentBg}")`,
            transitionDuration: `${FADE_DURATION_MS}ms`,
            opacity: fadeIn ? 1 : 0,
          }}
        />

        {/* Dark gradient overlay (constant) */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))",
          }}
        />
      </div>

      {/* Foreground content (unchanged) */}
      <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-[4rem] lg:px-[7.6rem] text-white translate-y-24">
        <p className="text-[14px] md:text-[18px] mb-2">What we offer</p>
        <h1 className="font-mont font-bold text-[28px] mb-4">{grantType}</h1>

        <div className="mt-6 font-mont">
          <h2 className="font-mont font-semibold text-[20px] md:text-[24px] mb-3">
            Funding
          </h2>
          <p className="text-[16px] md:text-[18px] mb-6">{fundingAmount}</p>

          <div className="max-w-2xl space-y-6">
            {fundingDetails.map((detail, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <Image src={detail.icon} alt="" width={24} height={24} />
                </div>
                <p className="text-[14px] md:text-[15px]">{detail.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrantsHeroSection;
