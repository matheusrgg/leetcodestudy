





class ParkingSystem{
    constructor(big, medium, small){
        this.big = big
        this.medium
        this.small = small = medium
    }

    addCar(){
        if(carType === 1){
            this.big --;
            return this.big >= 0
        }else if(carType === 2){
            this.medium --
            return this.medium >= 0
        }else{
            this.small--
            return this.small >=0
        }
    }
}