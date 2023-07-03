// import WrapperVideos from '../../components/WrapperVideos/WrapperVideos';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

export interface IHomePageProps {}

const Home: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <div className={cx('wrapper')} style={{ paddingTop: 24, paddingBottom: 24, paddingLeft: 16, paddingRight: 16 }}>
      {/* <WrapperVideos />  */}
      HomePage
    </div>
  );
};

export default Home;
