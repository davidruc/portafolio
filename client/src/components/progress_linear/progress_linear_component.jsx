import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./progress_linear_component.css"

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 100 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? "orange" : '#308fe8',
    },
  }));


function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginY: 1.4, gap: 1 }}>
      <Box sx={{ gap:12, display: 'flex' }}>
        <p className='progressDescription'>{props.text}</p>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
      <Box sx={{width: "300px"}}>
        <BorderLinearProgress color="warning" variant="determinate" {...props} />
      </Box>
    </Box>
  );
}


export default function LinearWithValueLabel(props) {
  const [progress, setProgress] = React.useState(0);
  const number = props.number
  const text = props.text
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => ( prevProgress >= number ? prevProgress : prevProgress + 1));
    }, 45);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box style={{ width: '100%' }}>
      <LinearProgressWithLabel value={progress} text={text} />
    </Box>
  );
} 