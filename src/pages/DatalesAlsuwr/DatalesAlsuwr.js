import React from 'react'
import './DatalesAlsuwr.css'
import {Quran} from '../../DataforQuran'
import {useLocation} from 'react-router-dom'
import mosahf from '../../image/mosahf.jpg'

const DatalesAlsuwr = () => {
    const location = useLocation();
    const path = location.pathname.split('/')[2]
    const datafroquran = Quran.find((items)=>items.Number.toString() === path)
  return (
    <div className='DatalesAlsuwr'>
       <div className='dataDatalesAlsuwr' key={datafroquran.Number}>
          <img className='image' src={mosahf} alt='mosahf'/>
          <div>
             <h3 className='name'>سوره : {datafroquran.Name}</h3>
             <h3 className='name'>الايات: {datafroquran.Number_Verses}</h3>
             <h3 className='name'>عدد الكلمات : {datafroquran.Number_Words}</h3>
             <h3 className='name'>عدد الحروف : {datafroquran.Number_Letters}</h3>
             <h3 className='name'>اين انزلت : {datafroquran.Descent}</h3>
          </div>
      </div>
      <div className='Surah'>
           <p className='wordSurah'>{datafroquran.Surah}</p>
      </div>
    </div>
  )
}

export default DatalesAlsuwr
// import React, { useState } from 'react'
// import './DatalesAlsuwr.css'
// import {Quran} from '../../DataforQuran'
// import {useLocation} from 'react-router-dom'
// import mosahf from '../../image/mosahf.jpg'
// import { useDispatch } from 'react-redux'
// import {getSurah} from '../../Redux/reducers'

// const DatalesAlsuwr = () => {
//     const dispatch = useDispatch();
//     const [show,setshow] = useState(false)
//     const location = useLocation();
//     const path = location.pathname.split('/')[2]
//     const datafroquran = Quran.find((items)=>items.Number.toString() === path)
//   return (
//     <div className='DatalesAlsuwr'>
//       {datafroquran.map(({Name,Number,Number_Verses,Number_Words,Number_Letters,Descent,Surah})=>(
//         <div className='dataDatalesAlsuwr' key={Number}>
//              <img className='image' src={mosahf} alt='mosahf'/>
//              <div>
//                 <h3>سوره : {Name}</h3>
//                 <h3>الايات: {Number_Verses}</h3>
//                 <h3>عدد الكلمات : {Number_Words}</h3>
//                 <h3>عدد الحروف : {Number_Letters}</h3>
//                 <h3>اين انزلت : {Descent}</h3>
//                 <div className='saved'>
//                    <i className={show?"fa-regular fa-bookmark saveShow":"fa-regular fa-bookmark"} id='saved'></i>
//                    <button
//                    onClick={()=>setshow(!show)||
//                    dispatch(getSurah(Name))}
//                    for='saved'
//                     >اضافه الي العناصر المحفوظه</button>
//                 </div>
//              </div>
//              <div className='Surah'>
//                 <p className='wordSurah'>{Surah}</p>
//              </div>   
//         </div>
//       ))}
//     </div>
//   )
// }

// export default DatalesAlsuwr
// <div className='dataDatalesAlsuwr' key={Number}>
// <img className='image' src={mosahf} alt='mosahf'/>
// <div>
//    <h3>سوره : {Name}</h3>
//    <h3>الايات: {Number_Verses}</h3>
//    <h3>عدد الكلمات : {Number_Words}</h3>
//    <h3>عدد الحروف : {Number_Letters}</h3>
//    <h3>اين انزلت : {Descent}</h3>
//    <div className='saved'>
//    <i className={show?"fa-regular fa-bookmark saveShow":"fa-regular fa-bookmark"} id='saved'></i>
//       <button
//        onClick={()=>setshow(!show)||
//        dispatch(getSurah(Name))}
//        for='saved'
//         >اضافه الي العناصر المحفوظه</button>
//    </div>
// </div>
// </div>
