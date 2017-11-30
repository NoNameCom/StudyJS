function printValue(value){
	document.write(value + '</br>');
}

function DataBase(nameDB, keyDB, accountsDB, addressDB){
	var nameBD = nameDB;
	this.key = keyDB;
	this.accaunts = accountsDB;
	this.address = addressDB;
	
	this.showDB = function(){
		printValue("DB INFO");
		printValue('');
		printValue(nameBD);
		printValue(this.key);
		printValue('');
		printValue('Accounts:');
	
		for(var index in this.accaunts){
			accaunt = this.accaunts[index];
			printValue(accaunt.login + ' ' + accaunt.password);
		}
		
		printValue('</br>Address:');
		printValue('IP:' + this.address.ip);
		printValue('PORT:' + this.address.port);
	}
	
	this.getName = function(){
		return nameBD;
	}
	
	this.setName = function(value){
		nameBD = value;
	}
}

function DataTable(nameDB, keyDB, accountsDB, addressDB, nameTable){
	DataBase.call(this, nameDB, keyDB, accountsDB, addressDB);
	this.tableName = nameTable;
	
	this.showTableInfo = function(){
		printValue("Table name:" + this.tableName);
		printValue("");
	}
}

DataTable.prototype = Object.create(DataBase.prototype);

var array = [
	{login: 'Dima', password: 32167},
	{login: 'Vanya', password: 666},
	{login: 'Pes', password: 'pes'}
]

var address = {
	ip: '255.255.255.0',
	port: '8080'
}

DataBase.prototype.version = '1.0.1';
DataBase.prototype.showVersion = function(){
	printValue('');
	printValue('version:' + this.version);
}



var dt = new DataTable('Postgre', 'admin', array, address, 'Account');
dt.setName('MySQL');
dt.showTableInfo();
dt.showDB();
dt.showVersion();













