// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// export default function Home() {
//   return (
//     <div>
//       <h1>Tourist places</h1>
//       <img src='https://lh5.googleusercontent.com/p/AF1QipNeqHIesl8548Od80f3BvN-0DUsl_L9VbPlyk5P=w540-h312-n-k-no'></img> <img src='https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSgCnNXheLmX54CaajcCJFmS9Ik1CTowPGW83A-sCRxALPlW-Lnk1WX6VQsbCj1FHZDkwwJfY50OtplFRR66SrKMhcU82O3p9gRIOSiOA'></img><img src='https://lh5.googleusercontent.com/p/AF1QipPINTGLkf0trqBTO3HJIZ9EfmkyG_wI3v0h_fau=w540-h312-n-k-no'></img>
//       <img src='https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQvXIh8m9VdpGEAwbTDqi_aVb_IwrPnC7soZiWAi-nYSnFn17UjMfTpImyOhj1_e6J1fGAm1ii1HFdTOLMW0EFnPAhoScuG9C6p_R1s5A'></img>
//     </div>
//   )
// }

import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'



export default function Home() {
  return (
    <div className='container'>
      <h1 id="heading">TOURIST PLACES</h1>
      <img src='https://images.unsplash.com/photo-1593692716621-1e228b0a9224?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a29kYWlrYW5hbHxlbnwwfHwwfHx8MA%3D%3D' width={320} height={500}></img>
      <img src='https://images.unsplash.com/photo-1589136777351-fdc9c9cab193?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b290eXxlbnwwfHwwfHx8MA%3D%3D' width={330} height={500}></img>
      <img src='https://t4.ftcdn.net/jpg/01/28/57/63/360_F_128576315_ejpjSy7S7fsH275jCDuUtykU1O3B6rUb.jpg' width={330} height={500}></img>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoBkYnDE_eT0DsQx94gcCInFTZ_M_1pkMwmfIu2pbs1w&s' width={324} height={500}></img><br></br><br></br>

      <h2 className='headers'>KODAIKANAL</h2>
      <p className='para'>Kodaikanal, town, southwestern Tamil Nadu state, southern India.
        It is situated at an elevation of 7,300 feet (2,225 metres) in the Palni Hills, about 35 miles (55 km) west-southwest of Dindigul.
        Kodaikanal was created in 1845 by U.S. missionaries and British civil servants as a hill station to which administrative offices
        were moved during the summer.The town is now a popular resort known for its scenery, 75-acre (30-hectare) artificial lake, and
        recreational facilities.It also contains a meteorological observatory that engages in astrophysical research. The town serves
        as a collection and distribution centre for fruits and vegetables, especially potatoes and pears, which are sent to neighbouring
        cities on the plains.It has schools for foreign and Indian students and a Jesuit seminary. Pop. (2001) 32,969; (2011) 36,501.</p>

      <h2 className='headers'>OOTY</h2>
      <p className='para'>The popular hill station Ooty is a shorter derivation from its original name Udhagamandalam, sometimes called Ootacamund.
        During earlier times it was also called OttaikalMandu. The charm and beauty of this hill station in Nilgiri hills calls for the name it got,
        'The Queen of Hill Stations'. It is called a nature lover's paradise too, due to its greens, wonderful blue Mountains, rippling clear lakes,
        alpine woods and lively climate like that of English summersIt is said that these mountains derives those misty blue haze from the Eucalyptus
        trees that cover these hills or maybe from the Kurunji flowers that are blue in color and blossoms after every 12 years.The scenic hill station
        is a desired honeymoon destination due to its heavenly beautiful plantations, conifers, lavenders, Eucalyptus tresses and graciously flowing cold
        breeze.Ooty lies at North of Coimbatore in Tamil Nadu covering an area of 36 sq Kms. It is the capital of Nilgiris district. Ooty is mainly inhabited
        by Todas, Kotas, Kurumbas, Panias and Irula tribes.The hill station is about 2240 meters above sea level.  The climate of the place is mild and pleasant
        throughout the year with an average ranging from 17-20 °C and winters dipping to the temperatures of 0º C. A pril to June and September to November is a
        good time to visit Ooty..</p>

      <h2 className='headers'>MUNNAR</h2>
      <p className='para'>Munnar - breathtakingly beautiful - a haven of peace and tranquility - the idyllic tourist destination in God's own country.
        Set at an altitude of 6000 ft in Idukki district, Munnar was the favored summer resort of the erstwhile British rulers in the colonial days.
        Unending expanse of tea plantations pristine valleys and mountains exotic species of flora and fauna in its wild sanctuaries and forests
        aroma of spice scented cool air yes! This beautiful destination has all these and more. It's the place you would love to visit it's the
        place you would wish never to leave. Munnar is such a beautiful place in Kerala, which cannot be portrayed in a single canvas.
        Everything and anything here will make us excited. The hills, the mist, the valleys, the streams, the waterfalls, tea plantations,
        rare flora and fauna.... It is a beautiful tea town in Idukki district of Kerala easily accessible from Kochi and Coimbatore.
        The gorgeous hill station is ideally placed in the South Western Ghats of India. With an area of around 557 sq km,
        Munnar in Devikulam Taluk is the largest panchayat in Kerala. Munnar got its name from its strategic location at
        the confluence of three rivers - Muthirapuzha, Nallathanni and Kundala Rivers. 'Moonu' means 'three' and 'Aru' means 'river'.
        The region is placed at a height of around 1,500 m to 2,695 m above sea level and was once the summer capital of the British in South India.
        Later it was developed for cultivating tea plants. The beautiful sights of acres and acres of lush green tea plantations will make us realize
        that we have at last reached Munnar and of course the place is so much known for its tea estates. It always carries the remnants of history of tea
        cultivation in Kerala. Neelakurinji or Strobilanthus has special status in the tourism map of this fascinating destination. The flower which blooms
        once in twelve years attracts lots of tourists from all over the world.</p>

      <h2 className='headers'>YERCAUD</h2>
      <p className='para'>Nestled in the Shivaroy Hills of Tamil Nadu, Yercaud is a tranquil hill station in the Eastern Ghats steeped in abundant greenery.
        Commonly called ‘Ooty of the Poor’, this region has a history dating back to the time of the British. Located at an altitude of 4970 feet, Yercaud is known
        for its vast expanses of coffee plantations. A paradise for nature lovers, this quaint town is an ideal place to experience nature at its enchanting best.
        Family Tour packges Family Tours Lisure Tour Family tours Family tour Family tour packages Family tours Family tour Family tour package for Family Packages for Families
        With salubrious climate throughout the year, it attracts thousands of tourists from different parts of the country. One of the many highlights is the summer festival
        that takes place in May. It is dedicated to Lord Servarayan, the supreme god of the ranges and gives visitors a glimpse into the rich heritage of this region. With diverse
        flora and rich culture, Yercaud is one of the amazing weekend getaways in South India that one cannot afford to miss.Corporate Tour packges Corporate Tours Corporate Tours
        Corporate tours Corporate tour Corporate tour packages Corporate tour Corporate tour Corporate tour for Corporate The history of Yercaud, the Salem district of Tamil Nadu,
        can be traced back to the Stone Age, with artefacts being discovered in the Shevaroy Hills. It is believed that Sir Thomas Munroe, former Governor of Madras found this place in 1842,
        and the Scottish collector David Cockburn contributed to its development. He is thus often referred to as the Father of Yercaud, and he introduced a variety of plantations here like coffee,
        pears and apples. More Europeans arrived over the years in the city, and this led to further expansion of its plantations to include tea, cinnamon etc. The famous MSP Plantations and MSP Coffee of the
        town owes its inception to MSP Rajes, who was the first Indian coffee planter to settle here.</p>
    </div>


  )
}











