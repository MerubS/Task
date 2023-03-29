import { Typography } from "@mui/material";
import {Box} from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { fontWeight } from "@mui/system";

function Currencybox (props) {
return (
    <Box style={{width:'15rem' , height:'5rem', background:props.color, alignitems:'center', display:'inline-block' , margin:'10px'}}>
       <Box style={{display:'inline-block',padding:'10px'}}>
       <AttachMoneyIcon/>
        </Box> 
        <Box style={{display:'inline-block', paddingTop:'10px'}}>
        <Typography style={{fontWeight:'bold'}}> {props.name} </Typography>
        <Typography> {props.num} </Typography>
        </Box>
    </Box>
);
}


export default Currencybox