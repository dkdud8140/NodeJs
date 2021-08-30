module.exports = (sequelize, DataTypes) =>{
	const num = sequelize.define("tbl_num",{					
		n_seq	:	{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true	}	,
		n_table : 	{type:DataTypes.STRING(10), allowNull:false, 	},
		n_pway	:	{type:DataTypes.INTEGER, }	,
		n_pay	:	{type:DataTypes.BOOLEAN, }	,
	});

	return num ;
}