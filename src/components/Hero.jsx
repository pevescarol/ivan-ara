import Image from 'next/image'
import headerTop from '../../public/Grupo02.png'
import logoIA from '../../public/logo-name2.png'
import logoMain from '../../public/l10.png'

const Hero = () => {
  return (
    <header className='w-screen relative flex flex-col items-center justify-center h-full gap-y-20' >
      <div className='absolute -top-8 -left-32 w-[50%]'>
        <Image src={headerTop} alt='' width={600} height={800} className=" object-cover"  />
      </div>
      <Image src={logoIA} alt='' width={200} height={200} className=" object-cover mx-auto  mt-28"  />
      <Image src={logoMain} alt='' width={250} height={250} className=" object-cover mx-auto"  />
    </header>
  )
}

export default Hero