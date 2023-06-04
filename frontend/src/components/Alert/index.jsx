/* eslint-disable react/prop-types */

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Lottie from 'lottie-react'
import successAnimation from '../../assets/animations/animation-success.json'
import failedAnimation from '../../assets/animations/animation-failed.json'

function Alert({title, code}) {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Text>
          {title}
        </Card.Text>
         <Lottie loop={false} animationData={code[3]=='2'? successAnimation : failedAnimation} style={{width: '300px', height: '300px'}}/>
        <Button variant="primary">Fechar</Button>
      </Card.Body>
    </Card>
  );
}

export default Alert;