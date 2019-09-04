import React from 'react';
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button'

const styles = (theme) => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column'
    },
    banner: {
      display: 'flex',
      alignItems: 'center',
      flexShrink: '0',
      flexDirection: 'column',
      position: 'relative',
      width: '100%',
      backgroundColor: '#4E4E4E',
      height: '100vh'
    },
  }
};

class Login extends React.Component {

  render() {

    withStyles(styles);

    const { history } = this.props;
    let { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.banner}>
          <Button onClick={() => history.push("/")} variant="contained" color="primary">
            返回首页
          </Button>
          hello Login
        </div>
      </div>
    );
  }

}

export default withStyles(styles)(
  withRouter(Login)
);
