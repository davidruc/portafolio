import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { RecentWorksCard } from '../../../../components/recentWork_card/recentwork_card';
import { ActionButton } from '../../../../components/action_button/action_button';

const cardInfo = [
  { imageUrl: "https://cdn-icons-png.flaticon.com/512/10810/10810423.png", descript: "Personal WebSide", type: 1 },
  { imageUrl: "https://cdn-icons-png.flaticon.com/512/10810/10810423.png", descript: "Dynamic WebSide", type: 2 },
  { imageUrl: "https://cdn-icons-png.flaticon.com/512/10810/10810423.png", descript: "third element ", type: 2 },
  { imageUrl: "https://cdn-icons-png.flaticon.com/512/10810/10810423.png", descript: "third element ", type: 2 },
  { imageUrl: "https://cdn-icons-png.flaticon.com/512/10810/10810423.png", descript: "Personal WebSide", type: 1 },
  { imageUrl: "https://cdn-icons-png.flaticon.com/512/10810/10810423.png", descript: "Dynamic WebSide", type: 2 },
  { imageUrl: "https://cdn-icons-png.flaticon.com/512/10810/10810423.png", descript: "third element ", type: 2 },
  { imageUrl: "https://cdn-icons-png.flaticon.com/512/10810/10810423.png", descript: "Personal WebSide", type: 1 },
  { imageUrl: "https://cdn-icons-png.flaticon.com/512/10810/10810423.png", descript: "third element ", type: 2 },
  { imageUrl: "https://cdn-icons-png.flaticon.com/512/10810/10810423.png", descript: "third element ", type: 2 }, 
];

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
    <Box className="cont" sx={{ display: "flex", flexDirection: "column", marginX: { xs: 0, md: 10, lg: 15, xl: 24    }, justifyContent:"center" }}>
      <Box> 
        <StyledTabs value={value} onChange={handleChange}>
          <StyledTab  className="contentTabs" label="Everything" {...a11yProps(0)} />
          <StyledTab  className="contentTabs" label="Mobile Apps" {...a11yProps(1)} />
          <StyledTab  className="contentTabs" label="Static websides" {...a11yProps(2)} />
        </StyledTabs>
      </Box>
      <CustomTabPanel className="content" value={value} index={0}>
          <Box sx={{display: "flex", alignItems: "center", justifyContent: "center",flexDirection: {xs: "column", md: "row"},flexWrap:{xs: "nowrap" ,md:"wrap"} , gap: 4    }}>
              
              {cardInfo.slice(0, 6).map(
                (value) =>  
                  <RecentWorksCard
                    imageUrl={value.imageUrl}
                    descript={value.descript}
                  /> 
                )
              }
          </Box>
              <Box sx={{display: "flex", justifyContent: "center", marginTop: 4}}>
                  {cardInfo.length > 6 ? <ActionButton text={"Ver más"}/> : null}
              </Box>
      </CustomTabPanel>
      <CustomTabPanel className="content" value={value} index={1}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center",flexDirection: {xs: "column", md: "row"},flexWrap:{xs: "nowrap" ,md:"wrap"} ,gap: 4}}>
              { cardInfo.filter((value) => value.type === 2).slice(0, 6).map(
                (value)=>
                  <RecentWorksCard
                    imageUrl={value.imageUrl}
                    descript={value.descript}
                  /> 
              )
               }
          </Box>
          <Box sx={{display: "flex", justifyContent: "center", marginTop: 4}}>
                  {cardInfo.filter((value) => value.type === 2).length > 6 ? <ActionButton text={"Ver más"}/> : null}
          </Box>
      </CustomTabPanel>
      <CustomTabPanel className="content" value={value} index={2}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center",flexDirection: {xs: "column", md: "row"},flexWrap:{xs: "nowrap" ,md:"wrap"} ,gap: 4}}>
              { cardInfo.filter((value) => value.type === 1).slice(0, 6).map(
                (value)=>
                  <RecentWorksCard
                    imageUrl={value.imageUrl}
                    descript={value.descript}
                  /> 
              )
               }
          </Box>
          <Box sx={{display: "flex", justifyContent: "center", marginTop: 4}}>
                  {cardInfo.filter((value) => value.type === 1).length > 6 ? <ActionButton text={"Ver más"}/> : null}
          </Box>
      </CustomTabPanel>
   
      
      
    </Box>
  );
}

export {BasicTabs}






//? Estilos de las Tabs.

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