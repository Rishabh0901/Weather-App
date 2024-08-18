import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function InfoBox({ info }) {
    
    const INIT_URL = 
    "https://lh3.googleusercontent.com/gg/AJIvXiulErFyx_pDpX-ba_KLC42ontYOZaGn55amX-pzrLBJ9Tl9WH_Ycg4KNTRdi0C5AIEkSX56jPTKq9-smc42fBBveOYJF9ZdbGXaFTh0rY_vW9PLpvba-SgeuJJJB7n-QYZI_-DNslBc9b9StYsMDzCBOqLdFG3Yn_2LtPOz0lVd5dBMD6mz";

    const HOT_URL = 
    "https://lh3.googleusercontent.com/gg/AJIvXitpaNef4agv_I4oKBRzsqUAAyak6h9mXgnExCQ8Uy-kQ9PPEHFd5pttMiaEc2vMdKTC1VLAVKxE5ZYWbIjuUbLrbKqn4IyS03GFgNwgG6CUurqGVVhoku3rIXp2s3Th319XC_yMr7bgqaijR16fctp7mVO5p-57VAt2IM2pMMVavWpt7bA";
    const COLD_URL = 
    "https://lh3.googleusercontent.com/gg/AJIvXiuzGPVAwKyM0StypErERV3txB-aHFoHguvQjWdqqkiK8lPePxxT8R5ABrtQcBCoZXYKkjXWEg4n-ohjJA00GCIPEWE2seQ3EunoOV7R32U88Winn0GGFwrTcasI3HRFfdBapXfwTObk2sXXoqpKoC0KG2kTgpJjdAieWhp6uhmUHZuF1cn0";
    const RAIN_URL = 
    "https://lh3.googleusercontent.com/gg/AJIvXisgDT5FQCavA0xjk_sjy6JG90AKccMZPFlfZn-7xOtvIY1f55v4dWFp-40wjqppAeRkppae_VLTAWkzpkevd7KjeXnW4kO8h0vnFyiO763XWszddsiXEYCb7cicCIk3x021pg8Gq71bSJr4hnkdFG4Lrkrxtt-Ew5sIpZ1d4TXePPRLSjcv";
    return (
        <div className="InfoBox">
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city } {
            info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <p>Temperature = {info.temp}&deg;C</p>
        <p>Humidity = {info.humidity}</p>
        <p>Min Temp = {info.temp}</p>
        <p>Max Temp= {info.temp}</p>
        <p>
        The weather can be described as <i><b>{info.weather}</b></i> and feels like <i>{info.feelslike}&deg;C</i></p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    );
}

export default InfoBox;