import React from 'react'
import './grid.css'

export default function GridComponent(props) {
    return (
        <div>
            <div className='aligner'>
                <div className='gridContainer'> 
                
                <div> {/* Free aligner grid component */} </div>
                
                <div className='gridHeadContainer'>
                    <h2 className='gridHead'>{ props.gridHead }</h2>
                </div>
                
                <div> {/* Free aligner grid component */} </div>
                
                    <div>
                        <h5>{props.subHeadOne}</h5>
                        <br />
                        <p>{ props.subContOne }</p>
                    </div>

                    <div>
                        <h5>{props.subHeadTwo}</h5>
                        <br />
                        <p>{ props.subContTwo }</p>
                    </div>
                    
                    <div>
                        <h5>{props.subHeadThree}</h5>
                        <br />
                        <p>{ props.subContThree }</p>
                    </div>

                    <div>
                        <h5>{props.subHeadFour}</h5>
                        <br />
                        <p>{ props.subContFour }</p>
                    </div>
                    
                    <div>
                        <h5>{props.subHeadFive}</h5>
                        <br />
                        <p>{ props.subContFive }</p>
                    </div>
                    
                    <div>
                        <h5>{props.subHeadSix}</h5>
                        <br />
                        <p>{ props.subContSix }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
