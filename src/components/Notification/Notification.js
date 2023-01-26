import PropTypes from 'prop-types'
import { NotificationMessage } from "components/Notification/Notification.styled";

const Notification = ({message}) =><NotificationMessage>{message}</NotificationMessage>;

export default Notification;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
  }