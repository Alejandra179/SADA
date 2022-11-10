import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useCopy from "use-copy";
import Alert from 'react-bootstrap/Alert';
function DocApi() {
  const [copied, copy, setCopied] = useCopy("Hola mundorr");

 const copyText = (text) => {
  useCopy(text)
  copy();

   setTimeout(() => {
     setCopied(false);
   }, 3000);
 };
  return (
    <Card>
      <Card.Header as="h5">Datos Almacenados</Card.Header>
      <Card.Body>
        <Card.Title>Ejemplo </Card.Title>
        <Card.Text>
        <pre class="brush: js notranslate"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://api-remaf.onrender.com/api/'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
        </Card.Text>
        {copied ? <Alert key='success' variant='success'><i className ="bi bi-clipboard-check"></i> ¡Copiado!</Alert> : <Button onClick={copyText("fetch('https://api-remaf.onrender.com/api/').then((response) => response.json()).then((data) => console.log(data));")} variant="success"><i className="bi bi-clipboard2"></i>Copiar</Button> }
        
      </Card.Body>
    </Card>
  );
}

export default DocApi;
