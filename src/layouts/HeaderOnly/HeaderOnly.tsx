// import Header from '../components/Header/Header';
import { IChildren } from '../../types/typeScss';

function HeaderOnly({ children }: IChildren) {
  return (
    <div>
      {/* <Header /> */}
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
