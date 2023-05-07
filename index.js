let cel =document.getElementById("cel")
        cel.addEventListener('input',function(){
            let c=this.value;
            let f=((9*c)/5)+32;
            if(!Number.isInteger(f)){
                f=f.toFixed(4);
            }
            fah.value=f;
        })

        let fah =document.getElementById("fah")
        fah.addEventListener('input',function(){
            let f=this.value;
            let c=((f-32)*5)/9;
            if(!Number.isInteger(c)){
                c=c.toFixed(4);
            }
            cel.value=c;
        })