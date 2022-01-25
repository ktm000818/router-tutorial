import { useParams } from "react-router-dom";

const data = {
    group: {
        name: '김태민',
        description: '리액트를 좋아하는 개발자'
    },
    group2: {
        name: '김애민',
        description: '김태민의 친구'
    }
}

const Profile = () => {
    const params = useParams();
    const profile = data[params.username];

    return (
        <div>
            <h1>사용자 프로필</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
              </div>
            ):(
                <p>존재하지않는 프로필입니다.</p>
            )}
        </div>
    )

}

export default Profile;