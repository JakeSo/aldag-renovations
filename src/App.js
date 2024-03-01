import "./App.css";

function App() {
  return (
    <div className="App">
      <section id="Header">
        <div className="content flex flex-col justify-center">
          <h1>Veteran Crafted Renovations</h1>
          <h4>Elevating Your Space with Honor and Expertise</h4>
        </div>
      </section>
      <section id="About">
        <div className="content flex-col md:flex-row px-10 py-5" >
            <div className="flex h-full md:w-1/3 md:align-middle px-5 justify-center">
              <img className="self-center h-full md:h-auto" alt="placeholder" src="https://picsum.photos/300"></img>
            </div>
            <div className="md:w-2/3 p-5 text-left justify-center">
              <h1 className="subheader">Renevate Today, Thrive Tomorrow</h1>
              <p>Embark on a transformative journey with Aldag Renovations, LLC, where innovation meets craftsmanship, and every renovation is a step towards a thriving future. Our commitment goes beyond revitalizing spaces; it's about creating environments that stand the test of time, enriching your present and ensuring you thrive tomorrow.</p>
              <p>At Aldag Renovations, we understand the significance of your home or workspace. It's more than just a physical structure; it's a canvas of memories, a haven of inspiration, and a reflection of your unique style. With meticulous attention to detail and a passion for design, our team transforms your vision into a reality that not only meets but exceeds your expectations.</p>
            </div>
        </div>
      </section>
      <section id="Services" className="bg-white">
      <div className="content flex flex-col">
        <h1 className="w-full text-start m-4">What we offer:</h1>
        <ul id="service-list" >
          <li>Repairs</li>
          <li>Plumbing</li>
          <li>Installations</li>
          <li>Tiling</li>
          <li>Remodeling</li>
          <li>Painting</li>
        </ul>
        <h1>And More!</h1>

      </div>
      </section>
      <section id="Contact">

      </section>
    </div>
  );
}

export default App;
