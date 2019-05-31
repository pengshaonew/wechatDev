// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    const db = cloud.database()
    try {
        return await db.collection('msgs').add({
            // data 字段表示需新增的 JSON 数据
            data: {
                msgType: "visitor",
                msg: event.msg
            }
        })
    } catch (e) {
        console.log("error")
    }
}