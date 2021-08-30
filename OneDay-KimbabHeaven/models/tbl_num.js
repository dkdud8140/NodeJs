module.exports = (sequelize, DataTypes) =>{
	return sequelize.define("tbl_num",{
		n_seq	:	{type:DataTypes.INTEGER, autoIncreament:true, primaryKey:true	}	,
		n_pway	:	{type:DataTypes.INTEGER, allowNull:false, 	}	,
		n_pay	:	{type:DataTypes.INTEGER, allowNull:false, 	}	,
	});
}