
let dateTimeNow = new Date();

dateTimeNow.getTime();

class timer {
    constructor(startDate, elementID) {
        this.elementID = elementID;

        this.startDate = new Date(startDate);
        this.minutes = 0;
        this.hours = 0;
        this.days = 0;
        this.months = 0;
        this.years = 0;

        // this.update();
        // setInterval(this.update.bind(this), 1000);
    }

    update (){
        dateTimeNow = Date.now();

        this.seconds = Math.floor(( dateTimeNow - this.startDate.getTime()) / 1000 );
        this.minutes = 0;
        this.hours = 0;
        this.days = 0;
        this.months = 0;
        this.years = 0;

        //Run through seconds and split them into different time amounts.
        while (this.seconds > 60){
            this.minutes ++;
            this.seconds -= 60;
            
            if (this.minutes > 60){
                this.hours ++;
                this.minutes -= 60;

                if (this.hours > 24){
                    this.days ++;
                    this.hours -= 24;

                    if (this.days > 30){
                        this.months ++;
                        this.days -= 30;

                        if (this.months > 12){
                            this.years ++;
                            this.months -= 12;
                        }
                    }
                }
            }
        }

        //Generate string based on time.
        this.timeSince = "";
        if (this.years > 0){
            this.timeSince += `${this.years} years, `;
        }
        if (this.months > 0){
            this.timeSince += `${this.months} months, `;
        }
        if (this.days > 0){
            this.timeSince += `and  ${this.days} days`;
        }
        // if (this.hours > 0){
        //     this.timeSince += `${this.hours} hours, `;
        // }
        // if (this.minutes > 0){
        //     this.timeSince += `${this.minutes} minutes `;
        // }
        // if (this.seconds > 0){
        //     this.timeSince += `and ${this.seconds} seconds`;
        // }

        document.getElementById(this.elementID).innerHTML = "I have " + this.timeSince + " experience.";
    }
}

