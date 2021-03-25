import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import api from '../service/api' 

import { IUser } from '../store/modules/user/types';
import { addNewUser } from '../store/modules/user/actions';


import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Table, Container, Row, Col} from 'reactstrap';





const Home: React.FC = () => {
    const dispatch = useDispatch()
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        api.get('students').then(
            response => {
                setUsers(response.data)
            }
        )
    }, [])




        const handleUsers = useCallback( ( user: IUser  ) => {
        dispatch((addNewUser(user)))
    }, [dispatch]) 

    return (
        <Container><Row>
        
        
        <div>
            <h1>Hello</h1>
            </div>
            </Row>



            <Row>


            <div>
            <Table striped>    
            <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>idade</th>
          <th></th>
        </tr>
      </thead>       
            <tbody>
                { users.map( user => (
                    <tr key={user.id}>
                            <td> { user.id}</td>
                            <td> { user.name }</td> 
                            <td> { user.email }</td> 
                            <td> { user.age }</td>
                            <td><Button color="primary" onClick={ () => handleUsers(user) }> Adicionar </Button></td>
                            
                        
                        
    
                    </tr>
                    
                ))}
            </tbody></Table></div>
         </Row></Container>
    );
}

export default Home;