const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let users = []
function add_user(username, email, logged_in){
    if(typeof username === 'string' && emailPattern.test(email) && typeof logged_in === 'boolean'){
        const userExists = users.some(user => user.username === username);
        if (userExists) {
            console.log("User already present");
            return;
        }
        let new_user = {
            'username' : username,
            'email' : email,
            'loggedIn' : logged_in
        }
        users.push(new_user)
    }
    else {
        console.log(`username and email should be valid`)
    }
}

function remove_user(username){
    if(users.length == 0){
        console.log('No users found')
        return;
    }
    if(typeof username === 'string'){
        for(let i = 0; i < users.length; i++){
            if(users[i].username == username){
                users.splice(i, 1)
                return 
            }
        }
        console.log('User not found')
    }
    else{
        console.log('username should be valid')
    }
}

function logged_in_user(){
    let loggedInUser = []
    for(let i = 0 ; i < users.length; i++){
        if(users[i].loggedIn){
            loggedInUser.push(users[i].username)
        }
    }
    return loggedInUser
}