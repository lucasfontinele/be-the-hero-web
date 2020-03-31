import { css } from 'styled-components';

import RobotoRegular from '../static/fonts/Roboto-Regular.ttf';
import RobotoMedium from '../static/fonts/Roboto-Medium.ttf';
import RobotoBold from '../static/fonts/Roboto-Bold.ttf';

const fonts = css`
  @font-face {
    font-family: 'robotoregular';
    src: url(${RobotoRegular}) format('ttf');
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'robotomedium';
    src: url(${RobotoMedium}) format('ttf');
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'robotobold';
    src: url(${RobotoBold}) format('ttf');
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }
`;

export default fonts;
