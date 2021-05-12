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
const removeUsers=(id)=>{
    const Index=users.findIndex((user)=>{
        user.id===id
    })
    if(Index!==-1){
        return users.splice(Index,1)[0]
    }
};
//finding the users
const getUsers =(id)=>users.findIndex((user)=>{user.id===id});
//adding them in the room
const getusersinroom = (room) => {
    room =room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}
module.exports={addUsers,removeUsers,getUsers,getUsers,getusersinroom}