import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#635ee7',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: '#024959',
    '&.Mui-selected': {
      color: '#EC1C24',
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#EC1C24',
    },
  }),
);


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="cont" sx={{ width: "100%",display: "flex", flexDirection: "column", marginLeft: { xs: 0, md: 10, lg: 30, xl: 60 }, justifyContent: { xs: "center", md: "flex-start" },  }}>
      <Box>
        <StyledTabs value={value} onChange={handleChange}>
          <StyledTab  className="contentTabs" label="Everything" {...a11yProps(0)} />
          <StyledTab  className="contentTabs" label="Mobile Apps" {...a11yProps(1)} />
          <StyledTab  className="contentTabs" label="Static websides" {...a11yProps(2)} />
        </StyledTabs>
      </Box>
      <CustomTabPanel className="content" value={value} index={0}>
        <h1>Hey hey hey :D</h1>
        <p>Text random</p>

      </CustomTabPanel>
      <CustomTabPanel className="content" value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel className="content" value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}

export {BasicTabs}