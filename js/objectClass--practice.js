class computer{
    constructor(
        //define parameters:
        user,
        size,
        os,
        color,
        user1Name,
        user2Name,
        isOn,
        batteryPercentage
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
        this.isOn = isOn;
        this.batteryPercentage = batteryPercentage;
    }
    //add methods like normal function
    turnComputerOn(on){
        this.batteryPercentage = on;
    }
    usersInComputer(user1, user2){
        this.users.user1Name = user1;
        this.users.user2Name = user2;
    }
}