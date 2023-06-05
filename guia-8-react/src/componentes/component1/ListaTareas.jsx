import React,{useState}from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const ListaTareas = () => {
 
    const [elementos,setElementos] = useState([]);
    const [nuevoElemento,setNuevoElemento]=useState("");

    const agregarElemento = ()=>{
        if (nuevoElemento.trim()) {
            
        }
    }
}

export default ListaTareas
