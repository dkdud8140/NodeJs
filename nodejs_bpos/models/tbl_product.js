module.exports = (sequelize, DataTypes)=>{
	const product = sequelize.define("tbl_product", {
		p_code : {
			type:DataTypes.STRING(5),
			primaryKey : true,
		},
		p_name : {type:DataTypes.STRING,allowNull : false,},
		p_price : {type:DataTypes.INTEGER, allowNull : false,},
		p_rem : {type:DataTypes.STRING},
	},
		{timestamps:false}
	);

	return product;
}