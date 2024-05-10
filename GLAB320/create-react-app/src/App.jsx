import './App.css'

function Header() {
  return (<h1>Simple React Application</h1>);
}

function Content(props) {
  return (<p style={{color: props.color}}>{props.text}</p>);
}

function Footer() {
  return (<h1>Created by Me, of course.</h1>);
}

function App() {
  return (
    <>
     <div className='blog'>
        <Header />
        <Content color="blue" text="This is my first React Application!" />
        <Content color="red" text="Wish me luck..." />
        <Content color="green" text="I think I've got it!" />
        <Footer />
      </div>
    </>
  );
}

export default App;
