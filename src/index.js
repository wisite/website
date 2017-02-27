import Nav from 'ws-nav';
import Slider from 'ws-slider';
import Footer from 'ws-footer';
import 'ws-slider/assets/index.less';
import 'ws-footer/assets/index.less';
import 'ws-nav/assets/index.less';
import './common.less';
import './index.less'
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
        name: '购买咨询',
        href: '#advisory'
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
            <div className="neo-slider-1">
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
            <div style={{...tempCommon, background: 'blue'}}>222</div>
          </SliderBlock>
          <SliderBlock>
            <div style={{...tempCommon, background: 'green'}}>333</div>
          </SliderBlock>
        </Slider>
        <Section className="ws-section-badges">
          <div className="ws-section-badge ws-badge-baohu">
            <p className="ws-badge-bg"><i className="iconfont icon-baohu" /></p>
            <a>优质保障</a>
            <p className="ws-badge-desc">最有范的设计，最前沿的技术，提供最优质的服务，领先行业最高质量</p>
          </div>
          <div className="ws-section-badge ws-badge-zhuanye">
            <p className="ws-badge-bg"><i className="iconfont icon-diyi" /></p>
            <a>专业品质</a>
            <p className="ws-badge-desc">最专业的人做最专业的事，是您将精力放在您的领域，网站交给我们</p>
          </div>
          <div className="ws-section-badge ws-badge-chengxin">
            <p className="ws-badge-bg"><i className="iconfont icon-diyi" /></p>
            <a>专业品质</a>
            <p className="ws-badge-desc">最专业的人做最专业的事，是您将精力放在您的领域，网站交给我们</p>
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
                <img src="images/banner.jpg" />
              </p>
              <a href="#">xxx官网</a>
              <p className="ws-badge-desc">最有范的设计，最前沿的技术，提供最优质的服务，领先行业最高质量</p>
            </div>
            <div className="ws-section-badge">
              <p className="ws-badge-bg">
                <img src="images/banner.jpg" />
              </p>
              <a href="#">xxx官网</a>
              <p className="ws-badge-desc">最有范的设计，最前沿的技术，提供最优质的服务，领先行业最高质量</p>
            </div>
            <div className="ws-section-badge">
              <p className="ws-badge-bg">
                <img src="images/banner.jpg" />
              </p>
              <a href="#">xxx官网</a>
              <p className="ws-badge-desc">最有范的设计，最前沿的技术，提供最优质的服务，领先行业最高质量</p>
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
                <p>周先生：18801912325</p>
              </div>
              <div className="ws-section-contact-box">
                <i className="iconfont icon-wechat" />
                <h4>微信号</h4>
                <p>ssehacker</p>
              </div>
            </div>
          </div>
        </Section>
        <Footer>

        </Footer>
      </div>
    );
  }
}

ReactDOM.render(<Page /> , document.querySelector('#app'));