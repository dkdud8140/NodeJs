module.exports = (sequelize, DataTypes) =>{
	return sequelize.define("tbl_product",{
		p_code	:	{type:DataTypes.STRING(10), autoIncreament:true, primaryKey:true}	,
		p_name	:	{type:DataTypes.STRING(30), allowNull:false,}	,
		p_price	:	{type:DataTypes.INTEGER, allowNull:false,}	,
		p_rem	:	{type:DataTypes.STRING(255)}	,

	});
}