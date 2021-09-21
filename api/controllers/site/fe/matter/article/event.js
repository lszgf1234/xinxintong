const log4js = require('log4js')
const logger = log4js.getLogger()

const { Ctrl, ResultData } = require('tms-koa')
/**
 * 处理单图文用户事件
 */
class Main extends Ctrl {
  /**
   * @swagger
   *
   *  /site/fe/matter/article/event/users:
   *    post:
   *      description: 记录用户行为数据
   *      requestBody:
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *        required: true
   */
  async logAccess() {
    let { user, article } = this.request.body

    // 检查bucket是否存在
    const client = this.mongoClient
    const clUser = client.db('xxt').collection('article_user')

    let current = Date.now()
    let rst = await clUser.updateOne(
      { 'article.id': article.id, 'user.id': user.id },
      {
        $set: { article, user, 'read.latest': current },
        $inc: { 'read.num': 1 },
      },
      { upsert: true }
    )

    return new ResultData(rst)
  }
}
module.exports = Main
