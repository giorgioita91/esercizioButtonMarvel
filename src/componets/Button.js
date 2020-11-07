import React from "react";

// class Button extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   cambiaColore = () => {
//     this.stile.backgroundColor = "green";
//   };
//   render() {
//     return (
//       <button onClick={this.cambiaColore} style={props.stile}>
//         {props.description} {props.numero}
//       </button>
//     );
//   }
// }

// const CambiaColore = (props) => {
//     props.stile.backgroundColor = "green";
// }

function Button(props) {
  // console.log(props.stile.backgroundColor);
  return (
    <button style={props.stile}>
      {props.description} {props.numero}
    </button>
  ); //style={{backgroundColor:{props.stile}}}
}

// function CambiaColore(props) {
//     return props.stile.backgroundColor = "green";

// }
// const btn = document.getElementById("btnColor");
// console.log(btn);
// btn.addEventListener("click", function (props) {
//   console.log(props.stile.backgroundColor);
//   return (props.stile.backgroundColor = "green");
// });

export default Button;
