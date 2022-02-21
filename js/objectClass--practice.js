/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */


class Computer{
    constructor(
        //define parameters:
        user,
        size,
        os,
        color,
        user1Name,
        user2Name,
        isOn,
        batteryPercentage,
        dateAcquired
    ) {
        //define properties:
        this.user = user;
        this.size = size;
        this.os = os;
        this.color = color;
        this.users = {
            user1Name: user1Name,
            user2Name: user2Name
        }
        this.batteryPercentage = batteryPercentage;
        this.dateAcquired = dateAcquired;
    }
    //add methods like normal function
    usersInComputer(user1, user2){
        this.users.user1Name = user1;
        this.users.user2Name = user2;
    }
    //new method using a global object from MDN
    computerAge(){
        let now = new Date();
        let acquired = new Date(this.dateAcquired);
        let elapsed = now - acquired; //elapsed time in seconds
        let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
        return daysSinceAcquired;
    }
    isOn(status){
        if(status){
            return true;
        } return false;
    }
}

export default Computer;