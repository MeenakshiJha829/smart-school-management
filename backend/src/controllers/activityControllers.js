export const getActivities =async(req ,res)=>{
    try{
        const activities=await pool.query(`Select * from activities order by created_at Desc LIMIT 10`);
        res.status(200).json(activities.rows);
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}