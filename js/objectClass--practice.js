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
}