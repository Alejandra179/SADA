import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
function DocApi() {
  const [copied1, setCopied1 ] = useState(false);
  const [copied2, setCopied2 ] = useState(false);
  const [copied3, setCopied3 ] = useState(false);
  function showMsgCopy(n){
    switch (n) {
      case 1:
        setCopied1(true)
        setTimeout(() => {
          setCopied1(false)
        }  , 3000)
        break;
      case 2:
        setCopied2(true)
        setTimeout(() => {
          setCopied2(false)
        }  , 3000)
        break;
      case 3:
        setCopied3(true)
        setTimeout(() => {
          setCopied3(false)
        }  , 3000)
        break;
      default:
    }
  }
  return (
    <>
    <section id="estaciones"  className="resume">
      <div  className="container">

        <div  className="section-title">
          <h2>Docs</h2>
           </div>
        <div  className="row">
          <div  className="col-lg-12" data-aos="fade-up">
          <Card>
              <Card.Header className="h5">Consultar datos almacenados</Card.Header>
              <Card.Body>
                <Card.Title>Ejemplo de imprementación</Card.Title>
                <Form.Control id='textCopied' className='hideen' disabled hidden />
                <Card.Text>
                <span className="brush: js notranslate"><code><span className="token function">fetch</span><span className="token punctuation">(</span><span className="token string">'https://api-remaf.onrender.com/api/'</span><span className="token punctuation">)</span><br/>
          <span className="token punctuation">.</span><span className="token function">then</span><span className="token punctuation">(</span><span className="token punctuation">(</span><span className="token parameter">response</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> response<span className="token punctuation">.</span><span className="token function">json</span><span className="token punctuation">(</span><span className="token punctuation">)</span><span className="token punctuation">)</span><br/>
          <span className="token punctuation">.</span><span className="token function">then</span><span className="token punctuation">(</span><span className="token punctuation">(</span><span className="token parameter">data</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>data<span className="token punctuation">)</span><span className="token punctuation">)</span><span className="token punctuation">;</span>
        </code></span>
                </Card.Text>
                <CopyToClipboard text="fetch('https://api-remaf.onrender.com/api/')
                .then((response) => response.json())
                .then((data) => console.log(data));">
                {copied1 ? <Alert key='success' variant='success'><i className ="bi bi-clipboard-check"></i> ¡Copiado!</Alert> : <Button onClick={() =>showMsgCopy(1)} variant="success"><i className="bi bi-clipboard2"></i>Copiar</Button> }
                </CopyToClipboard>
              </Card.Body>
            </Card>
            <br />

            <Card>
              <Card.Header className="h5">Consultar Estaciones</Card.Header>
              <Card.Body>
                <Card.Title>Ejemplo de imprementación</Card.Title>
                <Form.Control id='textCopied' className='hideen' disabled hidden />
                <Card.Text>
                <span className="brush: js notranslate"><code><span className="token function">fetch</span><span className="token punctuation">(</span><span className="token string">'https://api-remaf.onrender.com/api/estaciones'</span><span className="token punctuation">)</span><br/>
          <span className="token punctuation">.</span><span className="token function">then</span><span className="token punctuation">(</span><span className="token punctuation">(</span><span className="token parameter">response</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> response<span className="token punctuation">.</span><span className="token function">json</span><span className="token punctuation">(</span><span className="token punctuation">)</span><span className="token punctuation">)</span><br/>
          <span className="token punctuation">.</span><span className="token function">then</span><span className="token punctuation">(</span><span className="token punctuation">(</span><span className="token parameter">data</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>data<span className="token punctuation">)</span><span className="token punctuation">)</span><span className="token punctuation">;</span>
        </code></span>
                </Card.Text>
                <CopyToClipboard text="fetch('https://api-remaf.onrender.com/api/estaciones')
                .then((response) => response.json())
                .then((data) => console.log(data));">
                  {copied2 ? <Alert key='success' variant='success'><i className ="bi bi-clipboard-check"></i> ¡Copiado!</Alert> : <Button onClick={() =>showMsgCopy(2)} variant="success"><i className="bi bi-clipboard2"></i>Copiar</Button> }
        
                </CopyToClipboard>
                  
              </Card.Body>
            </Card>
            < br/>
            <Card>
              <Card.Header className="h5">Consultar Mediciones por Fecha</Card.Header>
              <Card.Body>
                <Card.Title>Ejemplo de imprementación</Card.Title>
                <Form.Control id='textCopied' className='hideen' disabled hidden />
                <Card.Text>
                <span className="brush: js notranslate"><code><span className="token function">fetch</span><span className="token punctuation">(</span><span className="token string">'https://api-remaf.onrender.com/api/${id}/${fechaDesde}/${fechaHasta}'</span><span className="token punctuation">)</span><br/>
          <span className="token punctuation">.</span><span className="token function">then</span><span className="token punctuation">(</span><span className="token punctuation">(</span><span className="token parameter">response</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> response<span className="token punctuation">.</span><span className="token function">json</span><span className="token punctuation">(</span><span className="token punctuation">)</span><span className="token punctuation">)</span><br/>
          <span className="token punctuation">.</span><span className="token function">then</span><span className="token punctuation">(</span><span className="token punctuation">(</span><span className="token parameter">data</span><span className="token punctuation">)</span> <span className="token operator">=&gt;</span> console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>data<span className="token punctuation">)</span><span className="token punctuation">)</span><span className="token punctuation">;</span>
        </code></span>
                </Card.Text>
                <CopyToClipboard text="fetch('https://api-remaf.onrender.com/api/${id}/${fechaDesde}/${fechaHasta}')
                .then((response) => response.json())
                .then((data) => console.log(data));">
                  {copied3 ? <Alert key='success' variant='success'><i className ="bi bi-clipboard-check"></i> ¡Copiado!</Alert> : <Button onClick={() =>showMsgCopy(3)} variant="success"><i className="bi bi-clipboard2"></i>Copiar</Button> }
        
                </CopyToClipboard>
                  
              </Card.Body>
            </Card>
          </div>
       
        </div>

      </div>
    </section>
    </>
  );
}

export default DocApi;
