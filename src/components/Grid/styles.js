import styled from 'styled-components';

const AllCol = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 80px;
  margin-right: auto;
  margin-left: auto;
`;

export const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  padding-top: 50px;

  padding-left: 20px;
`;

export const Col12 = styled.div`
  -ms-fliex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
`;

export const Col8 = styled.div`
  -ms-flex: 0 0 66.666667%;
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
`;

export const Col4 = styled(AllCol)`
  -ms-flex: 0 0 33.333333%;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  margin-bottom: 1.5rem;
`;

export const Col3 = styled(AllCol)`
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  max-width: 25%;
  margin-bottom: 1.5rem;
`;

export const Col = styled.div`
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -ms-flex-positive: 1;
  flex-grow: 1;
  min-width: 0;
  max-width: 100%;
`;

export const ColAuto = styled.div`
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
`;

export const Separator = styled.div`
  box-sizing: content-box;
  height: 0;
  overflow: visible;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #802DD0;
`;