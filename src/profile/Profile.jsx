import './Profile.css';

export function Profile(props) {

    return <div>
        <h2>My name is: {props.fullName}</h2>
        <h3>My profession is: {props.profession}</h3>
        <p>Bio: {props.bio}</p>
        <div>{props.children}</div>
    </div>
} 

Profile.defaultProps = {
    fullName: "Mohamed Elwakeel",
    profession: 'lawyer',
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi provident, accusamus possimus sint odit vero officiis, magnam consectetur hic soluta odio, maxime ea. Velit natus ad asperiores, tempore labore dicta!"
};

Profile.propTypes = {
    fullName: Text,
    profession: Text,
    bio: Text
};

console.log(Profile.propTypes)