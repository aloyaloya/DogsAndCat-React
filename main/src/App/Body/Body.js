import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Icon } from '@iconify/react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  height: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: 'center'
};

export default function Body() {
  const [imgUrl, setUrl] = useState('');
  const [openCat, setOpenCat] = useState(false);
  const [openDog, setOpenDog] = useState(false);

  const callImgCat = ()=> {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(data => setUrl(data[0].url))
  }

  const callImgDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => setUrl(data.message));
  }

  const handleOpenCat = () => {
    setOpenCat(true);
    callImgCat();
  }

  const handleCloseCat = () => setOpenCat(false);

  const handleOpenDog = () => {
    setOpenDog(true);
    callImgDog();
  }
  const handleCloseDog = () => setOpenDog(false);

  return (
    <div className='Body'>
      <div>
        <Button onClick={handleOpenCat} className='btn'>
          <Icon icon="twemoji:cat-with-wry-smile" width="240" height="240" />
        </Button>
        <Modal
          open={openCat}
          onClose={handleCloseCat}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <img src={imgUrl}></img>
              <div>
                <Button onClick={callImgCat} className='box--btn'>
                  Next <Icon className='btn--icon' icon="twemoji:cat-with-wry-smile" width="30" height="30"/>
                </Button>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
      
      <div>
        <Button value='Dog' onClick={handleOpenDog} className='btn'>
          <Icon icon="twemoji:dog-face" width="260" height="260" />
        </Button>
        <Modal
          open={openDog}
          onClose={handleCloseDog}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <img src={imgUrl}></img>
              <div>
                <Button onClick={callImgDog} className='box--btn'>
                  Next <Icon className='btn--icon' icon="twemoji:dog-face" width="30" height="30" />
                </Button>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>

      <script src="https://kit.fontawesome.com/5a8c391f63.js" crossorigin="anonymous"></script>
    </div>
  );
}