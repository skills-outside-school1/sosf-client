export default function WhatWeDo() {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
        <div className="flex-1 flex-shrink-0">
          <img
            src="/assets/images/our_work/team.png"
            alt="Team meeting"
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 sm:mb-6">What we do</h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 sm:mb-8">
            We collect, analyze, and translate data into action. Our work ensures that every intervention we implement —
            or help others implement — is evidence-driven, context-specific, and designed for sustained impact.
          </p>
          <div className="space-y-4 sm:space-y-5">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full border-2 border-gray-300 flex-shrink-0 mt-1"></div>
              <div>
                <p className="font-semibold text-sm sm:text-base text-black mb-1">
                  End-to-End Monitoring, Evaluation, and Learning (MEL)
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  for all SOSF interventions, with SOSF's Social and Economic Register at the heart of it.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full border-2 border-gray-300 flex-shrink-0 mt-1"></div>
              <div>
                <p className="font-semibold text-sm sm:text-base text-black mb-1">Advisory Services</p>
                <p className="text-xs sm:text-sm text-gray-600">
                  or third-party interventions by leveraging on the social and economic register.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full border-2 border-gray-300 flex-shrink-0 mt-1"></div>
              <div>
                <p className="font-semibold text-sm sm:text-base text-black mb-1">Thought Leadership and Advocacy</p>
                <p className="text-xs sm:text-sm text-gray-600">via strategic publications, campaigns and events.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
