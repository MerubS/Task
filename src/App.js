import logo from './logo.svg';
import { mainListItems } from './listitem';
import pic from './Images/summer.png';
import { Box } from '@mui/system';
import { Grid, Input, InputLabel, Typography } from '@mui/material';
import {FormControl , InputAdornment} from '@mui/material';
import Currencybox from './currency';
import Button from '@mui/material/Button';
import NightlightRoundedIcon from '@mui/icons-material/NightlightRounded';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import Balance from './balance';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { AccountCircle } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import './App.css';

function App() {
  return (
    <Grid container>
 <Grid container style={{background:'#FFFAF1', justifyContent:'space-between'}}> 
 <Box sx={{ display: 'flex', alignItems: 'flex-end' , padding:'5px'}}>
        <SearchRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField label="Search" variant="standard" />
      </Box>
      <Box style={{padding:'15px'}}>
<NightlightRoundedIcon/>
<ColorLensRoundedIcon/>
<NotificationsRoundedIcon/>
<Typography style={{display:'inline-block',padding:'5px'}}> Albert Flores</Typography>
      </Box>
    </Grid>
    <Grid container>
      <Typography style={{padding:'15px', fontWeight:'bold'}}> Dashboard </Typography>
    </Grid>
    <Grid container style={{padding:'5px'}}>
    <Grid item>
<Box style={{width:'15rem' , height:'6rem', background:'green', marginRight:'10px'}}>
<Box style={{display:'inline-block', padding:'10px', paddingTop:'30px'}}>
<Typography> Open new account </Typography>
</Box>
<Box style={{display:'inline-block'}}>
<Button variant="contained" style={{background:'white', color:'black', borderRadius:'100px'}}> Now </Button>
</Box>
</Box>
    </Grid>
    <Grid item>
      <Box style={{background:'#FFFAF1', boxshadow: '10px'}}>
      <Currencybox name={'Dollars'} num={'17263'} color={'pink'}></Currencybox>
<Currencybox name={'Euro'} num={'17263'} color={'cyan'}></Currencybox>
<Currencybox name={'INR'} num={'17263'} color={'purple'}></Currencybox>
      </Box>

    </Grid>
    </Grid>
    <Grid container style={{ marginTop:'5px',padding:'5px'}}>
      <Grid item >
        <Box style={{padding:'15px', display:'inline-block'}}>
        <img src={pic} alt="react logo" style={{width:'70px' , height:'70px'}} />
        </Box>
      <Box style={{padding:'10px' , display:'inline-block'}}>
        <Typography> Good Evening </Typography>
        <Typography style={{fontWeight:'bold'}}> Mr. John Wick </Typography>
        <Typography style={{fontSize:'12px'}}> Welcome to WA-One </Typography>
        </Box>
      </Grid>
      <Grid item >
      <Balance heading={'Current Balance'} num={'$34,567'}></Balance>
      <Balance heading={'Credit'} num={'$3,456'}> </Balance>
      <Balance heading={'Debit'} num={'$3,234'}></Balance>
      </Grid>
    </Grid>
    </Grid>
   
  );
}

export default App;
