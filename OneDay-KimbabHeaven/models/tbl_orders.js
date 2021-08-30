module.exports = (sequelize, DataTypes) =>{
	return sequelize.define("tbl_orders",{
		o_seq	:	{type:DataTypes.INTEGER, autoIncreament:true, primaryKey:true	}	,
		o_num	:	{type:DataTypes.INTEGER, allowNull:false, 	}	,
		o_table	:	{type:DataTypes.STRING(30), allowNull:false,	}	,
		o_pcode	:	{type:DataTypes.INTEGER, allowNull:false,	}	,
		o_price	:	{type:DataTypes.INTEGER, allowNull:false,	}	,
		o_count	:	{type:DataTypes.INTEGER, allowNull:false,	}	,
		o_tatal	:	{type:DataTypes.INTEGER, allowNull:false,	}	,
		o_buyer	:	{type:DataTypes.INTEGER,}	,

	});
}