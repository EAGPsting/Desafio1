import React from 'react';
import {Col, Form, FormGroup, Label, Input, Button, Row, FormFeedback, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';

export default class Menu extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = { 
            nombres: '',
            apellidos: '',
            sexo: '',
            dui: '',
            fecha: '',
            nacionalidad: '',
            direccion: '',
            municipio: '',
            departamento: '',
            mensajeNombre: "",
            mensajeApellidos: "",
            mensajeSexo: "",
            mensajeDui: "",
            mensajeFecha: "",
            mensajeNacionalidad: "",
            mensajeDireccion: "",
            mensajeMunicipio: "",
            mensajeDepartamento: "",
            invalidNombre: false,
            abierto: false
        }
        this.onChange = this.onChange.bind(this);
        this.enviarFomulario = this.enviarFomulario.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    onChange(e){
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value,
        });
        console.log(this.state);
    }
    enviarFomulario(e)
    {
        e.preventDefault();
        if(this.state.nombres === ''){
            this.setState({
                invalidNombre: true,
                mensajeNombre: 'El campo Nombres es obligatorio, indica tus nombres'
            });
        }
    }
    handleClick() {
        this.setState({abierto: !this.state.abierto})
      }
    render()
    {
        return (
            <>
            <div>
                <Row>
                    <Col xs="3"></Col>
                    <Col xs="6">
                        <h1>Formulario de registro:</h1>
                        <Form onSubmit={this.enviarFomulario}>
                                <FormGroup>
                                    <Label>Nombres:</Label>
                                    <Input type="text" name="nombres" value={this.state.nombres} onChange={this.onChange} invalid={this.state.invalidNombre}></Input>
                                    <FormFeedback>{this.state.mensajeNombre}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Apellidos:</Label>
                                    <Input type="text" name="apellidos" value={this.state.apellidos} onChange={this.onChange}></Input>
                                    <FormFeedback>{this.state.mensajeApellidos}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Sexo:</Label>
                                    <Input type="text" name="sexo" value={this.state.sexo} onChange={this.onChange}></Input>
                                    <FormFeedback>{this.state.mensajeSexo}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label>DUI:</Label>
                                    <Input type="text" name="dui" value={this.state.dui} onChange={this.onChange}></Input>
                                    <FormFeedback>{this.state.mensajeDui}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Fecha de nacimiento:</Label>
                                    <Input type="text" name="fecha" value={this.state.fecha} onChange={this.onChange}></Input>
                                    <FormFeedback>{this.state.mensajeFecha}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Nacionalidad:</Label>
                                    <Input type="text" name="nacionalidad" value={this.state.nacionalidad} onChange={this.onChange}></Input>
                                    <FormFeedback>{this.state.mensajeNacionalidad}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Dirección:</Label>
                                    <Input type="text" name="direccion" value={this.state.direccion} onChange={this.onChange}></Input>
                                    <FormFeedback>{this.state.mensajeDireccion}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Municipio:</Label>
                                    <Input type="text" name="municipio" value={this.state.municipio} onChange={this.onChange}></Input>
                                    <FormFeedback>{this.state.mensajeMunicipio}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Departamento:</Label>
                                    <Input type="text" name="departamento" value={this.state.departamento} onChange={this.onChange}></Input>
                                    <FormFeedback>{this.state.mensajeDepartamento}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
 
                                        <Button color='success' onClick={this.handleClick}>Guardar</Button>
                                </FormGroup>
                        </Form>
                    </Col>
            </Row>
           </div>
           <Modal isOpen={this.state.abierto}>
            <ModalHeader>
                Registro Exitoso
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label for="nombres">Nombres: </Label>
                    <Label for="nombreState">{this.state.nombres}</Label>
                </FormGroup>
                <FormGroup>
                    <Label for="nombres">Apellido: </Label>
                    <Label for="nombreState">{this.state.apellidos}</Label>
                </FormGroup>
                <FormGroup>
                    <Label for="nombres">Sexo: </Label>
                    <Label for="nombreState">{this.state.sexo}</Label>
                </FormGroup>
                <FormGroup>
                    <Label for="nombres">Dui: </Label>
                    <Label for="nombreState">{this.state.dui}</Label>
                </FormGroup>
                <FormGroup>
                    <Label for="nombres">Fecha: </Label>
                    <Label for="nombreState">{this.state.fecha}</Label>
                </FormGroup>
                <FormGroup>
                    <Label for="nombres">Nacionalidad: </Label>
                    <Label for="nombreState">{this.state.nacionalidad}</Label>
                </FormGroup>
                <FormGroup>
                    <Label for="nombres">Direccion: </Label>
                    <Label for="nombreState">{this.state.direccion}</Label>
                </FormGroup>
                <FormGroup>
                    <Label for="nombres">Municipio: </Label>
                    <Label for="nombreState">{this.state.municipio}</Label>
                </FormGroup>
                <FormGroup>
                    <Label for="nombres">Departamento: </Label>
                    <Label for="nombreState">{this.state.departamento}</Label>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color='secondary'  onClick={this.handleClick}>Cerrar</Button>
            </ModalFooter>
           </Modal>
           </>
        );
    }
}
