import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import styles from './styles.module.scss';

const FilterProperties  = ()=>{

    return (<div className="ml-1">
       
     <div className="row pt-2">
    <div className="col-md-3">
    <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Control as="select" custom>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
    </div>
    <div className="col-md-4">
    <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Control as="select" custom>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
    </div>
    <div className="col-md-3">
    <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Control as="select" custom>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
    </div>
    <div className="col-md-2">
    <Button as="input" type="submit" value="Submit" />{' '}

    </div>
     </div>
    <div className="row pr-2">
     <div className="col-md-4">
    <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Control as="select" custom>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
    </div>
     <div className="col-md-4">
    <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Control as="select" custom>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
    </div>
     <div className="col-md-4">
    <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Control as="select" custom>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
    </div>
    
    </div>
    </div>)
}

export default FilterProperties;