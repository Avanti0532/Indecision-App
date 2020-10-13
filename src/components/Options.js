import React from 'react'
import Option from './Option'

const Options = (props)=>{
    return(
        <div>
            <div className="widget-header">
                <h4 className="header__title">Your Options</h4>
                    <button 
                        className="button button--link"
                        onClick={props.handleDeleteOptions}>Remove All</button>
             </div>
        
            {props.options.length === 0 && <p className="message">Please add an option to get started!</p>}
            {
                props.options.map((option, index) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        count={index+1}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
                
            }
         
        </div>);
}

export default Options;