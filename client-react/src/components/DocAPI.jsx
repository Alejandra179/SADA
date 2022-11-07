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
     {copied ? <div className="alert alert-primary" role="alert"><i class="bi bi-clipboard-check"></i> ¡Copiado!</div> : <button className="btn btn-info btn-clipboard" onClick={copyText}><i class="bi bi-clipboard2"></i>Copiar</button>}
     
   </div>
 );
}