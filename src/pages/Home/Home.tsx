// import WrapperVideos from '../../components/WrapperVideos/WrapperVideos';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home(): React.ReactElement {
  return (
    <div className={cx('wrapper')} style={{ paddingTop: 24, paddingBottom: 24, paddingLeft: 16, paddingRight: 16 }}>
      {/* <WrapperVideos />  */}
      HomePage
    </div>
  );
}

export default Home;
