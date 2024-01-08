import { Box, Button, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
export function EventCard({nome,descrizione,organizzatore,prezzo,startDate,endDate,img,luogo,categoria,emailOrganizzatore}){
    const navigate = useNavigate();
    return (
        <Stack
        spacing={1}
        style={{
          width: "15rem",
          padding: "0.5rem",
          wordWrap:'breakWord'
        }}
      >
        <img src={img} style={{  border: '1px solid #ddd', bordeRadius: '4px', padding: '5px', width: '14rem', height: '14rem' }}></img>
        <Typography component={'b'} variant="h6" >{nome}</Typography>
        <Typography variant="subtitle"><b>By:</b>{`   ${organizzatore}`}</Typography>
        <Typography variant="subtitle"><b>On:</b>{`  ${startDate } to ${endDate}`}</Typography>
        <Typography><b>Where:</b>{`  ${luogo} `}</Typography>
        <Typography><b>Category:</b>{`  ${categoria} `}</Typography>
       {/* <Typography component={'div'} variant="body1" sx ={{ textOverflow: 'ellipsis', overflow: 'hidden',
            whiteSpace: 'nowrap'}}>{descrizione}</Typography>
        */}
         {prezzo &&  <hr/> }
         {prezzo &&   <Typography  align="right" variant="body1"><b>Price:</b>{`   ${prezzo} `}</Typography>}
    {prezzo&& <Button onClick={()=>{navigate('/EventPage',{replace:true, state:{categoria,nome,luogo,descrizione,organizzatore,emailOrganizzatore,prezzo,startDate,endDate,img}})}}> Show More
                </Button>}
               
        </Stack>
    )
}