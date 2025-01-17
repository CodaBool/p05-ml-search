"use client"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavBox from '../components/NavBox'
import SampleFooter from '../components/SampleFooter'
import Link from 'next/link'

export default function Component() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand className="ms-5">
        <Link href='/'>ML-Search</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <Link href='/' className="selected">search</Link>
          <Link href='/about' className="selected">about</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
