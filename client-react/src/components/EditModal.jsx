import React, { useState } from 'react';
import {Button,Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

function EditModal({show,onClose}) {
  

  return (
    <>
    <form>
       <Modal show={show} onHide={onClose}>
        <Modal.Header className='bg-success text-white' closeButton>
          <Modal.Title>Editar estación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
            <Form.Group className='mb-3'>
            <Form.Label >Nombre Estación</Form.Label>
              <Form.Control type='text'></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3'>
            <Form.Label >Dirección</Form.Label>
              <Form.Control type='text'></Form.Control>
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Cerrar
          </Button>
          <Button variant="success" onClick={onClose}>
            Actualizar
          </Button>
        </Modal.Footer>
      </Modal>
      </form>
    </>
    
  );
}

export default EditModal