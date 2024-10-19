

export default function Friend({friend_props}){
    const {name,email}=friend_props;
    return (
        <div className="box">
            <h2>Name: {name}</h2>
            <h3>Email: {email}</h3>
        </div>
    )

}