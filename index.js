const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')

  
morgan.token('body', function (req, res) { return JSON.stringify(req.body) });

app.use(bodyParser.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))


let persons = [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    }
  ]


  app.get('/api/persons', (req, res) => {
    res.json(persons)
  })

  app.get('/info', (req, res) => {

    const date = new Date()
    const peopleInfo = (
            `<p>Phonebook has info for ${persons.length} persons</p>
            <p>${date}</p>`
    )

    res.send(peopleInfo)
  })


  app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    
    if (person) {
      res.json(person)
    } else {
      res.status(404).end()
    }
  })

  app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)
  
    res.status(204).end()
  })

  const nameExist = (newName) => {
    return(
    persons.some(person => person.name === newName)
    )
  }
  
  app.post('/api/persons', (req,res) => {
    const newId = Math.floor(Math.random() * Math.floor(100000))

    const body = req.body

    if (!body.name || !body.number) {
        return res.status(400).json({ 
          error: 'content missing' 
        })
      }

      if (nameExist(body.name)) {
        return res.status(409).json({ 
          error: 'name must be unique' 
        })
      }

    const person = {
        name: body.name,
        number: body.number,
        id: newId
    }
   

    persons = persons.concat(person)

    res.json(person)
  })



  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })