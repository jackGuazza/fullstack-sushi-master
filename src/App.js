import React, {Component} from 'react';
import NavBar from "./components/navbar";
import Card from "./components/card";
import california from './images/california.png';
import dragon from './images/dragon.png';
import dynamite from './images/dynamite.png';
import philadelphia from './images/philadelphia.png';
import rainbow from './images/rainbow.png';
import shrimp from './images/shrimp.png';

class App extends Component {
  /* oggetto js --> ha uno stato */
  state = {
    cards: [
    {id:0, nome:"California", prezzo:1.99, immagine:california, quantita:0},
    {id:1, nome:"Dragon", prezzo:1.74, immagine:dragon, quantita:0},
    {id:2, nome:"Dynamite", prezzo:1.53, immagine:dynamite, quantita:0},
    {id:3, nome:"Philadelphia", prezzo:1.69, immagine:philadelphia, quantita:0},
    {id:4, nome:"Rainbow", prezzo:1.69, immagine:rainbow, quantita:0},
    {id:5, nome:"Shrimp", prezzo:1.69, immagine:shrimp, quantita:0},
    ]
  }

  /* funzione del componente padre (handle)*/
  handleDelete = cardId => {
    /* filtra le card con id diverso da quello passato(cardId)*/
    const updatedCards = this.state.cards.filter(card => card.id !== cardId); 
    this.setState({cards: updatedCards});
  }

  render(){
    return (
    <>    
      <NavBar />
      <div className='container'>
        <h3>Cosa desideri ordinare?</h3>
        <hr />
        <div className='row'>
          {this.state.cards.map(card => (
            <Card
              key={card.id} /* prop */
              onDelete={this.handleDelete} /* funzione del componente figlio (on) collegata alla funzione del componente padre */
              card = {card}
            />
          ))}
        </div>
      </div>
    </>
    );
  }
}

export default App;
