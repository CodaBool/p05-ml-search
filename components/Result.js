'use client'
import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Card from 'react-bootstrap/Card'
import { useRouter } from 'next/navigation'

export default function Result({ result }) {
  const router = useRouter()

  function handleClick() {
    router.push(`/detail/${result._id}`)
  }

  return (
    <Card className="result my-3 shadow rounded" onClick={handleClick}>
      <Card.Body>
        <Card.Title>{result._source.title}</Card.Title>
        <Card.Text>
          {result._source.body.substring(0, 500) + '...'}
        </Card.Text>
        <span style={{ color: "rgb(13 110 253)", textDecoration: "underline" }}>Card Link</span>
        <span style={{ color: "rgb(13 110 253)", textDecoration: "underline", marginLeft: "1em" }}>Another Link</span>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem className="text-muted">es-ID: {result._id} | source-ID: {result._source.id} | score: {result._score}</ListGroupItem>
      </ListGroup>
    </Card>
  )
}
