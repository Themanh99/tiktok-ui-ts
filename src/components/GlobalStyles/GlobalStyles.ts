// import { IGlobalStyles } from '../../types/typeScss';
import './GlobalStyles.scss';

type IGlobalStylesProps = {
  children: React.ReactComponentElement<any>;
};

function GlobalStyles({ children }: IGlobalStylesProps) {
  return children;
}

export default GlobalStyles;
