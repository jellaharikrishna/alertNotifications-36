import {Component} from 'react'
import './index.css'

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="alert-heading">Alert Notifications</h1>

        <Notification>
          <div className="icon-content-container">
            <AiFillCheckCircle className="success icon" />
            <div className="content-card">
              <h1 className="success heading">Success</h1>
              <p className="description">
                You can access all the files in the folder
              </p>
            </div>
          </div>
        </Notification>

        <Notification>
          <div className="icon-content-container">
            <RiErrorWarningFill className="error icon" />
            <div className="content-card">
              <h1 className="error heading">Error</h1>
              <p className="description">
                Sorry, you are not authorized to have access to delete the file
              </p>
            </div>
          </div>
        </Notification>

        <Notification>
          <div className="icon-content-container">
            <MdWarning className="warning icon" />
            <div className="content-card">
              <h1 className="warning heading">Warning</h1>
              <p className="description">
                Viewers of this file can see comments and suggestions
              </p>
            </div>
          </div>
        </Notification>

        <Notification>
          <div className="icon-content-container">
            <MdInfo className="info icon" />
            <div className="content-card">
              <h1 className="info heading">Info</h1>
              <p className="description">
                Anyone on the internet can view these files.
              </p>
            </div>
          </div>
        </Notification>
      </div>
    )
  }
}

export default AlertNotifications
