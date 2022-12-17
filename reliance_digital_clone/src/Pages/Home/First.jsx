
import React from 'react'
import BootstrapCarousel from "./BootstrapCarousel"

const First = () => {
  return (
    <div>
        <img style={{width:"100%",height:"300px"}} src='https://www.reliancedigital.in/medias/Year-End-Sale-5000-Instant-Discount-Carousel-Banner-05-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wxNDcwODh8aW1hZ2UvanBlZ3xpbWFnZXMvaDkzL2hiNS85OTI4MTY1NTg5MDIyLmpwZ3w4NDk3ZDFhZTM1YzUxYTg3MDFiMWZkZjhmMGE0ZWI2ZWZmYjU0MWNmOGJkMTAzZTYwMTdlNjI5MGNjYzZiOTIx' alt='' />
        {/* <img style={{width:"90%",height:"300px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSx1t2YOcVoHaodIgcl0ZSieRX0y5hQaNIzA&usqp=CAU"/> */}
          <BootstrapCarousel/>
    </div>
  )
}

export default First;