/**
 * Created by ssehacker on 2017/2/26.
 */
import classnames from 'classnames';

class Section extends React.Component {
  render() {
    const { className, ...other } = this.props;
    return (
      <section
        className={classnames({'neo-section': true, [`${className}`]: !!className})}
        {...other}
      >
        {this.props.children}
      </section>
    )
  }
}

export default Section;