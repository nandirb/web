import React from 'react';
import Button from '@material-ui/core/Button'
import boba from '../../assets/boba.png'
import   './bobaControls.css'
export default function BobaControls (props){
    console.log("bobacontrols", props)
    return (
        <div className="container">
            <div className="boba">
            <img  className="bobapic" src={boba} alt="boba"/>
            </div>
            <div className="controls">
                <div>
                <div>
                    <p>Хэмжээ</p>
                    <Button onClick={()=> props.sizeSongoh("s")} type="s-size" color="secondary">S</Button>
                     <Button type="l-size"color="secondary">L</Button>
                    </div>
                    <strong> Types </strong>
                    <div>
                    
                    <Button type="original" onClick={()=> props.turulSongoh("original")} variant="outlined" color="secondary">
                    Original
</Button>
<Button onClick={()=> props.turulSongoh("matcha")} type="matcha" variant="outlined" color="secondary">
                    Matcha
</Button>
<Button onClick={()=> props.turulSongoh("taro")} type="taro"variant="outlined" color="secondary">
                    Taro
</Button>
<Button onClick={()=> props.turulSongoh("vanilla")} type="vanilla"variant="outlined" color="secondary">
                    Vanilla
</Button>
                    </div>
                    <strong> TOPPINGS </strong>
                    <div>
                    
                    <Button onClick={()=> props.typeSongoh("rainbow")} type="top-rainbow" variant="outlined" color="secondary">
                    Rainbow Jelly
</Button>
<Button onClick={()=> props.typeSongoh("puddling")} type="top-puddling" variant="outlined" color="secondary">
                    Puddling
</Button>
<Button onClick={()=> props.typeSongoh("coconut")} type="top-coconut" variant="outlined" color="secondary">
                    Coconut Jelly
</Button>
<Button onClick={()=> props.typeSongoh("caramel")} type="top-caramel" variant="outlined" color="secondary">
                    Caramel Jelly
</Button>
                    </div>
                

                </div>
                
            </div>
            
        </div>
    )
}
