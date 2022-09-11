import { Component } from 'react'
import React from 'react'

import { Box, Form, Heading, Tag } from 'react-bulma-components'
import 'bulma/css/bulma.min.css'
import { convertirLibrasGramos, convertirLibrasKilogramos, convertirLibrasOnzas } from './Factor'

const { Control, Field, Label, Input } = Form

const INITIAL_VALUE = ''

class App extends Component {
  constructor() {
    super()
    this.state = {
      libras: INITIAL_VALUE,
    }
  }

  actualizarLibras(newLibras) {
    this.setState({
      libras: newLibras,
    })
  }

  render() {
    const newLibras = this.state.libras
    const onzas = newLibras === INITIAL_VALUE ? '<Ingrese libras>' : isNaN(newLibras) ? '<Ingrese un valor numérico>' : convertirLibrasOnzas(newLibras)
    const colorConversion = newLibras === INITIAL_VALUE || isNaN(newLibras) ? 'warning' : 'success'
    const kilogramos = newLibras === INITIAL_VALUE ? '<Ingrese libras>' : isNaN(newLibras) ? '<Ingrese un valor numérico>' : convertirLibrasKilogramos(newLibras)
    const gramos = newLibras === INITIAL_VALUE ? '<Ingrese libras>' : isNaN(newLibras) ? '<Ingrese un valor numérico>' : convertirLibrasGramos(newLibras)
   
    return (
      <div className="App">
        <Box>
          <Heading>
            Conversor de unidades de peso - React
        </Heading>
          <Field>
            <Label>Libras</Label>
            <Control>
              <Input value={this.state.newLibras} name="libras" autoComplete="off" data-testid="libras" onChange={(event) => this.actualizarLibras(event.target.value)} />
            </Control>
          </Field>
          <Field>
            <Label>Onzas</Label>
            <Tag color={colorConversion} rounded>
              <Label data-testid="onz">{onzas.toLocaleString('es')}</Label>
            </Tag>
          </Field>
          <Field>
            <Label>Kilogramos</Label>
            <Tag color={colorConversion} rounded>
              <Label data-testid="kg">{kilogramos.toLocaleString('es')}</Label>
            </Tag>
          </Field>
          <Field>
            <Label>Gramos</Label>
            <Tag color={colorConversion} rounded>
              <Label data-testid="g">{gramos.toLocaleString('es')}</Label>
            </Tag>
          </Field>
        </Box>
      </div>
    )
  }
}

export default App