import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';


const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 100
    },
    {
        field: 'title',
        headerName: 'Title',
        width: 500,
    },
    {
        field: 'body',
        headerName: 'Body',
        width: 700,
    }
];



const Data = () => {

    const [userData, setUserData] = useState([]);

    const url = "https://jsonplaceholder.typicode.com/posts";
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setUserData(data))
            .catch(err => console.log(err))
    }, [])


    return (
        <Box sx={{ height: 700, width: '90%', marginX: 'auto' }}>
            <DataGrid
                rows={userData}
                columns={columns}
            />
        </Box>
    );
}


export default Data;