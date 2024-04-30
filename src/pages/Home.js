import logo from '../image/logo.png'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      {/* '../image/logo.png' */}
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default Home;