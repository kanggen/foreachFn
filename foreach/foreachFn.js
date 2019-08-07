function foreachFn(fun){
    for(let i=0;i<this.length;i++){
        fun(this[i],i)
    }
}

Array.prototype.foreachFn=foreachFn;

