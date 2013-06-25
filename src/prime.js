#!/usr/bin/env node
var fs =require('fs');
var outfile = "prime.txt";
var known_primes = [2], i=3;

var isPrime = function(i){
	for(var j = 0; j<known_primes.length;j++){
			if( i % known_primes[j] == 0){
				return false;
			}
	}
	return true;
}

var primes = function(n){
	var len = known_primes.length;
	while( len < n){
		if(isPrime(i)){
			known_primes.push(i);
			len++;
		}
		i++;
	}
	return known_primes;
}

var fmt = function(arr){
	return arr.join(",");
}

var generated_primes = fmt(primes(100));

fs.writeFileSync(outfile, generated_primes);


