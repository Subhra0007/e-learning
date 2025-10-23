import Banner from './components/Banner/index';
import Companies from './components/Companies';
import Courses from './components/Courses/index';

import Star from './components/Star/index'
import Mentor from './components/Mentor/index';
import Testimonials from './components/Testimonials/index';
import Newsletter from './components/Newsletter/index';


export default function Home() {
  return (
    <main>
      <Banner />
      <Courses />
      <Star/>
      <Mentor />
      <Testimonials />
      <Newsletter />
      <Companies />
    </main>
  )
}
