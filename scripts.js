
let dateTimeNow = new Date();

dateTimeNow.getTime();

class timer {
    constructor(startDate) {
        this.startDate = new Date(startDate);
        this.minutes = 0;
        this.hours = 0;
        this.days = 0;
        this.months = 0;
        this.years = 0;

        this.update();
        setInterval(this.update.bind(this), 1000);
    }

    update (){
        dateTimeNow = Date.now();

        this.seconds = Math.floor(( dateTimeNow - this.startDate.getTime()) / 1000 );
        this.minutes = 0;
        this.hours = 0;
        this.days = 0;
        this.months = 0;
        this.years = 0;

        while (this.seconds > 60){
            this.minutes ++;
            this.seconds -= 60;
            
            if (this.minutes > 60){
                this.hours ++;
                this.minutes -= 60;

                if (this.hours > 24){
                    this.days ++;
                    this.hours -= 24;

                    if (this.days > 31){
                        this.months ++;
                        this.days -= 31;

                        if (this.months > 12){
                            this.years ++;
                            this.months -= 12;
                        }
                    }
                }
            }
        }

        this.timeSince = `${this.years} years, ${this.months} months, ${this.days} days, ${this.hours} hours, ${this.minutes} minutes and ${this.seconds} seconds.`;
        console.log(this.timeSince);
    }
}

const timers = {
    "GML" : new timer("01/01/2008"),
}
