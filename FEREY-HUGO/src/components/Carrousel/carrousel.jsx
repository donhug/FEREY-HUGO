import './carrousel.css'
import {useEffect, useState} from "react";

const Carrousel = (props) => {
    const [index, setIndex] = useState(0)
    useEffect(() => {
        const insterval = setInterval(() => {
            setIndex(prev =>(prev + 1) % props.images.length)
        }, 3000)

        return () => clearInterval(insterval)
    }, [props.images.length])

    const arriere= () =>{
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
            <div className="carrousel__img-container">
                <img className="carrousel__image" src={props.images[index]} alt="photo du logement" />
            </div>

        </div>
            {props.images.length > 1 &&
                    <div className="carrousel__bottom">
                        <div className="carrousel__index">
                            <p>{index+1}/{props.images.length}</p>
                        </div>
                        <div className="carrousel__btn">
                            <button onClick={avant} className="btn__droite" aria-label="image suivante">
                                <i className="fa-solid fa-angle-left"></i>
                            </button>
                            <button onClick={arriere} className="btn__gauche" aria-label="image précedente">
                                <i className="fa-solid fa-angle-right"></i>
                            </button>
                        </div>
                    </div>
            }
    </>
}
export default Carrousel;