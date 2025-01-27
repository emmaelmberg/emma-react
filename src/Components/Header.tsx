// Komponent för header som innehåller h1 och banner där titel skickas som en prop till komponenten
function Header(props: { title: string }) {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>{props.title}</h1>
        <img style={{ maxWidth: "100%", display: "block", margin: "auto" }} src="public/pexels-potsclam-4450701.jpg" alt="Rosa blommor" />
      </>
    )
  }
  
  export default Header
  