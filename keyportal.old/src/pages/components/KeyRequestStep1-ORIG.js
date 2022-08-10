import WizardButtons from './WizardButtons';
import '../../WizardButtons.css';

import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
//import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
//import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
//import FavoriteIcon from '@mui/icons-material/Favorite';
//import ShareIcon from '@mui/icons-material/Share';
//import MoreVertIcon from '@mui/icons-material/MoreVert';

//import React, { useState, useEffect } from 'react';
import axios from 'axios';


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

const KeyRequestStep1 = () => {
    const baseURL = '/api/rooms.json';
    const [rooms, setRooms] = React.useState({});

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    React.useEffect(() => {
        axios
            .get(baseURL,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
            .then((res) => {
                setRooms(() => res.data);
                console.log(res.data);
                //setIsLoading(false);
                //filteredData(() => res.data);
                //getKeysList(() => res.data);
                //getKeysList(res.data));
            })
            .catch((error) => {
                console.log(error.res);
                //console.log('Reject');
                //console.log(Promise.reject);
            });


    }, []);



    return (
        <div>

            <ul class="wizard">
                <li class="inprogress">
                    <h4>Step 1</h4>
                                Request Access<br />In progress
                        </li>
                <li>
                    <h4>Step 2</h4>
                                Keyholder
                        </li>
            </ul>


            <div class="row">
                <div className="col-12 col-md-12">

                    <div class="float-start p-1">
                        <Card sx={{ maxWidth: 345 }}>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    AAAA
          </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    Submaster
          </Typography>
                            </CardContent>

                            <CardActions disableSpacing>
                                <Button size="small">Select this Key</Button>
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
                                    <Typography paragraph>Opens Rooms:</Typography>
                                    <Typography paragraph>
                                        W121 Turner Hall<br />
                                                W223 Turner Hall<br />
                                                M5 Turner Hall<br />
                                                W115 Turner Hall
                                            </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </div>

                    <div class="float-start p-1">
                        <Card sx={{ maxWidth: 345 }}>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    AAAA
          </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    Submaster
          </Typography>
                            </CardContent>

                            <CardActions disableSpacing>
                                <Button size="small">Select this Key</Button>
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
                                    <Typography paragraph>Opens Rooms:</Typography>
                                    <Typography paragraph>
                                        W121 Turner Hall<br />
                                                W223 Turner Hall<br />
                                                M5 Turner Hall<br />
                                                W115 Turner Hall
                                            </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>

                    </div>
                    <div class="float-start p-1">
                        <div class="card" style={{ width: '18rem;' }}>
                            <div class="card-body">
                                <h5 class="card-title">AAAA</h5>
                                <h6>sub-master</h6>
                                <p class="card-text">Opens Rooms<br />
                            W121 Turner Hall<br />
                            W223 Turner Hall</p>
                                <button type="button" class="btn btn-outline-success m-3">Select this Key</button>
                            </div>
                        </div>
                    </div>
                    <div class="float-start p-1">
                        <div class="card" style={{ width: '18rem;' }}>
                            <div class="card-body">
                                <h5 class="card-title">AAAA</h5>
                                <h6>sub-master</h6>
                                <p class="card-text">Opens Rooms<br />
                            W121 Turner Hall<br />
                            W223 Turner Hall</p>
                                <button type="button" class="btn btn-outline-success m-3">Select this Key</button>
                            </div>
                        </div>
                    </div>
                    <div class="clearfix">&nbsp;</div>


                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Select Keys from All Buildings</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <div class="form-group col-md-7">
                                    <label for="building">Building</label>
                                    <select class="form-control">
                                        {
                                            /*  rooms.map((room) => (
                                                  <option value={room.buildingId}>{room.buildingName}</option>
                                              ))*/
                                        }
                                    </select>
                                </div>
                                <div class="form-group col-md-3"><label for="room">Room</label> <select name="roomSelect" class="form-control"><option selected="selected" value=""></option> </select></div>
                                <div class="form-group col-md-2"><label>&nbsp;</label> <br /> <button type="button" disabled="disabled" class="btn btn btn-outline-success">Add</button></div>

                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <div class="clearfix">&nbsp;</div>
                    <WizardButtons previous='true' submit='disabled' next='false' />


                </div>
            </div>
        </div>
    )
}

export default KeyRequestStep1;