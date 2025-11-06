import Banner from './components/Banner/index';
import Subjects from './components/Subjects/index';

import WhyChooseUs from './components/WhyChooseUs/index'
import Mentor from './components/Mentor/index';
import Testimonials from './components/Testimonials/index';
import Enrollment from "@/app/components/Enrollment/index";
import FAQ from '@/app/components/FAQ/index';

export default function Home() {
  return (
    <main>
      <Banner />
      <Subjects />
      <WhyChooseUs/>
      <Mentor />
      <Testimonials />
      <Enrollment />
         <FAQ/>
         <div className='max-w-7xl mx-auto px-6'>
           <hr/>  
      </div>
     
    </main>
  )
}
