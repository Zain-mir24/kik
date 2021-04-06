const users=[];
//add the users
const addUsers=({id,name,room})=>{
    name=name.trim().tolowercase();
    room=room.trim().tolowercase();
    const existinguser = users.find((user)=> user.room===room && user.name===name
    )
    if(!user||!room){
        return{error:'Username and room both are required'}
    }
    if(existinguser){
        return{error:'sorry this user already exists in the room'}
    }
    const user={id,name,room}
    user.push(user)
    return {user}
}
//removing the user
const removeUsers;

const getUsers;
const getUsersinroom;