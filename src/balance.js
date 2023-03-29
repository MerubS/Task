import { Typography } from "@mui/material";
import {Box} from "@mui/material";
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';
import { Grid } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { fontWeight } from "@mui/system";

function Balance (props) {
return (
    <Box style={{width:'20rem' , height:'7rem', background:'#FFFAF1', alignitems:'center', display:'inline-block' , margin:'10px'}}> 
        <Box style={{display:'inline-block', paddingTop:'5px', padding:'5px'}}>
        <Typography style={{fontSize:'12px'}}> {props.heading} </Typography>
        <Typography style={{fontSize:'15px', fontweight:'bold'}}> {props.num} </Typography>
        </Box>
        <Grid container style={{display:'flexbox' , alignItems:'end'}}>
            <Box></Box>
        <Box style={{padding:'10px', width:'20rem', display:'flex'}}>
       <BarChartRoundedIcon/>
       <EqualizerRoundedIcon/>
        </Box>
        </Grid>
        
    </Box>
);
}


export default Balance