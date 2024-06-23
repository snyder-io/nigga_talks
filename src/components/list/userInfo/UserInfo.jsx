import './userInfo.css';

const UserInfo = () => {
    return (
        <div className="userInfo">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Demo_Name</h2>
            </div>
            <div className="icon">
                <img src="./more.png" alt="" />
                <img src="./video.png" alt="" />
                <img src="./edit.png" alt="" />
            </div>
        </div>
    )
}

export default UserInfo