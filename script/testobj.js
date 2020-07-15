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

class MyString {
    constructor(www){
        this.www = www
    }
    reverse(){
        var t =this.www.split (' ');
        for (let i=0;i<t.length/2;i++){
            var time = t[i]
            t[i] =t[t.length-i-1]
            t[t.length-i-1] = time
            console.log(t)
        }
        t= t.join(' ')
        return t
        //for (let i=0;i=this.www.length;i++)
    
    }
    ucFirst(){
       var t =this.www.split ('')
       t[0] = t[0].toUpperCase()
       t = t.join('')
        return t

    }
    ucWords(){  

    }
}

