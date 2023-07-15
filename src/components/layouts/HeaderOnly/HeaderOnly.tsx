import { IChildren } from '../../../types/typeScss';
import Header from '../Header/Header';

function HeaderOnly({ children }: IChildren) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
