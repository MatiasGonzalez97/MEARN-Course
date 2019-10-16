import React from 'react';

export default class Header extends React.Component { //Se puede no usar el DEFAULT pero se debe incluir el compomnente entre llaves {} cuando se lo llama 
    constructor(){
        super() //Siempre debe heredarlo porque viene de React.Component
        this.state = {
            contado:0
        }
        this.handleClick=this.handleClick.bind(this) //La atamos a la funcion para que pueda ser usada en el contexto
    }
    handleClick(){
        this.setState({contado:this.state.contado +1 })
    }
    render(){
        return(
            <div>
                <h1>HOLA MUNDO</h1>
                <button onClick={this.handleClick}>contar</button>
                <p>{this.state.contado}</p>
            </div>
        );
    }
}