// Notification 을 목록 형태로 보여주기 위한 코드
import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        message: "점심식사 시간입니다.",
    },
    {
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        //빈 배열을 state에 넣음
        this.state = {
            notification: [],
        };
    }

    componentDidMount() {
        const { notification } = this.state;
        timer = setInterval(() => {
            if(notification.length < reservedNotifications.length) {
                const index = notification.length;
                notification.push(reservedNotifications[index]);
                //state를 업데이트 하기 위해서는 setState 사용해야함
                this.setState({
                    notification: notification,
                });
            } else {
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.notification.map((notification) => {
                    return <Notification 
                        key={notification.id}
                        id={notification.id}
                        message = {notification.message} />;
                })}
            </div>
        );
    }
}

export default NotificationList;
