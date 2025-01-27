// Här importeras och visas komponenterna
import Flowers from "./Components/Flowers"
import Footer from "./Components/Footer"
import Header from "./Components/Header"

function App() {
  return (
    <>
      <Header title={"Blommor 2025"} />
      <article style={{ maxWidth: "500px", margin: "auto" }}>
        <h2>Årets blommor</h2>
        <p>Här är en tabell över några av blommorna som jag tänkte odla i år.</p>
        <Flowers />
      </article>
      <Footer />
    </>
  )
}

export default App
