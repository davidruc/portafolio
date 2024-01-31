import React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function TemporaryDrawer({ icon, content, onClose }) {
  const [state, setState] = React.useState({ right: false });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, right: open });
  };

  return (
    <React.Fragment>
      <Button onClick={toggleDrawer(true)}>
        {icon}
      </Button>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer(false)}
      >
        <Box sx={{
          width: "180px", 
          padding: '20px',
          
        }}
        onClick= {toggleDrawer(false)}>
          {content}
        </Box>
      </Drawer>
    </React.Fragment>
  );
}
