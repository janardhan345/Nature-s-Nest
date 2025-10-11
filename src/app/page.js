import dynamic from 'next/dynamic';
import Layout from '@/components/Layout';

// Use dynamic imports to prevent server/client hydration mismatch
const Hero = dynamic(() => import('@/components/Hero/Hero'), { ssr: true });
const Features = dynamic(() => import('@/components/Features/Features'), { ssr: true });
const Gallery = dynamic(() => import('@/components/Gallery/Gallery'), { ssr: true });
const Testimonials = dynamic(() => import('@/components/Testimonials/Testimonials'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer/Footer'), { ssr: true });

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Gallery />
      <Testimonials />
      <Footer />
    </Layout>
  );
}
