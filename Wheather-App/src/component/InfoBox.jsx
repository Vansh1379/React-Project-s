import "./InfoBox.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function InfoBox({ info }) {
    const Img_address = "https://images.unsplash.com/photo-1693711836001-99859bb7185a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 500 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={Img_address}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Wheather :- {info.weather}</p>
                            <p>Temperature :- {info.temp}&deg;C</p>
                            <p>Humidity :- {info.humidity}</p>
                            <p>Maximum-Temperature :- {info.tempMax}&deg;C</p>
                            <p>Minimum-Temprature :- {info.tempMin}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );

}