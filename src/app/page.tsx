import Image from 'next/image';
import DELIVERY from "../public/DELIVERY.png";
import LOGO from "../public/LOGO.png"
import HEADPHONE from "../public/HEADPHONE.png"
import TRUCK from "../public/TRUCK.png"
import DELIVERYILLUSTRATION from "../public/DELIVERYILLUSTRATION.png"

export default function Home() {
  return (
    
    <div className="w-[1119px] h-[5128px] relative bg-white">
      <head>
        <title>Dispatch Hub Webpage</title>
      
      </head>

      
      
      
{/*hero start*/}
      <div className="w-[1119px] h-[628px] bg-black bg-opacity-50">
      
        <Image src={DELIVERY} alt='delivery man' object-cover width={1119} height={628} />
        <Image src={LOGO} alt='logo' width={108} height={70} className='absolute top-0 left-0' />
        <div className="w-[455px] h-[50px] left-[651px] top-[24px] absolute">
          <div className="left-0 top-[10px] absolute text-white text-2xl font-normal font-['Inter'] capitalize">nigeria (NG)</div>

        
          <button className="left-[207px] top-[10px] absolute text-white text-2xl font-normal font-['Inter'] capitalize">Support</button>
          <button  className="w-[103px] h-[30px] left-[341px] top-[10px] bg-orange-500 rounded-[30px] absolute text-white text-2xl font-semibold font-['Inter'] capitalize">SIGN UP</button>
        </div>


        <div className="w-[1015px] h-[95px] left-[52px] top-[219px] absolute text-center text-white text-[40px] font-bold font-['Inter'] capitalize">dispatch wherever you want, and<br/> track in real time
        </div>
        <div className="left-[90px] top-[358px] absolute text-center"><span className="text-white text-[26px] font-normal font-['Inter'] capitalize">We manage schedule deliveries for variety of </span>
        <span className="text-white text-[26px] font-normal font-['Inter']"> user segments, ranging from<br/>business established to individual clients. We ensure quickly delivery service<br/>at great price, and you can track your deliveries at real time</span>
        </div>
        

        <button className="w-[182px] h-[57px] left-[469px] top-[507px] absolute bg-orange-500 rounded-[30px] text-white text-2xl font-semibold font-['Inter']" >Get the App</button>



      
    
      </div>

{/*hero end*/}

      <Image alt='' className="w-[100px] h-[100px] left-[972px] top-[687px] absolute" src={HEADPHONE} />
      <button className="w-[460px] h-12 left-[330px] top-[663px] absolute  text-black text-4xl font-semibold font-['Inter'] capitalize">earn with dispatch hub</button>
      <div className="w-[259px] h-[27px] left-[427px] top-[737px] absolute">
<div className="left-[7px] top-[4px] absolute bg-white border border-black rounded-[30px] text-black text-base font-semibold font-['Inter'] capitalize">Dispatch</div>
<button className="left-[139px] top-[4px] absolute bg-orange-500 rounded-[30px] text-white text-base font-semibold font-['Inter'] capitalize">Vehicle Owner</button>
</div>


<div className="w-[484px] h-[463px] top-[827px] left-[19px] absolute p-2.5 flex-col justify-start items-start gap-7 inline-flex">

    <div className="w-[643px] h-[45px] text-black text-4xl font-bold font-['Inter'] leading-[45px]">Own a vehicle?</div>
    <div className="w-[631px] h-[92px] text-black text-[32px] font-light font-['Inter'] leading-9">Become a partner with us by <br/>registering your vehicle with us <br/>today</div>
    <div className="w-[182px] h-[75px] p-3 bg-stone-50 rounded-[30px] justify-center items-center gap-2.5 inline-flex">
        <button className="text-black text-2xl font-semibold font-['Inter'] leading-loose">Learn more</button>
    </div>
</div>

<Image className="w-[588px] h-[475px] absolute right-[19px] top-[815px] rounded-[20px]" src={TRUCK} alt='truck' />

{/*services start*/}

<div className="left-[427px] top-[1388px] absolute text-black text-[32px] font-bold font-['Inter'] capitalize">our services</div>
<div className="w-[475px] h-44 left-[46px] top-[1511px] absolute">
<div className="w-[475px] h-44 left-0 top-0 absolute bg-white" />
<Image className="w-[190px] h-[156px] left-0 top-0 absolute" src={DELIVERYILLUSTRATION} alt='delivery illustration' />
<div className="w-[269px] h-[148px] left-[197px] top-[8px] absolute"><span className="text-black text-xl font-bold font-['Inter'] capitalize">local delivery<br/></span><span className="text-black text-sm font-normal font-['Inter'] capitalize"><br/>need to send a package across town?<br/>our local delivery service ensures swift<br/>and secure transportation within your<br/>city or town. Whether it’s a last minute<br/>document, a special gift, or everyday<br/>essentials, we’ve got you covered.<br/></span></div>
</div>

{/*services end*/}





    </div>
  )
}
