class Worker {
    constructor(name,surname, rate, days){
        this._name = name
        this._surname = surname
        this._rate = rate
        this._days = days
    }
    getSalary (){
        var sum = this._rate*this._days
        return "зарплата" + " "+ this._name + " "+"за"+" "+this._days+' '+"дней"+ ":"+ sum
    }

    getName (){
        return  this._name
    }
    getSurname(){
        return this._surname
    }
    getRate(){
        return this._rate
    }
    getDays(){
        return this._days
    }

    setRate(x){
        var x=3
        return this._rate*x
    }




}

