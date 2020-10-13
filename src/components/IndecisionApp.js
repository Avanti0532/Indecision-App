import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = ()=>{
        this.setState(()=>{
            return {
                options: []
            };
        });
    }

    handleDeleteOption = (option) =>{
        this.setState((prevState)=>{
            return {
                options: prevState.options.filter((op)=> op!==option)
            }
        });
    }

    handleAddOption = (option) => {
        if(!option){
            return 'Enter a valid task'
        }else if(this.state.options.indexOf(option) > -1){
            return 'The task already exists. Please enter a new task'
        }
        this.setState((prevState)=>{
            return{
                options: prevState.options.concat(option)
            };
        });
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(()=>{
            return {
                selectedOption: option
            }
        })
    }
    handleOkay = () =>{
        this.setState(()=>{
            return {
                selectedOption: undefined
            }
        })
    }
    componentDidMount(){

        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(()=>{
                    return {
                        options: options
                    }
                });
            }
        }catch(e){

        }
       
       
    }

    componentDidUpdate(prevProps, prevState){

        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
             
    }
    componentWillUnMount(){
        console.log('componentWillUnMount');
    }

 
    render(){
        const subtitle = 'Let computer ease your life!'
        return(
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                    <div className="widget">
                    <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} 
                    handleDeleteOption={this.handleDeleteOption}/>
                     <AddOption handleAddOption={this.handleAddOption}/>
                    </div>
                </div>
               
                <OptionModal selectedOption={this.state.selectedOption} handleOkay={this.handleOkay}/>
            </div>
        );
    }
}
