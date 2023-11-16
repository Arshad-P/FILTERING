import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NavSearchBar from './NavSearchBar/NavSearchBar';
import Products from './Products/Products';
import Recommend from './Recommended/Recommend';
import Sidebar from './Sidebar/SidebarGlobal';
import { useState } from 'react';



// database-Api
import ProductsDataBase from './database/data'
import CardProduct from './Components/CardProduct'




const drawerWidth = 160;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);



//Below Product Funtionalities part started of Apllicaion.

// Function 
export default function MiniDrawer() {

  const [selectedCategory, setSelectedCategory ] = useState(null);
  const [query,setQuery] = useState('')

// input Filtering ----------
const handleInputChange = event =>{
  setQuery(event.target.value)
}
   
const FilteredItems = ProductsDataBase.filter(Product => Product.title.toLowerCase().indexOf(query.toLowerCase())!== -1
);


 // Radio Filtering ----------
const handleChange = event => {

  setSelectedCategory(event.target.value)
}


// Buttons Filtering ----------
const handleClick = event =>{

  setSelectedCategory(event.target.value)
}
function filteredData(ProductsDataBase,selected, query ){
  let filteredProductss = ProductsDataBase

  // filtering input items 
  if (query){

    filteredProductss = FilteredItems
  }
// selected filter
if(selected){

  filteredProductss = filteredProductss.filter(({

    category, color, company, newPrice, title
  }) => 
  category === selected || 
  color === selected || 
  company === selected || 
  newPrice === selected || 
  title === selected
  );
}

return filteredProductss.map(({img,title,star,reviews,newPrice, prevPrice})=>(

  <CardProduct
  key={Math.random()}
  img={img}
  title={title}
  star={star}
  reviews={reviews}
  newPrice={newPrice}
  prevPrice={prevPrice}
/>
))
}

const result = filteredData(ProductsDataBase, selectedCategory, query)

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <NavSearchBar query={query} handleInputChange ={handleInputChange}/>
       

        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>



        <Sidebar handleChange={handleChange}/>



        <Divider />
        {/* <List>
         1
       
        </List> */}
        <Divider />
        {/* <List>
        2 Price
        </List>
        <List>
        3 Color
        </List> */}
      </Drawer>

      <Box>
        <DrawerHeader />

  
        <Recommend handleClick={handleClick}/>
      
        <Products result = {result}/>



      </Box>
    </Box>
  );
}