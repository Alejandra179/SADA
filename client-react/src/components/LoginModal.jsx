import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" className='' onClick={handleShow}>
        Iniciar Sesión
      </Button>

      <Modal show={show} onHide={handleClose}>
        
        <Modal.Header closeButton className='bg-success text-white text-center'>
          <Modal.Title>Iniciar Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="email"
                placeholder="correo@gmail.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="******" 
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="success" onClick={handleClose}>
            Entrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal;