var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack');

//defining page & user tables
var Page = db.define('page',{
	title:{
		type: Sequelize.STRING,
		allowNull: false
	},
	urlTitle:{
		type: Sequelize.STRING,
		allowNull: false
	},
	content:{
		type: Sequelize.TEXT,
		allowNull: false
	},
	status:{
		type: Sequelize.ENUM('open','closed')
	}
});

var User = db.define('user', {
	name:{
		type: Sequelize.STRING,
		allowNull: false
	},
	email:{
		type: Sequelize.STRING,
		allowNull: false, //database prevents
		unique: true,
		validate:{
			isEmail: true //sequelize prevents
		}
	}
});

//
module.exports = {
	Page: Page,
	User: User
};