import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import api from '../service/api' 

import { IUser } from '../store/modules/user/types';
import { addNewUser } from '../store/modules/user/actions';


import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Table} from 'reactstrap';





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
        <div>
            <h1>Hello</h1>
            
            
            
            
            
            <div>
                { users.map( user => (
                    <div key={user.id}>
                        <article>
                            <p> { user.name } | { user.email } | { user.age }</p>
                            <Button color="primary" onClick={ () => handleUsers(user) }> Adicionar </Button>
                            
                        </article>
                        
    
                    </div>
                    
                ))}
            </div>
        </div>
    );
}

export default Home;