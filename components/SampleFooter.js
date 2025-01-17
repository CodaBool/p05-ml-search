'use client'
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function SampleFooter() {
  const [show, setShow] = useState(true);

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Welcome!</Modal.Title>
      </Modal.Header>
      <Modal.Body>This is a sample app. The original project used an AI model on Confluence data. Everything has been replaced with placeholder data</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => setShow(false)}>
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
