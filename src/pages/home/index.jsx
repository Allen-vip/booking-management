import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import HeaderImg from "../../images/header.jpeg";
import navImg1 from "../../images/kechengbangzhu.png";
import navImg2 from "../../images/lunwenzuoye.png";
import navImg3 from "../../images/liuxuezixun.png";
import navImg4 from "../../images/liuxuewenshu.png";
import navImg5 from "../../images/ketangbangzhu.png";
// import { AtTabBar } from "taro-ui";
import "./index.scss";

export default class Index extends Component {
  constructor() {
    this.state = {
      current: 0,
    };
  }
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  config = {
    navigationBarTitleText: "首页",
  };

  render() {
    const nav = [
      { text: "课程帮助", icon: navImg1 },
      { text: "论文作业", icon: navImg2 },
      { text: "留学咨询", icon: navImg3 },
      { text: "留学文书", icon: navImg4 },
      { text: "润色修改", icon: navImg5 },
    ];
    // 导航
    const buildNav = nav.map((item, index) => {
      return (
        <View key={index}>
          <Image src={item.icon}></Image>
          <Text>{item.text}</Text>
          <View className={`nav_icon nav_selected_${index}`}></View>
        </View>
      );
    });
    let arraLength = [...Array(100).keys()];
    const buildList = arraLength.map((item, index) => {
      return (
        <View className="home_section" key={index}>
          <View className="home_list">
            <View className="home_list_header">
              <Image src={HeaderImg}></Image>
              <View>
                <View className="home_list_info">
                  <View className="home_list_info_left">
                    密歇根大学-安娜堡分校
                  </View>
                  <View className="home_list_info_right">
                    <View>硕士</View>
                    <View className="home_list_info_right_loc"></View>
                    <View>美国</View>
                  </View>
                </View>
                <View className="home_list_price">
                  <View className="home_list_score">
                    <View className="home_list_star"></View>
                    <View>4.7</View>
                    <View>100%</View>
                  </View>
                  <View className="home_list_kl">
                    <View>¥350/千字</View>
                    <View>¥350/小时</View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View className="home_list_skill">
            <View>
              <View>
                科目：<Text>金融，经济，管理，市场管理</Text>
              </View>
              <View>
                科目：<Text>Stata，Eviews，前端，后端，数据库</Text>
              </View>
            </View>
            <View className="home_list_btn">
              <View>预约</View>
              <View className="home_list_checked"></View>
            </View>
          </View>
        </View>
      );
    });
    return (
      <View className="home">
        {/* 首页header */}
        <View className="home_header">
          <View className="home_info">
            <View className="home_info_name">Hi，飞奔的大白兔长度</View>
            <View className="home_info_other">
              <View>
                <Image src={HeaderImg}></Image>
                <Image src={HeaderImg}></Image>
                <Image src={HeaderImg}></Image>
              </View>
              <Text>68人可预约</Text>
            </View>
          </View>
          <View className="home_nav">{buildNav}</View>
        </View>
        {/* body内容 */}
        <View className="home_body">
          <View className="home_body_top"></View>
          {/* 条件筛选部分 */}
          <View className="home_body_search">
            <View className="home_body_search_left">
              <View>
                <View>留学科目</View>
                <View className="home_body_down_icon"></View>
              </View>
              <View>
                <View>技能</View>
                <View className="home_body_down_icon"></View>
              </View>
              <View>
                <View>好评</View>
                <View className="home_body_down_icon"></View>
              </View>
            </View>
            <View className="home_body_search_right">
              <View>
                <View>综合筛选</View>
                <View className="shaixuan_icon"></View>
              </View>
            </View>
          </View>
          {/* 分割线 */}
          {/* list列表 */}
          <View className="home_scroll">{buildList}</View>
        </View>
        {/* <View className="home_footer">
          <AtTabBar
            tabList={[
              { title: "首页", image: "", selectedImage: "" },
              { title: "预约管理" },
              { title: "工作台" },
              { title: "续单" },
              { title: "个人中心" },
            ]}
            current={this.state.current}
          />
        </View> */}
      </View>
    );
  }
}
