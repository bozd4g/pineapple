import React from 'react';
import './index.css';
import { Row } from 'react-flexbox-grid';
import { Fab, IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface IPaginationProps {
  totalSize?: number;
  eachPageSize?: number;
}
class Pagination extends React.Component<IPaginationProps> {
  constructor(props: IPaginationProps) {
    super(props);
  }

  render() {
    return (
      <Row className="pagination">
        <Row className="items">
          <IconButton className="arrow">
            <FontAwesomeIcon icon={faChevronLeft} fixedWidth />
          </IconButton>

          <Fab className="active">1</Fab>
          <Fab>2</Fab>
          <Fab>3</Fab>

          <IconButton className="arrow">
            <FontAwesomeIcon icon={faChevronRight} fixedWidth />
          </IconButton>
        </Row>
      </Row>
    );
  }
}

export default Pagination;
