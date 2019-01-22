// Реализовать метод `.delay`
// ...

foo.delay = function (time) {
    
    setTimeout(foo, time);    
}

foo.delay(300);


function foo() {
    console.log("Wow!");
}

/**
* Реализовать RLE-сжатие: AAAB -> A3B, BCCDDDAXXXX -> BC2D3AX4
* @param  {string} value
* @return {string}
*/
function rle(value) {

	var count = 1, result = '', char = '';

	for(var i = 0, len = value.length; i < len; i++) {

		if (char && value[i] != value[i - 1]) {
      
			result += count;
			count = 1;
			char = '';
		}

		if (len - 1 == i && char == value[len - 1]) {

			result += ++count;
		}      	

		if (value[i - 1] && value[i] == value[i -1]) {

			if (!char) {

				char = value[i];
			}

			count++;
		} else {

			result += value[i];
		}
	}

	return result;
}

console.log(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));

/**
 * Получения массива уникальных значений
 * @param  {number[]} values
 * @return {*}
 */
function uniq(values) {
    
    var strBuf = '', arBuf = [], hash = {};
    
    values.map(function(item) {

        // if (!~strBuf.search(item)) {
        //     strBuf += item;
        //     arBuf.push(item);
        // }
        
        if (!hash[item]) {
            hash[item] = '1';
            arBuf.push(item);
        }
    })
    
    values = arBuf.sort();
	return values;
}

console.log(uniq([2, 3, 1, 2, 1, 5, 6, 3, 1, 8, 5]));

/**
 * Найти пересечение двух массивов
 * @param  {number[]} left
 * @param  {number[]} right
 * @return {number[]}
 */
function intersection(left, right) {

    var buf = [];
    
    function inArray (haystack, needle, strict) {
        
        strict = typeof strict === 'undefined' ? false : true;
        
        var match = haystack.filter(function(item) {
            
            if (strict) {
                return item === needle
            }
            return item == needle;
        })
        
        return match.length > 0;
    }
    
    left.map(function(item) {
        
        if (inArray(right, item)) {
            buf.push(item);
        }
    })
    
    return buf;
}

console.log(intersection(
	[1, 2, 3, 4, 5],
	[2, 8, 3]
));

/**
 * Релизуйте сортировку массива
 * @param   {any[]}     values  сортируемый массив
 * @returns {any[]}
 */
function sort(values) {
    
    if (values.length > 0) {
        
        return values.sort();
    }
    
    return false;
}

console.log(sort([7, 2, 99, 5, 1, 0, 3, 4, -1])); // [-1, 1, 2, 3, 4, 5, 7, 99]

/**
 * Получение свойства объекта
 * @param {object} src
 * @param {string} path
 */
function get(src, path) {
    
    var splitPath = path.split('.');
    var firstValue = splitPath.shift(),
        result = false;
    
    if (typeof src  === 'undefined' || !src[firstValue]) {
    
        return false;
    }

    if (splitPath.length > 0) {

        result = get(src[firstValue], splitPath.join('.'));
    } else if (splitPath.length == 0 && firstValue) {
        
        result = src[firstValue];
    }
    
    return result; 
}

var fixture = {
	foo: {
		bar: [
			{qux: 'bingo'},
		],
	},
};

// Проверка
console.log(get(fixture, 'foo.bar.0.qux') === 'bingo');

/**
 * Найти пропущеное значение в неотсортированном массиве.
 * @param  {number[]} values
 * @return {boolean}
 */
function missing(values) {
    
    if (values.length <= 0) {
        
        return;
    }
    
    var upValue = Math.max.apply(null, values),
        downValue = Math.min.apply(null, values),
        sum = 0,
        result;
        
    for (var i = 0, len = values.length; i < len; i++) {

        sum += values[i];
    }
    
    upValue = upValue * (upValue + 1) / 2;
    downValue = downValue * (downValue - 1) / 2;
    result = (upValue - downValue) - (sum - downValue);
    
    if (result > 0) {
        
        return result;
    }
}

console.log(missing([1, 4, 3])); // 2
console.log(missing([5, 1, 4, 2])); // 3
console.log(missing([1, 2, 3, 4])); // undefined

// Сейчас console выводит "undefined", нужно это исправить

function Bomb(message, delay) {
    this.message = message;
    setTimeout(this.blowUp.bind(this), delay * 1000); // взрываем через delay sec
}


Bomb.prototype.blowUp = function () {
    console.log(this.message);
};


new Bomb("Allahu akbar!", .5);


// Реализовать создание следующую запись ;]
// ...

function timingDecorator(f, timer) {
  return function() {
    var start = performance.now();

    var result = f.apply(this, arguments); // (*)

    if (!timers[timer]) timers[timer] = 0;
    timers[timer] += performance.now() - start;

    return result;
  }
}

function getArray(pattern) {

    if (typeof pattern  != 'string' || !pattern) {
        
        return;
    }
    
    var val = pattern.split('..'), result = [];
    
    if (val.length > 0) {
        
        var matrix = {
            'I'   : 1,
            'II'  : 2,
            'III' : 3,
            'IV'  : 4,
            'V'   : 5,
            'VI'  : 6,
            'VII' : 7,
            'VIII': 8,
            'IX'  : 9,
            'X'   : 10,
        };
        
        for (var i = 0, len = matrix[val[1]]; i < len ; i++) {
            
            result.push(i);
        }
        
        if (result.length > 0) {
            
            return result;
        }
    }
    
    return false;
}


console.log(getArray('0')); // [0, 1, 2, 3, 4];
console.log(getArray('0..V')); // [0, 1, 2, 3, 4];
console.log(getArray('0..VII')); // [0, 1, 2, 3, 4, 5, 6];

https://jsbin.com/javofifuja/edit?js,console,output