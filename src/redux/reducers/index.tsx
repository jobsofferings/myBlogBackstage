// src/reducers/index.tsx

import { AllAction } from '../actions';
import { StoreState } from '../types/index';
import { LEFT_PAGE_CONTROL_ENTHUSIASM, RIGHT_PAGE_CONTROL_ENTHUSIASM, TOP_INPUT, GET_IP_DATA, GET_STAR_ARTICLES, GET_ALL_GROUP_LENGTH } from '../constants/index';

const defaultState: StoreState = {
  leftPageFlag: false,
  rightPageFlag: false,
  topInputValue: '',
  ThreeData: [
    {
      ref: 'newCustomers',
      title1: 'New Customers',
      title2: 'From last week',
      num: 45.6,
      all: 100,
      unit: 'K'
    }, {
      ref: 'orders',
      title1: 'Orders',
      title2: 'Orders in waitlist',
      num: 14.3,
      all: 50,
      unit: 'K'
    }, {
      ref: 'monthlyProfit',
      title1: 'Monthly Profit',
      title2: 'For last 30 days',
      num: 45.6,
      all: 100,
      unit: '$'
    }
  ],
  ipData: {
    dataList: [{
      clientIP: "117.170.133.203",
      newTime: 1587382603185,
      number: 1,
      _id: "5e9d89d2bc340000e6006c23"
    }, {
      clientIP: "117.170.133.202",
      newTime: 1587382603134,
      number: 12,
      _id: "5e9d89d2bc340000e6006c22"
    }, {
      clientIP: "117.170.133.201",
      newTime: 158738210347,
      number: 3,
      _id: "5e9d89d2bc340000e6006c21"
    }]
  },
  StarArticlesData: {
    dataList: [{
      author: "jobsofferings",
      description: `<p>有可能在制作网页的过程中遇到各种美化表单设计，这次我们来试着做一个demo</p><p>将input输入框添加内部图标</p><p>话不多说，看一下最终效果</p><p><img src="https://img2018.cnblogs.com/blog/1548255/201812/1548255-20181207231016902-852175556.png" alt="" width="381" height="255"></p><p>我们的思路是，在一个div中，加入一个div和一个input标签，小div在左侧，input放右侧，用box-sizing:border-box，这句代码代表的是这个：怪异盒子模型 =&gt; 盒子定长定宽，不管有没有padding，border，margin，始终就是这么大，影响的只会是里面的元素。</p><p>左侧的div给border，也要给border-radius，右边的input只给右边的border，不给border-radius，input里面padding-left最好设置一下，更加美观。</p><p>总体思路其实是把大的div做成让人感觉像是一个input，如果能做到，那么你就成功了。下面附代码</p><blockquote class='code'><pre><span style="font-family: Arial;">&lt;div&gt;
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;img src="./img/学号.png" /&gt;
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="text" value="" placeholder="请输入学号" /&gt;
      &lt;/div&gt;
      &lt;div&gt;
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;img src="./img/密码.png" /&gt;
      &lt;/div&gt;
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;input type="password" placeholder="请输入密码" /&gt;
      &lt;/div&gt;</span></pre></blockquote><p><span style="font-weight: bold;"><br></span></p><blockquote class='code'><pre>.student-name-box,.student-id-box{
      &nbsp;&nbsp;&nbsp;&nbsp;box-sizing: border-box;
      &nbsp;&nbsp;&nbsp;&nbsp;width:300px;
      &nbsp;&nbsp;&nbsp;&nbsp;height:36px;
      &nbsp;&nbsp;&nbsp;&nbsp;border: 2px solid #DDD;
      &nbsp;&nbsp;&nbsp;&nbsp;border-radius: 5px;
      &nbsp;&nbsp;&nbsp;&nbsp;margin-top: 27px;
      &nbsp;&nbsp;&nbsp;&nbsp;margin-left: 50%;
      &nbsp;&nbsp;&nbsp;&nbsp;transform: translateX(-50%);
      }
      input{
      &nbsp;&nbsp;&nbsp;&nbsp;box-sizing: border-box;
      &nbsp;&nbsp;&nbsp;&nbsp;margin-bottom: 1px;
      &nbsp;&nbsp;&nbsp;&nbsp;outline: none;
      &nbsp;&nbsp;&nbsp;&nbsp;width:264px;
      &nbsp;&nbsp;&nbsp;&nbsp;height:32px;
      &nbsp;&nbsp;&nbsp;&nbsp;padding-left: 10px;
      &nbsp;&nbsp;&nbsp;&nbsp;border:0;
      }
      .student-name-box div:first-child
      &nbsp;&nbsp;&nbsp;&nbsp;,.student-id-box div:first-child{
      &nbsp;&nbsp;&nbsp;&nbsp;box-sizing: border-box;
      &nbsp;&nbsp;&nbsp;&nbsp;float: left;
      &nbsp;&nbsp;&nbsp;&nbsp;width: 32px;
      &nbsp;&nbsp;&nbsp;&nbsp;height: 32px;
      &nbsp;&nbsp;&nbsp;&nbsp;background: rgb(233,236,239);
      &nbsp;&nbsp;&nbsp;&nbsp;background-position:8px 10px;
      &nbsp;&nbsp;&nbsp;&nbsp;border-right: 2px solid #DDD;
      }
      .student-name-box img,.student-id-box img{
      &nbsp;&nbsp;&nbsp;&nbsp;width: 16px;
      &nbsp;&nbsp;&nbsp;&nbsp;height: 16px;
      &nbsp;&nbsp;&nbsp;&nbsp;margin:8px;
      }</pre></blockquote><p><span style="font-weight: bold;">大家又想看的表单美化或是界面美化也可以在下方留言给我哦</span></p><p>加油啊柯基</p><p><br></p><p><br></p>`,
      group: 3,
      headImg: "https://www.runoob.com/wp-content/uploads/2013/11/python.jpg",
      time: 1544140800000,
      title: "input输入框添加内部图标",
      _id: "5df36fcd193000003c004ab3"
    }],
  },
  groupData: {
    dataList: []
  },
}

export default function enthusiasm(state: StoreState = defaultState, action: AllAction): StoreState {
  switch (action.type) {
    case LEFT_PAGE_CONTROL_ENTHUSIASM:
      return { ...state, leftPageFlag: !state.leftPageFlag };
    case RIGHT_PAGE_CONTROL_ENTHUSIASM:
      return { ...state, rightPageFlag: !state.rightPageFlag };
    case TOP_INPUT:
      return { ...state, topInputValue: action.value };
    case GET_IP_DATA:
      return { ...state, ipData: { dataList: action.res.dataList } }
    case GET_STAR_ARTICLES:
      return { ...state, StarArticlesData: { dataList: action.res.dataList } }
    case GET_ALL_GROUP_LENGTH:
      return { ...state, groupData: { dataList: action.res } }
  }
  return state;
}