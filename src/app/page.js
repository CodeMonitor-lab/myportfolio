import Image from "next/image";
import HomeHero from '@/components/custom/Home/HomeHero'
import HeroBanner from '@/components/custom/Home/HeroBanner'

export default function Home() {
  return (
   <div>
    <HomeHero/>
    <HeroBanner/>
   </div>
  );
}
