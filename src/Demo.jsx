import {
  addNotification,
  removeNotification
} from "../Actions/notificationActions";
import React from "react";
import { connect } from "react-redux";
import { Button, TextField } from "@material-ui/core";

import Notification from "../Components/Notification.jsx";

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.showNotification = this.showNotification.bind(this);
  }
  state = {
    message: "I'm a notification :-)"
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  showNotification = notification => {
    console.log("Show Note clicked");

    this.props.onAddNotification({
      id: Date.now(),
      message: notification.message,
      open: true
    });
  };
  render() {
    return (
      <React.Fragment>
        <form noValidate autoComplete="off">
          <TextField
            id="message"
            label="Message"
            value={this.state.message}
            onChange={this.handleChange("message")}
            margin="normal"
          />
        </form>
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            this.showNotification({
              message: this.state.message
            })
          }
        >
          Show Notification
        </Button>
        <Notification />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({});

const mapActionsToProps = {
  onAddNotification: addNotification,
  onRemoveNotification: removeNotification
};

export default connect(mapStateToProps, mapActionsToProps)(Demo);