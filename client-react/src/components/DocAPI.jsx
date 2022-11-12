import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import { useAsyncError } from 'react-router-dom';
function DocApi() {
  const [copied, setCopied ] = useState('');
 

  return (

    <section id="estaciones"  className="resume">
      <div  className="container">

        <div  className="section-title">
          <h2>Docs</h2>
           </div>

        <div  className="row">
          <div  className="col-lg-12" data-aos="fade-up">
          <Card>
              <Card.Header className="h5">Consultar datos almacenados</Card.Header>n
              <Card.Body>
                <Card.Title>Ejemplo {copied}</Card.Title>

                <Card.Text>
                <pre className="brush: js notranslate"><code><span className="token function">fetch</span><span className="token punctuation">(</span><span className="token string">'https://api-remaf.onrender.com/api/'</span><span className="token punctuation">)</span><br/>
          <span className="token punctuation">.</span><span className="token function">then</span><span className="token punctuation">(</span><span className="token punctuation">(</span><span className="token parameter">response</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> response<span className="token punctuation">.</span><span className="token function">json</span><span className="token punctuation">(</span><span className="token punctuation">)</span><span className="token punctuation">)</span><br/>
          <span className="token punctuation">.</span><span className="token function">then</span><span className="token punctuation">(</span><span className="token punctuation">(</span><span className="token parameter">data</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>data<span className="token punctuation">)</span><span className="token punctuation">)</span><span className="token punctuation">;</span>
        </code></pre>
                </Card.Text>
                {copied ? <Alert key='success' variant='success'><i className ="bi bi-clipboard-check"></i> ¡Copiado!</Alert> : <Button onClick={() =>setCopied("fetch('https://api-remaf.onrender.com/api/').then((response) => response.json()).then((data) => console.log(data));")} variant="success"><i className="bi bi-clipboard2"></i>Copiar</Button> }
        
              </Card.Body>
            </Card>
          </div>
       
        </div>

      </div>
    </section>
    
  );
}

export default DocApi;
