import React from 'react'
import './main.scss';

function App() {
  const [open, setOpen] = React.useState(false);

  const onClickClose = () => {
    setOpen(false);
  }

  const onClickOpen = () => {
    setOpen(true);
  }

  return (
    <body>
      <div className="Wrapper">
        <div className="Wrapper__inner">
        <h2 className='Wrapper__name'>Modal</h2>
        <button onClick={onClickOpen} className='Wrapper__button open-modal'>Open modal</button>
        </div>
        {
          open && (
            <div className='Modal'>
              <div className="Modal__window">
                <h3 className='Modal__title'>Modal window</h3>
                <p className='Modal__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vel voluptates, ullam rerum expedita aperiam inventore eos non impedit doloremque.</p>
                <button onClick={onClickClose} className='Modal__close close-modal'>X</button>
              </div>
            </div> 
          )
        }
      </div>
      <footer>
        &copy; Alexander Kuznecov 2023
      </footer>
    </body>    
  );
}

export default App;
