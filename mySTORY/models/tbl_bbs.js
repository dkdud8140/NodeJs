module.exports = (sequelize, DataTypes) => {
    const bbs =  sequelize.define("tbl_bbs",{
        b_id : { type:DataTypes.INTEGER,
                autoIncrement:true,
                primaryKey:true,
         },
        b_date: { 
            type:DataTypes.STRING(10),
            allowNull : false,},
        b_time:{ type:DataTypes.STRING(10), 
            allowNull : false, },
        b_writer: { type:DataTypes.STRING, 
            allowNull : false, },
        b_subject : { type:DataTypes.STRING, allowNull : false,},
        b_text: { type:DataTypes.BLOB, allowNull : false, },
        b_count: { type:DataTypes.INTEGER },
    });

	bbs.associate = (models)=>{
		bbs.hasMany(models.tbl_reply, {foreignKey: "r_postId"});
	}

	return bbs ;
};