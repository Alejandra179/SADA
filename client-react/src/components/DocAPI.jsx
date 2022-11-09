import React from "react";
import useCopy from "use-copy";

export default function App() {
 const [copied, copy, setCopied] = useCopy("Éste es el texto que se va a copiar");

 const copyText = () => {
   copy();

   setTimeout(() => {
     setCopied(false);
   }, 3000);
 };

 return (
   <div>
      <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
     {copied ? <div className="alert alert-primary" role="alert"><i className ="bi bi-clipboard-check"></i> ¡Copiado!</div> : <button className="btn btn-info btn-clipboard" onClick={copyText}><i className="bi bi-clipboard2"></i>Copiar</button>}
     
   </div>
 );
}