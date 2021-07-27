import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SvgIcon from './SvgIcon';
import './App.css';
import {
  Container,
  AppBar, Toolbar, IconButton, Button, Typography,
  FormControl, FormLabel, RadioGroup, FormControlLabel, Radio,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
  Avatar, Box,
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { makeStyles } from '@material-ui/core/styles';

import thermometer from './thermometer';
import inmoment from './inmoment';
import nicereply from './nicereply';

const IS_XHR = true;

function App() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [templete, setTemplete] = useState("1");

  const handleModalToggle = () => {
    if (open === true) {
      setIsDone(false);
    }
    setOpen(!open)
  };

  const handleSurvey = score => {
    const surveyUser = 'test_user' + Date.now();
    const surveyId = 'NPS-feba3919';
    const surveyFirstUrl = `https://app.wootric.com/email_survey/${surveyId}/${surveyUser}/${score}?survey_template_id=58038&survey_settings[language]=ko`;


    if (templete === "4") {
      window.open(surveyFirstUrl);
    } else {
      axios(surveyFirstUrl).then(response => {
        let regResult = response.data.match(/survey: ({[\n\r\w\d\s"-}]*?})/);
        let info = null;
        (function () {
          eval(`info = ${regResult[1]};`); //! eval = evil...?
        })();

        axios(`https://app.wootric.com/responses`, {
          params: {
            'survey[id]': info.id,
            'survey[unique_link]': info.unique_link,
            'survey[channel]': 'email:template',
            'response[score]': score,
            'response[text]': '설문 응답 텍스트',
            'response[origin_url]': surveyFirstUrl,
            'end_user[email]': surveyUser,
            'account_id': '25805',
            'account_token': '',
            'priority': '1',
            '_method': 'POST',
            'event_name': 'send-feedback',
          }
        }).then(response => {
          setIsDone(true);
          console.log(response);
        });
      })
    }
  };


  return (
    <div className="App">
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton edge="start" className="menu-button" color="inherit" aria-label="menu">
            <ArrowBackIosIcon />My Pies
          </IconButton>
          <Typography variant="h6" className="title">
            Someting_pie_file
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Container className={classes.contentWrap} >
        <FormControl component="fieldset">
          <FormLabel component="legend">솔루션/템플릿 선택</FormLabel>
          <RadioGroup value={templete} onChange={e => setTemplete(e.target.value)}>
            <FormControlLabel value="1" control={<Radio />} label="inmoment" checked={templete === "1"} />
            <FormControlLabel value="2" control={<Radio />} label="thermometer" />
            <FormControlLabel value="3" control={<Radio />} label="nicereply" />
            <FormControlLabel value="4" control={<Radio />} label="custom - (inmoment 새 창 - 기본 동작)" />
            <FormControlLabel value="5" control={<Radio />} label="custom - (inmoment score만 전송)" />
          </RadioGroup>
        </FormControl>
        <Button variant="contained" color="primary" onClick={handleModalToggle}>SHARE</Button>
      </Container>

      <Dialog
        open={open}
        onClose={handleModalToggle}
      >

        {templete === "1" && <span className={classes.tpl} dangerouslySetInnerHTML={{ __html: inmoment }} />}
        {templete === "2" && <span className={classes.tpl} dangerouslySetInnerHTML={{ __html: thermometer }} />}
        {templete === "3" && <span className={classes.tpl} dangerouslySetInnerHTML={{ __html: nicereply }} />}

        {(templete === "4" || templete === "5") && <React.Fragment>
          <DialogTitle id="alert-dialog-title">{"공유 기능은 어떠셨나요?"}</DialogTitle>
          <DialogContent className={classes.surveyContent}>
            {isDone ?
              <Box>
                의견을 주셔서 감사합니다!
              </Box> :
              <React.Fragment>
                <DialogContentText id="alert-dialog-description" className="survey-text">
                  동료에게 추천할 의향이 있으신가요?
                </DialogContentText>
                <Box className="survey-emoji">
                  {/* 0~6 = DETRACTORS, 7~8 = PASSIVES, 9~10 = PROMOTERS */}
                  <Avatar onClick={handleSurvey.bind(this, 1)} ><SvgIcon name="emoji-5" /></Avatar>
                  <Avatar onClick={handleSurvey.bind(this, 3)} ><SvgIcon name="emoji-4" /></Avatar>
                  <Avatar onClick={handleSurvey.bind(this, 5)} ><SvgIcon name="emoji-3" /></Avatar>
                  <Avatar onClick={handleSurvey.bind(this, 7)} ><SvgIcon name="emoji-2" /></Avatar>
                  <Avatar onClick={handleSurvey.bind(this, 9)} ><SvgIcon name="emoji-1" /></Avatar>
                </Box>
              </React.Fragment>
            }
          </DialogContent>
        </React.Fragment>}
        <DialogActions>
          <Button onClick={handleModalToggle} color="primary">그만 두기</Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    color: '#000000',
    '& .menu-button': {
      marginRight: theme.spacing(2),
    },
    '& .title': {
      flexGrow: 1,
    },
  },
  contentWrap: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    marginTop: '30px',
  },
  tpl: {
    padding: theme.spacing(2)
  },
  surveyContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',

    '& .survey-text': {
      marginBottom: theme.spacing(2)
    },
    '& .survey-emoji': {
      display: 'flex',
      '& .MuiAvatar-root': {
        margin: theme.spacing(0, 1),
        cursor: 'pointer',
      }
    }
  }
}));

export default App;
