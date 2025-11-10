export default function OpaqueSections() {
  return (
    <>
      <section className="relative z-10 flex items-center justify-center py-10 px-8 lg:px-8 bg-gray-50">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">Why It Matters</h2>
              <p className="text-sm sm:text-base text-gray-800 mb-4 leading-relaxed">
                Traditional monitoring tools are slow, disconnected, and often outdated by the time reports are written.
                The SOSF Social & Economic Register flips this model. It offers a living, evolving dataset—updated daily
                through community engagement, digital onboarding, and AI-supported evaluations
              </p>
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                It is the backbone of our evidence-driven approach to sustainable development, enabling the
                localization, personalization, and scale of every intervention under the SOSF ecosystem.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
                Built for Scale, Designed for Inclusion
              </h2>
              <p className="text-sm sm:text-base text-gray-800 mb-4 leading-relaxed">
                The Register is offline-capable, mobile-first, and powered by AI, making it accessible across
                low-connectivity environments, urban slums, refugee settlements, rural farms, and underserved schools.
                It aligns with SDG 17 by enabling cross-sector collaboration, open data sharing, and third-party
                employment—ensuring no community is left behind.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
