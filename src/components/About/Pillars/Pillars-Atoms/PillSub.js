import React from 'react'
import SubHero from '@/components/shared/Atoms/Subhero-Atoms/Subhero'

export default function PillSub() {
    const heading=[{
        heading2: "Our Pillars"
    }];
  return (
    <div className='w-fll '>
<SubHero items={heading} className={`w-full md:w-full lg:w-full px-2 `}/>

    </div>
  )
}
