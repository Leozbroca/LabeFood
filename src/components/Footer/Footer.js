import React from 'react';
import {useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import {goToProfile, goToHome, goToCart} from '../../router/coordinator'
import GlobalStateContext from "../../globalContext/GlobalStateContext";
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';



const useStyles = makeStyles({
  root: props => ({
    width: '100%',
    height:'60px' ,
    position:'fixed',
    boxShadow:'5px 5px 15px gray',
    bottom:0, 
    zIndex: 1,
    '& button': {
      // color: `#5cb646`,
      paddingBottom:'15px',
    }
  }),
  home: props => ({
    color:props.colorHome,
  }),
  cart: props => ({
    color:props.colorCart,
  }),
  profile: props => ({
    color:props.colorProfile,
  }),
});

export default function LabelBottomNavigation() {
  const {colors} = useContext(GlobalStateContext)
  const navigate = useNavigate()
  const [value, setValue] = React.useState('recents');
  const props = {colorHome: colors.colorHome, colorCart: colors.colorCart, colorProfile: colors.colorProfile};
  const classes = useStyles(props);
  
  return (
    
    <BottomNavigation value={value} className={classes.root}>
      <BottomNavigationAction className={classes.home} onClick={() => goToHome(navigate)} value="home" icon={<HomeOutlinedIcon fontSize='large'/>} />
      <BottomNavigationAction className={classes.cart} onClick={() => goToCart(navigate)} value="cart" icon={<ShoppingCartOutlinedIcon fontSize='large'/>} />
      <BottomNavigationAction className={classes.profile} onClick={() => goToProfile(navigate)} value="profile" icon={<PersonOutlineOutlinedIcon fontSize='large'/>} />
    </BottomNavigation>
    
);
}