const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function addUser(users, newUser) {
    if (users.some(user => user.id === newUser.id)) {
        return "User already present";
    }

    if (!emailPattern.test(newUser.email)) {
        return "Invalid email";
    }

    if (newUser.age < 18) {
        return "Age must be at least 18";
    }

    if (typeof newUser.isLoggedIn !== "boolean") {
        return "Invalid isLoggedIn type";
    }

    return [...users, newUser];
}

function removeUser(users, id) {
    if (!users.some(user => user.id === id)) {
        return "User not found";
    }

    return users.filter(user => user.id !== id);
}

function getLoggedInUsers(users) {
    return users
        .filter(user => user.isLoggedIn)
        .map(user => user.username);
}

function getUserStats(users) {
    const totalUsers = users.length;

    const loggedInUsers = users.reduce(
        (count, user) => count + (user.isLoggedIn ? 1 : 0),
        0
    );

    const totalAge = users.reduce(
        (sum, user) => sum + user.age,
        0
    );

    const averageAge = totalUsers === 0 ? 0 : totalAge / totalUsers;

    return {
        totalUsers,
        loggedInUsers,
        averageAge
    };
}

function canAccessDashboard(user) {
    return user.age >= 18 && user.isLoggedIn;
}
