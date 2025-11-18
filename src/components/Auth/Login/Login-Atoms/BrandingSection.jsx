import Image from "next/image";

export default function BrandingSection() {
  return (
    <div className="relative hidden bg-gradient-to-br from-gray-50 to-gray-100 md:flex md:items-center md:justify-center">
      <div className="p-12">
        <Image
          src="/assets/images/logos/logo-renew.png"
          alt="Skills Outside School Foundation"
          width={600}     
          height={600}
          className="w-[300px] md:w-[350px] h-auto max-w-none"
          priority
        />
      </div>

      <div className="absolute w-64 h-64 bg-teal-200 rounded-full opacity-20 -top-12 -right-12 blur-3xl"></div>
      <div className="absolute w-64 h-64 bg-blue-200 rounded-full opacity-20 -bottom-12 -left-12 blur-3xl"></div>
    </div>
  );
}
