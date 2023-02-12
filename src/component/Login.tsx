import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });

    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const { name, phone, email } = formValues;

        if (name && phone && email) {
            navigate('/data');
            localStorage.setItem('data', JSON.stringify(formValues));
        }
        else {
            navigate('/');
            setError(true);
        }

    }

    const paperStyle = { padding: '20px', height: '67vh', width: '400px', margin: '40px auto' }
    return (
        <Box>

            <Paper elevation={10} style={paperStyle}>

                <Typography sx={{ margin: '20px 0px' }} variant='h4'>Fillup The form to Enter Next Page</Typography>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', rowGap: '15px' }}>

                    <Box>
                        <TextField
                            name='name'
                            type='text'
                            label="Name"
                            variant="standard"
                            fullWidth
                            onChange={handleChange}
                        />
                    </Box>
                    <Box>
                        <TextField
                            name='phone'
                            type='tel'
                            label="Phone"
                            variant="standard"
                            fullWidth
                            onChange={handleChange}
                        />
                    </Box>
                    <Box>
                        <TextField
                            name='email'
                            type='email'
                            label="Email"
                            variant="standard"
                            fullWidth
                            onChange={handleChange}
                        />
                    </Box>
                    {error && <Typography align='center' color='red' variant='inherit'>Please Fill the form to enter the next page</Typography>}
                    <Button type='submit' variant='contained' fullWidth>Submit</Button>

                </form>
            </Paper>
        </Box>
    )
}

export default Login;


