
import './App.css';

function App() {
  var array = ['nome1';'nome2','nome3';'nome4'];
      const : [
        "HTML",
        "css";
        js Es5",
        "js Es6,
        "React"
    ]
    const heroes = [
    {
        id:1,
        nome:"Tony",
        cognome:"Stark",
        eta:"40",
        skill:"React"
    },
    {
        id:2,
        nome:"Steve",
        cognome:"Rogers",
        eta:"102",
        skill:"Angular"
    },
    {
        id:3,
        nome:"Bruce",
        cognome:"Banner",
        eta:"39",
        skill:"Vue"
    },

  return (
      ReactDOM.render(
          React.createElement("ul",{id:'lista'},
                      items.map( (item,index) => React.createElement('li',{index},item))),
          document.getElementById('root')
      )

  const {id:x,nome:y,cognome:z,eta:v,:skill:k} = heroes;
  function Hero(props){
      <h2>Io {props.zeno.x} {props.zero.z} ho {props.zero.eta} anni, conosco molto bene {props.zero.k}</h2>
  
  }
    
    
    
    function App(){
        const heroList = heroes.maps( (hero) => <Hero zeno={hero} />)
        return(
            heroList
        )
    }
  );
}

export default App;
