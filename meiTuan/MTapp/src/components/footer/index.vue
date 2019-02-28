<!--网页模板-底部模块-->
<template>
  <div class="com-footer">
    <div class="footer-content">
      <div class="footer-link clearfix">
        <div class="footer-column">
          <dl>
            <dt>用户帮助</dt>
            <dd v-for="(item,index) in userHelp" :key="index">
              <router-link :to="{name:'goods',parmas:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl>
            <dt>美团服务</dt>
            <dd v-for="(item,index) in mtServe" :key="index">
              <router-link :to="{name:'goods',parmas:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
        <div class="footer-column">
          <dl>
            <dt>商家合作</dt>
            <dd v-for="(item,index) in businessCooperation" :key="index">
              <router-link :to="{name:'goods',parmas:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
        <div class="footer-column">
          <dl>
            <dt>代理商加盟</dt>
            <dd v-for="(item,index) in merchantsTo" :key="index">
              <router-link :to="{name:'goods',parmas:{name:item}}">{{item}}></router-link>
            </dd>
          </dl>
          <dl>
            <dt>行业规范</dt>
            <dd>
              <router-link :to="{name:'goods',parmas:{name:'美团点评餐饮安全管理办法'}}">美团点评餐饮安全管理办法</router-link>
            </dd>
          </dl>
          <dl>
            <dt>廉政举报</dt>
            <dd>
              <router-link :to="{name:'goods',parmas:{name:'廉政举报'}}">廉政邮箱</router-link>
            </dd>
          </dl>
        </div>
        <div class="footer-column">
          <dl>
            <dt>关注美团</dt>
            <dd>
              <router-link :to="{name:'goods',parmas:{name:'美团新浪微博'}}">美团新浪微博</router-link>
            </dd>
          </dl>
          <dl>
            <dt>公司信息</dt>
            <dd v-for="(item,index) in companyInfo" :key="index">
              <router-link :to="{name:'goods',parmas:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
        <div class="footer-column">
          <dl>
            <dt>消费者服务热线</dt>
            <dd v-for="(item,index) in consumerServiceHotline" :key="index">
              {{item.key}}:
              <a ref="nofollow" href="item.value" target="_black">{{item.value}}</a>
            </dd>
          </dl>
          <dl>
            <dt>商家服务热线</dt>
            <dd v-for="(item,index) in merchantServiceHotline" :key="index">
              {{item.key}}:
              <a ref="nofollow" href="item.value" target="_black">{{item.value}}</a>
            </dd>
          </dl>
          <dl>
            <dt>投诉举报热线</dt>
            <dd v-for="(item,index) in complaintReporting" :key="index">
              {{item.key}}
              <a href="item.value" ref="nofollow" target="_black">{{item.value}}</a>
            </dd>
          </dl>
          <dl>
            <dt>
              <a href="/sss" target="_black">商家自助入驻美团入口</a>
            </dt>
          </dl>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 用户帮助
      userHelp: [
        '申请退款',
        '查看美团券密码',
        '常见问题',
        '用户协议',
        '隐私政策',
        '反诈骗公告'
      ],
      // 美团服务
      mtServe: [
        '美团外卖',
        '美团酒店',
        '猫眼电影',
        '美团配送',
        '美团云',
        '大众点评',
        '榛果民宿',
        '无人配送'
      ],
      // 商家合作
      businessCooperation: [
        '美食商家入驻(非外卖)',
        '美团外卖开店申请',
        '美团收银官网',
        '外卖配送加盟申请',
        '美团点评餐饮学院',
        '酒店商家入驻',
        '境内度假商家入驻',
        '综合商家入驻',
        '榛果民宿房东商家入驻',
        '商家开票申请',
        '美团点评智能收银机',
        '聚宝盆餐饮开放平台',
        '美团智能支付',
        '免费使用美团排队',
        '快驴进货商家合作',
        '美团闪购商家入驻'
      ],
      // 代理商加盟
      merchantsTo: [
        '智能支付渠道加盟商招募',
        '到店餐饮代理商招募',
        '非餐饮代理商招募',
        '美团联盟',
        '美团收银招募线上分销商',
        '美团点评5S服务商招募'
      ],
      // 公司信息
      companyInfo: [
        '关于我们',
        '投资者关系',
        '加入我们',
        '法律声明',
        '价格说明',
        '美团网平台点评规则',
        '美团点评团购用户服务条款',
        '商户诚信公约及管理办法'
      ],
      // 消费者服务热线
      consumerServiceHotline: [
        {key: '外卖消费者', value: 10109777},
        {key: '猫眼消费者', value: 10105335},
        {key: '其他消费者', value: 10107888}
      ],
      // 商家服务热线
      merchantServiceHotline: [
        {key: '外卖餐饮商家', value: '10105557'},
        {key: '休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家', value: '10100107'}
      ],
      // 投诉举报热线
      complaintReporting: [
        {key: '违法和不良信息举报电话', value: '4006018900'},
        {key: '举报邮箱', value: 'tousujubao@meituan.com'}
      ]
    }
  }
}
</script>

<style lang = "scss">
  @import '@/assets/css/public/footer.scss';
</style>
