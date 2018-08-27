var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';

var roundStyle = css(['border-radius:', ';'], function (props) {
  return props.theme.global.edgeSize[props.round.size];
});

// overflow: hidden is needed for ie11
export var StyledMeter = styled.svg.withConfig({
  displayName: 'StyledMeter'
})(['max-width:100%;', ' overflow:hidden;path{transition:all 0.3s;}'], function (props) {
  return props.round && roundStyle;
}).extend(_templateObject, function (props) {
  return props.theme.meter && props.theme.meter.extend;
});