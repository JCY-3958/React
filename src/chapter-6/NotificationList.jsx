import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
  {
    id: 1,
    message: "안녕하세요, 오늘도 리액트 할겁니다.",
  },
  {
    id: 2,
    message: "배고프다.",
  },
  {
    id: 3,
    message: "이제 곧 주말이당.",
  },
  {
    id: 4,
    message: "꺄아ㅏ앙아아앙앙아",
  },
];

var timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
        this.setState({
          notifications: notifications,
        });
      } else {
        this.setState({
          notifications: [],
        });
        clearInterval(timer);
      }
    }, 1000);
  }

  componentWillUnmount() {
    if (timer) {
      clearInterval(timer);
    }
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              id={notification.id}
              message={notification.message}
            />
          );
        })}
      </div>
    );
  }
}

export default NotificationList;