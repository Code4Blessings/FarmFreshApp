import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import "./MenuButton.css";
import {Link} from 'react-router-dom';
export default function MenuButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button className="btn-line" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
       Account
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      <Link to ='/'>
        <MenuItem onClick={() => localStorage.removeItem('token')} >Logout</MenuItem>
    </Link>
       
        
      </Menu>
    </div>
  );
}
