var arrayAtticus = new Person( "Atticus", "2405", "47000", 3 );
var arrayJem = new Person( "Jem", "62347", "63500", 4 );
var arrayBoo = new Person( "Boo", "11435", "54000", 3 );
var arrayScout = new Person( "Scout", "6243", "74750", 5 );

var employees = [ arrayAtticus, arrayJem, arrayBoo, arrayScout ];



function Person( name, employeeId, salary, rating ) {
	this.name = name;
	this.employeeId = employeeId;
	this.salary = salary;
	this.rating = rating;
	this.bonus = calcBonus( this.employeeId, this.salary, this.rating );
	this.bonusPercent = calcBonusPerc( this.bonus );
	this.adjAnnComp = adjAnnSal( this.salary, this.bonus );
	this.totBonus = totalBonus( this.salary, this.bonus );
}
Person.prototype.printEmployee = function () {
	console.log( 'Name: ' + this.name + '\nEmployee ID: ' + this.employeeId + '\nSalary: ' +
		this.salary + '\nBonus Percentage: ' + this.bonusPercent + '\nTotal Bonus: ' + this.totBonus +
		'\nAdjusted Annual Compensation: ' + this.adjAnnComp );
	document.write( '<h2>' + this.name + '</h2><ul><li>Employee ID: ' + this.employeeId + '</li><li>Salary: ' +
		this.salary + '</li><li>Bonus Percentage: ' + this.bonusPercent + '</li><li>Total Bonus: ' + this.totBonus +
		'</li><li>Adjusted Annual Compensation: ' + this.adjAnnComp + '</li></ul>' );
}

function calcBonusPerc( bonus ) {
	return ( bonus * 100 ) + '%';
}

function calcBonus( employeeId, salary, rating ) {
	var bonus = 0;
	switch ( rating ) {
	case 5:
		bonus = 0.1;
		break;
	case 4:
		bonus = 0.06;
		break;
	case 3:
		bonus = 0.04;
		break;
	default:
		bonus = 0;
	}

	if ( employeeId.length == 4 ) {
		bonus += 0.05;
	}

	if ( salary > 65000 ) {
		bonus -= 0.01;
	}
	if ( bonus > 0.13 ) {
		bonus = 0.13;
	}
	return bonus;
}

function adjAnnSal( salary, bonus ) {
	return parseInt( salary ) + ( bonus * salary );
}

function totalBonus( salary, bonus ) {
	return Math.round( bonus * salary );
}

for ( var i = 0; i < employees.length; i++ ) {
	employees[ i ].printEmployee();
}
