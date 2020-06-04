import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Card = styled(motion.div).attrs({
  className: 'card'
})``;

export const CardBody = styled.div.attrs({
  className: 'card-body'
})``;

export const CardTitle = styled.div.attrs({
  className: 'card-title'
})``;

export const CardText = styled.div.attrs({
  className: 'card-text'
})``;