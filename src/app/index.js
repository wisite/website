import React from 'react';
import Nav from 'ws-nav';
import Slider from 'ws-slider';
import Footer from 'ws-footer';
import Section from './Section';

const { SliderBlock } = Slider;
class Page extends React.Component{
  render() {
    // nav
    const items = [
      {
        name: '关于我们',
        href: '#ws-about'
      },
      {
        name: '成功案例',
        href: '#ws-example'
      },
      {
        name: '挑选规格',
        href: '#ws-price'
      },
      {
        name: '联系我们',
        href: '#ws-contact'
      }
    ];
    const company = {
      en: 'EZHAN',
      zh: 'E站工作室',
    };

    const tempCommon = {
      background: 'red',
      height: '100%'
    };

    return (
      <div className="ws-page">
        <div className="ws-header">
          <p><i className="iconfont icon-tel"/>热线电话：18801912325</p>
        </div>
        <Nav company={company} items={items} />
        <Slider className="ws-banner">
          <SliderBlock>
            <div className="neo-slider-block">
              <img src="images/banner.jpg" />
              <div className="neo-banner-info">
                <h2>专业／铸就一流品质</h2>
                <h2>合作／源自双方诚信</h2>
                <h4>PROFESSIONAL CASTING QUALITY</h4>
                <a href="#ws-contact">联系我们</a>
              </div>
            </div>
          </SliderBlock>
          <SliderBlock>
            <div className="neo-slider-block neo-slider-2">
              <img src="images/banner2.jpg" />
              <div className="neo-banner-info">
                <h2>轻松建站&nbsp;&nbsp;一流标准</h2>
                <h2>提供高质量建站服务</h2>
                <a href="#ws-contact">联系我们</a>
              </div>
            </div>
          </SliderBlock>
        </Slider>
        <Section className="ws-section-badges">
          <div className="ws-section-badge ws-badge-baohu">
            <p className="ws-badge-bg"><i className="iconfont icon-baohu" /></p>
            <a>品质保障</a>
            <p className="ws-badge-desc">工程师全年维护，定期检查，保障网站稳定安全运行</p>
          </div>
          <div className="ws-section-badge ws-badge-zhuanye">
            <p className="ws-badge-bg"><i className="iconfont icon-diyi" /></p>
            <a>专业团队</a>
            <p className="ws-badge-desc">五年以上行业经验，世界五百强企业全栈工程师，协同开发</p>
          </div>
          <div className="ws-section-badge ws-badge-chengxin">
            <p className="ws-badge-bg"><i className="iconfont icon-qianyan" /></p>
            <a>领先技术</a>
            <p className="ws-badge-desc">高端建站，使用国际前沿技术，支持高并发，超快访问速度</p>
          </div>
        </Section>
        <Section id="ws-about">
          <div className="ws-section-text">
            <h2>关于我们<span>ABOUT US</span></h2>
            <p>
              E站工作室，创立于2014年，致力于打造一个时尚简约的一站式网站搭建产品线。让你摆脱建站时专业知识的烦恼。使建站如购物一样方便。让不懂logo设计，文案编辑，修改图片，程序，SEO优化（使其他可以通过百度搜索到你的网站）的你，短时间内拥有一个时尚简约的网站。
              使您有更多精力专注你的行业，放心把网站建设交给我们，专业造就品质。
            </p>
          </div>
        </Section>
        <Section id="ws-example">
          <div className="ws-section-text ws-section-badges ws-section-example">
            <h2>成功案例<span>EXAMPLES</span></h2>
            <div className="ws-section-badge">
              <p className="ws-badge-bg">
                <img src="images/example1.jpg" />
              </p>
              <a href="//www.vincross.com/">Vincross官网</a>
              <p className="ws-badge-desc">最有范的设计，最前沿的技术</p>
            </div>
            <div className="ws-section-badge">
              <p className="ws-badge-bg">
                <img src="images/example2.jpg" />
              </p>
              <a href="//www.gumpcome.com/">甘来智能微超</a>
              <p className="ws-badge-desc">物美价廉，品质保证，初创公司的选择</p>
            </div>
            <div className="ws-section-badge">
              <p className="ws-badge-bg">
                <img src="images/example3.jpg" />
              </p>
              <a href="//www.xihumaker.com/">西湖创客汇</a>
              <p className="ws-badge-desc">从域名到服务器，一条龙服务，尽心为您服务</p>
            </div>
          </div>
        </Section>
        <Section id="ws-price" className="ws-section-price">
          <div className="ws-section-card">
            <div className="ws-section-card-title">
              <i className="iconfont icon-yin silver-color" />
              <h2>标准版</h2>
              <p>¥1000起</p>
            </div>
            <div className="ws-section-card-body">
              <p>高端大气有档次<i className="iconfont icon-gou" /></p>
              <p>访问速度快<i className="iconfont icon-gou" /></p>
              <p>免费服务器托管<i className="iconfont icon-gou" /></p>
              <p>免费注册域名<i className="iconfont icon-gou" /></p>
              <p>无需备案<i className="iconfont icon-gou" /></p>
              <p>简单SEO优化<i className="iconfont icon-gou" /></p>
              <p>一年免费维护<i className="iconfont icon-gou" /></p>
              <p>24小时咨询服务<i className="iconfont icon-gou" /></p>
              <p>一条龙建站<i className="iconfont icon-gou" /></p>
            </div>
          </div>
          <div className="ws-section-card price-high">
            <div className="ws-section-card-title">
              <i className="iconfont icon-yin gold-color" />
              <h2>豪华版</h2>
              <p>¥2000起</p>
            </div>
            <div className="ws-section-card-body">
              <p>超级震撼特效<i className="iconfont icon-gou" /></p>
              <p>访问速度超快<i className="iconfont icon-gou" /></p>
              <p>免费服务器托管<i className="iconfont icon-gou" /></p>
              <p>免费注册域名<i className="iconfont icon-gou" /></p>
              <p>无需备案<i className="iconfont icon-gou" /></p>
              <p>深度SEO优化<i className="iconfont icon-gou" /></p>
              <p>一年免费维护<i className="iconfont icon-gou" /></p>
              <p>24小时咨询服务<i className="iconfont icon-gou" /></p>
              <p>一条龙建站<i className="iconfont icon-gou" /></p>
              <p>手机网站完美支持<i className="iconfont icon-gou" /></p>
            </div>
          </div>
        </Section>
        <Section id="ws-contact">
          <div className="ws-section-text">
            <h2>联系我们<span>CONTACT US</span></h2>
            <div className="ws-section-contact">
              <div className="ws-section-contact-box">
                <i className="iconfont icon-address" />
                <h4>公司地址</h4>
                <p>上海市杨浦区大学路199号</p>
              </div>
              <div className="ws-section-contact-box">
                <i className="iconfont icon-tel" />
                <h4>联系电话</h4>
                <p>周先生：188-0191-2325</p>
              </div>
              <div className="ws-section-contact-box">
                <i className="iconfont icon-wechat" />
                <h4>微信号</h4>
                <p>ssehacker</p>
              </div>
            </div>
          </div>
        </Section>
        <Footer/>
      </div>
    );
  }
}

export default Page;