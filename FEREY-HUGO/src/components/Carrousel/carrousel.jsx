import './carrousel.css'
import {useState} from "react";

const Carrousel = (props) => {
    const [index, setIndex] = useState(0)
    const suivant= () =>{
        setIndex(prev =>{
                if(prev === props.images.length-1 ){
                    return 0
                }
                return prev +1
            }
        )
    }
    const avant=() =>{
        setIndex(prev =>{
                if(prev === 0 ){
                    return props.images.length-1
                }
                return prev -1
            }
        )
    }
    return <>

        <div className="carrousel">
            <img className="carrousel__image" src={props.images[index]} alt="photo du logement" />
            {props.images.length > 1 &&
                <>
                    <button onClick={suivant} className="btn__droite">
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                    <button onClick={avant} className="btn__gauche">
                        <i className="fa-solid fa-angle-left"></i>
                    </button>
                    <div className="carrousel__index">
                        <p>{index+1}/{props.images.length}</p>
                    </div>
                </>
            }
        </div>

    </>
}
export default Carrousel;