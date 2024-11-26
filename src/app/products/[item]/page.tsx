import Banner from '@/client-components/Banner';
import Companies from '@/client-components/Companies/Companies';
import Courses from '@/client-components/Courses/index';
import Mentor from '@/client-components/Mentor/index';
import Newsletter from '@/client-components/Newsletter/Newsletter';
import Testimonials from '@/client-components/Testimonials/index';

export default function Home() {
  return (
    <div className="client-class">
      <Banner />
      <Companies />
      <Courses />
      <Mentor />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
