import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';



const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const CardInfo = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
  return (
    <Card xs={12} md={5} sx={{ m:1,maxWidth: 345 }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
          <TrendingUpIcon />
        </Avatar>
      }
   
      title="Ingresos"
      subheader="ultima semana"
    />
    <CardMedia
      component="img"
      height="194"
      image="/static/images/cards/paella.jpg"
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
     INGRESOS
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>Semanales:</Typography>
        <Typography paragraph>
          Ingresos
        </Typography>
        <Typography paragraph>
        </Typography>
      </CardContent>
    </Collapse>
  </Card>
  )
}

export default CardInfo
