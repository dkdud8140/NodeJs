module.exports = (sequelize, DataTypes) =>{
	const orders =  sequelize.define("tbl_orders",{
		o_seq	:	{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true	}	,
		o_num	:	{type:DataTypes.INTEGER, allowNull:false, 	}	,
		o_table	:	{type:DataTypes.STRING(30), allowNull:false,	}	,
		o_pcode	:	{type:DataTypes.STRING(10), allowNull:false,	}	,
		o_price	:	{type:DataTypes.INTEGER, allowNull:false,	}	,
		o_count	:	{type:DataTypes.INTEGER, allowNull:false,	}	,
		o_tatal	:	{type:DataTypes.INTEGER, allowNull:false,	}	,
		o_buyer	:	{type:DataTypes.INTEGER,}	,
	});

	orders.associate = (models)=>{
        orders.belongsTo(models.tbl_product);
    };

	return orders ;
}