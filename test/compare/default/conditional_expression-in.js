a?foo():bar();

b = (dolor!==amet)  ?  'ipsum':
    'dolor';

if(true){
c = !a ?(!foo?d  :   function(){
    return a;
}):b;
}

// should break lines
foo.a = true; a?foo() : bar()


// from jquery
jQuery.prototype = {
    get: function( num ) {
        return num == null ?

            // Return a 'clean' array
            this.toArray() :

            // Return just the object
            ( num < 0 ? this[ this.length + num ] : this[ num ] );
    }
};

