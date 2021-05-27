import React, { Component } from 'react';
import './Calculator.css'

class Counter extends Component {

    constructor(props) {
        super(props);   //Se pasan propiedades para poder instanciar.
        this.state = {
            counterValue: 0,
            numberOne: 0,
            numberTwo: 0,
            auxiliar: "",            
        };
    }
    //Función para pasar operaciones.
    handleOnClickBtn = (Num) => {
        const { counterValue, numberOne, numberTwo, auxiliar } = this.state;
        this.setState({
           auxiliar: Num === "1" ? (auxiliar.concat(Num)) : Num === "2" ? (auxiliar.concat(Num)):Num === "3" ? 
           (auxiliar.concat(Num)):Num === "4" ? (auxiliar.concat(Num)):Num === "5" ? (auxiliar.concat(Num)):Num === "6" ?
           (auxiliar.concat(Num)):Num === "7" ? (auxiliar.concat(Num)):Num === "8" ? (auxiliar.concat(Num)):Num === "9" ? 
           (auxiliar.concat(Num)):Num === "0" ? (auxiliar.concat(Num)) :Num === "+" ? (auxiliar.concat(Num)):Num === "/" ? 
           (auxiliar.concat(Num)):Num === "-" ? (auxiliar.concat(Num)):Num === "*" ?(auxiliar.concat(Num)):Num === "%" ? 
           (auxiliar.concat(Num)):Num === "." ? (auxiliar.concat(Num)) :"ERROR",
        })
        this.setState({
           counterValue: Num === "1" ? (auxiliar.concat(Num)) : Num === "2" ? (auxiliar.concat(Num)):Num === "3" ? 
           (auxiliar.concat(Num)):Num === "4" ? (auxiliar.concat(Num)):Num === "5" ? (auxiliar.concat(Num)):Num === "6" ?
           (auxiliar.concat(Num)):Num === "7" ? (auxiliar.concat(Num)):Num === "8" ? (auxiliar.concat(Num)):Num === "9" ? 
           (auxiliar.concat(Num)):Num === "0" ? (auxiliar.concat(Num)) :Num === "+" ? (auxiliar.concat(Num)):Num === "/" ? 
           (auxiliar.concat(Num)):Num === "-" ? (auxiliar.concat(Num)):Num === "*" ?(auxiliar.concat(Num)):Num === "%" ? 
           (auxiliar.concat(Num)):Num === "." ? (auxiliar.concat(Num)) :"Error",
        });
    };
    handleOnClickBtnAC = (acBtn => {
        const {counterValue, numberOne, numberTwo, auxiliar, zero} = this.state;
        this.setState({
            counterValue: "0",
            auxiliar: "",
        });
    });
    handleOnClickBtnResult = ( resultado => {
        const {counterValue, auxiliar}= this.state;
        this.setState({
            counterValue: (eval(auxiliar))
        });
    });
    

    render() { //Renderiza/muestra información
        const { counterValue } = this.state; //Destructuramos
        return (
            <div >
                <div className='contenedor'>
                    <div className='header'>
                        <h1>{counterValue}</h1>
                    </div>

                    <div className='numero'>
                        <button onClick={() => this.handleOnClickBtn("7")}>7</button>
                        <button onClick={() => this.handleOnClickBtn("8")}>8</button>
                        <button onClick={() => this.handleOnClickBtn("9")}>9</button>
                        <button id='func' onClick={() => this.handleOnClickBtn("-")}>-</button>
                        <button id='func' onClick={() => this.handleOnClickBtn("/")}>/</button>
                        <button id='func' onClick={() => this.handleOnClickBtnAC("AC")}>ac</button>
                    </div>
                    <div className='numero'>
                        <button onClick={() => this.handleOnClickBtn("4")}>4</button>
                        <button onClick={() => this.handleOnClickBtn("5")}>5</button>
                        <button onClick={() => this.handleOnClickBtn("6")}>6</button>
                        <button id='func' onClick={() => this.handleOnClickBtn("+")}>+</button>
                        <button id='func' onClick={() => this.handleOnClickBtn("*")}>*</button>
                        <button id='func' onClick={() => this.handleOnClickBtn("%")}>%</button>
                    </div>
                    <div className='numero'>
                        <button onClick={() => this.handleOnClickBtn("1")}>1</button>
                        <button onClick={() => this.handleOnClickBtn("2")}>2</button>
                        <button onClick={() => this.handleOnClickBtn("3")}>3</button>
                        <button onClick={() => this.handleOnClickBtn("0")}>0</button>
                        <button id='func' onClick={() => this.handleOnClickBtn(".")}>.</button>
                        <button id='func' onClick={() => this.handleOnClickBtnResult()}>=</button>
                    </div>
                </div>
            </div >
        );
    }
}

export default Counter;
