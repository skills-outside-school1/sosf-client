"use client";

export default function AdvocacyInActionSection() {
  return (
    <section
      className="relative h-[500px] md:h-[450px] flex items-center justify-end overflow-hidden bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/assets/images/advocacy/AIA.png')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black/80" />

      <div className="relative z-10 w-full md:w-[50%] px-6 md:px-10 lg:px-16 text-white">
        <h2 className="mb-4 text-2xl font-bold font-mont">
          Advocacy in Action: Our Theory of Change
        </h2>

        <p className="mb-4 text-base leading-relaxed text-gray-100">
          “We believe in advocacy based on proofs of concept and data as the
          most effective way to embed change. Institutionalization—not
          charity—is our goal.”
        </p>

        <p className="text-base leading-relaxed text-gray-200">
          Our advocacy work creates the enabling environment required for SOSF’s
          programs, grants, and partnerships to thrive—by shifting mindsets,
          scaling evidence-based models, influencing regulation, and ensuring
          policy aligns with the real needs of the people.
        </p>
      </div>
    </section>
  );
}
